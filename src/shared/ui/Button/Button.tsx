import {ButtonHTMLAttributes, FC} from 'react';
import styled, { css } from 'styled-components';

export const enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({ className, children, theme, ...restProps }) => {
    return (
        <ButtonWrapper className={className} theme={theme} {...restProps}>
            {children}
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.button<ButtonProps>`
  cursor: pointer;

  ${({ theme }) =>
    theme === ThemeButton.CLEAR &&
    css`
      padding: 0;
      margin: 0;
      border: none;
      outline: none;
      background: none;
    `}
`;

