/**
 * Editorially maintained public content. All portfolio examples here are
 * first-party ventures, not third-party client case studies or result claims.
 */
export type Service = {
  slug: string;
  category: 'Build' | 'Grow' | 'Automate';
  title: string;
  summary: string;
  audience: string;
  outcomes: string[];
  deliverables: string[];
  process: string[];
  faq: { question: string; answer: string }[];
};

export const serviceCatalog: Service[] = [
  {
    slug: 'website-development', category: 'Build', title: 'Website & Landing Page Development',
    summary: 'Fast, responsive websites and focused landing pages built to explain your offer and make enquiries easier.',
    audience: 'Businesses launching a new digital presence or improving an existing website.',
    outcomes: ['Clearer product and service messaging', 'Improved mobile experience and navigation', 'A measurable route from visitor to enquiry'],
    deliverables: ['Discovery and page structure', 'Responsive interface design and development', 'Contact and enquiry flows', 'Foundational technical SEO and analytics setup'],
    process: ['Review objectives and existing website', 'Agree scope, content and visual direction', 'Build, test and review', 'Deploy with a handover checklist'],
    faq: [
      { question: 'Can you improve an existing website?', answer: 'Yes. We first review the current technology and determine whether targeted improvements or a rebuild is more sensible.' },
      { question: 'Is content writing included?', answer: 'Copywriting can be included in the agreed scope. We identify content responsibilities before development begins.' },
    ],
  },
  {
    slug: 'ecommerce-lms', category: 'Build', title: 'E-commerce & Learning Platforms',
    summary: 'Product, course and institution experiences designed around straightforward browsing and structured operations.',
    audience: 'Retailers, training organisations and education businesses that need more than a brochure website.',
    outcomes: ['Organised product or course discovery', 'Clearer purchase or enrolment journeys', 'Administrative workflows suited to the business'],
    deliverables: ['Requirements and data model', 'Responsive catalog and detail experiences', 'Relevant access and management workflows', 'Launch testing and administrator handover'],
    process: ['Map the buyer or learner journey', 'Specify required integrations', 'Develop and review in milestones', 'Test and deploy'],
    faq: [
      { question: 'Can existing data be migrated?', answer: 'Often yes, subject to the format, quality and access available from the existing platform.' },
      { question: 'Do you provide payment gateway integration?', answer: 'Payment integrations can be scoped where supported by your provider and compliance requirements.' },
    ],
  },
  {
    slug: 'custom-software', category: 'Build', title: 'Custom Software & SaaS',
    summary: 'Purpose-built web applications for workflows that standard templates cannot adequately support.',
    audience: 'Growing teams with a specific operational problem or product concept.',
    outcomes: ['A product tailored to agreed business requirements', 'A maintainable technical foundation', 'A clearer delivery and iteration roadmap'],
    deliverables: ['Discovery and technical specification', 'Database and application architecture', 'Feature development and testing', 'Deployment documentation and handover'],
    process: ['Validate the use case', 'Define a minimum viable scope', 'Build in reviewable milestones', 'Launch and plan improvements'],
    faq: [
      { question: 'Do we need to build everything at once?', answer: 'Usually not. We recommend starting with a focused minimum viable product and expanding after validation.' },
      { question: 'Who owns the code?', answer: 'Ownership and licensing terms are documented in the project agreement before work begins.' },
    ],
  },
  {
    slug: 'seo-content', category: 'Grow', title: 'SEO & Content Strategy',
    summary: 'Search-friendly information architecture and useful content that helps customers discover and understand your services.',
    audience: 'Businesses building sustained visibility for relevant searches.',
    outcomes: ['A more discoverable service structure', 'Improved content clarity', 'Better measurement of organic visits and enquiries'],
    deliverables: ['Search intent and website review', 'Content and internal linking plan', 'On-page and technical recommendations', 'Reporting framework'],
    process: ['Assess the current site', 'Prioritise achievable opportunities', 'Implement agreed improvements', 'Measure and iterate'],
    faq: [
      { question: 'Can you guarantee first-page rankings?', answer: 'No. Search rankings depend on factors outside any agency’s control. We focus on sound implementation and transparent reporting.' },
      { question: 'When will SEO results appear?', answer: 'Timelines vary by competition, website history and scope. We set realistic milestones rather than guaranteeing a date.' },
    ],
  },
  {
    slug: 'performance-marketing', category: 'Grow', title: 'Google & Meta Advertising',
    summary: 'Focused advertising campaigns with clear audiences, conversion actions and performance reporting.',
    audience: 'Businesses ready to test paid customer acquisition with a realistic budget.',
    outcomes: ['Campaign objectives linked to business goals', 'Better lead attribution and tracking', 'Evidence for future budget decisions'],
    deliverables: ['Campaign strategy and account review', 'Audience and creative recommendations', 'Tracking and landing-page alignment', 'Performance review'],
    process: ['Assess economics and readiness', 'Set up or refine tracking', 'Launch controlled tests', 'Review lead quality and optimise'],
    faq: [
      { question: 'Is ad spend included in your fee?', answer: 'Media spend is separately approved and paid to the relevant advertising platform unless explicitly agreed otherwise.' },
      { question: 'Do you guarantee a number of leads?', answer: 'No. We agree realistic campaign goals, monitor lead quality and explain performance without promising outcomes we cannot control.' },
    ],
  },
  {
    slug: 'ai-automation', category: 'Automate', title: 'AI & Business Process Automation',
    summary: 'Practical integrations, AI-assisted workflows and lead-handling systems built around genuine operational needs.',
    audience: 'Teams losing time to repetitive tasks, fragmented systems or inconsistent follow-up.',
    outcomes: ['Less manual re-entry where integration is feasible', 'Clearer ownership of incoming enquiries', 'More consistent internal processes'],
    deliverables: ['Workflow mapping and feasibility assessment', 'Integration and automation design', 'Implementation with safeguards', 'Testing, documentation and handover'],
    process: ['Identify repetitive work and failure points', 'Define privacy and approval requirements', 'Implement a limited pilot', 'Review reliability before expanding'],
    faq: [
      { question: 'Will AI make decisions automatically?', answer: 'We recommend human review for consequential actions and configure appropriate safeguards for each use case.' },
      { question: 'Can this connect with our CRM?', answer: 'Integration depends on your CRM’s available API, permissions and commercial plan.' },
    ],
  },
];

