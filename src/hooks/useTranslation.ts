import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';

// Hook for translating page content
export const useTranslation = () => {
  const { t } = useLanguage();
  return { t };
};

// Translation keys for common UI elements
export const commonTranslations = {
  // Navigation
  nav: {
    home: 'nav.home',
    safaris: 'nav.safaris',
    planTrip: 'nav.planTrip',
    support: 'nav.support',
    airport: 'nav.airport',
    dayTours: 'nav.dayTours',
    pricing: 'nav.pricing',
    blog: 'nav.blog',
    book: 'nav.book',
    faq: 'nav.faq'
  },
  
  // Common actions
  actions: {
    learnMore: 'common.learnMore',
    bookNow: 'common.bookNow',
    contactUs: 'common.contactUs',
    getQuote: 'common.getQuote',
    checkAvailability: 'common.checkAvailability',
    talkToExpert: 'common.talkToExpert',
    downloadGuide: 'common.downloadGuide',
    viewDetails: 'common.viewDetails',
    readMore: 'common.readMore',
    explore: 'common.explore'
  },
  
  // Common labels
  labels: {
    price: 'common.price',
    duration: 'common.duration',
    location: 'common.location',
    rating: 'common.rating',
    date: 'common.date',
    time: 'common.time',
    phone: 'common.phone',
    email: 'common.email',
    whatsapp: 'common.whatsapp',
    loading: 'common.loading',
    error: 'common.error',
    success: 'common.success'
  },
  
  // Form labels
  forms: {
    fullName: 'forms.fullName',
    emailAddress: 'forms.emailAddress',
    phoneNumber: 'forms.phoneNumber',
    numberOfGuests: 'forms.numberOfGuests',
    preferredDate: 'forms.preferredDate',
    destination: 'forms.destination',
    message: 'forms.message',
    submit: 'forms.submit',
    required: 'forms.required',
    optional: 'forms.optional'
  },
  
  // Page specific
  pages: {
    home: {
      hero: {
        title: 'home.hero.title',
        subtitle: 'home.hero.subtitle',
        cta: 'home.hero.cta'
      },
      about: {
        title: 'home.about.title',
        description: 'home.about.description'
      }
    },
    safaris: {
      title: 'safaris.title',
      subtitle: 'safaris.subtitle',
      viewPackage: 'safaris.viewPackage',
      filters: {
        all: 'safaris.filters.all',
        budget: 'safaris.filters.budget',
        midrange: 'safaris.filters.midrange',
        luxury: 'safaris.filters.luxury'
      }
    },
    booking: {
      title: 'booking.title',
      personalInfo: 'booking.personalInfo',
      tripDetails: 'booking.tripDetails',
      serviceType: 'booking.serviceType',
      guests: 'booking.guests',
      destination: 'booking.destination',
      date: 'booking.date',
      message: 'booking.message',
      submit: 'booking.submit'
    },
    planTrip: {
      title: 'planTrip.title',
      subtitle: 'planTrip.subtitle',
      steps: {
        travelers: 'planTrip.steps.travelers',
        budget: 'planTrip.steps.budget',
        interests: 'planTrip.steps.interests',
        special: 'planTrip.steps.special',
        contact: 'planTrip.steps.contact'
      }
    },
    faq: {
      title: 'faq.title',
      subtitle: 'faq.subtitle',
      categories: {
        payments: 'faq.categories.payments',
        cancellation: 'faq.categories.cancellation',
        family: 'faq.categories.family',
        accessibility: 'faq.categories.accessibility',
        dietary: 'faq.categories.dietary'
      }
    },
    contact: {
      title: 'contact.title',
      subtitle: 'contact.subtitle',
      phone: 'contact.phone',
      email: 'contact.email',
      whatsapp: 'contact.whatsapp'
    },
    footer: {
      about: 'footer.about',
      description: 'footer.description',
      quickLinks: 'footer.quickLinks',
      contact: 'footer.contact',
      followUs: 'footer.followUs',
      allRights: 'footer.allRights'
    }
  }
};

// Helper function to get translation with fallback
export const getTranslation = (t: (key: string) => string, key: string, fallback?: string) => {
  const translation = t(key);
  return translation !== key ? translation : (fallback || key);
};

// Translation component for easy usage
interface TranslatedTextProps {
  i18nKey: string;
  fallback?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const TranslatedText: React.FC<TranslatedTextProps> = ({ i18nKey, fallback, className, as }) => {
  const { t } = useLanguage();
  const text = getTranslation(t, i18nKey, fallback);
  const Component = as || 'span';
  
  return React.createElement(Component, { className }, text);
};
