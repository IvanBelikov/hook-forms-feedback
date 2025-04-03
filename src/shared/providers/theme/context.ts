import { createContext, useContext } from 'react'

import { ThemeContextType } from './context.types'

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }

  return themeContext
}
