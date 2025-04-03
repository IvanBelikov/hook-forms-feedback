import { Fragment, useState } from 'react'

import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Toolbar,
  Link,
} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'

import styles from './MainHeader.styles'

import { useSignOut, useUserContext } from '@base/entities/auth'
import { ThemeSwitcher } from '@base/shared/ui/ThemeSwitcher'
import { useNavigate } from 'react-router'
import { ROUTES } from '@base/shared/constants'

export const MainHeader = () => {
  const navigate = useNavigate()

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const { mutate: signOut } = useSignOut()
  const user = useUserContext()

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleSignOut = () => signOut()

  const handleHomeClick = () => navigate(ROUTES.PUBLIC.HOME.PATH)

  return (
    <AppBar position={'static'}>
      <Container maxWidth={'xl'}>
        <Toolbar disableGutters sx={styles.toolbarStyles}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AdbIcon sx={styles.iconStyles} />
            <Link
              sx={{ color: '#ffffff' }}
              component={'button'}
              variant={'h6'}
              underline={'none'}
              onClick={handleHomeClick}
            >
              Science Conference
            </Link>
          </Box>

          <Box sx={styles.toolTipContainerStyles}>
            <ThemeSwitcher />
            {user && (
              <Fragment>
                <Tooltip title={'Open settings'}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.email?.charAt(0) || 'Anonymus'}>
                      {user.email?.charAt(0) || 'A'}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={styles.menuStyles}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleSignOut}>
                    <Typography sx={styles.menuItemStyles}>Sign out</Typography>
                  </MenuItem>
                </Menu>
              </Fragment>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
