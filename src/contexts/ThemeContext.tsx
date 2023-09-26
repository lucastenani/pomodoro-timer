import { ReactNode, createContext, useState } from 'react'
import { defaultTheme } from '../styles/themes/default'
import { lightTheme } from '../styles/themes/light'

interface SelectedThemeContextType {
  selectedTheme: typeof defaultTheme
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
      selectedTheme.title === 'light' ? defaultTheme : lightTheme,
    )
  }

  return (
    <SelectedThemeContext.Provider value={{ selectedTheme, toggleTheme }}>
      {children}
    </SelectedThemeContext.Provider>
  )
}
