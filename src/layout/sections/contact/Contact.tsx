import styled from 'styled-components';
import {StyledSubTitle, StyledTitle} from '../../../shared/ui/Styled/StyledTitle/StyledTitle';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from '../../../shared/ui/Button/Button';
import {Container} from '../../../shared/ui/Styled/Container/Container';
import {theme} from '../../../styles/theme';

export const Contact = () => {

    const {t} = useTranslation()

    return (
        <StyledContact id={'contact'}>
            <Container>
                <StyledTitle>{t('contact')}</StyledTitle>
                <StyledSubTitle>{t('emailMe')}</StyledSubTitle>

                <StyledForm>
                    <Field placeholder={t('formName')}></Field>
                    <Field placeholder={t('formEmail')}></Field>
                    <Field placeholder={t('formMessage')} as={'textarea'}></Field>
                    <StyledButton themeBtn={ThemeButton.STYLED} type={'submit'}>{t('send')}</StyledButton>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    position: relative;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  
  textarea {
    resize: none;
    height: 155px;
  }
  
`

const Field = styled.input`
  width: 100%;
  padding: 7px 15px;
  border-radius: 8px;
  border: 1px solid var(--border-color-dark);
  background-color: var(--bg-color-input);
  

  color: var(--primary-color);
  font-family: Poppins, sans-serif;
  font-size: var(--font-size-xss);
  letter-spacing: 0.6px;
  
  &::placeholder {
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid var(--border-color-dark);
  }
  
`

const StyledButton = styled(Button)`
    min-width: 150px;
`