import { SxProps, Theme } from '@mui/material'

const signInFormContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  mt: '60px',
}

const signInFormStyles: SxProps<Theme> = {
  maxWidth: '400px',
}

export default { signInFormContainerStyles, signInFormStyles }
