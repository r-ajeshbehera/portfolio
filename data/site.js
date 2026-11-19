// ─────────────────────────────────────────────────────────────────────────────
// ALL WEBSITE CONTENT LIVES IN THIS FILE.
// Lines marked  DUMMY  are placeholder content — replace them with your real
// details before you rely on them.
//
// Sample testimonials are only shown when the environment variable
// NEXT_PUBLIC_SHOW_SAMPLES=1 is set (for previews). On the live site they stay
// hidden until you replace them with real client reviews.
// Photos in /public/images/stock are from Unsplash (free to use under the
// Unsplash License).
// ─────────────────────────────────────────────────────────────────────────────

export const SHOW_SAMPLES = process.env.NEXT_PUBLIC_SHOW_SAMPLES === "1";

export const site = {
  brand: "Rajesh Behera Digital Studio",
  short: "RB Digital Studio",
  founder: "Rajesh Behera",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rajeshbehera.vercel.app",
  tagline: "Websites, SEO and automation for growing businesses.",
  description:
    "Rajesh Behera Digital Studio designs fast, SEO-friendly business websites, workflow automation and Google Sheets dashboards for startups and small businesses in Bhubaneswar, Odisha and across India.",
  city: "Bhubaneswar",
  region: "Odisha",
  country: "India",
  location: "Bhubaneswar, Odisha, India",
  email: "rajeshbehera.works@gmail.com",
  phone: "", // DUMMY — add e.g. "+91 90000 00000" to show it
  whatsapp: "", // DUMMY — country code + number, no "+", e.g. "919000000000"
  hours: "Mon – Sat, 10:00 AM – 7:00 PM IST", // DUMMY
  responseTime: "within one working day", // DUMMY — keep only if you can promise it
  social: {
    linkedin: "https://www.linkedin.com/in/r-ajeshbehera",
    github: "https://github.com/r-ajeshbehera",
    youtube: "https://youtube.com/@r_ajeshbehera",
  },
  languages: ["English", "Hindi", "Odia"],
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
];

// Honest numbers only.
export const stats = [
  { value: 6, suffix: "", label: "Digital services" },
  { value: 3, suffix: "", label: "Languages: English, Hindi, Odia" },
  { value: 100, suffix: "%", label: "Projects with a written quote first" },
  { value: 0, prefix: "₹", label: "Cost of your first consultation" },
];

export const tools = ["Next.js", "React", "WordPress", "Java", "Spring Boot", "MySQL", "PostgreSQL", "Google Sheets", "Excel", "n8n", "Google Search Console", "Google Analytics", "Vercel", "Figma", "Git & GitHub", "WhatsApp Business"];

