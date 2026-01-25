import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t('home.about.title')}
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              {t('about.description1')}
            </p>
            
            <p>
              {t('about.description2')}
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-safari-gold to-safari-sunset rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
