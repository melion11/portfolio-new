import {FlexWrapper} from '../Styled/FlexWrapper/FlexWrapper';
import {LangSwitcher} from '../../../widgets';
import {Icon} from '../Icon/Icon';
import {NavType} from '../../../layout/header/Header';
import {SocialType} from '../../../data/data';
import {NavItem} from './NavItem/NavItem';
import {S} from './Menu_Styles'
import {useContext} from 'react';
import {SocialsContext} from '../../../context/socialsContext';
import {useTranslation} from 'react-i18next';
import {SocialLink} from '../../../layout/footer/Footer';


type MenuProps = {
    isMobile?: boolean
    onOpenMenu?: () => void
}


export const Menu = ({isMobile, onOpenMenu}: MenuProps) => {

    const {t} = useTranslation()
    const socials: SocialType[] = useContext(SocialsContext)
    const navItems: NavType[] = [
        {
            title: t('home'),
            link: 'home'
        },
        {
            title: t('techStack'),
            link: 'skills'
        },
        {
            title: t('projects'),
            link: 'projects'
        },
        {
            title: t('contact'),
            link: 'contact'
        }]

    const navElements = navItems.map((el, i) => {
        return (
            <NavItem onOpenMenu={onOpenMenu} key={i} title={el.title} link={el.link}/>
        )
    })

    const socialsElements = socials.map((el, i) => {
        return (
            <SocialLink key={i} href={el.link} target={'_blank'}>
                <Icon icon={el.icon} size={'30'} color={'var(--secondary-color)'}/>
            </SocialLink>
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
