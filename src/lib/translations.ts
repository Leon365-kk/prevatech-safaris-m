export type Language = 'en' | 'fr' | 'es' | 'de';

export interface Translation {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translation = {
  // Navigation
  'nav.home': {
    en: 'Home',
    fr: 'Accueil',
    es: 'Inicio',
    de: 'Startseite'
  },
  'nav.airport': {
    en: 'Airport Transfers',
    fr: 'Transfers Aéroport',
    es: 'Traslados Aeropuerto',
    de: 'Flughafen-Transfers'
  },
  'nav.safaris': {
    en: 'Safaris',
    fr: 'Safaris',
    es: 'Safaris',
    de: 'Safaris'
  },
  'nav.dayTours': {
    en: 'Day Tours',
    fr: 'Excursions Journée',
    es: 'Tours del Día',
    de: 'Tagesausflüge'
  },
  'nav.pricing': {
    en: 'Pricing',
    fr: 'Tarifs',
    es: 'Precios',
    de: 'Preise'
  },
  'nav.blog': {
    en: 'Blog',
    fr: 'Blog',
    es: 'Blog',
    de: 'Blog'
  },
  'nav.book': {
    en: 'Book Online',
    fr: 'Réservation en Ligne',
    es: 'Reserva en Línea',
    de: 'Online Buchen'
  },
  'nav.faq': {
    en: 'FAQ',
    fr: 'FAQ',
    es: 'FAQ',
    de: 'FAQ'
  },
  'nav.planTrip': {
    en: 'Plan Trip',
    fr: 'Planifier Voyage',
    es: 'Planificar Viaje',
    de: 'Reise Planen'
  },
  'nav.support': {
    en: 'Support',
    fr: 'Support',
    es: 'Soporte',
    de: 'Support'
  },

  // Common
  'common.learnMore': {
    en: 'Learn More',
    fr: 'En Savoir Plus',
    es: 'Saber Más',
    de: 'Mehr Erfahren'
  },
  'common.bookNow': {
    en: 'Book Now',
    fr: 'Réserver Maintenant',
    es: 'Reservar Ahora',
    de: 'Jetzt Buchen'
  },
  'common.contactUs': {
    en: 'Contact Us',
    fr: 'Contactez-nous',
    es: 'Contáctanos',
    de: 'Kontaktieren Sie Uns'
  },
  'common.price': {
    en: 'Price',
    fr: 'Prix',
    es: 'Precio',
    de: 'Preis'
  },
  'common.duration': {
    en: 'Duration',
    fr: 'Durée',
    es: 'Duración',
    de: 'Dauer'
  },
  'common.location': {
    en: 'Location',
    fr: 'Lieu',
    es: 'Ubicación',
    de: 'Standort'
  },
  'common.rating': {
    en: 'Rating',
    fr: 'Évaluation',
    es: 'Calificación',
    de: 'Bewertung'
  },
  'common.getQuote': {
    en: 'Get a Quote',
    fr: 'Obtenir un Devis',
    es: 'Obtener Cotización',
    de: 'Angebot Erhalten'
  },
  'common.checkAvailability': {
    en: 'Check Availability',
    fr: 'Vérifier Disponibilité',
    es: 'Ver Disponibilidad',
    de: 'Verfügbarkeit Prüfen'
  },
  'common.talkToExpert': {
    en: 'Talk to Safari Expert',
    fr: 'Parler à un Expert Safari',
    es: 'Hablar con Experto Safari',
    de: 'Mit Safari-Experten Sprechen'
  },
  'common.downloadGuide': {
    en: 'Download Free Guide',
    fr: 'Télécharger Guide Gratuit',
    es: 'Descargar Guía Gratuita',
    de: 'Kostenlosen Guide Herunterladen'
  },
  'common.viewDetails': {
    en: 'View Details',
    fr: 'Voir Détails',
    es: 'Ver Detalles',
    de: 'Details Anzeigen'
  },
  'common.readMore': {
    en: 'Read More',
    fr: 'Lire Plus',
    es: 'Leer Más',
    de: 'Mehr Lesen'
  },
  'common.explore': {
    en: 'Explore',
    fr: 'Explorer',
    es: 'Explorar',
    de: 'Erkunden'
  },

