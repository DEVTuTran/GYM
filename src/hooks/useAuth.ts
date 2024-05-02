import { useEffect, useState } from 'react'
import { Auth, Hub } from 'aws-amplify'

import { CognitoUser } from 'amazon-cognito-identity-js'
import { HubCapsule } from '@aws-amplify/core'
import { useAppDispatch, useAppSelector } from 'stores/hooks'
import { ENDPOINT } from 'constants/endpoint'
import { getAccountScopes, idScopesSelector } from 'stores/reduxSlices/authSlice'

export interface UseAuthHookResponse {
  currentUser: CognitoUser | null
  currentUserId: string | null
  signIn: () => void
  signOut: () => void
  isLoggingIn: boolean
}

const getCurrentUser = async (): Promise<CognitoUser | null> => {
  try {
    return await Auth.currentAuthenticatedUser()
  } catch (error) {
    console.log('Failed to get current user: ', error)
    // currentAuthenticatedUser throws an Error if not signed in
    return null
  }
}

const getAccessToken = async () => {
  try {
    return (await Auth.currentSession())?.getAccessToken()?.getJwtToken()
  } catch (error: any) {
    console.log('Failed to get access token: ', error, error?.statusCode, error?.status_code)
    // login again if refresh token is expired
    if (error?.code === 'NotAuthorizedException') {
      await logoutManually()
    }
    return null
  }
}

const getIdToken = async () => {
  try {
    return (await Auth.currentSession())?.getIdToken()?.getJwtToken()
  } catch (error: any) {
    console.log('Failed to get id token: ', error, error?.statusCode, error?.status_code)
    // login again if refresh token is expired
    if (error?.code === 'NotAuthorizedException') {
      await logoutManually()
    }
    return null
  }
}

const useIdScopes = () => {
  const scopes = useAppSelector(idScopesSelector)
  let [level, permission, vendorId, companyId, siteId]: string[] = []
  if (scopes) {
    ;[level, permission, vendorId, companyId, siteId] = scopes[0].split('.')
  }

  return { level, permission, vendorId, companyId, siteId }
}

/**
 * Logout manually and redirect to login page.
 */
const logoutManually = async () => {
  localStorage.clear()
  window.location.replace(ENDPOINT.LOGIN)
}

const getCurrentUserId = (currentUser: any): string | null => {
  if (!currentUser) return null
  return JSON.parse(currentUser?.attributes?.identities ?? '[]')?.[0]?.userId
}

const useAuth = (): UseAuthHookResponse => {
  const dispatch = useAppDispatch()
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<CognitoUser | null>(null)
  const currentUserId = getCurrentUserId(currentUser)

  useEffect(() => {
    const updateUser = async (capsule?: HubCapsule) => {
      // Check signIn event to prevent App.tsx (Routes.tsx) rerender when logging out
      const event = capsule?.payload?.event
      if (event === 'signIn') {
        setIsLoggingIn(true)
      }
      const currentUser = await getCurrentUser()
      setCurrentUser(currentUser)
      if (event === 'signIn') {
        if (currentUser) {
          await dispatch(getAccountScopes(getCurrentUserId(currentUser) as string))
        }
        setIsLoggingIn(false)
      }
    }
    const hubListenerEvent = Hub.listen('auth', updateUser) // listen for login/signup events
    updateUser() // check manually the first time because we won't get a Hub event

    return () => hubListenerEvent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Use customize provider (OpenID)
  const signIn = () => Auth.federatedSignIn({ provider: 'customProvider' } as any)

  const signOut = () => Auth.signOut()

  return { currentUser, currentUserId, signIn, signOut, isLoggingIn }
}

export default useAuth
export { getCurrentUser, getAccessToken, getIdToken, logoutManually, useIdScopes }
