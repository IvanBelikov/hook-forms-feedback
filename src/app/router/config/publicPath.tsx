import { lazy, Suspense } from 'react'

import { RouteObject } from 'react-router'
import { ROUTES } from '@base/shared/constants'

import MainLayout from '@base/app/layouts/MainLayout'
const SignInPage = lazy(() => import('@base/pages/SignInPage'))
const SignUpPage = lazy(() => import('@base/pages/SignUpPage'))
const HomePage = lazy(() => import('@base/pages/HomePage'))

export const publicPath: RouteObject = {
  path: ROUTES.PUBLIC.PATH,
  element: (
    <Suspense fallback={<p>Loading...</p>}>
      <MainLayout />
    </Suspense>
  ),
  children: [
    {
      path: ROUTES.PUBLIC.HOME.PATH,
      Component: HomePage,
    },
    {
      path: ROUTES.PUBLIC.SIGNIN.PATH,
      Component: SignInPage,
    },
    {
      path: ROUTES.PUBLIC.SIGNUP.PATH,
      Component: SignUpPage,
    },
  ],
}
