import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import DetailedItinerary from '@/components/DetailedItinerary';
import TravelGuide from '@/components/TravelGuide';
import MediaGallery from '@/components/MediaGallery';
import BlogSection from '@/components/BlogSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  MapPin, 
  Star, 
  Clock,
  Heart,
  Camera,
  BookOpen,
  Phone,
  Mail,
  CheckCircle,
  DollarSign,
  Info
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { 
  sampleItineraries, 
  sampleTravelGuide, 
  destinations, 
  blogPosts 
} from '@/lib/safari-details';

const PackageDetails = () => {
  const { packageId } = useParams<{ packageId: string }>();
  
  // Sample package data - in real app this would come from API/database
  const packageData = {
    id: packageId || 'maasai-mara-3days',
    name: 'Maasai Mara Wildebeest Migration 2025',
    description: 'Experience the world-famous Great Migration in Kenya\'s premier game reserve. This 3-day adventure takes you to the heart of the action where millions of wildebeest cross the Mara River.',
    price: 'Ksh17,000',
    location: 'Maasai Mara',
    rating: 4.5,
    duration: 3,
    category: 'Safari',
    highlights: [
      'Great Migration river crossings',
      'Big Five wildlife sightings',
      'Mara River ecosystem',
      'Hot air balloon option',
      'Maasai cultural visit'
    ],
    includes: [
      'Accommodation in luxury lodge',
      'All meals as specified',
      'Transport in 4x4 safari vehicle',
      'Professional driver/guide',
      'Park entrance fees',
      'Game drives as per itinerary',
      'Drinking water in vehicle'
    ],
    excludes: [
      'International airfare',
      'Travel insurance',
      'Visa fees',
      'Personal expenses',
      'Tips and gratuities',
      'Alcoholic beverages',
      'Hot air balloon safari (optional)'
    ],
    bestTimeToVisit: 'July-October for migration, January-February for general wildlife',
    difficulty: 'Easy',
    groupSize: '2-6 people',
    accommodation: 'Luxury lodge',
    transport: '4x4 safari vehicle'
  };

  const itinerary = sampleItineraries['maasai-mara-3days'] || [];
  const destination = destinations.find(d => d.id === 'maasai-mara');
  const relatedPosts = blogPosts.filter(post => 
    post.tags.some(tag => 
      ['safari', 'wildlife', 'migration', 'maasai mara'].includes(tag.toLowerCase())
    )
  );

  // Sample media assets
  const sampleMedia = [
    {
      id: '1',
      type: 'image' as const,
      url: '/media/mara-wildebeest.jpg',
      title: 'Wildebeest Migration',
      description: 'Thousands of wildebeest crossing the Mara River',
      location: 'Maasai Mara',
      category: 'wildlife' as const,
      featured: true
    },
    {
      id: '2',
      type: 'image' as const,
      url: '/media/mara-lions.jpg',
      title: 'Lion Pride',
      description: 'Pride of lions resting in the savanna',
      location: 'Maasai Mara',
      category: 'wildlife' as const,
      featured: true
    },
    {
      id: '3',
      type: 'video' as const,
      url: '/media/mara-safari.mp4',
      thumbnail: '/media/mara-safari-thumb.jpg',
      title: 'Safari Experience',
      description: 'Experience the thrill of a Maasai Mara safari',
      location: 'Maasai Mara',
      category: 'activities' as const,
      featured: false
    },
    {
      id: '4',
      type: 'image' as const,
      url: '/media/mara-lodge.jpg',
      title: 'Luxury Lodge',
      description: 'Our premium accommodation with stunning views',
      location: 'Maasai Mara',
      category: 'accommodation' as const,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-[60vh] min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <Link to="/safaris" className="inline-flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 mb-4">
                <ArrowLeft className="w-4 h-4" />
                Back to Safaris
              </Link>
              <div className="max-w-3xl">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                  {packageData.name}
                </h1>
                <p className="text-xl text-primary-foreground/90 mb-6">
                  {packageData.description}
                </p>
                <div className="flex flex-wrap gap-4 text-primary-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{packageData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{packageData.duration} days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span>{packageData.rating} rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    <span>{packageData.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="itinerary" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Itinerary
              </TabsTrigger>
              <TabsTrigger value="gallery" className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Gallery
              </TabsTrigger>
              <TabsTrigger value="guide" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Travel Guide
              </TabsTrigger>
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Related Articles
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* Package Highlights */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Package Highlights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {packageData.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* What's Included */}
                  <Card>
                    <CardHeader>
                      <CardTitle>What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {packageData.includes.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* What's Not Included */}
                  <Card>
                    <CardHeader>
                      <CardTitle>What's Not Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {packageData.excludes.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/50" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Booking Card */}
                  <Card className="sticky top-4">
                    <CardHeader>
                      <CardTitle className="text-center">Book This Safari</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">{packageData.price}</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span>{packageData.duration} days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Group Size:</span>
                          <span>{packageData.groupSize}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Difficulty:</span>
                          <span>{packageData.difficulty}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Accommodation:</span>
                          <span>{packageData.accommodation}</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Link to="/book">
                          <Button className="w-full" size="lg">
                            Book Now
                          </Button>
                        </Link>
                        <Button variant="outline" className="w-full">
                          <Heart className="w-4 h-4 mr-2" />
                          Save to Wishlist
                        </Button>
                      </div>

                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2">Need help?</div>
                        <div className="flex gap-2 justify-center">
                          <Button variant="outline" size="sm">
                            <Phone className="w-4 h-4 mr-1" />
                            Call
                          </Button>
                          <Button variant="outline" size="sm">
                            <Mail className="w-4 h-4 mr-1" />
                            Email
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Best Time to Visit */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Best Time to Visit</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {packageData.bestTimeToVisit}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Itinerary Tab */}
            <TabsContent value="itinerary">
              <DetailedItinerary 
                itinerary={itinerary}
                title="Detailed Day-by-Day Itinerary"
                description="Follow your safari adventure with our comprehensive daily schedule"
              />
            </TabsContent>

            {/* Gallery Tab */}
            <TabsContent value="gallery">
              <MediaGallery 
                media={sampleMedia}
                title="Safari Gallery"
                description="Experience the magic of Maasai Mara through our stunning photos and videos"
              />
            </TabsContent>

            {/* Travel Guide Tab */}
            <TabsContent value="guide">
              <TravelGuide 
                guide={sampleTravelGuide}
                destination={packageData.location}
              />
            </TabsContent>

            {/* Blog Tab */}
            <TabsContent value="blog">
              <BlogSection 
                posts={relatedPosts}
                showFilters={false}
                maxPosts={3}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PackageDetails;
