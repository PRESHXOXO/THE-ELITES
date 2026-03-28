export type HotelCategory = 'US' | 'International' | 'Michelin Key';
export type PropertyType = 'Penthouse' | 'Villa' | 'Estate';
export type DiningCategory = 'Michelin 3-Star' | 'Michelin 2-Star' | 'Michelin 1-Star' | 'Fine Dining';
export type ShoppingCategory = 'Flagship Boutique' | 'Shopping Center' | 'Department Store' | 'Private Atelier';

export interface Hotel {
  id: string;
  name: string;
  location: string;
  country: string;
  category: HotelCategory;
  stars: number;
  michelinKeys?: number;
  image: string;
  tagline: string;
  pricePerNight: string;
  highlights: string[];
  suites: number;
  acres?: number;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  country: string;
  type: PropertyType;
  image: string;
  tagline: string;
  pricePerNight: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  highlights: string[];
  view: string;
}

export interface Restaurant {
  id: string;
  name: string;
  location: string;
  country: string;
  chef: string;
  category: DiningCategory;
  cuisine: string;
  image: string;
  tagline: string;
  pricePerCover: string;
  highlights: string[];
  seats: number;
  dresscode: string;
}

export interface ShopVenue {
  id: string;
  name: string;
  location: string;
  country: string;
  category: ShoppingCategory;
  brands?: string[];
  image: string;
  tagline: string;
  highlights: string[];
  byAppointment: boolean;
}

// ─── HOTELS ──────────────────────────────────────────────────────────────────

