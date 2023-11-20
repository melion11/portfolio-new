import styled from 'styled-components';
import {Logo} from '../../shared/ui/Logo/Logo';
import {useContext} from 'react';
import {SocialsContext} from '../../context/socialsContext';
import {FlexWrapper} from '../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import {useTranslation} from 'react-i18next';
import {Icon} from '../../shared/ui/Icon/Icon';

export const Footer = () => {

    const {t} = useTranslation()

    const socials = useContext(SocialsContext)

    const socialsElements = socials.map((el, i) => {
        return (
            <Link key={i} href={el.link} target={'_blank'}>
                <SvgIcon icon={el.icon} size={'30'} color={'var(--secondary-color)'}/>
            </Link>
        )
    })

    return (
        <StyledFooter>
            <FlexWrapper align={'center'} gap={'15px'} justify={'space-around'} width={'100%'}>
            <Logo/>
            <StyledPhoneNumber>{t('phone')} +375 (33) 693 92 30</StyledPhoneNumber>
            <StyledEmail>{t('formEmail')}: ilagrinak@gmail.com</StyledEmail>
            </FlexWrapper>
            <FlexWrapper align={'center'} gap={'15px'}>
                {socialsElements}
            </FlexWrapper>
            <Copyright>© 2023 Iliya Grinyak, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

const StyledPhoneNumber = styled.span`

`

const StyledEmail = styled.span`

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
    }
  }

`

const SvgIcon = styled(Icon)`
`

const Copyright = styled.small`

`