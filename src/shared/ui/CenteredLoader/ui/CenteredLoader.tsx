import { Box, CircularProgress } from '@mui/material'

import styles from './CenteredLoader.styles'

export const CenteredLoader = () => (
  <Box component={'i'} sx={styles.loaderContainerStyle}>
    <CircularProgress />
  </Box>
)
