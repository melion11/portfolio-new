import {Button, ThemeButton} from '../../../shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}:LangSwitcherProps) => {

    const {t, i18n} = useTranslation()

    const onToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button onClick={onToggle} theme={ThemeButton.CLEAR}>
            {t('translation')}
        </Button>
    );
};