export const hotels: Hotel[] = [
  // US Hotels
  {
    id: 'aman-new-york',
    name: 'Aman New York',
    location: 'New York, NY',
    country: 'United States',
    category: 'US',
    stars: 6,
    michelinKeys: 2,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    tagline: 'Urban sanctuary within the Crown Building on Fifth Avenue',
    pricePerNight: '$3,200+',
    highlights: ['Private members-only floors', 'Two-story spa complex', 'Jazz Club', 'Indoor swimming pool'],
    suites: 83,
  },
  {
    id: 'rosewood-miramar',
    name: 'Rosewood Miramar Beach',
    location: 'Montecito, CA',
    country: 'United States',
    category: 'US',
    stars: 5,
    michelinKeys: 1,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
    tagline: 'Private beachfront estate on the California Riviera',
    pricePerNight: '$2,800+',
    highlights: ['Private beach access', 'Zero-edge ocean pool', 'Equestrian program', 'James Beard award-winning chef'],
    suites: 161,
    acres: 16,
  },
  {
    id: 'four-seasons-maui',
    name: 'Four Seasons Resort Maui',
    location: 'Wailea, HI',
    country: 'United States',
    category: 'US',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    tagline: 'Pacific sanctuary where volcanic cliffs meet turquoise waters',
    pricePerNight: '$1,900+',
    highlights: ['Private cabanas', 'Spago by Wolfgang Puck', 'Whale watching', 'Cultural activities'],
    suites: 380,
  },
  {
    id: 'the-mark-nyc',
    name: 'The Mark',
    location: 'New York, NY',
    country: 'United States',
    category: 'US',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    tagline: 'Art Deco masterpiece on Madison Avenue\'s museum mile',
    pricePerNight: '$1,600+',
    highlights: ['Jacques Garcia interiors', 'Jean-Georges Restaurant', 'Custom Rolls-Royce fleet', 'In-room DJ services'],
    suites: 150,
  },
  {
    id: 'peninsula-chicago',
    name: 'The Peninsula Chicago',
    location: 'Chicago, IL',
    country: 'United States',
    category: 'US',
    stars: 5,
    michelinKeys: 1,
    image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&q=80',
    tagline: 'Contemporary elegance commanding Michigan Avenue',
    pricePerNight: '$1,200+',
    highlights: ['Rooftop pool & terrace', 'Z Bar', 'Peninsula Spa', 'Terrace suites with skyline views'],
    suites: 339,
  },
  // International Hotels
  {
    id: 'burj-al-arab',
    name: 'Burj Al Arab Jumeirah',
    location: 'Dubai',
    country: 'UAE',
    category: 'International',
    stars: 6,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    tagline: 'The world\'s most iconic hotel on its own private island',
    pricePerNight: '$4,500+',
    highlights: ['Private butler service', 'Underwater restaurant Al Mahara', 'Gold-leaf interiors', 'Helicopter transfers'],
    suites: 202,
  },
  {
    id: 'ritz-paris',
    name: 'Hôtel Ritz Paris',
    location: 'Paris',
    country: 'France',
    category: 'International',
    stars: 5,
    michelinKeys: 3,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=800&q=80',
    tagline: 'A Place Vendôme legend where Coco Chanel lived for 34 years',
    pricePerNight: '$3,800+',
    highlights: ['Coco Chanel Suite', 'L\'Espadon restaurant', 'Ritz Bar', 'César Ritz Wellness'],
    suites: 142,
  },
  {
    id: 'amanjiwo',
    name: 'Amanjiwo',
    location: 'Borobudur, Java',
    country: 'Indonesia',
    category: 'International',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    tagline: 'Ancient temple views from a sanctuary of absolute serenity',
    pricePerNight: '$2,100+',
    highlights: ['Borobudur sunrise private tour', 'Open-air pavilion suites', 'Volcanic stone architecture', 'Traditional Javanese spa'],
    suites: 36,
    acres: 35,
  },
  {
    id: 'hotel-de-paris',
    name: 'Hôtel de Paris Monte-Carlo',
    location: 'Monte-Carlo',
    country: 'Monaco',
    category: 'International',
    stars: 5,
    michelinKeys: 2,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    tagline: 'Casino Square icon reigning over the Mediterranean principality',
    pricePerNight: '$5,200+',
    highlights: ['Louis XV by Alain Ducasse', 'Wine cellar from 1850', 'Grand Prix viewing suite', 'Private sea access'],
    suites: 209,
  },
  {
    id: 'singita-grumeti',
    name: 'Singita Grumeti Reserves',
    location: 'Serengeti',
    country: 'Tanzania',
    category: 'International',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
    tagline: 'A 350,000-acre private reserve on the Serengeti migration corridor',
    pricePerNight: '$3,600+',
    highlights: ['Private game drives', 'Migration river crossings', 'Antipoaching initiatives', 'Fine bush dining'],
    suites: 12,
    acres: 350000,
  },
  // Michelin Key Hotels
  {
    id: 'inn-at-little-washington',
    name: 'The Inn at Little Washington',
    location: 'Washington, VA',
    country: 'United States',
    category: 'Michelin Key',
    stars: 5,
    michelinKeys: 3,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    tagline: 'Patrick O\'Connell\'s legendary culinary inn in the Virginia countryside',
    pricePerNight: '$2,400+',
    highlights: ['3 Michelin Keys', '3-star Michelin restaurant', 'Theatrical dining rooms', 'Virginia farm-to-table'],
    suites: 18,
    acres: 7,
  },
  {
    id: 'le-manoir',
    name: 'Belmond Le Manoir aux Quat\'Saisons',
    location: 'Great Milton, Oxfordshire',
    country: 'United Kingdom',
    category: 'Michelin Key',
    stars: 5,
    michelinKeys: 2,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    tagline: 'Raymond Blanc\'s 2-Michelin Key Cotswolds retreat with kitchen gardens',
    pricePerNight: '$1,800+',
    highlights: ['2 Michelin Keys', '2-star Michelin restaurant', 'Organic kitchen gardens', 'Cookery school'],
    suites: 32,
    acres: 27,
  },
];

// ─── PROPERTIES ──────────────────────────────────────────────────────────────

