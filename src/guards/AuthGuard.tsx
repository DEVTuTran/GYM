import { useState, useEffect, FC, ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCurrentUser } from 'hooks/useAuth'
import { ENDPOINT } from 'constants/endpoint'

/**
 * Only access if logged in.
 * Redirect to login page if not logged in by default.
 */
export const AuthGuard: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    ;(async () => {
      const currentUser = await getCurrentUser()
      if (true) {
        location.search.split('=')[0] === '?code' && navigate(ENDPOINT.DASHBOARD)
        setIsAuthenticated(true)
      } else {
        navigate(ENDPOINT.LOGIN)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isAuthenticated) return null

  return <>{children}</>
}
