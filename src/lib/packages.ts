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
    "title": "Integrated Business Growth Packages",
    "subtitle": "One growth partner. Every industry. Every stage. Standardised deliverables, strategies tailored to your business.",
    "packages": [
      {
        "title": "Growth Essential",
        "price": "₹9,999",
        "unit": "month",
        "description": "Establish your digital presence",
        "features": [
          "Instagram + Facebook OR one LinkedIn company page/personal profile",
          "8 branded creatives and 2 short-form edits from supplied footage for Meta OR 8 LinkedIn posts for LinkedIn",
          "Content planning, captions and scheduling",
          "Basic Google Business Profile updates where applicable (2 updates/month)",
          "Monthly performance report"
        ],
        "note": "One brand/location; LinkedIn personal publishing via client-approved workflow; filming and paid advertising excluded."
      },
      {
        "title": "Growth Professional",
        "price": "₹19,999",
        "unit": "month",
        "description": "Strengthen your brand and grow consistently",
        "features": [
          "Instagram and Facebook management",
          "12 branded creatives and 6 edited short-form videos",
          "1 local mobile shoot up to 4 hours",
          "Google Business Profile management (4 updates/month) or equivalent agreed visibility activities",
          "Content strategy, promotional planning and monthly performance review"
        ],
        "note": "One brand/location; ad management, extra travel and professional production excluded. LinkedIn or YouTube substitutions/additions quoted separately."
      },
      {
        "title": "Growth Premium",
        "price": "₹29,999",
        "unit": "month",
        "description": "Integrated customer acquisition and retention",
        "features": [
          "Instagram and Facebook management",
          "12 branded creatives and 8 edited short-form videos",
          "1 local mobile shoot up to 4 hours",
          "Local SEO and visibility management (one profile or agreed equivalent)",
          "Meta OR Google Ads: up to 2 active campaigns",
          "2 WhatsApp marketing campaigns",
          "Acquisition and retention strategy and integrated monthly report"
        ],
        "note": "One brand/location; ad budget up to ₹15,000/month; existing official WhatsApp platform and consented list up to 2,000 recipients per campaign required. Media, platform, setup, extra travel and professional production excluded. LinkedIn or YouTube substitutions/additions quoted separately."
      },
      {
        "title": "Growth Enterprise",
        "price": "Custom pricing",
        "unit": "agreement",
        "description": "Build, transform and scale",
        "features": [
          "Custom strategy across Instagram, Facebook, LinkedIn and/or YouTube",
          "Advanced SEO and paid advertising",
          "Website and application development options",
          "CRM, automation and AI solutions",
          "Advanced analytics and defined account management"
        ],
        "note": "Services selected and quoted after discovery; scope, timelines, fees and support agreed in writing."
      }
    ]
  },
  {
    "id": "social-media",
    "title": "Instagram & Facebook Management",
    "subtitle": "Meta organic marketing: discovery, engagement, local community and enquiries",
    "packages": [
      {
        "title": "Meta Starter",
        "price": "₹5,999",
        "unit": "month",
        "description": "Establish a consistent digital presence",
        "features": [
          "Instagram and Facebook management",
          "8 branded static creatives",
          "Initial profile and bio optimisation",
          "Captions, hashtags, calendar and scheduling",
          "Monthly performance report"
        ],
        "note": "Unique monthly assets shared across Instagram and Facebook, adapted by platform; client supplies footage; filming and paid ads excluded unless specified."
      },
      {
        "title": "Meta Growth",
        "price": "₹9,999",
        "unit": "month",
        "description": "Build reach and audience engagement",
        "features": [
          "Instagram and Facebook management",
          "12 static creatives or carousels",
          "4 edited Reels from supplied footage",
          "Platform-specific content strategy",
          "8 Story adaptations",
          "Scheduling, publishing and monthly analytics"
        ],
        "note": "Unique monthly assets shared across Instagram and Facebook, adapted by platform; client supplies footage; filming and paid ads excluded unless specified."
      },
      {
        "title": "Meta Pro",
        "price": "₹14,999",
        "unit": "month",
        "description": "Accelerate brand visibility",
        "features": [
          "Instagram and Facebook management",
          "16 static creatives or carousels",
          "6 edited Reels from supplied footage",
          "12 Story adaptations",
          "Advanced content research, Reel concepts and short scripts",
          "Basic comment monitoring",
          "Monthly strategy review and reporting"
        ],
        "note": "Unique monthly assets shared across Instagram and Facebook, adapted by platform; client supplies footage; filming and paid ads excluded unless specified."
      },
      {
        "title": "Lead Accelerator",
        "price": "₹14,999",
        "unit": "month",
        "description": "Content and paid lead campaigns",
        "features": [
          "Instagram OR Facebook organic management",
          "6 static creatives per month",
          "1 active Meta campaign",
          "1 ad creative and monthly report"
        ],
        "note": "Ad spend and tracking setup extra; media budget up to ₹15,000/month."
      }
    ]
  },
  {
    "id": "linkedin-marketing",
    "title": "LinkedIn Marketing & Management",
    "subtitle": "Thought leadership, professional credibility and B2B visibility",
    "packages": [
      {
        "title": "LinkedIn Essential",
        "price": "₹5,999",
        "unit": "month",
        "description": "Establish professional credibility",
        "features": [
          "1 company page OR personal profile",
          "Initial profile optimisation",
          "8 professional posts per month",
          "Industry research, copywriting and graphic design",
          "Publishing and monthly report"
        ],
        "note": "One company page OR personal profile; client-approved publishing and permitted access only. Ads, outreach and Sales Navigator excluded."
      },
      {
        "title": "LinkedIn Growth",
        "price": "₹9,999",
        "unit": "month",
        "description": "Build industry authority",
        "features": [
          "1 company page OR personal profile",
          "12 professional posts per month",
          "Up to 4 document carousels within post allocation",
          "Thought leadership, industry insights and case studies",
          "Keyword and hashtag optimisation",
          "Monthly performance analysis"
        ],
        "note": "One company page OR personal profile; client-approved publishing and permitted access only. Ads, outreach and Sales Navigator excluded."
      },
      {
        "title": "LinkedIn Authority",
        "price": "₹14,999",
        "unit": "month",
        "description": "Corporate and leadership visibility",
        "features": [
          "Company page AND one founder profile",
          "16 posts shared across both accounts",
          "Up to 4 document carousels within post allocation",
          "Founder thought leadership and 1 long-form article",
          "Case studies, storytelling and basic engagement monitoring",
          "Monthly strategy review"
        ],
        "note": "Client-approved publishing and permitted access only. Ads, outreach and Sales Navigator excluded."
      }
    ]
  },
  {
    "id": "youtube-marketing",
    "title": "YouTube Channel Management & Growth",
    "subtitle": "Content discovery, click-through rate, watch time and audience retention",
    "packages": [
      {
        "title": "YouTube Essential",
        "price": "₹5,999",
        "unit": "month",
        "description": "Professional channel management",
        "features": [
          "1 YouTube channel and initial channel optimisation",
          "8 researched content topics per month",
          "SEO for 4 supplied finished videos",
          "4 custom thumbnails",
          "Titles, descriptions, publishing and monthly analytics"
        ],
        "note": "Client supplies finished long-form videos; filming, advanced animation and paid promotion excluded."
      },
      {
        "title": "YouTube Growth",
        "price": "₹9,999",
        "unit": "month",
        "description": "Improve discovery and subscriber potential",
        "features": [
          "1 YouTube channel and 12 researched topics",
          "4 long-form scripts up to 1,200 words each",
          "SEO and thumbnails for 4 supplied finished videos",
          "4 edited Shorts from supplied footage",
          "Playlist and end-screen optimisation",
          "CTR, retention and monthly reporting"
        ],
        "note": "Client supplies finished long-form videos; filming, advanced animation and paid promotion excluded."
      },
      {
        "title": "YouTube Pro",
        "price": "₹19,999",
        "unit": "month",
        "description": "End-to-end content development from supplied footage",
        "features": [
          "1 YouTube channel and 16 researched topics",
          "4 long-form scripts up to 1,200 words each",
          "4 standard long-form edits up to 10 minutes each",
          "4 custom thumbnails and 8 edited Shorts",
          "SEO, chapters and publishing",
          "Content packaging, retention strategy and monthly review"
        ],
        "note": "Client supplies footage. Filming, presenters, advanced motion graphics and paid promotion excluded."
      }
    ]
  },
  {
    "id": "combined-social",
    "title": "Combined Social Media Growth",
    "subtitle": "Separate platform strategies, shared production efficiencies and consolidated reporting",
    "packages": [
      {
        "title": "Social Authority",
        "price": "₹14,999",
        "unit": "month",
        "description": "Instagram + Facebook + LinkedIn",
        "features": [
          "10 Meta creatives and 4 edited Reels",
          "8 dedicated LinkedIn posts",
          "Separate platform strategies",
          "Profile optimisation, publishing and consolidated report"
        ],
        "note": "One brand; client supplies footage and finished long-form videos where applicable. Filming, long-form editing, paid ads and daily inbox management excluded."
      },
      {
        "title": "Social & Video Growth",
        "price": "₹17,999",
        "unit": "month",
        "description": "Instagram + Facebook + YouTube",
        "features": [
          "10 Meta creatives",
          "6 unique short-form edits adapted as Reels and Shorts",
          "4 long-form YouTube scripts up to 1,200 words each",
          "SEO and thumbnails for 4 supplied finished videos",
          "Platform-specific strategies, publishing and consolidated reporting"
        ],
        "note": "One brand; client supplies footage and finished long-form videos where applicable. Filming, long-form editing, paid ads and daily inbox management excluded."
      },
      {
        "title": "Professional Influence",
        "price": "₹17,999",
        "unit": "month",
        "description": "LinkedIn + YouTube",
        "features": [
          "12 LinkedIn posts",
          "4 long-form YouTube scripts up to 1,200 words each",
          "SEO and thumbnails for 4 supplied finished videos",
          "4 edited YouTube Shorts",
          "Thought leadership strategy, publishing and consolidated reporting"
        ],
        "note": "One brand; client supplies footage and finished long-form videos where applicable. Filming, long-form editing, paid ads and daily inbox management excluded."
      },
      {
        "title": "360° Social Growth",
        "price": "₹24,999",
        "unit": "month",
        "description": "Instagram + Facebook + LinkedIn + YouTube",
        "features": [
          "12 Meta creatives and 12 dedicated LinkedIn posts",
          "8 unique short-form edits adapted as Reels and Shorts",
          "4 long-form YouTube scripts up to 1,200 words each",
          "SEO and thumbnails for 4 supplied finished videos",
          "Individual platform strategies and unified calendar",
          "Cross-platform analytics and strategy review"
        ],
        "note": "One brand; client supplies footage and finished long-form videos where applicable. Filming, long-form editing, paid ads and daily inbox management excluded."
      }
    ]
  },
  {
    "id": "video-youtube",
    "title": "Content & Video Production",
    "subtitle": "Independent creative production, filming, scripts and editing",
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
      },
      {
        "title": "YouTube Thumbnail Pack",
        "price": "₹1,999",
        "unit": "4 thumbnails",
        "description": "Custom thumbnail design",
        "features": [
          "4 custom thumbnails",
          "Client supplies images or approved assets"
        ],
        "note": "One consolidated revision round; no channel management."
      },
      {
        "title": "YouTube Script Pack",
        "price": "₹3,999",
        "unit": "4 scripts",
        "description": "Research-led long-form scripts",
        "features": [
          "4 scripts up to 1,200 words each",
          "Hooks and structured narrative"
        ],
        "note": "Client-approved topics; no filming or editing."
      },
      {
        "title": "YouTube Video Editing",
        "price": "₹2,499+",
        "unit": "video",
        "description": "Standard long-form editing",
        "features": [
          "1 edit up to 10 minutes",
          "Client-supplied footage",
          "Basic cuts, audio and text overlays"
        ],
        "note": "Advanced animation, extensive raw footage and complex edits quoted separately."
      },
      {
        "title": "LinkedIn Carousel Pack",
        "price": "₹2,999",
        "unit": "4 carousels",
        "description": "Professional document carousels",
        "features": [
          "4 document carousels up to 6 slides each",
          "Copy and branded design"
        ],
        "note": "Client supplies source material; no publishing."
      }
    ]
  },
  {
    "id": "paid-advertising",
    "title": "Paid Advertising — Meta, Google, LinkedIn & YouTube",
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
        "title": "YouTube Ads Essential",
        "price": "₹6,999",
        "unit": "month",
        "description": "Video advertising management",
        "features": [
          "1 Google Ads account and 1 active YouTube campaign",
          "Audience targeting and optimisation",
          "Approved client-supplied video assets",
          "Monthly performance report"
        ],
        "note": "Media budget and tracking setup agreed separately."
      },
      {
        "title": "LinkedIn Ads Essential",
        "price": "₹9,999",
        "unit": "month",
        "description": "Professional audience advertising",
        "features": [
          "1 LinkedIn Ads account and 1 active campaign",
          "Professional audience targeting and optimisation",
          "Approved client-supplied ad assets",
          "Monthly performance report"
        ],
        "note": "Media budget and tracking setup agreed separately."
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
    "title": "Business & Corporate Websites",
    "subtitle": "Standard content pages, defined design scope and conversion-focused websites.",
    "packages": [
      {
        "title": "Digital One-Page",
        "price": "₹4,999",
        "unit": "project",
        "description": "Establish your online presence",
        "features": [
          "1 responsive content page; up to 6 standard sections",
          "Standard design framework",
          "Business details, WhatsApp and basic contact form",
          "Basic on-page SEO and deployment assistance",
          "1 design revision round; 15 days bug support"
        ],
        "note": "Client supplies content and assets. Analytics, CMS and custom functionality extra."
      },
      {
        "title": "Business Starter",
        "price": "₹9,999",
        "unit": "project",
        "description": "Professional digital foundation",
        "features": [
          "Up to 5 responsive standard content pages; up to 6 sections per page",
          "Standard branded design",
          "Contact form and WhatsApp CTA",
          "Basic on-page and technical SEO, basic analytics",
          "2 revision rounds; 15 days bug support"
        ],
        "note": "Client supplies content and assets. CMS and custom functionality extra."
      },
      {
        "title": "Business Professional",
        "price": "₹19,999",
        "unit": "project",
        "description": "Build credibility and generate enquiries",
        "features": [
          "Up to 10 responsive standard content pages; up to 8 sections per page",
          "Customised design and conversion-focused structure",
          "Enhanced enquiry forms and analytics",
          "Technical SEO, structured data and performance optimisation",
          "2 revision rounds; 30 days bug support"
        ],
        "note": "CMS, advanced integrations and custom functionality extra."
      },
      {
        "title": "Corporate Premium",
        "price": "₹39,999+",
        "unit": "project",
        "description": "Premium digital brand experience",
        "features": [
          "Up to 20 responsive standard content pages; up to 10 sections per page",
          "Premium customised UI/UX",
          "Standard CMS and blog integration",
          "Enhanced analytics, technical SEO and structured data",
          "Performance optimisation, training and handover",
          "3 revision rounds; 30 days bug support"
        ],
        "note": "Complex CMS, custom modules and integrations separately quoted."
      }
    ]
  },
  {
    "id": "ecommerce-development",
    "title": "E-commerce Development",
    "subtitle": "Launch a store or build a tailored commerce platform.",
    "packages": [
      {
        "title": "E-commerce Starter",
        "price": "₹49,999+",
        "unit": "project",
        "description": "Launch your first online store",
        "features": [
          "Shopify or WooCommerce; responsive theme customisation",
          "Up to 25 standard product listings",
          "Cart, checkout, one payment gateway and COD",
          "Standard shipping, inventory and order management",
          "Basic product SEO and store management training"
        ],
        "note": "Platform subscriptions, themes, plugins and transaction fees extra."
      },
      {
        "title": "E-commerce Professional",
        "price": "₹79,999+",
        "unit": "project",
        "description": "Grow your retail or D2C brand",
        "features": [
          "Everything in Starter; up to 100 standard product listings",
          "Enhanced storefront, product search, filters and variants",
          "Coupons, customer accounts and standard shipping integration",
          "E-commerce analytics, conversion tracking and abandoned cart configuration",
          "Performance optimisation"
        ],
        "note": "Subject to platform and paid app limitations; complex integrations extra."
      },
      {
        "title": "Custom Commerce",
        "price": "₹1,49,999+",
        "unit": "project",
        "description": "Build a tailored commerce solution",
        "features": [
          "Custom storefront, database and authentication",
          "Administrative dashboard and role-based permissions",
          "Product, inventory, payment and order workflows",
          "Scoped API integrations",
          "Security and functional testing, documentation and handover"
        ],
        "note": "Starting price for a limited single-vendor MVP; final quotation after discovery."
      }
    ]
  },
  {
    "id": "web-applications",
    "title": "Web Applications & SaaS",
    "subtitle": "Scope-based software engineering, priced by modules and business logic rather than page count.",
    "packages": [
      {
        "title": "Custom Web Application MVP",
        "price": "₹99,999+",
        "unit": "project",
        "description": "Turn an idea into a working product",
        "features": [
          "Defined core modules and user journeys",
          "Scoped database and application architecture",
          "Testing and technical handover"
        ],
        "note": "Limited MVP; final scope and price after discovery."
      },
      {
        "title": "Custom CRM & Business Automation",
        "price": "₹1,49,999+",
        "unit": "project",
        "description": "Tailored operational software",
        "features": [
          "Custom workflows, data models and user roles",
          "Scoped dashboards and integrations",
          "Testing and documentation"
        ],
        "note": "Custom-built solution; distinct from standard CRM setup services."
      },
      {
        "title": "Education & LMS Platforms",
        "price": "₹1,49,999+",
        "unit": "project",
        "description": "Digital learning infrastructure",
        "features": [
          "Scoped course and learner modules",
          "User roles and administrative workflows",
          "Testing and handover"
        ],
        "note": "Payments, assessments and advanced modules quoted by scope."
      },
      {
        "title": "Real Estate & Listing Portals",
        "price": "₹1,49,999+",
        "unit": "project",
        "description": "Database-driven listing platforms",
        "features": [
          "Scoped listing templates, search and filters",
          "Administrative listing management",
          "Testing and handover"
        ],
        "note": "Advanced integrations and user workflows quoted separately."
      },
      {
        "title": "Multi-vendor Marketplaces",
        "price": "₹2,49,999+",
        "unit": "project",
        "description": "Connect sellers and buyers",
        "features": [
          "Scoped vendor and buyer modules",
          "Catalogue and transaction workflows",
          "Role-based administration and testing"
        ],
        "note": "Limited initial scope; settlement and compliance requirements assessed separately."
      },
      {
        "title": "SaaS & Subscription Platforms",
        "price": "₹2,49,999+",
        "unit": "project",
        "description": "Build a subscription-based product",
        "features": [
          "Scoped account and subscription workflows",
          "Application modules and database architecture",
          "Testing and documentation"
        ],
        "note": "Final price depends on tenancy, billing and integration requirements."
      },
      {
        "title": "Enterprise Digital Solutions",
        "price": "Custom quotation",
        "unit": "project",
        "description": "Complex business requirements",
        "features": [
          "Discovery and architecture planning",
          "Agreed modules, integrations and security requirements",
          "Milestone-based delivery and handover"
        ],
        "note": "Written scope and commercial proposal after consultation."
      }
    ]
  },
  {
    "id": "website-care",
    "title": "Website & Application Care",
    "subtitle": "Optional recurring maintenance; support hours, response times and exclusions agreed before engagement.",
    "packages": [
      {
        "title": "Website Essential Care",
        "price": "₹999",
        "unit": "month",
        "description": "Basic website monitoring",
        "features": [
          "Basic monitoring and limited technical support"
        ],
        "note": "New functionality and third-party fees extra."
      },
      {
        "title": "Business Website Care",
        "price": "₹2,499",
        "unit": "month",
        "description": "Maintain your business website",
        "features": [
          "Agreed updates, backups and limited content changes"
        ],
        "note": "Support allowance agreed in writing."
      },
      {
        "title": "E-commerce Care",
        "price": "₹4,999+",
        "unit": "month",
        "description": "Store maintenance",
        "features": [
          "Scoped store maintenance and technical support"
        ],
        "note": "Third-party fees and new features extra."
      },
      {
        "title": "Advanced Commerce Care",
        "price": "₹9,999+",
        "unit": "month",
        "description": "Extended commerce support",
        "features": [
          "Extended technical support and agreed optimisation"
        ],
        "note": "Final scope confirmed after review."
      },
      {
        "title": "Custom Application Support",
        "price": "₹14,999+",
        "unit": "month",
        "description": "Scoped application maintenance",
        "features": [
          "Agreed maintenance and technical support"
        ],
        "note": "New modules and development separately quoted."
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
    "title": "Branding & Visual Identity",
    "subtitle": "Build a distinctive and consistent brand",
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
      }
    ]
  }
];

export const marketplaceExtras = [
  { title: 'Product listing & catalogue optimisation', price: 'From ₹249 / SKU' },
  { title: 'Marketplace advertising management', price: 'From ₹5,999 / month per platform' },
] as const;
