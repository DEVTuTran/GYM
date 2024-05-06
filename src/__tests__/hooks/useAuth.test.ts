import { renderHook } from '@testing-library/react-hooks'
import { Auth, Hub } from 'aws-amplify'
import useAuth, { getCurrentUser, getAccessToken, getIdToken, logoutManually, useIdScopes } from 'hooks/useAuth'

describe('useAuth', () => {
  // afterEach(() => {
  //   jest.clearAllMocks()
  // })
  test('signIn calls federatedSignIn', () => {
    const { result } = renderHook(() => useAuth())
    result.current.signIn()
    expect(Auth.federatedSignIn).toHaveBeenCalledWith({ provider: 'customProvider' })
  })

  test('signOut calls signOut', () => {
    const { result } = renderHook(() => useAuth())
    result.current.signOut()
    expect(Auth.signOut).toHaveBeenCalled()
  })

  //   test('getCurrentUser calls currentAuthenticatedUser', async () => {
  //     const mockUser = { username: 'testUser' }
  //     Auth.currentAuthenticatedUser.mockResolvedValueOnce(mockUser)
  //     const user = await getCurrentUser()
  //     expect(user).toEqual(mockUser)
  //     expect(Auth.currentAuthenticatedUser).toHaveBeenCalled()
  //   })

  // Similarly, write tests for getAccessToken, getIdToken, logoutManually, and useIdScopes
})
