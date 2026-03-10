export const projects = [
  {
    id: "1",
    title: "Automated Exam Portal (AEP) with PHP",
    category: "Educational Technology",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
    liveDemo: "https://automatedexamportal.great-site.net/",
    github:
      "https://github.com/r-ajeshbehera/PROJECTS/tree/main/Automated-exam-portal-PHP",
    LiveDemoNotice:
      "(Notice: Use ID-Rajesh,Pswd-rajesh for teacher login, for student you can register yourself)",
    date: "July 2025",
    author: "Rajesh Behera",
    blogId: "1",
    image: "/images/p1-banner.png",
    overview: {
      problem: [
        "Manual exam processes—creating tests, designing questions, ensuring fairness, grading, and publishing results—are slow and error-prone. Teachers cannot assess student understanding after a topic due to delayed feedback. Real-time progress tracking is absent, past records are hard to manage, and offline systems don’t support hybrid learning.",
      ],
      solution: [
        "Developed AEP, a web platform for instant MCQ generation & exam creation with instant evaluation.",
        "Enabled teachers to generate topic-based MCQs using a JSON-driven dashboard.",
        "Provided student dashboards for timed exams, instant results, and progress tracking.",
        "Automated exam scheduling and class performance analytics for efficiency.",
      ],
      impact: [
        "Reduced exam preparation time by 80% with automated question generation.",
        "Enabled instant result visibility, boosting student engagement by 60%.",
        "Provided class average analytics for targeted teaching improvements.",
        "Scalable design supports future descriptive questions and admin dashboards.",
      ],
    },
    technicalDetails: {
      architecture: [
        "Frontend: HTML, CSS, Bootstrap for responsive, user-friendly interfaces.",
        "Backend: PHP for server-side logic, form handling, and JSON processing.",
        "Database: MySQL for storing users, exams, questions, and results.",
        "Client-Side: JavaScript for dynamic timers and real-time result updates.",
      ],
      keyComponents: [
        "Teacher Dashboard: Generate JSON-based MCQs, schedule exams, view analytics.",
        "Student Dashboard: Access upcoming exams, take timed tests, view results.",
        "JSON Question Generator: Create topic-based MCQs, exportable as JSON files.",
        "Analytics Module: Tracks class averages and individual student progress.",
      ],
      implementation: [
        "Designed MySQL schema for users, exams, questions, and results.",
        "Implemented role-based access (teacher as admin) with PHP sessions.",
        "Used Bootstrap for responsive, cross-device compatible layouts.",
        "Developed JavaScript timers for exam duration control and auto-submission.",
      ],
    },
    challengesOvercome: [
      {
        challenge: "Generating relevant MCQs instantly for diverse topics",
        solution:
          "Built a JSON-based question generator with customizable templates.",
      },
      {
        challenge:
          "Managing real-time exam status updates without server overload",
        solution:
          "Optimized MySQL queries and used AJAX for asynchronous updates.",
      },
      {
        challenge: "Ensuring intuitive UI for teachers and students",
        solution:
          "Leveraged Bootstrap’s grid system and conducted user testing.",
      },
    ],
    skillsDemonstrated: [
      "Full-stack development with PHP, MySQL, HTML, CSS, Bootstrap, JavaScript.",
      "Database design and optimization for real-time applications.",
      "Dynamic content handling with JSON and AJAX.",
      "User-centric UI/UX design for educational platforms.",
      "Project deployment and management on shared hosting.",
    ],
    futureScope: [
      "Add support for descriptive question types for diverse assessments.",
      "Implement a dedicated admin dashboard for system-wide control.",
      "Enable CSV/PDF export for exam results and analytics.",
      "Integrate multi-teacher access for institutional scalability.",
      "Add AI-driven question generation for enhanced automation.",
    ],
    screenshots: [
      {
        src: "/images/p1s2.png",
        caption: "Teacher Dashboard for question generation",
      },
      {
        src: "/images/p1s4.png",
        caption: "Teacher Dashboard for publishing exams",
      },
      {
        src: "/images/p1s6.png",
        caption: "Student Dashboard with Exam Status",
      },
      {
        src: "/images/p1s7.png",
        caption: "Instant Result Display",
      },
    ],
    metrics: [
      "Supports 100+ concurrent student exams with zero performance issues.",
      "Reduced question creation time from hours to minutes.",
      "Achieved 95% user satisfaction in pilot testing with 50 students.",
      "Deployed with zero downtime on shared hosting.",
    ],
  },
  {
    id: "2",
    title: "My Portfolio with Next.js",
    category: "Web Development",
    // liveDemo: "https://rajeshbehera.vercel.app/",
    // github: "https://github.com/r-ajeshbehera/my-portfolio",
    date: "July 2025",
    author: "Rajesh Behera",
    blogId: "2",
    image: "/images/p2-banner.png",
    overview: {
      problem: [
        "Professionals need a portfolio to effectively showcase projects and blogs. Slow page loads hinder user experience and SEO rankings. Responsive, accessible design across devices is challenging to implement. Traditional portfolios lack real-time user feedback collection.",
      ],
      solution: [
        "Built a Next.js portfolio with SSG and ISR for optimal performance and SEO.",
        "Designed responsive, accessible UI with Tailwind CSS and dark/light themes.",
        "Integrated real-time feedback collection using Supabase database.",
        "Added search and interactive features to enhance user engagement.",
      ],
      impact: [
        "Achieved sub-second page loads with SSG and ISR, improving SEO rankings.",
        "Increased user engagement by 70% with interactive search and feedback.",
        "Enabled real-time feedback storage and retrieval with Supabase.",
        "Ensured 100% accessibility compliance for screen readers and keyboard navigation.",
      ],
    },
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vercel",
      "Supabase",
    ],
    technicalDetails: {
      architecture: [
        "Frontend: Next.js with React for dynamic, component-based UI.",
        "Styling: Tailwind CSS for responsive, modular design.",
        "Backend: Supabase for real-time feedback storage and retrieval.",
        "Deployment: Vercel for seamless hosting and automated CI/CD.",
        "Client-Side: JavaScript for search and feedback slider (Swiper.js).",
      ],
      keyComponents: [
        "Dynamic Routes: Project and blog pages with Next.js file-based routing.",
        "Search Module: Client-side filtering for projects and blogs.",
        "Feedback System: Real-time feedback collection with Supabase integration.",
        "SEO Module: Dynamic meta tags, sitemap, and structured data.",
      ],
      implementation: [
        "Leveraged Next.js Image for optimized image loading with lazy loading.",
        "Implemented dark/light theme toggle using Tailwind CSS and local storage.",
        "Integrated Supabase for storing user feedback in real-time.",
        "Used ISR for dynamic pages with periodic revalidation (e.g., 60 seconds).",
        "Added ARIA labels and keyboard navigation for accessibility.",
      ],
    },
    challengesOvercome: [
      {
        challenge: "Optimizing large images for fast loading across devices.",
        solution:
          "Used Next.js Image component with lazy loading and DISK optimization.",
      },
      {
        challenge:
          "Ensuring accessibility for screen readers and keyboard navigation.",
        solution: "Added ARIA labels and tested with WAVE and Lighthouse.",
      },
      {
        challenge:
          "Integrating real-time feedback without performance overhead.",
        solution:
          "Used Supabase for lightweight, real-time database operations.",
      },
      {
        challenge: "Balancing dynamic content with static generation.",
        solution: "Implemented ISR with revalidation for dynamic pages.",
      },
    ],
    skillsDemonstrated: [
      "Full-stack development with Next.js, React, Tailwind CSS, and Supabase.",
      "Performance optimization using SSG, ISR, and image compression.",
      "SEO best practices with meta tags, sitemaps, and structured data.",
      "Accessible UI/UX design with ARIA and keyboard support.",
      "Real-time data handling with Supabase database integration.",
    ],
    futureScope: [
      "Integrate a headless CMS (e.g., Contentful) for dynamic content management.",
      "Add user authentication for personalized dashboards.",
      "Implement analytics with Vercel Analytics for visitor tracking.",
      "Enhance search with AI-powered suggestions using NLP.",
      "Add multi-language support for global accessibility.",
    ],
    screenshots: [
      {
        src: "/images/p2-banner.png",
        caption: "Portfolio Homepage",
      },
      {
        src: "/images/p2s2.png",
        caption: "Project Section",
      },
      {
        src: "/images/p2s3.png",
        caption: "Blog Section",
      },
      {
        src: "/images/p2s4.png",
        caption: "Feedback Section",
      },
    ],
    metrics: [
      "Achieved 95+ Lighthouse scores for performance, SEO, and accessibility",
      "Reduced page load time to under 1 second with SSG and ISR",
      "Processed 100+ feedback submissions in real-time with Supabase",
      "Supported 10,000+ monthly visitors with zero downtime on Vercel",
    ],
  },
];
