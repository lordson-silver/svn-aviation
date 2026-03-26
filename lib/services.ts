export const LOCATIONS = [
  { name: "Lagos", country: "Nigeria" },
  { name: "Abuja", country: "Nigeria" },
  { name: "Port-Harcourt", country: "Nigeria" },
  { name: "Warri", country: "Nigeria" },
  { name: "Calabar", country: "Nigeria" },
];

export const SERVICES = [
  {
    category: "Specialized Aviation Services",
    items: [
      "Emergency Medical Services",
      "Human Remains Repatriation",
      "Aerial Survey and Observation",
    ],
  },
  {
    category: "Executive and VIP Flights",
    items: [
      "Wedding Helicopter Charter",
      "Sightseeing and Secure Flights",
      "Private VIP Transfers",
    ],
  },
  {
    category: "Core Aviation Services",
    items: [
      "Helicopter Charter",
      "Executive Jet Charter",
      "Offshore Crew Change",
      "Personnel Transfer",
      "Air Cargo Transfer",
    ],
  },
];

export interface ServiceSection {
  heading: string;
  content?: string;
  items?: string[];
  subsections?: {
    title: string;
    items?: string[];
    description?: string;
  }[];
}

export interface HomeService {
  slug: string;
  title: string;
  icon: string;
  desc: string;
  tagline: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  sections: ServiceSection[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    description: string;
  }[];
  whyChoose: string[];
  ctaHeading: string;
  ctaDescription: string;
}

