import {FlexWrapper} from '../Styled/FlexWrapper/FlexWrapper';
import {LangSwitcher} from '../../../widgets';
import {Icon} from '../Icon/Icon';
import {NavType} from '../../../layout/header/Header';
import {SocialType} from '../../../data/data';
import {NavItem} from './NavItem/NavItem';
import {S} from './Menu_Styles'


type MenuProps = {
    navItems: NavType[]
    socialItems: SocialType[]
    isMobile?: boolean
}

export const Menu = ({navItems, socialItems, isMobile}: MenuProps) => {


    const navElements = navItems.map((el, i) => {
        return (
            <NavItem key={i} title={el.title} link={el.link}/>
        )
    })

    const socialsElements = socialItems.map((el, i) => {
        return (
            <S.MenuLink key={i} href={el.link} target={'_blank'}>
                <Icon icon={el.icon} size={'30'} color={'var(--secondary-color)'}/>
            </S.MenuLink>
        )
    })

    return (

        isMobile ?
            <FlexWrapper align={'center'} justify={'center'} direction={'column'} gap={'30px'}>
                <S.NavListMobile>
                    {navElements}
                </S.NavListMobile>

                <S.SocialsWrapper>
                    {socialsElements}
                </S.SocialsWrapper>

                <LangSwitcher/>
            </FlexWrapper> :
            <S.NavDesktop>
                <S.NavList>
                    {navElements}
                </S.NavList>

                <FlexWrapper align={'center'} gap={'15px'}>
                    {socialsElements}
                </FlexWrapper>

                <LangSwitcher/>
            </S.NavDesktop>
    );
};