// status: "available" | "pilot" | "coming"
export const services = [
  {
    slug: "website-development",
    status: "available",
    icon: "globe",
    image: "/images/stock/workspace.jpg",
    title: "Website Development",
    short: "Fast, mobile-first business websites that explain what you do and turn visitors into enquiries.",
    intro: "A professional website is often the first impression a customer has of your business. I build clean, fast, mobile-first websites around the questions your customers ask and the one action you want them to take.",
    from: "₹9,999", // DUMMY starting price
    timeline: "1–3 weeks",
    problems: [
      "Customers can't find you online, or your old site looks outdated on mobile.",
      "Your website doesn't explain your services clearly, so people call with basic questions.",
      "Enquiries are lost because there's no simple way to contact you.",
    ],
    deliverables: [
      "Custom design for up to the pages agreed in your quote",
      "Mobile-first, fast-loading build (Core Web Vitals checked)",
      "Contact form, WhatsApp, call and map buttons",
      "On-page SEO: titles, meta descriptions, schema, sitemap",
      "Google Analytics and Search Console setup",
      "Domain, hosting and email setup guidance",
      "Full handover of files, logins and a walkthrough",
    ],
    stages: ["Free discovery call", "Written quote", "Sitemap & wireframe", "Design preview", "Build & content", "Testing", "Launch & handover"],
    tools: ["Next.js", "React", "WordPress", "Vercel"],
    faqs: [
      { q: "Can you redesign my existing website?", a: "Yes. I review what you have, keep what works and rebuild what doesn't. The exact scope is written into your quote." },
      { q: "Do I need to provide the content?", a: "You know your business best, so I'll ask for key details and photos. I help you structure and write the text so it's clear and search-friendly." },
      { q: "Who owns the website?", a: "You do. At handover you receive every file, login and account." },
    ],
  },
  {
    slug: "seo-local-search",
    status: "available",
    icon: "search",
    image: "/images/stock/analytics.jpg",
    title: "SEO & Local Search",
    short: "Get found on Google with technical SEO, local search setup and content that matches what customers search for.",
    intro: "Most customers search before they call. I fix the technical basics, set up your Google Business Profile and structure your pages so search engines — and people — understand exactly what you offer and where.",
    from: "₹4,999", // DUMMY starting price
    timeline: "2–4 weeks",
    problems: [
      "Your business doesn't appear when people search for your service in your city.",
      "Your Google Business Profile is incomplete or unverified.",
      "Your pages load slowly and have missing titles, descriptions or broken links.",
    ],
    deliverables: [
      "Technical SEO audit with a clear, prioritised fix list",
      "Page titles, meta descriptions, headings and internal links",
      "Structured data (schema.org) for your business and services",
      "Google Business Profile setup and optimisation",
      "XML sitemap, robots.txt and Search Console submission",
      "Speed and Core Web Vitals improvements",
      "Simple monthly report you can actually read (optional)",
    ],
    stages: ["Free call", "SEO audit", "Written quote", "Technical fixes", "On-page optimisation", "Local setup", "Report & next steps"],
    tools: ["Google Search Console", "Google Analytics", "PageSpeed Insights", "Google Business Profile"],
    faqs: [
      { q: "How long until I see results?", a: "Technical fixes take effect as Google re-crawls your site, usually within weeks. Ranking improvements take longer and depend on competition. I'll never promise a #1 ranking — nobody honest can." },
      { q: "Do you write blog content?", a: "I can plan topics around real customer searches and help you write or edit articles. The scope is agreed in your quote." },
    ],
  },
  {
    slug: "business-automation",
    status: "pilot",
    icon: "flow",
    image: "/images/stock/dashboard.jpg",
    title: "Business Automation",
    short: "Connect the tools you already use so enquiries, follow-ups and reminders happen without manual work.",
    intro: "Small teams lose hours copying data between apps and chasing follow-ups. I build simple automations around the tools you already use, so every enquiry is captured, answered and tracked.",
    from: "₹6,999", // DUMMY starting price
    timeline: "1–2 weeks",
    problems: [
      "Enquiries on WhatsApp or email go unanswered after business hours.",
      "Leads are written in notebooks or scattered chats and forgotten.",
      "You copy the same information between apps every day.",
    ],
    deliverables: [
      "Enquiry capture from forms, email or WhatsApp into one sheet",
      "Instant automatic replies for common questions",
      "Follow-up reminders and team notifications",
      "AI-assisted replies where they genuinely help",
      "Short guide and walkthrough so you can run it yourself",
    ],
    stages: ["Free call", "Map your current process", "Written quote", "Build & test", "Your review", "Go live & training"],
    tools: ["n8n", "Google Sheets", "Gmail", "WhatsApp Business"],
    faqs: [
      { q: "What does “pilot” mean?", a: "I'm building my first projects in this service, so we start small and prove it works before expanding. I'm upfront about what's new for me." },
      { q: "Will it work with my current tools?", a: "Usually, yes. In the first call I check what you use and tell you honestly if something isn't possible." },
    ],
  },
  {
    slug: "sheets-dashboards",
    status: "pilot",
    icon: "sheet",
    image: "/images/stock/planning.jpg",
    title: "Sheets & Dashboards",
    short: "Simple Google Sheets and Excel systems for sales, stock and expenses — with a one-page dashboard.",
    intro: "You don't always need new software. A well-built spreadsheet with the right formulas and a clear dashboard can show you sales, stock and expenses at a glance.",
    from: "₹2,999", // DUMMY starting price
    timeline: "3–10 days",
    problems: [
      "You don't know your real monthly sales or expenses without hours of calculation.",
      "Stock runs out because nobody tracks it consistently.",
      "Reports for partners or staff take too long to prepare.",
    ],
    deliverables: [
      "Sales, stock or expense tracker built for your workflow",
      "Monthly summary dashboard with charts",
      "Automatic totals, checks and simple reports",
      "Sharing and access set up for your team",
      "Walkthrough so you can use and update it",
    ],
    stages: ["Free call", "Written quote", "First version", "Your review", "Final version & training"],
    tools: ["Google Sheets", "Microsoft Excel", "Looker Studio"],
    faqs: [{ q: "Do I need Excel?", a: "No. Google Sheets is free and works in any browser or on your phone. Excel is fine too if you prefer it." }],
  },
  {
    slug: "website-care",
    status: "available",
    icon: "shield",
    image: "/images/stock/code.jpg",
    title: "Website Care & Maintenance",
    short: "Updates, backups, security checks and small changes — so your website stays fast, safe and current.",
    intro: "A website isn't finished at launch. I keep it updated, backed up and secure, and make the small content changes you need, so you can focus on your business.",
    from: "₹1,499 / month", // DUMMY starting price
    timeline: "Ongoing",
    problems: [
      "Your website hasn't been updated in months and you're not sure it's secure.",
      "Small text or photo changes take weeks because nobody owns the site.",
      "You'd only find out the site was down when a customer tells you.",
    ],
    deliverables: [
      "Regular updates and backups",
      "Uptime and security monitoring",
      "Small content and photo changes each month",
      "Speed and SEO health check",
      "Priority support by email or WhatsApp",
    ],
    stages: ["Free call", "Site health check", "Written plan", "Monthly care", "Quarterly review"],
    tools: ["Vercel", "WordPress", "Google Search Console", "Uptime monitoring"],
    faqs: [{ q: "Can I cancel any time?", a: "Yes. Care plans are month-to-month unless you choose otherwise in writing." }],
  },
  {
    slug: "digital-design",
    status: "coming",
    icon: "design",
    image: "/images/stock/design.jpg",
    title: "Digital Design",
    short: "Social media graphics, presentations and simple brand kits that look consistent everywhere.",
  },
];

