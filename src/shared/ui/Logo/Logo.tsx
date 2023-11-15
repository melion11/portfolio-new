import {LogoIcon} from '../../../assets/icons/LogoIcon';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';


export const Logo = () => {

    const {t} = useTranslation()

    return (
        <Link href={''}>
            <LogoIconW/>
            <LogoWord>I</LogoWord>
            <span>{t('name')}</span>
        </Link>
    );
};

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
`

const LogoIconW = styled(LogoIcon)`
  position: relative;

`

const LogoWord = styled.span`
  font-size: var(--font-size-xxl);
  position: absolute;
  top: 16px;
  left: 16px;
`