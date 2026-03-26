export interface LocationPage {
  slug: string;
  cityName: string;
  state: string;
  airport: string;
  airportCode: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  overview: string;
  availableServices: string[];
  outboundRoutes: string[]; // route slugs
  inboundRoutes: string[];  // route slugs
  keyIndustries: string[];
  // Extended fields for rich SEO pages
  airportDetails?: {
    name: string;
    description: string;
  }[];
  charterServicesDetail?: {
    title: string;
    description: string;
  }[];
  popularRoutes?: {
    route: string;
    flightTime: string;
  }[];
  aircraftOptions?: {
    type: string;
    passengers: string;
    description: string;
  }[];
  whoUsesCharter?: {
    title: string;
    description: string;
  }[];
  benefitsOfCharter?: {
    title: string;
    description: string;
  }[];
  howCharterWorks?: {
    step: string;
    description: string;
  }[];
}

export const locationPages: LocationPage[] = [
  {
    slug: 'charter-flight-lagos',
    cityName: 'Lagos',
    state: 'Lagos State',
    airport: 'Murtala Muhammed International Airport',
    airportCode: 'LOS',
    heroImage: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=2000&q=80&auto=format&fit=crop',
    metaTitle: 'Charter Flight Services in Lagos | Private Jet & Helicopter Charter Lagos | SVN Aviation',
    metaDescription: 'Private jet and helicopter charter services in Lagos, Nigeria. Fast, flexible, and efficient charter flights for corporate executives, oil & gas operators, and VIP travelers. SVN Aviation — a trading name of Schnell Vogel Nigeria Limited.',
    intro: 'Lagos is Nigeria\'s commercial capital and one of the busiest aviation hubs in West Africa. Charter flight services in Lagos provide fast, flexible, and efficient travel solutions for corporate executives, government officials, oil and gas operators, and private individuals. SVN Aviation coordinates professional private jet and helicopter charter services in Lagos, ensuring seamless travel experiences tailored to client needs. With increasing demand for time-sensitive travel and operational efficiency, charter flights have become an essential solution for businesses and individuals who require speed, privacy, and flexibility. Whether for business meetings, offshore operations, or personal travel, charter services from Lagos offer unmatched convenience.',
    overview: 'Lagos serves as the primary gateway for domestic and international air travel in Nigeria. The city is home to key aviation infrastructure that supports private jet and helicopter operations, making it an ideal base for charter flight operations across Nigeria and beyond.',
    airportDetails: [
      {
        name: 'Murtala Muhammed International Airport (MMIA)',
        description: 'Nigeria\'s busiest airport and a major hub for both commercial and private aviation.',
      },
      {
        name: 'General Aviation Terminal (GAT)',
        description: 'The GAT handles domestic and private jet operations, offering faster boarding processes and reduced waiting times compared to commercial terminals.',
      },
    ],
    charterServicesDetail: [
      {
        title: 'Private Jet Charter',
        description: 'Private jet charter services provide exclusive access to aircraft for business or personal travel. Clients can choose from a range of aircraft options based on passenger count, travel distance, and comfort requirements.',
      },
      {
        title: 'Helicopter Charter',
        description: 'Helicopter services are ideal for short-distance travel, offshore operations, and access to remote locations. They are widely used in the oil and gas sector for crew transfers and logistics.',
      },
      {
        title: 'Corporate Charter Flights',
        description: 'Businesses rely on charter flights to transport executives and teams efficiently between key locations. This reduces travel time and improves productivity.',
      },
      {
        title: 'Offshore and Oil & Gas Operations',
        description: 'Lagos serves as a major base for offshore oil and gas activities. Charter flights and helicopter services support crew transfers, equipment movement, and operational logistics.',
      },
      {
        title: 'Emergency and Time-Sensitive Flights',
        description: 'Charter services are also used for urgent travel needs, including medical evacuations and emergency response operations.',
      },
    ],
    popularRoutes: [
      { route: 'Lagos to Abuja', flightTime: 'Approximately 1 hour' },
      { route: 'Lagos to Port Harcourt', flightTime: 'Approximately 1 hour' },
      { route: 'Lagos to Warri', flightTime: 'Approximately 50 minutes' },
      { route: 'Lagos to Owerri', flightTime: 'Approximately 1 hour' },
      { route: 'Lagos to Enugu', flightTime: 'Approximately 1 hour 10 minutes' },
      { route: 'Lagos to Uyo', flightTime: 'Approximately 1 hour 15 minutes' },
      { route: 'Lagos to Kano', flightTime: 'Approximately 1 hour 30 minutes' },
    ],
    aircraftOptions: [
      { type: 'Light Jets', passengers: '4–6 passengers', description: 'Suitable for short trips and quick executive hops.' },
      { type: 'Midsize Jets', passengers: '6–9 passengers', description: 'Increased comfort and space for corporate groups.' },
      { type: 'Heavy Jets', passengers: '10–16 passengers', description: 'Ideal for larger groups and VIP travel.' },
      { type: 'Helicopters', passengers: '4–12 passengers', description: 'Used for short-distance and offshore operations.' },
    ],
    whoUsesCharter: [
      { title: 'Corporate Executives', description: 'Business leaders rely on charter flights to attend meetings and manage operations efficiently.' },
      { title: 'Oil & Gas Companies', description: 'Helicopter and jet charters are essential for offshore operations and crew movement.' },
      { title: 'Government Officials', description: 'Charter flights provide secure and flexible travel for official engagements.' },
      { title: 'High-Net-Worth Individuals', description: 'Private individuals use charter services for comfort, privacy, and convenience.' },
      { title: 'Project Teams and Consultants', description: 'Teams working on time-sensitive projects require reliable transportation between locations.' },
    ],
    benefitsOfCharter: [
      { title: 'Time Savings', description: 'Avoid delays associated with commercial flights.' },
      { title: 'Flexible Scheduling', description: 'Flights operate according to your schedule.' },
      { title: 'Privacy and Security', description: 'Travel in a controlled and secure environment.' },
      { title: 'Direct Access', description: 'Fly directly to your destination without stopovers.' },
      { title: 'Operational Efficiency', description: 'Ideal for business and mission-critical travel.' },
    ],
    howCharterWorks: [
      { step: 'Submit Request', description: 'Provide travel details including destination, date, and passenger count.' },
      { step: 'Aircraft Options', description: 'Receive suitable aircraft options based on your requirements.' },
      { step: 'Confirmation', description: 'Select preferred aircraft and confirm booking.' },
      { step: 'Flight Execution', description: 'Charter flight is scheduled and executed as planned.' },
    ],
    availableServices: [
      'Private Jet Charter',
      'Helicopter Charter',
      'Corporate Charter Flights',
      'Offshore & Oil Gas Operations',
      'Emergency & Time-Sensitive Flights',
      'Air Cargo & Logistics',
      'VIP & Executive Transfer',
      'Wedding & Event Helicopter',
    ],
    outboundRoutes: ['lagos-to-abuja-private-jet-charter', 'lagos-to-port-harcourt-charter', 'lagos-to-warri-charter', 'lagos-to-calabar-charter'],
    inboundRoutes: ['abuja-to-lagos-private-jet-charter', 'port-harcourt-to-lagos-charter'],
    keyIndustries: ['Banking & Financial Services', 'Oil & Gas', 'Telecommunications', 'Real Estate & Construction', 'Entertainment & Media', 'Government & Diplomacy'],
  },
  {
    slug: 'charter-flight-abuja',
    cityName: 'Abuja',
    state: 'Federal Capital Territory',
    airport: 'Nnamdi Azikiwe International Airport',
    airportCode: 'ABV',
    heroImage: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=2000&q=80&auto=format&fit=crop',
    metaTitle: 'Charter Flight Abuja | Private Jet Charter Services | SVN Aviation',
    metaDescription: 'Private jet charter services in Abuja, Nigeria. Executive and government aviation from Nnamdi Azikiwe International Airport. Secure, fast, and discreet. Book now.',
    intro: 'Abuja, Nigeria\'s federal capital, is the second largest hub for private aviation in the country. SVN Aviation coordinates charter flight services from Abuja for government officials, diplomats, corporate executives, and international organizations. The city\'s importance as the seat of federal power — housing the presidency, national assembly, supreme court, and all federal ministries — generates continuous demand for secure, discreet, and time-efficient charter aviation services.',
    overview: 'Charter aviation in Abuja serves a distinctly different market compared to Lagos. The primary drivers are government travel, diplomatic missions, and regulatory-related corporate travel. Nnamdi Azikiwe International Airport has a dedicated presidential and VIP wing that handles high-profile charter movements, alongside a growing general aviation terminal for corporate charter operations. The seasonal nature of legislative sessions, budget presentations, and political events creates predictable peaks in charter demand. SVN Aviation\'s Abuja coordination team understands the unique protocol and security requirements of government and diplomatic charter operations, ensuring every mission is planned and executed to the highest standards.',
    availableServices: [
      'Private Jet Charter',
      'Government & Diplomatic Flights',
      'VIP & Executive Transfer',
      'Emergency Medical Evacuation',
      'Security Operations Aviation',
      'Corporate Group Charter',
    ],
    outboundRoutes: ['abuja-to-lagos-private-jet-charter', 'abuja-to-port-harcourt-charter'],
    inboundRoutes: ['lagos-to-abuja-private-jet-charter', 'port-harcourt-to-abuja-charter'],
    keyIndustries: ['Federal Government', 'Diplomacy & International Relations', 'Legal & Judiciary', 'Banking & Finance', 'Defense & Security', 'International Organizations'],
  },
  {
    slug: 'charter-flight-port-harcourt',
    cityName: 'Port-Harcourt',
    state: 'Rivers State',
    airport: 'Port Harcourt International Airport',
    airportCode: 'PHC',
    heroImage: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=2000&q=80&auto=format&fit=crop',
    metaTitle: 'Charter Flight Port Harcourt | Helicopter & Jet Charter | SVN Aviation',
    metaDescription: 'Helicopter and private jet charter services in Port Harcourt. Offshore crew transfers, oil & gas aviation, and executive flights. SVN Aviation Nigeria.',
    intro: 'Port Harcourt is the epicenter of Nigeria\'s oil and gas industry and the most important helicopter charter hub in the country. SVN Aviation coordinates extensive charter operations from Port Harcourt, specializing in offshore crew transfers, platform-to-shore logistics, and executive jet charter for energy sector professionals. The city\'s proximity to major offshore production fields in the Niger Delta makes it the primary base for helicopter operations supporting the upstream petroleum industry.',
    overview: 'Port Harcourt International Airport and its surrounding helicopter bases handle more charter aviation movements than any other city in Nigeria when measured by flight frequency. The daily rhythm of offshore crew changes, platform inspections, and emergency deployments creates a constant flow of helicopter traffic between the city and offshore installations. For fixed-wing charter, Port Harcourt serves as a critical connection point between the Niger Delta and the rest of Nigeria, with high-frequency charter routes to Lagos and Abuja. SVN Aviation\'s Port Harcourt operations are built around the demanding requirements of the energy sector — strict safety compliance, weather-dependent scheduling, and 24/7 operational readiness.',
    availableServices: [
      'Helicopter Charter',
      'Offshore Crew Transfer',
      'Private Jet Charter',
      'Emergency Medical Evacuation',
      'Air Cargo & Equipment Transfer',
      'Platform Inspection Flights',
      'Search & Rescue Support',
    ],
    outboundRoutes: ['port-harcourt-to-lagos-charter', 'port-harcourt-to-abuja-charter'],
    inboundRoutes: ['lagos-to-port-harcourt-charter', 'abuja-to-port-harcourt-charter'],
    keyIndustries: ['Oil & Gas (Upstream)', 'Oil & Gas (Services)', 'Maritime & Shipping', 'Engineering & Construction', 'Environmental Services', 'Government & Security'],
  },
  {
    slug: 'charter-flight-warri',
    cityName: 'Warri',
    state: 'Delta State',
    airport: 'Osubi Airstrip',
    airportCode: 'QRW',
    heroImage: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=2000&q=80&auto=format&fit=crop',
    metaTitle: 'Charter Flight Warri | Oil & Gas Aviation Services | SVN Aviation',
    metaDescription: 'Charter flights to and from Warri, Delta State. Helicopter and aircraft services for oil & gas operations, offshore transfers, and crew logistics. SVN Aviation.',
    intro: 'Warri, located in Delta State, is a critical operational base for Nigeria\'s oil and gas industry and a key node in the country\'s charter aviation network. SVN Aviation coordinates charter flights to and from Warri\'s Osubi Airstrip, serving the major oil operators and service companies that maintain significant installations in the western Niger Delta. Helicopter charter from Warri provides essential connectivity to offshore platforms, flow stations, and production facilities that drive Nigeria\'s petroleum output.',
    overview: 'Osubi Airstrip in Warri is operated primarily as an oil industry aviation facility, making it unique among Nigerian airports. The airstrip handles a high volume of helicopter movements connecting onshore bases with offshore platforms in OMLs operated by Shell, Chevron, NNPC Joint Ventures, and several indigenous operators. Fixed-wing charter from Warri connects the city with Lagos, Abuja, and Port Harcourt, providing essential transport for executives and engineers who need to travel between field operations and corporate headquarters. SVN Aviation\'s coordination capabilities at Warri include multimodal transport planning — connecting helicopter, fixed-wing, and ground transport segments into seamless door-to-platform journeys.',
    availableServices: [
      'Helicopter Charter',
      'Offshore Crew Transfer',
      'Fixed-Wing Charter',
      'Emergency Medical Evacuation',
      'Equipment & Cargo Transport',
      'Platform Inspection Flights',
    ],
    outboundRoutes: [],
    inboundRoutes: ['lagos-to-warri-charter'],
    keyIndustries: ['Oil & Gas (Upstream)', 'Oil & Gas (Services)', 'Engineering & Construction', 'Environmental Remediation', 'Community Relations', 'Security Operations'],
  },
  {
    slug: 'charter-flight-calabar',
    cityName: 'Calabar',
    state: 'Cross River State',
    airport: 'Margaret Ekpo International Airport',
    airportCode: 'CBQ',
    heroImage: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=2000&q=80&auto=format&fit=crop',
    metaTitle: 'Charter Flight Calabar | Private Jet Charter Services | SVN Aviation',
    metaDescription: 'Private charter flights to and from Calabar, Cross River State. Executive, corporate, and tourism aviation services. SVN Aviation Nigeria.',
    intro: 'Calabar, the capital of Cross River State, is emerging as an important destination for charter aviation in southeastern Nigeria. SVN Aviation coordinates private jet charter services to and from Margaret Ekpo International Airport, serving government officials, corporate executives, tourism operators, and international organizations active in the region. Calabar\'s unique position as Nigeria\'s tourism capital, a free trade zone host, and a border city with Cameroon creates diverse demand for charter aviation services.',
    overview: 'While not as high-volume as Lagos or Port Harcourt, Calabar\'s charter aviation market is growing steadily. The city hosts the Calabar Free Trade Zone, which attracts international manufacturing and trade companies requiring executive air access. Cross River State\'s ambitious tourism development programs — including the Calabar Carnival, one of Africa\'s largest street festivals — generate seasonal spikes in VIP charter demand. The state government\'s investment in infrastructure and the city\'s proximity to the Cameroon border also support international diplomatic and trade-related charter movements. Margaret Ekpo International Airport offers adequate facilities for charter operations with significantly less congestion than Lagos or Abuja, providing a more relaxed and efficient travel experience.',
    availableServices: [
      'Private Jet Charter',
      'VIP & Executive Transfer',
      'Tourism & Event Flights',
      'Government Flights',
      'Corporate Charter',
      'Cargo Transport',
    ],
    outboundRoutes: [],
    inboundRoutes: ['lagos-to-calabar-charter'],
    keyIndustries: ['State Government', 'Tourism & Hospitality', 'Free Trade Zone', 'International Trade', 'Agriculture & Export', 'Cultural Events'],
  },
];

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locationPages.find(l => l.slug === slug);
}
