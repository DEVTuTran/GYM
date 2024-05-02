import useAuth from 'hooks/useAuth'
import { useEffect } from 'react'

import BaseLoadingBackDrop from 'components/common/BaseLoadingBackDrop'
import { useAppDispatch } from 'stores/hooks'

function LogOut() {
  const dispatch = useAppDispatch()
  const { signOut } = useAuth()

  useEffect(() => {
    try {
      dispatch({ type: 'LOGOUT' })
      signOut()
    } catch (error) {
      console.log('Failed to logout: ', error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <BaseLoadingBackDrop />
}

export default LogOut