export const statusLabel = { available: "Available", pilot: "Pilot", coming: "Coming soon" };

// label must be honest: "Personal project", "Team project", "Demo project". Use "Client project" only for real paid work.
export const projects = [
  {
    slug: "sikshasadan",
    label: "Team project",
    title: "Siksha Sadan School Management System",
    category: "Web application",
    year: "2026",
    image: "/images/stock/education.jpg",
    summary: "A live school website and admin system for admissions, fees and class promotion. Built by a team as an MCA final-year project — I worked on the backend.",
    problem: "The school managed admissions and fees on paper registers, and had no public website parents could trust.",
    solution: "A public website plus an admin panel for student records, fee collection and academic-year promotion, with secure logins. My part was the Spring Boot + MySQL backend and its APIs.",
    results: ["Live at sikshasadan.com", "Paper admission and fee registers moved into one system", "Role-based, secure admin access"],
    tools: ["Angular", "Spring Boot", "MySQL", "JWT", "Docker"],
    links: { live: "https://sikshasadan.com" },
  },
  {
    slug: "automated-exam-portal",
    label: "Personal project",
    title: "Automated Exam Portal",
    category: "Web application",
    year: "2025",
    image: "/images/p1-banner.png",
    summary: "A web-based MCQ exam system with teacher and student dashboards and instant results.",
    problem: "Teachers spend a lot of time creating, conducting and checking class tests by hand.",
    solution: "A web portal where teachers create MCQ exams and students attempt them online, with results calculated instantly and stored in a database.",
    results: ["Exams created and marked automatically", "Separate dashboards for teachers and students", "Instant results for students"],
    tools: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    shots: [
      { src: "/images/p1s1.png", caption: "Teacher dashboard" },
      { src: "/images/p1s6.png", caption: "Student dashboard" },
      { src: "/images/p1s7.png", caption: "Instant result" },
    ],
    links: { github: "https://github.com/r-ajeshbehera/automated-exam-system" },
  },
  {
    slug: "jansunwai",
    label: "Personal project",
    title: "JanSunwai — Civic Complaint Platform",
    category: "Full-stack application",
    year: "2026",
    image: "/images/stock/collab.jpg",
    summary: "Citizens file complaints in English, Hindi or Odia, and each one is routed to the right department.",
    problem: "Civic complaints get lost or reach the wrong department, and citizens can't track them.",
    solution: "A full-stack platform with Spring Boot REST APIs, PostgreSQL, AI-assisted categorisation with human review, and a React front end with dashboards.",
    results: ["Complaints in three languages", "Duplicate detection across languages", "SLA-based escalation"],
    tools: ["Spring Boot", "PostgreSQL", "React", "Docker"],
    links: { github: "https://github.com/r-ajeshbehera/jansunwai" },
  },
  {
    slug: "aashraynet",
    label: "Personal project",
    title: "AashrayNet — Cyclone Shelter Management",
    category: "Full-stack application",
    year: "2026",
    image: "/images/stock/analytics.jpg",
    summary: "Tracks shelter occupancy, relief stock and supply requests during cyclones, for four user roles.",
    problem: "During cyclones, shelter occupancy and relief supplies are tracked on paper and by phone.",
    solution: "Secure REST APIs and dashboards for shelter check-ins, relief stock and supply requests, with protection against double-booking the last place.",
    results: ["Nearest shelter with free places", "Live occupancy and shortage alerts", "Race-safe check-in"],
    tools: ["Spring Boot", "Spring Security", "MySQL", "React"],
    links: { github: "https://github.com/r-ajeshbehera/aashraynet" },
  },
  {
    slug: "coaching-enquiry-assistant",
    label: "Demo project",
    title: "Coaching Centre Enquiry Assistant",
    category: "Automation",
    year: "2026",
    image: "/images/stock/students.jpg",
    summary: "A concept assistant that answers questions about fees, batches and demo classes, and logs every enquiry to a sheet.",
    problem: "Coaching centres miss enquiries after hours and repeat the same answers all day.",
    solution: "An automation that replies to common questions and saves each enquiry for follow-up. Built with sample data.",
    results: ["Instant replies, day or night", "Every enquiry saved to one sheet", "Follow-up list for the team"],
    tools: ["n8n", "AI model", "Google Sheets"],
    links: {},
  },
  {
    slug: "business-expense-tracker",
    label: "Demo project",
    title: "Business Expense Tracker",
    category: "Spreadsheet system",
    year: "2026",
    image: "/images/stock/planning.jpg",
    summary: "A Google Sheets tracker for income and expenses with an automatic monthly dashboard.",
    problem: "Small business owners don't see their monthly profit without manual calculation.",
    solution: "A simple entry sheet with categories and a dashboard that totals everything by month. Built with sample data.",
    results: ["Monthly profit at a glance", "Category-wise spending", "Works on phone and desktop"],
    tools: ["Google Sheets"],
    links: {},
  },
];

