import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { 
  Calculator, 
  Users, 
  Calendar, 
  Bed, 
  Car, 
  MapPin, 
  CheckCircle, 
  AlertCircle,
  Send,
  DollarSign
} from 'lucide-react';
import { parks, calculateQuote, standardInclusions, standardExclusions } from '@/lib/pricing-data';

const QuoteBuilder = () => {
  const [selectedParks, setSelectedParks] = useState<string[]>([]);
  const [duration, setDuration] = useState([3]);
  const [groupSize, setGroupSize] = useState([2]);
  const [accommodation, setAccommodation] = useState<'budget' | 'midrange' | 'luxury'>('midrange');
  const [transport, setTransport] = useState<'road' | 'fly'>('road');
  const [season, setSeason] = useState<'low' | 'high'>('low');
  const [showQuote, setShowQuote] = useState(false);

  const handleParkToggle = (parkId: string) => {
    setSelectedParks(prev => 
      prev.includes(parkId) 
        ? prev.filter(id => id !== parkId)
        : [...prev, parkId]
    );
  };

  const selectedParkObjects = parks.filter(park => selectedParks.includes(park.id));
  
  const calculateQuoteDetails = () => {
    if (selectedParks.length === 0) return null;
    
    return calculateQuote({
      parks: selectedParkObjects,
      duration: duration[0],
      groupSize: groupSize[0],
      accommodation,
      transport,
      season
    });
  };

  const quoteDetails = calculateQuoteDetails();

  const handleRequestQuote = () => {
    // In a real app, this would send the quote request to a backend
    const quoteData = {
      parks: selectedParkObjects.map(p => p.name),
      duration: duration[0],
      groupSize: groupSize[0],
      accommodation,
      transport,
      season,
      totalCost: quoteDetails?.total || 0,
      costPerPerson: quoteDetails?.costPerPerson || 0
    };
    
    console.log('Quote request:', quoteData);
    alert('Quote request sent! We will contact you within 24 hours.');
  };

  return (
    <div className="space-y-6">
      {/* Configuration Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Build Your Custom Safari Quote
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Select your preferences to get an instant estimated cost
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Park Selection */}
          <div>
            <Label className="text-base font-medium mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Select Parks/Reserves
            </Label>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {parks.map((park) => (
                <div key={park.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                  <Checkbox
                    id={park.id}
                    checked={selectedParks.includes(park.id)}
                    onCheckedChange={() => handleParkToggle(park.id)}
                  />
                  <Label htmlFor={park.id} className="flex-1 cursor-pointer">
                    <div className="font-medium">{park.name}</div>
                    <div className="text-xs text-muted-foreground">
                      ${park.dailyRates[accommodation][season]}/day
                    </div>
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Duration */}
          <div>
            <Label className="text-base font-medium mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Duration: {duration[0]} {duration[0] === 1 ? 'Day' : 'Days'}
            </Label>
            <Slider
              value={duration}
              onValueChange={setDuration}
              max={14}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>1 Day</span>
              <span>14 Days</span>
            </div>
          </div>

          {/* Group Size */}
          <div>
            <Label className="text-base font-medium mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Group Size: {groupSize[0]} {groupSize[0] === 1 ? 'Person' : 'People'}
            </Label>
            <Slider
              value={groupSize}
              onValueChange={setGroupSize}
              max={12}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>1 Person</span>
              <span>12 People</span>
            </div>
            {groupSize[0] >= 2 && (
              <div className="mt-2 text-sm text-green-600">
                {groupSize[0] >= 6 ? '15% discount applied!' : 
                 groupSize[0] >= 4 ? '10% discount applied!' : 
                 '5% discount applied!'}
              </div>
            )}
          </div>

          <Separator />

          {/* Accommodation and Transport */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-base font-medium mb-3 flex items-center gap-2">
                <Bed className="w-4 h-4" />
                Accommodation Level
              </Label>
              <Select value={accommodation} onValueChange={(value: any) => setAccommodation(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Budget Camping</SelectItem>
                  <SelectItem value="midrange">Mid-Range Lodges</SelectItem>
                  <SelectItem value="luxury">Luxury Resorts</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-base font-medium mb-3 flex items-center gap-2">
                <Car className="w-4 h-4" />
                Transport Type
              </Label>
              <Select value={transport} onValueChange={(value: any) => setTransport(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="road">Road Safari</SelectItem>
                  <SelectItem value="fly">Fly-in Safari</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Season */}
          <div>
            <Label className="text-base font-medium mb-3 block">Travel Season</Label>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={season === 'low' ? 'default' : 'outline'}
                onClick={() => setSeason('low')}
                className="h-auto p-3 flex flex-col items-start"
              >
                <div className="font-medium">Low Season</div>
                <div className="text-xs text-muted-foreground">Best rates</div>
              </Button>
              <Button
                variant={season === 'high' ? 'default' : 'outline'}
                onClick={() => setSeason('high')}
                className="h-auto p-3 flex flex-col items-start"
              >
                <div className="font-medium">High Season</div>
                <div className="text-xs text-muted-foreground">Peak period</div>
              </Button>
            </div>
          </div>

          <Button 
            onClick={() => setShowQuote(true)} 
            disabled={selectedParks.length === 0}
            className="w-full"
            size="lg"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Calculate Quote
          </Button>
        </CardContent>
      </Card>

      {/* Quote Results */}
      {showQuote && quoteDetails && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Your Safari Quote
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Selected Parks */}
            <div>
              <h4 className="font-medium mb-2">Selected Parks:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedParkObjects.map(park => (
                  <Badge key={park.id} variant="secondary">
                    {park.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Cost Breakdown:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Accommodation ({duration[0]} days)</span>
                    <span className="font-mono">${quoteDetails.breakdown.accommodation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transport ({transport})</span>
                    <span className="font-mono">${quoteDetails.breakdown.transport}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guide Services</span>
                    <span className="font-mono">${quoteDetails.breakdown.guide}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Subtotal</span>
                    <span className="font-mono">${quoteDetails.subtotal}</span>
                  </div>
                  {quoteDetails.discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Group Discount</span>
                      <span className="font-mono">-${quoteDetails.discount}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Cost</span>
                    <span className="font-mono text-primary">${quoteDetails.total}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Per Person ({groupSize[0]} people)</span>
                    <span className="font-mono">${quoteDetails.costPerPerson}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Package Details:</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{duration[0]} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Group Size:</span>
                    <span>{groupSize[0]} people</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accommodation:</span>
                    <span>{accommodation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transport:</span>
                    <span>{transport}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Season:</span>
                    <span>{season}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inclusions/Exclusions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Included
                </h4>
                <ul className="text-sm space-y-1">
                  {standardInclusions.slice(0, 5).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  Not Included
                </h4>
                <ul className="text-sm space-y-1">
                  {standardExclusions.slice(0, 5).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button onClick={handleRequestQuote} className="w-full" size="lg">
              <Send className="w-4 h-4 mr-2" />
              Request Final Quote
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QuoteBuilder;
