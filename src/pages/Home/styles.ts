import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const baseButton = styled.button`
  width: 100%;
  border: 0rem;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;
  font-weight: bold;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => {
    if (props.theme.mode === 'lightTheme') {
      return props.theme['gray-100']
    } else {
      return props.theme['gray-800']
    }
  }};
`

export const StartCountdownButton = styled(baseButton)`
  background-color: ${(props) => props.theme['green-500']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
export const InterruptCountdownButton = styled(baseButton)`
  background-color: ${(props) => props.theme['red-500']};

  &:hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
