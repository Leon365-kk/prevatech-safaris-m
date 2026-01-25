import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PricingTables from '@/components/PricingTables';
import QuoteBuilder from '@/components/QuoteBuilder';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, Table, DollarSign, ArrowRight } from 'lucide-react';
import heroImage from "@/assets/nature 2.jpg";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-[40vh] min-h-[300px]">
          <img src={heroImage} alt="Safari Pricing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Safari Pricing & Quotes
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Transparent pricing with live rates and instant custom quotes for your dream safari
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="pricing" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="pricing" className="flex items-center gap-2">
                <Table className="w-4 h-4" />
                Pricing Tables
              </TabsTrigger>
              <TabsTrigger value="quote" className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Quote Builder
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pricing" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-bold mb-4">Live Safari Pricing</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our transparent pricing structure with low and high season rates. 
                  All prices include accommodation, meals, game drives, and park fees.
                </p>
              </div>
              <PricingTables />
            </TabsContent>

            <TabsContent value="quote" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-bold mb-4">Build Your Custom Quote</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Design your perfect safari by selecting parks, duration, group size, and accommodation level. 
                  Get instant estimates and request a final quote from our team.
                </p>
              </div>
              <QuoteBuilder />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our safari experts are ready to help you plan the perfect adventure within your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroOutline" size="xl">
              <DollarSign className="w-4 h-4 mr-2" />
              Contact Sales Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="secondary" size="xl">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Pricing;
