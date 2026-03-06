import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n'; // Import config to initialize

function Internationalization() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const nextLng = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(nextLng);
    };

    return (
        <div>
            <h1>{t('welcome', { name: 'Adam' })}</h1>
            <button onClick={toggleLanguage}>
                {t('change_language')}
            </button>
        </div>
    );
}

export default Internationalization;
