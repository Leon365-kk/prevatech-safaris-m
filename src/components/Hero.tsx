import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import heroImage from "@/assets/nature 2.jpg";

const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToContent = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Majestic lion in Maasai Mara at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground text-shadow-hero animate-fade-in-up">
            {t('home.hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light text-shadow-hero animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t('home.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/safaris">
              <Button variant="hero" size="xl">
                {t('common.bookNow')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/airport-transfer">
              <Button variant="heroOutline" size="xl">
                {t('nav.airport')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Floating Book Now Button */}
      <Link to="/book" className="fixed bottom-6 left-6 z-50">
        <Button variant="floating" size="lg">
          BOOK NOW
        </Button>
      </Link>
    </section>
  );
};

export default Hero;
