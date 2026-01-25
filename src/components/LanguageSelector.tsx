import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSelector = () => {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang?.flag} {currentLang?.name}</span>
        <span className="sm:hidden">{currentLang?.flag}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <Card className="absolute top-full right-0 mt-2 w-48 z-20">
            <CardContent className="p-2">
              {availableLanguages.map((language) => (
                <Button
                  key={language.code}
                  variant={currentLanguage === language.code ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    setLanguage(language.code);
                    setIsOpen(false);
                  }}
                  className="w-full justify-start"
                >
                  <span className="mr-2">{language.flag}</span>
                  {language.name}
                </Button>
              ))}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;
