export interface AvailabilitySlot {
  date: Date;
  available: boolean;
  bookedBy?: string;
  groupSize?: number;
  maxGroupSize?: number;
  price?: number;
  season: 'low' | 'high';
}

export interface PackageAvailability {
  packageId: string;
  packageName: string;
  availability: AvailabilitySlot[];
  maxCapacity: number;
  minCapacity: number;
}

export interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'adventure' | 'cultural' | 'dining' | 'photography' | 'romantic';
  duration?: string;
  location: 'all' | 'maasai-mara' | 'amboseli' | 'naivasha' | 'nakuru' | 'coastal';
  requirements?: string[];
  popular?: boolean;
}

// Sample availability data for popular packages
export const generateAvailabilityData = (): PackageAvailability[] => {
  const today = new Date();
  const packages = [
    'Maasai Mara Wildebeest Migration 2025',
    '3 Days Samburu Package',
    '3 Days Tsavo Packages',
    'Mombasa 3 Days Package 2025',
    'Naivasha Weekend Getaways',
    'The Great Lakes 2 Days 1 Night Naivasha 2025'
  ];

  return packages.map((packageName, index) => {
    const availability: AvailabilitySlot[] = [];
    const packageId = packageName.toLowerCase().replace(/\s+/g, '-');
    
    // Generate 90 days of availability
    for (let i = 0; i < 90; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Simulate availability patterns
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isHighSeason = date.getMonth() >= 6 && date.getMonth() <= 9; // July-October
      const randomAvailability = Math.random() > 0.3; // 70% availability
      
      availability.push({
        date,
        available: randomAvailability,
        groupSize: randomAvailability ? Math.floor(Math.random() * 8) + 1 : undefined,
        maxGroupSize: 12,
        season: isHighSeason ? 'high' : 'low',
        price: isHighSeason ? 250 + (index * 20) : 180 + (index * 15)
      });
    }
    
    return {
      packageId,
      packageName,
      availability,
      maxCapacity: 12,
      minCapacity: 2
    };
  });
};

// Addon data
export const availableAddons: Addon[] = [
  {
    id: 'balloon-safari',
    name: 'Hot Air Balloon Safari',
    description: 'Experience the magic of a sunrise balloon flight over the Maasai Mara, champagne breakfast included',
    price: 450,
    category: 'adventure',
    duration: '1 hour flight + 3 hours total',
    location: 'maasai-mara',
    requirements: ['Early morning departure', 'Weather dependent'],
    popular: true
  },
  {
    id: 'cultural-village',
    name: 'Maasai Village Visit',
    description: 'Authentic cultural experience with the Maasai people, traditional dances, and craft demonstrations',
    price: 35,
    category: 'cultural',
    duration: '2-3 hours',
    location: 'all',
    popular: true
  },
  {
    id: 'bush-dinner',
    name: 'Bush Dinner Under Stars',
    description: 'Romantic outdoor dining experience with traditional cuisine and entertainment',
    price: 75,
    category: 'dining',
    duration: '3 hours',
    location: 'all',
    popular: true
  },
  {
    id: 'photographer',
    name: 'Professional Photographer',
    description: 'Professional wildlife photographer to capture your safari memories',
    price: 200,
    category: 'photography',
    duration: 'Full day',
    location: 'all'
  },
  {
    id: 'honeymoon-decor',
    name: 'Honeymoon Room Decoration',
    description: 'Special romantic room setup with flowers, champagne, and personalized touches',
    price: 150,
    category: 'romantic',
    location: 'all'
  },
  {
    id: 'sundowner',
    name: 'Sundowner Experience',
    description: 'Classic African sundowner with drinks and snacks at scenic viewpoint',
    price: 45,
    category: 'dining',
    duration: '2 hours',
    location: 'all',
    popular: true
  },
  {
    id: 'walking-safari',
    name: 'Guided Walking Safari',
    description: 'Close-up nature experience with armed guide and tracker',
    price: 60,
    category: 'adventure',
    duration: '3 hours',
    location: 'all'
  },
  {
    id: 'boat-ride',
    name: 'Lake Boat Ride',
    description: 'Scenic boat ride with hippos and bird watching opportunities',
    price: 40,
    category: 'adventure',
    duration: '2 hours',
    location: 'naivasha'
  },
  {
    id: 'special-meal',
    name: 'Special Anniversary Dinner',
    description: 'Gourmet multi-course meal with wine pairing and private service',
    price: 120,
    category: 'dining',
    duration: '3 hours',
    location: 'all'
  },
  {
    id: 'spa-treatment',
    name: 'Bush Spa Treatment',
    description: 'Relaxing massage or spa treatment in natural setting',
    price: 85,
    category: 'romantic',
    duration: '1.5 hours',
    location: 'all'
  }
];

export const addonCategories = [
  { id: 'adventure', name: 'Adventure', icon: '🦁' },
  { id: 'cultural', name: 'Cultural', icon: '🏺' },
  { id: 'dining', name: 'Dining', icon: '🍽️' },
  { id: 'photography', name: 'Photography', icon: '📸' },
  { id: 'romantic', name: 'Romantic', icon: '💕' }
];

export const getAvailabilityForDate = (packageAvailability: PackageAvailability, date: Date): AvailabilitySlot | undefined => {
  return packageAvailability.availability.find(slot => 
    slot.date.toDateString() === date.toDateString()
  );
};

export const isDateAvailable = (packageAvailability: PackageAvailability, date: Date): boolean => {
  const slot = getAvailabilityForDate(packageAvailability, date);
  return slot?.available || false;
};

export const getAvailableDatesInMonth = (packageAvailability: PackageAvailability, year: number, month: number): Date[] => {
  return packageAvailability.availability
    .filter(slot => 
      slot.available && 
      slot.date.getFullYear() === year && 
      slot.date.getMonth() === month
    )
    .map(slot => slot.date)
    .sort((a, b) => a.getTime() - b.getTime());
};