  // Forms
  'forms.fullName': {
    en: 'Full Name',
    fr: 'Nom Complet',
    es: 'Nombre Completo',
    de: 'Vollständiger Name'
  },
  'forms.emailAddress': {
    en: 'Email Address',
    fr: 'Adresse Email',
    es: 'Correo Electrónico',
    de: 'E-Mail-Adresse'
  },
  'forms.phoneNumber': {
    en: 'Phone Number',
    fr: 'Numéro de Téléphone',
    es: 'Número de Teléfono',
    de: 'Telefonnummer'
  },
  'forms.numberOfGuests': {
    en: 'Number of Guests',
    fr: 'Nombre d\'Invités',
    es: 'Número de Invitados',
    de: 'Anzahl der Gäste'
  },
  'forms.preferredDate': {
    en: 'Preferred Date',
    fr: 'Date Préférée',
    es: 'Fecha Preferida',
    de: 'Bevorzugtes Datum'
  },
  'forms.destination': {
    en: 'Destination',
    fr: 'Destination',
    es: 'Destino',
    de: 'Ziel'
  },
  'forms.message': {
    en: 'Message',
    fr: 'Message',
    es: 'Mensaje',
    de: 'Nachricht'
  },
  'forms.submit': {
    en: 'Submit',
    fr: 'Soumettre',
    es: 'Enviar',
    de: 'Senden'
  },
  'forms.required': {
    en: 'Required',
    fr: 'Obligatoire',
    es: 'Requerido',
    de: 'Erforderlich'
  },
  'forms.optional': {
    en: 'Optional',
    fr: 'Optionnel',
    es: 'Opcional',
    de: 'Optional'
  },

  // Home Page
  'home.hero.title': {
    en: 'Prevatech Safaris',
    fr: 'Prevatech Safaris',
    es: 'Prevatech Safaris',
    de: 'Prevatech Safaris'
  },
  'home.hero.subtitle': {
    en: 'Experience the magic of Kenya\'s wildlife with our expertly guided safari tours',
    fr: 'Découvrez la magie de la faune kényane avec nos visites guidées par des experts',
    es: 'Experimenta la magia de la vida silvestre de Kenia con nuestros tours guiados por expertos',
    de: 'Erleben Sie die Magie des kenianischen Wildlebens mit unseren fachkundig geführten Safari-Touren'
  },
  'home.hero.cta': {
    en: 'Explore Our Safaris',
    fr: 'Explorez Nos Safaris',
    es: 'Explore Nuestros Safaris',
    de: 'Entdecken Sie Unsere Safaris'
  },
  'home.about.title': {
    en: 'Welcome to Prevatech Safaris',
    fr: 'Bienvenue chez Prevatech Safaris',
    es: 'Bienvenido a Prevatech Safaris',
    de: 'Willkommen bei Prevatech Safaris'
  },
  'home.about.description': {
    en: 'Your trusted partner for safari experiences in Kenya',
    fr: 'Votre partenaire de confiance pour les expériences de safari au Kenya',
    es: 'Su socio de confianza para experiencias de safari en Kenia',
    de: 'Ihr vertrauenswürdiger Partner für Safari-Erlebnisse in Kenia'
  },

  // About Section
  'about.description1': {
    en: 'Prevatech Safaris is a premier travel and tour operator based in Nairobi, Kenya. We specialize in tailor-made safaris, airport transfers, and excursions designed to showcase the beauty, culture, and wildlife of Kenya. Whether you\'re here for business or leisure, we make your travel experience safe, comfortable, and memorable.',
    fr: 'Prevatech Safaris est un opérateur de voyage et de tourisme de premier plan basé à Nairobi, Kenya. Nous nous spécialisons dans les safaris sur mesure, les transferts aéroportuaires et les excursions conçues pour présenter la beauté, la culture et la faune du Kenya. Que vous soyez ici pour affaires ou loisirs, nous rendons votre expérience de voyage sûre, confortable et mémorable.',
    es: 'Prevatech Safaris es un operador de viajes y turismo de primer nivel con sede en Nairobi, Kenia. Nos especializamos en safaris a medida, transferencias de aeropuerto y excursiones diseñadas para mostrar la belleza, cultura y vida silvestre de Kenia. Ya esté aquí por negocios o placer, hacemos que su experiencia de viaje sea segura, cómoda y memorable.',
    de: 'Prevatech Safaris ist ein führender Reise- und Tourveranstalter mit Sitz in Nairobi, Kenia. Wir sind auf maßgeschneiderte Safaris, Flughafentransfers und Ausflüge spezialisiert, die darauf ausgelegt sind, die Schönheit, Kultur und das Wildleben Kenias zu zeigen. Ob Sie hier geschäftlich oder privat zu Gast sind, wir machen Ihr Reiseerlebnis sicher, komfortabel und unvergesslich.'
  },
  'about.description2': {
    en: 'With years of experience and a deep passion for African wildlife, our team is dedicated to creating authentic safari experiences that connect you with nature while respecting and preserving Kenya\'s natural heritage.',
    fr: 'Avec des années d\'expérience et une profonde passion pour la faune africaine, notre équipe est dédiée à créer des expériences de safari authentiques qui vous connectent à la nature tout en respectant et préservant le patrimoine naturel du Kenya.',
    es: 'Con años de experiencia y una profunda pasión por la vida silvestre africana, nuestro equipo está dedicado a crear experiencias de safari auténticas que lo conectan con la naturaleza mientras respeta y preserva el patrimonio natural de Kenia.',
    de: 'Mit jahrelanger Erfahrung und einer tiefen Leidenschaft für afrikanisches Wildleben ist unser Team darauf spezialisiert, authentische Safari-Erlebnisse zu schaffen, die Sie mit der Natur verbinden und gleichzeitig das natürliche Erbe Kenias respektieren und bewahren.'
  },

