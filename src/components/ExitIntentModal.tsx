import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { X, Download, Calendar, MapPin, Users, Star, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentModal = ({ isOpen, onClose }: ExitIntentModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Close modal after showing success message
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card 
        ref={modalRef}
        className="relative w-full max-w-md mx-auto shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute right-2 top-2 h-8 w-8 p-0"
        >
          <X className="w-4 h-4" />
        </Button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-xl mb-2">
            {isSubmitted ? t('exitIntent.success') : t('exitIntent.title')}
          </CardTitle>
          {!isSubmitted && (
            <p className="text-sm text-muted-foreground">
              {t('exitIntent.subtitle')}
            </p>
          )}
        </div>
        <CardContent className="pt-0">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="text-green-600 font-semibold mb-2">
                {t('exitIntent.checkEmail')}
              </div>
              <p className="text-sm text-muted-foreground">
                Plus, get exclusive safari deals and expert tips delivered to your inbox.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">{t('exitIntent.guideIncludes')}</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{t('exitIntent.dayByDay')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span>{t('exitIntent.topDestinations')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span>{t('exitIntent.groupRecommendations')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-600" />
                      <span>{t('exitIntent.bestTimes')}</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {t('exitIntent.limitedTime')}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {t('exitIntent.usuallyPrice')}
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder={t('forms.emailAddress')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !email}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isSubmitting ? t('exitIntent.sending') : t('exitIntent.getMyGuide')}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  {t('exitIntent.noSpam')}
                </p>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ExitIntentModal;
