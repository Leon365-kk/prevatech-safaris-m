import { ItineraryDay } from '@/lib/safari-details';

export interface Package {
  id: string;
  name: string;
  description: string;
  price: string;
  location: string;
  rating: number;
  duration: number;
  category: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  bestTimeToVisit: string;
  difficulty: string;
  groupSize: string;
  accommodation: string;
  transport: string;
  itinerary?: ItineraryDay[];
}

export const allPackages: Package[] = [
  // Beach & Coastal Packages
  {
    id: "mombasa-3-days-package-2025",
    name: "Mombasa 3 Days Package 2025",
    description: "A dose of the sea always feels good! If You're Looking For Relaxation, Beach Therapy Is The Perfect Solution! How about escaping to the sun-drenched beaches of the Kenyan coast. Spend 3 days on this tropical destination, where all that's on your itinerary is to sip a cocktail and gaze into the turquoise waters ahead.",
    price: "Ksh15,999",
    location: "Mombasa North Coast",
    rating: 4.5,
    duration: 3,
    category: "Flying Safari",
    highlights: [
      "Beautiful white sand beaches",
      "Crystal clear turquoise waters",
      "Beach relaxation and therapy",
      "Tropical cocktail experience",
      "Coastal cuisine exploration"
    ],
    includes: [
      "Beachfront accommodation",
      "All meals as specified",
      "Airport transfers",
      "Beach activities",
      "Welcome cocktail"
    ],
    excludes: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Water sports activities",
      "Tips and gratuities"
    ],
    bestTimeToVisit: "Year-round destination, best during dry season (January-March, July-October)",
    difficulty: "Easy",
    groupSize: "2-8 people",
    accommodation: "Beachfront resort",
    transport: "Private vehicle",
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Mombasa - Flying Beach Escape',
        departureTime: '07:00 AM',
        activities: [
          {
            time: '07:00 AM',
            activity: 'Airport Transfer',
            description: 'Transfer from Nairobi hotel to Wilson Airport for morning flight to Mombasa',
            location: 'Wilson Airport'
          },
          {
            time: '08:30 AM',
            activity: 'Flight to Mombasa',
            description: 'Scenic 45-minute flight over Kenyan landscape to coastal paradise',
            location: 'Flight to Mombasa'
          },
          {
            time: '09:30 AM',
            activity: 'Arrival & Transfer',
            description: 'Arrive at Mombasa Airport and transfer to beachfront resort',
            location: 'Mombasa Airport'
          },
          {
            time: '11:00 AM',
            activity: 'Check-in & Welcome',
            description: 'Check-in at beachfront resort with welcome tropical drink',
            location: 'Beachfront Resort'
          },
          {
            time: '01:00 PM',
            activity: 'Beachfront Lunch',
            description: 'Fresh seafood lunch with ocean views at resort restaurant',
            location: 'Resort Restaurant'
          },
          {
            time: '03:00 PM',
            activity: 'Beach Orientation',
            description: 'Guided walk along white sand beaches and swimming in turquoise waters',
            location: 'Mombasa Beach'
          },
          {
            time: '05:00 PM',
            activity: 'Sunset Cocktails',
            description: 'Tropical cocktails while watching Indian Ocean sunset',
            location: 'Beach Bar'
          },
          {
            time: '07:30 PM',
            activity: 'Dinner',
            description: 'Coastal cuisine dinner featuring Swahili specialties',
            location: 'Resort Restaurant'
          }
        ],
        meals: {
          breakfast: 'Continental breakfast at Nairobi hotel',
          lunch: 'Fresh seafood lunch at resort',
          dinner: 'Swahili coastal cuisine dinner'
        },
        accommodation: {
          name: 'Paradise Beach Resort',
          type: 'resort',
          rating: 4,
          description: 'Luxury beachfront resort with direct beach access and ocean views'
        },
        highlights: ['Scenic flight to coast', 'First beach experience', 'Ocean sunset', 'Tropical welcome'],
        travelTime: '45 minutes flight + transfers',
        distance: '500 km by air'
      },
      {
        day: 2,
        title: 'Full Beach & Cultural Experience',
        departureTime: '08:00 AM',
        activities: [
          {
            time: '08:00 AM',
            activity: 'Beach Breakfast',
            description: 'Breakfast with ocean views at beachside restaurant',
            location: 'Beach Restaurant'
          },
          {
            time: '09:30 AM',
            activity: 'Water Sports',
            description: 'Optional water sports: snorkeling, jet skiing, or glass-bottom boat tour',
            location: 'Indian Ocean'
          },
          {
            time: '12:00 PM',
            activity: 'Beach Relaxation',
            description: 'Free time for sunbathing, swimming, or beach massage',
            location: 'Resort Beach'
          },
          {
            time: '01:30 PM',
            activity: 'Lunch',
            description: 'Light lunch with tropical fruits and fresh juices',
            location: 'Beach Club'
          },
          {
            time: '03:00 PM',
            activity: 'Mombasa City Tour',
            description: 'Historic tour of Old Town, Fort Jesus, and local markets',
            location: 'Mombasa Old Town'
          },
          {
            time: '05:30 PM',
            activity: 'Cultural Experience',
            description: 'Visit local Swahili village for cultural immersion and traditional dance',
            location: 'Local Village'
          },
          {
            time: '07:00 PM',
            activity: 'Beach BBQ Dinner',
            description: 'Beach barbecue dinner under the stars with live entertainment',
            location: 'Beach BBQ Area'
          }
        ],
        meals: {
          breakfast: 'Ocean view breakfast',
          lunch: 'Light tropical lunch',
          dinner: 'Beach BBQ dinner'
        },
        accommodation: {
          name: 'Paradise Beach Resort',
          type: 'resort',
          rating: 4,
          description: 'Luxury beachfront resort with direct beach access and ocean views'
        },
        highlights: ['Water sports adventure', 'Historic Mombasa tour', 'Cultural immersion', 'Beach BBQ experience'],
        travelTime: 'Full day beach and cultural activities',
        distance: 'Local tours'
      },
      {
        day: 3,
        title: 'Final Beach Morning & Return Flight',
        departureTime: '08:00 AM',
        activities: [
          {
            time: '08:00 AM',
            activity: 'Sunrise Beach Walk',
            description: 'Early morning beach walk and swimming in calm waters',
            location: 'Mombasa Beach'
          },
          {
            time: '09:30 AM',
            activity: 'Farewell Breakfast',
            description: 'Final coastal breakfast with ocean views',
            location: 'Beach Restaurant'
          },
          {
            time: '11:00 AM',
            activity: 'Check-out & Shopping',
            description: 'Check-out and last-minute souvenir shopping at local markets',
            location: 'Local Markets'
          },
          {
            time: '01:00 PM',
            activity: 'Transfer to Airport',
            description: 'Transfer to Mombasa Airport for return flight',
            location: 'Mombasa Airport'
          },
          {
            time: '02:30 PM',
            activity: 'Flight to Nairobi',
            description: 'Afternoon flight back to Wilson Airport, Nairobi',
            location: 'Flight to Nairobi'
          },
          {
            time: '03:30 PM',
            activity: 'Arrival in Nairobi',
            description: 'Arrive at Wilson Airport and transfer to hotel or home',
            location: 'Wilson Airport'
          }
        ],
        meals: {
          breakfast: 'Farewell ocean view breakfast',
          lunch: 'Light snack on flight',
          dinner: 'Not included (arrive in afternoon)'
        },
        accommodation: {
          name: 'Not included',
          type: 'hotel',
          rating: 0,
          description: 'Return to Nairobi hotel or home'
        },
        highlights: ['Final beach sunrise', 'Coastal shopping', 'Scenic return flight', 'Beach memories'],
        travelTime: '45 minutes flight + transfers',
        distance: '500 km by air'
      }
    ]
  },
  {
    id: "3-days-diani-packages",
    name: "3 Days Diani Packages",
    description: "Not once but three times, Diani was voted Africa's finest beach destination. Absolutely gorgeous and uncrowded, Diani's beaches are crystal blue, shallow and warm. Perfect for wading and snorkeling. For all the beach enthusiasts, you can get the chance to spot some of the best marine life here.",
    price: "Ksh17,600",
    location: "Diani Ukunda",
    rating: 4.5,
    duration: 3,
    category: "Flying Safari",
    highlights: [
      "Africa's finest beach destination",
      "Crystal blue shallow waters",
      "Excellent snorkeling opportunities",
      "Marine life spotting",
      "Uncrowded pristine beaches"
    ],
    includes: [
      "Luxury beach resort accommodation",
      "All meals included",
      "Snorkeling equipment",
      "Marine life tour",
      "Beach transfers"
    ],
    excludes: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Optional water sports",
      "Alcoholic beverages"
    ],
    bestTimeToVisit: "Year-round, best conditions August-March",
    difficulty: "Easy",
    groupSize: "2-6 people",
    accommodation: "Luxury beach resort",
    transport: "Private vehicle",
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Diani - Flying Paradise Escape',
        departureTime: '07:00 AM',
        activities: [
          {
            time: '07:00 AM',
            activity: 'Airport Transfer',
            description: 'Transfer from Nairobi hotel to Wilson Airport for morning flight to Diani',
            location: 'Wilson Airport'
          },
          {
            time: '08:30 AM',
            activity: 'Flight to Diani',
            description: 'Scenic 45-minute flight to Kenya\'s finest beach destination',
            location: 'Flight to Diani'
          },
          {
            time: '09:30 AM',
            activity: 'Arrival & Transfer',
            description: 'Arrive at Diani Airport and transfer to luxury beach resort',
            location: 'Diani Airport'
          },
          {
            time: '11:00 AM',
            activity: 'Check-in & Welcome',
            description: 'Check-in at luxury resort with welcome tropical drink and beach orientation',
            location: 'Luxury Beach Resort'
          },
          {
            time: '01:00 PM',
            activity: 'Beachfront Lunch',
            description: 'Gourmet lunch with ocean views at the resort\'s signature restaurant',
            location: 'Beach Restaurant'
          },
          {
            time: '03:00 PM',
            activity: 'Diani Beach Exploration',
            description: 'Guided walk along Africa\'s finest beach with swimming in crystal blue waters',
            location: 'Diani Beach'
          },
          {
            time: '05:00 PM',
            activity: 'Sunset Experience',
            description: 'Tropical cocktails while watching spectacular Indian Ocean sunset',
            location: 'Sunset Terrace'
          },
          {
            time: '07:30 PM',
            activity: 'Welcome Dinner',
            description: 'Fine dining experience featuring coastal and international cuisine',
            location: 'Fine Dining Restaurant'
          }
        ],
        meals: {
          breakfast: 'Continental breakfast at Nairobi hotel',
          lunch: 'Gourmet beachfront lunch',
          dinner: 'Fine dining welcome dinner'
        },
        accommodation: {
          name: 'Diani Paradise Resort',
          type: 'resort',
          rating: 5,
          description: 'Ultra-luxury beachfront resort with private beach access and world-class amenities'
        },
        highlights: ['Scenic flight to paradise', 'Africa\'s finest beach', 'Crystal blue waters', 'Luxury welcome experience'],
        travelTime: '45 minutes flight + transfers',
        distance: '500 km by air'
      },
      {
        day: 2,
        title: 'Marine Life & Beach Adventure Day',
        departureTime: '08:00 AM',
        activities: [
          {
            time: '08:00 AM',
            activity: 'Ocean View Breakfast',
            description: 'Breakfast with panoramic Indian Ocean views',
            location: 'Ocean View Restaurant'
          },
          {
            time: '09:30 AM',
            activity: 'Snorkeling Adventure',
            description: 'Guided snorkeling tour to explore vibrant coral reefs and marine life',
            location: 'Coral Reef Marine Park'
          },
          {
            time: '11:30 AM',
            activity: 'Marine Life Discovery',
            description: 'Glass-bottom boat tour to spot dolphins, turtles, and colorful fish',
            location: 'Indian Ocean Marine Reserve'
          },
          {
            time: '01:00 PM',
            activity: 'Beach Club Lunch',
            description: 'Fresh seafood lunch at exclusive beach club',
            location: 'Private Beach Club'
          },
          {
            time: '03:00 PM',
            activity: 'Water Sports Paradise',
            description: 'Optional activities: jet skiing, windsurfing, kayaking, or stand-up paddleboarding',
            location: 'Water Sports Center'
          },
          {
            time: '05:30 PM',
            activity: 'Spa & Wellness',
            description: 'Beachside massage and spa treatments with ocean sounds',
            location: 'Beach Spa'
          },
          {
            time: '07:00 PM',
            activity: 'Under Stars Dinner',
            description: 'Romantic beach dinner under the stars with live acoustic music',
            location: 'Private Beach Dining'
          }
        ],
        meals: {
          breakfast: 'Ocean view breakfast',
          lunch: 'Fresh seafood lunch',
          dinner: 'Romantic beach dinner'
        },
        accommodation: {
          name: 'Diani Paradise Resort',
          type: 'resort',
          rating: 5,
          description: 'Ultra-luxury beachfront resort with private beach access and world-class amenities'
        },
        highlights: ['Coral reef exploration', 'Marine life discovery', 'Water sports adventure', 'Beach spa experience'],
        travelTime: 'Full marine and beach activities',
        distance: 'Local marine areas'
      },
      {
        day: 3,
        title: 'Cultural Morning & Return Flight',
        departureTime: '08:00 AM',
        activities: [
          {
            time: '08:00 AM',
            activity: 'Sunrise Beach Yoga',
            description: 'Morning beach yoga session with professional instructor',
            location: 'Diani Beach'
          },
          {
            time: '09:30 AM',
            activity: 'Farewell Breakfast',
            description: 'Final luxury breakfast with ocean views',
            location: 'Ocean View Restaurant'
          },
          {
            time: '11:00 AM',
            activity: 'Cultural Village Visit',
            description: 'Visit local Diani community for cultural immersion and craft shopping',
            location: 'Local Village'
          },
          {
            time: '12:30 PM',
            activity: 'Check-out & Shopping',
            description: 'Check-out and last-minute souvenir shopping at Diani boutiques',
            location: 'Resort & Local Shops'
          },
          {
            time: '01:30 PM',
            activity: 'Transfer to Airport',
            description: 'Transfer to Diani Airport for return flight',
            location: 'Diani Airport'
          },
          {
            time: '02:30 PM',
            activity: 'Flight to Nairobi',
            description: 'Afternoon flight back to Wilson Airport, Nairobi',
            location: 'Flight to Nairobi'
          },
          {
            time: '03:30 PM',
            activity: 'Arrival in Nairobi',
            description: 'Arrive at Wilson Airport and transfer to hotel or home',
            location: 'Wilson Airport'
          }
        ],
        meals: {
          breakfast: 'Luxury farewell breakfast',
          lunch: 'Light snack on flight',
          dinner: 'Not included (arrive in afternoon)'
        },
        accommodation: {
          name: 'Not included',
          type: 'hotel',
          rating: 0,
          description: 'Return to Nairobi hotel or home'
        },
        highlights: ['Beach yoga experience', 'Cultural immersion', 'Paradise shopping', 'Scenic return flight'],
        travelTime: '45 minutes flight + transfers',
        distance: '500 km by air'
      }
    ]
  },
  // Wildlife Safaris
  {
    id: "maasai-mara-wildebeest-migration-2025",
    name: "Maasai Mara Wildebeest Migration 2025",
    description: "Experience the world-famous Great Migration in Kenya's premier game reserve. This 3-day adventure takes you to the heart of the action where millions of wildebeest cross the Mara River.",
    price: "Ksh17,000",
    location: "Maasai Mara",
    rating: 4.5,
    duration: 3,
    category: "Flying Safari",
    highlights: [
      "Great Migration river crossings",
      "Big Five wildlife sightings",
      "Mara River ecosystem",
      "Hot air balloon option",
      "Maasai cultural visit"
    ],
    includes: [
      "Accommodation in luxury lodge",
      "All meals as specified",
      "Transport in 4x4 safari vehicle",
      "Professional driver/guide",
      "Park entrance fees",
      "Game drives as per itinerary",
      "Drinking water in vehicle"
    ],
    excludes: [
      "International airfare",
      "Travel insurance",
      "Visa fees",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic beverages",
      "Hot air balloon safari (optional)"
    ],
    bestTimeToVisit: "July-October for migration, January-February for general wildlife",
    difficulty: "Easy",
    groupSize: "2-6 people",
    accommodation: "Luxury lodge",
    transport: "4x4 safari vehicle",
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Maasai Mara - Flying Safari Adventure',
        departureTime: '07:00 AM',
        activities: [
          {
            time: '07:00 AM',
            activity: 'Airport Transfer',
            description: 'Transfer from Nairobi hotel to Wilson Airport for morning flight to Maasai Mara',
            location: 'Wilson Airport'
          },
          {
            time: '08:00 AM',
            activity: 'Flight to Maasai Mara',
            description: 'Scenic 45-minute flight over the Great Rift Valley to Mara Serena Airstrip',
            location: 'Flight to Maasai Mara'
          },
          {
            time: '09:00 AM',
            activity: 'Arrival & Transfer',
            description: 'Arrive at Mara Serena Airstrip and transfer to luxury lodge',
            location: 'Mara Serena Airstrip'
          },
          {
            time: '10:00 AM',
            activity: 'Great Rift Valley Viewpoint',
            description: 'Aerial views of the Great Rift Valley during flight and photo opportunities',
            location: 'Great Rift Valley (Aerial)'
          },
          {
            time: '01:00 PM',
            activity: 'Arrival & Lunch at Lodge',
            description: 'Check-in at your lodge and enjoy a delicious buffet lunch',
            location: 'Maasai Mara Lodge'
          },
          {
            time: '04:00 PM',
            activity: 'Afternoon Game Drive',
            description: 'First game drive in the Maasai Mara searching for the Big Five and other wildlife',
            location: 'Maasai Mara National Reserve'
          },
          {
            time: '06:30 PM',
            activity: 'Return to Lodge',
            description: 'Return to lodge for relaxation and dinner',
            location: 'Maasai Mara Lodge'
          }
        ],
        meals: {
          breakfast: 'Continental breakfast at Nairobi hotel',
          lunch: 'Buffet lunch at lodge',
          dinner: '3-course dinner with African and international cuisine'
        },
        accommodation: {
          name: 'Mara Serena Safari Lodge',
          type: 'lodge',
          rating: 4,
          description: 'Eco-friendly lodge overlooking the Mara River with stunning views'
        },
        highlights: ['Scenic flight to Mara', 'Aerial Rift Valley views', 'First wildlife sightings', 'Mara River views'],
        travelTime: '45 minutes flight + transfers',
        distance: '270 km by air'
      },
      {
        day: 2,
        title: 'Full Day Safari Adventure',
        departureTime: '06:30 AM',
        activities: [
          {
            time: '06:30 AM',
            activity: 'Early Morning Game Drive',
            description: 'Pre-breakfast game drive when predators are most active',
            location: 'Maasai Mara'
          },
          {
            time: '09:00 AM',
            activity: 'Breakfast in the Bush',
            description: 'Surprise bush breakfast in a scenic location within the reserve',
            location: 'Mara Plains'
          },
          {
            time: '11:00 AM',
            activity: 'Visit Maasai Village',
            description: 'Cultural visit to a local Maasai village to learn about their traditions',
            location: 'Maasai Village'
          },
          {
            time: '01:00 PM',
            activity: 'Lunch at Lodge',
            description: 'Return to lodge for lunch and relaxation',
            location: 'Mara Serena Safari Lodge'
          },
          {
            time: '04:00 PM',
            activity: 'Afternoon Game Drive',
            description: 'Extended game drive focusing on areas with high wildlife concentration',
            location: 'Mara River Crossing Points'
          },
          {
            time: '06:30 PM',
            activity: 'Sundowner Experience',
            description: 'Classic African sundowner with drinks and snacks at scenic viewpoint',
            location: 'Mara Plains'
          }
        ],
        meals: {
          breakfast: 'Bush breakfast in the wild',
          lunch: 'Buffet lunch at lodge',
          dinner: 'Barbecue dinner under the stars'
        },
        accommodation: {
          name: 'Mara Serena Safari Lodge',
          type: 'lodge',
          rating: 4,
          description: 'Eco-friendly lodge overlooking the Mara River with stunning views'
        },
        highlights: ['Predator sightings', 'Cultural experience', 'Bush breakfast', 'Sundowner experience'],
        travelTime: 'Full day in reserve',
        distance: 'Various game drive routes'
      },
      {
        day: 3,
        title: 'Final Game Drive & Flying Return to Nairobi',
        departureTime: '06:30 AM',
        activities: [
          {
            time: '06:30 AM',
            activity: 'Morning Game Drive',
            description: 'Final game drive to catch any wildlife you may have missed',
            location: 'Maasai Mara'
          },
          {
            time: '09:00 AM',
            activity: 'Breakfast at Lodge',
            description: 'Farewell breakfast at the lodge',
            location: 'Mara Serena Safari Lodge'
          },
          {
            time: '10:30 AM',
            activity: 'Check-out & Flight Transfer',
            description: 'Check-out and transfer to Mara Serena Airstrip for return flight',
            location: 'Mara Serena Airstrip'
          },
          {
            time: '11:30 AM',
            activity: 'Flight to Nairobi',
            description: 'Scenic return flight to Wilson Airport, Nairobi',
            location: 'Flight to Nairobi'
          },
          {
            time: '12:30 PM',
            activity: 'Arrival in Nairobi',
            description: 'Arrive at Wilson Airport and transfer to hotel or home',
            location: 'Wilson Airport'
          }
        ],
        meals: {
          breakfast: 'Full breakfast at lodge',
          lunch: 'Light snack on flight',
          dinner: 'Not included (arrive in afternoon)'
        },
        accommodation: {
          name: 'Not included',
          type: 'hotel',
          rating: 0,
          description: 'Return to your Nairobi hotel or airport transfer'
        },
        highlights: ['Final wildlife sightings', 'Scenic return flight', 'Aerial Rift Valley views'],
        travelTime: '45 minutes flight + transfers',
        distance: '270 km by air'
      }
    ]
  },
  {
    id: "3-days-samburu-package",
    name: "3 Days Samburu Package",
    description: "Samburu is among Kenya's most scenic reserves, with riverine forest along the lovely Ewaso Nyiro River. Close to the river is also where you're most likely to see leopards. Dry Acacia scrub and semi-arid savannah extends to the mountains.",
    price: "Ksh23,100",
    location: "Samburu",
    rating: 4.5,
    duration: 3,
    category: "Flying Safari",
    highlights: [
      "Scenic riverine forest landscapes",
      "Leopard sightings along Ewaso Nyiro River",
      "Unique Samburu Special Five species",
      "Semi-arid savannah ecosystems",
      "Mountain backdrop views"
    ],
    includes: [
      "Samburu lodge accommodation",
      "All meals as specified",
      "4x4 safari vehicle transport",
      "Professional guide",
      "Park entrance fees",
      "Game drives",
      "Drinking water"
    ],
    excludes: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic beverages",
      "Cultural village visits (optional)"
    ],
    bestTimeToVisit: "Year-round, best during dry season (June-October, December-March)",
    difficulty: "Easy",
    groupSize: "2-6 people",
    accommodation: "Samburu lodge",
    transport: "4x4 safari vehicle",
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Samburu - Northern Frontier',
        departureTime: '07:00 AM',
        activities: [
          {
            time: '07:00 AM',
            activity: 'Departure from Nairobi',
            description: 'Early morning departure from Nairobi heading north through Mount Kenya region',
            location: 'Nairobi'
          },
          {
            time: '10:00 AM',
            activity: 'Mount Kenya Region',
            description: 'Scenic drive through Mount Kenya region with coffee plantations',
            location: 'Mount Kenya Region'
          },
          {
            time: '01:00 PM',
            activity: 'Arrival & Lunch at Lodge',
            description: 'Check-in at Samburu lodge and enjoy lunch',
            location: 'Samburu Lodge'
          },
          {
            time: '04:00 PM',
            activity: 'Afternoon Game Drive',
            description: 'First game drive in Samburu searching for the Special Five',
            location: 'Samburu National Reserve'
          },
          {
            time: '06:30 PM',
            activity: 'Return to Lodge',
            description: 'Return to lodge for relaxation and dinner',
            location: 'Samburu Lodge'
          }
        ],
        meals: {
          breakfast: 'Continental breakfast at Nairobi hotel',
          lunch: 'Buffet lunch at lodge',
          dinner: '3-course dinner with local and international cuisine'
        },
        accommodation: {
          name: 'Samburu Sopa Lodge',
          type: 'lodge',
          rating: 4,
          description: 'Comfortable lodge overlooking the Ewaso Nyiro River'
        },
        highlights: ['Mount Kenya scenery', 'Ewaso Nyiro River views', 'First wildlife sightings', 'Samburu Special Five'],
        travelTime: '5-6 hours driving',
        distance: '350 km'
      },
      {
        day: 2,
        title: 'Full Day in Samburu - Special Five Safari',
        departureTime: '06:30 AM',
        activities: [
          {
            time: '06:30 AM',
            activity: 'Early Morning Game Drive',
            description: 'Pre-breakfast game drive along the Ewaso Nyiro River',
            location: 'Samburu National Reserve'
          },
          {
            time: '09:00 AM',
            activity: 'Breakfast at Lodge',
            description: 'Return to lodge for breakfast',
            location: 'Samburu Sopa Lodge'
          },
          {
            time: '11:00 AM',
            activity: 'Cultural Visit',
            description: 'Visit local Samburu manyatta to learn about their culture',
            location: 'Samburu Village'
          },
          {
            time: '01:00 PM',
            activity: 'Lunch at Lodge',
            description: 'Lunch at the lodge',
            location: 'Samburu Sopa Lodge'
          },
          {
            time: '04:00 PM',
            activity: 'Afternoon Game Drive',
            description: 'Extended game drive focusing on leopard habitats',
            location: 'Samburu National Reserve'
          },
          {
            time: '06:30 PM',
            activity: 'Sundowner',
            description: 'Sundowner experience at scenic viewpoint',
            location: 'Samburu Hills'
          }
        ],
        meals: {
          breakfast: 'Full breakfast at lodge',
          lunch: 'Buffet lunch at lodge',
          dinner: 'Barbecue dinner under the stars'
        },
        accommodation: {
          name: 'Samburu Sopa Lodge',
          type: 'lodge',
          rating: 4,
          description: 'Comfortable lodge overlooking the Ewaso Nyiro River'
        },
        highlights: ['Samburu Special Five sightings', 'Cultural experience', 'Leopard tracking', 'Ewaso Nyiro River ecosystem'],
        travelTime: 'Full day in reserve',
        distance: 'Various game drive routes'
      },
      {
        day: 3,
        title: 'Final Game Drive & Return to Nairobi',
        departureTime: '06:30 AM',
        activities: [
          {
            time: '06:30 AM',
            activity: 'Morning Game Drive',
            description: 'Final game drive to catch any missed wildlife',
            location: 'Samburu National Reserve'
          },
          {
            time: '09:00 AM',
            activity: 'Breakfast at Lodge',
            description: 'Farewell breakfast at the lodge',
            location: 'Samburu Sopa Lodge'
          },
          {
            time: '10:30 AM',
            activity: 'Check-out & Departure',
            description: 'Check-out and begin journey back to Nairobi',
            location: 'Samburu'
          },
          {
            time: '01:00 PM',
            activity: 'Lunch En Route',
            description: 'Lunch at scenic restaurant in Mount Kenya region',
            location: 'Mount Kenya Region'
          },
          {
            time: '05:00 PM',
            activity: 'Arrival in Nairobi',
            description: 'Arrive back in Nairobi and transfer to your hotel',
            location: 'Nairobi'
          }
        ],
        meals: {
          breakfast: 'Full breakfast at lodge',
          lunch: 'Lunch at Mount Kenya restaurant',
          dinner: 'Not included (arrive in evening)'
        },
        accommodation: {
          name: 'Not included',
          type: 'hotel',
          rating: 0,
          description: 'Return to your Nairobi hotel'
        },
        highlights: ['Final wildlife sightings', 'Mount Kenya scenery', 'Cultural memories', 'Northern frontier experience'],
        travelTime: '5-6 hours driving',
        distance: '350 km'
      }
    ]
  },
  {
    id: "3-days-tsavo-packages",
    name: "3 Days Tsavo Packages",
    description: "Experience Kenya's largest national park with its famous red elephants, diverse landscapes, and abundant wildlife.",
    price: "Ksh29,600",
    location: "Tsavo",
    rating: 4.5,
    duration: 3,
    category: "Flying Safari",
    highlights: [
      "Kenya's largest national park",
      "Famous red elephants",
      "Diverse landscapes and ecosystems",
      "Abundant wildlife",
      "Mzima Springs"
    ],
    includes: [
      "Tsavo lodge accommodation",
      "All meals as specified",
      "4x4 safari vehicle",
      "Professional guide",
      "Park entrance fees",
      "Game drives",
      "Visit to Mzima Springs"
    ],
    excludes: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic beverages"
    ],
    bestTimeToVisit: "Year-round, best during dry season",
    difficulty: "Easy",
    groupSize: "2-6 people",
    accommodation: "Tsavo lodge",
    transport: "4x4 safari vehicle"
  },
  {
    id: "bless-wazazi-wafike-amboseli-3-days-2-nights",
    name: "Bless Wazazi Wafike Amboseli 3 Days 2 Nights",
    description: "Treat your parents to an unforgettable Amboseli experience with views of Mount Kilimanjaro and elephant herds.",
    price: "Ksh54,500",
    location: "Amboseli",
    rating: 4.5,
    duration: 3,
    category: "Flying Safari",
    highlights: [
      "Mount Kilimanjaro views",
      "Large elephant herds",
      "Parents special package",
      "Swamp and wetland ecosystems",
      "Cultural visits"
    ],
    includes: [
      "Amboseli lodge accommodation",
      "All meals as specified",
      "4x4 safari vehicle",
      "Professional guide",
      "Park entrance fees",
      "Game drives",
      "Cultural visit"
    ],
    excludes: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic beverages"
    ],
    bestTimeToVisit: "Year-round, best for views June-October, January-February",
    difficulty: "Easy",
    groupSize: "2-6 people",
    accommodation: "Amboseli lodge",
    transport: "4x4 safari vehicle"
  },
  // Weekend Getaways
  {
    id: "naivasha-weekend-getaways",
    name: "Naivasha Weekend Getaways",
    description: "Naivasha is a town in the Rift Valley region of Kenya. It is situated around Lake Naivasha, which is one of the Great Rift Valley's freshwater lakes. Lake Elementaita is a tranquil and ecologically significant destination.",
    price: "Ksh3,800",
    location: "Naivasha",
    rating: 4.5,
    duration: 2,
    category: "Flying Safari",
    highlights: [
      "Great Rift Valley freshwater lake",
      "Lake Naivasha boat rides",
      "Lake Elementaita ecological tours",
      "Weekend relaxation getaway",
      "Rift Valley scenic views"
    ],
    includes: [
      "Lakeside accommodation",
      "Boat ride on Lake Naivasha",
      "Lake Elementaita tour",
      "Meals as specified",
      "Transport within Naivasha",
      "Nature walks"
    ],
    excludes: [
      "Transport to Naivasha",
      "Personal expenses",
      "Optional activities",
      "Tips and gratuities",
      "Alcoholic beverages"
    ],
    bestTimeToVisit: "Year-round, best during dry season",
    difficulty: "Easy",
    groupSize: "2-8 people",
    accommodation: "Lakeside lodge",
    transport: "Private vehicle",
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Naivasha - Lakeside Escape',
        departureTime: '08:00 AM',
        activities: [
          {
            time: '08:00 AM',
            activity: 'Departure from Nairobi',
            description: 'Morning departure from Nairobi with scenic drive through the Great Rift Valley',
            location: 'Nairobi'
          },
          {
            time: '10:00 AM',
            activity: 'Great Rift Valley Viewpoint',
            description: 'Photo stop at the scenic viewpoint with panoramic views of the Rift Valley',
            location: 'Great Rift Valley Viewpoint'
          },
          {
            time: '12:00 PM',
            activity: 'Arrival & Check-in',
            description: 'Check-in at lakeside lodge and enjoy welcome refreshments',
            location: 'Lake Naivasha Lodge'
          },
          {
            time: '01:00 PM',
            activity: 'Lunch at Lodge',
            description: 'Delicious lunch with lake views',
            location: 'Lake Naivasha Lodge'
          },
          {
            time: '03:00 PM',
            activity: 'Boat Ride on Lake Naivasha',
            description: 'Guided boat ride to see hippos, birds, and visit Crescent Island',
            location: 'Lake Naivasha'
          },
          {
            time: '05:30 PM',
            activity: 'Nature Walk',
            description: 'Guided nature walk around the lodge grounds',
            location: 'Lodge Grounds'
          },
          {
            time: '07:00 PM',
            activity: 'Dinner',
            description: 'Dinner at the lodge restaurant',
            location: 'Lake Naivasha Lodge'
          }
        ],
        meals: {
          breakfast: 'Continental breakfast at Nairobi hotel',
          lunch: 'Buffet lunch at lodge',
          dinner: '3-course dinner with lake views'
        },
        accommodation: {
          name: 'Lake Naivasha Lodge',
          type: 'lodge',
          rating: 4,
          description: 'Comfortable lakeside lodge with stunning views of Lake Naivasha'
        },
        highlights: ['Great Rift Valley views', 'Lake Naivasha boat ride', 'Hippos and bird watching', 'Crescent Island visit'],
        travelTime: '2-3 hours driving',
        distance: '90 km'
      },
      {
        day: 2,
        title: 'Lake Elementaita & Return to Nairobi',
        departureTime: '08:00 AM',
        activities: [
          {
            time: '08:00 AM',
            activity: 'Breakfast',
            description: 'Full breakfast with lake views',
            location: 'Lake Naivasha Lodge'
          },
          {
            time: '09:30 AM',
            activity: 'Lake Elementaita Tour',
            description: 'Drive to Lake Elementaita for bird watching and ecological tour',
            location: 'Lake Elementaita'
          },
          {
            time: '11:30 AM',
            activity: 'Bird Watching',
            description: 'Guided bird watching session - flamingos and pelicans',
            location: 'Lake Elementaita'
          },
          {
            time: '01:00 PM',
            activity: 'Lunch',
            description: 'Lunch at Lake Elementaita or return to Naivasha lodge',
            location: 'Lake Elementaita/Naivasha'
          },
          {
            time: '02:30 PM',
            activity: 'Check-out & Departure',
            description: 'Check-out and begin journey back to Nairobi',
            location: 'Naivasha'
          },
          {
            time: '05:00 PM',
            activity: 'Arrival in Nairobi',
            description: 'Arrive back in Nairobi and transfer to your hotel',
            location: 'Nairobi'
          }
        ],
        meals: {
          breakfast: 'Full breakfast at lodge',
          lunch: 'Lunch at Lake Elementaita',
          dinner: 'Not included (arrive in evening)'
        },
        accommodation: {
          name: 'Not included',
          type: 'hotel',
          rating: 0,
          description: 'Return to your Nairobi hotel'
        },
        highlights: ['Lake Elementaita flamingos', 'Bird watching paradise', 'Ecological tour', 'Scenic Rift Valley drive'],
        travelTime: '2-3 hours driving',
        distance: '90 km'
      }
    ]
  },
  {
    id: "the-great-lakes-2-days-1-night-naivasha-2025",
    name: "The Great Lakes 2 Days 1 Night Naivasha 2025",
    description: "Explore Lake Naivasha's beautiful scenery, wildlife, and boat rides on this quick getaway.",
    price: "Ksh4,500",
    location: "Naivasha",
    rating: 4.5,
    duration: 2,
    category: "Flying Safari",
    highlights: [
      "Lake Naivasha boat rides",
      "Beautiful scenic landscapes",
      "Wildlife viewing opportunities",
      "Quick weekend escape",
      "Great Rift Valley experience"
    ],
    includes: [
      "1 night lakeside accommodation",
      "Guided boat ride",
      "Wildlife viewing tour",
      "Meals as specified",
      "Transport within Naivasha"
    ],
    excludes: [
      "Transport to/from Naivasha",
      "Personal expenses",
      "Optional activities",
      "Tips and gratuities"
    ],
    bestTimeToVisit: "Year-round destination",
    difficulty: "Easy",
    groupSize: "2-6 people",
    accommodation: "Lakeside cottage",
    transport: "Boat and vehicle"
  },
  {
    id: "nakuru-weekend-getaways",
    name: "Nakuru Weekend Getaways",
    description: "Nakuru is renowned for hosting Lake Nakuru National Park, where visitors can embark on game drives to witness diverse wildlife in a relatively small area. The park is a haven for both black and white rhinoceros.",
    price: "Ksh11,750",
    location: "Nakuru",
    rating: 4.5,
    duration: 2,
    category: "Flying Safari",
    highlights: [
      "Lake Nakuru National Park",
      "Black and white rhino sanctuary",
      "Flamingo viewing",
      "Diverse wildlife in compact area",
      "Weekend game drives"
    ],
    includes: [
      "Park lodge accommodation",
      "Game drives in Lake Nakuru NP",
      "Park entrance fees",
      "Professional guide",
      "Meals as specified",
      "Transport in 4x4 vehicle"
    ],
    excludes: [
      "Transport to/from Nakuru",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    bestTimeToVisit: "Year-round, best for flamingos July-October",
    difficulty: "Easy",
    groupSize: "2-6 people",
    accommodation: "Park lodge",
    transport: "4x4 safari vehicle",
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Nakuru - Rhino Sanctuary Adventure',
        departureTime: '07:00 AM',
        activities: [
          {
            time: '07:00 AM',
            activity: 'Departure from Nairobi',
            description: 'Early morning departure from Nairobi with scenic drive through the Great Rift Valley',
            location: 'Nairobi'
          },
          {
            time: '09:00 AM',
            activity: 'Great Rift Valley Viewpoint',
            description: 'Stop at viewpoint for panoramic views and photo opportunities',
            location: 'Great Rift Valley Viewpoint'
          },
          {
            time: '11:00 AM',
            activity: 'Arrival at Lake Nakuru NP',
            description: 'Arrive at Lake Nakuru National Park and begin game drive',
            location: 'Lake Nakuru National Park'
          },
          {
            time: '01:00 PM',
            activity: 'Lunch at Lodge',
            description: 'Check-in at lodge and enjoy lunch',
            location: 'Lake Nakuru Lodge'
          },
          {
            time: '03:00 PM',
            activity: 'Afternoon Game Drive',
            description: 'Afternoon game drive focusing on rhino sanctuary and flamingo viewing',
            location: 'Lake Nakuru National Park'
          },
          {
            time: '06:00 PM',
            activity: 'Return to Lodge',
            description: 'Return to lodge for relaxation and dinner',
            location: 'Lake Nakuru Lodge'
          }
        ],
        meals: {
          breakfast: 'Continental breakfast at Nairobi hotel',
          lunch: 'Buffet lunch at lodge',
          dinner: '3-course dinner with African cuisine'
        },
        accommodation: {
          name: 'Lake Nakuru Lodge',
          type: 'lodge',
          rating: 4,
          description: 'Comfortable lodge inside Lake Nakuru National Park with wildlife views'
        },
        highlights: ['Great Rift Valley scenery', 'First rhino sightings', 'Flamingo viewing', 'Lake Nakuru landscapes'],
        travelTime: '3-4 hours driving',
        distance: '160 km'
      },
      {
        day: 2,
        title: 'Full Game Drive & Return to Nairobi',
        departureTime: '06:30 AM',
        activities: [
          {
            time: '06:30 AM',
            activity: 'Early Morning Game Drive',
            description: 'Pre-breakfast game drive when wildlife is most active',
            location: 'Lake Nakuru National Park'
          },
          {
            time: '09:00 AM',
            activity: 'Breakfast at Lodge',
            description: 'Return to lodge for breakfast',
            location: 'Lake Nakuru Lodge'
          },
          {
            time: '10:30 AM',
            activity: 'Final Game Drive',
            description: 'Final game drive to see any missed wildlife and visit Baboon Cliff',
            location: 'Lake Nakuru National Park'
          },
          {
            time: '12:30 PM',
            activity: 'Check-out & Lunch',
            description: 'Check-out and enjoy lunch at the lodge',
            location: 'Lake Nakuru Lodge'
          },
          {
            time: '02:00 PM',
            activity: 'Departure for Nairobi',
            description: 'Begin journey back to Nairobi',
            location: 'Lake Nakuru'
          },
          {
            time: '05:00 PM',
            activity: 'Arrival in Nairobi',
            description: 'Arrive back in Nairobi and transfer to your hotel',
            location: 'Nairobi'
          }
        ],
        meals: {
          breakfast: 'Full breakfast at lodge',
          lunch: 'Lunch at lodge',
          dinner: 'Not included (arrive in evening)'
        },
        accommodation: {
          name: 'Not included',
          type: 'hotel',
          rating: 0,
          description: 'Return to your Nairobi hotel'
        },
        highlights: ['Predator sightings', 'Rhino sanctuary experience', 'Baboon Cliff views', 'Flamingo spectacle'],
        travelTime: '3-4 hours driving',
        distance: '160 km'
      }
    ]
  },
  {
    id: "the-great-lakes-2-days-2025-nakuru",
    name: "The Great Lakes 2 Days 2025 Nakuru",
    description: "Experience Lake Nakuru's flamingos and rhino sanctuary on this weekend escape.",
    price: "Ksh11,750",
    location: "Nakuru",
    rating: 4.5,
    duration: 2,
    category: "Flying Safari",
    highlights: [
      "Lake Nakuru flamingo viewing",
      "Rhino sanctuary experience",
      "Weekend escape",
      "Great Rift Valley lakes",
      "Compact wildlife area"
    ],
    includes: [
      "1 night park accommodation",
      "Lake Nakuru game drives",
      "Park entrance fees",
      "Professional guide",
      "Meals as specified",
      "Transport in 4x4 vehicle"
    ],
    excludes: [
      "Transport to/from Nakuru",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    bestTimeToVisit: "Year-round, best for flamingos July-October",
    difficulty: "Easy",
    groupSize: "2-6 people",
    accommodation: "Park lodge",
    transport: "4x4 safari vehicle"
  },
  {
    id: "nakuru-summer-deals-2-days-1-night",
    name: "Nakuru Summer Deals 2 Days 1 Night",
    description: "Summer special rates for Lake Nakuru weekend getaway.",
    price: "Ksh11,750",
    location: "Nakuru",
    rating: 4.5,
    duration: 2,
    category: "Flying Safari",
    highlights: [
      "Summer special rates",
      "Lake Nakuru weekend getaway",
      "Flamingo viewing",
      "Rhino sanctuary",
      "Budget-friendly option"
    ],
    includes: [
      "1 night accommodation",
      "Lake Nakuru game drives",
      "Park entrance fees",
      "Professional guide",
      "Meals as specified",
      "Transport in 4x4 vehicle"
    ],
    excludes: [
      "Transport to/from Nakuru",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    bestTimeToVisit: "Year-round, best for flamingos July-October",
    difficulty: "Easy",
    groupSize: "2-6 people",
    accommodation: "Park lodge",
    transport: "4x4 safari vehicle"
  },
  {
    id: "the-great-lake-elementaita-self-drive",
    name: "The Great Lake Elementaita Self Drive",
    description: "Self-drive adventure to Lake Elementaita with its unique soda lake ecosystem and diverse birdlife.",
    price: "Ksh3,800",
    location: "Elementaita",
    rating: 4.5,
    duration: 2,
    category: "Flying Safari",
    highlights: [
      "Lake Elementaita soda lake ecosystem",
      "Diverse birdlife viewing",
      "Self-drive adventure",
      "Great Rift Valley experience",
      "Ecologically significant destination"
    ],
    includes: [
      "Basic accommodation",
      "Lake Elementaita access",
      "Bird watching guide",
      "Meals as specified"
    ],
    excludes: [
      "Vehicle and fuel",
      "Transport to Elementaita",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    bestTimeToVisit: "Year-round, best for birds November-April",
    difficulty: "Easy",
    groupSize: "2-4 people",
    accommodation: "Basic lodge",
    transport: "Self-drive"
  },
  {
    id: "mt-kenya-2025-getaways-2-days-1-night",
    name: "MT.Kenya 2025 Getaways 2 Days 1 Night",
    description: "Explore Mount Kenya's beautiful landscapes and unique mountain ecosystems.",
    price: "Ksh5,100",
    location: "Mt Kenya",
    rating: 4.5,
    duration: 2,
    category: "Flying Safari",
    highlights: [
      "Mount Kenya landscapes",
      "Unique mountain ecosystems",
      "Mountain hiking trails",
      "Scenic views",
      "Weekend mountain escape"
    ],
    includes: [
      "Mountain lodge accommodation",
      "Guided nature walks",
      "Meals as specified",
      "Park entrance fees",
      "Professional guide"
    ],
    excludes: [
      "Transport to Mt Kenya",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities",
      "Climbing equipment"
    ],
    bestTimeToVisit: "Year-round, best January-February, September-October",
    difficulty: "Moderate",
    groupSize: "2-6 people",
    accommodation: "Mountain lodge",
    transport: "Walking/hiking"
  },
  {
    id: "mt-kenya-chama-deals-2-days-1-night",
    name: "MT.Kenya Chama Deals 2 Days 1 Night",
    description: "Group rates for Mount Kenya getaways. Perfect for chamas and friends.",
    price: "Ksh5,100",
    location: "Mt Kenya",
    rating: 4.5,
    duration: 2,
    category: "Flying Safari",
    highlights: [
      "Group rates for chamas",
      "Mount Kenya experience",
      "Friends getaway",
      "Mountain landscapes",
      "Budget-friendly group option"
    ],
    includes: [
      "Shared mountain accommodation",
      "Group activities",
      "Meals as specified",
      "Park entrance fees",
      "Group guide"
    ],
    excludes: [
      "Transport to Mt Kenya",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    bestTimeToVisit: "Year-round, best January-February, September-October",
    difficulty: "Moderate",
    groupSize: "4-12 people",
    accommodation: "Shared mountain lodge",
    transport: "Walking/hiking"
  },
  {
    id: "mt-kenya-2025-2-days-1-night",
    name: "Mt Kenya 2025 2 Days 1 Night",
    description: "Short getaway to the majestic Mt Kenya region with scenic views and nature walks.",
    price: "Ksh9,300",
    location: "Mt Kenya",
    rating: 4.5,
    duration: 2,
    category: "Flying Safari",
    highlights: [
      "Majestic Mt Kenya views",
      "Scenic nature walks",
      "Mountain ecosystems",
      "Short getaway experience",
      "Premium accommodation"
    ],
    includes: [
      "Premium mountain lodge",
      "Guided nature walks",
      "All meals included",
      "Park entrance fees",
      "Professional guide",
      "Transport within Mt Kenya"
    ],
    excludes: [
      "Transport to Mt Kenya",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    bestTimeToVisit: "Year-round, best January-February, September-October",
    difficulty: "Moderate",
    groupSize: "2-6 people",
    accommodation: "Premium mountain lodge",
    transport: "Private vehicle"
  },
  {
    id: "nairobi-staycations",
    name: "Nairobi Staycations",
    description: "Discover luxury staycation options in Nairobi without traveling far from home.",
    price: "Ksh5,200",
    location: "Nairobi",
    rating: 4.5,
    duration: 2,
    category: "Flying Safari",
    highlights: [
      "Luxury staycation in Nairobi",
      "City hotel experience",
      "No travel required",
      "Urban relaxation",
      "Local attractions"
    ],
    includes: [
      "Luxury city hotel accommodation",
      "Breakfast and dinner",
      "Hotel facilities access",
      "City tour",
      "Airport transfers"
    ],
    excludes: [
      "Personal expenses",
      "Lunch and additional meals",
      "Tips and gratuities",
      "Optional activities"
    ],
    bestTimeToVisit: "Year-round destination",
    difficulty: "Easy",
    groupSize: "2-4 people",
    accommodation: "Luxury city hotel",
    transport: "Private vehicle"
  },
  {
    id: "nairobi-staycations-2-days-1-nights",
    name: "Nairobi Staycations 2 Days 1 Nights",
    description: "Extended Nairobi staycation experience at premium city hotels.",
    price: "Ksh5,200",
    location: "Nairobi Staycations",
    rating: 4.5,
    duration: 2,
    category: "Flying Safari",
    highlights: [
      "Extended staycation experience",
      "Premium city hotels",
      "Full weekend escape",
      "Urban luxury",
      "Local cuisine experience"
    ],
    includes: [
      "Premium hotel accommodation",
      "All meals included",
      "Spa access",
      "City tours",
      "Airport transfers"
    ],
    excludes: [
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities",
      "Shopping expenses"
    ],
    bestTimeToVisit: "Year-round destination",
    difficulty: "Easy",
    groupSize: "2-4 people",
    accommodation: "Premium city hotel",
    transport: "Private vehicle"
  }
];

export function getPackageById(id: string): Package | undefined {
  return allPackages.find(pkg => pkg.id === id);
}

export function getPackagesByCategory(category: string): Package[] {
  if (category === "All") return allPackages;
  return allPackages.filter(pkg => pkg.category === category);
}

export function searchPackages(query: string): Package[] {
  const searchTerm = query.toLowerCase();
  return allPackages.filter(pkg => 
    pkg.name.toLowerCase().includes(searchTerm) ||
    pkg.location.toLowerCase().includes(searchTerm) ||
    pkg.description.toLowerCase().includes(searchTerm) ||
    pkg.category.toLowerCase().includes(searchTerm)
  );
}
