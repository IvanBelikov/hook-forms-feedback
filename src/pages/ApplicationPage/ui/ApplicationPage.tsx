import { ApplicationForm } from '@base/features/applications'

import { Container, Paper, Button, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router'

export const ApplicationPage = () => {
  const navigate = useNavigate()
  const handleBackButton = () => navigate(-1)

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Button
          sx={{ mb: 2 }}
          onClick={handleBackButton}
          startIcon={<ArrowBack />}
          variant="outlined"
        >
          Back
        </Button>
        <Typography variant="h4" component="h1">
          New conference report application
        </Typography>
        <ApplicationForm />
      </Paper>
    </Container>
  )
}
