interface PortalType {
  name: string;
  link: string;
}

interface PlanType {
  name: string;
  price: string;
  jobsPerDay: number;
  duration: string;
  emailSupport: boolean;
  whatsappAlert: boolean;
  resumeBased: boolean;
  portals: PortalType[];
  maxJobAlerts: number;
  customization: string;
  features: string[];
  total_Price: number;
  punchline: string;
  portImage?: string[];
  missingFeatures?: string[];
  missingportals?: PortalType[];
}

export const pricingPlans: PlanType[] = [
  {
    name: "Free",
    price: "₹0",
    total_Price: 0.0,
    jobsPerDay: 5,
    duration: "1 Month",
    emailSupport: true,
    whatsappAlert: false,
    resumeBased: false,
    portals: [
      { name: "Foundit.in", link: "https://www.foundit.in" },
      { name: "Instahyre.com", link: "https://www.instahyre.com/search-jobs" }
    ],
    missingportals: [
      { name: "LinkedIn.com", link: "https://linkedin.com/" },
      { name: "Naukri.com", link: "https://www.naukri.com/" },
      { name: "Internshala.com", link: "https://internshala.com/student/dashboard" }
    ],
    maxJobAlerts: 3,
    customization: "Pause & Delete only",
    punchline: "Dip your toes in the job pool — free & easy.",
    features: [
      "Max. 5 jobs/day",
      "Valid for 1 month",
      "Email alerts only",
      "Pause or delete alerts",
      "Upto 2 custom job alerts",
      "Only 2 job portals"
    ],
    missingFeatures: [
      "Customize alerts anytime",
      "Get ATS Score for resume",
      "WhatsApp alerts",
    ]
  },
  {
    name: "Pro",
    price: "₹9",
    total_Price: 9.0,
    jobsPerDay: 10,
    duration: "1 Month",
    emailSupport: true,
    whatsappAlert: false,
    resumeBased: true,
    portals: [
      { name: "Foundit.in", link: "https://www.foundit.in" },
      { name: "Instahyre.com", link: "https://www.instahyre.com/search-jobs" },
      { name: "Internshala.com", link: "https://internshala.com/student/dashboard" },
      { name: "Naukri.com", link: "https://www.naukri.com/" }
    ],
    missingportals: [
      { name: "LinkedIn.com", link: "https://linkedin.com/" }
    ],
    maxJobAlerts: 6,
    customization: "Full (edit anytime)",
    punchline: "More jobs. More control. More chances.",
    features: [
      "Max. 10 jobs/day",
      "Valid for 1 month",
      "Email alerts",
      "Get ATS Score for resume",
      "Customize alerts anytime",
      "Upto 6 custom job alerts",
      "Get Upto 4 job portals"
    ],
    missingFeatures: [
      "WhatsApp alerts",
      "Longer plan duration",
    ]
  },
  {
    name: "Premium",
    price: "₹19",
    total_Price: 19.0,
    jobsPerDay: 15,
    duration: "2 Months",
    emailSupport: true,
    whatsappAlert: true,
    resumeBased: true,
    portals: [
      { name: "Foundit.in", link: "https://www.foundit.in" },
      { name: "Instahyre.com", link: "https://www.instahyre.com/search-jobs" },
      { name: "Internshala.com", link: "https://internshala.com/student/dashboard" },
      { name: "Naukri.com", link: "https://www.naukri.com/" },
      { name: "LinkedIn.com", link: "https://linkedin.com/" }
    ],
    missingportals: [],
    maxJobAlerts: 10,
    customization: "Full (edit anytime)",
    punchline: "The ultimate job hunt — everything unlocked.",
    features: [
      "Max. 15 jobs/day",
      "Valid for 2 months",
      "Email alerts",
      "WhatsApp alerts",
      "Get ATS Score for resume",
      "Customize alerts anytime",
      "Longer plan duration",
      "Upto 10 custom job alerts",
      "Get Upto 5 job portals"
    ],
    missingFeatures: []
  }
];
