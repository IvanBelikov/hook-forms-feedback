import { useState } from 'react'

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

export const MainHeader = () => {
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

  return (
    <AppBar position={'static'}>
      <Container maxWidth={'xl'}>
        <Toolbar disableGutters sx={styles.toolbarStyles}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AdbIcon sx={styles.iconStyles} />
            <Link variant={'h6'} underline={'none'} color={'textPrimary'}>
              Science Conference
            </Link>
          </Box>
          {user && (
            <Box sx={styles.toolTipContainerStyles}>
              <ThemeSwitcher />
              <Tooltip title={'Open settings'}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.email?.charAt(0) || 'Anonymus'}>
                    {user.email?.charAt(0) || 'A'}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                sx={styles.menuStyles}
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
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
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
