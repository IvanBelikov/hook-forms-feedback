import { RouterProvider } from 'react-router'
import { router } from './router'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@base/shared/lib/queryClient'

import { ThemeProvider } from '@base/shared/providers/theme'
import { UserAuthProvider } from '@base/entities/auth'
import { CssBaseline } from '@mui/material'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UserAuthProvider>
          <CssBaseline />
          <RouterProvider router={router}></RouterProvider>
        </UserAuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
