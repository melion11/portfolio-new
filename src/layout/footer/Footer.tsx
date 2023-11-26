import styled from 'styled-components';
import {Logo} from '../../shared/ui/Logo/Logo';
import {useContext} from 'react';
import {SocialsContext} from '../../context/socialsContext';
import {FlexWrapper} from '../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import {useTranslation} from 'react-i18next';
import {Icon} from '../../shared/ui/Icon/Icon';
import {Container} from '../../shared/ui/Styled/Container/Container';
import {theme} from '../../styles/theme';

export const Footer = () => {

    const {t} = useTranslation()

    const socials = useContext(SocialsContext)

    const socialsElements = socials.map((el, i) => {
        return (
            <Link key={i} href={el.link} target={'_blank'}>
                <Icon icon={el.icon} size={'30'} color={'var(--secondary-color)'}/>
            </Link>
        )
    })

    return (
        <StyledFooter>
            <Container>
                <FlexWrapper align={'center'} gap={'15px'} justify={'space-between'}>
                    <Logo/>
                    <StyledPhoneNumber>{t('phone')} +375 (33) 693 92 30</StyledPhoneNumber>
                    <StyledEmail>{t('formEmail')}: ilagrinak@gmail.com</StyledEmail>
                </FlexWrapper>
                <SocialsWrapper>
                    {socialsElements}
                </SocialsWrapper>
                <Copyright>© 2023 Iliya Grinyak, All Rights Reserved.</Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 40px 0;
  background-color: var(--color-dark-700);
  @media ${theme.media.mobileV2} {
    ${Container} {
      display: flex;
      flex-direction: column-reverse;
    }
    ${FlexWrapper} {
      flex-direction: column-reverse;
    }
  }
`


const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
`

const StyledPhoneNumber = styled.span`
  color: var(--secondary-color);
  font-family: DM Sans, sans-serif;
  font-size: var(--font-size-ss);
`

const StyledEmail = styled.span`
  color: var(--secondary-color);
  font-family: DM Sans, sans-serif;
  font-size: var(--font-size-ss);
`

const Link = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-m);
  color: transparent;

  & > svg {
    &:hover {
      fill: var(--color-accent-500);
      transform: translateY(-4px);
    }
  }

`

const Copyright = styled.small`
  display: flex;
  align-items: center;
  justify-content: center;
`