export const reasons = [
  { icon: "users", title: "Founder-led, start to finish", text: "You work directly with the person who builds your project. No middlemen." },
  { icon: "file", title: "Written quote first", text: "Scope, price and delivery date in writing before any work starts." },
  { icon: "zap", title: "Fast & SEO-ready", text: "Every site is built mobile-first, quick to load and structured for search." },
  { icon: "language", title: "Your language", text: "Clear explanations in English, Hindi or Odia — no confusing jargon." },
  { icon: "key", title: "You own everything", text: "All files, accounts and logins are handed over at launch." },
  { icon: "chat", title: "Help after launch", text: "A walkthrough at handover and support options when you need them." },
];

export const workflow = [
  { title: "Discovery call", text: "A free 20-minute call to understand your business, customers and goals.", when: "Day 1" },
  { title: "Proposal & quote", text: "A written scope with price, timeline and exactly what's included.", when: "Within 2 days" },
  { title: "Design", text: "Sitemap, wireframes and a visual design preview for your feedback.", when: "Week 1" },
  { title: "Build", text: "Development with regular updates and a private preview link.", when: "Week 1–3" },
  { title: "Test & optimise", text: "Mobile, speed, SEO, forms and accessibility checked before launch.", when: "Before launch" },
  { title: "Launch & handover", text: "Go live, submit to Google, and hand over every file and login.", when: "Launch day" },
];

