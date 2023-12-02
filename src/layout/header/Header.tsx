import {Logo} from '../../shared/ui/Logo/Logo';
import {Container} from '../../shared/ui/Styled/Container/Container';
import {FlexWrapper} from '../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import {FC, useContext, useEffect, useState} from 'react';
import {SocialsContext} from '../../context/socialsContext';
import {useTranslation} from 'react-i18next';
import {SocialType} from '../../data/data';
import {MobileMenu} from '../../shared/ui/Menu/MobileMenu/MobileMenu';
import {S} from './Header_Styles'
import {DesktopMenu} from '../../shared/ui/Menu/DesktopMenu/DesktopMenu';

export type NavType = {
    title: string
    link: string
}

export const Header: FC = () => {
    const socials: SocialType[] = useContext(SocialsContext)
    const [width, setWidth] = useState(window.innerWidth);
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const breakpoint = 860;
    const {t} = useTranslation()

    const openMenuHandler = () => {
        setIsOpenMenu(prev => !prev)
    }

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

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <Logo/>
                    {width < breakpoint ?
                        <MobileMenu navItems={navItems}
                                    socialItems={socials}
                                    isOpenMenu={isOpenMenu}
                                    onOpenMenu={openMenuHandler}/> :
                        <DesktopMenu navItems={navItems}
                                     socialItems={socials}/>
                    }
                </FlexWrapper>
            </Container>
        </S.Header>

    );
};

