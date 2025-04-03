import { Button, Box } from '@mui/material'
import { useNavigate } from 'react-router'

import { ApplicationsList } from '@base/widgets/applications'
import { ROUTES } from '@base/shared/constants'

export const MainAppPage = () => {
  const navigate = useNavigate()

  const handleClick = () => navigate(ROUTES.PROTECTED.APPLICATION.PATH)

  return (
    <Box sx={{ mt: 5 }}>
      <Button variant={'contained'} onClick={handleClick}>
        Create application
      </Button>
      <h2>Applications</h2>
      <ApplicationsList />
    </Box>
  )
}
