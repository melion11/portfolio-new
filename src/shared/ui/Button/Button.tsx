import {ButtonHTMLAttributes, FC} from 'react';
import styled, { css } from 'styled-components';
import {theme} from '../../../styles/theme';

export const enum ThemeButton {
    CLEAR = 'clear',
    STYLED = 'styled'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    themeBtn?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({ className, children, themeBtn, ...restProps }) => {
    return (
        <ButtonWrapper className={className} themeBtn={themeBtn} {...restProps}>
            {children}
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.button<ButtonProps>`
  cursor: pointer;

  ${({themeBtn}) =>
          themeBtn === ThemeButton.CLEAR &&
          css`
            padding: 0;
            margin: 0;
            border: none;
            outline: none;
            background: none;
          `}

  ${({themeBtn}) =>
          themeBtn === ThemeButton.STYLED &&
          css`
            border-radius: 8px;
            background-color: var(--bg-color-dark);
            padding: 16px 8px;
            text-align: center;
            color: var(--secondary-color);
            font-weight: var(--font-weight-medium);
            border: 1px solid #A0A0A1;
            transition: ${theme.animations.transition};

            &:hover {
              color: var(--primary-color);
              border: 1px solid var(--primary-color);
            }
          `}

`;

