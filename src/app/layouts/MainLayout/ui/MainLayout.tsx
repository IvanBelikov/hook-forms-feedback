import { Container } from '@mui/material'
import { Outlet } from 'react-router'

import { MainHeader } from '@base/widgets/MainHeader'
import { Fragment } from 'react/jsx-runtime'

export const MainLayout = () => (
  <Fragment>
    <MainHeader />
    <Container maxWidth={'lg'}>
      <Outlet />
    </Container>
  </Fragment>
)
