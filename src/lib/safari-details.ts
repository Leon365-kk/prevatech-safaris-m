import nature2 from '@/assets/nature 2.jpg';
import animal3 from '@/assets/animal 3.jpg';
import fleet1 from '@/assets/fleet 1.jpg';
import nature3 from '@/assets/nature 3.jpg';
import animal4 from '@/assets/animal4.jpg';
import nature4 from '@/assets/nature 4.jpg';

export interface ItineraryDay {
  day: number;
  title: string;
  departureTime?: string;
  activities: {
    time: string;
    activity: string;
    description: string;
    location?: string;
  }[];
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
  accommodation: {
    name: string;
    type: 'lodge' | 'camp' | 'hotel' | 'resort';
    rating: number;
    description: string;
  };
  highlights: string[];
  travelTime?: string;
  distance?: string;
}

export interface TravelGuide {
  whatToPack: {
    essentials: string[];
    clothing: string[];
    documents: string[];
    health: string[];
    electronics: string[];
    optional: string[];
  };
  beforeYouTravel: {
    visa: {
      required: boolean;
      types: string[];
      processingTime: string;
      cost: string;
      requirements: string[];
    };
    weather: {
      seasons: {
        name: string;
        months: string;
        temperature: string;
        rainfall: string;
        bestFor: string[];
      }[];
    };
    health: {
      vaccinations: string[];
      malaria: string;
      insurance: string;
    };
    money: {
      currency: string;
      paymentMethods: string[];
      tipping: string;
    };
  };
  cameraTips: {
    equipment: string[];
    bestTimes: string[];
    wildlife: string[];
    landscapes: string[];
    etiquette: string[];
  };
}

export interface MediaAsset {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  description: string;
  location: string;
  category: 'wildlife' | 'landscape' | 'accommodation' | 'activities' | 'culture';
  featured: boolean;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  location: {
    country: string;
    region: string;
    coordinates?: { lat: number; lng: number };
  };
  highlights: string[];
  bestTimeToVisit: string;
  wildlife: string[];
  activities: string[];
  climate: string;
  gettingThere: string[];
  media: MediaAsset[];
}

export interface ThemedPackage {
  id: string;
  name: string;
  theme: 'honeymoon' | 'family' | 'birding' | 'photography' | 'budget' | 'luxury';
  description: string;
  duration: number;
  price: {
    from: number;
    to: number;
    currency: string;
  };
  includes: string[];
  bestFor: string[];
  destinations: string[];
  itinerary: ItineraryDay[];
  travelGuide: TravelGuide;
  media: MediaAsset[];
  popular: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    bio: string;
  };
  category: 'tips' | 'guides' | 'destinations' | 'wildlife' | 'culture';
  tags: string[];
  publishedAt: Date;
  readTime: number;
  featured: boolean;
  image: any; // Accept imported image objects
}

