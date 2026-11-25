export type ServicePackage = {
  title: string; price: string; unit: string; description: string;
  features: string[]; note: string;
};
export type PackageGroup = {
  id: string; title: string; subtitle: string; packages: ServicePackage[];
};
/** Public 2027 catalogue: focused services and SME bundles. */
export const packageGroups: PackageGroup[] = [
  {
    "id": "industry-growth",
    "title": "Industry-Specific Growth Packages",
    "subtitle": "Integrated marketing for Indian small and medium businesses",
    "packages": [
      {
        "title": "Restaurant Essential",
        "price": "₹9,999",
        "unit": "month",
        "description": "Cafés, cloud kitchens and local restaurants",
        "features": [
          "Instagram and Facebook cross-posting",
          "8 creatives and 2 supplied-footage Reels",
          "Basic Google Business Profile updates",
          "Calendar, scheduling and monthly report"
        ],
        "note": "One outlet; no filming or ads management."
      },
      {
        "title": "Restaurant Growth",
        "price": "₹19,999",
        "unit": "month",
        "description": "Established independent restaurants",
        "features": [
          "Instagram and Facebook: 12 creatives and 6 Reels",
          "1 local mobile shoot up to 4 hours",
          "Google Business Profile management and local keywords",
          "Promotional calendar and monthly report"
        ],
        "note": "One outlet; extra travel, ads and professional crew excluded."
      },
      {
        "title": "Restaurant Growth Plus",
        "price": "₹29,999",
        "unit": "month",
        "description": "Integrated acquisition and retention",
        "features": [
          "Instagram and Facebook: 12 creatives and 8 Reels",
          "1 local mobile shoot up to 4 hours",
          "Google Business Profile management",
          "Up to 2 active Meta campaigns",
          "2 WhatsApp campaigns and integrated report"
        ],
        "note": "One outlet; consented WhatsApp list up to 2,000 recipients/campaign; ad budget up to ₹15,000; media, platform and setup extra."
      },
      {
        "title": "Local Business Essential",
        "price": "₹9,999",
        "unit": "month",
        "description": "Shops, salons and local service businesses",
        "features": [
          "Instagram and Facebook cross-posting",
          "8 creatives and 2 supplied-footage Reels",
          "Basic Google Business Profile updates",
          "Monthly calendar and report"
        ],
        "note": "One location; filming and ads excluded."
      },
      {
        "title": "Local Business Growth",
        "price": "₹17,999",
        "unit": "month",
        "description": "Local discovery and enquiries",
        "features": [
          "Instagram and Facebook: 10 creatives and 4 supplied-footage Reels",
          "Google Business Profile management",
          "1 active Meta campaign using existing assets",
          "Monthly report"
        ],
        "note": "One location; ad budget up to ₹10,000; media and setup extra."
      },
      {
        "title": "Education Growth",
        "price": "₹19,999",
        "unit": "month",
        "description": "Coaching centres and institutes",
        "features": [
          "Instagram and Facebook: 12 creatives and 4 supplied-footage Reels",
          "Up to 2 active Meta lead campaigns",
          "Admissions campaign calendar",
          "Monthly lead report"
        ],
        "note": "One institute; ad budget up to ₹15,000; media, CRM and filming extra."
      },
      {
        "title": "Professional & B2B Growth",
        "price": "₹19,999",
        "unit": "month",
        "description": "Consultants and small B2B companies",
        "features": [
          "LinkedIn and one additional social channel",
          "8 creatives and 2 supplied-footage Reels",
          "1 active Google Search campaign",
          "Monthly report"
        ],
        "note": "One business; ad budget up to ₹15,000; media and tracking setup extra."
      },
      {
        "title": "Retail & Seller Growth",
        "price": "₹19,999",
        "unit": "month",
        "description": "Retailers selling on Amazon or Flipkart",
        "features": [
          "One marketplace account and up to 20 listing updates",
          "Instagram and Facebook: 8 creatives and 2 supplied-footage Reels",
          "1 marketplace advertising campaign",
          "Monthly consolidated report"
        ],
        "note": "One marketplace; ad spend, fulfilment, photography and platform fees extra."
      }
    ]
  },
  {
    "id": "social-media",
    "title": "Social Media Management",
    "subtitle": "Content that stays consistent",
    "packages": [
      {
        "title": "Social Starter",
        "price": "₹7,999",
        "unit": "month",
        "description": "Essential brand visibility",
        "features": [
          "1 social media platform",
          "6 static creatives per month",
          "Content calendar and scheduling",
          "Monthly activity report"
        ],
        "note": "Client supplies brand assets."
      },
      {
        "title": "Social Growth",
        "price": "₹9,999",
        "unit": "month",
        "description": "Cross-platform content",
        "features": [
          "Instagram and Facebook",
          "8 static creatives per month",
          "2 edited Reels from supplied footage",
          "Monthly calendar and report"
        ],
        "note": "Organic content management only."
      },
      {
        "title": "Social Pro",
        "price": "₹14,999",
        "unit": "month",
        "description": "Content-led brand building",
        "features": [
          "Instagram and Facebook",
          "12 static creatives per month",
          "4 edited Reels from supplied footage",
          "Monthly content report"
        ],
        "note": "Paid advertising is excluded."
      },
      {
        "title": "Lead Accelerator",
        "price": "₹14,999",
        "unit": "month",
        "description": "Content and paid lead campaigns",
        "features": [
          "1 organic social channel",
          "6 static creatives per month",
          "1 active Meta campaign",
          "1 ad creative and monthly report"
        ],
        "note": "Ad spend and tracking setup extra; media budget up to ₹15,000/month."
      }
    ]
  },
  {
    "id": "video-youtube",
    "title": "Reels, Video & YouTube",
    "subtitle": "Stories worth watching",
    "packages": [
      {
        "title": "Reel Creator",
        "price": "₹5,999",
        "unit": "4 videos",
        "description": "Edited short-form content",
        "features": [
          "4 scripts and concepts",
          "4 edits up to 60 seconds",
          "Captions and 4 Reel covers",
          "Client-supplied footage"
        ],
        "note": "No filming or paid promotion."
      },
      {
        "title": "Reel Shoot Day",
        "price": "₹8,999",
        "unit": "project",
        "description": "One session, four Reels",
        "features": [
          "1 mobile shoot, up to 2 hours",
          "One accessible location",
          "4 scripts and edited Reels",
          "Captions included"
        ],
        "note": "Crew and travel subject to quote."
      },
      {
        "title": "YouTube Growth",
        "price": "₹8,999",
        "unit": "month",
        "description": "Channel content optimisation",
        "features": [
          "Channel management",
          "Optimise 4 supplied videos",
          "4 premium thumbnails",
          "10 topics and monthly analytics"
        ],
        "note": "Finished videos supplied by client."
      },
      {
        "title": "Video Campaign",
        "price": "₹24,999+",
        "unit": "project",
        "description": "A polished promotional story",
        "features": [
          "Concept and production planning",
          "Professional shoot and editing",
          "1 hero video with agreed derivatives",
          "Milestone-based delivery"
        ],
        "note": "Final price after production brief."
      }
    ]
  },
  {
    "id": "paid-advertising",
    "title": "Google & Meta Advertising",
    "subtitle": "Attention into action",
    "packages": [
      {
        "title": "Meta Ads Lite",
        "price": "₹4,999",
        "unit": "month",
        "description": "One focused local campaign",
        "features": [
          "1 account and 1 active campaign",
          "Existing approved creatives",
          "Basic weekly optimisation",
          "Monthly report"
        ],
        "note": "Ad budget up to ₹10,000; media and setup extra."
      },
      {
        "title": "Google Search Lite",
        "price": "₹5,999",
        "unit": "month",
        "description": "Focused search visibility",
        "features": [
          "1 account and 1 Search campaign",
          "Up to 2 ad groups",
          "Keyword refinement and ad copy",
          "Monthly report"
        ],
        "note": "Ad budget up to ₹10,000; media and tracking setup extra."
      },
      {
        "title": "Meta Ads Essential",
        "price": "₹7,999",
        "unit": "month",
        "description": "Facebook and Instagram ads",
        "features": [
          "1 ad account",
          "Up to 2 active campaigns",
          "2 image ad creatives each month",
          "Monthly performance report"
        ],
        "note": "Ad spend and initial setup extra; media budget up to ₹30,000/month."
      },
      {
        "title": "Google Search Essential",
        "price": "₹8,999",
        "unit": "month",
        "description": "Reach search-intent buyers",
        "features": [
          "1 Google Ads account",
          "Up to 2 Search campaigns",
          "Copy for up to 4 ad groups",
          "Monthly optimisation report"
        ],
        "note": "Ad spend and tracking setup extra; media budget up to ₹30,000/month."
      },
      {
        "title": "Dual-Channel Ads",
        "price": "₹14,999+",
        "unit": "month",
        "description": "Coordinated Google and Meta",
        "features": [
          "Google and Meta management",
          "Defined campaign limits",
          "Aligned messaging and reporting",
          "Monthly strategy review"
        ],
        "note": "Creative quantities agreed in the proposal."
      },
      {
        "title": "Advanced Performance",
        "price": "₹24,999+",
        "unit": "month",
        "description": "Higher-complexity campaigns",
        "features": [
          "Multi-campaign optimisation",
          "Audience and keyword refinement",
          "Creative testing programme",
          "Conversion-led reporting"
        ],
        "note": "Custom scope after audit."
      }
    ]
  },
  {
    "id": "seo-discovery",
    "title": "SEO & Search Visibility",
    "subtitle": "Be found where intent begins",
    "packages": [
      {
        "title": "Google Maps Lite",
        "price": "₹3,999",
        "unit": "month",
        "description": "Essential local presence",
        "features": [
          "One verified profile",
          "2 profile posts per month",
          "Basic business information updates",
          "Monthly visibility summary"
        ],
        "note": "Verification and multi-location work extra."
      },
      {
        "title": "Google Maps Visibility",
        "price": "₹5,999",
        "unit": "month",
        "description": "Local search discovery",
        "features": [
          "Google Business Profile upkeep",
          "4 profile posts per month",
          "Local optimisation priorities",
          "Monthly visibility report"
        ],
        "note": "Verification and approvals not assured."
      },
      {
        "title": "SEO Foundation",
        "price": "₹8,999",
        "unit": "month",
        "description": "Healthy search baseline",
        "features": [
          "One website",
          "Up to 4 priority page optimisations per month",
          "Keyword and issue monitoring",
          "Monthly progress report"
        ],
        "note": "New articles and major development extra."
      },
      {
        "title": "SEO Growth",
        "price": "₹14,999",
        "unit": "month",
        "description": "Improve depth and coverage",
        "features": [
          "Expanded SEO strategy",
          "Agreed page optimisation schedule",
          "Technical and content priorities",
          "Monthly performance review"
        ],
        "note": "Scope confirmed after website audit."
      },
      {
        "title": "SEO Authority",
        "price": "₹29,999+",
        "unit": "month",
        "description": "Advanced search optimisation",
        "features": [
          "Advanced technical and content plan",
          "Comprehensive optimisation scope",
          "Search performance analysis",
          "Strategic review and reporting"
        ],
        "note": "No guaranteed rankings or traffic."
      }
    ]
  },
  {
    "id": "web-development",
    "title": "Website & E-commerce Development",
    "subtitle": "Make the first click count",
    "packages": [
      {
        "title": "Digital One-Page",
        "price": "₹4,999",
        "unit": "project",
        "description": "Clean online introduction",
        "features": [
          "Single responsive web page",
          "Core business details and CTA",
          "Client-provided content",
          "Basic deployment assistance"
        ],
        "note": "Domain and hosting extra."
      },
      {
        "title": "Business Starter",
        "price": "₹9,999",
        "unit": "project",
        "description": "Professional online foundation",
        "features": [
          "Up to 5 responsive pages",
          "Contact and WhatsApp CTA",
          "Basic on-page SEO setup",
          "Standard design framework"
        ],
        "note": "Content and assets supplied by client."
      },
      {
        "title": "Business Professional",
        "price": "₹19,999",
        "unit": "project",
        "description": "A stronger enquiry journey",
        "features": [
          "Up to 10 responsive pages",
          "Customised visual presentation",
          "Enquiry forms and analytics",
          "Technical SEO fundamentals"
        ],
        "note": "Complex CMS and integrations extra."
      },
      {
        "title": "Premium & E-commerce",
        "price": "₹39,999+",
        "unit": "project",
        "description": "Corporate sites and stores",
        "features": [
          "Corporate or store development",
          "Defined page or product scope",
          "Standard payment/store integration",
          "Planning, QA and handover"
        ],
        "note": "Custom platforms from ₹99,999."
      }
    ]
  },
  {
    "id": "marketplaces",
    "title": "Amazon & Flipkart Seller Services",
    "subtitle": "Your products. Better managed.",
    "packages": [
      {
        "title": "Seller Account Launch",
        "price": "₹4,999",
        "unit": "one-time",
        "description": "Amazon OR Flipkart",
        "features": [
          "Registration and onboarding guidance",
          "Basic seller profile setup",
          "Initial policy and category checklist",
          "Up to 10 standard product listings"
        ],
        "note": "Platform approval, GST and seller fees depend on the platform."
      },
      {
        "title": "Marketplace Account Care",
        "price": "₹5,999",
        "unit": "month",
        "description": "Amazon OR Flipkart",
        "features": [
          "Up to 20 listing updates per month",
          "Listing, stock and price coordination",
          "Account-health issue follow-up",
          "Monthly seller performance report"
        ],
        "note": "Client handles fulfilment and customer orders."
      },
      {
        "title": "Marketplace Growth",
        "price": "₹11,999",
        "unit": "month",
        "description": "Amazon OR Flipkart",
        "features": [
          "Up to 30 listing optimisations",
          "Marketplace campaign management",
          "Catalogue and account review",
          "Biweekly performance insights"
        ],
        "note": "Sponsored ad spend excluded."
      },
      {
        "title": "Amazon + Flipkart Partner",
        "price": "₹17,999",
        "unit": "month",
        "description": "Manage both marketplaces",
        "features": [
          "Account care on both platforms",
          "Up to 40 combined listing updates",
          "Basic promotion coordination",
          "Consolidated monthly reporting"
        ],
        "note": "Ads and advanced design quoted extra."
      }
    ]
  },
  {
    "id": "customer-communication",
    "title": "WhatsApp & Email Marketing",
    "subtitle": "Permission-based communication",
    "packages": [
      {
        "title": "WhatsApp Lite",
        "price": "₹2,999",
        "unit": "month",
        "description": "One focused customer campaign",
        "features": [
          "1 approved campaign per month",
          "Copywriting using existing assets",
          "Scheduling and execution",
          "Basic delivery report"
        ],
        "note": "Existing official platform and consented list required; up to 1,000 recipients; messaging fees extra."
      },
      {
        "title": "WhatsApp Campaign Care",
        "price": "₹4,999",
        "unit": "month",
        "description": "Consent-based communication",
        "features": [
          "2 approved campaigns per month",
          "Copywriting and basic segmentation",
          "Scheduling and execution",
          "Monthly report"
        ],
        "note": "Existing official platform and consented list required; up to 2,000 recipients per campaign; messaging and platform fees extra."
      },
      {
        "title": "WhatsApp Platform Setup",
        "price": "₹4,999+",
        "unit": "one-time",
        "description": "Platform onboarding",
        "features": [
          "Official provider selection and onboarding",
          "Business number configuration assistance",
          "Up to 3 initial template submissions",
          "Testing and operational handover"
        ],
        "note": "Provider fees extra; approval not guaranteed."
      },
      {
        "title": "Email Marketing Essentials",
        "price": "₹5,999",
        "unit": "month",
        "description": "Stay in touch with your audience",
        "features": [
          "Client-owned sending platform",
          "2 newsletter copy drafts",
          "Campaign setup and scheduling",
          "Monthly performance report"
        ],
        "note": "Up to 2,000 consented recipients per campaign; software fees extra."
      },
      {
        "title": "Nurture & Automation",
        "price": "Custom quotation",
        "unit": "project",
        "description": "Better follow-up journeys",
        "features": [
          "Welcome or reminder sequences",
          "Segmentation and routing",
          "CRM and messaging integration",
          "Testing and workflow documentation"
        ],
        "note": "Defined workflows quoted separately."
      }
    ]
  },
  {
    "id": "crm-automation",
    "title": "CRM, AI & Business Automation",
    "subtitle": "Systems behind growth",
    "packages": [
      {
        "title": "CRM Starter",
        "price": "₹9,999",
        "unit": "one-time",
        "description": "Organise opportunities",
        "features": [
          "CRM account and sales pipeline",
          "Lead capture form",
          "Lead-source tracking",
          "Basic team handover"
        ],
        "note": "Software subscriptions extra."
      },
      {
        "title": "Lead Automation",
        "price": "₹14,999+",
        "unit": "one-time",
        "description": "Reduce manual follow-ups",
        "features": [
          "Defined lead-routing process",
          "Follow-up reminders",
          "Basic workflow integration",
          "Tested handover and documentation"
        ],
        "note": "One agreed workflow scope."
      },
      {
        "title": "Website AI Assistant",
        "price": "₹14,999+",
        "unit": "project",
        "description": "Answer common questions",
        "features": [
          "Knowledge-base preparation",
          "Chatbot setup and integration",
          "Testing of key scenarios",
          "Admin handover"
        ],
        "note": "AI API usage billed separately."
      },
      {
        "title": "Business Automation",
        "price": "₹39,999+",
        "unit": "project",
        "description": "Connect operational systems",
        "features": [
          "Workflow discovery and design",
          "Multi-step integrations",
          "Testing and exception handling",
          "Documentation and handover"
        ],
        "note": "Custom estimate after discovery."
      }
    ]
  },
  {
    "id": "branding-growth",
    "title": "Branding & Growth Partnerships",
    "subtitle": "Build for the long term",
    "packages": [
      {
        "title": "Brand Starter",
        "price": "₹4,999",
        "unit": "project",
        "description": "Consistent visual beginning",
        "features": [
          "Basic professional logo design",
          "Brand colour palette",
          "Common logo export formats",
          "Defined revision round"
        ],
        "note": "Strategy workshop not included."
      },
      {
        "title": "Brand Identity Pro",
        "price": "₹9,999",
        "unit": "project",
        "description": "Distinctive brand identity",
        "features": [
          "Professional logo identity",
          "Typography and colour system",
          "Mini brand identity guide",
          "Core brand assets"
        ],
        "note": "Trademarks and licensing extra."
      },
      {
        "title": "Business Growth Partner",
        "price": "₹29,999",
        "unit": "month",
        "description": "Integrated digital operations",
        "features": [
          "Meta and Google Search management",
          "1 organic social channel and 8 posts",
          "2 Reel edits and basic SEO",
          "Consolidated report and review"
        ],
        "note": "Ad spend and setup excluded."
      },
      {
        "title": "Custom Growth Partnership",
        "price": "Custom quotation",
        "unit": "project",
        "description": "Complex multi-team needs",
        "features": [
          "Cross-channel growth strategy",
          "Custom technology and analytics",
          "Automation or commerce options",
          "Defined reporting and ownership"
        ],
        "note": "Scope and fee agreed after discovery."
      }
    ]
  }
];

export const marketplaceExtras = [
  { title: 'Product listing & catalogue optimisation', price: 'From ₹249 / SKU' },
  { title: 'Marketplace advertising management', price: 'From ₹5,999 / month per platform' },
] as const;
