import { CircularProgress, List } from '@mui/material'

import styles from './AppliactionsList.styles'

import { ApplicationListItem } from '@base/entities/applications'
import { useAppliactionsList } from '@base/entities/applications'

export const ApplicationsList = () => {
  const { data: applicationsList, isFetching } = useAppliactionsList()

  if (isFetching) {
    return (
      <List sx={styles.applicationsListFetchingStyle}>
        <CircularProgress />
      </List>
    )
  }

  return (
    <List sx={styles.applicationsListStyle}>
      {applicationsList &&
        applicationsList.map((application) => (
          <ApplicationListItem
            key={application.docId}
            application={application}
          />
        ))}
    </List>
  )
}
