import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Star, 
  Clock, 
  ArrowRight,
  Heart,
  Camera,
  Bird,
  TreePine
} from 'lucide-react';
import { Link } from 'react-router-dom';
import animal11 from '@/assets/animal 11.jpg';
import animal12 from '@/assets/animal 12.jpg';
import animal13 from '@/assets/animal 13.jpg';
import animal14 from '@/assets/animal 14.jpg';
import animal15 from '@/assets/animal 15.jpg';
import animal16 from '@/assets/animal 16.jpg';
import animal3 from '@/assets/animal 3.jpg';
import animal9 from '@/assets/animal 9.jpg';
import animal10 from '@/assets/animal10.jpg';
import animal4 from '@/assets/animal4.jpg';
import animal5 from '@/assets/animal5.jpg';
import animal6 from '@/assets/animal6.jpg';
import animal7 from '@/assets/animal7.jpg';
import animal8 from '@/assets/animal8.jpg';

interface SafariRecommendation {
  id: string;
  name: string;
  duration: string;
  price: string;
  location: string;
  rating: number;
  highlights: string[];
  bestFor: string[];
  image: any; // Accept imported image objects
  link: string;
}

const SafariRecommendations = () => {
  const [selectedDuration, setSelectedDuration] = useState<string>('3days');
  const [isAnimating, setIsAnimating] = useState(false);

  const recommendations: Record<string, SafariRecommendation[]> = {
    '3days': [
      {
        id: 'amboseli-3days',
        name: 'Amboseli 3-Day Safari',
        duration: '3 Days',
        price: 'From Ksh 45,000',
        location: 'Amboseli National Park',
        rating: 4.8,
        highlights: ['Mt. Kilimanjaro views', 'Elephant herds', 'Cultural visits'],
        bestFor: ['Wildlife photography', 'Short trips', 'First-time safari'],
        image: animal11,
        link: '/safaris/amboseli-3days'
      },
      {
        id: 'nakuru-3days',
        name: 'Lake Nakuru Weekend Safari',
        duration: '3 Days',
        price: 'From Ksh 35,000',
        location: 'Lake Nakuru National Park',
        rating: 4.7,
        highlights: ['Flamingo watching', 'Rhino sanctuary', 'Hiking trails'],
        bestFor: ['Bird watching', 'Weekend getaways', 'Nature lovers'],
        image: animal12,
        link: '/safaris/lake-nakuru-3days'
      },
      {
        id: 'nairobi-3days',
        name: 'Nairobi National Park Safari',
        duration: '3 Days',
        price: 'From Ksh 25,000',
        location: 'Nairobi National Park',
        rating: 4.6,
        highlights: ['City skyline views', 'Big 5', 'Animal orphanage'],
        bestFor: ['Business travelers', 'Quick escapes', 'Family trips'],
        image: animal13,
        link: '/safaris/nairobi-3days'
      }
    ],
    '5days': [
      {
        id: 'maasai-mara-5days',
        name: 'Maasai Mara 5-Day Adventure',
        duration: '5 Days',
        price: 'From Ksh 85,000',
        location: 'Maasai Mara National Reserve',
        rating: 4.9,
        highlights: ['Great Migration', 'Big 5 sightings', 'Balloon safaris'],
        bestFor: ['Wildlife enthusiasts', 'Photographers', 'Classic safari'],
        image: animal14,
        link: '/safaris/maasai-mara-5days'
      },
      {
        id: 'samburu-5days',
        name: 'Samburu & Aberdares Explorer',
        duration: '5 Days',
        price: 'From Ksh 75,000',
        location: 'Samburu National Reserve',
        rating: 4.8,
        highlights: ['Special 5 species', 'Cultural experiences', 'Mountain views'],
        bestFor: ['Adventure seekers', 'Cultural tourism', 'Unique wildlife'],
        image: animal15,
        link: '/safaris/samburu-5days'
      },
      {
        id: 'coast-safari-5days',
        name: 'Tsavo & Coast Safari',
        duration: '5 Days',
        price: 'From Ksh 65,000',
        location: 'Tsavo National Parks',
        rating: 4.7,
        highlights: ['Red elephants', 'Lava flows', 'Beach extension'],
        bestFor: ['Beach & safari combo', 'Adventure', 'Scenic landscapes'],
        image: animal16,
        link: '/safaris/tsavo-coast-5days'
      }
    ],
    '7plus': [
      {
        id: 'grand-kenya-7days',
        name: 'Grand Kenya Safari',
        duration: '7 Days',
        price: 'From Ksh 120,000',
        location: 'Multiple Parks',
        rating: 4.9,
        highlights: ['4 major parks', 'Diverse ecosystems', 'Luxury lodges'],
        bestFor: ['Comprehensive experience', 'First-time visitors', 'Special occasions'],
        image: animal3,
        link: '/safaris/grand-kenya-7days'
      },
      {
        id: 'migration-7days',
        name: 'Great Migration Special',
        duration: '7 Days',
        price: 'From Ksh 150,000',
        location: 'Maasai Mara & Serengeti',
        rating: 5.0,
        highlights: ['River crossings', 'Predator action', 'Prime timing'],
        bestFor: ['Migration viewing', 'Photographers', 'Wildlife documentaries'],
        image: animal9,
        link: '/safaris/migration-special-7days'
      },
      {
        id: 'kenya-ultimate-10days',
        name: 'Ultimate Kenya Experience',
        duration: '10 Days',
        price: 'From Ksh 180,000',
        location: 'Kenya Circuit',
        rating: 5.0,
        highlights: ['7 national parks', 'Beach relaxation', 'Cultural immersion'],
        bestFor: ['Ultimate adventure', 'Honeymooners', 'Bucket list'],
        image: animal10,
        link: '/safaris/kenya-ultimate-10days'
      }
    ]
  };

  const durationOptions = [
    { id: '3days', label: '3 Days', icon: <Calendar className="w-4 h-4" />, description: 'Quick Getaways' },
    { id: '5days', label: '5 Days', icon: <Calendar className="w-4 h-4" />, description: 'Week Adventures' },
    { id: '7plus', label: '7+ Days', icon: <Calendar className="w-4 h-4" />, description: 'Extended Journeys' }
  ];

  const handleDurationChange = (duration: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedDuration(duration);
      setIsAnimating(false);
    }, 150);
  };

  const currentRecommendations = recommendations[selectedDuration] || [];

  const getBestForIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'photography':
      case 'wildlife photography':
      case 'photographers':
        return <Camera className="w-4 h-4" />;
      case 'bird watching':
        return <Bird className="w-4 h-4" />;
      case 'nature lovers':
      case 'adventure':
      case 'adventure seekers':
        return <TreePine className="w-4 h-4" />;
      case 'romance':
      case 'honeymooners':
      case 'special occasions':
        return <Heart className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">
            Safari Recommendations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose from our carefully curated safari packages for the perfect African adventure
          </p>
          
          {/* Duration Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {durationOptions.map((option) => (
              <Button
                key={option.id}
                variant={selectedDuration === option.id ? 'default' : 'outline'}
                onClick={() => handleDurationChange(option.id)}
                className="flex items-center gap-2 h-12 px-6"
              >
                {option.icon}
                <div className="text-left">
                  <div className="font-medium">{option.label}</div>
                  <div className="text-xs opacity-70">{option.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}>
          {currentRecommendations.map((safari, index) => (
            <Card key={safari.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48">
                <img
                  src={safari.image}
                  alt={safari.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    {safari.duration}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {safari.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-3 h-3" />
                      {safari.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{safari.price}</div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-3 h-3 text-yellow-500" />
                      {safari.rating}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium mb-2">Highlights:</div>
                  <div className="flex flex-wrap gap-1">
                    {safari.highlights.slice(0, 3).map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {safari.highlights.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{safari.highlights.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium mb-2">Best For:</div>
                  <div className="space-y-1">
                    {safari.bestFor.slice(0, 2).map((category, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        {getBestForIcon(category)}
                        <span>{category}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to={safari.link}>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need help choosing? Our safari experts are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Talk to Safari Expert
            </Button>
            <Button size="lg" variant="outline">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariRecommendations;
