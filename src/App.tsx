import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import Index from "./pages/Index";
import Safaris from "./pages/Safaris";
import Pricing from "./pages/Pricing";
import AirportTransfer from "./pages/AirportTransfer";
import DayTours from "./pages/DayTours";
import BookOnline from "./pages/BookOnline";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PackageDetails from "./pages/PackageDetails";
import FAQ from "./pages/FAQ";
import PlanMyTrip from "./pages/PlanMyTrip";
import ReceiptPortal from "./components/ReceiptPortal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
