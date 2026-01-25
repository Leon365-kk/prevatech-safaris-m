import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/prevatech-logo.png";
const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Prevatech Safaris" 
              className="h-40 w-auto brightness-0 invert"
            />
            <p className="text-sm opacity-80 leading-relaxed">
              Your premier travel partner for unforgettable Kenyan adventures. 
              Experience the best of African wildlife and culture.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">Home</Link>
              <Link to="/safaris" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">Safaris</Link>
              <Link to="/airport-transfer" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">Airport Transfers</Link>
              <Link to="/day-tours" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">Day Tours</Link>
              <Link to="/book" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">Book Online</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+254724022016" className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 text-primary" />
                +254 724 022016
              </a>
              <a href="mailto:info@prevatechsafaris.com" className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4 text-primary" />
                info@prevatechsafaris.com
              </a>
              <div className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Prevatech Safaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
