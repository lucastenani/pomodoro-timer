import { HeaderContainer } from './styles'
import logoIcon from '../../assets/logo.svg'
import { Scroll, Timer } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIcon} alt="Two triangles that form the logo" />
      <nav>
        <a href="">
          <Timer size={24} />
        </a>
        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
