import {LogoIcon} from '../../../assets/icons/LogoIcon';
import styled from 'styled-components';


export const Logo = () => {

    return (
        <Link href={''}>
            <LogoIconW/>
        </Link>
    );
};

const Link = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
`

const LogoIconW = styled(LogoIcon)`
    
`
