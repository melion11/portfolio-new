import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {useContext} from 'react';
import {SocialsContext} from '../../../context/socialsContext';
import {FlexWrapper} from '../Styled/FlexWrapper/FlexWrapper';
import {LangSwitcher} from '../../../widgets';
import {Icon} from '../Icon/Icon';

type NavType = {
    title: string
    link: string
}

export const Menu = () => {
    const {t} = useTranslation()
    const socials = useContext(SocialsContext)

    const navNames: NavType[] = [
        {
            title: t('home'),
            link: '#home'
        },
        {
            title: t('about'),
            link: '#about'
        },
        {
            title: t('techStack'),
            link: '#techStack'
        },
        {
            title: t('projects'),
            link: '#projects'
        },
        {
            title: t('contact'),
            link: '#contact'
        }]


    const navElements = navNames.map((el, i) => {
        return (
            <ListItem key={i}>
                <Link href={el.link}>
                    {el.title}
                    <Mask>
                        <span>{el.title}</span>
                    </Mask>
                    <Mask>
                        <span>{el.title}</span>
                    </Mask>
                </Link>
            </ListItem>
        )
    })

    const socialsElements = socials.map((el, i) => {
        return (
            <Link key={i} href={el.link} target={'_blank'}>
                <SvgIcon icon={el.icon} size={'30'} color={'var(--secondary-color)'}/>
            </Link>
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
`


const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`

const Link = styled.a`
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

const SvgIcon = styled(Icon)`
`


const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: var(--secondary-color);

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    background-color: var(--secondary-color);
    height: 2px;
    position: absolute;
    top: 50%;
    left: -8px;
    right: -8px;
    transform: scale(0);
    z-index: 1;

  }


  &:hover {
    &::before {
      transform: scale(1);
    }


    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: var(--color-accent-500);

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }

`