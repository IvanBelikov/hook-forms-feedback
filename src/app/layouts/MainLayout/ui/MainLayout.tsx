import { Container, Box, CircularProgress } from '@mui/material'
import { Outlet } from 'react-router'

import { MainHeader } from '@base/widgets/MainHeader'
import { Fragment } from 'react/jsx-runtime'
import { Suspense } from 'react'

export const MainLayout = () => (
  <Fragment>
    <MainHeader />
    <Suspense fallback={<CircularProgress />}>
      <Box component={'main'}>
        <Container maxWidth={'lg'}>
          <Outlet />
        </Container>
      </Box>
    </Suspense>
  </Fragment>
)