// Sample detailed itineraries
export const sampleItineraries: Record<string, ItineraryDay[]> = {
  'maasai-mara-3days': [
    {
      day: 1,
      title: 'Nairobi to Maasai Mara - Journey to the Wild',
      departureTime: '07:00 AM',
      activities: [
        {
          time: '07:00 AM',
          activity: 'Departure from Nairobi',
          description: 'Early morning departure from your Nairobi hotel with scenic drive through the Great Rift Valley',
          location: 'Nairobi'
        },
        {
          time: '10:00 AM',
          activity: 'Great Rift Valley Viewpoint',
          description: 'Stop at the scenic viewpoint overlooking the Great Rift Valley with photo opportunities',
          location: 'Great Rift Valley'
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
      highlights: ['Great Rift Valley scenery', 'First wildlife sightings', 'Mara River views'],
      travelTime: '5-6 hours driving',
      distance: '270 km'
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
      title: 'Final Game Drive & Return to Nairobi',
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
          activity: 'Check-out & Departure',
          description: 'Check-out and begin journey back to Nairobi',
          location: 'Maasai Mara'
        },
        {
          time: '01:00 PM',
          activity: 'Lunch En Route',
          description: 'Lunch at a scenic restaurant in the Great Rift Valley',
          location: 'Great Rift Valley'
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
        lunch: 'Lunch at Rift Valley restaurant',
        dinner: 'Not included (arrive in evening)'
      },
      accommodation: {
        name: 'Not included',
        type: 'hotel',
        rating: 0,
        description: 'Return to your Nairobi hotel or airport transfer'
      },
      highlights: ['Final wildlife sightings', 'Scenic drive back', 'Great Rift Valley views'],
      travelTime: '5-6 hours driving',
      distance: '270 km'
    }
  ]
};

// Sample travel guides
export const sampleTravelGuide: TravelGuide = {
  whatToPack: {
    essentials: [
      'Valid passport (6+ months validity)',
      'Visa (if required)',
      'Travel insurance documents',
      'Flight tickets and confirmations',
      'Emergency contact information',
      'Cash in local currency (KES)'
    ],
    clothing: [
      'Lightweight, breathable clothing in neutral colors',
      'Long-sleeved shirts and pants (evening protection)',
      'Comfortable walking shoes/boots',
      'Wide-brimmed hat and sunglasses',
      'Light jacket or fleece for cool evenings',
      'Swimwear (if lodge has pool)',
      'Rain jacket (seasonal)'
    ],
    documents: [
      'Passport copies',
      'Visa copies',
      'Travel insurance policy',
      'Medical prescriptions',
      'Accommodation confirmations',
      'Emergency contacts'
    ],
    health: [
      'Insect repellent (DEET 30%+)',
      'Sunscreen (SPF 30+)',
      'Basic first aid kit',
      'Personal medications',
      'Anti-malaria tablets (consult doctor)',
      'Hand sanitizer'
    ],
    electronics: [
      'Camera with extra batteries',
      'Binoculars',
      'Phone and charger',
      'Power bank',
      'Universal adapter (UK Type G plugs)',
      'Flashlight/headlamp'
    ],
    optional: [
      'Field guide books',
      'Notebook and pen',
      'Snacks for game drives',
      'Wet wipes',
      'Lip balm with SPF'
    ]
  },
  beforeYouTravel: {
    visa: {
      required: true,
      types: ['Tourist Visa', 'eVisa'],
      processingTime: '2-3 business days (eVisa)',
      cost: '$50 (single entry)',
      requirements: [
        'Valid passport (6+ months)',
        'Passport photo',
        'Travel itinerary',
        'Proof of accommodation',
        'Return ticket'
      ]
    },
    weather: {
      seasons: [
        {
          name: 'Dry Season',
          months: 'June - October, January - February',
          temperature: '20-30°C (68-86°F)',
          rainfall: 'Low',
          bestFor: ['Wildlife viewing', 'Great Migration', 'Photography']
        },
        {
          name: 'Green Season',
          months: 'March - May, November - December',
          temperature: '18-28°C (64-82°F)',
          rainfall: 'High',
          bestFor: ['Bird watching', 'Lush landscapes', 'Fewer crowds', 'Lower prices']
        }
      ]
    },
    health: {
      vaccinations: ['Yellow fever (if coming from endemic country)', 'Hepatitis A & B', 'Typhoid', 'Tetanus'],
      malaria: 'Risk in some areas - consult doctor about prophylaxis',
      insurance: 'Comprehensive travel insurance with medical evacuation recommended'
    },
    money: {
      currency: 'Kenyan Shilling (KES)',
      paymentMethods: ['Credit cards (major lodges)', 'Cash (KES, USD)', 'Mobile money (M-Pesa)'],
      tipping: '10% for guides, $5-10 for lodge staff per day'
    }
  },
  cameraTips: {
    equipment: [
      'DSLR or mirrorless camera with zoom lens (200-600mm)',
      'Wide-angle lens for landscapes',
      'Extra batteries and memory cards',
      'Bean bag or monopod for vehicle stability',
      'Lens cleaning kit',
      'Camera bag with rain protection'
    ],
    bestTimes: [
      'Golden hours (6-8 AM, 5-7 PM)',
      'Overcast days for even lighting',
      'Dry season for clearer conditions'
    ],
    wildlife: [
      'Use fast shutter speeds (1/1000+)',
      'Focus on the eyes',
      'Capture behavior, not just portraits',
      'Be patient and observant'
    ],
    landscapes: [
      'Use wide-angle for sweeping vistas',
      'Include elements for scale',
      'Shoot during golden hours',
      'Use polarizing filter for skies'
    ],
    etiquette: [
      'Never feed wildlife',
      'Keep distance from animals',
      'Respect guide instructions',
      'Be considerate of other photographers'
    ]
  }
};

// Sample destinations with media
export const destinations: Destination[] = [
  {
    id: 'maasai-mara',
    name: 'Maasai Mara National Reserve',
    description: 'Kenya\'s premier game reserve, famous for the Great Migration and abundant wildlife',
    location: {
      country: 'Kenya',
      region: 'Southwest Kenya',
      coordinates: { lat: -1.2921, lng: 35.0419 }
    },
    highlights: [
      'Great Migration (July-October)',
      'Big Five sightings',
      'Mara River crossings',
      'Hot air balloon safaris',
      'Maasai cultural visits'
    ],
    bestTimeToVisit: 'July-October for migration, January-February for general wildlife',
    wildlife: [
      'Lions', 'Leopards', 'Elephants', 'Rhinos', 'Buffaloes',
      'Wildebeest', 'Zebras', 'Giraffes', 'Cheetahs', 'Hyenas'
    ],
    activities: [
      'Game drives', 'Balloon safaris', 'Walking safaris',
      'Cultural visits', 'Photography tours', 'Bush dinners'
    ],
    climate: 'Altitude 1,500-2,200m. Warm days (25-28°C), cool nights (10-15°C)',
    gettingThere: [
      'Flight: 45 min from Nairobi to Mara Serena airstrip',
      'Road: 5-6 hours from Nairobi via Narok'
    ],
    media: []
  },
  {
    id: 'amboseli',
    name: 'Amboseli National Park',
    description: 'Famous for large elephant herds and spectacular views of Mount Kilimanjaro',
    location: {
      country: 'Kenya',
      region: 'Southern Kenya',
      coordinates: { lat: -2.6315, lng: 37.2415 }
    },
    highlights: [
      'Mount Kilimanjaro views',
      'Large elephant herds',
      'Swamp habitats',
      'Bird watching',
      'Cultural interactions'
    ],
    bestTimeToVisit: 'June-October, January-February',
    wildlife: [
      'Elephants', 'Lions', 'Leopards', 'Buffaloes', 'Zebras',
      'Wildebeest', 'Giraffes', 'Hippos', 'Various bird species'
    ],
    activities: [
      'Game drives', 'Bird watching', 'Cultural visits',
      'Photography', 'Nature walks'
    ],
    climate: 'Hot and dry (25-30°C). Cool nights (15-20°C)',
    gettingThere: [
      'Flight: 45 min from Nairobi',
      'Road: 4 hours from Nairobi'
    ],
    media: []
  }
];

// Sample blog posts with imported images
export const blogPosts: BlogPost[] = [
  {
    id: 'best-time-visit-kenya',
    title: 'Best Time to Visit Kenya: A Complete Guide',
    slug: 'best-time-to-visit-kenya',
    excerpt: 'Discover the optimal seasons for your Kenyan safari adventure, from the Great Migration to bird watching paradise.',
    content: `# Best Time to Visit Kenya: A Complete Guide

Planning a Kenyan safari requires careful consideration of timing. Each season offers unique experiences, from the world-famous Great Migration to excellent bird watching opportunities.

## The Great Migration (July - October)

The peak season for safari enthusiasts, this is when millions of wildebeest, zebras, and gazelles make their dramatic journey across the Maasai Mara. The Mara River crossings, typically occurring in July and August, are among nature's most spectacular events.

**What to Expect:**
- Large predator concentrations following the herds
- Excellent photography opportunities
- Higher visitor numbers and premium pricing
- Dry, pleasant weather conditions

## Dry Season (January - February, June - October)

These months offer optimal wildlife viewing conditions. Vegetation is sparse, animals congregate around water sources, and the weather is generally sunny and dry.

**Highlights:**
- Prime wildlife viewing around waterholes
- Comfortable temperatures (20-30°C)
- Excellent road conditions
- Peak season rates apply

## Green Season (March - May, November - December)

While often overlooked, the green season has its own unique appeal. The landscape transforms into lush greenery, and newborn animals make their first appearance.

**Advantages:**
- Lower prices and fewer crowds
- Excellent bird watching with migratory species
- Dramatic storm clouds for photography
- Lush, green landscapes

## Special Events Calendar

- **January-February:** Calving season in Ndutu
- **July-August:** Mara River crossings
- **September:** Predator action peaks
- **November:** Short rains begin, bird migration starts

## Weather Patterns by Region

**Maasai Mara:** Altitude creates moderate temperatures year-round
**Amboseli:** Hot and dry, best views of Kilimanjaro in early morning
**Samburu:** Warm and arid, excellent for unique northern species
**Coast:** Hot and humid year-round with sea breezes

## Booking Recommendations

- **Peak Season (July-Oct, Jan-Feb):** Book 6-12 months in advance
- **Shoulder Season (Mar, Jun, Nov):** Book 3-6 months ahead
- **Green Season (Apr-May, Dec):** More flexibility, last-minute deals available

The best time to visit Kenya ultimately depends on your priorities. Whether you're seeking the drama of the migration, the intimacy of the green season, or the perfect balance of weather and wildlife, Kenya offers exceptional safari experiences year-round.`,
    author: {
      name: 'Sarah Johnson',
      bio: 'Wildlife photographer and safari guide with 10+ years experience in East Africa'
    },
    category: 'guides',
    tags: ['seasons', 'migration', 'weather', 'planning'],
    publishedAt: new Date('2024-01-15'),
    readTime: 8,
    featured: true,
    image: nature2
  },
  {
    id: 'first-time-safari-tips',
    title: 'First-Time Safari Tips: Everything You Need to Know',
    slug: 'first-time-safari-tips',
    excerpt: 'Essential tips and tricks for your first African safari adventure, from packing to wildlife spotting.',
    content: `# First-Time Safari Tips: Everything You Need to Know

Embarking on your first African safari is an exciting experience. Here's everything you need to know to make it unforgettable.

## Packing Essentials

**Clothing:**
- Neutral colors (khaki, olive, brown) - avoid bright colors
- Lightweight, breathable fabrics
- Long-sleeved shirts and pants for evenings
- Comfortable walking shoes
- Wide-brimmed hat and sunglasses
- Light jacket for early morning drives

**Equipment:**
- Binoculars (8x42 or 10x42 recommended)
- Camera with zoom lens
- Extra batteries and memory cards
- Flashlight or headlamp
- Power bank for charging devices

## Health and Safety

**Medical Preparations:**
- Consult your doctor about malaria prophylaxis
- Update routine vaccinations
- Carry personal medications
- Pack a basic first aid kit
- Bring insect repellent (DEET 30%+)

**Safety Guidelines:**
- Always follow your guide's instructions
- Never feed wildlife
- Keep windows up in areas with predators
- Stay seated during game drives
- Respect animals' space

## Wildlife Viewing Tips

**Best Times for Viewing:**
- Early morning (6-9 AM) - predators are active
- Late afternoon (4-7 PM) - animals come to drink
- Avoid midday heat when animals rest

**Photography Tips:**
- Use fast shutter speeds (1/1000+ for moving animals)
- Focus on the eyes
- Include environment for context
- Be patient and observant
- Respect other photographers' space

## Cultural Etiquette

**When Visiting Local Communities:**
- Ask permission before taking photos
- Dress modestly
- Learn a few local phrases
- Support local artisans
- Respect cultural differences

## Safari Vehicle Etiquette

**Do's:**
- Listen to your guide
- Keep quiet around wildlife
- Share viewing opportunities
- Tip your guide appropriately

**Don'ts:**
- Stand up or make sudden movements
- Play loud music
- Feed any animals
- Litter

## Money Matters

**Currency:**
- Kenyan Shilling (KES) for local purchases
- US Dollars widely accepted at lodges
- Credit cards accepted at major establishments
- Carry small bills for tips and souvenirs

**Tipping Guidelines:**
- Guide: $10-20 per day
- Driver: $5-10 per day
- Lodge staff: $5-10 per day
- Porters: $2-3 per bag

## What to Expect on Safari

**Daily Schedule:**
- 6:00 AM: Early morning game drive
- 9:00 AM: Breakfast at camp/lodge
- 10:00 AM: Rest time or optional activities
- 1:00 PM: Lunch
- 4:00 PM: Afternoon game drive
- 7:00 PM: Dinner

**Accommodation:**
- Lodges range from budget to luxury
- Tented camps offer authentic experience
- All include meals and game drives
- Most have swimming pools and bars

## Common Mistakes to Avoid

1. **Overpacking** - Pack light, laundry service available
2. **Wrong clothing** - Bright colors scare wildlife
3. **Unrealistic expectations** - Nature is unpredictable
4. **Not listening to your guide** - They know best
5. **Forgetting to disconnect** - Embrace the experience

## Final Tips

- Bring an open mind and flexible attitude
- Stay hydrated and use sunscreen
- Keep a journal of your sightings
- Buy travel insurance
- Most importantly: enjoy every moment!

Your first safari will be an adventure you'll never forget. With proper preparation and an open heart, you'll return home with incredible memories and a deeper appreciation for Africa's wild beauty.`,
    author: {
      name: 'Michael Kariuki',
      bio: 'Professional safari guide and naturalist based in Nairobi'
    },
    category: 'tips',
    tags: ['beginner', 'tips', 'preparation', 'wildlife'],
    publishedAt: new Date('2024-01-10'),
    readTime: 6,
    featured: false,
    image: animal3
  },
  {
    id: 'airport-transfer-guide',
    title: 'Airport Transfer Guide: Jomo Kenyatta & Wilson Airports',
    slug: 'airport-transfer-kenya',
    excerpt: 'Complete guide to airport transfers in Nairobi, including options, costs, and what to expect upon arrival.',
    content: `# Airport Transfer Guide: Jomo Kenyatta & Wilson Airports

Arriving in Nairobi can be overwhelming, but with the right preparation, your airport transfer can be smooth and stress-free. This comprehensive guide covers everything you need to know.

## Jomo Kenyatta International Airport (JKIA)

**Overview:**
- Kenya's main international airport
- Located 15km from Nairobi city center
- Handles international and domestic flights
- Open 24 hours

**Transfer Options:**

### 1. Pre-booked Private Transfer
**Cost:** $35-60
**Duration:** 30-90 minutes (depending on traffic)
**Pros:** Door-to-door service, reliable, fixed price
**Cons:** More expensive than other options

**What to Expect:**
- Driver meets you at arrivals with name sign
- Assistance with luggage
- Air-conditioned vehicle
- Professional, English-speaking driver

### 2. Hotel Shuttle Service
**Cost:** $15-30 per person
**Duration:** 45-120 minutes
**Pros:** Cost-effective for solo travelers, direct to hotel
**Cons:** Shared ride, fixed schedule

### 3. Taxi Services
**Cost:** $20-40
**Duration:** 30-90 minutes
**Pros:** Readily available, no advance booking needed
**Cons:** Variable quality, need to negotiate price

**Recommended Taxi Companies:**
- Kenatco taxis (official airport taxis)
- Uber (available at JKIA)
- Little Cab (popular local option)

### 4. Public Transport
**Cost:** $1-3
**Duration:** 60-120 minutes
**Pros:** Cheapest option
**Cons:** Not recommended for first-time visitors, crowded

## Wilson Airport

**Overview:**
- Primarily domestic flights
- Located 6km from city center
- Hub for safari charter flights
- Smaller and less crowded than JKIA

**Transfer Options:**
- Taxi: $15-25 (20-45 minutes)
- Hotel shuttle: $10-20 (30-60 minutes)
- Public transport: $1-2 (45-75 minutes)

## What to Expect Upon Arrival

### Immigration and Customs
**Process:**
1. Disembark and follow signs to immigration
2. Complete arrival form (if not done online)
3. Present passport and visa/entry requirements
4. Collect luggage
5. Proceed through customs

**Time Required:**
- 30-90 minutes depending on passenger volume
- Longer during peak travel seasons

### Visa Requirements
**Eligible for Visa on Arrival:**
- Most European countries
- USA, Canada, Australia
- Many Asian countries

**eVisa Recommended:**
- Apply online at www.ecitizen.go.ke
- Processing time: 2-3 business days
- Cost: $50 for single entry

## Money Exchange

**At JKIA:**
- Multiple banks and exchange bureaus
- Competitive rates
- Open 24 hours
- ATMs available

**Recommended Currency:**
- US Dollars widely accepted
- Kenyan Shillings for small purchases
- Credit cards accepted at major establishments

## Safety Tips

**General Safety:**
- Use official airport taxis or pre-booked transfers
- Avoid accepting rides from unofficial drivers
- Keep valuables secure and out of sight
- Have your hotel address written down

**Scams to Avoid:**
- "Free" city tours
- Overpriced currency exchange
- Fake porters demanding tips
- Unofficial tour operators

## Traffic Considerations

**Peak Hours:**
- 7:00-9:00 AM
- 5:00-8:00 PM
- Friday afternoons

**Travel Time Estimates:**
- Off-peak: 30-45 minutes to city center
- Peak hours: 60-120 minutes
- Rainy season: Add 30-45 minutes

## Special Services

### Accessibility Services
- Wheelchair assistance available
- Special needs transportation
- Advance notice recommended

### Business Class Services
- Fast-track immigration
- VIP lounge access
- Premium transfer options

### Group Transfers
- Minibuses for 6-25 passengers
- Coaches for larger groups
- Group discounts available

## Connecting to Domestic Flights

**JKIA to Wilson:**
- Distance: 20km
- Transfer time: 45-90 minutes
- Allow 3-4 hours between flights

**Domestic Terminal:**
- Separate from international terminal
- Smaller and quicker processing
- 30-minute check-in requirement

## Weather Considerations

**Rainy Seasons:**
- March-May (long rains)
- November-December (short rains)
- Allow extra travel time
- Possible flight delays

## Booking Recommendations

**Advance Booking:**
- Book transfers 48+ hours ahead
- Confirm flight details with transfer company
- Have backup contact numbers
- Share itinerary with hotel

**Last-Minute Options:**
- Official airport taxis (Kenatco)
- Ride-sharing apps (Uber, Little)
- Hotel reception can arrange transfers

## What to Have Ready

**Documents:**
- Passport and visa
- Flight confirmation
- Hotel booking confirmation
- Transfer booking details

**Contact Information:**
- Hotel phone number
- Transfer company contact
- Emergency contacts
- Local embassy information

## Final Tips

1. **Stay Calm:** Nairobi airports can be busy but are generally efficient
2. **Be Patient:** Immigration can take time during peak periods
3. **Keep Copies:** Have digital and physical copies of important documents
4. **Stay Hydrated:** Nairobi's altitude can cause dehydration
5. **Enjoy the Journey:** Your Kenyan adventure begins the moment you land!

With proper preparation, your Nairobi airport transfer will be the smooth start to an incredible African adventure. Welcome to Kenya!`,
    author: {
      name: 'Grace Wangari',
      bio: 'Travel logistics specialist and Nairobi local expert'
    },
    category: 'guides',
    tags: ['airport', 'transfer', 'nairobi', 'logistics'],
    publishedAt: new Date('2024-01-05'),
    readTime: 5,
    featured: false,
    image: fleet1
  },
  {
    id: 'wildlife-photography-tips',
    title: 'Wildlife Photography Tips: Capture Amazing Safari Moments',
    slug: 'wildlife-photography-tips',
    excerpt: 'Master the art of wildlife photography with expert tips for capturing stunning safari moments.',
    content: `# Wildlife Photography Tips

Capture stunning safari moments with these essential photography tips.

## Equipment Basics
- DSLR/mirrorless camera with telephoto lens
- Extra batteries and memory cards
- Bean bag for vehicle stability
- Weather protection

## Camera Settings
- Fast shutter (1/1000s+) for action
- Wide aperture (f/2.8-f/4) for portraits
- ISO 100-800 for daylight
- Focus on the eyes

## Best Times
- Golden hours: 6-8 AM, 5-7 PM
- Overcast days for even lighting
- Avoid harsh midday sun

## Composition Tips
- Rule of thirds
- Eye-level shots
- Include environment context
- Patience is key

## Ethics
- Respect wildlife distance
- Never feed animals
- Follow guide instructions
- Put animals first`,
    author: {
      name: 'David Miller',
      bio: 'Professional wildlife photographer with 15+ years documenting African wildlife'
    },
    category: 'tips',
    tags: ['photography', 'wildlife', 'equipment', 'tips'],
    publishedAt: new Date('2024-01-20'),
    readTime: 7,
    featured: true,
    image: animal4
  },
  {
    id: 'kenya-budget-safari',
    title: 'Budget Safari in Kenya: Affordable Adventure Guide',
    slug: 'kenya-budget-safari',
    excerpt: 'Experience the magic of Kenyan safaris without breaking the bank with our comprehensive budget guide.',
    content: `# Budget Safari in Kenya

Enjoy incredible wildlife adventures on a budget with smart planning.

## Budget Accommodation
- Budget lodges: $50-100/night
- Camping: $20-40/night
- Self-catering options
- Local guesthouses

## Transportation
- Self-drive 4x4 rental: $60-100/day
- Public transport options
- Group tour sharing
- Local shuttle services

## Money-Saving Tips
- Travel off-season (Mar-May, Nov-Dec)
- Join group tours
- Book directly with lodges
- Use local restaurants

## Budget Parks
- Nairobi National Park: $40 entry
- Lake Nakuru: $60 entry
- Amboseli: $70 entry

## Essential Savings
- Pack light, buy locally
- Share guide costs
- Choose camping safaris
- Eat local cuisine

Budget safaris offer the same wildlife experiences with greater cultural immersion and significant cost savings.`,
    author: {
      name: 'Budget Travel Team',
      bio: 'Experienced budget safari planners and adventure travel specialists'
    },
    category: 'tips',
    tags: ['budget', 'affordable', 'savings', 'planning'],
    publishedAt: new Date('2024-01-22'),
    readTime: 6,
    featured: false,
    image: nature4
  }
];