  // Services Section
  'services.title': {
    en: 'Our Key Services',
    fr: 'Nos Services Principaux',
    es: 'Nuestros Servicios Clave',
    de: 'Unsere Wichtigsten Dienstleistungen'
  },
  'services.subtitle': {
    en: 'Comprehensive travel solutions for every adventure',
    fr: 'Solutions de voyage complètes pour chaque aventure',
    es: 'Soluciones de viaje completas para cada aventura',
    de: 'Umfassende Reiselösungen für jedes Abenteuer'
  },
  'services.airport.description': {
    en: 'Reliable pick-up and drop-off from all major airports. Professional drivers ensure safe, comfortable, and punctual rides.',
    fr: 'Prise en charge et dépose fiables de tous les grands aéroports. Les chauffeurs professionnels assurent des trajets sûrs, confortables et ponctuels.',
    es: 'Recogida y entrega confiables de todos los aeropuertos principales. Los conductores profesionales garantizan viajes seguros, cómodos y puntuales.',
    de: 'Zuverlässige Abholung und Bringung von allen wichtigen Flughäfen. Professionelle Fahrer gewährleisten sichere, komfortable und pünktliche Fahrten.'
  },
  'services.safaris.description': {
    en: 'Customizable multi-day adventures across Kenya\'s top destinations. Experience the Big Five and the Great Migration.',
    fr: 'Aventures de plusieurs jours personnalisables à travers les meilleures destinations du Kenya. Découvrez les Big Five et la Grande Migration.',
    es: 'Aventuras personalizables de varios días a través de los mejores destinos de Kenia. Experimente los Big Five y la Gran Migración.',
    de: 'Anpassbare mehrtägige Abenteuer durch Kenias Top-Ziele. Erleben Sie die Big Five und die Große Migration.'
  },
  'services.dayTours.description': {
    en: 'Perfect short getaways for solo travelers, couples, and groups. Explore Nairobi National Park, Giraffe Centre, and more.',
    fr: 'Courtes escapades parfaites pour les voyageurs seuls, les couples et les groupes. Explorez le Parc National de Nairobi, le Centre des Girafes et plus.',
    es: 'Escapadas cortas perfectas para viajeros solitarios, parejas y grupos. Explore el Parque Nacional de Nairobi, el Centro de Jirafas y más.',
    de: 'Perfekte Kurzurlaube für Einzelreisende, Paare und Gruppen. Erkunden Sie den Nairobi-Nationalpark, das Giraffen-Zentrum und mehr.'
  },
  'safaris.title': {
    en: 'Our Safari Packages',
    fr: 'Nos Offres de Safari',
    es: 'Nuestros Paquetes de Safari',
    de: 'Unsere Safari-Pakete'
  },
  'safaris.subtitle': {
    en: 'Choose from our carefully crafted safari experiences',
    fr: 'Choisissez parmi nos expériences de safari soigneusement conçues',
    es: 'Elija entre nuestras experiencias de safari cuidadosamente diseñadas',
    de: 'Wählen Sie aus unseren sorgfältig gestalteten Safari-Erlebnissen'
  },
  'safaris.viewPackage': {
    en: 'View Package',
    fr: 'Voir le Package',
    es: 'Ver Paquete',
    de: 'Paket Anzeigen'
  },
  'safaris.filters.all': {
    en: 'All Safaris',
    fr: 'Tous les Safaris',
    es: 'Todos los Safaris',
    de: 'Alle Safaris'
  },
  'safaris.filters.budget': {
    en: 'Budget',
    fr: 'Budget',
    es: 'Económico',
    de: 'Budget'
  },
  'safaris.filters.midrange': {
    en: 'Mid-Range',
    fr: 'Moyenne Gamme',
    es: 'Gama Media',
    de: 'Mittelklasse'
  },
  'safaris.filters.luxury': {
    en: 'Luxury',
    fr: 'Luxe',
    es: 'Lujo',
    de: 'Luxus'
  },

