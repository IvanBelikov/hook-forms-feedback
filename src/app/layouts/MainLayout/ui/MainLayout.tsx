import { Fragment } from 'react/jsx-runtime'
import { Suspense } from 'react'

import { Outlet } from 'react-router'

import { Container, Box } from '@mui/material'

import { MainHeader } from '@base/widgets/MainHeader'
import { CenteredLoader } from '@base/shared/ui'

export const MainLayout = () => (
  <Fragment>
    <MainHeader />
    <Box component={'main'}>
      <Container maxWidth={'lg'}>
        <Suspense fallback={<CenteredLoader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  </Fragment>
)
