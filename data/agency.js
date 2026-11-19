// ─────────────────────────────────────────────────────────────
// Edit this one file to update the website content.
// Only publish what is true. Never add invented clients, numbers or reviews.
// ─────────────────────────────────────────────────────────────

export const site = {
  brand: "Rajesh Behera Digital Studio",
  short: "RB Digital Studio",
  founder: "Rajesh Behera",
  tagline: "Practical websites and automation for growing businesses.",
  description:
    "Rajesh Behera Digital Studio builds business websites, workflow automation and Google Sheets systems for startups and small businesses in Bhubaneswar, across India and online.",
  location: "Bhubaneswar, Odisha, India",
  email: "rajeshbehera.works@gmail.com",
  // Leave empty to hide. Example: "919xxxxxxxxx" (country code + number, no +)
  whatsapp: "",
  phone: "",
  // Leave empty until you can honestly promise it, e.g. "within one working day"
  responseTime: "",
  social: {
    linkedin: "https://www.linkedin.com/in/r-ajeshbehera",
    github: "https://github.com/r-ajeshbehera",
    youtube: "https://youtube.com/@r_ajeshbehera",
  },
  languages: ["English", "Hindi", "Odia"],
};

// status: "available" | "pilot" | "coming"   (coming = shown but no detail page)
export const services = [
  {
    slug: "website-development",
    status: "available",
    icon: "globe",
    title: "Website Development",
    short: "Fast, clear business websites and landing pages that explain what you do and turn visitors into enquiries.",
    problems: [
      "Customers can't find you online, or your old site looks outdated on mobile.",
      "Your website doesn't explain your services clearly, so people call with basic questions.",
      "Enquiries are lost because there's no simple way to contact you.",
    ],
    solution:
      "A clean, mobile-first website built around what your customers need to know and the one action you want them to take — call, WhatsApp, or send an enquiry.",
    deliverables: [
      "Business website or landing page (up to the pages agreed in the quote)",
      "Mobile-friendly, fast-loading design",
      "Contact form, WhatsApp, call and map buttons",
      "Basic on-page SEO: titles, descriptions, sitemap",
      "Hosting and domain setup guidance",
      "Handover of all files and logins",
    ],
    tools: ["HTML", "CSS", "JavaScript", "Next.js", "WordPress (on request)"],
    stages: ["Free call", "Written quote", "Design preview", "Build", "Your review", "Launch & handover"],
    faqs: [
      { q: "Can you redesign my existing website?", a: "Yes. I'll review what you have, keep what works, and rebuild what doesn't. The scope is written into the quote." },
      { q: "Do I need to provide the content?", a: "You know your business best, so I'll ask you for the key details and photos. I can help you write and structure the text." },
      { q: "Who owns the website?", a: "You do. At handover you receive all files, logins and access." },
    ],
  },
  {
    slug: "business-automation",
    status: "pilot",
    icon: "flow",
    title: "Business Automation",
    short: "Connect the tools you already use so enquiries, follow-ups and reminders happen without manual work.",
    problems: [
      "Enquiries on WhatsApp or email go unanswered after business hours.",
      "Leads are written in notebooks or scattered chats and forgotten.",
      "You copy the same information between apps every day.",
    ],
    solution:
      "Simple automations that reply to common questions, save every enquiry to one sheet, and remind you to follow up — built around the tools you already use.",
    deliverables: [
      "Enquiry capture from forms, email or WhatsApp into Google Sheets",
      "Automatic replies for common questions",
      "Follow-up reminders and notifications",
      "Simple AI-assisted replies where they genuinely help",
      "Short guide and walkthrough so you can run it yourself",
    ],
    tools: ["n8n", "Google Sheets", "Email", "WhatsApp Business"],
    stages: ["Free call", "Map your current process", "Written quote", "Build & test", "Your review", "Go live & training"],
    faqs: [
      { q: "What does “pilot” mean?", a: "It means I'm building my first projects in this service. I'll be upfront about what's new for me, and we'll start small so you can see it working before expanding it." },
      { q: "Will it work with my current tools?", a: "Usually, yes. In the first call I'll check what you use and tell you honestly if something isn't possible." },
    ],
  },
  {
    slug: "sheets-and-trackers",
    status: "pilot",
    icon: "sheet",
    title: "Sheets & Trackers",
    short: "Simple Excel and Google Sheets systems for sales, stock, expenses and reports — no new software to learn.",
    problems: [
      "You don't know your real monthly sales or expenses without hours of calculation.",
      "Stock runs out because nobody tracks it consistently.",
      "Reports for partners or staff take too long to prepare.",
    ],
    solution:
      "A clean, easy-to-use spreadsheet system with the right formulas and a one-page dashboard, set up for how your business actually works.",
    deliverables: [
      "Sales, stock or expense tracker",
      "Monthly summary dashboard with charts",
      "Automatic totals and simple reports",
      "Sharing and access set up for your team",
      "Walkthrough so you can use and update it",
    ],
    tools: ["Google Sheets", "Microsoft Excel"],
    stages: ["Free call", "Written quote", "First version", "Your review", "Final version & training"],
    faqs: [
      { q: "Do I need Excel?", a: "No. Google Sheets is free and works in any browser or on your phone. Excel is fine too if you prefer it." },
    ],
  },
  { slug: "digital-design", status: "coming", icon: "design", title: "Digital Design", short: "Social media graphics, presentations and simple brand material." },
  { slug: "digital-products", status: "coming", icon: "box", title: "Templates & Digital Products", short: "Ready-made trackers and automation templates you can download and use." },
];

