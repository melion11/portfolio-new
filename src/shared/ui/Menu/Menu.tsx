import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {GitIcon} from '../../../assets/icons/GitIcon';
import {LinkedIcon} from '../../../assets/icons/LinkedIcon';
import {TgIcon} from '../../../assets/icons/TgIcon';

interface MenuProps {
    className?: string
}

export const Menu = ({className}: MenuProps) => {
    const {t} = useTranslation()

    const navNames = [t('home'), t('about'), t('techStack'), t('projects'), t('contacts')]
    const socials = [
        {
            icon: <GitIcon/>,
            link: ''
        },
        {
            icon: <LinkedIcon/>,
            link: ''
        },
        {
            icon: <TgIcon/>,
            link: ''
        }]

    const navElements = navNames.map((el, i) => {
        return (
            <li key={i}>
                <Link href="">{el}</Link>
            </li>
        )
    })

    const socialsElements = socials.map((el, i) => {
        return (
            <Link href={el.link}>{el.icon}</Link>
        )
    })


    return (
        <StyledNav>
            <NavList>
                {navElements}
            </NavList>

            <SocialsWrapper>
                {socialsElements}
            </SocialsWrapper>
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

const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`