export const homeServices: HomeService[] = [
  {
    slug: "private-jet-charter-nigeria",
    title: "Private Jet Charter Nigeria",
    icon: "plane",
    metaTitle: "Private Jet Charter Nigeria | Executive Jet Hire | SVN Aviation",
    metaDescription: "Private jet charter services in Nigeria. Fast, flexible, and efficient travel solutions for corporate executives, government officials, and high-net-worth individuals. SVN Aviation — a trading name of Schnell Vogel Nigeria Limited.",
    desc: "Private jet charter in Nigeria provides a fast, flexible, and efficient travel solution for corporate executives, government officials, high-net-worth individuals, and organizations requiring time-sensitive transportation.",
    tagline: "Confidential. Efficient. Direct.",
    content: "SVN Aviation delivers professional charter flight coordination services across Nigeria, ensuring seamless access to private jet travel with reliability and precision. In today's fast-paced business environment, commercial airline schedules and airport delays can significantly impact productivity. Private jet charter eliminates these challenges by offering direct, on-demand travel tailored to your schedule.",
    sections: [
      {
        heading: "What is Private Jet Charter",
        content: "Private jet charter allows individuals or organizations to hire an entire aircraft for exclusive use. Unlike commercial flights, passengers are not restricted by fixed schedules or routes. With SVN Aviation, clients can request charter flights based on:",
        items: [
          "Preferred departure time",
          "Destination",
          "Number of passengers",
          "Travel purpose",
        ],
      },
      {
        heading: "Nationwide Charter Coverage",
        content: "SVN Aviation coordinates private jet charter services across major cities in Nigeria. We also support regional travel within West Africa, enabling seamless cross-border charter operations.",
        items: [
          "Lagos",
          "Abuja",
          "Port Harcourt",
          "Warri",
          "Owerri",
          "Kano",
          "Enugu",
          "Uyo",
        ],
      },
      {
        heading: "Aircraft Options Available",
        content: "Private jet charter services are tailored based on passenger requirements and travel distance.",
        subsections: [
          {
            title: "Light Jets",
            items: ["Suitable for short routes", "Capacity: 4–6 passengers", "Ideal for quick business trips"],
          },
          {
            title: "Midsize Jets",
            items: ["Capacity: 6–9 passengers", "More comfort and luggage space"],
          },
          {
            title: "Heavy Jets",
            items: ["Capacity: 10–16 passengers", "Designed for longer distances and VIP travel"],
          },
        ],
      },
      {
        heading: "Who Uses Private Jet Charter in Nigeria",
        content: "Private jet charter is widely used across various sectors. For many organizations, private charter is not a luxury but a strategic tool for efficiency.",
        items: [
          "Corporate executives and business leaders",
          "Government officials and diplomats",
          "Oil & gas companies",
          "Project teams and consultants",
          "Private individuals seeking comfort and privacy",
        ],
      },
    ],
    benefits: [
      { title: "Time Efficiency", description: "Avoid long check-in processes and flight delays." },
      { title: "Flexible Scheduling", description: "Flights are arranged according to your preferred time." },
      { title: "Privacy and Security", description: "Travel in a controlled and confidential environment." },
      { title: "Direct Travel", description: "Fly directly between destinations without stopovers." },
      { title: "Increased Productivity", description: "Use travel time effectively in a quiet and comfortable setting." },
    ],
    process: [
      { step: "Request Submission", description: "Provide travel details including route, date, and passenger count." },
      { step: "Aircraft Options", description: "Receive available aircraft options tailored to your needs." },
      { step: "Booking Confirmation", description: "Select preferred aircraft and confirm travel." },
      { step: "Flight Execution", description: "Charter is scheduled and executed efficiently." },
    ],
    whyChoose: [
      "Fast response time",
      "Nationwide and regional coverage",
      "Tailored aviation solutions",
      "Professional coordination",
      "Commitment to client satisfaction",
    ],
    ctaHeading: "Request Private Jet Charter",
    ctaDescription: "If you require private jet charter services in Nigeria, SVN Aviation is ready to assist. Our team will provide suitable aircraft options and coordinate your travel seamlessly.",
  },
  {
    slug: "helicopter-charter-nigeria",
    title: "Helicopter Charter Nigeria",
    icon: "helicopter",
    metaTitle: "Helicopter Charter Nigeria | Offshore & Executive Helicopter Hire | SVN Aviation",
    metaDescription: "Helicopter charter services in Nigeria for offshore operations, emergency response, executive travel, and VIP transport. SVN Aviation — a trading name of Schnell Vogel Nigeria Limited.",
    desc: "Helicopter charter in Nigeria provides a flexible and efficient solution for short-distance travel, offshore operations, emergency response, and specialized aviation services.",
    tagline: "Rapid deployment. Controlled mobility. Operational continuity.",
    content: "SVN Aviation coordinates helicopter charter services to ensure fast and reliable access to remote and urban locations. Helicopters are particularly useful in areas where road infrastructure is limited or where direct access is required.",
    sections: [
      {
        heading: "What is Helicopter Charter",
        content: "Helicopter charter involves hiring a helicopter for exclusive use, allowing direct access to locations that are not easily reachable by fixed-wing aircraft. This includes:",
        items: [
          "Offshore platforms",
          "Remote sites",
          "City-to-city short travel",
          "Emergency operations",
        ],
      },
      {
        heading: "Applications of Helicopter Charter",
        content: "Helicopter charter services are widely used across industries in Nigeria.",
        subsections: [
          {
            title: "Oil & Gas Operations",
            items: ["Offshore crew transfer", "Platform logistics"],
          },
          {
            title: "Emergency Services",
            items: ["Medical evacuation", "Urgent response missions"],
          },
          {
            title: "Corporate Transport",
            items: ["Executive travel", "Time-sensitive meetings"],
          },
          {
            title: "Special Events",
            items: ["Aerial access", "VIP transport"],
          },
        ],
      },
      {
        heading: "Coverage Areas",
        content: "SVN Aviation supports helicopter operations across Nigeria, including key energy and corporate hubs.",
        items: [
          "Lagos",
          "Port Harcourt",
          "Warri",
          "Uyo",
          "Offshore oil fields",
        ],
      },
      {
        heading: "Helicopter Types",
        content: "Different helicopter options are available depending on mission requirements.",
        items: [
          "Light helicopters — ideal for small groups and short-range transfers",
          "Medium helicopters — offshore transfer and crew change operations",
          "Heavy helicopters — larger capacity operations and long-range missions",
        ],
      },
    ],
    benefits: [
      { title: "Direct Access", description: "Land closer to your destination without airport limitations." },
      { title: "Time Saving", description: "Avoid traffic congestion and long travel times." },
      { title: "Operational Efficiency", description: "Ideal for urgent and specialized missions." },
      { title: "Flexibility", description: "Operate based on client schedule and location requirements." },
    ],
    process: [
      { step: "Submit Request", description: "Provide mission details and requirements." },
      { step: "Define Mission Details", description: "Specify operational parameters and location." },
      { step: "Receive Aircraft Options", description: "Get tailored helicopter options for your mission." },
      { step: "Confirm Operation", description: "Select helicopter and confirm scheduling." },
      { step: "Flight Execution", description: "Mission is executed with full safety compliance." },
    ],
    whyChoose: [
      "Experienced coordination",
      "Strong operational network",
      "Safety-focused approach",
      "Reliable service delivery",
    ],
    ctaHeading: "Request Helicopter Charter",
    ctaDescription: "Contact SVN Aviation to arrange helicopter charter services in Nigeria. Our operations team is available 24/7 for coordination.",
  },
  {
    slug: "charter-flight-services-nigeria",
    title: "Charter Flight Services Nigeria",
    icon: "plane",
    metaTitle: "Charter Flight Services Nigeria | Private Jet & Helicopter Charter | SVN Aviation",
    metaDescription: "Charter flight services in Nigeria — private jet, helicopter, cargo, and emergency flights. Flexible and customized air travel across Nigeria and West Africa. SVN Aviation.",
    desc: "Charter flight services in Nigeria provide flexible and customized air travel solutions for individuals, businesses, and organizations.",
    tagline: "Flexible. Customized. Reliable.",
    content: "SVN Aviation coordinates charter flights across Nigeria and West Africa, ensuring efficient and reliable travel solutions tailored to client needs. Whether you require a private jet, helicopter, cargo flight, or emergency evacuation, our coordination team delivers with precision.",
    sections: [
      {
        heading: "What are Charter Flight Services",
        content: "Charter flight services involve arranging aircraft for specific travel requirements outside scheduled airline services. This includes:",
        items: [
          "Private jet charter",
          "Helicopter charter",
          "Cargo flights",
          "Emergency flights",
        ],
      },
      {
        heading: "Types of Charter Flights",
        content: "SVN Aviation coordinates multiple types of charter flights tailored to specific needs.",
        subsections: [
          {
            title: "Private Charter",
            description: "For executives and individuals requiring exclusive air travel.",
          },
          {
            title: "Corporate Charter",
            description: "For business and project teams needing group transportation.",
          },
          {
            title: "Cargo Charter",
            description: "For transporting goods, equipment, and high-value cargo.",
          },
          {
            title: "Emergency Charter",
            description: "For urgent medical or operational needs requiring rapid deployment.",
          },
        ],
      },
      {
        heading: "Coverage",
        content: "SVN Aviation supports charter flights across major Nigerian cities and regional routes across West Africa.",
        items: [
          "Lagos",
          "Abuja",
          "Port Harcourt",
          "Warri",
          "Enugu",
          "Kano",
          "Uyo",
        ],
      },
    ],
    benefits: [
      { title: "Flexible Scheduling", description: "Flights operate according to your schedule, not airline timetables." },
      { title: "Customized Routes", description: "Fly directly to your destination without unnecessary stops." },
      { title: "Faster Travel", description: "Skip long check-in lines and commercial flight delays." },
      { title: "Privacy", description: "Travel in a controlled, private, and secure environment." },
      { title: "Reliability", description: "Dependable coordination backed by a strong operational network." },
    ],
    process: [
      { step: "Request Submission", description: "Provide travel details including destination, date, and group size." },
      { step: "Flight Planning", description: "Our team plans the optimal route and logistics." },
      { step: "Aircraft Selection", description: "Receive tailored aircraft options based on your needs." },
      { step: "Booking Confirmation", description: "Select preferred aircraft and confirm all details." },
      { step: "Execution", description: "Charter flight is coordinated and executed seamlessly." },
    ],
    whyChoose: [
      "Professional coordination",
      "Fast response",
      "Nationwide coverage",
      "Tailored solutions",
    ],
    ctaHeading: "Request Charter Flight",
    ctaDescription: "Contact SVN Aviation to arrange charter flight services in Nigeria. Our coordination team is ready to assist with any charter requirement.",
  },
  {
    slug: "offshore-crew-transfer",
    title: "Oil & Gas Charter Flights",
    icon: "ship",
    metaTitle: "Oil & Gas Charter Flights Nigeria | Offshore Crew Transfer | SVN Aviation",
    metaDescription: "Dedicated helicopter logistics for oil & gas platforms, FPSO operations, and energy sector crew rotation in Nigeria. SVN Aviation.",
    desc: "Dedicated helicopter logistics supporting oil & gas platforms, FPSO operations, and energy sector crew rotation.",
    tagline: "Structured deployment aligned with operational timelines.",
    content: "Our offshore crew transfer services are designed to support the demanding needs of the energy sector. We provide reliable and efficient transport for crew members to and from offshore platforms and FPSOs. Our operations are structured to align with your project timelines, ensuring minimal disruption and maximum productivity.",
    sections: [],
    benefits: [
      { title: "Operational Alignment", description: "Flights scheduled to match crew rotation cycles." },
      { title: "Safety Compliance", description: "Full adherence to oil & gas aviation safety standards." },
      { title: "24/7 Availability", description: "Round-the-clock coordination for offshore operations." },
      { title: "Multi-modal Transport", description: "Seamless helicopter-to-platform connectivity." },
    ],
    process: [
      { step: "Request Submission", description: "Provide crew size, rotation schedule, and platform details." },
      { step: "Logistics Planning", description: "Our team coordinates helicopter and ground transport." },
      { step: "Confirmation", description: "Confirm manifest and operational requirements." },
      { step: "Execution", description: "Crew transfer executed with full safety protocols." },
    ],
    whyChoose: [
      "Energy sector expertise",
      "Strong safety record",
      "24/7 operational readiness",
      "Experienced coordination team",
    ],
    ctaHeading: "Request Offshore Transfer",
    ctaDescription: "Contact SVN Aviation for offshore crew transfer and oil & gas aviation services.",
  },
  {
    slug: "air-cargo-logistics",
    title: "Air Cargo & Logistics",
    icon: "package",
    metaTitle: "Air Cargo & Logistics Nigeria | Urgent Cargo Flights | SVN Aviation",
    metaDescription: "Air charter solutions for urgent cargo movement, oilfield equipment, and high-value parts delivery across Nigeria. SVN Aviation.",
    desc: "Air charter solutions for urgent cargo movement, oilfield equipment, and high-value parts delivery.",
    tagline: "Precision aviation logistics when delays are not an option.",
    content: "When time is of the essence, our air cargo and logistics services are here to help. We provide rapid and reliable transport for urgent cargo, specialized oilfield equipment, and high-value parts. Our precision aviation logistics ensure that your critical deliveries reach their destination on time, every time.",
    sections: [],
    benefits: [
      { title: "Rapid Deployment", description: "Urgent cargo pickup and delivery on short notice." },
      { title: "Specialized Handling", description: "Equipment and cargo handled with industry-specific care." },
      { title: "Nationwide Reach", description: "Delivery to any location across Nigeria." },
      { title: "Reliability", description: "Proven track record for time-critical deliveries." },
    ],
    process: [
      { step: "Request Submission", description: "Provide cargo details, dimensions, and delivery timeline." },
      { step: "Aircraft Selection", description: "Receive suitable aircraft options for your cargo type." },
      { step: "Confirmation", description: "Confirm logistics plan and scheduling." },
      { step: "Execution", description: "Cargo is transported with real-time tracking." },
    ],
    whyChoose: [
      "Specialized cargo handling",
      "Rapid turnaround",
      "Nationwide and regional coverage",
      "Dedicated logistics coordination",
    ],
    ctaHeading: "Request Cargo Charter",
    ctaDescription: "Contact SVN Aviation for air cargo and logistics services across Nigeria.",
  },
  {
    slug: "emergency-operations",
    title: "Emergency Charter Flights",
    icon: "life-buoy",
    metaTitle: "Emergency Charter Flights Nigeria | Air Ambulance & Medical Evacuation | SVN Aviation",
    metaDescription: "Coordinated helicopter and jet deployment for emergency medical evacuation and urgent personnel transfer in Nigeria. SVN Aviation.",
    desc: "Coordinated helicopter and jet deployment for emergency medical evacuation and urgent personnel transfer.",
    tagline: "Rapid response aviation when every minute matters.",
    content: "In emergency situations, every second counts. Our emergency operations team is available 24/7 to coordinate rapid helicopter and jet deployment for medical evacuations and urgent personnel transfers. We provide the expertise and resources needed to respond quickly and effectively in critical situations.",
    sections: [],
    benefits: [
      { title: "24/7 Availability", description: "Emergency coordination available around the clock." },
      { title: "Rapid Response", description: "Aircraft deployed within the shortest possible timeframe." },
      { title: "Medical Capability", description: "Equipped for medical evacuation and patient transfer." },
      { title: "Nationwide Coverage", description: "Emergency response across all Nigerian locations." },
    ],
    process: [
      { step: "Emergency Call", description: "Contact our 24/7 emergency desk immediately." },
      { step: "Rapid Assessment", description: "Our team assesses requirements and aircraft availability." },
      { step: "Immediate Deployment", description: "Closest available aircraft is deployed." },
      { step: "Mission Execution", description: "Emergency transfer executed with medical support if required." },
    ],
    whyChoose: [
      "24/7 emergency desk",
      "Rapid aircraft deployment",
      "Medical evacuation capability",
      "Proven emergency response record",
    ],
    ctaHeading: "Emergency Charter Request",
    ctaDescription: "For emergency aviation services, contact SVN Aviation's 24/7 operations desk immediately.",
  },
  {
    slug: "aerial-survey-filming",
    title: "Aerial Survey & Filming",
    icon: "camera",
    metaTitle: "Aerial Survey & Filming Nigeria | Helicopter Aerial Services | SVN Aviation",
    metaDescription: "Helicopter-supported operations for infrastructure inspection, cinematography, and professional aerial content production in Nigeria. SVN Aviation.",
    desc: "Helicopter-supported operations for infrastructure inspection, cinematography, and professional aerial content production.",
    tagline: "Stable platforms for precision visual execution.",
    content: "Our aerial survey and filming services provide stable and versatile platforms for a wide range of professional applications. From critical infrastructure inspections to high-end cinematography, we offer the aerial expertise and equipment needed to capture stunning visuals and gather precise data from the air.",
    sections: [],
    benefits: [
      { title: "Stable Platforms", description: "Helicopters equipped for stable aerial operations." },
      { title: "Precision Data", description: "High-accuracy survey and inspection capabilities." },
      { title: "Versatility", description: "Suitable for filming, inspection, and mapping applications." },
      { title: "Professional Crews", description: "Experienced pilots specializing in aerial operations." },
    ],
    process: [
      { step: "Request Submission", description: "Provide project details and aerial requirements." },
      { step: "Mission Planning", description: "Our team plans flight paths and operational logistics." },
      { step: "Confirmation", description: "Confirm schedule, equipment, and crew requirements." },
      { step: "Execution", description: "Aerial operation executed with precision and safety." },
    ],
    whyChoose: [
      "Experienced aerial operations",
      "Modern helicopter fleet",
      "Professional crew",
      "Flexible scheduling",
    ],
    ctaHeading: "Request Aerial Services",
    ctaDescription: "Contact SVN Aviation for aerial survey, inspection, and filming services across Nigeria.",
  },
];
