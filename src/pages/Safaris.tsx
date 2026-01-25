import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Star, Search, Calendar, Users, Heart, Bird, Camera, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/nature 4.jpg";
import { generateAvailabilityData, getAvailableDatesInMonth } from "@/lib/availability-data";

interface Package {
  name: string;
  description: string;
  price: string;
  location: string;
  rating: number;
  category: string;
}

const allPackages: Package[] = [
  // Beach & Coastal Packages
  {
    name: "Mombasa 3 Days Package 2025",
    description: "A dose of the sea always feels good! If You're Looking For Relaxation, Beach Therapy Is The Perfect Solution! How about escaping to the sun-drenched beaches of the Kenyan coast. Spend 3 days on this tropical destination, where all that's on your itinerary is to sip a cocktail and gaze into the turquoise waters ahead.",
    price: "Ksh15,999",
    location: "Mombasa North Coast",
    rating: 4.5,
    category: "Beach",
  },
  {
    name: "3 Days Diani Packages",
    description: "Not once but three times, Diani was voted Africa's finest beach destination. Absolutely gorgeous and uncrowded, Diani's beaches are crystal blue, shallow and warm. Perfect for wading and snorkeling. For all the beach enthusiasts, you can get the chance to spot some of the best marine life here.",
    price: "Ksh17,600",
    location: "Diani Ukunda",
    rating: 4.5,
    category: "Beach",
  },
  {
    name: "5 Days Diani Summer Deals",
    description: "5 Days Diani Summer Deals - Experience the best of Kenya's coast with extended beach time, water sports, and relaxation at top-rated resorts.",
    price: "Ksh39,700",
    location: "Diani Ukunda",
    rating: 4.5,
    category: "Beach",
  },
  {
    name: "3 Days Watamu Malindi & Kilifi Packages",
    description: "Watamu is a small town located approximately 105 km north of Mombasa. The shoreline features white sand beaches and offshore coral formations. The Marine Park is considered one of the best snorkeling and diving areas on the coast of East Africa.",
    price: "Ksh33,000",
    location: "Malindi Watamu",
    rating: 4.5,
    category: "Beach",
  },
  {
    name: "5 Days Watamu Malindi & Kilifi Packages",
    description: "Watamu is rated the third-best beach in Africa, for its crystal clear water and silver sand beaches. Malindi is a popular tourist attraction destination with historical ruins and National Parks.",
    price: "Ksh44,700",
    location: "Malindi Watamu",
    rating: 4.5,
    category: "Beach",
  },
  {
    name: "2025 SGR 5 Days Watamu / Malindi Package",
    description: "Travel in comfort via SGR to the stunning Watamu and Malindi coastline. Experience crystal clear waters, marine parks, and the rich history of the Kenyan coast.",
    price: "Ksh56,800",
    location: "Malindi Watamu",
    rating: 4.5,
    category: "Beach",
  },
  {
    name: "Mombasa 3 Days August School Holiday-SGR Deals",
    description: "Perfect family getaway during school holidays. Travel via SGR and enjoy Mombasa's beautiful beaches and attractions.",
    price: "Ksh16,500",
    location: "Mombasa North Coast",
    rating: 4.5,
    category: "Beach",
  },
  {
    name: "Mombasa School Holiday-SGR Deals 5 Days 4 Nights",
    description: "Extended school holiday package with SGR travel to Mombasa. More time to explore beaches, historical sites, and coastal cuisine.",
    price: "Ksh25,500",
    location: "Mombasa North Coast",
    rating: 4.5,
    category: "Beach",
  },
  {
    name: "Diani 3 Days 2 Nights Babymoon & Gender Reveal",
    description: "Celebrate your special moments at Diani's beautiful beaches. Perfect for babymoons and gender reveal celebrations.",
    price: "Ksh23,600",
    location: "Diani Ukunda",
    rating: 4.5,
    category: "Beach",
  },
  {
    name: "Diani 5 Days 4 Nights Babymoon & Gender Reveal",
    description: "Extended celebration package at Diani. More time to relax, celebrate, and create lasting memories.",
    price: "Ksh45,100",
    location: "Diani Ukunda",
    rating: 4.5,
    category: "Beach",
  },
  {
    name: "Chama Deals 3 Days 2025 Diani Package",
    description: "Perfect for group getaways! Enjoy Diani's beaches with your chama at special group rates.",
    price: "Ksh26,300",
    location: "Diani Ukunda",
    rating: 4.5,
    category: "Beach",
  },
  {
    name: "Chama Deals 2025 Diani Package 5 Days 4 Nights",
    description: "Extended chama getaway to Diani with more activities and beach time for your group.",
    price: "Ksh45,100",
    location: "Diani Ukunda",
    rating: 4.5,
    category: "Beach",
  },
  // Wildlife Safaris
  {
    name: "Maasai Mara Wildebeest Migration 2025",
    description: "Discover the iconic Masai Mara Situated in the southwest of Kenya, covering an area of 1,510 square km. The quintessential Masai Mara safari delivers many attractions, as the reserve is home to an excellent year-round concentration of game, including the more than two million wildebeest, zebras and other antelopes that make up the famous Great Migration.",
    price: "Ksh17,000",
    location: "Maasai Mara",
    rating: 4.5,
    category: "Safari",
  },
  {
    name: "3 Days Samburu Package",
    description: "Samburu is among Kenya's most scenic reserves, with riverine forest along the lovely Ewaso Nyiro River. Close to the river is also where you're most likely to see leopards. Dry Acacia scrub and semi-arid savannah extends to the mountains.",
    price: "Ksh23,100",
    location: "Samburu",
    rating: 4.5,
    category: "Safari",
  },
  {
    name: "3 Days Tsavo Packages",
    description: "Experience Kenya's largest national park with its famous red elephants, diverse landscapes, and abundant wildlife.",
    price: "Ksh29,600",
    location: "Tsavo",
    rating: 4.5,
    category: "Safari",
  },
  {
    name: "Easter Tsavo 3 Days 2 Nights 2025 Package",
    description: "Celebrate Easter with a memorable safari experience in Tsavo National Park.",
    price: "Ksh37,100",
    location: "Tsavo",
    rating: 4.5,
    category: "Safari",
  },
  {
    name: "Bless Wazazi Wafike Amboseli 3 Days 2 Nights",
    description: "Treat your parents to an unforgettable Amboseli experience with views of Mount Kilimanjaro and elephant herds.",
    price: "Ksh54,500",
    location: "Amboseli",
    rating: 4.5,
    category: "Safari",
  },
  {
    name: "Easter Samburu 3 Days 2025 Package",
    description: "Celebrate Easter in the scenic Samburu reserve with unique wildlife and cultural experiences.",
    price: "Ksh39,999",
    location: "Samburu",
    rating: 4.5,
    category: "Safari",
  },
  {
    name: "Masai Mara 3 Days 2 Nights August School Holiday",
    description: "Family-friendly safari during school holidays. Experience the Maasai Mara's incredible wildlife.",
    price: "Ksh15,500",
    location: "Maasai Mara",
    rating: 4.5,
    category: "Safari",
  },
  {
    name: "Maasai Mara Bush Christmas Package 3 Days 2 Nights",
    description: "Celebrate Christmas in the African bush with a magical Maasai Mara safari experience.",
    price: "Ksh15,500",
    location: "Maasai Mara",
    rating: 4.5,
    category: "Safari",
  },
  // Weekend Getaways
  {
    name: "Naivasha Weekend Getaways",
    description: "Naivasha is a town in the Rift Valley region of Kenya. It is situated around Lake Naivasha, which is one of the Great Rift Valley's freshwater lakes. Lake Elementaita is a tranquil and ecologically significant destination.",
    price: "Ksh3,800",
    location: "Naivasha",
    rating: 4.5,
    category: "Weekend",
  },
  {
    name: "The Great Lakes 2 Days 1 Night Naivasha 2025",
    description: "Explore Lake Naivasha's beautiful scenery, wildlife, and boat rides on this quick getaway.",
    price: "Ksh4,500",
    location: "Naivasha",
    rating: 4.5,
    category: "Weekend",
  },
  {
    name: "Nakuru Weekend Getaways",
    description: "Nakuru is renowned for hosting Lake Nakuru National Park, where visitors can embark on game drives to witness diverse wildlife in a relatively small area. The park is a haven for both black and white rhinoceros.",
    price: "Ksh11,750",
    location: "Nakuru",
    rating: 4.5,
    category: "Weekend",
  },
  {
    name: "The Great Lakes 2 Days 2025 Nakuru",
    description: "Experience Lake Nakuru's flamingos and rhino sanctuary on this weekend escape.",
    price: "Ksh11,750",
    location: "Nakuru",
    rating: 4.5,
    category: "Weekend",
  },
  {
    name: "Nakuru Summer Deals 2 Days 1 Night",
    description: "Summer special rates for Lake Nakuru weekend getaway.",
    price: "Ksh11,750",
    location: "Nakuru",
    rating: 4.5,
    category: "Weekend",
  },
  {
    name: "The Great Lake Elementaita Self Drive",
    description: "Self-drive adventure to Lake Elementaita with its unique soda lake ecosystem and diverse birdlife.",
    price: "Ksh3,800",
    location: "Elementaita",
    rating: 4.5,
    category: "Weekend",
  },
  {
    name: "MT.Kenya 2025 Getaways 2 Days 1 Night",
    description: "Explore Mount Kenya's beautiful landscapes and unique mountain ecosystems.",
    price: "Ksh5,100",
    location: "Mt Kenya",
    rating: 4.5,
    category: "Weekend",
  },
  {
    name: "MT.Kenya Chama Deals 2 Days 1 Night",
    description: "Group rates for Mount Kenya getaways. Perfect for chamas and friends.",
    price: "Ksh5,100",
    location: "Mt Kenya",
    rating: 4.5,
    category: "Weekend",
  },
  {
    name: "Mt Kenya 2025 2 Days 1 Night",
    description: "Short getaway to the majestic Mt Kenya region with scenic views and nature walks.",
    price: "Ksh9,300",
    location: "Mt Kenya",
    rating: 4.5,
    category: "Weekend",
  },
  {
    name: "Nairobi Staycations",
    description: "Discover luxury staycation options in Nairobi without traveling far from home.",
    price: "Ksh5,200",
    location: "Nairobi",
    rating: 4.5,
    category: "Weekend",
  },
  {
    name: "Nairobi Staycations 2 Days 1 Nights",
    description: "Extended Nairobi staycation experience at premium city hotels.",
    price: "Ksh5,200",
    location: "Nairobi Staycations",
    rating: 4.5,
    category: "Weekend",
  },
  // International Packages
  {
    name: "5 Days Dubai Low Season Packages",
    description: "Vacations to Dubai are a guaranteed crowd-pleaser. Just as fancy as it looks in the pictures, this city is a traveler's dream. Nestled between the sea and burning desert sands. Marvel at the futuristic architecture, world-famous beaches and enjoy the indulgent hospitality.",
    price: "USD699",
    location: "Dubai",
    rating: 4.5,
    category: "International",
  },
  {
    name: "5 Days Zanzibar Package",
    description: "Zanzibar is a semi-autonomous archipelago off the coast of Tanzania. Stone Town, the historic part of Zanzibar City, is a UNESCO World Heritage Site known for its narrow winding streets, historic architecture, and vibrant markets.",
    price: "USD631",
    location: "Zanzibar",
    rating: 4.5,
    category: "International",
  },
  {
    name: "Zanzibar August Family Tropical Holiday 5 Days 4 Nights",
    description: "Family-friendly tropical holiday in Zanzibar during August. Perfect for school holiday adventures.",
    price: "USD800",
    location: "Zanzibar",
    rating: 4.5,
    category: "International",
  },
  {
    name: "5 Days South Africa Packages",
    description: "Cape Town is a port city on South Africa's southwest coast, on a peninsula beneath the Imposing Table Mountain. A coming-together of cultures, cuisines and landscapes, there's nowhere quite like Cape Town.",
    price: "USD1,199",
    location: "South Africa",
    rating: 4.5,
    category: "International",
  },
  {
    name: "5 Days 4 Nights Mauritius Packages",
    description: "Mauritius is an Indian Ocean Island nation known for its beaches, lagoons, and reefs. The mountainous interior includes Black River Gorges National Park with rainforests, waterfalls, and hiking trails.",
    price: "USD1,442",
    location: "Mauritius",
    rating: 4.5,
    category: "International",
  },
  {
    name: "7 Days 6 Nights Malaysia Singapore Packages",
    description: "Experience the best of Southeast Asia with this combined Malaysia and Singapore tour package.",
    price: "USD1,499",
    location: "Singapore",
    rating: 4.5,
    category: "International",
  },
  // Kenya Budget Safaris
  {
    name: "05 DAYS GLIMPSE OF KENYA BUDGET SAFARI",
    description: "A 5-day budget-friendly introduction to Kenya's wildlife and landscapes.",
    price: "USD2,047",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Budget Safari",
  },
  {
    name: "6 DAYS KENYA HIGHLIGHTS BUDGET SAFARI",
    description: "Explore Kenya's top wildlife destinations on a budget-friendly 6-day adventure.",
    price: "USD1,372",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Budget Safari",
  },
  {
    name: "7 DAYS CLASSIC KENYA BUDGET SAFARI",
    description: "The classic Kenya safari experience at budget-friendly rates.",
    price: "USD1,278",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Budget Safari",
  },
  {
    name: "8 DAYS CHEETAH BUDGET SAFARI",
    description: "8-day budget safari focused on Kenya's iconic cheetahs and other wildlife.",
    price: "USD1,896",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Budget Safari",
  },
  {
    name: "8 DAYS KENYA SPLENDORS BUDGET SAFARI",
    description: "Discover Kenya's splendors over 8 days with comfortable budget accommodations.",
    price: "USD1,862",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Budget Safari",
  },
  {
    name: "11 DAYS KENYA DELIGHT BUDGET SAFARI",
    description: "Extended 11-day budget safari covering Kenya's best wildlife areas.",
    price: "USD2,742",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Budget Safari",
  },
  {
    name: "13 DAYS SCENIC KENYA BUDGET SAFARI",
    description: "Comprehensive 13-day budget safari through Kenya's most scenic regions.",
    price: "USD2,047",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Budget Safari",
  },
  // Kenya Midrange Safaris
  {
    name: "5 DAYS GLIMPSE OF KENYA MIDRANGE SAFARI",
    description: "5-day midrange safari with comfortable lodges and quality experiences.",
    price: "USD2,461",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Midrange Safari",
  },
  {
    name: "6 DAYS KENYA HIGHLIGHTS MIDRANGE SAFARI",
    description: "6-day midrange tour of Kenya's wildlife highlights.",
    price: "USD1,617",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Midrange Safari",
  },
  {
    name: "7 DAYS CLASSIC KENYA MIDRANGE SAFARI",
    description: "The classic Kenya experience with midrange comfort and amenities.",
    price: "USD1,521",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Midrange Safari",
  },
  {
    name: "8 DAYS CHEETAH MIDRANGE SAFARI",
    description: "8-day midrange safari with focus on big cat sightings.",
    price: "USD2,064",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Midrange Safari",
  },
  {
    name: "8 DAYS KENYA SPLENDORS MIDRANGE SAFARI",
    description: "8-day midrange exploration of Kenya's wildlife splendors.",
    price: "USD2,101",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Midrange Safari",
  },
  {
    name: "11 DAYS KENYA DELIGHT MIDRANGE SAFARI",
    description: "11-day midrange safari covering extensive wildlife areas.",
    price: "USD4,905",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Midrange Safari",
  },
  {
    name: "13 DAYS SCENIC KENYA MIDRANGE SAFARI",
    description: "13-day midrange journey through Kenya's scenic landscapes.",
    price: "USD4,823",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Midrange Safari",
  },
  // Kenya Luxury Safaris
  {
    name: "5 DAYS GLIMPSE OF KENYA LUXURY SAFARI",
    description: "5-day luxury introduction to Kenya's wildlife in premium lodges.",
    price: "USD2,264",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Luxury Safari",
  },
  {
    name: "7 DAYS CLASSIC KENYA LUXURY SAFARI",
    description: "The ultimate Kenya safari experience with luxury accommodations.",
    price: "USD3,487",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Luxury Safari",
  },
  {
    name: "8 DAYS CHEETAH LUXURY SAFARI",
    description: "8-day luxury safari with exclusive big cat viewing experiences.",
    price: "USD3,240",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Luxury Safari",
  },
  {
    name: "8 DAYS KENYA SPLENDORS LUXURY SAFARI",
    description: "8-day luxury exploration of Kenya's finest wildlife destinations.",
    price: "USD3,403",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Luxury Safari",
  },
  {
    name: "11 DAYS KENYA DELIGHT LUXURY SAFARI",
    description: "11-day luxury safari with premium accommodations throughout.",
    price: "USD7,120",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Luxury Safari",
  },
  {
    name: "13 DAYS SCENIC KENYA LUXURY SAFARI",
    description: "13-day luxury journey through Kenya's most scenic regions.",
    price: "USD5,586",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Luxury Safari",
  },
  {
    name: "20 Days Best of Kenya Bush & Beach Luxury Safari",
    description: "The ultimate 20-day Kenya experience combining bush safaris and beach relaxation.",
    price: "USD8,173",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Luxury Safari",
  },
  // Tanzania Safaris
  {
    name: "5 DAYS TANZANIA JEWELS BUDGET SAFARI",
    description: "5-day budget exploration of Tanzania's wildlife jewels.",
    price: "USD1,773",
    location: "Tanzania Safaris",
    rating: 4.5,
    category: "Tanzania",
  },
  {
    name: "5 DAYS TANZANIA JEWELS MIDRANGE SAFARI",
    description: "5-day midrange tour of Tanzania's premier wildlife destinations.",
    price: "USD1,888",
    location: "Tanzania Safaris",
    rating: 4.5,
    category: "Tanzania",
  },
  {
    name: "7 DAYS BEST OF TANZANIA BUDGET SAFARI",
    description: "7-day budget safari covering the best of Tanzania.",
    price: "USD2,096",
    location: "Tanzania Safaris",
    rating: 4.5,
    category: "Tanzania",
  },
  {
    name: "7 DAYS BEST OF TANZANIA MIDRANGE SAFARI",
    description: "7-day midrange exploration of Tanzania's wildlife highlights.",
    price: "USD2,517",
    location: "Tanzania Safaris",
    rating: 4.5,
    category: "Tanzania",
  },
  {
    name: "7 DAYS BEST OF TANZANIA LUXURY SAFARI",
    description: "7-day luxury Tanzania safari with premium lodges.",
    price: "USD2,953",
    location: "Tanzania Safaris",
    rating: 4.5,
    category: "Tanzania",
  },
  {
    name: "7 DAYS TANZANIA TREASURES BUDGET SAFARI",
    description: "7-day budget discovery of Tanzania's wildlife treasures.",
    price: "USD2,035",
    location: "Tanzania Safaris",
    rating: 4.5,
    category: "Tanzania",
  },
  {
    name: "7 DAYS TANZANIA TREASURES MIDRANGE SAFARI",
    description: "7-day midrange safari through Tanzania's best parks.",
    price: "USD2,650",
    location: "Tanzania Safaris",
    rating: 4.5,
    category: "Tanzania",
  },
  // East Africa Combo Safaris
  {
    name: "12 DAYS KENYA & TANZANIA COMBO BUDGET SAFARI",
    description: "12-day budget adventure covering both Kenya and Tanzania.",
    price: "USD3,757",
    location: "Kenya Tanzania",
    rating: 4.5,
    category: "East Africa",
  },
  {
    name: "12 DAYS KENYA & TANZANIA COMBO MIDRANGE SAFARI",
    description: "12-day midrange exploration of Kenya and Tanzania.",
    price: "USD4,222",
    location: "Kenya Tanzania",
    rating: 4.5,
    category: "East Africa",
  },
  {
    name: "12 DAYS KENYA & TANZANIA COMBO LUXURY SAFARI",
    description: "12-day luxury safari through Kenya and Tanzania's best parks.",
    price: "USD5,518",
    location: "Kenya Tanzania",
    rating: 4.5,
    category: "East Africa",
  },
  {
    name: "13 DAYS BEST OF EAST AFRICA BUDGET SAFARI",
    description: "13-day budget journey through the best of East Africa.",
    price: "USD3,561",
    location: "Kenya Tanzania",
    rating: 4.5,
    category: "East Africa",
  },
  {
    name: "13 DAYS BEST OF EAST AFRICA MIDRANGE SAFARI",
    description: "13-day midrange East Africa adventure.",
    price: "USD4,123",
    location: "Kenya Tanzania",
    rating: 4.5,
    category: "East Africa",
  },
  {
    name: "13 DAYS BEST OF EAST AFRICA LUXURY SAFARI",
    description: "13-day luxury East Africa exploration.",
    price: "USD5,823",
    location: "Tanzania Safaris",
    rating: 4.5,
    category: "East Africa",
  },
  {
    name: "15 DAYS MAGICAL EAST AFRICA BUDGET SAFARI",
    description: "15-day magical journey through East Africa on a budget.",
    price: "USD4,354",
    location: "Kenya Tanzania",
    rating: 4.5,
    category: "East Africa",
  },
  {
    name: "15 DAYS MAGICAL EAST AFRICA LUXURY SAFARI",
    description: "15-day luxury East Africa experience.",
    price: "USD8,809",
    location: "Kenya Tanzania",
    rating: 4.5,
    category: "East Africa",
  },
  // Flying Safaris
  {
    name: "06 Days Wings Over Amboseli & Mara Budget Safari",
    description: "Fly-in safari experience to Amboseli and Maasai Mara on a budget.",
    price: "USD2,979",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Flying Safari",
  },
  {
    name: "06 Days Wings Over Amboseli & Mara Mid-Range Safari",
    description: "Midrange fly-in safari to Amboseli and the Mara.",
    price: "USD3,100",
    location: "Kenya Safaris",
    rating: 4.5,
    category: "Flying Safari",
  },
];

