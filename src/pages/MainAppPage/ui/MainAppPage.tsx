import { ROUTES } from '@base/shared/constants'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

export const MainAppPage = () => {
  const navigate = useNavigate()

  const handleClick = () => navigate(ROUTES.PROTECTED.APPLICATION.PATH)

  return (
    <div>
      <h2>Main Page</h2>
      <Button variant={'contained'} onClick={handleClick}>
        Создать заявку
      </Button>
    </div>
  )
}
