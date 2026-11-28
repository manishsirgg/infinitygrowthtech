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
    "title": "Strategic Content & Media Production",
    "subtitle": "Beyond content. Built for impact. Human strategy, AI efficiency and professional execution.",
    "packages": [
      {
        "title": "Single Reel Edit",
        "price": "₹999+",
        "unit": "video",
        "description": "Standard short-form edit",
        "features": [
          "1 edit up to 60 seconds",
          "Basic cuts, captions and audio"
        ],
        "note": "Client supplies usable footage; standard cuts, captions and basic audio only; one consolidated revision. Complex effects, excessive raw footage and rush delivery quoted separately."
      },
      {
        "title": "Reel Editing Starter",
        "price": "₹2,999",
        "unit": "4 videos",
        "description": "Batch short-form editing",
        "features": [
          "4 standard edits up to 60 seconds each",
          "Captions and basic audio"
        ],
        "note": "Client supplies usable footage; standard cuts, captions and basic audio only; one consolidated revision. Complex effects, excessive raw footage and rush delivery quoted separately."
      },
      {
        "title": "Reel Editing Growth",
        "price": "₹5,999",
        "unit": "8 videos",
        "description": "Consistent short-form output",
        "features": [
          "8 standard edits up to 60 seconds each",
          "Captions and basic audio"
        ],
        "note": "Client supplies usable footage; standard cuts, captions and basic audio only; one consolidated revision. Complex effects, excessive raw footage and rush delivery quoted separately."
      },
      {
        "title": "Reel Editing Pro",
        "price": "₹8,999",
        "unit": "12 videos",
        "description": "High-volume short-form output",
        "features": [
          "12 standard edits up to 60 seconds each",
          "Captions and basic audio"
        ],
        "note": "Client supplies usable footage; standard cuts, captions and basic audio only; one consolidated revision. Complex effects, excessive raw footage and rush delivery quoted separately."
      },
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
        "title": "Content Shoot Pro",
        "price": "₹14,999",
        "unit": "project",
        "description": "Batch on-location mobile production",
        "features": [
          "1 mobile shoot up to 4 hours",
          "8 concepts and standard edited Reels up to 60 seconds each",
          "Basic captions"
        ],
        "note": "One agreed location and shot list; travel, studio, models, specialist crew and equipment beyond agreed scope extra."
      },
      {
        "title": "YouTube Script",
        "price": "₹999",
        "unit": "script",
        "description": "Research-led script",
        "features": [
          "1 script up to 1,200 words",
          "Topic research, hook and structure"
        ],
        "note": "Client-approved topic; no editing or filming."
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
        "title": "YouTube Thumbnail Pack",
        "price": "₹1,999",
        "unit": "4 thumbnails",
        "description": "Custom thumbnail design",
        "features": [
          "4 custom thumbnails",
          "Audience and title alignment, CTR-oriented design",
          "Client supplies approved images or assets"
        ],
        "note": "One consolidated revision; no channel management or guaranteed CTR."
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
        "title": "Advanced Video Editing",
        "price": "₹4,999+",
        "unit": "video",
        "description": "Enhanced storytelling and visual support",
        "features": [
          "1 video with agreed duration",
          "Enhanced graphics, visual support and audio treatment"
        ],
        "note": "Complex animation, raw footage volume and licensing quoted separately."
      },
      {
        "title": "YouTube Editing Bundle",
        "price": "₹8,999",
        "unit": "4 videos",
        "description": "Standard long-form editing",
        "features": [
          "4 standard edits up to 10 minutes each",
          "Basic cuts, audio and text overlays"
        ],
        "note": "Client supplies usable footage; standard cuts, text overlays and basic audio only; one consolidated revision. Complex effects, excessive raw footage and rush delivery quoted separately."
      },
      {
        "title": "Podcast Editing",
        "price": "₹3,999+",
        "unit": "episode",
        "description": "Single-camera episode editing",
        "features": [
          "1 episode up to 30 minutes",
          "Basic cuts and audio treatment"
        ],
        "note": "Client supplies footage; multicamera and extensive audio restoration extra."
      },
      {
        "title": "Podcast Repurposing",
        "price": "₹4,999",
        "unit": "6 clips",
        "description": "Turn episodes into short-form content",
        "features": [
          "6 clips up to 60 seconds each from supplied episode",
          "Hook selection and captions"
        ],
        "note": "Client supplies usable footage; standard cuts, captions and basic audio only; one consolidated revision. Complex effects, excessive raw footage and rush delivery quoted separately."
      },
      {
        "title": "Advertising Creative Campaign",
        "price": "₹2,999",
        "unit": "project",
        "description": "Campaign-focused creative development",
        "features": [
          "Audience and offer briefing",
          "Campaign concept and persuasive copy",
          "5 static creative variations",
          "Platform-ready assets"
        ],
        "note": "One campaign and one consolidated revision; no publishing, ads management or media spend."
      },
      {
        "title": "LinkedIn Carousel Pack",
        "price": "₹2,999",
        "unit": "4 carousels",
        "description": "Professional document carousels",
        "features": [
          "4 document carousels up to 6 slides each",
          "Topic research based on approved source material",
          "Professional copy and branded design"
        ],
        "note": "No publishing or account management."
      },
      {
        "title": "AI Promotional Video",
        "price": "₹2,999+",
        "unit": "video",
        "description": "AI-assisted campaign storytelling",
        "features": [
          "1 simple video up to 30 seconds",
          "Concept, basic editing and human quality review"
        ],
        "note": "Premium AI credits, voice licensing and complex sequences extra; approved assets required."
      },
      {
        "title": "AI Product Showcase",
        "price": "₹3,999+",
        "unit": "video",
        "description": "Product-focused visual storytelling",
        "features": [
          "1 short product video up to 30 seconds",
          "Concept and approved product visuals"
        ],
        "note": "Product accuracy subject to client review; premium AI credits extra."
      },
      {
        "title": "AI Presenter / Explainer",
        "price": "₹3,999+",
        "unit": "video",
        "description": "Scripted virtual-presenter content",
        "features": [
          "1 standard avatar video up to 60 seconds",
          "Script and basic branded presentation"
        ],
        "note": "Custom avatars, licensed voices and premium AI credits extra; consent required for likeness use."
      },
      {
        "title": "AI Video Bundle",
        "price": "₹9,999+",
        "unit": "4 videos",
        "description": "Coordinated promotional content",
        "features": [
          "4 simple AI-assisted videos up to 30 seconds each",
          "Concepts and standard editing"
        ],
        "note": "Premium credits, custom avatars and complex animation extra."
      },
      {
        "title": "Product Photography",
        "price": "₹4,999+",
        "unit": "project",
        "description": "Commercial product imagery",
        "features": [
          "Up to 10 simple products",
          "Agreed standard shot list and basic retouching"
        ],
        "note": "One agreed location and shot list; travel, studio, models, specialist crew and equipment beyond agreed scope extra."
      },
      {
        "title": "Personal Branding Photoshoot",
        "price": "₹5,999+",
        "unit": "project",
        "description": "Professional profile and brand imagery",
        "features": [
          "Agreed portrait and lifestyle shot list",
          "Edited image selection"
        ],
        "note": "One agreed location and shot list; travel, studio, models, specialist crew and equipment beyond agreed scope extra."
      },
      {
        "title": "Business Lifestyle Photoshoot",
        "price": "₹7,999+",
        "unit": "project",
        "description": "Authentic business imagery",
        "features": [
          "Team, workplace and customer-facing imagery",
          "Agreed shot list and edited selection"
        ],
        "note": "One agreed location and shot list; travel, studio, models, specialist crew and equipment beyond agreed scope extra."
      },
      {
        "title": "Testimonial Video",
        "price": "₹5,999+",
        "unit": "project",
        "description": "Customer stories",
        "features": [
          "One agreed testimonial shoot",
          "Standard edited testimonial video"
        ],
        "note": "Starting estimate; duration, shot list, equipment, crew, usage rights and revisions agreed in writing. Travel, talent, studio and licensing extra."
      },
      {
        "title": "Product Demonstration Video",
        "price": "₹7,999+",
        "unit": "project",
        "description": "Explain product value visually",
        "features": [
          "Concept and agreed demonstration shot list",
          "One edited product demonstration"
        ],
        "note": "Starting estimate; duration, shot list, equipment, crew, usage rights and revisions agreed in writing. Travel, talent, studio and licensing extra."
      },
      {
        "title": "Business Introduction Video",
        "price": "₹14,999+",
        "unit": "project",
        "description": "Introduce your business and services",
        "features": [
          "Concept, script and agreed shoot",
          "One edited business introduction"
        ],
        "note": "Starting estimate; duration, shot list, equipment, crew, usage rights and revisions agreed in writing. Travel, talent, studio and licensing extra."
      },
      {
        "title": "Corporate Profile Film",
        "price": "₹24,999+",
        "unit": "project",
        "description": "Corporate storytelling",
        "features": [
          "Production planning and agreed professional shoot",
          "One corporate profile film"
        ],
        "note": "Starting estimate; duration, shot list, equipment, crew, usage rights and revisions agreed in writing. Travel, talent, studio and licensing extra."
      },
      {
        "title": "Professional Advertising Campaign",
        "price": "₹24,999+",
        "unit": "project",
        "description": "A polished promotional story",
        "features": [
          "Concept and production planning",
          "Professional shoot and editing",
          "1 hero video with agreed derivatives",
          "Milestone-based delivery"
        ],
        "note": "Starting estimate; duration, shot list, equipment, crew, usage rights and revisions agreed in writing. Travel, talent, studio and licensing extra."
      },
      {
        "title": "Content Essential",
        "price": "₹6,999",
        "unit": "month",
        "description": "Consistent production for small brands",
        "features": [
          "8 branded static creatives",
          "4 standard Reel edits up to 60 seconds each",
          "Basic captions and creative copy",
          "Monthly content planning and platform-ready files"
        ],
        "note": "One brand; client supplies usable footage and approved information. No filming, publishing, account management, paid ads or daily engagement. Premium AI credits and advanced production extra."
      },
      {
        "title": "Content Growth",
        "price": "₹11,999",
        "unit": "month",
        "description": "More content for growing brands",
        "features": [
          "12 branded static creatives",
          "8 standard Reel edits up to 60 seconds each",
          "4 Story adaptations",
          "Content concepts, captions and monthly creative calendar"
        ],
        "note": "One brand; client supplies usable footage and approved information. No filming, publishing, account management, paid ads or daily engagement. Premium AI credits and advanced production extra."
      },
      {
        "title": "Content Pro",
        "price": "₹17,999",
        "unit": "month",
        "description": "High-volume strategic production",
        "features": [
          "16 branded static creatives",
          "12 standard Reel edits up to 60 seconds each",
          "8 Story adaptations and 4 short-form scripts",
          "2 simple AI promotional videos up to 30 seconds each",
          "Monthly creative strategy and platform-ready files"
        ],
        "note": "One brand; client supplies usable footage and approved information. No filming, publishing, account management, paid ads or daily engagement. Premium AI credits and advanced production extra."
      },
      {
        "title": "Content Enterprise",
        "price": "Custom pricing",
        "unit": "agreement",
        "description": "Custom production partnership",
        "features": [
          "High-volume creative production and dedicated workflow",
          "Professional photography, filming and corporate video options",
          "Advanced AI-assisted production and agreed delivery schedules"
        ],
        "note": "Production scope, fees, rights and support agreed in writing; no account management unless contracted."
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
    "title": "SEO & Organic Search Growth",
    "subtitle": "Local discovery, technical foundations and sustainable organic visibility",
    "packages": [
      {
        "title": "Google Maps Essential",
        "price": "₹3,999",
        "unit": "month",
        "description": "Build a stronger local presence",
        "features": [
          "1 Google Business Profile",
          "Initial profile audit and optimisation",
          "Business information and category optimisation",
          "2 profile posts per month",
          "Monthly visibility report"
        ],
        "note": "One verified Google Business Profile; verification, additional locations and paid services extra. No guaranteed rankings or approvals."
      },
      {
        "title": "Google Maps Growth",
        "price": "₹5,999",
        "unit": "month",
        "description": "Strengthen local discovery",
        "features": [
          "Everything in Google Maps Essential",
          "4 profile posts per month in total",
          "Local competitor analysis and keyword monitoring",
          "Review response assistance up to 15 reviews/month",
          "Basic local citation audit",
          "Monthly performance recommendations"
        ],
        "note": "One verified Google Business Profile; verification, additional locations and paid services extra. No guaranteed rankings or approvals. Responses must be truthful and client-approved."
      },
      {
        "title": "SEO Foundation",
        "price": "₹8,999",
        "unit": "month",
        "description": "Establish a healthy search baseline",
        "features": [
          "Initial SEO audit",
          "Up to 15 tracked keywords",
          "Up to 4 page optimisations per month",
          "Google Search Console and GA4 setup assistance",
          "Technical SEO monitoring",
          "Monthly performance report"
        ],
        "note": "One website; major development, extensive technical fixes, paid placements and premium tools extra. Rankings, traffic and conversions are not guaranteed. New articles excluded."
      },
      {
        "title": "SEO Growth",
        "price": "₹14,999",
        "unit": "month",
        "description": "Expand organic search coverage",
        "features": [
          "Up to 30 tracked keywords",
          "Up to 8 page optimisations per month",
          "2 human-reviewed SEO articles up to 800 words each",
          "Competitor and backlink analysis",
          "Internal linking and structured data recommendations",
          "Monthly strategy review"
        ],
        "note": "One website; major development, extensive technical fixes, paid placements and premium tools extra. Rankings, traffic and conversions are not guaranteed."
      },
      {
        "title": "SEO Authority",
        "price": "₹29,999+",
        "unit": "month",
        "description": "Advanced organic growth strategy",
        "features": [
          "Advanced technical SEO",
          "Up to 60 tracked keywords and 15 page optimisations/month within standard scope",
          "4 human-reviewed SEO articles up to 1,000 words each",
          "Content cluster strategy",
          "Authority-building and outreach planning",
          "Advanced analytics and conversion recommendations",
          "Customised implementation roadmap"
        ],
        "note": "One website; major development, extensive technical fixes, paid placements and premium tools extra. Rankings, traffic and conversions are not guaranteed. Final scope after audit."
      }
    ]
  },
  {
    "id": "ai-search-visibility",
    "title": "AI Search Visibility — AEO & GEO",
    "subtitle": "Understand how AI answers discover, describe and recommend your brand. Monitoring and strategic optimisation for ChatGPT and Google AI.",
    "packages": [
      {
        "title": "AI Visibility Track — Weekly",
        "price": "₹7,999",
        "unit": "brand / month",
        "description": "Measure your brand's presence in AI answers",
        "features": [
          "Weekly visibility data refresh",
          "100 brand-specific search prompts monitored",
          "ChatGPT and Google AI visibility tracking",
          "Brand mentions, share of voice and competitor analysis",
          "Sentiment and citation source analysis",
          "Actionable recommendations and monthly IGT review"
        ],
        "note": "One brand; service commencement subject to platform onboarding. AI answers vary; mentions, citations, rankings and sales are not guaranteed. Website implementation, paid editorial placements, third-party publishing, additional human editing and outreach execution quoted separately."
      },
      {
        "title": "AI Visibility Track — Daily",
        "price": "₹10,999",
        "unit": "brand / month",
        "description": "More frequent monitoring for competitive markets",
        "features": [
          "Daily visibility data refresh",
          "100 brand-specific search prompts monitored",
          "ChatGPT and Google AI visibility tracking",
          "Brand mentions, share of voice and competitor analysis",
          "Sentiment and citation source analysis",
          "Actionable recommendations and monthly IGT review"
        ],
        "note": "One brand; service commencement subject to platform onboarding. AI answers vary; mentions, citations, rankings and sales are not guaranteed. Website implementation, paid editorial placements, third-party publishing, additional human editing and outreach execution quoted separately."
      },
      {
        "title": "AI Visibility Growth — Weekly",
        "price": "₹19,999",
        "unit": "brand / month",
        "description": "Monitoring plus content and authority-building workflows",
        "features": [
          "Weekly visibility data refresh",
          "100 brand-specific search prompts monitored",
          "ChatGPT and Google AI visibility tracking",
          "Brand mentions, share of voice and competitor analysis",
          "Sentiment and citation source analysis",
          "Actionable recommendations and monthly IGT review",
          "AI-assisted content workflow: up to 25 draft content pieces per month across agreed formats",
          "Human review of up to 4 priority content drafts per month",
          "Editorial opportunity research and outreach planning",
          "News monitoring and content recommendations",
          "Monthly AEO/GEO optimisation roadmap"
        ],
        "note": "One brand; service commencement subject to platform onboarding. AI answers vary; mentions, citations, rankings and sales are not guaranteed. Website implementation, paid editorial placements, third-party publishing, additional human editing and outreach execution quoted separately."
      },
      {
        "title": "AI Visibility Growth — Daily",
        "price": "₹24,999",
        "unit": "brand / month",
        "description": "Continuous monitoring with strategic content support",
        "features": [
          "Daily visibility data refresh",
          "100 brand-specific search prompts monitored",
          "ChatGPT and Google AI visibility tracking",
          "Brand mentions, share of voice and competitor analysis",
          "Sentiment and citation source analysis",
          "Actionable recommendations and monthly IGT review",
          "AI-assisted content workflow: up to 25 draft content pieces per month across agreed formats",
          "Human review of up to 4 priority content drafts per month",
          "Editorial opportunity research and outreach planning",
          "News monitoring and content recommendations",
          "Monthly AEO/GEO optimisation roadmap"
        ],
        "note": "One brand; service commencement subject to platform onboarding. AI answers vary; mentions, citations, rankings and sales are not guaranteed. Website implementation, paid editorial placements, third-party publishing, additional human editing and outreach execution quoted separately."
      }
    ]
  },
  {
    "id": "unified-search",
    "title": "Unified Search Visibility — SEO, AEO & GEO",
    "subtitle": "Combine organic search optimisation with AI visibility monitoring and strategic content",
    "packages": [
      {
        "title": "Unified Search Essential",
        "price": "₹15,999",
        "unit": "month",
        "description": "SEO Foundation + AI Visibility Track Weekly",
        "features": [
          "Full SEO Foundation scope: 15 tracked keywords and 4 page optimisations/month",
          "AI Visibility Track: 100 prompts across ChatGPT and Google AI, weekly refresh",
          "Brand mentions, competitors, sentiment and citations",
          "Combined monthly review"
        ],
        "note": "One brand and one website. AI monitoring starts subject to onboarding; weekly/daily refers to refresh frequency. All fees monthly. Paid placements, additional human editing, outreach execution, major development and third-party publishing extra. No guaranteed rankings, citations or sales."
      },
      {
        "title": "Unified Search Growth",
        "price": "₹21,999",
        "unit": "month",
        "description": "SEO Growth + AI Visibility Track Weekly",
        "features": [
          "Full SEO Growth scope: 30 tracked keywords, 8 page optimisations and 2 SEO articles/month",
          "AI Visibility Track: 100 prompts, weekly refresh",
          "Brand mentions, competitors, sentiment and citations",
          "Combined monthly strategy review"
        ],
        "note": "One brand and one website. AI monitoring starts subject to onboarding; weekly/daily refers to refresh frequency. All fees monthly. Paid placements, additional human editing, outreach execution, major development and third-party publishing extra. No guaranteed rankings, citations or sales."
      },
      {
        "title": "Unified Search Pro",
        "price": "₹32,999",
        "unit": "month",
        "description": "SEO Growth + AI Visibility Growth Weekly",
        "features": [
          "Full SEO Growth scope: 30 tracked keywords, 8 page optimisations and 2 SEO articles/month",
          "AI Visibility Growth: 100 prompts, weekly refresh",
          "Up to 25 AI-assisted drafts/month across agreed formats; up to 4 priority drafts human-reviewed",
          "Editorial opportunity research, news monitoring and outreach planning",
          "Combined optimisation roadmap"
        ],
        "note": "One brand and one website. AI monitoring starts subject to onboarding; weekly/daily refers to refresh frequency. All fees monthly. Paid placements, additional human editing, outreach execution, major development and third-party publishing extra. No guaranteed rankings, citations or sales. SEO articles and AI draft allowances are coordinated; no duplicate billing or promise of 25 published articles."
      },
      {
        "title": "Unified Search Authority",
        "price": "₹49,999+",
        "unit": "month",
        "description": "SEO Authority + AI Visibility Growth Daily",
        "features": [
          "SEO Authority standard scope: 60 tracked keywords, 15 page optimisations and 4 SEO articles/month",
          "AI Visibility Growth: 100 prompts, daily refresh",
          "Up to 25 AI-assisted drafts/month; up to 4 priority drafts human-reviewed",
          "Authority-building, editorial opportunity research and outreach planning",
          "Combined reporting and optimisation roadmap"
        ],
        "note": "One brand and one website. AI monitoring starts subject to onboarding; weekly/daily refers to refresh frequency. All fees monthly. Paid placements, additional human editing, outreach execution, major development and third-party publishing extra. No guaranteed rankings, citations or sales. Final fee after audit; SEO articles and AI drafts coordinated."
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
    "title": "Marketplace Management & Seller Growth",
    "subtitle": "Amazon and Flipkart onboarding, catalogue optimisation and account growth",
    "packages": [
      {
        "title": "Seller Account Launch",
        "price": "₹4,999",
        "unit": "one-time",
        "description": "Amazon OR Flipkart",
        "features": [
          "Seller registration and documentation assistance",
          "Seller profile configuration",
          "Up to 10 standard product listings",
          "Initial category and policy checklist",
          "Basic seller dashboard training"
        ],
        "note": "Client remains responsible for inventory, fulfilment, orders, returns, tax, product compliance, shipping and platform fees. Platform eligibility and approvals not guaranteed."
      },
      {
        "title": "Marketplace Essential",
        "price": "₹5,999",
        "unit": "month",
        "description": "Amazon OR Flipkart",
        "features": [
          "Up to 20 listing updates/month",
          "Product title and description optimisation",
          "Stock and pricing coordination",
          "Account health monitoring and basic support case assistance",
          "Monthly performance report"
        ],
        "note": "Client remains responsible for inventory, fulfilment, orders, returns, tax, product compliance, shipping and platform fees. Platform eligibility and approvals not guaranteed. Ads excluded."
      },
      {
        "title": "Marketplace Growth",
        "price": "₹11,999",
        "unit": "month",
        "description": "Amazon OR Flipkart",
        "features": [
          "Up to 30 listing optimisations/month",
          "Competitor and keyword research",
          "Up to 2 active sponsored ad campaigns",
          "Basic promotion planning and account health review",
          "Biweekly performance insights"
        ],
        "note": "Client remains responsible for inventory, fulfilment, orders, returns, tax, product compliance, shipping and platform fees. Platform eligibility and approvals not guaranteed. Managed ad budget up to ₹20,000/month; ad spend extra."
      },
      {
        "title": "Multi-Marketplace Growth",
        "price": "₹17,999",
        "unit": "month",
        "description": "Amazon AND Flipkart",
        "features": [
          "Up to 40 combined listing updates/month",
          "Stock and pricing coordination",
          "Account health monitoring across both platforms",
          "Up to 2 active sponsored ad campaigns across both platforms",
          "Promotion planning and consolidated monthly report"
        ],
        "note": "Client remains responsible for inventory, fulfilment, orders, returns, tax, product compliance, shipping and platform fees. Platform eligibility and approvals not guaranteed. Combined managed ad budget up to ₹20,000/month; ad spend and advanced design extra."
      }
    ]
  },
  {
    "id": "customer-communication",
    "title": "WhatsApp, Email & Customer Engagement",
    "subtitle": "Permission-based customer acquisition, communication and retention",
    "packages": [
      {
        "title": "WhatsApp Business App Setup",
        "price": "₹1,999",
        "unit": "one-time",
        "description": "Essential business messaging setup",
        "features": [
          "Business profile setup",
          "Catalogue of up to 10 products using supplied assets",
          "Greeting and away messages",
          "Quick replies and basic handover"
        ],
        "note": "Client-owned account; distinct from API onboarding. Platform restrictions apply."
      },
      {
        "title": "WhatsApp API Setup",
        "price": "₹4,999+",
        "unit": "one-time",
        "description": "Official business platform onboarding",
        "features": [
          "Official provider selection and onboarding",
          "Business number configuration assistance",
          "Up to 3 initial template submissions",
          "Testing and operational handover"
        ],
        "note": "Provider fees extra; approval not guaranteed."
      },
      {
        "title": "WhatsApp Lite",
        "price": "₹2,999",
        "unit": "month",
        "description": "One focused customer campaign",
        "features": [
          "1 approved campaign/month",
          "Up to 1,000 consented recipients",
          "Copywriting using existing assets, scheduling and execution",
          "Basic delivery report"
        ],
        "note": "Existing official platform and consented recipient list required. Messaging, provider and setup fees extra. Template approval not guaranteed; opt-outs honoured."
      },
      {
        "title": "WhatsApp Growth",
        "price": "₹4,999",
        "unit": "month",
        "description": "Consistent customer communication",
        "features": [
          "2 approved campaigns/month",
          "Up to 2,000 consented recipients per campaign",
          "Copywriting, basic segmentation, scheduling and execution",
          "Monthly report"
        ],
        "note": "Existing official platform and consented recipient list required. Messaging, provider and setup fees extra. Template approval not guaranteed; opt-outs honoured."
      },
      {
        "title": "WhatsApp Pro",
        "price": "₹8,999",
        "unit": "month",
        "description": "Higher-volume customer engagement",
        "features": [
          "4 approved campaigns/month",
          "Up to 5,000 consented recipients per campaign",
          "Copywriting, basic segmentation and campaign scheduling",
          "Monthly performance reporting"
        ],
        "note": "Existing official platform and consented recipient list required. Messaging, provider and setup fees extra. Template approval not guaranteed; opt-outs honoured."
      },
      {
        "title": "Email Marketing Setup",
        "price": "₹3,999",
        "unit": "one-time",
        "description": "Establish a reliable sending foundation",
        "features": [
          "Sending platform configuration",
          "Sender authentication assistance (SPF, DKIM and DMARC as applicable)",
          "1 basic branded email template",
          "Unsubscribe configuration and handover"
        ],
        "note": "Client-owned platform and domain access required; software fees extra."
      },
      {
        "title": "Email Essential",
        "price": "₹2,999",
        "unit": "month",
        "description": "Stay in touch affordably",
        "features": [
          "1 newsletter campaign/month",
          "Up to 1,000 consented contacts",
          "Copy, template adaptation, scheduling and report"
        ],
        "note": "Client-owned sending platform and permission-based list required; unsubscribe and sender authentication supported. Software, sending and setup fees extra."
      },
      {
        "title": "Email Growth",
        "price": "₹5,999",
        "unit": "month",
        "description": "Regular customer newsletters",
        "features": [
          "2 campaigns/month",
          "Up to 2,000 consented contacts per campaign",
          "Copywriting, campaign setup and scheduling",
          "Monthly performance report"
        ],
        "note": "Client-owned sending platform and permission-based list required; unsubscribe and sender authentication supported. Software, sending and setup fees extra."
      },
      {
        "title": "Email Pro",
        "price": "₹9,999",
        "unit": "month",
        "description": "Segmented customer engagement",
        "features": [
          "4 campaigns/month",
          "Up to 5,000 consented contacts per campaign",
          "Copywriting, basic segmentation and subject-line testing where supported",
          "Monthly performance report"
        ],
        "note": "Client-owned sending platform and permission-based list required; unsubscribe and sender authentication supported. Software, sending and setup fees extra."
      },
      {
        "title": "Customer Engagement Growth",
        "price": "₹9,999",
        "unit": "month",
        "description": "WhatsApp and email in one plan",
        "features": [
          "2 WhatsApp campaigns and 2 email campaigns/month",
          "Up to 2,000 consented recipients per campaign",
          "Basic segmentation and promotional copywriting",
          "Unified campaign calendar and monthly report"
        ],
        "note": "Existing official WhatsApp platform and client-owned email platform required. Messaging, subscriptions and initial setup extra. Consent and opt-outs required."
      },
      {
        "title": "Nurture & Automation",
        "price": "₹14,999+",
        "unit": "project",
        "description": "Automated customer follow-up journeys",
        "features": [
          "Up to 2 agreed welcome or reminder workflows",
          "Segmentation and routing",
          "Standard CRM and messaging integration",
          "Testing and workflow documentation"
        ],
        "note": "Final price after discovery; custom integration, platform usage and ongoing management extra."
      }
    ]
  },
  {
    "id": "crm-automation",
    "title": "CRM, AI & Intelligent Automation",
    "subtitle": "Connect existing systems, simplify workflows and support business growth",
    "packages": [
      {
        "title": "CRM Starter",
        "price": "₹9,999",
        "unit": "one-time",
        "description": "Organise opportunities",
        "features": [
          "Standard CRM account configuration",
          "1 sales pipeline and lead capture form",
          "Lead-source tracking",
          "Basic team training and handover"
        ],
        "note": "Standard configuration of existing platforms, not custom-built software. Client-owned accounts; subscriptions, hosting, messaging, AI usage and third-party fees extra. Scope, access and acceptance criteria agreed in writing."
      },
      {
        "title": "CRM Professional",
        "price": "₹19,999+",
        "unit": "project",
        "description": "More structured sales operations",
        "features": [
          "Up to 2 sales pipelines",
          "Up to 3 agreed lead sources",
          "Basic dashboard and follow-up reminders",
          "Configuration, testing and team handover"
        ],
        "note": "Standard configuration of existing platforms, not custom-built software. Client-owned accounts; subscriptions, hosting, messaging, AI usage and third-party fees extra. Scope, access and acceptance criteria agreed in writing."
      },
      {
        "title": "CRM Care",
        "price": "₹2,999",
        "unit": "month",
        "description": "Maintain your configured CRM",
        "features": [
          "Configuration updates and basic monitoring",
          "Up to 2 support hours/month",
          "Monthly support summary"
        ],
        "note": "Support for existing agreed setup during business hours; unused hours do not roll over. New features, major fixes, emergency support and third-party charges extra."
      },
      {
        "title": "Lead Automation",
        "price": "₹14,999+",
        "unit": "project",
        "description": "Reduce manual follow-ups",
        "features": [
          "One agreed lead capture and routing workflow",
          "Follow-up reminders and standard integration",
          "Testing and documentation"
        ],
        "note": "Standard configuration of existing platforms, not custom-built software. Client-owned accounts; subscriptions, hosting, messaging, AI usage and third-party fees extra. Scope, access and acceptance criteria agreed in writing."
      },
      {
        "title": "WhatsApp Automation",
        "price": "₹14,999+",
        "unit": "project",
        "description": "Streamline business conversations",
        "features": [
          "Up to 2 defined workflows for welcome, lead routing or reminders",
          "Official WhatsApp platform integration",
          "Testing and handover"
        ],
        "note": "Standard configuration of existing platforms, not custom-built software. Client-owned accounts; subscriptions, hosting, messaging, AI usage and third-party fees extra. Scope, access and acceptance criteria agreed in writing. Consent and approved templates required; API onboarding separate unless scoped."
      },
      {
        "title": "Appointment Automation",
        "price": "₹9,999+",
        "unit": "project",
        "description": "Simplify appointment coordination",
        "features": [
          "One agreed booking integration",
          "Confirmation and reminder workflow",
          "Testing and handover"
        ],
        "note": "Standard configuration of existing platforms, not custom-built software. Client-owned accounts; subscriptions, hosting, messaging, AI usage and third-party fees extra. Scope, access and acceptance criteria agreed in writing."
      },
      {
        "title": "Business Automation",
        "price": "₹39,999+",
        "unit": "project",
        "description": "Connect operational systems",
        "features": [
          "Workflow discovery and design",
          "Agreed multi-step integrations",
          "Testing and exception handling",
          "Documentation and handover"
        ],
        "note": "Standard configuration of existing platforms, not custom-built software. Client-owned accounts; subscriptions, hosting, messaging, AI usage and third-party fees extra. Scope, access and acceptance criteria agreed in writing."
      },
      {
        "title": "Automation Care",
        "price": "₹4,999",
        "unit": "month",
        "description": "Keep agreed workflows running",
        "features": [
          "Basic workflow monitoring",
          "Up to 3 support hours/month",
          "Issue review and minor adjustments"
        ],
        "note": "Support for existing agreed setup during business hours; unused hours do not roll over. New features, major fixes, emergency support and third-party charges extra."
      },
      {
        "title": "Website AI Assistant",
        "price": "₹14,999+",
        "unit": "project",
        "description": "Answer common website questions",
        "features": [
          "Knowledge-base preparation from approved sources",
          "Chatbot setup and website integration",
          "Testing of key scenarios and admin handover"
        ],
        "note": "Standard configuration of existing platforms, not custom-built software. Client-owned accounts; subscriptions, hosting, messaging, AI usage and third-party fees extra. Scope, access and acceptance criteria agreed in writing. Human escalation and privacy safeguards agreed before launch; AI accuracy not guaranteed."
      },
      {
        "title": "AI Lead Qualification Assistant",
        "price": "₹24,999+",
        "unit": "project",
        "description": "Capture and route qualified enquiries",
        "features": [
          "Agreed qualification questions and information capture",
          "Standard CRM or lead routing integration",
          "Human handover and testing"
        ],
        "note": "Standard configuration of existing platforms, not custom-built software. Client-owned accounts; subscriptions, hosting, messaging, AI usage and third-party fees extra. Scope, access and acceptance criteria agreed in writing. Human escalation and privacy safeguards agreed before launch; AI accuracy not guaranteed."
      },
      {
        "title": "AI Customer Support Assistant",
        "price": "₹29,999+",
        "unit": "project",
        "description": "Support common customer enquiries",
        "features": [
          "Approved knowledge-base configuration",
          "Agreed support and escalation workflows",
          "Testing and administrator training"
        ],
        "note": "Standard configuration of existing platforms, not custom-built software. Client-owned accounts; subscriptions, hosting, messaging, AI usage and third-party fees extra. Scope, access and acceptance criteria agreed in writing. Human escalation and privacy safeguards agreed before launch; AI accuracy not guaranteed."
      },
      {
        "title": "AI Assistant Care",
        "price": "₹3,999",
        "unit": "month",
        "description": "Maintain assistant knowledge and performance",
        "features": [
          "Knowledge-base updates and basic monitoring",
          "Up to 2 support hours/month",
          "Issue review and minor adjustments"
        ],
        "note": "Support for existing agreed setup during business hours; unused hours do not roll over. New features, major fixes, emergency support and third-party charges extra. AI usage billed separately."
      },
      {
        "title": "Custom AI Agent Solutions",
        "price": "Custom quotation",
        "unit": "project",
        "description": "Business-specific AI workflows",
        "features": [
          "Discovery and architecture review",
          "Agreed advanced workflows and integrations",
          "Safety, access controls, testing and handover"
        ],
        "note": "Standard configuration of existing platforms, not custom-built software. Client-owned accounts; subscriptions, hosting, messaging, AI usage and third-party fees extra. Scope, access and acceptance criteria agreed in writing. Human escalation and privacy safeguards agreed before launch; AI accuracy not guaranteed."
      },
      {
        "title": "Smart Business Automation Suite",
        "price": "₹49,999+",
        "unit": "project",
        "description": "Integrated sales and customer acquisition system",
        "features": [
          "Standard CRM configuration and website lead capture",
          "WhatsApp lead integration",
          "AI-assisted lead qualification",
          "Agreed follow-up workflows and appointment or enquiry routing",
          "Basic sales dashboard",
          "Testing, training and handover"
        ],
        "note": "Standard configuration of existing platforms, not custom-built software. Client-owned accounts; subscriptions, hosting, messaging, AI usage and third-party fees extra. Scope, access and acceptance criteria agreed in writing. Human escalation and privacy safeguards agreed before launch; AI accuracy not guaranteed. Final scope and fee after discovery; ongoing support separate."
      }
    ]
  },
  {
    "id": "branding-growth",
    "title": "Branding & Visual Identity",
    "subtitle": "Build a distinctive and consistent brand",
    "packages": [
      {
        "title": "Premium Logo Design",
        "price": "₹4,999",
        "unit": "project",
        "description": "A distinctive logo for your business",
        "features": [
          "Brand discovery consultation",
          "Up to 3 logo concepts with variations",
          "3 realistic mockups of approved logo",
          "High-resolution square profile image",
          "Editable logo source and final export files",
          "Indicative delivery: 3–4 working days"
        ],
        "note": "Five consolidated revision rounds on the selected concept; further revisions quoted separately. Final original design rights assigned after full payment, subject to third-party licences. Printing, trademark registration and paid assets excluded. Delivery estimates depend on complete brief, timely feedback and agreed scope."
      },
      {
        "title": "Premium Logo & Stationery",
        "price": "₹7,499",
        "unit": "project",
        "description": "Coordinated business identity for print and digital",
        "features": [
          "Brand discovery consultation",
          "Up to 3 logo concepts with variations",
          "3 realistic mockups of approved logo",
          "High-resolution square profile image",
          "Editable logo source and final export files",
          "Business card, letterhead and envelope designs",
          "Indicative delivery: 4–5 working days"
        ],
        "note": "Five consolidated revision rounds on the selected concept; further revisions quoted separately. Final original design rights assigned after full payment, subject to third-party licences. Printing, trademark registration and paid assets excluded. Delivery estimates depend on complete brief, timely feedback and agreed scope."
      },
      {
        "title": "Startup Brand Identity Kit",
        "price": "₹13,999",
        "unit": "project",
        "description": "A coordinated identity for launching your brand",
        "features": [
          "Industry and competitor research; brand consultation",
          "Up to 4 logo concepts with variations",
          "Detailed visual identity guidelines",
          "1080p logo intro animation",
          "3 realistic logo mockups",
          "25+ favicon, web and app icon exports",
          "5 editable Canva social templates and square profile image",
          "Facebook, X and YouTube cover designs",
          "Business card, letterhead and envelope designs",
          "Editable source and final export files",
          "Indicative delivery: 6–7 working days"
        ],
        "note": "Five consolidated revision rounds on the selected concept; further revisions quoted separately. Final original design rights assigned after full payment, subject to third-party licences. Printing, trademark registration and paid assets excluded. Delivery estimates depend on complete brief, timely feedback and agreed scope."
      }
    ]
  }
];

export const marketplaceExtras = [
  {
    "title": "Standard product listing",
    "price": "From ₹249 / SKU"
  },
  {
    "title": "Advanced listing optimisation",
    "price": "From ₹499 / SKU"
  },
  {
    "title": "Amazon A+ Content",
    "price": "From ₹2,499 / product"
  },
  {
    "title": "Amazon Brand Store design",
    "price": "From ₹7,999"
  },
  {
    "title": "Marketplace advertising management",
    "price": "From ₹5,999 / month per platform"
  },
  {
    "title": "Account suspension assistance",
    "price": "Custom quotation"
  },
  {
    "title": "Marketplace expansion consultation",
    "price": "Custom quotation"
  }
] as const;

export const productionCategories = [
  {
    "id": "short-form",
    "title": "Reels & Shorts",
    "packageTitles": [
      "Single Reel Edit",
      "Reel Editing Starter",
      "Reel Editing Growth",
      "Reel Editing Pro",
      "Reel Creator",
      "Reel Shoot Day",
      "Content Shoot Pro"
    ]
  },
  {
    "id": "youtube-podcast",
    "title": "YouTube & Podcast",
    "packageTitles": [
      "YouTube Script",
      "YouTube Script Pack",
      "YouTube Thumbnail Pack",
      "YouTube Video Editing",
      "Advanced Video Editing",
      "YouTube Editing Bundle",
      "Podcast Editing",
      "Podcast Repurposing"
    ]
  },
  {
    "id": "advertising-content",
    "title": "Advertising & Promotional Content",
    "packageTitles": [
      "Advertising Creative Campaign",
      "LinkedIn Carousel Pack",
      "AI Promotional Video",
      "AI Product Showcase",
      "AI Presenter / Explainer",
      "AI Video Bundle"
    ]
  },
  {
    "id": "photography",
    "title": "Photography & On-location Video",
    "packageTitles": [
      "Product Photography",
      "Personal Branding Photoshoot",
      "Business Lifestyle Photoshoot",
      "Testimonial Video"
    ]
  },
  {
    "id": "commercial",
    "title": "Corporate & Commercial Video",
    "packageTitles": [
      "Product Demonstration Video",
      "Business Introduction Video",
      "Corporate Profile Film",
      "Professional Advertising Campaign"
    ]
  },
  {
    "id": "monthly-content",
    "title": "Monthly Content Partnerships",
    "packageTitles": [
      "Content Essential",
      "Content Growth",
      "Content Pro",
      "Content Enterprise"
    ]
  }
] as const;

export const serviceSubcategories: Record<string, { title: string; names: string[] }[]> = {
  "seo-discovery": [
    {
      "title": "Google Maps & local SEO",
      "names": [
        "Google Maps Essential",
        "Google Maps Growth"
      ]
    },
    {
      "title": "Website SEO",
      "names": [
        "SEO Foundation",
        "SEO Growth",
        "SEO Authority"
      ]
    }
  ],
  "customer-communication": [
    {
      "title": "WhatsApp",
      "names": [
        "WhatsApp Business App Setup",
        "WhatsApp API Setup",
        "WhatsApp Lite",
        "WhatsApp Growth",
        "WhatsApp Pro"
      ]
    },
    {
      "title": "Email marketing",
      "names": [
        "Email Marketing Setup",
        "Email Essential",
        "Email Growth",
        "Email Pro"
      ]
    },
    {
      "title": "Combined & automation",
      "names": [
        "Customer Engagement Growth",
        "Nurture & Automation"
      ]
    }
  ],
  "crm-automation": [
    {
      "title": "CRM solutions",
      "names": [
        "CRM Starter",
        "CRM Professional",
        "CRM Care"
      ]
    },
    {
      "title": "Business automation",
      "names": [
        "Lead Automation",
        "WhatsApp Automation",
        "Appointment Automation",
        "Business Automation",
        "Automation Care"
      ]
    },
    {
      "title": "AI assistants & agents",
      "names": [
        "Website AI Assistant",
        "AI Lead Qualification Assistant",
        "AI Customer Support Assistant",
        "AI Assistant Care",
        "Custom AI Agent Solutions"
      ]
    },
    {
      "title": "Integrated suite",
      "names": [
        "Smart Business Automation Suite"
      ]
    }
  ]
};
