import styled from 'styled-components';
import {FlexWrapper} from '../../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import MyPhoto from '../../../assets/images/my-photo.jpg'
import {useTranslation} from 'react-i18next';
import {Container} from '../../../shared/ui/Styled/Container/Container';
import {font} from '../../../shared/lib/font/common';
import {theme} from '../../../styles/theme';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main = () => {

    const {t} = useTranslation()

    return (
        <StyledMain id={'home'}>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
                    <TextWrap>
                        <StyledSpan>{t('hello')} 👋,</StyledSpan><br/>
                        <StyledH2>{t('myNameIs')} <span>{t('fullName')}</span> </StyledH2>
                        <StyledH1>
                            <p>{t('frontend')}</p>
                            <Typewriter
                                options={{
                                    strings: [t('frontend')],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100
                                }}
                            />
                        </StyledH1>
                    </TextWrap>
                    <ParallaxTilt
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        <PhotoWrapper>
                            <Photo src={MyPhoto} alt={'photo'}/>
                        </PhotoWrapper>
                    </ParallaxTilt>
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
  ${font({Fmax: 27, Fmin: 20})};

  p {
    display: none;
  }
`

const ParallaxTilt = styled(Tilt)`
`


const PhotoWrapper = styled.div`
  width: 350px;
  height: 400px;
  border: 9px solid;
  border-radius: 50%;
  border-image: linear-gradient(90deg, #42b2e8, #5dde65) 1;
  position: relative;
  
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
