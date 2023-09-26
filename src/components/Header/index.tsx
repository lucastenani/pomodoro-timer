import { useContext } from 'react'
import { Scroll, Sun, Timer } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import logoIcon from '../../assets/logo.svg'
import { HeaderContainer, LogoAndThemeToggle } from './styles'
import { SelectedThemeContext } from '../../contexts/ThemeContext'

export function Header() {
  const { toggleTheme } = useContext(SelectedThemeContext)

  return (
    <HeaderContainer>
      <LogoAndThemeToggle>
        <img src={logoIcon} alt="Two triangles that form the logo" />
        <button title="changeTheme" onClick={toggleTheme}>
          <Sun size={24} />
        </button>
      </LogoAndThemeToggle>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
