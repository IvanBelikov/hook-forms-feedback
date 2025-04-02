import { useState } from 'react'
import { Navigate, Outlet } from 'react-router'

import { onAuthStateChanged, User } from 'firebase/auth'

import { Typography } from '@mui/material'

import { ROUTES } from '@base/shared/constants'
import { auth } from '@base/shared/lib/firebase'

import { UserContext } from '../contexts'

export const AuthMiddleware = () => {
  const [user, setUser] = useState<User | null>()

  onAuthStateChanged(auth, (user) => setUser(user))

  if (user === null) {
    return <Navigate to={ROUTES.PUBLIC.SIGNIN.PATH} />
  }

  if (user === undefined) {
    return <Typography component={'p'}>Auth...</Typography>
  }

  return (
    <UserContext.Provider value={user}>
      <Outlet />
    </UserContext.Provider>
  )
}
