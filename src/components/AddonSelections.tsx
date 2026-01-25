import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { 
  Plus, 
  Star, 
  Clock, 
  MapPin, 
  Info, 
  Heart,
  Camera,
  Utensils,
  Mountain,
  Users,
  DollarSign
} from 'lucide-react';
import { availableAddons, addonCategories, Addon } from '@/lib/availability-data';

interface AddonSelectionsProps {
  selectedLocation?: string;
  onAddonChange?: (selectedAddons: Addon[]) => void;
  selectedAddons?: string[];
}

const AddonSelections = ({ 
  selectedLocation = 'all', 
  onAddonChange,
  selectedAddons = []
}: AddonSelectionsProps) => {
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(selectedAddons);
  
  const filteredAddons = availableAddons.filter(addon => 
    addon.location === 'all' || addon.location === selectedLocation
  );
  
  const handleAddonToggle = (addonId: string) => {
    const newSelection = selectedAddonIds.includes(addonId)
      ? selectedAddonIds.filter(id => id !== addonId)
      : [...selectedAddonIds, addonId];
    
    setSelectedAddonIds(newSelection);
    
    const selectedAddonObjects = filteredAddons.filter(addon => 
      newSelection.includes(addon.id)
    );
    onAddonChange?.(selectedAddonObjects);
  };
  
  const getCategoryIcon = (categoryId: string) => {
    const icons = {
      adventure: Mountain,
      cultural: Users,
      dining: Utensils,
      photography: Camera,
      romantic: Heart
    };
    return icons[categoryId as keyof typeof icons] || Info;
  };
  
  const calculateTotal = () => {
    return filteredAddons
      .filter(addon => selectedAddonIds.includes(addon.id))
      .reduce((total, addon) => total + addon.price, 0);
  };
  
  const selectedAddonObjects = filteredAddons.filter(addon => 
    selectedAddonIds.includes(addon.id)
  );
  
  return (
    <div className="space-y-6">
      {/* Addon Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Enhance Your Safari Experience
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Add special experiences to make your safari unforgettable
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-6">
            {addonCategories.map(category => {
              const Icon = getCategoryIcon(category.id);
              const count = filteredAddons.filter(addon => addon.category === category.id).length;
              return (
                <Badge key={category.id} variant="outline" className="flex items-center gap-1">
                  <Icon className="w-3 h-3" />
                  {category.name} ({count})
                </Badge>
              );
            })}
          </div>
          
          {/* Addon Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {filteredAddons.map(addon => {
              const Icon = getCategoryIcon(addon.category);
              const isSelected = selectedAddonIds.includes(addon.id);
              
              return (
                <Card 
                  key={addon.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    isSelected ? 'ring-2 ring-primary bg-primary/5' : ''
                  }`}
                  onClick={() => handleAddonToggle(addon.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-primary" />
                        <div>
                          <h4 className="font-semibold">{addon.name}</h4>
                          {addon.popular && (
                            <Badge variant="secondary" className="text-xs mt-1">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Checkbox
                        checked={isSelected}
                        onChange={() => {}} // Handled by card click
                      />
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {addon.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      {addon.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{addon.duration}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{addon.location === 'all' ? 'All locations' : addon.location}</span>
                      </div>
                    </div>
                    
                    {addon.requirements && addon.requirements.length > 0 && (
                      <div className="mb-3">
                        <div className="text-xs font-medium text-muted-foreground mb-1">Requirements:</div>
                        <div className="flex flex-wrap gap-1">
                          {addon.requirements.map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="font-semibold text-primary">
                        ${addon.price}
                      </span>
                      <Button size="sm" variant={isSelected ? "default" : "outline"}>
                        {isSelected ? 'Added' : 'Add'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
      
      {/* Selected Addons Summary */}
      {selectedAddonObjects.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Selected Enhancements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {selectedAddonObjects.map(addon => {
                const Icon = getCategoryIcon(addon.category);
                return (
                  <div key={addon.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-primary" />
                      <div>
                        <div className="font-medium">{addon.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {addon.duration && `${addon.duration} • `}
                          ${addon.price}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddonToggle(addon.id)}
                    >
                      Remove
                    </Button>
                  </div>
                );
              })}
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex items-center justify-between">
              <div className="font-semibold">Total Addon Cost:</div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="text-xl font-bold text-green-600">
                  ${calculateTotal()}
                </span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <strong>Note:</strong> Addon prices are per person. Some experiences may be weather-dependent or have limited availability. Final confirmation will be provided upon booking.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AddonSelections;
