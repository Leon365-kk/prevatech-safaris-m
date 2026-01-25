export interface Park {
  id: string;
  name: string;
  dailyRates: {
    budget: { low: number; high: number };
    midrange: { low: number; high: number };
    luxury: { low: number; high: number };
  };
  entryFees: {
    citizen: { adult: number; child: number };
    resident: { adult: number; child: number };
    nonResident: { adult: number; child: number };
  };
}

export interface PackageDetails {
  duration: number;
  parks: Park[];
  accommodation: 'budget' | 'midrange' | 'luxury';
  transport: 'road' | 'fly';
  groupSize: number;
  season: 'low' | 'high';
  inclusions: string[];
  exclusions: string[];
}

export const parks: Park[] = [
  {
    id: 'maasai-mara',
    name: 'Maasai Mara',
    dailyRates: {
      budget: { low: 150, high: 180 },
      midrange: { low: 250, high: 300 },
      luxury: { low: 450, high: 550 }
    },
    entryFees: {
      citizen: { adult: 1200, child: 600 },
      resident: { adult: 1200, child: 600 },
      nonResident: { adult: 80, child: 45 }
    }
  },
  {
    id: 'amboseli',
    name: 'Amboseli',
    dailyRates: {
      budget: { low: 140, high: 170 },
      midrange: { low: 240, high: 280 },
      luxury: { low: 420, high: 520 }
    },
    entryFees: {
      citizen: { adult: 800, child: 400 },
      resident: { adult: 800, child: 400 },
      nonResident: { adult: 60, child: 35 }
    }
  },
  {
    id: 'tsavo',
    name: 'Tsavo East & West',
    dailyRates: {
      budget: { low: 130, high: 160 },
      midrange: { low: 220, high: 260 },
      luxury: { low: 400, high: 480 }
    },
    entryFees: {
      citizen: { adult: 600, child: 300 },
      resident: { adult: 600, child: 300 },
      nonResident: { adult: 50, child: 30 }
    }
  },
  {
    id: 'samburu',
    name: 'Samburu',
    dailyRates: {
      budget: { low: 160, high: 190 },
      midrange: { low: 260, high: 310 },
      luxury: { low: 480, high: 580 }
    },
    entryFees: {
      citizen: { adult: 1000, child: 500 },
      resident: { adult: 1000, child: 500 },
      nonResident: { adult: 70, child: 40 }
    }
  },
  {
    id: 'lake-nakuru',
    name: 'Lake Nakuru',
    dailyRates: {
      budget: { low: 120, high: 150 },
      midrange: { low: 200, high: 240 },
      luxury: { low: 380, high: 450 }
    },
    entryFees: {
      citizen: { adult: 800, child: 400 },
      resident: { adult: 800, child: 400 },
      nonResident: { adult: 60, child: 35 }
    }
  },
  {
    id: 'naivasha',
    name: 'Lake Naivasha',
    dailyRates: {
      budget: { low: 100, high: 120 },
      midrange: { low: 180, high: 220 },
      luxury: { low: 350, high: 420 }
    },
    entryFees: {
      citizen: { adult: 300, child: 150 },
      resident: { adult: 300, child: 150 },
      nonResident: { adult: 30, child: 20 }
    }
  }
];

export const standardInclusions = [
  'Park entrance fees',
  'Accommodation as specified',
  'All meals as per itinerary',
  'Transportation in safari vehicle',
  'Professional driver/guide',
  'Game drives as per itinerary',
  'Government taxes',
  'Drinking water in vehicle'
];

export const standardExclusions = [
  'International airfare',
  'Travel insurance',
  'Visa fees',
  'Personal expenses',
  'Tips and gratuities',
  'Alcoholic beverages',
  'Activities not mentioned in itinerary',
  'Medical expenses'
];

export const calculateQuote = (details: Omit<PackageDetails, 'inclusions' | 'exclusions'>) => {
  const { parks, accommodation, transport, groupSize, season } = details;
  
  // Calculate accommodation costs
  let accommodationCost = 0;
  parks.forEach(park => {
    const dailyRate = park.dailyRates[accommodation][season];
    accommodationCost += dailyRate * details.duration;
  });
  
  // Calculate transport costs
  const transportCostPerDay = transport === 'fly' ? 300 : 80;
  const transportCost = transportCostPerDay * details.duration;
  
  // Calculate guide costs
  const guideCostPerDay = 50;
  const guideCost = guideCostPerDay * details.duration;
  
  // Calculate total before group discount
  const subtotal = accommodationCost + transportCost + guideCost;
  
  // Apply group discount
  let discount = 0;
  if (groupSize >= 6) discount = 0.15; // 15% discount for 6+ people
  else if (groupSize >= 4) discount = 0.10; // 10% discount for 4+ people
  else if (groupSize >= 2) discount = 0.05; // 5% discount for 2+ people
  
  const discountedTotal = subtotal * (1 - discount);
  const costPerPerson = discountedTotal / groupSize;
  
  return {
    subtotal,
    discount: subtotal * discount,
    total: discountedTotal,
    costPerPerson,
    breakdown: {
      accommodation: accommodationCost,
      transport: transportCost,
      guide: guideCost
    }
  };
};