  // Booking Page
  'booking.title': {
    en: 'Book Your Safari Adventure',
    fr: 'Réservez Votre Aventure Safari',
    es: 'Reserva Tu Aventura Safari',
    de: 'Buchen Sie Ihr Safari-Abenteuer'
  },
  'booking.personalInfo': {
    en: 'Personal Information',
    fr: 'Informations Personnelles',
    es: 'Información Personal',
    de: 'Persönliche Informationen'
  },
  'booking.tripDetails': {
    en: 'Trip Details',
    fr: 'Détails du Voyage',
    es: 'Detalles del Viaje',
    de: 'Reisedetails'
  },
  'booking.serviceType': {
    en: 'Service Type',
    fr: 'Type de Service',
    es: 'Tipo de Servicio',
    de: 'Servicetyp'
  },
  'booking.guests': {
    en: 'Number of Guests',
    fr: 'Nombre d\'Invités',
    es: 'Número de Invitados',
    de: 'Anzahl der Gäste'
  },
  'booking.destination': {
    en: 'Preferred Destination',
    fr: 'Destination Préférée',
    es: 'Destino Preferido',
    de: 'Bevorzugtes Ziel'
  },
  'booking.date': {
    en: 'Preferred Date',
    fr: 'Date Préférée',
    es: 'Fecha Preferida',
    de: 'Bevorzugtes Datum'
  },
  'booking.message': {
    en: 'Additional Information',
    fr: 'Informations Supplémentaires',
    es: 'Información Adicional',
    de: 'Zusätzliche Informationen'
  },
  'booking.submit': {
    en: 'Submit Booking Request',
    fr: 'Soumettre la Demande de Réservation',
    es: 'Enviar Solicitud de Reserva',
    de: 'Buchungsanfrage Senden'
  },

  // Plan My Trip
  'planTrip.title': {
    en: 'Plan Your Dream Safari',
    fr: 'Planifiez Votre Safari de Rêve',
    es: 'Planifica Tu Safari Soñado',
    de: 'Planen Sie Ihren Traum-Safari'
  },
  'planTrip.subtitle': {
    en: 'Answer a few questions and we\'ll create your perfect African adventure',
    fr: 'Répondez à quelques questions et nous créerons votre aventure africaine parfaite',
    es: 'Responda algunas preguntas y crearemos su aventura africana perfecta',
    de: 'Beantworten Sie ein paar Fragen und wir schaffen Ihr perfektes afrikanisches Abenteuer'
  },
  'planTrip.steps.travelers': {
    en: 'Travelers & Dates',
    fr: 'Voyageurs & Dates',
    es: 'Viajeros & Fechas',
    de: 'Reisende & Termine'
  },
  'planTrip.steps.budget': {
    en: 'Budget & Style',
    fr: 'Budget & Style',
    es: 'Presupuesto & Estilo',
    de: 'Budget & Stil'
  },
  'planTrip.steps.interests': {
    en: 'Interests',
    fr: 'Intérêts',
    es: 'Intereses',
    de: 'Interessen'
  },
  'planTrip.steps.special': {
    en: 'Special Needs',
    fr: 'Besoins Spéciaux',
    es: 'Necesidades Especiales',
    de: 'Besondere Bedürfnisse'
  },
  'planTrip.steps.contact': {
    en: 'Contact Information',
    fr: 'Informations de Contact',
    es: 'Información de Contacto',
    de: 'Kontaktinformationen'
  },

