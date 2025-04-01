import { Fragment } from 'react'

import { RouterProvider } from 'react-router'
import { router } from './router'

import { ThemeProvider } from '@base/shared/providers/theme'
import { CssBaseline } from '@mui/material'

export const App = () => {
  return (
    <Fragment>
      <ThemeProvider>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </Fragment>
  )
}
