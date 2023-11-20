import styled from 'styled-components';
import {FlexWrapper} from '../../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import MyPhoto from '../../../assets/images/my-photo.jpg'
import {useTranslation} from 'react-i18next';
import {Container} from '../../../shared/ui/Styled/Container/Container';
import abstract from '../../../assets/icons/Abstract.svg'


export const Main = () => {

    const {t} = useTranslation()

    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <TextWrap>
                        <StyledSpan>{t('hello')} 👋,</StyledSpan><br/>
                        <StyledH2>{t('myNameIs')} <span>{t('fullName')}</span> </StyledH2>
                        <StyledH1>{t('frontend')}</StyledH1>
                    </TextWrap>
                    <PhotoWrapper>
                        <Photo src={MyPhoto} alt={'photo'}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: var(--bg-color-dark);
  display: flex;
`

const TextWrap = styled.div`
  color: var(--primary-color);
  font-weight: var(--font-weight-bold);
  letter-spacing: -1px;
`

const StyledSpan = styled.span`
  font-size: var(--font-size-l);

`
const StyledH2 = styled.h2`
  font-size: var(--font-size-xxxl);

  & > span {
    background-image: linear-gradient(to bottom, #42b2e8, #5dde65);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

`
const StyledH1 = styled.h1`
  font-size: var(--font-size-xl);
`

const PhotoWrapper = styled.div`
  width: 350px;
  height: 400px;
  border: 9px solid;
  border-radius: 50%;
  border-image: linear-gradient(90deg, #42b2e8, #5dde65) 1;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 110px;
    left: -90px;
    width: 100%;
    height: 100%;
    background-image: url(${abstract});
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    transform: rotate(80deg);
  }
  
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
