import { ReactNode, useState } from 'react'

import { ThemeTypeEnum } from './context.types'
import { ThemeContext } from './context'

import { darkThemeConfig, lightThemeConfig } from './config'

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeTypeEnum>(ThemeTypeEnum.dark)

  const theme = createTheme(
    mode === ThemeTypeEnum.light ? lightThemeConfig : darkThemeConfig
  )
  const toggleTheme = () =>
    setMode((prev) =>
      prev === ThemeTypeEnum.light ? ThemeTypeEnum.dark : ThemeTypeEnum.light
    )

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
