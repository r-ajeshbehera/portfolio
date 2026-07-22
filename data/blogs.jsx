export const rawBlogs = [
  {
    id: "1",
    title: "Building an Automated Exam Portal: My Journey",
    description:
      "A project focused on developing a real-time MCQ-based exam system to simplify classroom assessments and improve evaluation efficiency.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
    author: "Rajesh Behera",
    projectId: "1",
    story: {
      inspiration: [
        "In many classrooms, teachers face difficulty in conducting instant assessments after completing a lesson.",
        "Traditional exam methods require significant time for preparation and evaluation.",
        "I aimed to build a system that allows quick MCQ exam creation with real-time results.",
        "This idea led to the development of the Automated Exam Portal (AEP).",
      ],
      journey: [
        "Developed the backend using PHP and MySQL to manage exam logic and data.",
        "Designed a responsive user interface using Bootstrap for better accessibility.",
        "Implemented a JSON-based system to simplify dynamic MCQ generation.",
        "Created separate dashboards for teachers and students for better usability.",
      ],
      breakthroughs: [
        "Built a teacher dashboard to create and manage exams efficiently.",
        "Developed a student portal with real-time exam participation and results.",
        "Added performance analytics to track class-level insights.",
        "Used AJAX to enable smooth updates without page reload.",
      ],
    },
    challengesFaced: [
      "Difficulty in generating flexible MCQs for different topics\nSolution: Implemented a JSON-based dynamic question structure.",
      "Issues with synchronizing exam timers across devices\nSolution: Combined JavaScript timers with server-side validation.",
      "Designing a user-friendly interface for non-technical users\nSolution: Used Bootstrap and conducted usability testing.",
    ],
    lessonsLearned: [
      "Improved understanding of PHP and MySQL for backend development.",
      "Learned real-time data handling using AJAX and JSON.",
      "Gained experience in building responsive UI using Bootstrap.",
      "Understood the importance of user-centric design.",
    ],
    readerTakeaways: [
      "Focus on solving real-world problems for impactful projects.",
      "Use simple and reliable technologies for faster development.",
      "Test applications with users to improve usability.",
      "Plan for scalability and future enhancements.",
    ],
    callToAction: [
      "Explore the live demo to see the system in action.",
      "Review the source code on GitHub.",
      "Share feedback to improve the platform.",
      "Follow for more project-based learning content.",
    ],
    screenshots: [
      { src: "/images/p1s1.png", caption: "Teacher Dashboard" },
      { src: "/images/p1s2.png", caption: "Question Generation Interface" },
      { src: "/images/p1s6.png", caption: "Student Dashboard with Exam Status" },
      { src: "/images/p1s7.png", caption: "Instant Result Display" },
    ],
  },

  {
    id: "2",
    title: "Crafting My Portfolio with Next.js: A Developer's Journey",
    description:
      "A project focused on building a fast, responsive, and SEO-friendly personal portfolio to showcase projects and technical skills.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vercel",
      "Supabase",
    ],
    author: "Rajesh Behera",
    projectId: "2",
    story: {
      inspiration: [
        "I needed a platform to professionally showcase my projects and technical skills.",
        "Wanted to build a fast and SEO-friendly portfolio to improve visibility.",
        "Focused on creating a responsive design that works across all devices.",
        "Also aimed to integrate real-time feedback for better user interaction.",
      ],
      journey: [
        "Used Next.js to leverage server-side rendering and static generation.",
        "Designed the UI using Tailwind CSS for a clean and responsive layout.",
        "Integrated Supabase to handle real-time feedback functionality.",
        "Deployed the application on Vercel for seamless hosting and updates.",
      ],
      breakthroughs: [
        "Achieved fast loading performance using Next.js optimization techniques.",
        "Built a real-time feedback system using Supabase.",
        "Implemented search functionality for projects and blogs.",
        "Ensured accessibility and responsiveness across devices.",
      ],
    },
    challengesFaced: [
      "Optimizing images for better performance\nSolution: Used Next.js Image optimization and lazy loading.",
      "Ensuring accessibility compliance\nSolution: Implemented semantic HTML and accessibility checks.",
      "Handling real-time data updates\nSolution: Integrated Supabase for efficient data management.",
      "Managing dynamic and static content\nSolution: Used incremental static regeneration (ISR).",
    ],
    lessonsLearned: [
      "Gained strong understanding of Next.js and modern web development.",
      "Learned responsive UI development using Tailwind CSS.",
      "Understood real-time database integration using Supabase.",
      "Recognized the importance of performance and accessibility.",
    ],
    readerTakeaways: [
      "Build a portfolio that clearly showcases your skills and projects.",
      "Focus on performance and responsiveness from the beginning.",
      "Use modern tools like Next.js and Tailwind CSS.",
      "Continuously improve based on user feedback.",
    ],
    callToAction: [
      "Visit my portfolio to explore my projects.",
      "Share your feedback through the platform.",
      "Check out the source code on GitHub.",
      "Stay connected for more development insights.",
    ],
    screenshots: [
      { src: "/images/p2-banner.png", caption: "Portfolio Homepage" },
      { src: "/images/p2s2.png", caption: "Projects Section" },
      { src: "/images/p2s3.png", caption: "Blog Section" },
      { src: "/images/p2s4.png", caption: "Feedback Section" },
      { src: "/images/p2s5.png", caption: "Recent Feedback Display" },
    ],
  },
  {
    id: "3",
    title: "Understanding Data Structures: Arrays to Linked Lists",
    description:
      "A beginner-friendly guide to understanding fundamental data structures like arrays and linked lists with practical examples.",
    technologies: ["C", "Java"],
    author: "Rajesh Behera",
    projectId: null,
    story: {
      inspiration: [
        "Data Structures are the foundation of programming and problem-solving.",
        "Many beginners struggle to understand how data is stored and managed efficiently.",
        "I wanted to simplify core concepts like arrays and linked lists.",
        "This blog explains these structures with clear examples and use cases.",
      ],
      journey: [
        "Started with arrays as the simplest data structure.",
        "Explored operations like insertion, deletion, and traversal.",
        "Moved to linked lists to understand dynamic memory allocation.",
        "Compared arrays and linked lists with real-world examples.",
      ],
      breakthroughs: [
        "Understood how memory is allocated differently in arrays and linked lists.",
        "Learned when to use arrays vs linked lists.",
        "Improved problem-solving using these structures.",
        "Built confidence in handling basic DSA questions.",
      ],
    },
    challengesFaced: [
      "Understanding pointer concepts in linked lists\nSolution: Practiced step-by-step dry runs.",
      "Visualizing memory allocation\nSolution: Used diagrams and examples.",
    ],
    lessonsLearned: [
      "Data Structures are essential for efficient coding.",
      "Choosing the right structure improves performance.",
      "Practice is key to mastering DSA concepts.",
    ],
    readerTakeaways: [
      "Learn arrays and linked lists as a foundation for DSA.",
      "Understand differences between static and dynamic memory.",
      "Practice implementation for better clarity.",
    ],
    callToAction: [
      "Practice implementing arrays and linked lists.",
      "Solve beginner DSA problems.",
      "Follow for more DSA concepts.",
    ],
    screenshots: [],
  },

  {
    id: "4",
    title: "Object-Oriented Programming in Java: Explained with Examples",
    description:
      "A clear explanation of OOP concepts in Java including classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",
    technologies: ["Java"],
    author: "Rajesh Behera",
    projectId: null,
    story: {
      inspiration: [
        "OOP is one of the most important topics in interviews.",
        "Many students memorize concepts but fail to explain them.",
        "I wanted to understand OOP concepts with practical examples.",
        "This blog explains OOP in a simple and structured way.",
      ],
      journey: [
        "Started with class and object basics.",
        "Explored inheritance and code reusability.",
        "Learned polymorphism with method overloading and overriding.",
        "Understood encapsulation and abstraction with real examples.",
      ],
      breakthroughs: [
        "Clearly understood real-world use of OOP concepts.",
        "Improved ability to explain concepts in interviews.",
        "Built small Java programs to apply OOP.",
      ],
    },
    challengesFaced: [
      "Understanding abstraction clearly\nSolution: Practiced real-life examples.",
      "Confusion between overloading and overriding\nSolution: Compared examples in code.",
    ],
    lessonsLearned: [
      "OOP improves code structure and reusability.",
      "Concept clarity is more important than memorization.",
      "Practice helps in mastering OOP.",
    ],
    readerTakeaways: [
      "Understand all 4 pillars of OOP clearly.",
      "Be able to explain concepts with examples.",
      "Practice Java programs regularly.",
    ],
    callToAction: [
      "Revise OOP concepts before interviews.",
      "Practice Java coding problems.",
      "Follow for more Java concepts.",
    ],
    screenshots: [],
  },

  {
    id: "5",
    title: "DBMS Basics Every Developer Should Know",
    description:
      "An introduction to database management concepts including normalization, keys, SQL basics, and transactions.",
    technologies: ["SQL", "MySQL"],
    author: "Rajesh Behera",
    projectId: null,
    story: {
      inspiration: [
        "DBMS is frequently asked in technical interviews.",
        "Many students find database concepts confusing.",
        "I wanted to simplify core DBMS topics.",
        "This blog explains DBMS in a clear and structured way.",
      ],
      journey: [
        "Started with basic database concepts.",
        "Learned about keys and normalization.",
        "Practiced SQL queries for real understanding.",
        "Explored transactions and ACID properties.",
      ],
      breakthroughs: [
        "Understood how databases store and manage data.",
        "Improved SQL query writing skills.",
        "Gained confidence in DBMS interview questions.",
      ],
    },
    challengesFaced: [
      "Understanding normalization\nSolution: Practiced table examples.",
      "Writing complex SQL queries\nSolution: Solved multiple practice problems.",
    ],
    lessonsLearned: [
      "DBMS is essential for backend development.",
      "SQL practice is important.",
      "Concept clarity helps in interviews.",
    ],
    readerTakeaways: [
      "Understand normalization and keys.",
      "Practice SQL queries regularly.",
      "Focus on real-world database usage.",
    ],
    callToAction: [
      "Practice SQL queries daily.",
      "Revise DBMS concepts before interviews.",
      "Follow for more database topics.",
    ],
    screenshots: [],
  },

  {
    id: "6",
    title: "Operating System Concepts Explained Simply",
    description:
      "A simplified explanation of core OS concepts like process, thread, scheduling, and deadlocks.",
    technologies: ["Operating Systems"],
    author: "Rajesh Behera",
    projectId: null,
    story: {
      inspiration: [
        "Operating Systems is an important subject for interviews.",
        "Concepts like process and deadlock can be confusing.",
        "I wanted to simplify these topics.",
        "This blog explains OS concepts in an easy way.",
      ],
      journey: [
        "Started with process and thread concepts.",
        "Learned CPU scheduling basics.",
        "Explored deadlocks and prevention techniques.",
        "Connected theory with real-world examples.",
      ],
      breakthroughs: [
        "Understood process vs thread clearly.",
        "Learned scheduling algorithms basics.",
        "Improved ability to explain OS concepts.",
      ],
    },
    challengesFaced: [
      "Understanding deadlock conditions\nSolution: Used simple examples.",
      "Remembering scheduling algorithms\nSolution: Practiced repeatedly.",
    ],
    lessonsLearned: [
      "OS concepts are important for interviews.",
      "Understanding is better than memorization.",
      "Examples help in learning.",
    ],
    readerTakeaways: [
      "Understand process, thread, and scheduling.",
      "Learn deadlock concepts clearly.",
      "Revise OS before interviews.",
    ],
    callToAction: [
      "Revise OS concepts regularly.",
      "Practice interview questions.",
      "Follow for more CS topics.",
    ],
    screenshots: [],
  },

  {
    id: "7",
    title: "Computer Networks Basics: HTTP, TCP/IP, DNS Explained",
    description:
      "A beginner-friendly explanation of networking concepts including HTTP, TCP/IP, and DNS.",
    technologies: ["Computer Networks"],
    author: "Rajesh Behera",
    projectId: null,
    story: {
      inspiration: [
        "Computer Networks is important for understanding how the internet works.",
        "Students often struggle with protocols like HTTP and TCP/IP.",
        "I wanted to simplify these concepts.",
        "This blog explains networking basics clearly.",
      ],
      journey: [
        "Started with basics of networking.",
        "Learned about TCP/IP model.",
        "Explored HTTP request-response cycle.",
        "Understood DNS working process.",
      ],
      breakthroughs: [
        "Understood how data travels over the internet.",
        "Learned difference between protocols.",
        "Improved understanding of networking basics.",
      ],
    },
    challengesFaced: [
      "Understanding TCP/IP layers\nSolution: Used diagrams and examples.",
      "Remembering protocols\nSolution: Repeated revision.",
    ],
    lessonsLearned: [
      "Networking is essential for developers.",
      "Concept clarity is important.",
      "Practice helps in understanding.",
    ],
    readerTakeaways: [
      "Understand HTTP, TCP/IP, and DNS.",
      "Learn how internet communication works.",
      "Prepare for networking interview questions.",
    ],
    callToAction: [
      "Revise networking concepts.",
      "Practice interview questions.",
      "Follow for more technical blogs.",
    ],
    screenshots: [],
  }

  // {
  // id: "3",
  // title: "What is an API? Explained with Simple Examples",
  // description:
  // "A beginner-friendly guide to understanding APIs, their importance, and how they work in real-world applications.",
  // category: "Computer Science",
  // technologies: ["APIs", "REST", "Python", "JavaScript"],
  // date: "July 2025",
  // author: "Rajesh Behera",
  // image: "/images/api-banner.png",
  // liveDemoNotice: "No demo available for this educational blog",
  // story: {
  // inspiration: [
  // "Ever wondered how apps like Google Maps or weather widgets get their data?",
  // "I was curious about how apps talk to each other seamlessly behind the scenes",
  // "This led me to explore APIs, the unsung heroes of modern software",
  // "I wrote this blog to demystify APIs for beginners with simple analogies",
  // ],
  // journey: [
  // "Started with the classic waiter analogy: APIs take requests and deliver responses",
  // "Explored REST APIs, the most common type, used in apps like Twitter and Spotify",
  // "Experimented with public APIs like OpenWeatherMap to understand real-world use",
  // "Wrote a simple Python script to fetch weather data and see APIs in action",
  // ],
  // breakthroughs: [
  // "Realized APIs are like bridges connecting apps, making them modular and reusable",
  // "Learned how JSON responses make data exchange simple and universal",
  // "Understood authentication (e.g., API keys) to secure requests",
  // "Built confidence in using APIs by testing public endpoints",
  // ],
  // },
  // challengesFaced: [
  // "Understanding API jargon like endpoints and payloads\nSolution: Broke it down with analogies like restaurant orders",
  // "Handling rate limits in public APIs\nSolution: Implemented retry logic in code",
  // "Parsing JSON responses correctly\nSolution: Used Python's requests library and JSON parsing",
  // ],
  // lessonsLearned: [
  // "APIs are essential for connecting apps and sharing data efficiently",
  // "REST APIs follow simple rules, making them easy to learn and use",
  // "Proper error handling (e.g., rate limits, 404s) is critical for robust apps",
  // "Public APIs are a great way to practice and build real-world projects",
  // ],
  // readerTakeaways: [
  // "Think of APIs as waiters: they take your request and bring back data",
  // "Start with public APIs like OpenWeatherMap\nto build small projects",
  // "Learn to handle JSON responses\nfor seamless data integration",
  // "Explore API documentation\nto understand endpoints and authentication",
  // ],
  // callToAction: [
  // "Try fetching data from a public API like OpenWeatherMap!",
  // "Share your first API project in the comments below",
  // "Follow my blog for more beginner-friendly tech guides",
  // "Have questions about APIs? Let's discuss!",
  // ],
  // screenshots: [
  // {
  // src: "/images/api-screenshot1.png",
  // caption: "API Concept Illustration",
  // },
  // {
  // src: "/images/api-screenshot2.png",
  // caption: "Python Code Fetching Weather Data",
  // },
  // ],
  // },
];

// `blogs` is the name every page/component should import -- it's the same
// array as `rawBlogs` above. `rawBlogs` is kept as a named export too since
// it was already part of the public shape of this module, but new code
// should prefer `blogs` for consistency (Search.jsx used to import
// `rawBlogs as blogs` while every other file imported `blogs` directly;
// both pointed at the same array, just under two different names).
export const blogs = rawBlogs;
