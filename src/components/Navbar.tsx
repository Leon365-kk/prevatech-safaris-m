import { useState } from "react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import ReceiptPortal from "@/components/ReceiptPortal";
import DropdownMenu from "@/components/DropdownMenu";
import { useTranslation } from "@/hooks/useTranslation";
import { Menu, X, Phone, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/prevatech-logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReceiptPortal, setShowReceiptPortal] = useState(false);
  const { t } = useTranslation();

  const safariDropdownItems = [
    { name: t('safaris.filters.all'), href: "/safaris", description: t('safaris.subtitle') },
    { name: t('nav.airport'), href: "/airport-transfer", description: "Airport pickup & drop-off" },
    { name: t('nav.dayTours'), href: "/day-tours", description: "Single day adventures" },
    { name: t('nav.pricing'), href: "/pricing", description: "View our rates" },
    { name: t('nav.blog'), href: "/blog", description: "Travel guides & stories" },
  ];

  const supportDropdownItems = [
    { name: t('nav.faq'), href: "/faq", description: t('faq.subtitle') },
    { name: t('nav.book'), href: "/book", description: "Make a reservation" },
    { name: t('contact.title'), href: "/plan-my-trip", description: "Get in touch" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Prevatech Safaris" 
              className="h-32 lg:h-40 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
            >
              {t('nav.home')}
            </Link>
            <DropdownMenu title={t('nav.safaris')} items={safariDropdownItems} />
            <Link
              to="/plan-my-trip"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
            >
              {t('nav.planTrip')}
            </Link>
            <DropdownMenu title={t('nav.support')} items={supportDropdownItems} />
            <LanguageSelector />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowReceiptPortal(true)}
              className="flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span className="hidden sm:inline">Receipts</span>
            </Button>
          </div>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center gap-2 text-foreground">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">+254 724 022016</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </Link>
              
              {/* Mobile Safari Section */}
              <div className="px-4 py-2">
                <div className="font-medium text-sm text-muted-foreground mb-2">{t('nav.safaris')}</div>
                <div className="space-y-1">
                  {safariDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block pl-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/plan-my-trip"
                className="px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.planTrip')}
              </Link>
              
              {/* Mobile Support Section */}
              <div className="px-4 py-2">
                <div className="font-medium text-sm text-muted-foreground mb-2">{t('nav.support')}</div>
                <div className="space-y-1">
                  {supportDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block pl-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="px-4 py-3">
                <LanguageSelector />
              </div>
              <div className="px-4 py-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowReceiptPortal(true)}
                  className="flex items-center gap-2 w-full"
                >
                  <Lock className="w-4 h-4" />
                  Access Receipts
                </Button>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+254 724 022016</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Receipt Portal Modal */}
      {showReceiptPortal && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="min-h-screen">
            <ReceiptPortal />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