export const properties: Property[] = [
  {
    id: 'one57-penthouse-nyc',
    name: 'One57 Sky Penthouse',
    location: 'Midtown Manhattan, New York',
    country: 'United States',
    type: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80',
    tagline: 'Pinnacle of Manhattan — full-floor penthouse above the clouds',
    pricePerNight: '$90,000+/night',
    bedrooms: 6,
    bathrooms: 7,
    sqft: 13554,
    highlights: ['360° Central Park & skyline views', 'Private elevator', 'Chef\'s kitchen', 'Wine cellar'],
    view: 'Central Park & Manhattan skyline',
  },
  {
    id: 'ultra-penthouse-monaco',
    name: 'Tour Odéon Sky Penthouse',
    location: 'Monte-Carlo',
    country: 'Monaco',
    type: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    tagline: 'Five-floor ultra-penthouse with a cantilevered pool over Monaco',
    pricePerNight: '$300,000+/week',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 35000,
    highlights: ['Cantilevered infinity pool', 'Home cinema', 'Private nightclub', 'Panoramic Mediterranean views'],
    view: 'Mediterranean Sea & Monte-Carlo harbor',
  },
  {
    id: 'villa-la-leopolda',
    name: 'Villa La Léopolda',
    location: 'Villefranche-sur-Mer, Côte d\'Azur',
    country: 'France',
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=800&q=80',
    tagline: 'The French Riviera\'s most coveted estate, once King Leopold\'s retreat',
    pricePerNight: '$750,000+/week',
    bedrooms: 14,
    bathrooms: 14,
    sqft: 80000,
    highlights: ['19 acres of formal gardens', 'Private vineyard', 'Tennis court', 'Historic château interiors'],
    view: 'Cap Ferrat & Mediterranean',
  },
  {
    id: 'royal-penthouse-president-wilson',
    name: 'Royal Penthouse — Hôtel Président Wilson',
    location: 'Geneva',
    country: 'Switzerland',
    type: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1594563703937-3a07d9e98b33?w=800&q=80',
    tagline: 'The world\'s largest hotel suite — 12 bedrooms above Lake Geneva',
    pricePerNight: '$80,000+/night',
    bedrooms: 12,
    bathrooms: 12,
    sqft: 18083,
    highlights: ['Private terrace with lake views', 'Billiard room', 'Baby grand piano', 'Exclusive personal chef'],
    view: 'Lake Geneva & Mont Blanc',
  },
  {
    id: 'villa-necker-island',
    name: 'Necker Island Villa Estate',
    location: 'British Virgin Islands',
    country: 'BVI',
    type: 'Estate',
    image: 'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?w=800&q=80',
    tagline: 'Richard Branson\'s private island — exclusively yours',
    pricePerNight: '$105,000+/night',
    bedrooms: 30,
    bathrooms: 30,
    sqft: 0,
    highlights: ['Entire private island', 'Up to 34 guests', 'Full staff of 100+', 'Water sports & spa'],
    view: 'Caribbean Sea 360°',
  },
  {
    id: 'floating-seahorse-dubai',
    name: 'The Floating Seahorse Villa',
    location: 'The World Islands, Dubai',
    country: 'UAE',
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    tagline: 'Semi-submersible floating villa with an underwater bedroom',
    pricePerNight: '$40,000+/night',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 4000,
    highlights: ['Underwater master bedroom', 'Direct coral access', 'Rooftop sun deck', 'Private chef & captain'],
    view: 'Underwater coral reef & Dubai skyline',
  },
  {
    id: 'aman-venice-palazzo',
    name: 'Aman Venice — Grand Palazzo Suite',
    location: 'Venice',
    country: 'Italy',
    type: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
    tagline: 'A 16th-century palazzo on the Grand Canal with frescoed ceilings',
    pricePerNight: '$25,000+/night',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 6500,
    highlights: ['Private Grand Canal terrace', 'Original Tiepolo frescoes', 'Private motorboat fleet', 'Walled garden'],
    view: 'Grand Canal & La Salute',
  },
  {
    id: 'sky-villa-bangkok',
    name: 'Park Hyatt Sky Villa',
    location: 'Bangkok',
    country: 'Thailand',
    type: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80',
    tagline: 'Duplex villa in the clouds with Bangkok\'s most breathtaking panorama',
    pricePerNight: '$18,000+/night',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 9000,
    highlights: ['Private rooftop pool', 'In-villa dining', 'Dedicated butler team', 'Skyscraper cityscape'],
    view: 'Bangkok city panorama',
  },
];

// ─── DINING ──────────────────────────────────────────────────────────────────

