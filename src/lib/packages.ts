export type ServicePackage = {
  title: string; price: string; unit: string; description: string;
  features: string[]; note: string;
};
export type PackageGroup = {
  id: string; title: string; subtitle: string; packages: ServicePackage[];
};
/** Public client-facing package data transcribed from the approved 2027 PDF catalogue. */
export const packageGroups: PackageGroup[] = [
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
        "price": "₹12,999",
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
        "price": "₹18,999",
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
        "price": "₹18,999",
        "unit": "month",
        "description": "Content and paid lead campaigns",
        "features": [
          "1 managed organic social channel",
          "8 static creatives per month",
          "Meta Ads: up to 2 campaigns",
          "2 ad creatives and lead report"
        ],
        "note": "Ad spend and initial setup are extra."
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
        "price": "₹8,499",
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
        "price": "₹11,999",
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
        "price": "₹12,999",
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
        "title": "Meta Ads Essential",
        "price": "₹9,999",
        "unit": "month",
        "description": "Facebook and Instagram ads",
        "features": [
          "1 ad account",
          "Up to 2 active campaigns",
          "2 image ad creatives each month",
          "Monthly performance report"
        ],
        "note": "Ad spend and initial setup extra."
      },
      {
        "title": "Google Search Essential",
        "price": "₹10,999",
        "unit": "month",
        "description": "Reach search-intent buyers",
        "features": [
          "1 Google Ads account",
          "Up to 2 Search campaigns",
          "Copy for up to 4 ad groups",
          "Monthly optimisation report"
        ],
        "note": "Ad spend and tracking setup extra."
      },
      {
        "title": "Dual-Channel Ads",
        "price": "₹18,999+",
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
        "price": "₹29,999+",
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
        "title": "Google Maps Visibility",
        "price": "₹6,999",
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
        "price": "₹11,999",
        "unit": "month",
        "description": "Healthy search baseline",
        "features": [
          "Ongoing basic SEO work",
          "Priority on-page improvements",
          "Keyword and issue monitoring",
          "Monthly progress report"
        ],
        "note": "New articles quoted separately."
      },
      {
        "title": "SEO Growth",
        "price": "₹19,999",
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
        "price": "₹34,999",
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
        "price": "₹12,999",
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
        "price": "₹24,999",
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
        "price": "₹49,999+",
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
        "price": "₹5,999",
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
        "price": "₹7,999",
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
        "price": "₹14,999",
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
        "price": "₹22,999",
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
        "title": "WhatsApp Campaign Care",
        "price": "₹6,999",
        "unit": "month",
        "description": "Consent-based communication",
        "features": [
          "2 approved campaign messages",
          "Copywriting and scheduling",
          "Basic campaign coordination",
          "Monthly report"
        ],
        "note": "Platform messaging fees extra."
      },
      {
        "title": "WhatsApp Platform Setup",
        "price": "₹4,999+",
        "unit": "one-time",
        "description": "Platform onboarding",
        "features": [
          "Account setup guidance",
          "Template submission support",
          "Basic messaging configuration",
          "Operational handover"
        ],
        "note": "Provider approval not guaranteed."
      },
      {
        "title": "Email Marketing Essentials",
        "price": "₹8,999",
        "unit": "month",
        "description": "Stay in touch with your audience",
        "features": [
          "Client-owned sending platform",
          "2 newsletter copy drafts",
          "Campaign setup and scheduling",
          "Monthly performance report"
        ],
        "note": "Sending software and list costs extra."
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
        "price": "₹14,999",
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
        "price": "₹19,999+",
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
        "price": "₹19,999+",
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
        "price": "₹49,999+",
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
        "price": "₹5,999",
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
        "price": "₹11,999",
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
        "price": "₹34,999",
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
