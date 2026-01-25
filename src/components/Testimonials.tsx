import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our safari with Prevatech was absolutely incredible! The guides were knowledgeable, the accommodations were comfortable, and we saw all the Big Five. Highly recommend!",
    name: "Sarah Mitchell",
    location: "United Kingdom",
  },
  {
    quote: "Professional airport transfer service. The driver was punctual, friendly, and the vehicle was spotless. Made our arrival in Nairobi stress-free.",
    name: "James Chen",
    location: "Singapore",
  },
  {
    quote: "The Maasai Mara day tour exceeded all expectations. Saw lions, giraffes, and elephants up close. The team at Prevatech made everything seamless.",
    name: "Maria Rodriguez",
    location: "Spain",
  },
  {
    quote: "Best safari experience ever! From booking to the actual tour, everything was perfectly organized. Will definitely book with Prevatech again.",
    name: "David Thompson",
    location: "USA",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from travelers who explored Kenya with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10 text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="space-y-1">
                <p className="font-display font-bold text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? "bg-primary w-6" 
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
