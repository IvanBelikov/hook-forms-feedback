import { Box, Link } from '@mui/material'

import styles from './SignUpPage.styles'

import { Navigate, useNavigate } from 'react-router'

import { SignUpForm, useUserContext } from '@base/entities/auth'
import { ROUTES } from '@base/shared/constants'

export const SignUpPage = () => {
  const user = useUserContext()
  const navigate = useNavigate()

  if (user) {
    return <Navigate to={ROUTES.PROTECTED.APP.PATH} />
  }

  const handleCick = () => navigate(ROUTES.PUBLIC.SIGNIN.PATH)

  return (
    <Box component={'section'}>
      <Box sx={styles.signUpFormContainerStyles}>
        <h2>Register an account</h2>
        <Box sx={styles.signUpFormStyles}>
          <SignUpForm />
        </Box>
        <Link component={'button'} variant={'body2'} onClick={handleCick}>
          Already have an account? Sign In
        </Link>
      </Box>
    </Box>
  )
}
