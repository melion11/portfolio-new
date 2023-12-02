import {NavType} from '../../../../layout/header/Header';
import {SocialType} from '../../../../data/data';
import {ThemeButton} from '../../Button/Button';
import {S} from '../Menu_Styles'
import {Menu} from '../Menu';

type MobileMenuProps = {
    navItems: NavType[]
    socialItems: SocialType[]
    isOpenMenu: boolean
    onOpenMenu?: () => void
}

export const MobileMenu = ({navItems, socialItems, onOpenMenu, isOpenMenu}: MobileMenuProps) => {

    return (
        <S.NavMobile>
            <S.BurgerButton onClick={onOpenMenu} theme={ThemeButton.CLEAR} isOpen={isOpenMenu}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuWrap isOpen={isOpenMenu} onClick={onOpenMenu}>
                <Menu navItems={navItems} socialItems={socialItems} isMobile/>
            </S.MobileMenuWrap>
        </S.NavMobile>
    );
};

