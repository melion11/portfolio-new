import styled from 'styled-components';
import {FlexWrapper} from '../../../shared/ui/FlexWrapper/FlexWrapper';
import MyPhoto from '../../../assets/images/my-photo.jpg'
import {useTranslation} from 'react-i18next';

export const Main = () => {

    const {t} = useTranslation()

    return (
        <StyledMain>
            <FlexWrapper justify={'space-around'} align={'center'}>
                <TextWrap>
                    <span>{t('hello')} 👋,</span><br/>
                    <h2>{t('myNameIs')} {t('fullName')}</h2>
                    <h1>{t('frontend')}</h1>
                </TextWrap>

                <Photo src={MyPhoto} alt={'photo'}/>

            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #8c61ff;
`

const TextWrap = styled.div`
  
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
`