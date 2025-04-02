import { Box, Link } from '@mui/material'
import styles from './SignInPage.styles'

import { SignInForm } from '@base/entities/auth'

import { useNavigate } from 'react-router'
import { ROUTES } from '@base/shared/constants'

export const SignInPage = () => {
  const navigate = useNavigate()

  const handleCick = () => navigate(ROUTES.PUBLIC.SIGNUP.PATH)

  return (
    <Box component={'section'}>
      <Box sx={styles.signInFormContainerStyles}>
        <h1>Enter the system</h1>
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
