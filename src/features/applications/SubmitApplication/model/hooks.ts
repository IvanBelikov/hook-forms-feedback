import { useMutation } from '@tanstack/react-query'
import { addDoc, collection } from 'firebase/firestore/lite'

import { Application } from '@base/entities/applications'

import { queryClient } from '@base/shared/lib/queryClient'
import { db } from '@base/shared/lib/firebase'
import { COLLECTIONS } from '@base/shared/constants'

export const useCreateApplication = () =>
  useMutation({
    mutationKey: ['createApplication'],
    mutationFn: (application: Omit<Application, 'docId' | 'uid'>) =>
      addDoc(collection(db, COLLECTIONS.APPLICATIONS), {
        ...application,
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['applicationsList'] }),
  })
