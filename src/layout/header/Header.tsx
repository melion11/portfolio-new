import {LangSwitcher} from '../../widgets';
import {Menu} from '../../shared/ui/Menu/Menu';
import {Logo} from '../../shared/ui/Logo/Logo';
import styled from 'styled-components';


export const Header = () => {

    return (
        <StyledHeader>
            <Logo/>
            <LangSwitcher/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0f9954;
`