export const statusLabel = { available: "Available", pilot: "Pilot projects", coming: "Coming soon" };

// label must be honest: "Personal project", "Team project", "Demo project". Use "Client project" only for real paid work.
export const projects = [
  {
    slug: "automated-exam-portal",
    label: "Personal project",
    title: "Automated Exam Portal",
    category: "Web application",
    summary: "A web-based MCQ exam system with separate teacher and student dashboards and instant results.",
    problem: "Teachers spend a lot of time creating, conducting and checking class tests by hand.",
    solution: "A web portal where teachers create MCQ exams and students attempt them online, with results calculated instantly and stored in a database.",
    tools: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: "/images/p1-banner.png",
    shots: [
      { src: "/images/p1s1.png", caption: "Teacher dashboard" },
      { src: "/images/p1s6.png", caption: "Student dashboard" },
      { src: "/images/p1s7.png", caption: "Instant result" },
    ],
    links: { github: "https://github.com/r-ajeshbehera/PROJECTS/tree/main/Automated-exam-portal-PHP" },
  },
  {
    slug: "sikshasadan",
    label: "Team project",
    title: "Sikshasadan School Management System",
    category: "Web application",
    summary: "School management software and public website, built by a team as an MCA final-year project. I worked on the backend.",
    problem: "A school needed one place to manage students, staff and information, plus a public website.",
    solution: "A web application with an Angular front end and a Spring Boot + MySQL backend secured with JWT. My part was the backend.",
    tools: ["Angular", "Spring Boot", "MySQL", "JWT"],
    art: "school",
    links: { live: "https://sikshasadan.com" },
  },
  {
    slug: "jansunwai",
    label: "Personal project",
    title: "JanSunwai — Civic Complaint Platform",
    category: "Full-stack application",
    summary: "Citizens file complaints in English, Hindi or Odia, and each one is routed to the right department.",
    problem: "Civic complaints get lost or reach the wrong department, and tracking them is hard.",
    solution: "A full-stack platform with Spring Boot REST APIs, PostgreSQL, AI-assisted categorisation and a React front end with a map view and dashboards.",
    tools: ["Spring Boot", "PostgreSQL", "React", "Docker"],
    art: "flow",
    links: { github: "https://github.com/r-ajeshbehera/jansunwai" },
  },
  {
    slug: "aashraynet",
    label: "Personal project",
    title: "AashrayNet — Cyclone Shelter Management",
    category: "Backend application",
    summary: "Tracks shelter occupancy, relief stock and supply requests during cyclones, for four user roles.",
    problem: "During cyclones, shelter occupancy and relief supplies are tracked on paper and by phone.",
    solution: "Secure REST APIs for shelter check-ins, relief stock and supply requests, with protection against double-booking the last bed.",
    tools: ["Spring Boot", "Spring Security", "MySQL"],
    art: "chart",
    links: { github: "https://github.com/r-ajeshbehera/aashraynet" },
  },
  {
    slug: "coaching-enquiry-assistant",
    label: "Demo project",
    title: "Coaching Centre Enquiry Assistant",
    category: "Automation",
    summary: "A concept assistant that answers questions about fees, batches and demo classes, and logs each enquiry to a sheet.",
    problem: "Coaching centres miss enquiries that arrive after hours and repeat the same answers all day.",
    solution: "An automation that replies to common questions and saves each enquiry with its details for follow-up. Built with sample data.",
    tools: ["n8n", "AI model", "Google Sheets"],
    art: "chat",
    links: {},
  },
  {
    slug: "business-expense-tracker",
    label: "Demo project",
    title: "Business Expense Tracker",
    category: "Spreadsheet system",
    summary: "A Google Sheets tracker for income and expenses with an automatic monthly summary.",
    problem: "Small business owners don't see their monthly profit without manual calculation.",
    solution: "A simple entry sheet with categories and a dashboard that totals everything by month. Built with sample data.",
    tools: ["Google Sheets"],
    art: "sheet",
    links: {},
  },
];

