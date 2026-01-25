import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  X, 
  Send, 
  Phone,
  Clock,
  MapPin,
  Users,
  Calendar,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  position?: 'bottom-right' | 'bottom-left';
  showOnMobile?: boolean;
}

const WhatsAppWidget = ({ 
  phoneNumber = '254724022016', 
  position = 'bottom-right',
  showOnMobile = true 
}: WhatsAppWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [selectedQuickAction, setSelectedQuickAction] = useState('');
  const [message, setMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6'
  };

  const quickActions = [
    {
      id: 'airport',
      icon: <MapPin className="w-4 h-4" />,
      label: 'Airport Pickup',
      message: 'Hi! I need airport pickup from Jomo Kenyatta International Airport. Flight details: [Your flight number and arrival time]'
    },
    {
      id: 'booking',
      icon: <Calendar className="w-4 h-4" />,
      label: 'Last-minute Booking',
      message: 'Hi! I need to make a last-minute booking for [Number] people. Available dates: [Your dates]'
    },
    {
      id: 'quote',
      icon: <Users className="w-4 h-4" />,
      label: 'Custom Quote',
      message: 'Hi! I\'d like a custom quote for [Number] people for [Number] days. Budget range: [Your budget]'
    },
    {
      id: 'help',
      icon: <HelpCircle className="w-4 h-4" />,
      label: 'General Questions',
      message: 'Hi! I have some questions about your safari packages.'
    }
  ];

  useEffect(() => {
    // Hide tooltip after 10 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleQuickAction = (action: typeof quickActions[0]) => {
    setSelectedQuickAction(action.id);
    setMessage(action.message);
  };

  const openWhatsApp = (customMessage?: string) => {
    const finalMessage = customMessage || message;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleSend = () => {
    if (message.trim()) {
      openWhatsApp(message);
    }
  };

  if (!showOnMobile && window.innerWidth < 768) {
    return null;
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50 flex flex-col items-end gap-2`}>
      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div className="animate-fade-in">
          <Card className="mb-2 bg-white shadow-lg">
            <CardContent className="p-3">
              <div className="flex items-center gap-2 text-sm">
                <MessageCircle className="w-4 h-4 text-green-600" />
                <span className="font-medium">Need help? Chat with us!</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTooltip(false)}
                  className="h-6 w-6 p-0 ml-2"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 bg-white shadow-2xl animate-slide-up">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">Prevatech Safaris</div>
                  <div className="text-xs opacity-90 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Usually responds instantly
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-6 w-6 p-0 text-white hover:bg-green-700"
                >
                  {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0 text-white hover:bg-green-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Quick Actions */}
              <div className="p-4 border-b">
                <div className="text-sm font-medium mb-3">How can we help you?</div>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <Button
                      key={action.id}
                      variant={selectedQuickAction === action.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleQuickAction(action)}
                      className="flex flex-col items-center gap-1 h-auto py-3"
                    >
                      {action.icon}
                      <span className="text-xs">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="text-sm text-gray-600 mb-2">
                  {selectedQuickAction && (
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {quickActions.find(a => a.id === selectedQuickAction)?.label}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedQuickAction('');
                          setMessage('');
                        }}
                        className="h-6 w-6 p-0"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="flex-1 p-2 border rounded-lg resize-none h-20 text-sm"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  <Button
                    onClick={handleSend}
                    disabled={!message.trim()}
                    size="sm"
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    <Send className="w-4 h-4 mr-1" />
                    Send on WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openWhatsApp('Hi! I need help with your safari packages.')}
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Business Hours */}
              <div className="px-4 pb-3">
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Available 24/7 for urgent inquiries
                </div>
              </div>
            </>
          )}
        </Card>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WhatsAppWidget;
