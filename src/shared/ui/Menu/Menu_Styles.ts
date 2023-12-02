import styled, {css} from 'styled-components';
import {Button} from '../Button/Button';
import {Link} from 'react-scroll';
import {theme} from '../../../styles/theme';

// Menu


//Desktop

const NavDesktop = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  color: var(--primary-color);
  cursor: pointer;
  transition: ${theme.animations.transition};
  
  &:hover, &.active  {
    color: var(--color-accent-500);
  }

  & > svg {
    &:hover {
      fill: var(--color-accent-300);
    }
  }
`

//Mobile

const NavMobile = styled.nav`
`

const MobileMenuWrap = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(31, 31, 32);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
  transition: 0.6s ease-in-out;

  // чтобы меню выезжало сверху вниз используем transform -100%
  ${props => props.isOpen && css<{isOpen: boolean}>`
    transform: translateY(0);
    
    & ul {
      gap: 40px;
    }
    
  `}

`

const BurgerButton = styled(Button)<{isOpen: boolean}>`
  position: fixed;
  top: -110px;
  right: -95px;
  width: 200px;
  height: 200px;
  z-index: 9999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: #fff;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}

    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: #fff;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}

    }
  }

`

const NavListMobile = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: 0.6s ease-in-out;
`

const SocialsWrapper = styled.div`
    display: flex;
    gap: 15px;
`

export const S = {
    NavDesktop,
    MenuLink,
    NavList,
    NavMobile,
    MobileMenuWrap,
    BurgerButton,
    SocialsWrapper,
    NavListMobile

}