export type PortfolioProject = {
  slug: string; name: string; type: string; url: string;
  summary: string; scope: string[]; note: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'vidya-infinity', name: 'Vidya Infinity', type: 'Education platform',
    url: 'https://vidyainfinity.com',
    summary: 'An education-oriented platform for exploring courses, institutions and learning opportunities.',
    scope: ['Multi-category course and institution listings', 'Content-driven discovery journeys', 'Responsive pages and administration-oriented architecture'],
    note: 'A first-party venture, shown as a demonstration of development and product experience rather than an external client engagement.',
  },
  {
    slug: 'brick-infinity', name: 'Brick Infinity', type: 'Real estate platform',
    url: 'https://brickinfinity.com',
    summary: 'A digital property browsing and listing experience.',
    scope: ['Property detail experiences', 'Structured listing information', 'Responsive property discovery'],
    note: 'A first-party venture. No external client performance claim is made.',
  },
  {
    slug: 'evolevex', name: 'EvoLeveX', type: 'Publishing and audience platform',
    url: 'https://evolevex.com',
    summary: 'A branded digital content and community ecosystem built around editorial and media experiences.',
    scope: ['Branded website experience', 'Editorial and media information architecture', 'Multi-section digital product foundation'],
    note: 'A first-party venture included to illustrate design and application capabilities.',
  },
];

export const findService = (slug: string) => serviceCatalog.find((service) => service.slug === slug);
export const findProject = (slug: string) => portfolioProjects.find((project) => project.slug === slug);
