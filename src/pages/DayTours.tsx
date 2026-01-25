import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import dayToursImage from "@/assets/tourist1.jpg";
import safariImage from "@/assets/animal2.jpg";
import heroImage from "@/assets/nature 3.jpg";
import animal4 from "@/assets/animal4.jpg";
import animal5 from "@/assets/animal5.jpg";
import nature4 from "@/assets/nature 4.jpg";
import nature5 from "@/assets/nature 5.jpg";

const dayTours = [
  {
    name: "Nairobi National Park",
    duration: "Half Day (4-5 hours)",
    price: "$85",
    description: "Experience wildlife just minutes from downtown Nairobi. See lions, rhinos, giraffes, and more against the city skyline backdrop.",
    image: dayToursImage,
    groupSize: "2-6 people",
  },
  {
    name: "Giraffe Centre & Elephant Orphanage",
    duration: "Half Day (4-5 hours)",
    price: "$75",
    description: "Get up close with endangered Rothschild giraffes and visit the David Sheldrick Wildlife Trust to meet baby elephants.",
    image: safariImage,
    groupSize: "2-8 people",
  },
  {
    name: "Lake Naivasha Day Trip",
    duration: "Full Day (8-10 hours)",
    price: "$120",
    description: "Enjoy a boat ride among hippos and diverse birdlife, with optional visits to Crescent Island and Hell's Gate National Park.",
    image: nature4,
    groupSize: "2-6 people",
  },
  {
    name: "Nairobi City Tour",
    duration: "Half Day (3-4 hours)",
    price: "$55",
    description: "Explore Nairobi's highlights including the National Museum, Kenyatta Conference Centre, and vibrant local markets.",
    image: animal4,
    groupSize: "2-10 people",
  },
  {
    name: "Bomas of Kenya Cultural Experience",
    duration: "Half Day (3-4 hours)",
    price: "$65",
    description: "Immerse yourself in Kenya's rich cultural heritage with traditional dances, music, and authentic village experiences.",
    image: animal5,
    groupSize: "2-12 people",
  },
  {
    name: "Karen Blixen Museum & Kazuri Beads",
    duration: "Half Day (4-5 hours)",
    price: "$70",
    description: "Visit the home of 'Out of Africa' author Karen Blixen and see local artisans creating beautiful ceramic beads.",
    image: nature5,
    groupSize: "2-8 people",
  },
];

const DayTours = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-[50vh] min-h-[400px]">
          <img
            src={dayToursImage}
            alt="Day tours in Kenya"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Day Tours & Excursions
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Perfect short getaways to experience Kenya's wildlife, culture, and natural beauty in just a few hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day Tours Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Day Tours
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the best of Kenya with our carefully curated day trip experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dayTours.map((tour) => (
              <article
                key={tour.name}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {tour.price}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {tour.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {tour.groupSize}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tour.description}
                  </p>
                  
                  <Link to="/book">
                    <Button className="w-full">
                      Book This Tour
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              What's Included
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">Included in All Tours</h3>
                <ul className="space-y-2">
                  {[
                    "Professional English-speaking guide",
                    "Comfortable 4x4 safari vehicle",
                    "Hotel/airport pickup and drop-off",
                    "All park entry fees",
                    "Bottled water",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">Optional Add-ons</h3>
                <ul className="space-y-2">
                  {[
                    "Lunch at selected restaurants",
                    "Photography packages",
                    "Extended game drives",
                    "Picnic lunch in the park",
                    "Sundowner experiences",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-safari-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/book">
                <Button size="lg">
                  Book Your Day Tour
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DayTours;
