import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import AddonSelections from "@/components/AddonSelections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle, 
  Plus,
  DollarSign,
  Clock,
  Info
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateAvailabilityData, Addon } from "@/lib/availability-data";

const BookOnline = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [availabilityData] = useState(generateAvailabilityData());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    date: "",
    time: "",
    pickupLocation: "",
    guests: "",
    destination: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message with booking details
    const addonDetails = selectedAddons.length > 0 
      ? `\n\n*Selected Add-ons:*\n${selectedAddons.map(addon => `• ${addon.name} - $${addon.price}`).join('\n')}\n*Add-on Total: $${selectedAddons.reduce((sum, addon) => sum + addon.price, 0)}`
      : '';
    
    const message = `🦁 *New Booking Request*

*Personal Information:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

*Trip Details:*
• Service: ${formData.serviceType}
• Date: ${selectedDate ? selectedDate.toLocaleDateString() : formData.date}
• Time: ${formData.time || "Not specified"}
• Pick Up Location: ${formData.pickupLocation || "Not specified"}
• Guests: ${formData.guests}
• Destination: ${formData.destination || "Not specified"}
• Package: ${selectedPackage || "Not specified"}${addonDetails}

*Additional Info:*
${formData.message || "None"}

I would like to book this trip. Please confirm availability.`;

    const whatsappNumber = "254724022016";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    
    setIsSubmitted(true);
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Complete your booking via WhatsApp chat.",
    });
  };

  const handleDateSelect = (date: Date, availability: any) => {
    setSelectedDate(date);
    setFormData(prev => ({ ...prev, date: date.toISOString().split('T')[0] }));
  };

  const handleAddonChange = (addons: Addon[]) => {
    setSelectedAddons(addons);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-32 pb-20 bg-background min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Thank You!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your booking request has been received. Our team will contact you within 24 hours to confirm your reservation and discuss the details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setIsSubmitted(false)}>
                  Make Another Booking
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+254724022016">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Your Adventure
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours to confirm your booking.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="booking" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="booking" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Booking Details
                </TabsTrigger>
                <TabsTrigger value="availability" className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Check Availability
                </TabsTrigger>
                <TabsTrigger value="addons" className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add-ons
                </TabsTrigger>
              </TabsList>

              <TabsContent value="booking" className="space-y-8">
                <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-6">
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+1 234 567 8900"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Trip Details */}
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-6">
                        Trip Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Type *</Label>
                          <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            required
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="">Select a service</option>
                            <option value="safari">Safari Adventure</option>
                            <option value="airport">Airport Transfer</option>
                            <option value="day-tour">Day Tour</option>
                            <option value="custom">Custom Package</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guests">Number of Guests *</Label>
                          <Input
                            id="guests"
                            name="guests"
                            type="number"
                            min="1"
                            placeholder="2"
                            value={formData.guests}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destination">Preferred Destination</Label>
                          <Input
                            id="destination"
                            name="destination"
                            placeholder="e.g., Maasai Mara"
                            value={formData.destination}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date {selectedDate && `(Selected: ${selectedDate.toLocaleDateString()})`}</Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Pick Up Time</Label>
                          <Input
                            id="time"
                            name="time"
                            type="time"
                            value={formData.time}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pickupLocation">Pick Up Location</Label>
                          <Input
                            id="pickupLocation"
                            name="pickupLocation"
                            placeholder="e.g., JKIA Airport, Hotel Name, Address"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Booking Summary */}
                    {(selectedDate || selectedAddons.length > 0) && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Booking Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          {selectedDate && (
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Selected Date:</span>
                              <span className="font-medium">{selectedDate.toLocaleDateString()}</span>
                            </div>
                          )}
                          {selectedAddons.length > 0 && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Selected Add-ons:</span>
                                <span className="font-medium">{selectedAddons.length} items</span>
                              </div>
                              <div className="flex justify-between font-semibold">
                                <span>Add-on Total:</span>
                                <span className="text-green-600">
                                  ${selectedAddons.reduce((sum, addon) => sum + addon.price, 0)}
                                </span>
                              </div>
                            </>
                          )}
                        </CardContent>
                      </Card>
                    )}

                    {/* Additional Information */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about any special requirements, preferences, or questions..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Booking Request
                    </Button>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="availability" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-display text-3xl font-bold mb-4">Package Availability</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Check real-time availability for our popular safari packages and day tours
                  </p>
                </div>
                
                {/* Package Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Select a Package to Check Availability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {availabilityData.map((pkg) => (
                        <Card 
                          key={pkg.packageId}
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            selectedPackage === pkg.packageId ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => setSelectedPackage(pkg.packageId)}
                        >
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-sm mb-2">{pkg.packageName}</h4>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span>Min: {pkg.minCapacity} people</span>
                              <span>Max: {pkg.maxCapacity} people</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Availability Calendar */}
                {selectedPackage && (() => {
                  const packageData = availabilityData.find(p => p.packageId === selectedPackage);
                  return packageData ? (
                    <AvailabilityCalendar
                      packageAvailability={packageData}
                      onDateSelect={handleDateSelect}
                      selectedDate={selectedDate || undefined}
                    />
                  ) : null;
                })()}
              </TabsContent>

              <TabsContent value="addons" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-display text-3xl font-bold mb-4">Enhance Your Experience</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Add special experiences to make your safari unforgettable
                  </p>
                </div>
                
                <AddonSelections
                  selectedLocation={formData.destination.toLowerCase()}
                  onAddonChange={handleAddonChange}
                  selectedAddons={selectedAddons.map(addon => addon.id)}
                />
              </TabsContent>
            </Tabs>

            {/* Contact Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
                <Phone className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <a href="tel:+254724022016" className="font-bold text-foreground hover:text-primary">
                    +254 724 022016
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
                <Mail className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <a href="mailto:info@prevatechsafaris.com" className="font-bold text-foreground hover:text-primary text-sm">
                    info@prevatechsafaris.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-bold text-foreground">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BookOnline;
