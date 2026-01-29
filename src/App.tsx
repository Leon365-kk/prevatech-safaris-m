import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useEffect, Suspense, lazy } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

const queryClient = new QueryClient();

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const Safaris = lazy(() => import("./pages/Safaris"));
const Pricing = lazy(() => import("./pages/Pricing"));
const AirportTransfer = lazy(() => import("./pages/AirportTransfer"));
const DayTours = lazy(() => import("./pages/DayTours"));
const BookOnline = lazy(() => import("./pages/BookOnline"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PackageDetails = lazy(() => import("./pages/PackageDetails"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PlanMyTrip = lazy(() => import("./pages/PlanMyTrip"));
const ReceiptPortal = lazy(() => import("./components/ReceiptPortal"));
const NotFound = lazy(() => import("./pages/NotFound"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner text="Loading page..." size="lg" className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/safaris" element={<Safaris />} />
              <Route path="/safaris/:packageId" element={<PackageDetails />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/airport-transfer" element={<AirportTransfer />} />
              <Route path="/day-tours" element={<DayTours />} />
              <Route path="/book" element={<BookOnline />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/plan-my-trip" element={<PlanMyTrip />} />
              <Route path="/receipts" element={<ReceiptPortal />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
