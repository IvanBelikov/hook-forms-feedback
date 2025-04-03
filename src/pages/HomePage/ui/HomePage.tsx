import { Fragment } from 'react/jsx-runtime'
import { useNavigate } from 'react-router'

import { Button } from '@mui/material'

import { ROUTES } from '@base/shared/constants'

export const HomePage = () => {
  const navigate = useNavigate()

  const handleClick = () => navigate(ROUTES.PROTECTED.APP.PATH)

  return (
    <Fragment>
      <h1>Home Page</h1>
      <Button variant={'contained'} onClick={handleClick}>
        Go to app
      </Button>
    </Fragment>
  )
}
