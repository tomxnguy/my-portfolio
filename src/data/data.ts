export const aboutMe = [
  {
    name: "Thomas Nguyen",
    title: "Web Developer | Software Developer",
    description: `
    I am a driven professional with a background as an EMT and a strong passion for technology.
    After completing a coding bootcamp, I focused on building projects like "Spell Craft" and
    this portfolio website to show the skills I learned. I love solving complex problems and aim to create
    impactful, secure, and user-friendly solutions.
  `,
    highlights: [
      "Coding Bootcamp Graduate (LearningFuze)",
      "Experienced EMT with strong teamwork skills",
      "Strong knowledge of SDLC processes",
      "Skilled in React, TypeScript, and Tailwind CSS",
    ],
    hobbies: [
      "Learning Python and exploring cybersecurity tools",
      "Developing personal projects to improve skills",
      "Backpacking and Camping",
      "Playing Magic: The Gathering",
    ],
  },
];

export const projects = [
  {
    name: "RoutineMath",
    description:
      "Web Application built with React and Node.js for students to practice and learn math. Users are able to generate custom math problems, track their progress, and receive real-time feedback.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    images: [
      "/routinemathpics/routineMath1.png",
      "/routinemathpics/routineMath2.png",
      "/routinemathpics/routineMath3.png",
    ],
    link: "https://github.com/tomxnguy/multiplication-tutor",
    liveDemo: "https://routinemath.com/#/about",
  },
  {
    name: "Spell Craft",
    description: `
      A web application that allows users to explore and manage Magic: The Gathering cards.
      Built with React, TypeScript, and Tailwind CSS, it integrates the Magic: The Gathering API
      to display card details and let users save their favorite cards.
    `,
    technologies: ["React", "TypeScript", "Tailwind CSS", "MTG API"],
    images: [
      "/spellcraftpics/spellcraft1.jpg",
      "/spellcraftpics/spellcraft2.jpg",
      "/spellcraftpics/spellcraft3.jpg",
      "/spellcraftpics/spellcraft4.jpg",
    ],
    link: "https://github.com/tomxnguy/Spell-Craft-MTGdeckbuilder",
    liveDemo: "https://mtgdeckbuilder.vercel.app",
  },
  {
    name: "Portfolio Website",
    description: `
      This personal portfolio showcases my skills, experience, and projects in web development and software development.
      It features dynamic routing, reusable components, and a clean UI.
    `,
    technologies: ["React", "TypeScript", "Tailwind CSS", "React Router"],
    images: [
      "/portfoliopics/portfolio1.jpg",
      "/portfoliopics/portfolio2.jpg",
      "/portfoliopics/portfolio3.jpg",
      "/portfoliopics/portfolio4.jpg",
    ],
    link: "https://github.com/tomxnguy/my-portfolio",
    liveDemo: "tomnguyen-portfolio.vercel.app/",
  },
  {
    name: "E-Commerce Website",
    description: `
    This was my final project from the coding bootcamp, where I developed a fully functional e-commerce website.
    Through this project, I learned how to design and implement a scalable front-end using React and TypeScript,
    and styled the application with Tailwind CSS for a responsive and modern user interface.
    I also used React Router to enable seamless navigation between product categories, shopping cart, and checkout pages.

    Additionally, I gained hands-on experience deploying the application on AWS Elastic Beanstalk, where I configured the environment,
    managed resources, and ensured the app was accessible online. This project helped me deepen my understanding of cloud deployment,
    as well as front-end development best practices.
  `,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "AWS Elastic Beanstalk",
    ],
    images: [
      "/lfzcooppics/lfzcoop1.jpg",
      "/lfzcooppics/lfzcoop2.jpg",
      "/lfzcooppics/lfzcoop3.jpg",
      "/lfzcooppics/lfzcoop4.jpg",
    ],
    link: "https://github.com/tomxnguy/ECommerce-Website",
    liveDemo: "",
  },
];

export const experiences = [
  {
    date: "January 2025 - Current",
    role: "Nemonx Full Stack Developer",
    company: "Nemonx",
    location: "Denver, CO",
    logo: "/nemonxlogo.png",
    description: [
      "Implemented dynamic multi-step forms using React while managing backend data storage and retrieval through Prisma ORM and PostgresQL.",
      "Collaborating with cross-functional teams to design and implement new features, ensuring seamless integration with existing systems.",
      "Created responsive customer-facing order forms to enable users and international students to create orders for transcript translations which lead to increase in Nemonx customers ",
      "Built reusable React components managing state to handle detailed educational data entry, validation, and submission with integration to backend services.",
    ],
  },
  {
    date: "January 2025 - July 2025",
    role: "RoutineMATH Front-End Developer",
    company: "RoutineMath",
    location: "San Mateo, CA",
    logo: "/routinemathlogo.png",
    description: [
      "Designed and developed user interface for a math learning application using React, Node.js, and integrating REST APIs.",
      "Implemented interactive math problem generation and custom algorithms that provided real time feedback for users.",
      "Created reusable components that could be used for any future math development integration.",
      "Collaborated with designers and backend developers to ensure seamless integration of front-end components with backend services.",
    ],
  },
  {
    date: "August 2023 - January 2024",
    role: "LearningFuze Web Dev Bootcamp",
    company: "LearningFuze",
    location: "Irvine, CA",
    logo: "/lfz-logo.png",
    description: [
      "Completed an intensive, hands-on web development bootcamp, gaining proficiency in front-end and back-end technologies, including HTML, CSS, JavaScript, React, and TypeScript.",
      "Developed multiple full-stack applications, including a project management tool and an e-commerce platform, utilizing React for front-end development, Node.js for the backend, and MongoDB for database management.",
      "Collaborated with fellow students on group projects, utilizing Agile methodologies, and version control (Git) to ensure timely delivery and quality of work.",
      "Built responsive and user-friendly interfaces using Tailwind CSS, Bootstrap, and vanilla CSS, while also learning to integrate third-party APIs and focus on performance optimization.",
    ],
  },
  {
    date: "July 2017 - August 2023",
    role: "Emergency Medical Technician",
    company: "Falck Ambulance Inc.",
    location: "Orange, CA",
    logo: "/falcklogo.png",
    description: [
      "Collaborated closely with firefighters and nurses on an ambulance, responding to emergency medical calls, providing patient assessment, and delivering immediate care in high-pressure situations.",
      "Assisted in administering life-saving interventions, including CPR, oxygen therapy, and medication, while maintaining calm and efficient communication with medical teams and dispatch.",
      "Worked with diverse patients and managed a wide range of medical emergencies, including trauma, cardiac, respiratory, and neurological events, ensuring prompt and accurate treatment during transport to medical facilities.",
      "Developed strong teamwork skills, working seamlessly with firefighters, paramedics, and hospital staff to ensure the best possible care for patients.",
    ],
  },
  {
    date: "July 2011 - July 2015",
    role: "Bachelors in Science, Biology",
    company: "California State University, Los Angeles",
    location: "Los Angeles, CA",
    logo: "/csulalogo.png",
    description: [""],
  },
  {
    date: "July 2015 - July 2016",
    role: "Post-bacclaureate in Biotechnology",
    company: "California State University, Los Angeles",
    location: "Los Angeles, CA",
    logo: "/csulalogo.png",
    description: [""],
  },
];