export const restaurants: Restaurant[] = [
  {
    id: 'sublimotion-ibiza',
    name: 'Sublimotion',
    location: 'Ibiza',
    country: 'Spain',
    chef: 'Paco Roncero',
    category: 'Fine Dining',
    cuisine: 'Avant-garde Gastronomy',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    tagline: 'The world\'s most expensive dining experience — a multi-sensory theatre',
    pricePerCover: '$2,000+',
    highlights: ['Only 12 guests per night', '20-course tasting journey', 'Full immersive technology show', 'Personal performance crew'],
    seats: 12,
    dresscode: 'Black Tie Optional',
  },
  {
    id: 'le-louis-xv',
    name: 'Le Louis XV — Alain Ducasse',
    location: 'Monte-Carlo',
    country: 'Monaco',
    chef: 'Alain Ducasse',
    category: 'Michelin 3-Star',
    cuisine: 'Mediterranean Haute Cuisine',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80',
    tagline: 'Three Michelin stars in the Belle Époque grandeur of the Hôtel de Paris',
    pricePerCover: '$600+',
    highlights: ['3 Michelin stars', 'Royal appointments', 'French Riviera produce', 'Historic 1987 cellar'],
    seats: 65,
    dresscode: 'Formal Attire Required',
  },
  {
    id: 'el-celler-de-can-roca',
    name: 'El Celler de Can Roca',
    location: 'Girona',
    country: 'Spain',
    chef: 'Joan, Josep & Jordi Roca',
    category: 'Michelin 3-Star',
    cuisine: 'Creative Catalan',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    tagline: 'Three brothers, three Michelin stars, one transcendent journey',
    pricePerCover: '$450+',
    highlights: ['3 Michelin stars', '11-month waiting list', 'Avant-garde Catalan cuisine', 'World\'s Best Restaurant 2013 & 2015'],
    seats: 45,
    dresscode: 'Smart Elegant',
  },
  {
    id: 'masa-nyc',
    name: 'Masa',
    location: 'New York, NY',
    country: 'United States',
    chef: 'Masayoshi Takayama',
    category: 'Michelin 3-Star',
    cuisine: 'Omakase Kappo',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80',
    tagline: 'America\'s most exclusive omakase — a $1,000 ritual at the hinoki counter',
    pricePerCover: '$1,000+',
    highlights: ['3 Michelin stars', '26-seat intimate counter', 'Wagyu, truffle, caviar omakase', 'Masa-aged soy sauce'],
    seats: 26,
    dresscode: 'Elegant Casual',
  },
  {
    id: 'ultraviolet-shanghai',
    name: 'UltraViolet by Paul Pairet',
    location: 'Shanghai',
    country: 'China',
    chef: 'Paul Pairet',
    category: 'Michelin 3-Star',
    cuisine: 'Psycho-Taste Gastronomy',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80',
    tagline: 'A secret one-table restaurant — 20 courses with full multi-sensory storytelling',
    pricePerCover: '$1,200+',
    highlights: ['3 Michelin stars', 'Only 10 seats nightly', 'Secret location revealed day-of', '20-course multimedia feast'],
    seats: 10,
    dresscode: 'Smart Chic',
  },
  {
    id: 'ikoyi-london',
    name: 'Ikoyi',
    location: 'London',
    country: 'United Kingdom',
    chef: 'Jeremy Chan',
    category: 'Michelin 2-Star',
    cuisine: 'West African Inspired',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    tagline: 'Two Michelin stars redefining luxury through West African flavours',
    pricePerCover: '$350+',
    highlights: ['2 Michelin stars', 'Seasonal tasting menu', 'Rare West African spices', 'World\'s 50 Best restaurant'],
    seats: 30,
    dresscode: 'Smart Casual',
  },
  {
    id: 'restaurant-guy-savoy',
    name: 'Restaurant Guy Savoy',
    location: 'Paris',
    country: 'France',
    chef: 'Guy Savoy',
    category: 'Michelin 3-Star',
    cuisine: 'French Grand Cuisine',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    tagline: 'Inside the Paris Mint, Guy Savoy\'s three-star masterclass in French cuisine',
    pricePerCover: '$500+',
    highlights: ['3 Michelin stars', 'Inside the historic Monnaie de Paris', 'Artichoke & black truffle soup', 'Art collection dining rooms'],
    seats: 70,
    dresscode: 'Formal',
  },
  {
    id: 'nobu-malibu',
    name: 'Nobu Malibu',
    location: 'Malibu, CA',
    country: 'United States',
    chef: 'Nobu Matsuhisa',
    category: 'Fine Dining',
    cuisine: 'Japanese-Peruvian',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    tagline: 'Pacific Coast masterpiece where A-list Hollywood meets Nobu',
    pricePerCover: '$300+',
    highlights: ['Oceanfront deck', 'Celebrity haunt', 'Black cod miso signature', 'Private dining pavilions'],
    seats: 120,
    dresscode: 'Resort Chic',
  },
];

// ─── SHOPPING ────────────────────────────────────────────────────────────────