const categories = [
  "All",
  "Beach",
  "Safari",
  "Weekend",
  "International",
  "Budget Safari",
  "Midrange Safari",
  "Luxury Safari",
  "Tanzania",
  "East Africa",
  "Flying Safari",
];

const Safaris = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [availabilityData] = useState(generateAvailabilityData());

  const getPackageAvailability = (packageName: string) => {
    const packageData = availabilityData.find(p => p.packageName === packageName);
    if (!packageData) return null;
    
    const today = new Date();
    const availableDates = getAvailableDatesInMonth(
      packageData, 
      today.getFullYear(), 
      today.getMonth()
    );
    
    return {
      availableThisMonth: availableDates.length,
      totalDays: new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() - today.getDate() + 1,
      percentage: Math.round((availableDates.length / (new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() - today.getDate() + 1)) * 100)
    };
  };

  const filteredPackages = allPackages.filter((pkg) => {
    const matchesCategory = selectedCategory === "All" || pkg.category === selectedCategory;
    const matchesSearch =
      pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-[50vh] min-h-[400px]">
          <img src={heroImage} alt="Safari in Kenya" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Travel Packages 2025
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Discover our exclusive collection of safari adventures, beach getaways, and international tours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground hover:bg-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <div
                key={`${pkg.name}-${index}`}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                {/* Card Header with gradient */}
                <div className="h-48 bg-gradient-to-br from-primary to-primary/70 relative flex items-center justify-center p-6">
                  <h3 className="font-display text-xl font-bold text-primary-foreground text-center leading-tight">
                    {pkg.name}
                  </h3>
                  <div className="absolute top-4 right-4 bg-background text-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {pkg.price}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{pkg.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm line-clamp-3">{pkg.description}</p>

                  {/* Availability Indicator */}
                  {(() => {
                    const availability = getPackageAvailability(pkg.name);
                    if (!availability) return null;
                    
                    return (
                      <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                        <Calendar className="w-4 h-4 text-primary" />
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground">Availability this month</div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-background rounded-full h-2 overflow-hidden">
                              <div 
                                className="bg-primary h-full transition-all duration-300"
                                style={{ width: `${availability.percentage}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium">
                              {availability.availableThisMonth} days
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs bg-muted px-3 py-1 rounded-full">{pkg.category}</span>
                    <Link to={`/safaris/${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button size="sm">
                        View Package
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No packages found matching your search.</p>
              <Button className="mt-4" onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We specialize in custom travel experiences. Tell us your dream adventure and we'll make it happen.
          </p>
          <Link to="/book">
            <Button variant="heroOutline" size="xl">
              Request Custom Package
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
      {/* Themed Packages Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Themed Safari Packages</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Discover specialized safari experiences tailored to your interests and travel style
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Honeymoon Safaris</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Romantic getaways with luxury accommodations and special experiences for couples
                </p>
                <Link to="/safaris/honeymoon">
                  <Button size="sm" variant="outline">View Honeymoon Packages</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Family Safaris</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Kid-friendly adventures with educational activities and flexible schedules
                </p>
                <Link to="/safaris/family">
                  <Button size="sm" variant="outline">View Family Packages</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bird className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Birding Safaris</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Specialized tours for bird enthusiasts with expert guides and prime locations
                </p>
                <Link to="/safaris/birding">
                  <Button size="sm" variant="outline">View Birding Packages</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Photography Safaris</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tailored for photographers with optimal timing and exclusive access
                </p>
                <Link to="/safaris/photography">
                  <Button size="sm" variant="outline">View Photography Packages</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Budget Safaris</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Affordable adventures without compromising on experience
                </p>
                <Link to="/safaris/budget">
                  <Button size="sm" variant="outline">View Budget Packages</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Luxury Safaris</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium experiences with top-tier accommodations and personalized service
                </p>
                <Link to="/safaris/luxury">
                  <Button size="sm" variant="outline">View Luxury Packages</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safaris;
