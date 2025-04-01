export enum ThemeTypeEnum {
  light,
  dark,
}

export type ThemeContextType = {
  mode: ThemeTypeEnum
  toggleTheme: () => void
}
