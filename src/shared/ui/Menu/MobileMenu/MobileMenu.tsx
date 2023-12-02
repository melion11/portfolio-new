import {ThemeButton} from '../../Button/Button';
import {S} from '../Menu_Styles'
import {Menu} from '../Menu';

type MobileMenuProps = {
    isOpenMenu: boolean
    onOpenMenu?: () => void
}

export const MobileMenu = ({onOpenMenu, isOpenMenu}: MobileMenuProps) => {

    return (
        <S.NavMobile>
            <S.BurgerButton onClick={onOpenMenu} theme={ThemeButton.CLEAR} isOpen={isOpenMenu}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuWrap isOpen={isOpenMenu} onClick={onOpenMenu}>
                <Menu onOpenMenu={onOpenMenu} isMobile/>
            </S.MobileMenuWrap>
        </S.NavMobile>
    );
};

