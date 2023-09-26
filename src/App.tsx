import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import {
  SelectedThemeContext,
  SelectedThemeProvider,
} from './contexts/ThemeContext'

export function App() {
  return (
    <SelectedThemeProvider>
      <AppContent />
    </SelectedThemeProvider>
  )
}

function AppContent() {
  const { selectedTheme } = useContext(SelectedThemeContext)

  return (
    <ThemeProvider theme={selectedTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