  // FAQ
  'faq.title': {
    en: 'Frequently Asked Questions',
    fr: 'Questions Fréquemment Posées',
    es: 'Preguntas Frecuentes',
    de: 'Häufig Gestellte Fragen'
  },
  'faq.subtitle': {
    en: 'Everything you need to know about booking your safari adventure',
    fr: 'Tout ce que vous devez savoir sur la réservation de votre aventure safari',
    es: 'Todo lo que necesita saber sobre reservar su aventura safari',
    de: 'Alles, was Sie über die Buchung Ihres Safari-Abenteuers wissen müssen'
  },
  'faq.categories.payments': {
    en: 'Payments & Pricing',
    fr: 'Paiements & Tarifs',
    es: 'Pagos & Precios',
    de: 'Zahlungen & Preise'
  },
  'faq.categories.cancellation': {
    en: 'Cancellation Policy',
    fr: 'Politique d\'Annulation',
    es: 'Política de Cancelación',
    de: 'Stornierungsrichtlinie'
  },
  'faq.categories.family': {
    en: 'Kids & Family',
    fr: 'Enfants & Famille',
    es: 'Niños & Familia',
    de: 'Kinder & Familie'
  },
  'faq.categories.accessibility': {
    en: 'Accessibility',
    fr: 'Accessibilité',
    es: 'Accesibilidad',
    de: 'Barrierefreiheit'
  },
  'faq.categories.dietary': {
    en: 'Dietary Requirements',
    fr: 'Besoins Alimentaires',
    es: 'Requisitos Alimentarios',
    de: 'Diätetische Anforderungen'
  },

  // Contact
  'contact.title': {
    en: 'Get in Touch',
    fr: 'Contactez-nous',
    es: 'Contáctanos',
    de: 'Kontaktieren Sie Uns'
  },
  'contact.subtitle': {
    en: 'We\'re here to help you plan your perfect safari adventure',
    fr: 'Nous sommes là pour vous aider à planifier votre aventure safari parfaite',
    es: 'Estamos aquí para ayudarte a planificar tu aventura safari perfecta',
    de: 'Wir sind hier, um Ihnen bei der Planung Ihres perfekten Safari-Abenteuers zu helfen'
  },
  'contact.phone': {
    en: 'Phone',
    fr: 'Téléphone',
    es: 'Teléfono',
    de: 'Telefon'
  },
  'contact.email': {
    en: 'Email',
    fr: 'Email',
    es: 'Email',
    de: 'E-Mail'
  },
  'contact.whatsapp': {
    en: 'WhatsApp',
    fr: 'WhatsApp',
    es: 'WhatsApp',
    de: 'WhatsApp'
  },

  // Footer
  'footer.about': {
    en: 'About Prevatech Safaris',
    fr: 'À Propos de Prevatech Safaris',
    es: 'Acerca de Prevatech Safaris',
    de: 'Über Prevatech Safaris'
  },
  'footer.description': {
    en: 'Your trusted partner for safari experiences in Kenya',
    fr: 'Votre partenaire de confiance pour les expériences de safari au Kenya',
    es: 'Su socio de confianza para experiencias de safari en Kenia',
    de: 'Ihr vertrauenswürdiger Partner für Safari-Erlebnisse in Kenia'
  },
  'footer.quickLinks': {
    en: 'Quick Links',
    fr: 'Liens Rapides',
    es: 'Enlaces Rápidos',
    de: 'Schnelllinks'
  },
  'footer.contact': {
    en: 'Contact Info',
    fr: 'Infos Contact',
    es: 'Información de Contacto',
    de: 'Kontaktinformationen'
  },
  'footer.followUs': {
    en: 'Follow Us',
    fr: 'Suivez-nous',
    es: 'Síguenos',
    de: 'Folgen Sie Uns'
  },
  'footer.allRights': {
    en: 'All rights reserved.',
    fr: 'Tous droits réservés.',
    es: 'Todos los derechos reservados.',
    de: 'Alle Rechte vorbehalten.'
  },

