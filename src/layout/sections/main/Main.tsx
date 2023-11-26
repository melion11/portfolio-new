import styled from 'styled-components';
import {FlexWrapper} from '../../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import MyPhoto from '../../../assets/images/my-photo.jpg'
import {useTranslation} from 'react-i18next';
import {Container} from '../../../shared/ui/Styled/Container/Container';
import abstract from '../../../assets/icons/Abstract.svg'
import {font} from '../../../styles/common';
import {theme} from '../../../styles/theme';


export const Main = () => {

    const {t} = useTranslation()

    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
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

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;

  @media screen and (max-width: 996px) {
    ${FlexWrapper} {
      justify-content: center;
      align-items: center;
    }
  }
`

const TextWrap = styled.div`
  color: var(--primary-color);
  font-weight: var(--font-weight-bold);
  letter-spacing: -1px;

  @media screen and (max-width: 996px) {
    margin-bottom: 25px;
  }  
`

const StyledSpan = styled.span`
  font-size: var(--font-size-l);
  color: ${theme.colors.font};

`
const StyledH2 = styled.h2`
  ${font({Fmax: 50, Fmin: 36, weight: 700})}
  letter-spacing: 1.8px;

  & > span {
    background-image: linear-gradient(to bottom, #42b2e8, #5dde65);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    white-space: nowrap;
  }

`
const StyledH1 = styled.h1`
  ${font({Fmax: 27, Fmin: 20})}
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

  @media screen and (max-width: 996px) {
    &::before {
      display: none;
    }
  }
  
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
