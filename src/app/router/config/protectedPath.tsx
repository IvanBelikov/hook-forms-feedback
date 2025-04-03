import { lazy } from 'react'

import { RouteObject } from 'react-router'
import { ROUTES } from '@base/shared/constants'

import { AuthMiddleware } from '@base/entities/auth'

import MainLayout from '@base/app/layouts/MainLayout'
const ApplicationPage = lazy(() => import('@base/pages/ApplicationPage'))
const MainAppPage = lazy(() => import('@base/pages/MainAppPage'))
const ApplicationCardPage = lazy(
  () => import('@base/pages/ApplicationCardPage')
)

export const protectedPath: RouteObject = {
  path: ROUTES.PROTECTED.PATH,
  Component: MainLayout,
  children: [
    {
      path: ROUTES.PROTECTED.PATH,
      Component: AuthMiddleware,
      children: [
        {
          path: ROUTES.PROTECTED.APP.PATH,
          Component: MainAppPage,
        },
        {
          path: ROUTES.PROTECTED.APPLICATION.PATH,
          Component: ApplicationPage,
        },
        {
          path: ROUTES.PROTECTED.APPLICATIONCARD.PATH,
          Component: ApplicationCardPage,
        },
      ],
    },
  ],
}