export const reasons = [
  { title: "You work directly with me", text: "One person from first call to handover. No middlemen, no passing you around." },
  { title: "Written quote first", text: "Scope, price and delivery date in writing before any work starts." },
  { title: "Clear communication", text: "Simple explanations in English, Hindi or Odia — no confusing jargon." },
  { title: "Honest about limits", text: "If something isn't a good fit or I can't do it well, I'll tell you." },
  { title: "Built to be maintained", text: "Clean, documented work you can update — and you own every file." },
  { title: "Help after launch", text: "A walkthrough at handover so you're confident using what was built." },
];

export const process = [
  { title: "Free consultation", text: "A short call to understand your business and the problem you want solved." },
  { title: "Requirements", text: "I ask the right questions and note exactly what's needed — and what isn't." },
  { title: "Proposal & quote", text: "A written scope with price, timeline and what's included." },
  { title: "Design & prototype", text: "You see a preview or first version early and give feedback." },
  { title: "Build", text: "Development with regular updates, so there are no surprises." },
  { title: "Testing", text: "Checked on mobile and desktop, with forms and links tested." },
  { title: "Review & launch", text: "You approve the final version, then it goes live." },
  { title: "Handover", text: "All files and logins handed over, with a walkthrough on how to use it." },
];

export const industries = [
  { title: "Education & coaching", text: "Enquiry handling, admissions forms, batch and fee information." },
  { title: "Clinics & healthcare", text: "Appointment enquiries, clinic websites and patient reminders." },
  { title: "Retail & shops", text: "Product catalogues, stock trackers and sales summaries." },
  { title: "Professional services", text: "Clear service websites and lead follow-up for consultants and firms." },
  { title: "Startups & small businesses", text: "A credible first website and simple systems that grow with you." },
  { title: "Real estate & PGs", text: "Listings pages, enquiry capture and booking trackers." },
];

export const faqs = [
  { q: "What services do you offer?", a: "Business websites and landing pages, business automation (enquiries, follow-ups, reminders), and Google Sheets or Excel tracking systems." },
  { q: "How much does a website cost?", a: "It depends on the pages and features you need. After a short free call, I send a written quote with the exact price, so you know the cost before anything starts." },
  { q: "How long does a project take?", a: "A simple website or tracker usually takes one to three weeks. Automations depend on the tools involved. The delivery date is written in the quote." },
  { q: "How does the process work?", a: "Free call, written quote, a preview for your feedback, build, your review, then launch and handover. You always know what's happening." },
  { q: "Can you redesign an existing website?", a: "Yes. I'll review your current site, keep what works, and rebuild the rest." },
  { q: "Do you provide maintenance?", a: "Support after launch can be included in the quote. At minimum, you get a walkthrough and all access so you're never locked in." },
  { q: "Do you work with clients outside Bhubaneswar?", a: "Yes. Everything can be done online — calls, previews and handover. Clients outside India are welcome too." },
  { q: "I'm not technical. Is that a problem?", a: "Not at all. I explain everything in simple words and show you how to use what I build." },
];