  // CTA Components
  'cta.getFreeQuote': {
    en: 'Get a Free Quote',
    fr: 'Obtenir un Devis Gratuit',
    es: 'Obtener Cotización Gratuita',
    de: 'Kostenloses Angebot Erhalten'
  },
  'cta.receiveQuote': {
    en: 'Receive a personalized safari quote within 24 hours',
    fr: 'Recevez un devis de safari personnalisé dans 24 heures',
    es: 'Reciba una cotización de safari personalizada en 24 horas',
    de: 'Erhalten Sie ein personalisiertes Safari-Angebot innerhalb von 24 Stunden'
  },
  'cta.noObligation': {
    en: 'No obligation',
    fr: 'Aucune obligation',
    es: 'Sin compromiso',
    de: 'Keine Verpflichtung'
  },
  'cta.expertConsultation': {
    en: 'Expert consultation',
    fr: 'Consultation d\'expert',
    es: 'Consulta de experto',
    de: 'Expertenberatung'
  },
  'cta.bestPrice': {
    en: 'Best price guarantee',
    fr: 'Garantie meilleur prix',
    es: 'Garantía mejor precio',
    de: 'Bestpreisgarantie'
  },
  'cta.popular': {
    en: 'Popular',
    fr: 'Populaire',
    es: 'Popular',
    de: 'Beliebt'
  },
  'cta.talkToSafariExpert': {
    en: 'Talk to Safari Expert',
    fr: 'Parler à un Expert Safari',
    es: 'Hablar con Experto Safari',
    de: 'Mit Safari-Experten Sprechen'
  },
  'cta.personalizedRecommendations': {
    en: 'Get personalized recommendations from our experienced consultants',
    fr: 'Obtenez des recommandations personnalisées de nos consultants expérimentés',
    es: 'Obtenga recomendaciones personalizadas de nuestros consultores experimentados',
    de: 'Erhalten Sie personalisierte Empfehlungen von unseren erfahrenen Beratern'
  },
  'cta.callNow': {
    en: 'Call Now',
    fr: 'Appeler Maintenant',
    es: 'Llamar Ahora',
    de: 'Jetzt Anrufen'
  },
  'cta.instantAnswers': {
    en: 'Instant answers',
    fr: 'Réponses instantanées',
    es: 'Respuestas instantáneas',
    de: 'Sofortige Antworten'
  },
  'cta.expertAdvice': {
    en: 'Expert advice',
    fr: 'Conseils d\'experts',
    es: 'Consejos de expertos',
    de: 'Expertenrat'
  },
  'cta.support247': {
    en: '24/7 support',
    fr: 'Support 24/7',
    es: 'Soporte 24/7',
    de: '24/7 Support'
  },
  'cta.checkAvailability': {
    en: 'Check Availability',
    fr: 'Vérifier Disponibilité',
    es: 'Ver Disponibilidad',
    de: 'Verfügbarkeit Prüfen'
  },
  'cta.realTimeAvailability': {
    en: 'See real-time availability for your preferred travel dates',
    fr: 'Voir la disponibilité en temps réel pour vos dates de voyage préférées',
    es: 'Ver disponibilidad en tiempo real para sus fechas de viaje preferidas',
    de: 'Echtzeitverfügbarkeit für Ihre bevorzugten Reisedaten einsehen'
  },
  'cta.checkDates': {
    en: 'Check Dates',
    fr: 'Vérifier les Dates',
    es: 'Ver Fechas',
    de: 'Termine Prüfen'
  },
  'cta.liveCalendar': {
    en: 'Live calendar',
    fr: 'Calendrier en direct',
    es: 'Calendario en vivo',
    de: 'Live-Kalender'
  },
  'cta.instantConfirmation': {
    en: 'Instant confirmation',
    fr: 'Confirmation instantanée',
    es: 'Confirmación instantánea',
    de: 'Sofortige Bestätigung'
  },
  'cta.flexibleBooking': {
    en: 'Flexible booking',
    fr: 'Réservation flexible',
    es: 'Reserva flexible',
    de: 'Flexible Buchung'
  },
  'cta.startPlanning': {
    en: 'Start Planning',
    fr: 'Commencer la Planification',
    es: 'Comenzar Planificación',
    de: 'Mit der Planung Beginnen'
  },
  'cta.needHelp': {
    en: 'Need Help Deciding?',
    fr: 'Besoin d\'Aide pour Décider?',
    es: '¿Necesita Ayuda para Decidir?',
    de: 'Hilfe bei der Entscheidung?'
  },
  'cta.useSmartPlanner': {
    en: 'Use our smart trip planner to create your perfect safari',
    fr: 'Utilisez notre planificateur de voyage intelligent pour créer votre safari parfait',
    es: 'Use nuestro planificador de viajes inteligente para crear su safari perfecto',
    de: 'Nutzen Sie unseren intelligenten Reiseplaner, um Ihren perfekten Safari zu erstellen'
  },
  'cta.fiveStepProcess': {
    en: '5-step process',
    fr: 'Processus en 5 étapes',
    es: 'Proceso de 5 pasos',
    de: '5-Schritte-Prozess'
  },
  'cta.personalizedRecommendations2': {
    en: 'Personalized recommendations',
    fr: 'Recommandations personnalisées',
    es: 'Recomendaciones personalizadas',
    de: 'Personalisierte Empfehlungen'
  },
  'cta.expertReview': {
    en: 'Expert review',
    fr: 'Examen d\'expert',
    es: 'Revisión de experto',
    de: 'Expertenprüfung'
  },
  'cta.readyExperts': {
    en: 'Our safari experts are ready to help you choose the perfect adventure',
    fr: 'Nos experts safari sont prêts à vous aider à choisir l\'aventure parfaite',
    es: 'Nuestros expertos safari están listos para ayudarle a elegir la aventura perfecta',
    de: 'Unsere Safari-Experten sind bereit, Ihnen bei der Wahl des perfekten Abenteuers zu helfen'
  },
  'cta.freeConsultation': {
    en: 'Free consultation',
    fr: 'Consultation gratuite',
    es: 'Consulta gratuita',
    de: 'Kostenlose Beratung'
  },
  'cta.instantAnswers2': {
    en: 'Instant answers',
    fr: 'Réponses instantanées',
    es: 'Respuestas instantáneas',
    de: 'Sofortige Antworten'
  },
  'cta.readyAdventure': {
    en: 'Ready for Your African Adventure?',
    fr: 'Prêt pour Votre Aventure Africaine?',
    es: '¿Listo para Tu Aventura Africana?',
    de: 'Bereit für Ihr Afrika-Abenteuer?'
  },
  'cta.joinThousands': {
    en: 'Join thousands of satisfied travelers who have experienced the magic of Kenya with us',
    fr: 'Rejoignez des milliers de voyageurs satisfaits qui ont expérimenté la magie du Kenya avec nous',
    es: 'Únase a miles de viajeros satisfechos que han experimentado la magia de Kenia con nosotros',
    de: 'Schließen Sie sich Tausenden zufriedener Reisender an, die mit uns die Magie Kenias erlebt haben'
  },
  'cta.happyTravelers': {
    en: 'Happy Travelers',
    fr: 'Voyageurs Satisfaits',
    es: 'Viajeros Felices',
    de: 'Zufriedene Reisende'
  },
  'cta.averageRating': {
    en: 'Average Rating',
    fr: 'Note Moyenne',
    es: 'Calificación Promedio',
    de: 'Durchschnittliche Bewertung'
  },
  'cta.yearsExperience': {
    en: 'Years Experience',
    fr: 'Années d\'Expérience',
    es: 'Años de Experiencia',
    de: 'Jahre Erfahrung'
  },
  'cta.support': {
    en: 'Support',
    fr: 'Support',
    es: 'Soporte',
    de: 'Support'
  },

