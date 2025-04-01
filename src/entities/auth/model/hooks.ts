import { useQuery } from '@tanstack/react-query'

import { onAuthStateChanged, User } from 'firebase/auth'

import { auth } from '@base/shared/lib/firebase'

export const useAuth = () =>
  useQuery<User | null>({
    queryKey: ['auth'],
    queryFn: () =>
      new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => resolve(user))

        return () => unsubscribe()
      }),
    staleTime: Infinity,
    initialData: null,
  })
