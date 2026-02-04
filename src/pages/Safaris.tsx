import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Star, Search, Calendar, Users, Heart, Bird, Camera, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/nature-4.jpg";
import { generateAvailabilityData, getAvailableDatesInMonth } from "@/lib/availability-data";
import { allPackages as packagesData, getPackagesByCategory, searchPackages } from "@/lib/packages-data";

const categories = [
  "All",
  "Beach",
  "Safari",
  "Weekend",
  "Flying Safari",
];

const Safaris = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [availabilityData] = useState(generateAvailabilityData());

  const getPackageAvailability = (packageName: string) => {
    const packageData = availabilityData.find(p => p.packageName === packageName);
    if (!packageData) return null;
    
    const today = new Date();
    const availableDates = getAvailableDatesInMonth(
      packageData, 
      today.getFullYear(), 
      today.getMonth()
    );
    
    return {
      availableThisMonth: availableDates.length,
      totalDays: new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() - today.getDate() + 1,
      percentage: Math.round((availableDates.length / (new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() - today.getDate() + 1)) * 100)
    };
  };

  const filteredPackages = (() => {
    let packages = selectedCategory === "All" 
      ? packagesData 
      : getPackagesByCategory(selectedCategory);
    
    if (searchTerm) {
      packages = searchPackages(searchTerm);
    }
    
    return packages;
  })();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-[50vh] min-h-[400px]">
          <img src={heroImage} alt="Safari in Kenya" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Travel Packages 2025
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Discover our exclusive collection of safari adventures, beach getaways, and flying experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground hover:bg-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <div
                key={`${pkg.name}-${index}`}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                {/* Card Header with gradient */}
                <div className="h-48 bg-gradient-to-br from-primary to-primary/70 relative flex items-center justify-center p-6">
                  <h3 className="font-display text-xl font-bold text-primary-foreground text-center leading-tight">
                    {pkg.name}
                  </h3>
                  <div className="absolute top-4 right-4 bg-background text-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {pkg.price}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{pkg.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm line-clamp-3">{pkg.description}</p>

                  {/* Availability Indicator */}
                  {(() => {
                    const availability = getPackageAvailability(pkg.name);
                    if (!availability) return null;
                    
                    return (
                      <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                        <Calendar className="w-4 h-4 text-primary" />
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground">Availability this month</div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-background rounded-full h-2 overflow-hidden">
                              <div 
                                className="bg-primary h-full transition-all duration-300"
                                style={{ width: `${availability.percentage}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium">
                              {availability.availableThisMonth} days
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs bg-muted px-3 py-1 rounded-full">{pkg.category}</span>
                    <Link to={`/safaris/${pkg.id}`}>
                      <Button size="sm">
                        View Package
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No packages found matching your search.</p>
              <Button className="mt-4" onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We specialize in custom travel experiences. Tell us your dream adventure and we'll make it happen.
          </p>
          <Link to="/book">
            <Button variant="heroOutline" size="xl">
              Request Custom Package
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
      {/* Themed Packages Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Themed Safari Packages</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Discover specialized safari experiences tailored to your interests and travel style
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Honeymoon Safaris</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Romantic getaways with luxury accommodations and special experiences for couples
                </p>
                <Link to="/safaris/honeymoon">
                  <Button size="sm" variant="outline">View Honeymoon Packages</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Family Safaris</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Kid-friendly adventures with educational activities and flexible schedules
                </p>
                <Link to="/safaris/family">
                  <Button size="sm" variant="outline">View Family Packages</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bird className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Birding Safaris</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Specialized tours for bird enthusiasts with expert guides and prime locations
                </p>
                <Link to="/safaris/birding">
                  <Button size="sm" variant="outline">View Birding Packages</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Photography Safaris</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tailored for photographers with optimal timing and exclusive access
                </p>
                <Link to="/safaris/photography">
                  <Button size="sm" variant="outline">View Photography Packages</Button>
                </Link>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safaris;
