import {
  Button,
  TextField,
  Box,
  CircularProgress,
  Typography,
} from '@mui/material'

import styles from './SignInForm.styles.ts'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { signInSchema, signInType } from './SignInForm.schema.ts'
import { useSignIn } from '../../model'

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  })

  const { mutate, isPending, error } = useSignIn()

  const onSubmit = (data: signInType) => {
    mutate(data)
  }

  return (
    <Box component={'form'} onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        fullWidth
        autoFocus
        label={'Email'}
        variant={'outlined'}
        margin={'normal'}
        disabled={isPending}
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        fullWidth
        label={'Password'}
        type={'password'}
        variant={'outlined'}
        margin={'normal'}
        disabled={isPending}
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <Button
        fullWidth
        type={'submit'}
        variant={'contained'}
        sx={styles.onSubmitStyles}
        disabled={isPending}
        startIcon={isPending ? <CircularProgress size={20} /> : null}
      >
        {isPending ? 'Sign in...' : 'Sign in'}
      </Button>
      {error && (
        <Typography sx={styles.errorTypographyStyles} component={'p'}>
          {error.message}
        </Typography>
      )}
    </Box>
  )
}
