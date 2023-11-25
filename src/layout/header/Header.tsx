import {Menu} from '../../shared/ui/Menu/Menu';
import {Logo} from '../../shared/ui/Logo/Logo';
import styled from 'styled-components';
import {Container} from '../../shared/ui/Styled/Container/Container';
import {FlexWrapper} from '../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import {useContext} from 'react';
import {SocialsContext} from '../../context/socialsContext';
import {useTranslation} from 'react-i18next';
import {SocialType} from '../../data/data';
import {MobileMenu} from '../../shared/ui/Menu/MobileMenu/MobileMenu';

export type NavType = {
    title: string
    link: string
}

export const Header = () => {
    const {t} = useTranslation()
    const socials: SocialType[] = useContext(SocialsContext)

    const navItems: NavType[] = [
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


    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <Logo/>
                    <Menu navItems={navItems} socialItems={socials}/>
                    <MobileMenu navItems={navItems} socialItems={socials}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
  background-color: var(--bg-color-dark);
  padding: 20px 0;
  max-height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.9;
  z-index: 999;
  
`