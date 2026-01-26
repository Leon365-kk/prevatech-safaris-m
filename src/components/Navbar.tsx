import { useState } from "react";
import { Button } from "@/components/ui/button";
import ReceiptPortal from "@/components/ReceiptPortal";
import { useTranslation } from "@/hooks/useTranslation";
import { Menu, X, Phone, Lock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/prevatech-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReceiptPortal, setShowReceiptPortal] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Airport Transfers", href: "/airport-transfer" },
    { name: "Safaris", href: "/safaris" },
    { name: "Day Tours", href: "/day-tours" },
    { name: "Book Online", href: "/book" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

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
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all ${
                  isActive(item.href)
                    ? "text-blue-600 after:w-full after:bg-red-500"
                    : "text-gray-700 hover:text-blue-600 after:w-0 after:bg-red-500 hover:after:w-full"
                }`}
              >
                {item.name}
              </Link>
            ))}
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
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
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
