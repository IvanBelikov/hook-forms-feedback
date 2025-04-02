import { SxProps, Theme } from '@mui/material'

const signUpFormContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  mt: '60px',
}

const signUpFormStyles: SxProps<Theme> = {
  maxWidth: '400px',
}

export default { signUpFormContainerStyles, signUpFormStyles }
