import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Clock, 
  MapPin, 
  Utensils, 
  Bed, 
  Star, 
  Camera,
  Coffee,
  Sun,
  Moon,
  Car,
  Mountain
} from 'lucide-react';
import { ItineraryDay } from '@/lib/safari-details';

interface DetailedItineraryProps {
  itinerary: ItineraryDay[];
  title?: string;
  description?: string;
}

const DetailedItinerary = ({ itinerary, title, description }: DetailedItineraryProps) => {
  const getMealIcon = (mealType: string) => {
    switch (mealType.toLowerCase()) {
      case 'breakfast':
        return <Coffee className="w-4 h-4" />;
      case 'lunch':
        return <Sun className="w-4 h-4" />;
      case 'dinner':
        return <Moon className="w-4 h-4" />;
      default:
        return <Utensils className="w-4 h-4" />;
    }
  };

  const getAccommodationIcon = (type: string) => {
    switch (type) {
      case 'lodge':
        return <Mountain className="w-4 h-4" />;
      case 'camp':
        return <Camera className="w-4 h-4" />;
      case 'hotel':
        return <Bed className="w-4 h-4" />;
      default:
        return <Bed className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {title && (
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
          )}
        </div>
      )}

      {itinerary.map((day, index) => (
        <Card key={day.day} className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {day.day}
                  </div>
                  <div>
                    <div className="text-xl">{day.title}</div>
                    {day.departureTime && (
                      <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" />
                        Departure: {day.departureTime}
                      </div>
                    )}
                  </div>
                </CardTitle>
              </div>
              {(day.travelTime || day.distance) && (
                <div className="text-right text-sm text-muted-foreground">
                  {day.travelTime && (
                    <div className="flex items-center gap-1">
                      <Car className="w-3 h-3" />
                      {day.travelTime}
                    </div>
                  )}
                  {day.distance && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {day.distance}
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            {/* Activities Timeline */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Daily Activities
              </h4>
              <div className="space-y-4">
                {day.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-sm font-medium text-primary">
                      {activity.time}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{activity.activity}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {activity.description}
                      </div>
                      {activity.location && (
                        <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {activity.location}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Meals */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Utensils className="w-4 h-4" />
                Meals Included
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <Coffee className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Breakfast</div>
                    <div className="text-xs text-muted-foreground">{day.meals.breakfast}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <Sun className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Lunch</div>
                    <div className="text-xs text-muted-foreground">{day.meals.lunch}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <Moon className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Dinner</div>
                    <div className="text-xs text-muted-foreground">{day.meals.dinner}</div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Accommodation */}
            {day.accommodation.name !== 'Not included' && (
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Bed className="w-4 h-4" />
                  Overnight Accommodation
                </h4>
                <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {getAccommodationIcon(day.accommodation.type)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">{day.accommodation.name}</div>
                      <Badge variant="outline" className="text-xs">
                        {day.accommodation.type}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {[...Array(day.accommodation.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {day.accommodation.description}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Day Highlights */}
            {day.highlights.length > 0 && (
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Day Highlights
                </h4>
                <div className="flex flex-wrap gap-2">
                  {day.highlights.map((highlight, highlightIndex) => (
                    <Badge key={highlightIndex} variant="secondary" className="bg-primary/10 text-primary">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DetailedItinerary;
