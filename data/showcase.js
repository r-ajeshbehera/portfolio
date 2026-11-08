// Status options: "Demo Project", "In Development", "Team Project",
// "Academic Project", "Personal Project". Only use "Client Project" for real paid work.
// art options: chat, flow, sheet, chart, browser, template, school, exam, code, pdf

export const showcase = [
  {
    id: "sikshasadan", group: "built", status: "Team Project", art: "school", title: "Sikshasadan School Management System",
    description: "School management software and website, built by a team as my MCA final-year project. I worked on the backend.",
    tools: ["Angular", "Spring Boot", "MySQL", "JWT"], live: "https://sikshasadan.com",
  },
  {
    id: "1", group: "built", status: "Personal Project", art: "exam", title: "Automated Exam Portal",
    description: "A web-based MCQ exam system with teacher and student dashboards and instant results.",
    tools: ["PHP", "MySQL", "Bootstrap", "JavaScript"], image: "/images/p1-banner.png",
    screenshots: [{ src: "/images/p1s1.png", caption: "Teacher dashboard" }, { src: "/images/p1s6.png", caption: "Student dashboard" }, { src: "/images/p1s7.png", caption: "Instant result display" }],
    points: ["Teachers create and manage MCQ exams", "Students attempt exams and see results immediately", "Exam data and results are stored in MySQL"],
  },
  {
    id: "easypdftools", group: "built", status: "Personal Project", art: "pdf", title: "EasyPDFTools",
    description: "A browser-based toolkit with 48 PDF and image tools. Files are processed on the user's device, not uploaded.",
    tools: ["JavaScript", "pdf-lib", "PDF.js"],
  },
  {
    id: "campushire", group: "built", status: "Team Project", art: "browser", title: "CampusHire",
    description: "A placement management system for college placement teams and students. I worked on the backend.",
    tools: ["Java", "Spring Boot", "React", "MySQL"], github: "https://github.com/r-ajeshbehera/placement-management-system",
  },
  {
    id: "placement-drive-tracker", group: "built", status: "Personal Project", art: "code", title: "Placement Drive Tracker",
    description: "A console application for keeping track of campus placement drives.",
    tools: ["Core Java", "JDBC", "MySQL"], github: "https://github.com/r-ajeshbehera/placement-drive-tracker",
  },
  {
    id: "canteen-billing", group: "built", status: "Personal Project", art: "code", title: "Smart Canteen Billing System",
    description: "A billing application for a canteen, built with object-oriented Java.",
    tools: ["Core Java", "OOP"], github: "https://github.com/r-ajeshbehera/canteen-billing-system",
  },
  {
    id: "coaching-assistant", group: "demo", status: "Demo Project", art: "chat", title: "AI Coaching Centre Enquiry Assistant",
    description: "A concept assistant that answers questions about fees, batches and demo classes.",
    tools: ["n8n", "AI model", "Google Sheets"],
  },
  {
    id: "whatsapp-automation", group: "demo", status: "In Development", art: "flow", title: "WhatsApp Enquiry Automation Prototype",
    description: "A prototype that captures WhatsApp enquiries and queues a follow-up for the business owner.",
    tools: ["n8n", "WhatsApp API", "Google Sheets"],
  },
  {
    id: "expense-tracker", group: "demo", status: "Demo Project", art: "sheet", title: "Business Expense Tracker",
    description: "A spreadsheet for recording income and expenses, with a monthly summary.",
    tools: ["Google Sheets"],
  },
  {
    id: "sales-dashboard", group: "demo", status: "Demo Project", art: "chart", title: "Sales Dashboard",
    description: "A one-page view of sales by product and month, built with sample data.",
    tools: ["Google Sheets", "Charts"],
  },
  {
    id: "business-website", group: "demo", status: "Demo Project", art: "browser", title: "Business Website",
    description: "A sample website for a local business, with services, location and an enquiry form.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "digital-template", group: "demo", status: "In Development", art: "template", title: "Digital Product Template",
    description: "A downloadable business template planned for the digital products range.",
    tools: ["Google Sheets", "Canva"],
  },
  { id: "2", hidden: true, group: "built", status: "Personal Project", art: "browser", title: "Personal Website", description: "The website you are looking at now.", tools: ["Next.js", "React", "Supabase", "Vercel"] },
];

export const visibleProjects = showcase.filter((p) => !p.hidden);
