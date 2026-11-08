// Edit this file to update the website. No other file needs to change for
// everyday updates to services, skills, products, links or videos.

export const site = {
  name: "Rajesh Behera",
  brand: "Rajesh Behera Digital Studio",
  positioning: "AI Automation & Digital Solutions",
  tagline: "Learn AI. Build Solutions. Create Income.",
  message: "I build practical digital solutions using AI and technology to help businesses work smarter.",
  email: "rajeshbehera.works@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajesh-behera-695a0224b",
  github: "https://github.com/r-ajeshbehera",
  location: "Bhubaneswar, Odisha, India",
};

export const youtube = {
  name: "Rajesh Behera | AI Unlocked",
  url: "https://youtube.com/@r_ajeshbehera",
  description: "Learn AI, explore automation, build digital solutions and follow my journey of creating a digital business.",
  // Add videos here, newest first: { id: "YouTube video id", title: "Video title" }
  videos: [],
};

// Availability options: "available", "pilot" or "coming"
export const statusLabels = {
  available: "Available",
  pilot: "Pilot projects",
  coming: "Coming soon",
};

export const services = [
  {
    id: "automation",
    icon: "Workflow",
    title: "AI & Business Automation",
    summary: "Connect the tools you already use so routine work happens without manual effort.",
    status: "pilot",
    items: [
      "Business workflow automation",
      "AI chatbot prototypes",
      "Customer enquiry automation",
      "Lead capture and follow-up workflows",
      "Google Sheets automation",
      "Email and notification automation",
    ],
  },
  {
    id: "websites",
    icon: "Globe",
    title: "Website Development",
    summary: "Clear, fast websites that explain what you do and make it easy to contact you.",
    status: "available",
    items: [
      "Personal portfolio websites",
      "Business websites",
      "Landing pages",
      "WordPress websites",
      "Website redesign and maintenance",
    ],
  },
  {
    id: "spreadsheets",
    icon: "Table2",
    title: "Spreadsheet & Business Solutions",
    summary: "Simple systems for tracking sales, stock, expenses and reports.",
    status: "pilot",
    items: [
      "Excel and Google Sheets templates",
      "Business dashboards",
      "Sales and inventory trackers",
      "Expense management systems",
      "Automated reports",
    ],
  },
  {
    id: "design",
    icon: "Palette",
    title: "Digital Design",
    summary: "Clean visual material for your business and social channels.",
    status: "coming",
    items: ["Canva designs", "Social media graphics", "YouTube thumbnails", "Presentations", "eBook and PDF designs"],
  },
  {
    id: "products",
    icon: "Package",
    title: "Digital Products",
    summary: "Ready-made templates and guides you can download and use.",
    status: "coming",
    items: ["Business templates", "Automation templates", "Digital planners", "eBooks and guides", "Spreadsheet templates"],
  },
];

// Levels: 1 = Learning, 2 = Working knowledge, 3 = Confident
export const skillLevels = { 1: "Learning", 2: "Working knowledge", 3: "Confident" };

export const skills = [
  { name: "Java", level: 3 },
  { name: "SQL and MySQL", level: 3 },
  { name: "GitHub", level: 3 },
  { name: "AI tools", level: 2 },
  { name: "Google Sheets", level: 2 },
  { name: "HTML and CSS", level: 1 },
  { name: "JavaScript", level: 1 },
  { name: "Python", level: 1 },
  { name: "n8n", level: 1 },
  { name: "WordPress", level: 1 },
  { name: "Canva", level: 1 },
];

// Add paymentUrl only when a real checkout link exists. The buy button then appears.
export const products = [
  { title: "Business automation templates", description: "Ready-to-import workflows for common business tasks.", icon: "Workflow", paymentUrl: "" },
  { title: "Excel and Google Sheets templates", description: "Trackers and dashboards you can start using straight away.", icon: "Table2", paymentUrl: "" },
  { title: "AI workflow templates", description: "Repeatable ways to use AI tools in everyday work.", icon: "Sparkles", paymentUrl: "" },
  { title: "eBooks and PDF guides", description: "Short practical guides on AI and digital skills.", icon: "BookOpen", paymentUrl: "" },
  { title: "Business planners", description: "Simple planners for goals, tasks and money.", icon: "CalendarDays", paymentUrl: "" },
];

export const interests = ["Artificial intelligence", "Business automation", "Web development", "Software and digital products", "Technology and entrepreneurship"];

export const education = [
  { title: "MCA", detail: "Silicon University, Bhubaneswar, 2025 to 2027 (in progress)" },
  { title: "B.Sc. (Hons.) Computer Science", detail: "D.A.V. Autonomous College, Titilagarh, 2022 to 2025" },
];

export const training = [
  { title: "Full-stack Java Summer Internship Course", detail: "Silicon University, May to July 2026" },
  { title: "Foundations of Cybersecurity", detail: "Google on Coursera, April 2025", href: "/certificates/coursera_google_cybersecurity_certificate.pdf" },
];
