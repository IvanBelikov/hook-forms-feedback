import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'

const toolbarStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
}

const iconStyles: SxProps<Theme> = {
  display: { xs: 'none', md: 'flex' },
  mr: 1,
}

const toolTipContainerStyles: SxProps<Theme> = {
  display: 'flex',
  gap: '8px',
}

const menuStyles: SxProps<Theme> = { mt: '45px' }

const menuItemStyles: SxProps<Theme> = { textAlign: 'center' }

export default {
  toolbarStyles,
  iconStyles,
  toolTipContainerStyles,
  menuItemStyles,
  menuStyles,
}
