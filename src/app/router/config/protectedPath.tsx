import { lazy } from 'react'

import { RouteObject } from 'react-router'

import { ROUTES } from '@base/shared/constants'
import { MainLayout } from '@base/app/layouts/MainLayout'
import { AuthMiddleware } from '@base/entities/auth'

const FeedbackPage = lazy(() => import('@base/pages/FeedbackPage'))

export const protectedPath: RouteObject = {
  path: ROUTES.PROTECTED.PATH,
  Component: MainLayout,
  children: [
    {
      path: ROUTES.PROTECTED.PATH,
      Component: AuthMiddleware,
      children: [
        {
          path: ROUTES.PROTECTED.FEEDBACK.PATH,
          Component: FeedbackPage,
        },
      ],
    },
  ],
}
