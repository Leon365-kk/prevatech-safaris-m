import { useEffect } from 'react';

interface LocalBusinessData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  image?: string;
}

interface TouristTripData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  image?: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
    telephone: string;
  };
  offers?: {
    '@type': string;
    price: string;
    priceCurrency: string;
    availability: string;
    validFrom: string;
  };
  duration?: string;
  isAccessibleForFree: boolean;
  touristType?: string[];
  language?: string[];
  inLanguage?: string[];
  audience?: string;
}

interface FAQData {
  '@context': string;
  '@type': string;
  mainEntity: {
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }[];
}

interface BreadcrumbData {
  '@context': string;
  '@type': string;
  itemListElement: {
    '@type': string;
    position: number;
    name: string;
    item: string;
  }[];
}

// Function to inject structured data into the page head
const injectStructuredData = (data: any) => {
  useEffect(() => {
    // Remove existing structured data script if it exists
    const existingScript = document.querySelector(`script[data-type="structured-data"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Create and inject new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'structured-data');
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.querySelector(`script[data-type="structured-data"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);
};

// Local Business Schema Component
export const LocalBusinessSchema = ({
  name,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  openingHours,
  priceRange,
  image
}: {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  image?: string;
}) => {
  const schema: LocalBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url,
    telephone,
    email,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude
      }
    }),
    ...(openingHours && { openingHours }),
    ...(priceRange && { priceRange }),
    ...(image && { image })
  };

  injectStructuredData(schema);
  return null;
};

// Tourist Trip Schema Component
export const TouristTripSchema = ({
  name,
  description,
  url,
  image,
  provider,
  offers,
  duration,
  isAccessibleForFree = false,
  touristType = [],
  language = ['English'],
  inLanguage = ['English'],
  audience
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider: {
    name: string;
    url: string;
    telephone: string;
  };
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
    validFrom: string;
  };
  duration?: string;
  isAccessibleForFree?: boolean;
  touristType?: string[];
  language?: string[];
  inLanguage?: string[];
  audience?: string;
}) => {
  const schema: TouristTripData = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description,
    url,
    ...(image && { image }),
    provider: {
      '@type': 'Organization',
      ...provider
    },
    ...(offers && {
      offers: {
        '@type': 'Offer',
        ...offers
      }
    }),
    ...(duration && { duration }),
    isAccessibleForFree,
    ...(touristType.length > 0 && { touristType }),
    ...(language.length > 0 && { language }),
    ...(inLanguage.length > 0 && { inLanguage }),
    ...(audience && { audience })
  };

  injectStructuredData(schema);
  return null;
};

// FAQ Schema Component
export const FAQSchema = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const schema: FAQData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  injectStructuredData(schema);
  return null;
};

// Breadcrumb Schema Component
export const BreadcrumbSchema = ({ breadcrumbs }: { breadcrumbs: { name: string; url: string }[] }) => {
  const schema: BreadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url
    }))
  };

  injectStructuredData(schema);
  return null;
};

// Default SEO Meta Tags Component
export const DefaultSEO = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage,
  noIndex = false 
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  noIndex?: boolean;
}) => {
  useEffect(() => {
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Basic meta tags
    document.title = title;
    updateMetaTag('description', description);
    
    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    
    // Open Graph
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:url', canonicalUrl);
    updatePropertyTag('og:type', 'website');
    updatePropertyTag('og:image', ogImage || "https://prevatechsafaris.com/src/assets/hero-maasai-mara.jpg");
    updatePropertyTag('og:image:width', "1200");
    updatePropertyTag('og:image:height', "630");
    
    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage || "https://prevatechsafaris.com/src/assets/hero-maasai-mara.jpg");
    
    // Additional Meta
    updateMetaTag('keywords', 'Kenya safari, African safari, wildlife tours, Maasai Mara, Amboseli, safari packages, Nairobi tours, airport transfer');
    updateMetaTag('author', 'Prevatech Safaris');
    updateMetaTag('robots', noIndex ? "noindex,nofollow" : "index,follow");
    
    // Geolocation
    updateMetaTag('geo.region', 'KE');
    updateMetaTag('geo.placename', 'Nairobi, Kenya');
    updateMetaTag('geo.position', '-1.2921;36.8219');
    updateMetaTag('ICBM', '-1.2921,36.8219');
    
    // Language
    updateMetaTag('language', 'English');
    document.documentElement.lang = 'en';
  }, [title, description, canonicalUrl, ogImage, noIndex]);

  return null;
};

// Predefined schemas for common use cases
export const PrevatechLocalBusinessSchema = () => (
  <LocalBusinessSchema
    name="Prevatech Safaris"
    description="Your trusted partner for safari experiences in Kenya. We offer expertly guided safari tours, airport transfers, and day tours to Kenya's most spectacular wildlife destinations."
    url="https://prevatechsafaris.com"
    telephone="+254724022016"
    email="info@prevatechsafaris.com"
    address={{
      streetAddress: "Mombasa Road",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      postalCode: "00100",
      addressCountry: "Kenya"
    }}
    geo={{
      latitude: -1.2921,
      longitude: 36.8219
    }}
    openingHours={["Mo-Su 00:00-23:59"]}
    priceRange="$$"
    image="https://prevatechsafaris.com/src/assets/prevatech-logo.png"
  />
);
