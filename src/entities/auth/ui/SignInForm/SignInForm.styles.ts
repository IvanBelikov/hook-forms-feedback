import { SxProps, Theme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const onSubmitStyles: SxProps<Theme> = { mt: 3, mb: 2 }
const errorTypographyStyles: SxProps<Theme> = { color: red[300] }

export default { onSubmitStyles, errorTypographyStyles }
