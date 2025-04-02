import { lazy } from 'react'

import { RouteObject } from 'react-router'
import { ROUTES } from '@base/shared/constants'

import { AuthMiddleware } from '@base/entities/auth'

import MainLayout from '@base/app/layouts/MainLayout'
const FeedbackPage = lazy(() => import('@base/pages/FeedbackPage'))
const MainAppPage = lazy(() => import('@base/pages/MainAppPage'))

export const protectedPath: RouteObject = {
  path: ROUTES.PROTECTED.PATH,
  Component: AuthMiddleware,
  children: [
    {
      path: ROUTES.PROTECTED.PATH,
      Component: MainLayout,
      children: [
        {
          path: ROUTES.PROTECTED.APP.PATH,
          Component: MainAppPage,
        },
        {
          path: ROUTES.PROTECTED.FEEDBACK.PATH,
          Component: FeedbackPage,
        },
      ],
    },
  ],
}
