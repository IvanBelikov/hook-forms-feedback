import { Navigate, Outlet } from 'react-router'

import { auth } from '@base/shared/lib/firebase'
import { ROUTES } from '@base/shared/constants'

export const AuthMiddleware = () => {
  const user = auth.currentUser

  if (!user) {
    return <Navigate to={ROUTES.PUBLIC.SIGNIN.PATH} />
  }

  return <Outlet />
}
