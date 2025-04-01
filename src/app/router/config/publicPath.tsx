import { lazy } from 'react'
import { ROUTES } from '@base/shared/constants'
import { MainLayout } from '@base/app/layouts/MainLayout'

import { RouteObject } from 'react-router'

const FeedbackPage = lazy(() => import('@base/pages/FeedbackPage'))
const SignInPage = lazy(() => import('@base/pages/SignInPage'))

export const publicPath: RouteObject = {
  path: ROUTES.PUBLIC.PATH,
  Component: MainLayout,
  children: [
    {
      path: ROUTES.PUBLIC.HOME.PATH,
      Component: FeedbackPage,
    },
    {
      path: ROUTES.PUBLIC.SIGNIN.PATH,
      Component: SignInPage,
    },
  ],
}
