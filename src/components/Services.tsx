import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import airportImage from "@/assets/fleet 1.jpg";
import safariImage from "@/assets/animal 3.jpg";
import dayToursImage from "@/assets/tourist1.jpg";
import nature8 from "@/assets/nature 8.jpg";
import nature9 from "@/assets/nature 9.jpg";

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t('nav.airport'),
      description: t('services.airport.description'),
      image: airportImage,
      link: "/airport-transfer",
    },
    {
      title: t('nav.safaris'),
      description: t('services.safaris.description'),
      image: safariImage,
      link: "/safaris",
    },
    {
      title: t('nav.dayTours'),
      description: t('services.dayTours.description'),
      image: dayToursImage,
      link: "/day-tours",
    },
  ];
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80">
                    View More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
