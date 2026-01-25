import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Users, 
  Camera, 
  Bird, 
  DollarSign, 
  Star,
  MapPin,
  Clock,
  Calendar,
  Filter,
  Search
} from 'lucide-react';
import { ThemedPackage } from '@/lib/safari-details';

interface ThemedPackagesProps {
  packages: ThemedPackage[];
}

const ThemedPackages = ({ packages }: ThemedPackagesProps) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const themes = [
    { id: 'all', name: 'All Packages', icon: Star },
    { id: 'honeymoon', name: 'Honeymoon', icon: Heart },
    { id: 'family', name: 'Family', icon: Users },
    { id: 'birding', name: 'Birding', icon: Bird },
    { id: 'photography', name: 'Photography', icon: Camera },
    { id: 'budget', name: 'Budget', icon: DollarSign },
    { id: 'luxury', name: 'Luxury', icon: Star }
  ];

  const filteredPackages = packages.filter(pkg => {
    const matchesTheme = selectedTheme === 'all' || pkg.theme === selectedTheme;
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.destinations.some(dest => dest.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTheme && matchesSearch;
  });

  const getThemeIcon = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    return theme ? theme.icon : Star;
  };

  const getThemeColor = (themeId: string) => {
    const colors = {
      honeymoon: 'bg-pink-100 text-pink-800 border-pink-200',
      family: 'bg-blue-100 text-blue-800 border-blue-200',
      birding: 'bg-green-100 text-green-800 border-green-200',
      photography: 'bg-purple-100 text-purple-800 border-purple-200',
      budget: 'bg-orange-100 text-orange-800 border-orange-200',
      luxury: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return colors[themeId as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Themed Safari Packages
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Discover specialized safari experiences tailored to your interests and travel style
        </p>
      </div>

      {/* Theme Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {themes.map((theme) => {
            const Icon = theme.icon;
            return (
              <Button
                key={theme.id}
                variant={selectedTheme === theme.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTheme(theme.id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {theme.name}
              </Button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search packages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => {
          const Icon = getThemeIcon(pkg.theme);
          const themeColor = getThemeColor(pkg.theme);
          
          return (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Header with Theme Badge */}
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-6">
                  <div className="text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-lg">{pkg.name}</h3>
                  </div>
                </div>
                
                {/* Theme Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={themeColor}>
                    {pkg.theme.charAt(0).toUpperCase() + pkg.theme.slice(1)}
                  </Badge>
                </div>

                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {pkg.description}
                </p>

                {/* Key Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{pkg.duration} days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span>{pkg.price.currency} {pkg.price.from}-{pkg.price.to}</span>
                  </div>
                </div>

                {/* Destinations */}
                <div>
                  <div className="text-sm font-medium mb-2">Destinations:</div>
                  <div className="flex flex-wrap gap-1">
                    {pkg.destinations.slice(0, 3).map((dest, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <MapPin className="w-2 h-2 mr-1" />
                        {dest}
                      </Badge>
                    ))}
                    {pkg.destinations.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{pkg.destinations.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Best For */}
                <div>
                  <div className="text-sm font-medium mb-2">Perfect for:</div>
                  <div className="flex flex-wrap gap-1">
                    {pkg.bestFor.slice(0, 2).map((item, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                    {pkg.bestFor.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{pkg.bestFor.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Includes Preview */}
                <div>
                  <div className="text-sm font-medium mb-2">Includes:</div>
                  <div className="text-xs text-muted-foreground">
                    {pkg.includes.slice(0, 3).join(' • ')}
                    {pkg.includes.length > 3 && ' • ...'}
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full">
                  View Package Details
                  <Star className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* No Results */}
      {filteredPackages.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No packages found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria to find the perfect safari package.
          </p>
        </div>
      )}

      {/* Theme Information */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.slice(1).map((theme) => {
          const Icon = theme.icon;
          const themePackages = packages.filter(pkg => pkg.theme === theme.id);
          
          return (
            <Card key={theme.id} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{theme.name} Safaris</h4>
                  <div className="text-sm text-muted-foreground">
                    {themePackages.length} packages available
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                {theme.id === 'honeymoon' && 'Romantic getaways with luxury accommodations, private dinners, and special experiences for couples.'}
                {theme.id === 'family' && 'Kid-friendly adventures with family accommodations, educational activities, and flexible schedules.'}
                {theme.id === 'birding' && 'Specialized tours for bird enthusiasts with expert guides and prime bird-watching locations.'}
                {theme.id === 'photography' && 'Tailored for photographers with optimal timing, expert guidance, and exclusive access.'}
                {theme.id === 'budget' && 'Affordable adventures without compromising on experience, perfect for value-conscious travelers.'}
                {theme.id === 'luxury' && 'Premium experiences with top-tier accommodations, exclusive access, and personalized service.'}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ThemedPackages;
