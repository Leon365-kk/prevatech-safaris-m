import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronDown, 
  ChevronUp, 
  Search,
  CreditCard,
  Calendar,
  Users,
  UserCircle,
  Utensils,
  HelpCircle,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const faqCategories = [
    {
      id: 'payments',
      name: 'Payments & Pricing',
      icon: <CreditCard className="w-5 h-5" />,
      color: 'bg-blue-100 text-blue-800',
      questions: [
        {
          id: 'payment-methods',
          question: 'What payment methods do you accept?',
          answer: 'We accept multiple payment methods including:\n• Credit/Debit cards (Visa, Mastercard, American Express)\n• Mobile money (M-Pesa, Airtel Money)\n• Bank transfers\n• PayPal\n• Cash payments for in-person bookings\n• Western Union for international clients\n\nAll payments are processed securely through our payment partners.'
        },
        {
          id: 'deposit-required',
          question: 'Do I need to pay a deposit to confirm my booking?',
          answer: 'Yes, we require a 30% deposit to confirm your safari booking. The remaining 70% is due 14 days before your trip departure. For last-minute bookings (less than 14 days), full payment is required upfront.\n\nDeposits are refundable according to our cancellation policy.'
        },
        {
          id: 'currency',
          question: 'What currency are your prices in?',
          answer: 'Our prices are quoted in Kenyan Shillings (KES) for local clients and US Dollars (USD) for international clients. You can pay in either currency, and we use the current exchange rate for conversions.\n\nPrices include all taxes and service charges - no hidden fees!'
        },
        {
          id: 'payment-security',
          question: 'Is my payment information secure?',
          answer: 'Absolutely! We use industry-standard SSL encryption for all online transactions. We never store your credit card details on our servers. All payment processing is handled by trusted third-party payment providers compliant with PCI DSS standards.'
        }
      ]
    },
    {
      id: 'cancellation',
      name: 'Cancellation Policy',
      icon: <Calendar className="w-5 h-5" />,
      color: 'bg-orange-100 text-orange-800',
      questions: [
        {
          id: 'cancel-policy',
          question: 'What is your cancellation policy?',
          answer: 'Our cancellation policy is as follows:\n\n• 30+ days before departure: Full refund minus 5% processing fee\n• 15-29 days before departure: 50% refund\n• 7-14 days before departure: 25% refund\n• Less than 7 days: No refund\n\nCOVID-19 related cancellations may qualify for special consideration with medical documentation.'
        },
        {
          id: 'postpone-trip',
          question: 'Can I postpone my trip instead of cancelling?',
          answer: 'Yes! We offer flexible postponement options:\n• Free postponement up to 14 days before departure\n• You can reschedule within 12 months of original date\n• Price differences may apply if new dates have higher rates\n• Postponement must be requested in writing'
        },
        {
          id: 'emergency-cancel',
          question: 'What if I need to cancel due to an emergency?',
          answer: 'We understand emergencies happen. In case of medical emergencies or family emergencies, please contact us immediately with documentation. We may be able to:\n• Offer a partial credit for future travel\n• Waive some cancellation fees\n• Transfer your booking to another person\n\nWe review each case individually.'
        }
      ]
    },
    {
      id: 'family',
      name: 'Kids & Family',
      icon: <Users className="w-5 h-5" />,
      color: 'bg-green-100 text-green-800',
      questions: [
        {
          id: 'kids-age',
          question: 'What is the minimum age for children on safari?',
          answer: 'We welcome children of all ages! However:\n• Children under 3 years: Free (sharing with parents)\n• Children 3-12 years: 50% of adult rate (sharing with parents)\n• Children 12+ years: Full adult rate\n\nFor game drives, we recommend children be at least 5 years old to fully enjoy the experience.'
        },
        {
          id: 'family-activities',
          question: 'Do you offer family-friendly activities?',
          answer: 'Absolutely! Our family safaris include:\n• Shorter game drives (2-3 hours max)\n• Educational wildlife talks for kids\n• Visit to animal orphanages\n• Cultural visits to local villages\n• Swimming pools at accommodations\n• Special kids\' menus at lodges\n\nWe can customize activities based on your children\'s ages and interests.'
        },
        {
          id: 'safety-kids',
          question: 'Is it safe to bring young children on safari?',
          answer: 'Yes, safaris are safe for children with proper precautions:\n• All vehicles have seat belts and child seats available\n• Experienced guides trained to work with families\n• Lodges with child-friendly facilities\n• Flexible schedules for nap times\n• First aid kits and emergency protocols\n\nWe recommend malaria prophylaxis for children visiting certain areas.'
        },
        {
          id: 'babysitting',
          question: 'Do you provide babysitting services?',
          answer: 'Many of our partner lodges offer babysitting services (additional cost applies). We can also arrange for a trusted local caregiver to accompany your family. Please let us know your needs when booking so we can make appropriate arrangements.'
        }
      ]
    },
    {
      id: 'accessibility',
      name: 'Accessibility',
      icon: <UserCircle className="w-5 h-5" />,
      color: 'bg-purple-100 text-purple-800',
      questions: [
        {
          id: 'wheelchair-access',
          question: 'Are your safaris wheelchair accessible?',
          answer: 'We strive to make safaris accessible to everyone:\n• Some lodges have wheelchair-accessible rooms\n• Special vehicles with wheelchair lifts available (advance notice required)\n• Accessible bathroom facilities at selected properties\n• Ramps and ground-floor accommodations\n\nPlease discuss your specific needs when booking so we can ensure proper arrangements.'
        },
        {
          id: 'limited-mobility',
          question: 'What if I have limited mobility but use a walker/cane?',
          answer: 'Many guests with limited mobility enjoy our safaris successfully:\n• Ground-floor accommodations available\n• Vehicles with easy entry/exit\n• Shorter walking distances at attractions\n• Assistance from guides as needed\n• Flexible pacing during activities\n\nWe recommend bringing any mobility aids you normally use.'
        },
        {
          id: 'medical-conditions',
          question: 'Can I join if I have medical conditions?',
          answer: 'Most medical conditions can be accommodated:\n• Carry all necessary medications\n• Inform us of any conditions when booking\n• Some areas require malaria prophylaxis\n• High altitude considerations for some destinations\n• Emergency evacuation coverage recommended\n\nConsult your doctor before travel, especially for heart conditions, respiratory issues, or pregnancy.'
        }
      ]
    },
    {
      id: 'dietary',
      name: 'Dietary Requirements',
      icon: <Utensils className="w-5 h-5" />,
      color: 'bg-red-100 text-red-800',
      questions: [
        {
          id: 'special-diets',
          question: 'Can you accommodate special dietary requirements?',
          answer: 'Yes, we accommodate most dietary needs:\n• Vegetarian and vegan options\n• Halal meals (with advance notice)\n• Kosher meals (limited availability)\n• Gluten-free options\n• Food allergies (nuts, dairy, etc.)\n• Diabetic-friendly meals\n• Pureed foods for those with chewing difficulties\n\nPlease inform us at least 72 hours before your trip.'
        },
        {
          id: 'food-safety',
          question: 'Is the food safe to eat?',
          answer: 'Food safety is our top priority:\n• Only reputable lodges and restaurants used\n• Bottled drinking water always provided\n• Freshly prepared meals\n• Proper food handling protocols\n• Avoid street food during safari\n• Fruits and vegetables washed with purified water\n\nWe have an excellent safety record with thousands of satisfied guests.'
        },
        {
          id: 'meal-timing',
          question: 'What are the meal times during safari?',
          answer: 'Typical meal schedule:\n• Breakfast: 6:00-7:00 AM (before morning game drive)\n• Brunch: 10:00-11:00 AM (after morning drive)\n• Lunch: 1:00-2:00 PM\n• High Tea: 4:00-5:00 PM\n• Dinner: 7:00-8:30 PM\n\nTimes can be flexible based on wildlife sightings and guest preferences.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setExpandedQuestion(null);
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
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
              <HelpCircle className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Everything you need to know about booking your safari adventure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {searchTerm && (
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Found {filteredCategories.reduce((acc, cat) => acc + cat.questions.length, 0)} results
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {filteredCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        {category.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.name}</CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {category.questions.length} {category.questions.length === 1 ? 'question' : 'questions'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={category.color}>
                        {category.questions.length}
                      </Badge>
                      {expandedCategory === category.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </CardHeader>

                {expandedCategory === category.id && (
                  <CardContent className="space-y-4">
                    {category.questions.map((question) => (
                      <div key={question.id} className="border rounded-lg overflow-hidden">
                        <div
                          className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => toggleQuestion(question.id)}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{question.question}</h4>
                            {expandedQuestion === question.id ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </div>
                        {expandedQuestion === question.id && (
                          <div className="px-4 pb-4">
                            <div className="text-sm text-muted-foreground whitespace-pre-line">
                              {question.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No matching questions found</h3>
              <p className="text-muted-foreground mb-6">
                Try searching with different keywords or browse all categories above.
              </p>
              <Button onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            </div>
          )}

          {/* Contact Section */}
          <Card className="mt-12 bg-primary/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our safari experts are here to help! Contact us via any of the following channels:
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Us
                </Button>
                <Button size="lg" variant="outline" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Us
                </Button>
                <Button size="lg" variant="outline" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default FAQ;
