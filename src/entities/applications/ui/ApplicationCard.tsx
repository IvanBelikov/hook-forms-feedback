import { FC } from 'react'

import {
  Box,
  Paper,
  Typography,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Grid,
  Container,
} from '@mui/material'
import { Email, Work, School, Category } from '@mui/icons-material'

import { ApplicationCardProps } from './ApplicationCard.types'

export const ApplicationCard: FC<ApplicationCardProps> = ({ application }) => {
  const {
    fullName,
    email,
    jobTitle,
    affiliation,
    reportTitle,
    section,
    annotation,
    scientificResult,
    choiceDescription,
    authorsList,
  } = application

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {reportTitle}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <Chip label={section} icon={<Category />} sx={{ ml: 1 }} />
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={3}>
          <Grid>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              Report info
            </Typography>

            <List dense>
              <ListItem>
                <ListItemText
                  primary="Full name"
                  secondary={
                    <Typography variant="body2" color="text.primary">
                      {fullName}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Email"
                  secondary={
                    <Box
                      component={'i'}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Email fontSize="small" sx={{ mr: 1 }} />
                      {email}
                    </Box>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Job Title"
                  secondary={
                    <Box
                      component={'i'}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Work fontSize="small" sx={{ mr: 1 }} />
                      {jobTitle}
                    </Box>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Orgranization"
                  secondary={
                    <Box
                      component={'i'}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <School fontSize="small" sx={{ mr: 1 }} />
                      {affiliation}
                    </Box>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ mt: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Annotation
            </Typography>
            <Typography variant="body1" component={'p'}>
              {annotation}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Scientific results
            </Typography>
            <Typography variant="body1" component={'p'}>
              {scientificResult}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Choice decsription
            </Typography>
            <Typography variant="body1" component={'p'}>
              {choiceDescription}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Authors ({authorsList.length})
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {authorsList.map((author, index) => (
              <Chip
                key={index}
                avatar={<Avatar>{author.charAt(0)}</Avatar>}
                label={author}
                variant="outlined"
              />
            ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}
