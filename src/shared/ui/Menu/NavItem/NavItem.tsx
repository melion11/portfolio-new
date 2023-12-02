import styled from 'styled-components';
import {S} from '../Menu_Styles'

type NavItemProps = {
    link: string
    title: string
    onOpenMenu?: () => void
}

export const NavItem = ({link, title, onOpenMenu}: NavItemProps) => {


    return (
        <ListItem>
            <S.MenuLink  onClick={onOpenMenu} to={link}
                        smooth
                        spy
                        activeClass={'active'}
                        offset={link === 'contact' ? -14 : -15}
            >
                {title}
            </S.MenuLink>
        </ListItem>
    );
};

const ListItem = styled.li`
`