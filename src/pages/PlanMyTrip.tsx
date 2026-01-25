import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Users, 
  DollarSign, 
  MapPin, 
  Home, 
  Heart, 
  Camera, 
  Bird, 
  Star,
  Clock,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Send,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

const PlanMyTrip = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    travelers: '',
    dates: '',
    flexibility: '',
    duration: '',
    
    // Step 2: Budget & Style
    budgetRange: '',
    accommodation: '',
    transport: '',
    
    // Step 3: Interests
    interests: [] as string[],
    wildlifePriority: '',
    activities: [] as string[],
    
    // Step 4: Special Requirements
    dietary: '',
    accessibility: '',
    children: '',
    
    // Step 5: Contact Info
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, title: 'Travelers & Dates', icon: <Users className="w-4 h-4" /> },
    { id: 2, title: 'Budget & Style', icon: <DollarSign className="w-4 h-4" /> },
    { id: 3, title: 'Interests', icon: <Heart className="w-4 h-4" /> },
    { id: 4, title: 'Special Needs', icon: <Star className="w-4 h-4" /> },
    { id: 5, title: 'Contact', icon: <Send className="w-4 h-4" /> }
  ];

  const budgetRanges = [
    { id: 'budget', label: 'Budget (Ksh 5,000-15,000/person)', description: 'Basic camps, group tours' },
    { id: 'mid', label: 'Mid-range (Ksh 15,000-35,000/person)', description: 'Comfortable lodges, small groups' },
    { id: 'luxury', label: 'Luxury (Ksh 35,000-80,000/person)', description: 'Premium lodges, private guides' },
    { id: 'ultra', label: 'Ultra-luxury (Ksh 80,000+/person)', description: 'Exclusive experiences, fly-in safaris' }
  ];

  const accommodationTypes = [
    { id: 'camping', label: 'Camping', icon: '🏕️' },
    { id: 'tented', label: 'Tented Camp', icon: '⛺' },
    { id: 'lodge', label: 'Safari Lodge', icon: '🏨' },
    { id: 'luxury', label: 'Luxury Resort', icon: '🏰' }
  ];

  const interestOptions = [
    { id: 'wildlife', label: 'Wildlife Photography', icon: <Camera className="w-4 h-4" /> },
    { id: 'big5', label: 'Big Five', icon: '🦁' },
    { id: 'birds', label: 'Bird Watching', icon: <Bird className="w-4 h-4" /> },
    { id: 'culture', label: 'Cultural Experiences', icon: '🏺' },
    { id: 'adventure', label: 'Adventure Activities', icon: '🎯' },
    { id: 'relaxation', label: 'Relaxation', icon: '🌴' },
    { id: 'romance', label: 'Romance/Honeymoon', icon: '💕' },
    { id: 'family', label: 'Family Fun', icon: '👨‍👩‍👧‍👦' }
  ];

  const activityOptions = [
    { id: 'gamedrives', label: 'Game Drives' },
    { id: 'walking', label: 'Walking Safari' },
    { id: 'balloon', label: 'Hot Air Balloon' },
    { id: 'nightdrives', label: 'Night Game Drives' },
    { id: 'boat', label: 'Boat Safaris' },
    { id: 'cultural', label: 'Cultural Visits' },
    { id: 'photography', label: 'Photography Tours' },
    { id: 'wellness', label: 'Spa & Wellness' }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field: keyof typeof formData, value: string) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      return {
        ...prev,
        [field]: currentArray.includes(value)
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value]
      };
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Create a comprehensive message for WhatsApp/email
    const tripSummary = `
🌍 CUSTOM SAFARI PLANNING REQUEST

👥 Travelers: ${formData.travelers}
📅 Dates: ${formData.dates} (${formData.flexibility})
⏱️ Duration: ${formData.duration}

💰 Budget: ${formData.budgetRange}
🏨 Accommodation: ${formData.accommodation}
🚗 Transport: ${formData.transport}

🎯 Interests: ${formData.interests.join(', ')}
🦁 Wildlife Priority: ${formData.wildlifePriority}
🎪 Activities: ${formData.activities.join(', ')}

🍽️ Dietary: ${formData.dietary}
♿ Accessibility: ${formData.accessibility}
👶 Children: ${formData.children}

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
💬 WhatsApp: ${formData.whatsapp}

📝 Message: ${formData.message}
    `.trim();

    // Send to WhatsApp
    const whatsappUrl = `https://wa.me/254724022016?text=${encodeURIComponent(tripSummary)}`;
    window.open(whatsappUrl, '_blank');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! Your trip planning request has been sent. We\'ll contact you within 24 hours with personalized recommendations.');
    }, 2000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Number of Travelers</label>
              <select
                value={formData.travelers}
                onChange={(e) => handleInputChange('travelers', e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              >
                <option value="">Select number of travelers</option>
                <option value="1">Solo Traveler</option>
                <option value="2">Couple</option>
                <option value="3-4">Small Group (3-4)</option>
                <option value="5-8">Medium Group (5-8)</option>
                <option value="9+">Large Group (9+)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Preferred Travel Dates</label>
              <input
                type="text"
                value={formData.dates}
                onChange={(e) => handleInputChange('dates', e.target.value)}
                placeholder="e.g., June 15-22, 2024"
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Date Flexibility</label>
              <select
                value={formData.flexibility}
                onChange={(e) => handleInputChange('flexibility', e.target.value)}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select flexibility</option>
                <option value="fixed">Fixed dates only</option>
                <option value="flexible">± 3 days</option>
                <option value="very-flexible">± 1 week</option>
                <option value="open">Completely open</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Trip Duration</label>
              <select
                value={formData.duration}
                onChange={(e) => handleInputChange('duration', e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              >
                <option value="">Select duration</option>
                <option value="1-3">1-3 days (Weekend getaway)</option>
                <option value="4-7">4-7 days (One week)</option>
                <option value="8-14">8-14 days (Extended trip)</option>
                <option value="15+">15+ days (Grand safari)</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Budget Range (per person)</label>
              <div className="grid md:grid-cols-2 gap-3">
                {budgetRanges.map(range => (
                  <label key={range.id} className="border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                    <input
                      type="radio"
                      name="budget"
                      value={range.id}
                      checked={formData.budgetRange === range.id}
                      onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">{range.label}</div>
                      <div className="text-sm text-muted-foreground">{range.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Preferred Accommodation Style</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {accommodationTypes.map(type => (
                  <label key={type.id} className="border rounded-lg p-3 cursor-pointer hover:bg-muted/50 text-center">
                    <input
                      type="radio"
                      name="accommodation"
                      value={type.id}
                      checked={formData.accommodation === type.id}
                      onChange={(e) => handleInputChange('accommodation', e.target.value)}
                      className="mr-2"
                    />
                    <div>
                      <div className="text-2xl mb-1">{type.icon}</div>
                      <div className="text-sm font-medium">{type.label}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Transport Preference</label>
              <select
                value={formData.transport}
                onChange={(e) => handleInputChange('transport', e.target.value)}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select transport preference</option>
                <option value="road">Road transport (4x4 safari vehicle)</option>
                <option value="fly">Fly-in safari (charter flights)</option>
                <option value="mixed">Mixed (fly to major parks, road for others)</option>
                <option value="luxury">Luxury (private flights, premium vehicles)</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">What interests you most? (Select all that apply)</label>
              <div className="grid md:grid-cols-2 gap-3">
                {interestOptions.map(interest => (
                  <label key={interest.id} className="border rounded-lg p-3 cursor-pointer hover:bg-muted/50 flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest.id)}
                      onChange={() => handleMultiSelect('interests', interest.id)}
                      className="w-4 h-4"
                    />
                    <div className="flex items-center gap-2">
                      {interest.icon}
                      <span>{interest.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Wildlife Priority</label>
              <select
                value={formData.wildlifePriority}
                onChange={(e) => handleInputChange('wildlifePriority', e.target.value)}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select wildlife priority</option>
                <option value="big5">Big Five (Lion, Leopard, Rhino, Elephant, Buffalo)</option>
                <option value="predators">Predators (Lions, Leopards, Cheetahs, Hyenas)</option>
                <option value="herbivores">Large Herbivores (Elephants, Giraffes, Zebras)</option>
                <option value="birds">Birds and Birdlife</option>
                <option value="migration">Great Migration</option>
                <option value="diverse">Diverse Wildlife (Everything!)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Preferred Activities (Select all that apply)</label>
              <div className="grid md:grid-cols-2 gap-3">
                {activityOptions.map(activity => (
                  <label key={activity.id} className="border rounded-lg p-3 cursor-pointer hover:bg-muted/50 flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.activities.includes(activity.id)}
                      onChange={() => handleMultiSelect('activities', activity.id)}
                      className="w-4 h-4"
                    />
                    <span>{activity.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Dietary Requirements</label>
              <select
                value={formData.dietary}
                onChange={(e) => handleInputChange('dietary', e.target.value)}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">No special requirements</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="halal">Halal</option>
                <option value="kosher">Kosher</option>
                <option value="gluten-free">Gluten-free</option>
                <option value="allergies">Food allergies (will specify)</option>
                <option value="other">Other (will specify)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Accessibility Requirements</label>
              <select
                value={formData.accessibility}
                onChange={(e) => handleInputChange('accessibility', e.target.value)}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">No special requirements</option>
                <option value="wheelchair">Wheelchair accessibility needed</option>
                <option value="limited-mobility">Limited mobility (walker/cane)</option>
                <option value="visual">Visual impairment assistance</option>
                <option value="hearing">Hearing impairment assistance</option>
                <option value="other">Other accessibility needs</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Children in Group</label>
              <select
                value={formData.children}
                onChange={(e) => handleInputChange('children', e.target.value)}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">No children</option>
                <option value="infant">Infant (under 2 years)</option>
                <option value="toddler">Toddler (2-4 years)</option>
                <option value="young">Young children (5-12 years)</option>
                <option value="teens">Teenagers (13-17 years)</option>
                <option value="mixed">Mixed ages</option>
              </select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">WhatsApp Number (if different)</label>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Additional Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us anything else about your dream safari..."
                className="w-full p-3 border rounded-lg h-24 resize-none"
              />
            </div>

            {/* Summary */}
            <Card className="bg-primary/5">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-3">Your Safari Summary</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div><strong>Travelers:</strong> {formData.travelers}</div>
                    <div><strong>Dates:</strong> {formData.dates}</div>
                    <div><strong>Duration:</strong> {formData.duration}</div>
                    <div><strong>Budget:</strong> {formData.budgetRange}</div>
                  </div>
                  <div>
                    <div><strong>Accommodation:</strong> {formData.accommodation}</div>
                    <div><strong>Interests:</strong> {formData.interests.length} selected</div>
                    <div><strong>Activities:</strong> {formData.activities.length} selected</div>
                    <div><strong>Special Needs:</strong> {formData.dietary || formData.accessibility || formData.children || 'None'}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <MapPin className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Plan Your Dream Safari
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Answer a few questions and we'll create your perfect African adventure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-background text-muted-foreground border-border'
                }`}>
                  {step.icon}
                </div>
                <div className={`ml-3 text-sm font-medium ${
                  currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-border'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {renderStep()}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep === steps.length ? (
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Request
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button onClick={nextStep}>
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Prefer to talk directly? Contact us via:
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default PlanMyTrip;
