import useAuth from 'hooks/useAuth'
import { useEffect } from 'react'
import BaseLoadingBackDrop from 'components/common/BaseLoadingBackDrop'

function Login() {
  const { signIn } = useAuth()

  useEffect(() => {
    try {
      signIn()
    } catch (error) {
      console.log('Failed to login: ', error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <BaseLoadingBackDrop />
}

export default Login
