import {Menu} from '../../shared/ui/Menu/Menu';
import {Logo} from '../../shared/ui/Logo/Logo';
import styled from 'styled-components';
import {Container} from '../../shared/ui/Styled/Container/Container';
import {FlexWrapper} from '../../shared/ui/Styled/FlexWrapper/FlexWrapper';


export const Header = () => {

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
  background-color: var(--bg-color-dark);
  padding: 20px 0;
  max-height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`