import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, X, Info, Calendar, Users, Bed, Car } from 'lucide-react';
import { parks, standardInclusions, standardExclusions } from '@/lib/pricing-data';

const PricingTables = () => {
  const [selectedSeason, setSelectedSeason] = useState<'low' | 'high'>('low');
  const [selectedAccommodation, setSelectedAccommodation] = useState<'budget' | 'midrange' | 'luxury'>('midrange');

  const seasonDates = {
    low: 'April - June, November - December',
    high: 'January - March, July - October'
  };

  const accommodationLabels = {
    budget: 'Budget Camping',
    midrange: 'Mid-Range Lodges',
    luxury: 'Luxury Resorts'
  };

  return (
    <div className="space-y-8">
      {/* Season and Accommodation Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Live Pricing Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Season Selection */}
          <div>
            <label className="text-sm font-medium mb-3 block">Select Season</label>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={selectedSeason === 'low' ? 'default' : 'outline'}
                onClick={() => setSelectedSeason('low')}
                className="h-auto p-4 flex flex-col items-start"
              >
                <div className="font-semibold">Low Season</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {seasonDates.low}
                </div>
                <div className="text-sm text-green-600 mt-2">Best Rates</div>
              </Button>
              <Button
                variant={selectedSeason === 'high' ? 'default' : 'outline'}
                onClick={() => setSelectedSeason('high')}
                className="h-auto p-4 flex flex-col items-start"
              >
                <div className="font-semibold">High Season</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {seasonDates.high}
                </div>
                <div className="text-sm text-orange-600 mt-2">Peak Period</div>
              </Button>
            </div>
          </div>

          {/* Accommodation Selection */}
          <div>
            <label className="text-sm font-medium mb-3 block">Select Accommodation Level</label>
            <div className="grid grid-cols-3 gap-4">
              {(['budget', 'midrange', 'luxury'] as const).map((level) => (
                <Button
                  key={level}
                  variant={selectedAccommodation === level ? 'default' : 'outline'}
                  onClick={() => setSelectedAccommodation(level)}
                  className="h-auto p-4 flex flex-col items-center"
                >
                  <Bed className="w-6 h-6 mb-2" />
                  <div className="font-semibold text-sm">{accommodationLabels[level]}</div>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pricing Tables by Park */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
            Daily Rates per Park
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Rates shown are per person per day, including accommodation, meals, and game drives
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Park/Reserve</th>
                  <th className="text-center py-3 px-4">Daily Rate</th>
                  <th className="text-center py-3 px-4">Entry Fee (Non-Resident)</th>
                  <th className="text-center py-3 px-4">3-Day Total</th>
                  <th className="text-center py-3 px-4">5-Day Total</th>
                </tr>
              </thead>
              <tbody>
                {parks.map((park) => {
                  const dailyRate = park.dailyRates[selectedAccommodation][selectedSeason];
                  const entryFee = park.entryFees.nonResident.adult;
                  const threeDayTotal = (dailyRate + entryFee) * 3;
                  const fiveDayTotal = (dailyRate + entryFee) * 5;
                  
                  return (
                    <tr key={park.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium">{park.name}</td>
                      <td className="text-center py-3 px-4">
                        <Badge variant="secondary" className="font-mono">
                          ${dailyRate}
                        </Badge>
                      </td>
                      <td className="text-center py-3 px-4">
                        <Badge variant="outline" className="font-mono">
                          ${entryFee}
                        </Badge>
                      </td>
                      <td className="text-center py-3 px-4">
                        <Badge variant="default" className="font-mono">
                          ${threeDayTotal}
                        </Badge>
                      </td>
                      <td className="text-center py-3 px-4">
                        <Badge variant="default" className="font-mono">
                          ${fiveDayTotal}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Inclusions and Exclusions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <Check className="w-5 h-5" />
              What's Included
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {standardInclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <X className="w-5 h-5" />
              What's Not Included
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {standardExclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Group Discounts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Group Discounts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">5% OFF</div>
              <div className="text-sm text-muted-foreground">2-3 People</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">10% OFF</div>
              <div className="text-sm text-muted-foreground">4-5 People</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">15% OFF</div>
              <div className="text-sm text-muted-foreground">6+ People</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingTables;
