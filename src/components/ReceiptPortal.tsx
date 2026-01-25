import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import VisualCaptcha from '@/components/VisualCaptcha';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Lock, 
  FileText, 
  Download, 
  Calendar, 
  Users,
  Shield,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff,
  RefreshCw,
  Key,
  ArrowLeft,
  Home,
  Phone,
  Mail
} from 'lucide-react';

interface Receipt {
  id: string;
  type: 'booking' | 'payment' | 'itinerary' | 'ticket' | 'insurance';
  title: string;
  date: string;
  amount?: string;
  status: 'confirmed' | 'pending' | 'completed';
  description: string;
}

interface VerificationToken {
  token: string;
  code: string;
  email: string;
  expiresAt: Date;
  isUsed: boolean;
}

const ReceiptPortal = () => {
  // Cache-busting timestamp to force refresh
  const [timestamp] = useState(Date.now());
  const navigate = useNavigate();
  
  const [code, setCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [captchaCode, setCaptchaCode] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimeRemaining, setLockTimeRemaining] = useState(0);

  // Sample receipts data (in real app, this would come from API)
  const sampleReceipts: Receipt[] = [
    {
      id: 'BK001',
      type: 'booking',
      title: 'Maasai Mara Safari Package',
      date: '2024-01-15',
      amount: '$2,500',
      status: 'confirmed',
      description: '3-day Maasai Mara luxury safari for 2 persons'
    },
    {
      id: 'PY002',
      type: 'payment',
      title: 'Payment Confirmation - Deposit',
      date: '2024-01-10',
      amount: '$750',
      status: 'completed',
      description: '30% deposit for Maasai Mara safari package'
    },
    {
      id: 'IT003',
      type: 'itinerary',
      title: 'Detailed Travel Itinerary',
      date: '2024-01-12',
      status: 'confirmed',
      description: 'Complete day-by-day itinerary with accommodation details'
    },
    {
      id: 'TK004',
      type: 'ticket',
      title: 'Airport Transfer E-Ticket',
      date: '2024-01-14',
      amount: '$50',
      status: 'confirmed',
      description: 'Jomo Kenyatta Airport to hotel transfer'
    },
    {
      id: 'IN005',
      type: 'insurance',
      title: 'Travel Insurance Certificate',
      date: '2024-01-11',
      status: 'confirmed',
      description: 'Comprehensive travel insurance coverage'
    }
  ];

  // Handle captcha verification
  const handleCaptchaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Debug: Check if captcha code exists
    if (!captchaCode) {
      setError('Captcha not loaded. Please refresh the page and try again.');
      setIsLoading(false);
      return;
    }

    // Simulate verification delay
    setTimeout(() => {
      if (code.toUpperCase() === captchaCode.toUpperCase()) {
        setIsAuthenticated(true);
        setError('');
        setAttempts(0); // Reset attempts on success
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        
        if (newAttempts >= 3) {
          // Lock for 30 seconds after 3 failed attempts
          setIsLocked(true);
          setLockTimeRemaining(30);
          
          // Start countdown timer
          const timer = setInterval(() => {
            setLockTimeRemaining((prev) => {
              if (prev <= 1) {
                clearInterval(timer);
                setIsLocked(false);
                setAttempts(0);
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
          
          setError('Too many failed attempts. Please wait 30 seconds before trying again.');
        } else {
          setError(`Invalid code. ${3 - newAttempts} attempts remaining.`);
        }
        setCode('');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCode('');
    setError('');
    setAttempts(0);
    setIsLocked(false);
    setLockTimeRemaining(0);
  };

  const formatLockTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getReceiptIcon = (type: Receipt['type']) => {
    switch (type) {
      case 'booking': return <FileText className="w-5 h-5 text-blue-600" />;
      case 'payment': return <FileText className="w-5 h-5 text-green-600" />;
      case 'itinerary': return <Calendar className="w-5 h-5 text-purple-600" />;
      case 'ticket': return <FileText className="w-5 h-5 text-orange-600" />;
      case 'insurance': return <Shield className="w-5 h-5 text-red-600" />;
      default: return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: Receipt['status']) => {
    const variants = {
      confirmed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-blue-100 text-blue-800'
    };
    
    return (
      <Badge className={variants[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const handleDownload = (receiptId: string) => {
    // Simulate download
    alert(`Downloading receipt ${receiptId}...`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Navigation Header */}
          <div className="mb-6 flex items-center justify-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors p-2 rounded hover:bg-gray-100"
              title="Back to Home"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </button>
          </div>

          <div className="flex flex-col xl:flex-row gap-8 items-start">
            {/* Main Content - Left Side */}
            <div className="w-full xl:w-1/2">
              <Card className="w-full shadow-lg border-0">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Secure Document Access</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Enter the security code shown below to access your travel documents
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleCaptchaSubmit} className="space-y-6">
                    {/* Visual Captcha */}
                    <div className="flex justify-center">
                      <VisualCaptcha 
                        onCodeGenerated={setCaptchaCode}
                        width={280}
                        height={80}
                        difficulty="medium"
                      />
                    </div>

                    {/* Code Input */}
                    <div className="space-y-2">
                      <label htmlFor="security-code" className="text-sm font-medium text-gray-700">
                        Security Code
                      </label>
                      <Input
                        id="security-code"
                        type="text"
                        placeholder="Enter the 6 characters shown above"
                        value={code}
                        onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6))}
                        className="text-center text-lg font-mono tracking-widest h-12"
                        maxLength={6}
                        disabled={isLocked}
                        required
                        autoComplete="off"
                      />
                    </div>
                    
                    {/* Lock Status */}
                    {isLocked && (
                      <div className="flex items-center justify-center gap-2 text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Account locked for {formatLockTime(lockTimeRemaining)}</span>
                      </div>
                    )}
                    
                    {/* Error Message */}
                    {error && (
                      <div className={`flex items-center gap-2 text-sm p-3 rounded-lg ${
                        attempts > 0 ? 'text-red-600 bg-red-50 border border-red-200' : 'text-green-600 bg-green-50 border border-green-200'
                      }`}>
                        {attempts > 0 ? <AlertCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                        {error}
                      </div>
                    )}

                    {/* CAPTCHA VERIFICATION BUTTON */}
                    <Button 
                      type="button"
                      onClick={handleCaptchaSubmit}
                      className="w-full h-12 text-sm font-semibold bg-amber-600 hover:bg-amber-700 text-white border-2 border-amber-700 transition-all duration-200"
                      disabled={isLoading || isLocked || code.length !== 6 || !captchaCode}
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Verify Captcha Code
                        </>
                      )}
                    </Button>

                    {/* MAIN ACCESS BUTTON */}
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-bold bg-green-600 hover:bg-green-700 text-white border-2 border-green-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      disabled={isLoading || isLocked || code.length !== 6 || !captchaCode}
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          <Lock className="w-5 h-5 mr-2" />
                          Access My Receipts
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Additional Info */}
            <div className="w-full xl:w-1/2 space-y-6">
              {/* Security Verification Card */}
              <Card className="w-full shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Security Verification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Key className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-2">Security Instructions:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Enter the 6 characters from the image</li>
                          <li>• Case-insensitive (A-Z, 0-9)</li>
                          <li>• 3 attempts maximum</li>
                          <li>• 30-second lockout after failed attempts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Document Types Available</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Booking Confirmations</p>
                      <p className="text-sm text-muted-foreground">Safari package details</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">Payment Receipts</p>
                      <p className="text-sm text-muted-foreground">Transaction history</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Travel Itineraries</p>
                      <p className="text-sm text-muted-foreground">Day-by-day schedules</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-medium">Insurance Certificates</p>
                      <p className="text-sm text-muted-foreground">Coverage details</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => navigate('/safaris')}
                  className="flex items-center justify-center gap-1 text-xs text-gray-600 hover:text-primary transition-colors p-2 rounded hover:bg-gray-100"
                >
                  <FileText className="w-3 h-3" />
                  View Safaris
                </button>
                <button 
                  onClick={() => navigate('/plan-my-trip')}
                  className="flex items-center justify-center gap-1 text-xs text-gray-600 hover:text-primary transition-colors p-2 rounded hover:bg-gray-100"
                >
                  <Mail className="w-3 h-3" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Fixed at bottom */}
        <footer className="absolute bottom-0 left-0 right-0 bg-white border-t">
          <div className="container mx-auto px-4 py-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-sm">Prevatech Safaris</h4>
                <p className="text-xs text-muted-foreground">
                  Your trusted partner for unforgettable African safari experiences.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Quick Links</h4>
                <div className="space-y-1">
                  <button 
                    onClick={() => navigate('/safaris')}
                    className="block text-xs text-muted-foreground hover:text-primary text-left"
                  >
                    Safari Packages
                  </button>
                  <button 
                    onClick={() => navigate('/pricing')}
                    className="block text-xs text-muted-foreground hover:text-primary text-left"
                  >
                    Pricing
                  </button>
                  <button 
                    onClick={() => navigate('/blog')}
                    className="block text-xs text-muted-foreground hover:text-primary text-left"
                  >
                    Travel Blog
                  </button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Support</h4>
                <div className="space-y-1">
                  <button 
                    onClick={() => navigate('/plan-my-trip')}
                    className="block text-xs text-muted-foreground hover:text-primary text-left"
                  >
                    Contact Us
                  </button>
                  <button 
                    onClick={() => navigate('/faq')}
                    className="block text-xs text-muted-foreground hover:text-primary text-left"
                  >
                    FAQ
                  </button>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Phone className="w-3 h-3" />
                    <span>+254 123 456 789</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t text-center text-xs text-muted-foreground">
              <p>&copy; 2024 Prevatech Safaris. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors p-2 rounded hover:bg-gray-100"
                title="Back to Home"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Home</span>
              </button>
              <div className="h-4 w-px bg-gray-300"></div>
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors p-2 rounded hover:bg-gray-100"
                title="Home"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm font-medium">Home</span>
              </button>
            </div>
            <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-7xl pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Your Travel Documents</h1>
                  <p className="text-muted-foreground">Secure access to your receipts and itineraries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Documents Grid - Enhanced View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sampleReceipts.map((receipt) => (
              <Card key={receipt.id} className="hover:shadow-lg transition-all duration-200 hover:scale-105 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        {getReceiptIcon(receipt.type)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-base font-semibold leading-tight">{receipt.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">ID: {receipt.id}</p>
                      </div>
                    </div>
                    <div className="ml-2">
                      {getStatusBadge(receipt.status)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{receipt.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{receipt.date}</span>
                    </div>
                    {receipt.amount && (
                      <div className="flex items-center gap-3 text-sm">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span className="font-bold text-green-600">{receipt.amount}</span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 h-10 text-sm font-medium"
                      onClick={() => handleDownload(receipt.id)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 h-10 text-sm font-medium"
                      onClick={() => handleDownload(receipt.id)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help Section - Enhanced */}
          <Card className="mb-8 shadow-md border-0">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3">Need Help With Your Documents?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you have any questions about your travel documents, need assistance with downloads, or require additional information, our support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button variant="outline" className="flex items-center justify-center gap-2 h-11 px-6">
                    <FileText className="w-4 h-4" />
                    View User Guide
                  </Button>
                  <button 
                    onClick={() => navigate('/plan-my-trip')}
                    className="flex items-center justify-center gap-2 h-11 px-6"
                  >
                    <Users className="w-4 h-4" />
                    Contact Support
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Navigation - Enhanced */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-0">
            <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <button 
                onClick={() => navigate('/safaris')}
                className="flex flex-col items-center gap-3 p-4 text-center rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <FileText className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Safaris</span>
              </button>
              <button 
                onClick={() => navigate('/pricing')}
                className="flex flex-col items-center gap-3 p-4 text-center rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <FileText className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Pricing</span>
              </button>
              <button 
                onClick={() => navigate('/blog')}
                className="flex flex-col items-center gap-3 p-4 text-center rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <FileText className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Blog</span>
              </button>
              <button 
                onClick={() => navigate('/plan-my-trip')}
                className="flex flex-col items-center gap-3 p-4 text-center rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <Mail className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Contact</span>
              </button>
              <button 
                onClick={() => navigate('/airport-transfer')}
                className="flex flex-col items-center gap-3 p-4 text-center rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <FileText className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Transfers</span>
              </button>
              <button 
                onClick={() => navigate('/day-tours')}
                className="flex flex-col items-center gap-3 p-4 text-center rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <FileText className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Day Tours</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Fixed at bottom */}
      <footer className="absolute bottom-0 left-0 right-0 bg-white border-t">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-sm">Prevatech Safaris</h4>
              <p className="text-xs text-muted-foreground">
                Your trusted partner for unforgettable African safari experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">Quick Links</h4>
              <div className="space-y-1">
                <button 
                  onClick={() => navigate('/safaris')}
                  className="block text-xs text-muted-foreground hover:text-primary text-left"
                >
                  Safari Packages
                </button>
                <button 
                  onClick={() => navigate('/pricing')}
                  className="block text-xs text-muted-foreground hover:text-primary text-left"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => navigate('/blog')}
                  className="block text-xs text-muted-foreground hover:text-primary text-left"
                >
                  Travel Blog
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">Support</h4>
              <div className="space-y-1">
                <button 
                  onClick={() => navigate('/plan-my-trip')}
                  className="block text-xs text-muted-foreground hover:text-primary text-left"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => navigate('/faq')}
                  className="block text-xs text-muted-foreground hover:text-primary text-left"
                >
                  FAQ
                </button>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Phone className="w-3 h-3" />
                  <span>+254 123 456 789</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t text-center text-xs text-muted-foreground">
            <p>&copy; 2024 Prevatech Safaris. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReceiptPortal;
