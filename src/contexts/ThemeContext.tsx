import { ReactNode, createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { lightTheme } from '../styles/themes/light'

interface SelectedThemeContextType {
  toggleTheme: () => void
}

export const SelectedThemeContext = createContext(
  {} as SelectedThemeContextType,
)

interface SelectedThemeContextProviderProps {
  children: ReactNode
}

export function SelectedThemeProvider({
  children,
}: SelectedThemeContextProviderProps) {
  const [selectedTheme, setSelectedTheme] = useState(defaultTheme)

  function toggleTheme() {
    setSelectedTheme(
      selectedTheme.title === 'default' ? lightTheme : defaultTheme,
    )
  }

  return (
    <SelectedThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </SelectedThemeContext.Provider>
  )
}
