import {ButtonHTMLAttributes, FC} from 'react';
import styled, { css } from 'styled-components';

export const enum ThemeButton {
    CLEAR = 'clear',
    STYLED = 'styled'
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

  ${({theme}) =>
          theme === ThemeButton.CLEAR &&
          css`
            padding: 0;
            margin: 0;
            border: none;
            outline: none;
            background: none;
          `}

  ${({theme}) =>
          theme === ThemeButton.STYLED &&
          css`
            border-radius: 8px;
            background-color: #191919;
            padding: 16px 8px;
            text-align: center;
            color: #A7A7A7;
            font-weight: 500;
            border: 1px solid #A0A0A1;
          `}

`;

