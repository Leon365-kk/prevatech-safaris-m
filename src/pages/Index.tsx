import { useState } from 'react';
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import SafariRecommendations from "@/components/SafariRecommendations";
import { CTAButton, CTACard } from "@/components/CTAComponents";
import AnimatedCounter from "@/components/AnimatedCounter";
import { DefaultSEO, PrevatechLocalBusinessSchema } from "@/components/SEOSchemas";
import { useTranslation } from "@/hooks/useTranslation";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* SEO Components */}
      <DefaultSEO 
        title="Prevatech Safaris"
        description="Experience the magic of Kenya's wildlife with our expertly guided safari tours. From Maasai Mara to Amboseli, create memories that last a lifetime."
        canonicalUrl="https://prevatechsafaris.com"
      />
      <PrevatechLocalBusinessSchema />
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Quick CTA Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <CTACard
                title={t('cta.getFreeQuote')}
                description={t('cta.getFreeQuote') + " - " + t('cta.receiveQuote')}
                primaryCTA={{ text: t('common.getQuote'), href: "/plan-my-trip", icon: "calculator" }}
                features={[t('cta.noObligation'), t('cta.expertConsultation'), t('cta.bestPrice')]}
                badge={t('cta.popular')}
              />
              <CTACard
                title={t('cta.talkToSafariExpert')}
                description={t('cta.talkToSafariExpert') + " - " + t('cta.personalizedRecommendations')}
                primaryCTA={{ text: t('cta.callNow'), href: "tel:+254724022016", icon: "phone" }}
                secondaryCTA={{ text: t('contact.whatsapp'), href: "https://wa.me/254724022016", icon: "whatsapp" }}
                features={[t('cta.instantAnswers'), t('cta.expertAdvice'), t('cta.support247')]}
              />
              <CTACard
                title={t('cta.checkAvailability')}
                description={t('cta.checkAvailability') + " - " + t('cta.realTimeAvailability')}
                primaryCTA={{ text: t('cta.checkDates'), href: "/book", icon: "calendar" }}
                features={[t('cta.liveCalendar'), t('cta.instantConfirmation'), t('cta.flexibleBooking')]}
                variant="highlight"
              />
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <About />
        
        {/* Services Section with CTAs */}
        <Services />
        
        {/* Safari Recommendations */}
        <SafariRecommendations />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Final Conversion Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">
                {t('cta.readyAdventure')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('cta.joinThousands')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <CTACard
                title={t('cta.startPlanning')}
                description={t('cta.useSmartPlanner')}
                primaryCTA={{ text: t('nav.planTrip'), href: "/plan-my-trip", icon: "calculator" }}
                features={[t('cta.fiveStepProcess'), t('cta.personalizedRecommendations2'), t('cta.expertReview')]}
              />
              <CTACard
                title={t('cta.needHelp')}
                description={t('cta.readyExperts')}
                primaryCTA={{ text: t('cta.talkToSafariExpert'), href: "tel:+254724022016", icon: "phone" }}
                secondaryCTA={{ text: t('contact.whatsapp'), href: "https://wa.me/254724022016", icon: "whatsapp" }}
                features={[t('cta.freeConsultation'), t('cta.instantAnswers2'), t('cta.expertAdvice')]}
                variant="urgent"
              />
            </div>
            
            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter end={5000} suffix="+" duration={2500} />
                </div>
                <div className="text-sm text-muted-foreground">{t('cta.happyTravelers')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter end={4.8} suffix="/5" decimals={1} duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground">{t('cta.averageRating')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter end={15} suffix="+" duration={1800} />
                </div>
                <div className="text-sm text-muted-foreground">{t('cta.yearsExperience')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">{t('cta.support')}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
