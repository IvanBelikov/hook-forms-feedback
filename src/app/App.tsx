import { RouterProvider } from 'react-router'
import { router } from './router'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@base/shared/lib/queryClient'

import { ThemeProvider } from '@base/shared/providers/theme'
import { CssBaseline } from '@mui/material'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
