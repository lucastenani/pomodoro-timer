import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 1rem;
  border: 0;
  border-radius: 8px;
  color: #fff;
  background-color: ${(props) => props.theme.primary};

  /* ${(props) => css`
    background-color: ${buttonVariants[props.variant]};
  `} */
`;
