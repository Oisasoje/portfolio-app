export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Gloo",
    desc: "An open-source runtime instrumentation platform for Node.js applications.",
    subdesc:
      "Gloo is a lightweight observability and control layer that captures structured runtime events from Express applications, enabling developers to inspect requests, trace behavior, monitor performance, and understand system activity in real time. Built with TypeScript, Express, and a modular event-driven architecture.",
    href: "https://www.npmjs.com/package/@oisasoje/gloo",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/peruse-logo.jpg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/nextjs.png" },
      { id: 2, name: "Express", path: "/assets/express.png" },
      { id: 3, name: "Prisma", path: "/assets/prisma.png" },
      { id: 4, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 5, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
    ],
  },
  {
    title: "Peruse",
    desc: "An interactive quiz platform built for a self-development community.",
    subdesc:
      "Peruse is a web-based quiz app featuring 400+ curated questions and AI-powered feedback, designed to reinforce learning through reflection, personalization, and engaging challenges. Built using Zustand and Firebase.",

    href: "https://peruse-quiz.vercel.app",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/peruse-logo.jpg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 4, name: "Framer Motion", path: "/assets/framer.png" },
      { id: 5, name: "Firebase", path: "/assets/firebase.png" },
    ],
  },
  {
    title: "The Cave Website",
    desc: "The official website for a self-development and personal growth community.",
    subdesc:
      "The Cave website serves as the digital home for a self-development community, designed to communicate the brands mission, values, and resources. Built with modern frontend tooling, the project focuses on clean design, performance, and an engaging user experience.",

    href: "https://housecave.org",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/nextjs.png" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 4, name: "Framer Motion", path: "/assets/framer.png" },
    ],
  },
  {
    title: "Amazon Clone",
    desc: "An Amazon-inspired e-commerce clone built to simulate a real checkout experience.",
    subdesc:
      "This project recreates core Amazon functionality including product listings, cart management, delivery options, and order total calculations. It emphasizes state management, pricing logic, and responsive UI behavior using modern React and Next.js patterns.",
    href: "https://amazon-project-virid.vercel.app",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/nextjs.png" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 4, name: "Framer Motion", path: "/assets/framer.png" },
    ],
  },
];

export const calculateSizes = ({
  isSmall,
  isMobile,
  isTablet,
}: {
  isSmall: boolean;
  isMobile: boolean;
  isTablet: boolean;
}) => {
  return {
    deskScale: isSmall
      ? ([0.05, 0.05, 0.05] as [number, number, number])
      : isMobile
        ? ([0.06, 0.06, 0.06] as [number, number, number])
        : ([0.065, 0.065, 0.065] as [number, number, number]),
    deskPosition: isMobile
      ? ([0.5, -4.5, 0] as [number, number, number])
      : ([0.25, -8.5, 0] as [number, number, number]),
    cubePosition: isSmall
      ? ([4, -5, 0] as [number, number, number])
      : isMobile
        ? ([5, -5, 0] as [number, number, number])
        : isTablet
          ? ([5, -5, 0] as [number, number, number])
          : ([9, -5.5, 0] as [number, number, number]),
    reactLogoPosition: isSmall
      ? ([2, 3, 0] as [number, number, number])
      : isMobile
        ? ([4, 3.5, 0] as [number, number, number])
        : isTablet
          ? ([6, 4, 1] as [number, number, number])
          : ([10, 7, 2] as [number, number, number]),
    ringPosition: isSmall
      ? ([-5, 7, 0] as [number, number, number])
      : isMobile
        ? ([-10, 10, 0] as [number, number, number])
        : isTablet
          ? ([12, 10, 0] as [number, number, number])
          : ([24, 10, 0] as [number, number, number]),
    targetPosition: isSmall
      ? ([-5, -10, -10] as [number, number, number])
      : isMobile
        ? ([-9, -10, -10] as [number, number, number])
        : isTablet
          ? ([-11, -7, -10] as [number, number, number])
          : ([-13, -13, -10] as [number, number, number]),
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "OnePipe",
    pos: "Software Development Intern",
    duration: "November 2025 - Present",
    title:
      "Buit integration readiness by testing and buiding with OnePipe's fintech APIs, created comprehensive integration guides, and ran simulated business scenarios to streamline client onboarding, and test edge cases. Collaborated with product teams to improve developer experience and API documentation quality.",
    icon: "/assets/onepipe-logo.jpeg",
    animation: "salute",
  },
  {
    id: 2,
    name: "Independent Developer",
    pos: "Full-Stack Developer",
    duration: "2024 - Present",
    title:
      "Building production-ready web applications from concept to deployment, including a gamified quiz platform with 400+ questions serving an active community, and multiple client projects. Specializing in Next.js, TypeScript, Express.js, and Postgresql with a focus on user engagement, performance optimization, and scalable architecture. I love building products that solve real-world problems and create value for users. I am a fast learner and passionate about building innovative and user-centric applications.",
    icon: "/assets/personal-project-img.png",
    animation: "clapping",
  },
];
