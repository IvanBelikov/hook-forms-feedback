import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'

const loaderContainerStyle: SxProps<Theme> = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default { loaderContainerStyle }
