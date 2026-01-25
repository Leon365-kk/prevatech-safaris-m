import { useTranslation } from '@/hooks/useTranslation';

const TranslationTest = () => {
  const { t } = useTranslation();
  
  return (
    <div className="p-4 border border-red-500 bg-red-50">
      <h2>Translation Test Component</h2>
      <p>Current language test: {t('nav.home')}</p>
      <p>Hero title test: {t('home.hero.title')}</p>
      <p>CTA test: {t('cta.getFreeQuote')}</p>
    </div>
  );
};

export default TranslationTest;
