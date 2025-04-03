import { useState, useEffect, ReactNode } from 'react'

import { onAuthStateChanged, User } from 'firebase/auth'

import { auth } from '@base/shared/lib/firebase'

import { UserContext } from '../contexts'
import { CenteredLoader } from '@base/shared/ui'

export const UserAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user))

    return () => unsubscribe()
  }, [])

  if (user === undefined) {
    return <CenteredLoader />
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
