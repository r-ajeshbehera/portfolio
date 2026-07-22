export const projects = [
  {
    id: "1",
    title: "Automated Exam Portal (AEP)",
    category: "Educational Technology",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
    liveDemo: "https://automatedexamportal.great-site.net/",
    github:
      "https://github.com/r-ajeshbehera/PROJECTS/tree/main/Automated-exam-portal-PHP",
    LiveDemoNotice:
      "(Use ID: Rajesh, Password: rajesh for teacher login. Students can register.)",
    date: "July 2025",
    author: "Rajesh Behera",
    blogId: "1",
    image: "/images/p1-banner.png",

    overview: {
      problem: [
        "Manual exam processes take time for creating, conducting, and evaluating tests.",
        "Teachers cannot assess student understanding immediately after a topic.",
        "Managing exam records manually is difficult and inefficient.",
      ],
      solution: [
        "Developed a web-based system for creating and conducting MCQ exams.",
        "Enabled teachers to generate and manage exams easily.",
        "Provided students with instant results after exam submission.",
        "Stored exam data and results using MySQL database.",
      ],
      impact: [
        "Reduced manual effort in exam creation and evaluation.",
        "Enabled quick assessment of student performance.",
        "Improved efficiency in managing exam records.",
      ],
    },

    technicalDetails: {
      architecture: [
        "Frontend: HTML, CSS, Bootstrap for responsive UI.",
        "Backend: PHP for handling logic and form processing.",
        "Database: MySQL for storing users, exams, and results.",
        "Client-side: JavaScript for timers and validations.",
      ],
      keyComponents: [
        "Teacher Dashboard: Create and manage exams.",
        "Student Dashboard: Attempt exams and view results.",
        "Exam Module: Handles question display and submission.",
        "Result Module: Calculates and displays scores.",
      ],
      implementation: [
        "Designed database schema for exams and users.",
        "Implemented login system using PHP sessions.",
        "Used Bootstrap for responsive design.",
        "Added timer functionality using JavaScript.",
      ],
    },

    challengesOvercome: [
      {
        challenge: "Generating flexible MCQ questions",
        solution: "Used structured format to store and manage questions.",
      },
      {
        challenge: "Managing exam timing",
        solution: "Implemented JavaScript-based timer with validation.",
      },
      {
        challenge: "Designing simple UI",
        solution: "Used Bootstrap for clean and responsive layout.",
      },
    ],

    skillsDemonstrated: [
      "Backend development using PHP and MySQL.",
      "Database design and CRUD operations.",
      "Frontend development using HTML, CSS, Bootstrap.",
      "Basic JavaScript for interactivity.",
      "Building complete web applications.",
    ],

    futureScope: [
      "Add descriptive type questions.",
      "Improve UI design and user experience.",
      "Add admin dashboard for better management.",
    ],

    screenshots: [
      {
        src: "/images/p1s2.png",
        caption: "Teacher Dashboard",
      },
      {
        src: "/images/p1s4.png",
        caption: "Exam Creation Interface",
      },
      {
        src: "/images/p1s6.png",
        caption: "Student Dashboard",
      },
      {
        src: "/images/p1s7.png",
        caption: "Result Display",
      },
    ],

    metrics: [
      "Successfully tested with multiple users.",
      "Reduced manual exam effort significantly.",
      "Provides instant result generation.",
    ],
  },

  {
    id: "2",
    title: "Personal Portfolio Website",
    category: "Web Development",
    date: "July 2025",
    author: "Rajesh Behera",
    blogId: "2",
    image: "/images/p2-banner.png",

    overview: {
      problem: [
        "Students need a platform to showcase their projects and skills.",
        "Traditional portfolios lack interactivity and proper structure.",
        "Slow loading websites affect user experience.",
      ],
      solution: [
        "Built a personal portfolio website using Next.js.",
        "Displayed projects, blogs, and skills in structured format.",
        "Implemented responsive design for all devices.",
        "Added feedback feature for user interaction.",
      ],
      impact: [
        "Improved online presence for showcasing projects.",
        "Made it easier for recruiters to view work.",
        "Provided a clean and professional UI.",
      ],
    },

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vercel",
    ],

    technicalDetails: {
      architecture: [
        "Frontend: Next.js with React components.",
        "Styling: Tailwind CSS for responsive design.",
        "Deployment: Vercel for hosting.",
      ],
      keyComponents: [
        "Home Page: Introduction and overview.",
        "Projects Section: Displays all projects.",
        "Blog Section: Shows technical blogs.",
        "Contact Section: Provides contact details.",
      ],
      implementation: [
        "Used Next.js for routing and rendering.",
        "Designed UI using Tailwind CSS.",
        "Deployed project using Vercel.",
      ],
    },

    challengesOvercome: [
      {
        challenge: "Designing responsive layout",
        solution: "Used Tailwind CSS for mobile-friendly design.",
      },
      {
        challenge: "Organizing content properly",
        solution: "Structured components and sections clearly.",
      },
    ],

    skillsDemonstrated: [
      "Frontend development using React and Next.js.",
      "Responsive UI design using Tailwind CSS.",
      "Component-based architecture.",
      "Deployment using Vercel.",
    ],

    futureScope: [
      "Add more projects and blogs.",
      "Improve UI/UX design.",
      "Add analytics for tracking visitors.",
    ],

    screenshots: [
      {
        src: "/images/p2-banner.png",
        caption: "Homepage",
      },
      {
        src: "/images/p2s2.png",
        caption: "Projects Section",
      },
      {
        src: "/images/p2s3.png",
        caption: "Blog Section",
      },
      {
        src: "/images/p2s4.png",
        caption: "Contact Section",
      },
    ],

    metrics: [
      "Successfully deployed on Vercel.",
      "Responsive across multiple devices.",
      "Improved project visibility.",
    ],
  },
];
