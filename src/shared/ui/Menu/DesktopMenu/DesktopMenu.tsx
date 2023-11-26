import {NavType} from '../../../../layout/header/Header';
import {SocialType} from '../../../../data/data';
import {Menu} from '../Menu';


type MenuProps = {
    navItems: NavType[]
    socialItems: SocialType[]
}

export const DesktopMenu = ({navItems, socialItems}: MenuProps) => {

    return <Menu navItems={navItems} socialItems={socialItems}/>
};


