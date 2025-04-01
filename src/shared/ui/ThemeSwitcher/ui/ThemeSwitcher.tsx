import { IconButton } from '@mui/material'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import { useThemeContext, ThemeTypeEnum } from '@base/shared/providers/theme'

export const ThemeSwitcher = () => {
  const themeContext = useThemeContext()

  const switcherType =
    themeContext.mode === ThemeTypeEnum.dark ? (
      <DarkModeIcon />
    ) : (
      <LightModeIcon />
    )

  const handleClick = () => themeContext.toggleTheme()

  return <IconButton onClick={handleClick}>{switcherType}</IconButton>
}