  // Exit Intent Modal
  'exitIntent.title': {
    en: 'Before You Go...',
    fr: 'Avant de Partir...',
    es: 'Antes de Irte...',
    de: 'Bevor Sie Gehen...'
  },
  'exitIntent.subtitle': {
    en: 'Get our FREE 7-Day Kenya Safari Planner',
    fr: 'Obtenez notre GRATUIT Planificateur de Safari Kenya de 7 Jours',
    es: 'Obtenga nuestro GRATIS Planificador de Safari Kenya de 7 Días',
    de: 'Erhalten Sie unseren KOSTENLOSEN 7-Tage Kenya Safari Planer'
  },
  'exitIntent.success': {
    en: '🎉 Your Guide is Ready!',
    fr: '🎉 Votre Guide est Prêt!',
    es: '🎉 ¡Tu Guía Está Lista!',
    de: '🎉 Ihr Guide ist Fertig!'
  },
  'exitIntent.checkEmail': {
    en: 'Check your email for your free guide!',
    fr: 'Vérifiez votre email pour votre guide gratuit!',
    es: '¡Revisa tu correo para tu guía gratuita!',
    de: 'Überprüfen Sie Ihre E-Mail für Ihren kostenlosen Guide!'
  },
  'exitIntent.guideIncludes': {
    en: 'Your Free Guide Includes:',
    fr: 'Votre Guide Gratuit Inclut:',
    es: 'Su Guía Gratuita Incluye:',
    de: 'Ihr Kostenloser Guide Enthält:'
  },
  'exitIntent.dayByDay': {
    en: 'Day-by-day itinerary templates',
    fr: 'Modèles d\'itinéraire jour par jour',
    es: 'Plantillas de itinerario día por día',
    de: 'Tagesplan-Vorlagen'
  },
  'exitIntent.topDestinations': {
    en: 'Top destinations & hidden gems',
    fr: 'Top destinations & pépites cachées',
    es: 'Principales destinos y joyas ocultas',
    de: 'Top-Ziele & versteckte Juwelen'
  },
  'exitIntent.groupRecommendations': {
    en: 'Group size recommendations',
    fr: 'Recommandations de taille de groupe',
    es: 'Recomendaciones de tamaño de grupo',
    de: 'Gruppengrößen-Empfehlungen'
  },
  'exitIntent.bestTimes': {
    en: 'Best times to visit each park',
    fr: 'Meilleurs moments pour visiter chaque parc',
    es: 'Mejores momentos para visitar cada parque',
    de: 'Beste Zeiten für den Besuch jedes Parks'
  },
  'exitIntent.limitedTime': {
    en: 'Limited Time',
    fr: 'Temps Limité',
    es: 'Tiempo Limitado',
    de: 'Begrenzte Zeit'
  },
  'exitIntent.usuallyPrice': {
    en: 'Usually $29 - FREE today only',
    fr: 'Habituellement 29€ - GRATUIT aujourd\'hui seulement',
    es: 'Normalmente $29 - GRATIS solo hoy',
    de: 'Normalerweise 29€ - KOSTENLOS nur heute'
  },
  'exitIntent.sending': {
    en: 'Sending...',
    fr: 'Envoi en cours...',
    es: 'Enviando...',
    de: 'Wird gesendet...'
  },
  'exitIntent.getMyGuide': {
    en: 'Get My Free Guide',
    fr: 'Obtenir Mon Guide Gratuit',
    es: 'Obtener Mi Guía Gratuita',
    de: 'Meinen Kostenlosen Guide Erhalten'
  },
  'exitIntent.noSpam': {
    en: 'No spam ever. Unsubscribe anytime.',
    fr: 'Jamais de spam. Se désabonner à tout moment.',
    es: 'Nunca spam. Cancelar suscripción en cualquier momento.',
    de: 'Kein Spam. Jederzeit abbestellbar.'
  },

