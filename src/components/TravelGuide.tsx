import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Package, 
  FileText, 
  Heart, 
  Camera, 
  Thermometer, 
  CreditCard, 
  Shield, 
  Plane, 
  Sun, 
  Cloud,
  AlertTriangle,
  CheckCircle,
  Info,
  Clock,
  MapPin
} from 'lucide-react';
import type { TravelGuide } from '@/lib/safari-details';

interface TravelGuideProps {
  guide: TravelGuide;
  destination?: string;
}

const TravelGuide = ({ guide, destination }: TravelGuideProps) => {
  return (
    <div className="space-y-8">
      {/* What to Pack */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            What to Pack
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Essential items for your safari adventure {destination && `to ${destination}`}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Essentials */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Essentials
            </h4>
            <div className="grid md:grid-cols-2 gap-2">
              {guide.whatToPack.essentials.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Clothing */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Sun className="w-4 h-4 text-orange-600" />
              Clothing
            </h4>
            <div className="grid md:grid-cols-2 gap-2">
              {guide.whatToPack.clothing.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Health & Electronics */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-600" />
                Health & Medical
              </h4>
              <div className="space-y-1">
                {guide.whatToPack.health.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Camera className="w-4 h-4 text-blue-600" />
                Electronics
              </h4>
              <div className="space-y-1">
                {guide.whatToPack.electronics.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Optional Items */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-600" />
              Optional Items
            </h4>
            <div className="grid md:grid-cols-2 gap-2">
              {guide.whatToPack.optional.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-muted rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Before You Travel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plane className="w-5 h-5" />
            Before You Travel
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Important information to prepare for your trip
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Visa Information */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Visa Requirements
            </h4>
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium">Required</div>
                  <div className={`text-sm ${guide.beforeYouTravel.visa.required ? 'text-red-600' : 'text-green-600'}`}>
                    {guide.beforeYouTravel.visa.required ? 'Yes - Visa required' : 'No - Visa not required'}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">Processing Time</div>
                  <div className="text-sm">{guide.beforeYouTravel.visa.processingTime}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Cost</div>
                  <div className="text-sm">{guide.beforeYouTravel.visa.cost}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Types Available</div>
                  <div className="flex flex-wrap gap-1">
                    {guide.beforeYouTravel.visa.types.map((type, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Requirements:</div>
                <div className="space-y-1">
                  {guide.beforeYouTravel.visa.requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                      {req}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Weather & Climate */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Thermometer className="w-4 h-4" />
              Weather & Climate
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {guide.beforeYouTravel.weather.seasons.map((season, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {index === 0 ? <Sun className="w-4 h-4 text-orange-500" /> : <Cloud className="w-4 h-4 text-blue-500" />}
                    <div className="font-medium">{season.name}</div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div><strong>Months:</strong> {season.months}</div>
                    <div><strong>Temperature:</strong> {season.temperature}</div>
                    <div><strong>Rainfall:</strong> {season.rainfall}</div>
                    <div>
                      <strong>Best for:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {season.bestFor.map((item, itemIndex) => (
                          <Badge key={itemIndex} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Health & Insurance */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Health & Vaccinations
              </h4>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Recommended Vaccinations:</strong>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {guide.beforeYouTravel.health.vaccinations.map((vaccine, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {vaccine}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <strong>Malaria:</strong> {guide.beforeYouTravel.health.malaria}
                </div>
                <div>
                  <strong>Insurance:</strong> {guide.beforeYouTravel.health.insurance}
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Money & Payments
              </h4>
              <div className="space-y-2 text-sm">
                <div><strong>Currency:</strong> {guide.beforeYouTravel.money.currency}</div>
                <div>
                  <strong>Payment Methods:</strong>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {guide.beforeYouTravel.money.paymentMethods.map((method, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div><strong>Tipping:</strong> {guide.beforeYouTravel.money.tipping}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Camera Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5" />
            Photography Tips
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Capture the perfect moments on your safari
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Equipment */}
          <div>
            <h4 className="font-semibold mb-3">Recommended Equipment</h4>
            <div className="grid md:grid-cols-2 gap-2">
              {guide.cameraTips.equipment.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Camera className="w-3 h-3 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Best Times to Shoot</h4>
              <div className="space-y-1">
                {guide.cameraTips.bestTimes.map((tip, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Clock className="w-3 h-3 text-orange-500" />
                    {tip}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Wildlife Photography</h4>
              <div className="space-y-1">
                {guide.cameraTips.wildlife.map((tip, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Etiquette */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-600" />
              Photography Etiquette
            </h4>
            <div className="grid md:grid-cols-2 gap-2">
              {guide.cameraTips.etiquette.map((tip, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <AlertTriangle className="w-3 h-3 text-yellow-600" />
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TravelGuide;
