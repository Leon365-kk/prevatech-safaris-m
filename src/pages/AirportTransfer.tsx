import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Car, Clock, Shield, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import airportImage from "@/assets/fleet 1.jpg";
import fleet2 from "@/assets/fleet2.jpg";
import fleet3 from "@/assets/fleet3.jpg";
import fleet4 from "@/assets/fleet4.jpg";

const transferServices = [
  {
    title: "JKIA Airport Transfers",
    description: "Reliable pick-up and drop-off from Jomo Kenyatta International Airport to any destination in Nairobi and beyond.",
    price: "From $35",
  },
  {
    title: "Wilson Airport Transfers",
    description: "Convenient transfers to and from Wilson Airport for domestic flights and safari connections.",
    price: "From $25",
  },
  {
    title: "Hotel Transfers",
    description: "Comfortable rides between hotels, lodges, and airports throughout Nairobi and surrounding areas.",
    price: "From $20",
  },
  {
    title: "Corporate Transfers",
    description: "Professional transportation for business travelers with punctual, executive-level service.",
    price: "Custom Quote",
  },
];

const features = [
  { icon: Car, title: "Modern Fleet", description: "Well-maintained, comfortable vehicles" },
  { icon: Clock, title: "24/7 Service", description: "Available any time, day or night" },
  { icon: Shield, title: "Licensed Drivers", description: "Professional, vetted chauffeurs" },
  { icon: Phone, title: "Live Support", description: "Real-time communication" },
];

const AirportTransfer = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-[50vh] min-h-[400px]">
          <img
            src={airportImage}
            alt="Airport transfer service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Airport Transfers
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Reliable, comfortable, and punctual airport transportation services in Nairobi and across Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Modern Fleet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Travel in comfort and style with our well-maintained fleet of vehicles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[airportImage, fleet2, fleet3, fleet4].map((fleetImage, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={fleetImage}
                  alt={`Vehicle ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Premium Vehicle {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Transfer Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From airport pickups to hotel transfers, we've got you covered with professional transportation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {transferServices.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <span className="text-primary font-bold">{service.price}</span>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link to="/book">
                  <Button variant="outline" className="w-full">
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Book Online", description: "Fill out our simple booking form with your travel details" },
              { step: "2", title: "Confirmation", description: "Receive instant confirmation with driver details" },
              { step: "3", title: "Enjoy Your Ride", description: "Our driver meets you and takes you to your destination" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/book">
              <Button size="lg">
                Book Your Transfer
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AirportTransfer;
