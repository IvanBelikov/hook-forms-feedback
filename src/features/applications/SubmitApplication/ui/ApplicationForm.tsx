import { useState } from 'react'
import { Navigate } from 'react-router'
import { Controller, useForm } from 'react-hook-form'

import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  CircularProgress,
} from '@mui/material'

import {
  Add,
  Delete,
  Person,
  Work,
  School,
  Email,
  Description,
  Category,
} from '@mui/icons-material'

import { zodResolver } from '@hookform/resolvers/zod'

import {
  applicationFormSchema,
  ApplicationFormValidationType,
} from './ApplicationForm.schema'

import { sectionOptions } from '../config'
import { useCreateApplication } from '../model'
import { ROUTES } from '@base/shared/constants'

export const ApplicationForm = () => {
  const [newAuthor, setNewAuthor] = useState('')

  const { mutate, isSuccess, isPending } = useCreateApplication()

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<ApplicationFormValidationType>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      section: '',
      authorsList: [],
    },
  })

  const authors = watch('authorsList')

  const handleAddAuthor = () => {
    if (newAuthor.trim() && !authors.includes(newAuthor.trim())) {
      setValue('authorsList', [...authors, newAuthor.trim()])
      setNewAuthor('')
    }
    trigger('authorsList')
  }

  const handleRemoveAuthor = (index: number) => {
    setValue(
      'authorsList',
      authors.filter((_, i) => i !== index)
    )
    trigger('authorsList')
  }

  const onSubmit = (data: ApplicationFormValidationType) => mutate(data)

  if (isSuccess) {
    return <Navigate to={ROUTES.PROTECTED.APP.PATH} />
  }

  return (
    <Box
      component="form"
      sx={{ mt: 3 }}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
        >
          <Person sx={{ mr: 1 }} /> Author info
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              {...register('fullName')}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              disabled={isPending}
              fullWidth
              label="Full name"
              required
              slotProps={{
                input: {
                  startAdornment: <Person sx={{ mr: 1 }} />,
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              disabled={isPending}
              fullWidth
              required
              label="Email"
              type="email"
              slotProps={{
                input: {
                  startAdornment: <Email sx={{ mr: 1 }} />,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              {...register('jobTitle')}
              error={!!errors.jobTitle}
              helperText={errors.jobTitle?.message}
              disabled={isPending}
              fullWidth
              required
              label="Job title"
              slotProps={{
                input: {
                  startAdornment: <Work sx={{ mr: 1 }} />,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              {...register('affiliation')}
              error={!!errors.affiliation}
              helperText={errors.affiliation?.message}
              disabled={isPending}
              fullWidth
              required
              label="Affiliation"
              slotProps={{
                input: {
                  startAdornment: <School sx={{ mr: 1 }} />,
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
        >
          <Description sx={{ mr: 1 }} /> Report info
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <TextField
              {...register('reportTitle')}
              error={!!errors.reportTitle}
              helperText={errors.reportTitle?.message}
              disabled={isPending}
              required
              fullWidth
              label="Report title"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              control={control}
              name="section"
              render={({ field, fieldState: { error } }) => (
                <FormControl fullWidth error={!!error}>
                  <InputLabel>Section</InputLabel>
                  <Select
                    {...field}
                    error={!!error}
                    disabled={isPending}
                    label="Section"
                    startAdornment={<Category sx={{ mr: 1 }} />}
                  >
                    {sectionOptions.map((section) => (
                      <MenuItem key={section} value={section}>
                        {section}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{error?.message}</FormHelperText>
                </FormControl>
              )}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              {...register('annotation')}
              error={!!errors.annotation}
              helperText={errors.annotation?.message}
              disabled={isPending}
              label="Annotation"
              fullWidth
              multiline
              required
              rows={6}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              {...register('scientificResult')}
              error={!!errors.scientificResult}
              helperText={errors.scientificResult?.message}
              disabled={isPending}
              label="Scientific result"
              required
              fullWidth
              multiline
              rows={4}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              {...register('choiceDescription')}
              error={!!errors.choiceDescription}
              helperText={errors.choiceDescription?.message}
              disabled={isPending}
              label="Choice description"
              fullWidth
              required
              multiline
              rows={3}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Authors*
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ mb: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, sm: 8 }}>
              <TextField
                label="add author"
                fullWidth
                value={newAuthor}
                disabled={isPending}
                onChange={(e) => setNewAuthor(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddAuthor()}
                error={!!errors.authorsList}
                helperText={errors.authorsList?.message}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Button
                fullWidth
                variant="outlined"
                disabled={isPending}
                startIcon={<Add />}
                onClick={handleAddAuthor}
                sx={{ height: '56px' }}
              >
                Добавить
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {authors.map((author, index) => (
            <Chip
              key={`${author}-${index}`}
              label={author}
              onDelete={() => handleRemoveAuthor(index)}
              deleteIcon={<Delete />}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button
          type="submit"
          variant="contained"
          disabled={isPending}
          startIcon={isPending ? <CircularProgress size={20} /> : null}
        >
          Submit
        </Button>
      </Box>
    </Box>
  )
}
