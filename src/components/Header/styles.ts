import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`

export const LogoAndThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  button {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    color: ${(props) => props.theme['gray-100']};

    border: 0;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    cursor: pointer;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }
  }
`
