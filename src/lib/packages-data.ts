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
    category: "Beach",
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
    transport: "Private vehicle"
  },
  {
    id: "3-days-diani-packages",
    name: "3 Days Diani Packages",
    description: "Not once but three times, Diani was voted Africa's finest beach destination. Absolutely gorgeous and uncrowded, Diani's beaches are crystal blue, shallow and warm. Perfect for wading and snorkeling. For all the beach enthusiasts, you can get the chance to spot some of the best marine life here.",
    price: "Ksh17,600",
    location: "Diani Ukunda",
    rating: 4.5,
    duration: 3,
    category: "Beach",
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
    transport: "Private vehicle"
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
    category: "Safari",
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
    transport: "4x4 safari vehicle"
  },
  {
    id: "3-days-samburu-package",
    name: "3 Days Samburu Package",
    description: "Samburu is among Kenya's most scenic reserves, with riverine forest along the lovely Ewaso Nyiro River. Close to the river is also where you're most likely to see leopards. Dry Acacia scrub and semi-arid savannah extends to the mountains.",
    price: "Ksh23,100",
    location: "Samburu",
    rating: 4.5,
    duration: 3,
    category: "Safari",
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
    transport: "4x4 safari vehicle"
  },
  {
    id: "3-days-tsavo-packages",
    name: "3 Days Tsavo Packages",
    description: "Experience Kenya's largest national park with its famous red elephants, diverse landscapes, and abundant wildlife.",
    price: "Ksh29,600",
    location: "Tsavo",
    rating: 4.5,
    duration: 3,
    category: "Safari",
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
    category: "Safari",
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
    category: "Weekend",
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
    transport: "Private vehicle"
  },
  {
    id: "the-great-lakes-2-days-1-night-naivasha-2025",
    name: "The Great Lakes 2 Days 1 Night Naivasha 2025",
    description: "Explore Lake Naivasha's beautiful scenery, wildlife, and boat rides on this quick getaway.",
    price: "Ksh4,500",
    location: "Naivasha",
    rating: 4.5,
    duration: 2,
    category: "Weekend",
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
    category: "Weekend",
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
    transport: "4x4 safari vehicle"
  },
  {
    id: "the-great-lakes-2-days-2025-nakuru",
    name: "The Great Lakes 2 Days 2025 Nakuru",
    description: "Experience Lake Nakuru's flamingos and rhino sanctuary on this weekend escape.",
    price: "Ksh11,750",
    location: "Nakuru",
    rating: 4.5,
    duration: 2,
    category: "Weekend",
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
    category: "Weekend",
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
    category: "Weekend",
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
    category: "Weekend",
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
    category: "Weekend",
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
    category: "Weekend",
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
    category: "Weekend",
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
    category: "Weekend",
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
