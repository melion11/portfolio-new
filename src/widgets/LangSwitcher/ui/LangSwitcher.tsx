import {Button, ThemeButton} from '../../../shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}:LangSwitcherProps) => {

    const {t, i18n} = useTranslation()

    const onToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <StyledButton onClick={onToggle} theme={ThemeButton.CLEAR}>
            {t('translation')}
        </StyledButton>
    );
};

const StyledButton = styled(Button)`
  color: var(--secondary-color);
  text-align: center;
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-m);
  
  &:hover {
    color: var(--color-accent-500);
  }
  
  
`