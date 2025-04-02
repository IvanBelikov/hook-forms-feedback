import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material'

import styles from './SignUpForm.styles'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpSchema, SignUpType } from './SignUpForm.schema'

import { useSignUp } from '../../model'

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  })

  const { mutate, error: fetchError, isPending } = useSignUp()

  const onSubmit = (data: SignUpType) => mutate(data)

  return (
    <Box component={'form'} onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        fullWidth
        autoFocus
        label={'Email'}
        variant={'outlined'}
        margin={'normal'}
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
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        fullWidth
        label={'Verify password'}
        type={'password'}
        variant={'outlined'}
        margin={'normal'}
        {...register('verifyPassword')}
        error={!!errors.verifyPassword}
        helperText={errors.verifyPassword?.message}
      />
      <Button
        type={'submit'}
        variant={'contained'}
        startIcon={isPending ? <CircularProgress size={20} /> : null}
        fullWidth
      >
        {isPending ? 'Sign up...' : 'Sign up'}
      </Button>
      {fetchError && (
        <Typography sx={styles.errorTypographyStyles} component={'p'}>
          {fetchError.message}
        </Typography>
      )}
    </Box>
  )
}
