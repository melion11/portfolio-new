import {LogoIcon} from '../../../assets/icons/LogoIcon';
import styled from 'styled-components';
import {animateScroll as scroll, Link} from 'react-scroll';

export const Logo = () => {

    return (
        <LogoLink to={'home'} onClick={scroll.scrollToTop}>
            <LogoIconW/>
        </LogoLink>
    );
};

const LogoLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  cursor: pointer;
`

const LogoIconW = styled(LogoIcon)`
    
`
