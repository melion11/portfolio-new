import styled, {css} from 'styled-components';
import {NavType} from '../../../../layout/header/Header';
import {SocialType} from '../../../../data/data';
import {NavItem} from '../NavItem/NavItem';
import {Icon} from '../../Icon/Icon';
import {MenuLink} from '../Menu';
import {FlexWrapper} from '../../Styled/FlexWrapper/FlexWrapper';
import {LangSwitcher} from '../../../../widgets';
import {theme} from '../../../../styles/theme';
import {Button, ThemeButton} from '../../Button/Button';
import {useState} from 'react';

type MobileMenuProps = {
    navItems: NavType[]
    socialItems: SocialType[]
}

export const MobileMenu = ({navItems, socialItems}: MobileMenuProps) => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const openMenuHandler = () => {
        setIsOpenMenu(prev => !prev)
    }

    const navElements = navItems.map((el, i) => {
        return (
            <NavItem key={i} title={el.title} link={el.link}/>
        )
    })

    const socialsElements = socialItems.map((el, i) => {
        return (
            <MenuLink key={i} href={el.link} target={'_blank'}>
                <Icon icon={el.icon} size={'30'} color={'var(--secondary-color)'}/>
            </MenuLink>
        )
    })

    return (
        <StyledNav>
            <BurgerButton onClick={openMenuHandler} theme={ThemeButton.CLEAR} isOpen={isOpenMenu}>
                <span></span>
            </BurgerButton>
            <MobileMenuWrap isOpen={isOpenMenu}>
                <FlexWrapper align={'center'} justify={'center'} direction={'column'} gap={'30px'}>
                    <NavList>
                        {navElements}
                    </NavList>

                    <SocialsWrapper>
                        {socialsElements}
                    </SocialsWrapper>

                    <LangSwitcher/>
                </FlexWrapper>
            </MobileMenuWrap>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const MobileMenuWrap = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(31, 31, 32, 0.90);
  display: none;
  z-index: 999;
  
  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
  
`

const BurgerButton = styled(Button)<{isOpen: boolean}>`
  position: fixed;
  top: -110px;
  right: -85px;
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

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const SocialsWrapper = styled.div`
    display: flex;
    gap: 15px;
`