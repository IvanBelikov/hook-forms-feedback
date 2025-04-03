import { Fragment } from 'react/jsx-runtime'
import { useNavigate, useParams } from 'react-router'

import { Box, CircularProgress, IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

import { useApplicationInfo } from '@base/entities/applications'
import { ApplicationCard } from '@base/entities/applications'

export const ApplicationCardPage = () => {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()

  if (!params.id) {
    return <h1>Документ не найден</h1>
  }

  const { data: application, isFetching } = useApplicationInfo(params.id)

  if (isFetching) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Fragment>
      <IconButton
        onClick={() => navigate(-1)} // -1 возвращает на предыдущую страницу
        sx={{ mt: 2 }}
      >
        <ArrowBack />
      </IconButton>
      {application && <ApplicationCard application={application} />}
    </Fragment>
  )
}