  // Safari Recommendations
  'recommendations.title': {
    en: 'Personalized Safari Recommendations',
    fr: 'Recommandations de Safari Personnalisées',
    es: 'Recomendaciones de Safari Personalizadas',
    de: 'Personalisierte Safari-Empfehlungen'
  },
  'recommendations.subtitle': {
    en: 'Tell us how much time you have, and we\'ll show you the perfect safari experiences for your schedule',
    fr: 'Dites-nous combien de temps vous avez, et nous vous montrerons les expériences de safari parfaites pour votre emploi du temps',
    es: 'Dinos cuánto tiempo tienes y te mostraremos las experiencias de safari perfectas para tu horario',
    de: 'Sagen Sie uns, wie viel Zeit Sie haben, und wir zeigen Ihnen die perfekten Safari-Erlebnisse für Ihren Zeitplan'
  },
  'recommendations.threeDays': {
    en: '3 Days',
    fr: '3 Jours',
    es: '3 Días',
    de: '3 Tage'
  },
  'recommendations.fiveDays': {
    en: '5 Days',
    fr: '5 Jours',
    es: '5 Días',
    de: '5 Tage'
  },
  'recommendations.sevenPlus': {
    en: '7+ Days',
    fr: '7+ Jours',
    es: '7+ Días',
    de: '7+ Tage'
  },
  'recommendations.quickGetaways': {
    en: 'Quick getaways',
    fr: 'Escapes rapides',
    es: 'Escapadas rápidas',
    de: 'Schnelle Ausflüge'
  },
  'recommendations.weekAdventures': {
    en: 'Week adventures',
    fr: 'Aventures de semaine',
    es: 'Aventuras de semana',
    de: 'Wochenabenteuer'
  },
  'recommendations.extendedJourneys': {
    en: 'Extended journeys',
    fr: 'Voyages prolongés',
    es: 'Viajes extendidos',
    de: 'Erweiterte Reisen'
  }
};

export const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' }
];
