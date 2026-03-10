export const rawBlogs = [
  {
    id: "1",
    title: "Building an Automated Exam Portal: My Journey",
    description:
      "A blog about building a fast, topic-based question generator exam system for real-time learning assessments.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
    author: "Rajesh Behera",
    projectId: "1",
    story: {
      inspiration: [
        "Imagine a classroom where a teacher finishes a lesson but can’t test students instantly.",
        "Manual exams meant hours of preparation and grading—frustrating for everyone.",
        "I envisioned a platform to create MCQ exams on the fly and show results in real-time.",
        "That’s how AEP was born: to make classroom assessments quick and impactful.",
      ],
      journey: [
        "Started with PHP and MySQL for a robust backend to handle exam logic.",
        "Used Bootstrap to build a responsive, user-friendly interface for all devices.",
        "Developed a JSON-based question generator to simplify MCQ creation.",
        "Added dashboards for teachers and students to streamline the exam process.",
      ],
      breakthroughs: [
        "Created a teacher dashboard to generate and schedule exams in minutes.",
        "Built a student portal with real-time exam status and instant results.",
        "Implemented analytics to show class performance trends.",
        "Used AJAX for seamless, no-refresh result updates.",
      ],
    },
    challengesFaced: [
      "Struggled with generating diverse MCQs for any topic\nSolution: Built a flexible JSON template system.",
      "Faced issues syncing exam timers across devices\nSolution: Used JavaScript with server-side validation.",
      "Ensuring the UI was intuitive for non-tech-savvy users\nSolution: Leveraged Bootstrap and user testing.",
    ],
    lessonsLearned: [
      "Mastered PHP and MySQL for scalable educational platforms.",
      "Learned to optimize real-time updates with AJAX and JSON",
      "Understood the value of responsive design with Bootstrap",
      "Gained insights into user-centric design through teacher feedback.",
    ],
    readerTakeaways: [
      "Identify real-world problems: AEP solved classroom assessment delays.",
      "Use familiar tools like PHP and Bootstrap for quick prototyping.",
      "Test with users early to ensure usability and engagement",
      "Plan for scalability—descriptive questions are my next goal!",
    ],
    callToAction: [
      "Check out AEP’s live demo to see it in action!",
      "Share your feedback to help improve this classroom tool",
      "Explore the source code on GitHub and contribute ideas",
      "Follow my blog for more problem-solving projects",
    ],
    screenshots: [
      {
        src: "/images/p1s1.png",
        caption: "Teacher Dashboard",
      },
      {
        src: "/images/p1s2.png",
        caption: "Teacher Dashboard question generation",
      },
      {
        src: "/images/p1s6.png",
        caption: "Student Dash with Exam Status",
      },
      {
        src: "/images/p1s7.png",
        caption: "Instant Result Display",
      },
    ],
  },
  {
    id: "2",
    title: "Crafting My Portfolio with Next.js: A Developer's Story",
    description:
      "A blog about creating a personal portfolio for showcase of projects & blogs using Next.js for fast, SEO-friendly rendering.",
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
        "I needed a platform to showcase my projects and blogs to recruiters.",
        "Wanted a fast, SEO-friendly portfolio that stands out in search results.",
        "Aimed for a responsive, accessible design that works on any device.",
        "Dreamed of adding real-time feedback to connect with users instantly.",
      ],
      journey: [
        "Chose Next.js for its powerful SSG and ISR capabilities.",
        "Used Tailwind CSS to craft a modular, responsive UI with dark/light themes.",
        "Integrated Supabase for real-time feedback storage and retrieval.",
        "Deployed on Vercel for seamless hosting and automated updates.",
      ],
      breakthroughs: [
        "Achieved sub-second page loads with Next.js SSG and ISR.",
        "Built a feedback system with Supabase for real-time user input.",
        "Created a search feature for instant project and blog filtering.",
        "Ensured accessibility with ARIA labels and keyboard navigation.",
      ],
    },
    challengesFaced: [
      "Optimizing large images for fast loading\nSolution: Used Next.js Image with lazy loading.",
      "Ensuring accessibility compliance\nSolution: Added ARIA labels and tested with Lighthouse.",
      "Integrating real-time feedback\nSolution: Used Supabase for efficient database operations.",
      "Balancing static and dynamic content\nSolution: Implemented ISR with revalidation.",
    ],
    lessonsLearned: [
      "Mastered Next.js for building performant, SEO-friendly applications.",
      "Learned Tailwind CSS for rapid, responsive UI development.",
      "Gained expertise in real-time data with Supabase integration.",
      "Understood the importance of accessibility and SEO in modern web development.",
    ],
    readerTakeaways: [
      "Start with performance in mind: Use SSG and ISR for fast websites.",
      "Leverage tools like Tailwind CSS for responsive design.",
      "Integrate real-time features with Supabase for user engagement.",
      "Test accessibility early to ensure inclusivity.",
    ],
    callToAction: [
      "Visit my portfolio to explore my projects!",
      "Share feedback via the real-time form on the site.",
      "Check out the source code on GitHub and contribute.",
      "Keep in touch for more web development insights.",
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
      {
        src: "/images/p2s5.png",
        caption: "Recent Feedback Section",
      },
    ],
  },
  // {
  //   id: "3",
  //   title: "What is an API? Explained with Simple Examples",
  //   description:
  //     "A beginner-friendly guide to understanding APIs, their importance, and how they work in real-world applications.",
  //   category: "Computer Science",
  //   technologies: ["APIs", "REST", "Python", "JavaScript"],
  //   date: "July 2025",
  //   author: "Rajesh Behera",
  //   image: "/images/api-banner.png",
  //   liveDemoNotice: "No demo available for this educational blog",
  //   story: {
  //     inspiration: [
  //       "Ever wondered how apps like Google Maps or weather widgets get their data?",
  //       "I was curious about how apps talk to each other seamlessly behind the scenes",
  //       "This led me to explore APIs, the unsung heroes of modern software",
  //       "I wrote this blog to demystify APIs for beginners with simple analogies",
  //     ],
  //     journey: [
  //       "Started with the classic waiter analogy: APIs take requests and deliver responses",
  //       "Explored REST APIs, the most common type, used in apps like Twitter and Spotify",
  //       "Experimented with public APIs like OpenWeatherMap to understand real-world use",
  //       "Wrote a simple Python script to fetch weather data and see APIs in action",
  //     ],
  //     breakthroughs: [
  //       "Realized APIs are like bridges connecting apps, making them modular and reusable",
  //       "Learned how JSON responses make data exchange simple and universal",
  //       "Understood authentication (e.g., API keys) to secure requests",
  //       "Built confidence in using APIs by testing public endpoints",
  //     ],
  //   },
  //   challengesFaced: [
  //     "Understanding API jargon like endpoints and payloads\nSolution: Broke it down with analogies like restaurant orders",
  //     "Handling rate limits in public APIs\nSolution: Implemented retry logic in code",
  //     "Parsing JSON responses correctly\nSolution: Used Python’s requests library and JSON parsing",
  //   ],
  //   lessonsLearned: [
  //     "APIs are essential for connecting apps and sharing data efficiently",
  //     "REST APIs follow simple rules, making them easy to learn and use",
  //     "Proper error handling (e.g., rate limits, 404s) is critical for robust apps",
  //     "Public APIs are a great way to practice and build real-world projects",
  //   ],
  //   readerTakeaways: [
  //     "Think of APIs as waiters: they take your request and bring back data",
  //     "Start with public APIs like OpenWeatherMap\nto build small projects",
  //     "Learn to handle JSON responses\nfor seamless data integration",
  //     "Explore API documentation\nto understand endpoints and authentication",
  //   ],
  //   callToAction: [
  //     "Try fetching data from a public API like OpenWeatherMap!",
  //     "Share your first API project in the comments below",
  //     "Follow my blog for more beginner-friendly tech guides",
  //     "Have questions about APIs? Let’s discuss!",
  //   ],
  //   screenshots: [
  //     {
  //       src: "/images/api-screenshot1.png",
  //       caption: "API Concept Illustration",
  //     },
  //     {
  //       src: "/images/api-screenshot2.png",
  //       caption: "Python Code Fetching Weather Data",
  //     },
  //   ],
  // },
];

export const blogs = rawBlogs;
