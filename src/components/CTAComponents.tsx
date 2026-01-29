import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Phone, 
  Calendar, 
  Calculator,
  ArrowRight,
  Star,
  Clock,
  CheckCircle,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  href?: string;
  onClick?: () => void;
  icon?: 'message' | 'phone' | 'calendar' | 'calculator' | 'arrow' | 'whatsapp' | undefined;
  fullWidth?: boolean;
}

const CTAButton = ({ 
  variant = 'primary', 
  size = 'lg', 
  text = 'Get a Quote', 
  href = '/plan-my-trip',
  onClick,
  icon,
  fullWidth = false
}: CTAButtonProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'message': return <MessageCircle className="w-4 h-4" />;
      case 'phone': return <Phone className="w-4 h-4" />;
      case 'calendar': return <Calendar className="w-4 h-4" />;
      case 'calculator': return <Calculator className="w-4 h-4" />;
      case 'arrow': return <ArrowRight className="w-4 h-4" />;
      case 'whatsapp': return <MessageSquare className="w-4 h-4" />;
      default: return <ArrowRight className="w-4 h-4" />;
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary hover:bg-primary/90 text-primary-foreground';
      case 'secondary':
        return 'bg-secondary hover:bg-secondary/90 text-secondary-foreground';
      case 'outline':
        return 'border-2 border-primary hover:bg-primary hover:text-primary-foreground text-primary';
      default:
        return 'bg-primary hover:bg-primary/90 text-primary-foreground';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'px-4 py-2 text-sm';
      case 'md': return 'px-6 py-3 text-base';
      case 'lg': return 'px-8 py-4 text-lg';
      case 'xl': return 'px-12 py-6 text-xl';
      default: return 'px-8 py-4 text-lg';
    }
  };

  const buttonContent = (
    <>
      <span className="text-current">{text}</span>
      {icon && <span className="ml-2">{getIcon()}</span>}
    </>
  );

  if (href && !onClick) {
    return (
      <Link to={href}>
        <Button 
          className={`${getVariantClasses()} ${getSizeClasses()} ${fullWidth ? 'w-full' : ''} font-semibold transition-all duration-300 transform hover:scale-105`}
        >
          {buttonContent}
        </Button>
      </Link>
    );
  }

  return (
    <Button 
      onClick={onClick}
      className={`${getVariantClasses()} ${getSizeClasses()} ${fullWidth ? 'w-full' : ''} font-semibold transition-all duration-300 transform hover:scale-105`}
    >
      {buttonContent}
    </Button>
  );
};

interface CTACardProps {
  title: string;
  description: string;
  primaryCTA?: Partial<CTAButtonProps>;
  secondaryCTA?: Partial<CTAButtonProps>;
  features?: string[];
  badge?: string;
  variant?: 'default' | 'highlight' | 'urgent';
}

const CTACard = ({ 
  title, 
  description, 
  primaryCTA = {}, 
  secondaryCTA,
  features = [],
  badge,
  variant = 'default'
}: CTACardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'highlight':
        return 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20';
      case 'urgent':
        return 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200';
      default:
        return 'bg-card';
    }
  };

  return (
    <Card className={`${getVariantClasses()} border-2 shadow-lg`}>
      <CardContent className="p-6">
        {badge && (
          <Badge className="mb-4" variant={variant === 'urgent' ? 'destructive' : 'default'}>
            {badge}
          </Badge>
        )}
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex gap-3">
          <CTAButton 
            {...primaryCTA}
            fullWidth={!secondaryCTA}
          />
          {secondaryCTA && (
            <CTAButton 
              {...secondaryCTA}
              variant="primary"
              size="md"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface ExpertCTAProps {
  title?: string;
  subtitle?: string;
  showUrgency?: boolean;
  compact?: boolean;
}

const ExpertCTA = ({ 
  title = "Talk to a Safari Expert",
  subtitle = "Get personalized recommendations from our experienced safari consultants",
  showUrgency = false,
  compact = false
}: ExpertCTAProps) => {
  if (compact) {
    return (
      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <div className="font-semibold">{title}</div>
            <div className="text-sm text-muted-foreground">{subtitle}</div>
          </div>
        </div>
        <CTAButton text="Call Now" href="tel:+254724022016" icon="phone" size="md" />
      </div>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{subtitle}</p>
        
        {showUrgency && (
          <div className="mb-6">
            <Badge variant="destructive" className="mb-2">
              <Clock className="w-3 h-3 mr-1" />
              Limited Availability
            </Badge>
            <p className="text-sm text-muted-foreground">
              Peak season dates booking fast - Call now to secure your spot!
            </p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton text="Call Expert" href="tel:+254724022016" icon="phone" />
          <CTAButton text="Get Quote" href="/plan-my-trip" icon="calculator" variant="outline" />
        </div>
        
        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>4.8/5 Rating</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>24/7 Support</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { CTAButton, CTACard, ExpertCTA };