export const industries = [
  { icon: "book", title: "Education & coaching", text: "Admission enquiries, batch and fee pages, and automated replies for parents.", image: "/images/stock/students.jpg" },
  { icon: "heart", title: "Clinics & healthcare", text: "Clinic websites, appointment enquiries and patient reminders.", image: "/images/stock/clinic.jpg" },
  { icon: "bag", title: "Retail & shops", text: "Product catalogues, stock trackers and local search visibility.", image: "/images/stock/shop.jpg" },
  { icon: "briefcase", title: "Professional services", text: "Credible service websites and lead follow-up for consultants and firms.", image: "/images/stock/talk.jpg" },
  { icon: "rocket", title: "Startups", text: "A fast first website, landing pages and simple systems that grow with you.", image: "/images/stock/startup.jpg" },
  { icon: "home", title: "Real estate & PGs", text: "Listing pages, enquiry capture and booking trackers.", image: "/images/stock/realestate.jpg" },
];

// DUMMY pricing — edit names, prices and features to match your real offers.
export const plans = [
  { name: "Starter", price: "₹9,999", unit: "one-time", for: "A professional one-page website or landing page.", items: ["1–3 page responsive website", "Contact form + WhatsApp button", "Basic on-page SEO", "Google Analytics setup", "1 round of revisions", "Launch in ~1 week"] },
  { name: "Business", price: "₹24,999", unit: "one-time", for: "A complete multi-page website built to win enquiries.", items: ["Up to 8 custom pages", "SEO-ready structure & schema", "Google Business Profile setup", "Speed & Core Web Vitals optimised", "Blog or updates section", "2 rounds of revisions", "30 days of post-launch support"], featured: true },
  { name: "Growth", price: "Custom", unit: "quote", for: "Websites with automation, dashboards or custom features.", items: ["Everything in Business", "Enquiry automation", "Sheets dashboard", "Custom integrations", "Milestone-based delivery", "Support plan agreed in writing"] },
];

// SAMPLE testimonials — hidden on the live site unless NEXT_PUBLIC_SHOW_SAMPLES=1.
// Replace with real reviews (with the client's permission) before showing them.
export const testimonials = [
  { quote: "Sample review — replace with a real client quote. Clear communication from day one, and the new website brought in enquiries in the first week.", name: "Client name", role: "Owner, Sample Coaching Centre" },
  { quote: "Sample review — replace with a real client quote. The enquiry automation saves us hours every week and no lead gets missed now.", name: "Client name", role: "Founder, Sample Clinic" },
  { quote: "Sample review — replace with a real client quote. Honest advice, a fixed quote, and delivered on the date promised.", name: "Client name", role: "Director, Sample Retail Store" },
];

export const faqs = [
  { q: "What services do you offer?", a: "Business websites and landing pages, SEO and local search, business automation, Google Sheets dashboards and website care plans." },
  { q: "How much does a website cost?", a: "It depends on the pages and features you need. Starter websites begin at the price shown on the Pricing page. After a short free call I send a written quote with the exact price." },
  { q: "How long does a project take?", a: "A simple website usually takes one to three weeks. Larger websites and automations depend on scope. The delivery date is written in your quote." },
  { q: "Will my website be SEO-friendly?", a: "Yes. Every site includes clean page structure, titles and descriptions, schema markup, a sitemap, fast loading and Search Console setup." },
  { q: "Can you redesign an existing website?", a: "Yes. I'll review your current site, keep what works, and rebuild the rest — without losing your existing search rankings where possible." },
  { q: "Do you provide maintenance after launch?", a: "Yes. You get a walkthrough at handover, and optional monthly care plans for updates, backups and small changes." },
  { q: "Do you work with clients outside Bhubaneswar?", a: "Yes. Calls, previews and handover all happen online, so I work with businesses across India and abroad." },
  { q: "I'm not technical. Is that a problem?", a: "Not at all. I explain everything in simple words — in English, Hindi or Odia — and show you how to use what I build." },
];

export const budgets = ["Under ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹50,000", "Above ₹50,000"];
