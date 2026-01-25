import { Users, Shield, Clock, Calendar, DollarSign, Star } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Experienced Guides",
    description: "Professional, knowledgeable guides passionate about wildlife",
  },
  {
    icon: Shield,
    title: "Safe & Comfortable",
    description: "Modern, well-maintained vehicles for your safety",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always available to assist with your travel needs",
  },
  {
    icon: Calendar,
    title: "Flexible Booking",
    description: "Customizable itineraries to match your preferences",
  },
  {
    icon: DollarSign,
    title: "Affordable Rates",
    description: "Competitive pricing without compromising quality",
  },
  {
    icon: Star,
    title: "5-Star Reviews",
    description: "Consistently rated excellent by our travelers",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We go above and beyond to ensure your Kenyan adventure exceeds expectations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
