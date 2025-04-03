import { Fragment } from 'react/jsx-runtime'
import { useNavigate } from 'react-router'
import { FC } from 'react'

import {
  Divider,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'

import { ROUTES } from '@base/shared/constants'

import { ApplicationListItemProps } from './ApplicatonListItem.types'

export const ApplicationListItem: FC<ApplicationListItemProps> = ({
  application,
}) => {
  const navigate = useNavigate()

  const handleClick = () =>
    navigate(`${ROUTES.PROTECTED.APPLICATION.PATH}/${application.docId}`)
  return (
    <Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemText>
          <Typography variant={'subtitle2'}>{application.fullName}</Typography>
          <Typography variant={'h5'}>{application.reportTitle}</Typography>
          <Typography variant={'caption'} color={'textSecondary'}>
            {application.affiliation}
          </Typography>
        </ListItemText>
      </ListItemButton>
      <Divider component={'li'} />
    </Fragment>
  )
}
