import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {useContext} from 'react';
import {SocialsContext} from '../../../context/socialsContext';
import {FlexWrapper} from '../FlexWrapper/FlexWrapper';

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
            link: ''
        },
        {
            title: t('about'),
            link: ''
        },
        {
            title: t('techStack'),
            link: ''
        },
        {
            title: t('projects'),
            link: ''
        },
        {
            title: t('contact'),
            link: ''
        }]


    const navElements = navNames.map((el, i) => {
        return (
            <li key={i}>
                <Link href={el.link}>{el.title}</Link>
            </li>
        )
    })

    const socialsElements = socials.map((el, i) => {
        return (
            <Link key={i} href={el.link}>{el.icon}</Link>
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
  text-decoration: none;
`