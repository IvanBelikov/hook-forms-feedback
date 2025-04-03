import { useMutation } from '@tanstack/react-query'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { auth } from '@base/shared/lib/firebase'

import { CredentialsType } from './types'

export const useSignIn = () =>
  useMutation({
    mutationKey: ['signIn'],
    mutationFn: ({ email, password }: CredentialsType) =>
      signInWithEmailAndPassword(auth, email, password),
  })

export const useSignOut = () =>
  useMutation({
    mutationKey: ['signOut'],
    mutationFn: () => signOut(auth),
  })

export const useSignUp = () =>
  useMutation({
    mutationKey: ['createUser'],
    mutationFn: ({ email, password }: CredentialsType) =>
      createUserWithEmailAndPassword(auth, email, password),
  })
