import { createContext, useContext } from 'react'

import { User } from 'firebase/auth'

export const UserContext = createContext<User | null>(null)

export const useUserContext = () => {
  const userContext = useContext(UserContext)

  if (userContext === undefined) {
    throw new Error('useUserContext must be used within a UserProvider')
  }

  return userContext
}
