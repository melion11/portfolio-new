import {Logo} from '../../shared/ui/Logo/Logo';
import {Container} from '../../shared/ui/Styled/Container/Container';
import {FlexWrapper} from '../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import {FC, useEffect, useState} from 'react';
import {MobileMenu} from '../../shared/ui/Menu/MobileMenu/MobileMenu';
import {S} from './Header_Styles'
import {DesktopMenu} from '../../shared/ui/Menu/DesktopMenu/DesktopMenu';

export type NavType = {
    title: string
    link: string
}

export const Header: FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const breakpoint = 860;

    const openMenuHandler = () => {
        setIsOpenMenu(prev => !prev)
    }

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
                        <MobileMenu isOpenMenu={isOpenMenu}
                                    onOpenMenu={openMenuHandler}/> :
                        <DesktopMenu/>
                    }
                </FlexWrapper>
            </Container>
        </S.Header>

    );
};

