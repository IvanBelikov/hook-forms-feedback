import { useNavigate, Outlet } from 'react-router'

import { ROUTES } from '@base/shared/constants'
import { useUserContext } from '../contexts'
import { useEffect } from 'react'

export const AuthMiddleware = () => {
  const user = useUserContext()

  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.PUBLIC.SIGNIN.PATH)
    }
  })

  return <Outlet />
}
