import { createBrowserRouter } from 'react-router'

import { ROUTES } from '@base/shared/constants'

import { MainLayout } from '@base/app/layouts/MainLayout'
import { FeedbackPage } from '@base/pages/FeedbackPage'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME.PATH,
    Component: MainLayout,
    children: [
      {
        path: ROUTES.HOME.PATH,
        Component: FeedbackPage,
      },
    ],
  },
])
