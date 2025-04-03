import { useQuery } from '@tanstack/react-query'
import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore/lite'

import { db } from '@base/shared/lib/firebase'
import { COLLECTIONS } from '@base/shared/constants'

import { ApplicationDTO } from './types'

export const useAppliactionsList = () =>
  useQuery({
    queryKey: ['applicationsList'],
    queryFn: () =>
      new Promise<ApplicationDTO[]>((resolve) => {
        const q = query(collection(db, COLLECTIONS.APPLICATIONS))

        console.log()
        getDocs(q)
          .then(({ docs }) =>
            docs.map(
              (doc) => ({ docId: doc.id, ...doc.data() }) as ApplicationDTO
            )
          )
          .then((data) => resolve(data))
      }),
    staleTime: 5 * 1000,
  })

export const useApplicationInfo = (docId: string) =>
  useQuery({
    queryKey: ['applicationInfo', docId],
    queryFn: () =>
      new Promise<ApplicationDTO>((resolve) => {
        const docRef = doc(db, COLLECTIONS.APPLICATIONS, docId)

        getDoc(docRef).then((doc) => resolve(doc.data() as ApplicationDTO))
      }),
    staleTime: 60 * 60 * 1000,
  })
