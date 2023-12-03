import styled from 'styled-components';
import {StyledSubTitle, StyledTitle} from '../../../shared/ui/Styled/StyledTitle/StyledTitle';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from '../../../shared/ui/Button/Button';
import {Container} from '../../../shared/ui/Styled/Container/Container';
import {Fade} from 'react-awesome-reveal';
import {ElementRef, FormEvent, useRef} from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const {t} = useTranslation()

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_cjg7bsh', 'template_qq23cpa', form.current, 'apdjEz15PXFKod_CJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.currentTarget.reset()
    };


    return (
        <Fade triggerOnce direction={'bottom-left'}>
            <StyledContact id={'contact'}>
                <Container>

                    <StyledTitle>{t('contact')}</StyledTitle>
                    <StyledSubTitle>{t('emailMe')}</StyledSubTitle>


                    <StyledForm onSubmit={sendEmail} ref={form}>
                        <Field required placeholder={t('formName')} name={'username'}></Field>
                        <Field required placeholder={t('formEmail')} name={'email'}></Field>
                        <Field required placeholder={t('subject')} name={'subject'}></Field>
                        <Field required placeholder={t('formMessage')} name={'message'} as={'textarea'}></Field>
                        <StyledButton themeBtn={ThemeButton.STYLED} type={'submit'}>{t('send')}</StyledButton>
                    </StyledForm>

                </Container>

            </StyledContact>
        </Fade>
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
    outline: 1px solid var (
    --border - color - dark
);
  }

`

const StyledButton = styled(Button)`
  min-width: 150px;
`