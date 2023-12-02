import styled from 'styled-components';
import {S} from '../Menu_Styles'
import {useLayoutEffect} from 'react';

type NavItemProps = {
    link: string
    title: string
}

export const NavItem = ({link, title}: NavItemProps) => {


    return (
        <ListItem>
            <S.MenuLink to={link}
                        smooth
                        spy
                        activeClass={'active'}
                        offset={link === 'contact' ? -14 : -15}
                        hashSpy
                        isDynamic
            >
                {title}
            </S.MenuLink>
        </ListItem>
    );
};

const ListItem = styled.li`
`