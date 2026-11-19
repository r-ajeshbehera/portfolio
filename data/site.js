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
  { href: "/demos", label: "Demos" },
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
    slug: "jansunwai",
    label: "Personal project",
    title: "JanSunwai — AI Civic Complaint Platform",
    category: "Full-stack web app",
    year: "2026",
    image: "/images/projects/jansunwai_01-home.jpg",
    video: "/media/projects/jansunwai.mp4",
    poster: "/media/projects/jansunwai-poster.jpg",
    summary: "Citizens file complaints in English, Hindi or Odia. AI suggests the department, an officer reviews, and every case is tracked to resolution.",
    problem: "Civic complaints get lost or reach the wrong department, and citizens can't track what happens next.",
    solution: "Spring Boot REST APIs with PostgreSQL + PostGIS, AI-assisted categorisation with human review, duplicate detection across languages and SLA-based escalation, plus a React front end with maps and dashboards.",
    results: ["Complaints in English, Hindi and Odia", "AI suggestion + officer review, never auto-decided", "Duplicate detection across languages", "SLA escalation and ward reports"],
    tools: ["Java 21", "Spring Boot", "Spring AI", "PostgreSQL", "React", "Docker"],
    shots: [
      { src: "/images/projects/jansunwai_02-home-odia.jpg", caption: "Home page in Odia" },
      { src: "/images/projects/jansunwai_03-new-complaint-hindi.jpg", caption: "New complaint in Hindi" },
      { src: "/images/projects/jansunwai_04-citizen-complaint.jpg", caption: "Citizen complaint tracking" },
    ],
    links: { github: "https://github.com/r-ajeshbehera/jansunwai" },
  },
  {
    slug: "aashraynet",
    label: "Personal project",
    title: "AashrayNet — Cyclone Shelter & Relief Management",
    category: "Full-stack web app",
    year: "2026",
    image: "/images/projects/aashraynet_01-public-home.jpg",
    video: "/media/projects/aashraynet.mp4",
    poster: "/media/projects/aashraynet-poster.jpg",
    summary: "Live shelter occupancy, relief stock and supply requests for Odisha districts during cyclones — with a public page families can use to find shelters.",
    problem: "During cyclones, shelter occupancy and relief supplies are tracked on paper and phone calls, so people are sent to full shelters.",
    solution: "Secure role-based dashboards for district, shelter and supply staff; race-safe check-in that never double-books the last place; nearest-shelter search and shortage alerts.",
    results: ["Nearest shelter with free places", "Live occupancy for every shelter", "Race-safe check-in", "Supply shortage alerts"],
    tools: ["Java 21", "Spring Boot", "Spring Security", "MySQL", "React", "Docker"],
    shots: [
      { src: "/images/projects/aashraynet_03-public-available-shelters.jpg", caption: "Public: available shelters" },
      { src: "/images/projects/aashraynet_04-district-dashboard.jpg", caption: "District dashboard" },
      { src: "/images/projects/aashraynet_02-public-family-finder.jpg", caption: "Family finder" },
    ],
    links: { github: "https://github.com/r-ajeshbehera/aashraynet" },
  },
  {
    slug: "milansetu",
    label: "Personal project",
    title: "MilanSetu — Festival Lost & Found Platform",
    category: "Full-stack web app",
    year: "2026",
    image: "/images/projects/milansetu_02-family-dashboard.jpg",
    video: "/media/projects/milansetu.mp4",
    poster: "/media/projects/milansetu-poster.jpg",
    summary: "Reunites lost children and elderly people with their families at crowded festivals like Rath Yatra, using QR wristbands and verified handovers.",
    problem: "At large festivals, lost children and elderly people are reported on paper at scattered help desks, so reunions take hours.",
    solution: "QR wristbands linked to family profiles, a volunteer scan flow, an explainable matching engine and an OTP-verified handover that is safe under concurrency.",
    results: ["QR wristband scan by volunteers", "Explainable match suggestions", "OTP-verified, concurrency-safe handover", "Help desk case management"],
    tools: ["Java 21", "Spring Boot", "JWT", "MySQL", "React", "Docker"],
    shots: [
      { src: "/images/projects/milansetu_03-family-members-qr.jpg", caption: "Family members with QR" },
      { src: "/images/projects/milansetu_04-volunteer-scan-result.jpg", caption: "Volunteer scan result" },
      { src: "/images/projects/milansetu_01-login.jpg", caption: "Sign in" },
    ],
    links: { github: "https://github.com/r-ajeshbehera/milansetu" },
  },
  {
    slug: "sikshasadan",
    label: "Team project",
    title: "Siksha Sadan School Management System",
    category: "Web application",
    year: "2026",
    image: "/images/stock/education.jpg",
    summary: "School website and admin system for admissions, fees and class promotion. Built by a team as an MCA final-year project — I worked on the backend.",
    problem: "The school managed admissions and fees on paper registers, and had no public website parents could trust.",
    solution: "A public website plus an admin panel for student records, fee collection and academic-year promotion, with secure logins. My part was the Spring Boot + MySQL backend and its APIs.",
    results: ["Paper admission and fee registers moved into one system", "Role-based, secure admin access", "Academic-year promotion with history"],
    tools: ["Angular", "Spring Boot", "MySQL", "JWT", "Docker"],
    links: {},
  },
  {
    slug: "campushire",
    label: "Personal project",
    title: "CampusHire — Placement Management System",
    category: "Full-stack web app",
    year: "2026",
    image: "/images/stock/students.jpg",
    summary: "Role-based portals for students, recruiters, placement coordinators and admins to run campus drives end to end.",
    problem: "Campus placement drives are coordinated through spreadsheets, emails and WhatsApp groups, so eligibility and status get confused.",
    solution: "Spring Boot 3 APIs with JWT security, role-based portals in React, Flyway-managed MySQL schema, Docker setup and CI.",
    results: ["Four role-based portals", "Drive eligibility and applications in one place", "Docker + CI setup"],
    tools: ["Java 21", "Spring Boot", "React", "MySQL", "Docker"],
    links: { github: "https://github.com/r-ajeshbehera/placement-management-system" },
  },
  {
    slug: "sentinelx",
    label: "Personal project",
    title: "SentinelX — Security Operations Center Platform",
    category: "Full-stack web app",
    year: "2026",
    image: "/images/stock/dashboard.jpg",
    summary: "A SOC platform for alert triage, incident response, threat intelligence and vulnerability management.",
    problem: "Security teams juggle alerts, incidents and vulnerabilities across separate tools and spreadsheets.",
    solution: "A single platform with JWT auth and role-based access for alert triage, incident workflow, threat intel and vulnerability tracking.",
    results: ["Alert triage queue", "Incident response workflow", "Role-based access control"],
    tools: ["Java 21", "Spring Boot", "React", "PostgreSQL"],
    links: { github: "https://github.com/r-ajeshbehera/cyber-security-management-system" },
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
    slug: "placement-drive-tracker",
    label: "Personal project",
    title: "Placement Drive Tracker",
    category: "Java application",
    year: "2026",
    image: "/images/stock/planning.jpg",
    summary: "Replaced my Excel work as Placement Coordinator: finds eligible students for each company drive automatically.",
    problem: "Checking every student against each company's eligibility rules in Excel took hours for every drive.",
    solution: "A Core Java + JDBC + MySQL application with console and web views that filters eligible students instantly.",
    results: ["Eligibility check in seconds", "No framework — pure Core Java & JDBC", "Used for real coordinator work"],
    tools: ["Core Java", "JDBC", "MySQL"],
    links: { github: "https://github.com/r-ajeshbehera/placement-drive-tracker" },
  },
];

// Interactive demos — one for each service. All use sample data.
export const demos = [
  { slug: "business-website", service: "website-development", icon: "globe", title: "Business website demo", text: "A complete one-page website for a sample coaching centre — the kind of site I build for small businesses.", image: "/images/stock/students.jpg" },
  { slug: "seo-checker", service: "seo-local-search", icon: "search", title: "SEO snippet checker", text: "A working tool: type a page title and description and see how it looks on Google, with instant SEO checks.", image: "/images/stock/analytics.jpg" },
  { slug: "enquiry-assistant", service: "business-automation", icon: "flow", title: "Enquiry assistant demo", text: "Chat with a sample coaching-centre assistant and watch every enquiry land in a live sheet.", image: "/images/stock/dashboard.jpg" },
  { slug: "expense-dashboard", service: "sheets-dashboards", icon: "sheet", title: "Expense dashboard demo", text: "Add income and expenses and watch the monthly dashboard and charts update instantly.", image: "/images/stock/planning.jpg" },
  { slug: "site-health", service: "website-care", icon: "shield", title: "Website care report demo", text: "A sample monthly care report: uptime, speed, backups, updates and the changes made.", image: "/images/stock/code.jpg" },
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
