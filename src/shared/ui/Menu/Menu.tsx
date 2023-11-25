import styled from 'styled-components';
import {FlexWrapper} from '../Styled/FlexWrapper/FlexWrapper';
import {LangSwitcher} from '../../../widgets';
import {Icon} from '../Icon/Icon';
import {NavType} from '../../../layout/header/Header';
import {SocialType} from '../../../data/data';
import {NavItem} from './NavItem/NavItem';
import {theme} from '../../../styles/theme';

type MenuProps = {
    navItems: NavType[]
    socialItems: SocialType[]
}

export const Menu = ({navItems, socialItems}: MenuProps) => {


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
            <NavList>
                {navElements}
            </NavList>

            <FlexWrapper align={'center'} gap={'15px'}>
                {socialsElements}
            </FlexWrapper>

            <LangSwitcher/>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;

  @media ${theme.media.tabletV2} {
    display: none;
  }
  
  
`


const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  color: transparent;

  & > svg {
    &:hover {
      fill: var(--color-accent-300);
    }
  }

`
