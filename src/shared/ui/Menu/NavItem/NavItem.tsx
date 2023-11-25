import styled from 'styled-components';
import {MenuLink} from '../Menu';

type NavItemProps = {
    link: string
    title: string
}

export const NavItem = ({link, title}: NavItemProps) => {
    return (
        <ListItem>
            <MenuLink href={link}>
                {title}
                <Mask>
                    <span>{title}</span>
                </Mask>
                <Mask>
                    <span>{title}</span>
                </Mask>
            </MenuLink>
        </ListItem>
    );
};

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: var(--secondary-color);

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    background-color: var(--secondary-color);
    height: 2px;
    position: absolute;
    top: 50%;
    left: -8px;
    right: -8px;
    transform: scale(0);
    z-index: 1;
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: var(--color-accent-500);

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`