export const shopVenues: ShopVenue[] = [
  {
    id: 'harrods-london',
    name: 'Harrods',
    location: 'Knightsbridge, London',
    country: 'United Kingdom',
    category: 'Department Store',
    brands: ['Chanel', 'Hermès', 'Louis Vuitton', 'Rolex', 'Graff'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    tagline: 'The world\'s most famous luxury department store since 1849',
    highlights: ['Personal shopping suite', 'Private VIP Rooms', 'Fine Dining Hall', 'Ultra High Jewellery Salon'],
    byAppointment: false,
  },
  {
    id: 'hermès-paris',
    name: 'Hermès Maison — Faubourg Saint-Honoré',
    location: '24 Faubourg Saint-Honoré, Paris',
    country: 'France',
    category: 'Flagship Boutique',
    brands: ['Hermès'],
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    tagline: 'The iconic address where every Hermès dream takes form',
    highlights: ['Six floors of curated collections', 'Bespoke leather workshop visits', 'Birkin & Kelly allocation', 'Commissioned saddle bar'],
    byAppointment: true,
  },
  {
    id: 'patek-philippe-geneva',
    name: 'Patek Philippe Salon — Geneva',
    location: 'Geneva',
    country: 'Switzerland',
    category: 'Flagship Boutique',
    brands: ['Patek Philippe'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    tagline: 'The cathedral of horology — Patek Philippe\'s Geneva flagship salon',
    highlights: ['Timepiece archives access', 'Bespoke commission program', 'Patek Museum private tours', 'White-glove service only'],
    byAppointment: true,
  },
  {
    id: 'via-montenapoleone-milan',
    name: 'Via Monte Napoleone District',
    location: 'Milan',
    country: 'Italy',
    category: 'Shopping Center',
    brands: ['Versace', 'Prada', 'Gucci', 'Valentino', 'Dolce & Gabbana', 'Brioni'],
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80',
    tagline: 'The golden mile of Italian fashion — the epicentre of la dolce vita luxury',
    highlights: ['Italian fashion houses', 'Private fashion week access', 'Bespoke tailoring ateliers', 'Aperitivo concierge service'],
    byAppointment: false,
  },
  {
    id: 'graff-london',
    name: 'Graff Diamonds — Bond Street',
    location: 'New Bond Street, London',
    country: 'United Kingdom',
    category: 'Private Atelier',
    brands: ['Graff'],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    tagline: 'Extraordinary diamonds, extraordinary jewels — Graff\'s Bond Street atelier',
    highlights: ['Private viewing by appointment', 'Bespoke commission service', 'Historic stones archive', 'Complimentary private transport'],
    byAppointment: true,
  },
  {
    id: 'rodeo-drive-beverly-hills',
    name: 'Rodeo Drive',
    location: 'Beverly Hills, CA',
    country: 'United States',
    category: 'Shopping Center',
    brands: ['Cartier', 'Tiffany & Co.', 'Chanel', 'Louis Vuitton', 'Bottega Veneta'],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
    tagline: 'Hollywood\'s golden boulevard — the world\'s most glamorous shopping street',
    highlights: ['Private shopping experiences', 'Valet concierge', 'VIP suite access', 'Celebrity stylist program'],
    byAppointment: false,
  },
  {
    id: 'dfs-galleria-singapore',
    name: 'DFS Galleria T Galleria',
    location: 'Orchard Road, Singapore',
    country: 'Singapore',
    category: 'Shopping Center',
    brands: ['Bulgari', 'Dior', 'Fendi', 'Givenchy', 'Loewe'],
    image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=800&q=80',
    tagline: 'Asia\'s luxury shopping destination on the world\'s finest retail street',
    highlights: ['Tax-free shopping', 'Personal shopping service', 'VIP Member Lounge', 'Curated fine watches'],
    byAppointment: false,
  },
  {
    id: 'chanel-rue-cambon',
    name: 'Chanel — 31 Rue Cambon',
    location: '31 Rue Cambon, Paris',
    country: 'France',
    category: 'Private Atelier',
    brands: ['Chanel'],
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80',
    tagline: 'Coco\'s original address — haute couture fittings in Mademoiselle\'s apartment',
    highlights: ['Haute Couture fittings', 'Access to Coco\'s apartment', 'Private fashion show viewings', 'Métiers d\'Art exclusives'],
    byAppointment: true,
  },
];
