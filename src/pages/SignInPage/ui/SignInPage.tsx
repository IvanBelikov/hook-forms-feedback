import { Box, Link } from '@mui/material'
import styles from './SignInPage.styles'

import { SignInForm, useUserContext } from '@base/entities/auth'

import { Navigate, useNavigate } from 'react-router'
import { ROUTES } from '@base/shared/constants'

export const SignInPage = () => {
  const user = useUserContext()
  const navigate = useNavigate()

  const handleCick = () => navigate(ROUTES.PUBLIC.SIGNUP.PATH)

  if (user) {
    return <Navigate to={ROUTES.PROTECTED.APP.PATH} />
  }

  return (
    <Box component={'section'}>
      <Box sx={styles.signInFormContainerStyles}>
        <h2>Enter the system</h2>
        <Box sx={styles.signInFormStyles}>
          <SignInForm />
        </Box>
        <Link component={'button'} variant={'body2'} onClick={handleCick}>
          New to the system? Register an account
        </Link>
      </Box>
    </Box>
  )
}
