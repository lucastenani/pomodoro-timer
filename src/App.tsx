import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { Router } from './Router'
import { SelectedThemeProvider } from './contexts/ThemeContext'

import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <SelectedThemeProvider>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </SelectedThemeProvider>
  )
}
