import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'

const applicationsListStyle: SxProps<Theme> = {
  p: 0,
  width: '100%',
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
}

const applicationsListFetchingStyle: SxProps<Theme> = {
  ...applicationsListStyle,
  height: 500,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default { applicationsListStyle, applicationsListFetchingStyle }
