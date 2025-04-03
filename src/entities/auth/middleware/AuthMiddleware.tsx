import { Outlet, Navigate } from 'react-router'

import { ROUTES } from '@base/shared/constants'
import { useUserContext } from '../contexts'

export const AuthMiddleware = () => {
  const user = useUserContext()

  if (!user) {
    return <Navigate to={ROUTES.PUBLIC.SIGNIN.PATH} />
  }
  return <Outlet />
}
