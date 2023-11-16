import styled from 'styled-components';
import {StyledSubTitle, StyledTitle} from '../../../shared/ui/StyledTitle/StyledTitle';
import {useTranslation} from 'react-i18next';
import {Button} from '../../../shared/ui/Button/Button';

export const Contact = () => {

    const {t} = useTranslation()

    return (
        <StyledContact>
                <StyledTitle>{t('contact')}</StyledTitle>
                <StyledSubTitle>{t('emailMe')}</StyledSubTitle>

                <StyledForm>
                        <Field placeholder={t('formName')}></Field>
                        <Field placeholder={t('formEmail')}></Field>
                        <Field placeholder={t('formMessage')} as={'textarea'}></Field>
                        <Button type={'submit'}>{t('send')}</Button>
                </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  min-height: 100vh;
  background-color: #fa8cfa;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`

const Field = styled.input`
`