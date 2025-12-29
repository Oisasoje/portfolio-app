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

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Peruse",
    desc: "Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.",
    subdesc:
      "Quiz app I built for a self development community I'm a part of. .",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/peruse-logo.jpg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      }, 
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Bendah Store",
    desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Church Connect",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
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
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
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
    pos: "Intern",
    duration: "November 2025 - Present",
    title:
      "Developing integration readiness by exploring OnePipe's APIs, running simulated business scenarios, and organizing clear documentation to support the onboarding workflow.",
    icon: "/assets/onepipe-logo.jpeg",
    animation: "salute",
  },
  {
    id: 2,
    name: "Personal HQ",
    pos: "CEO & Founder",
    duration: "November 2025 - Present",
    title:
      "Operating a full-time creation studio in my room, where new projects appear faster than I can finish them.",
    icon: "/assets/personal-project-img.png",
    animation: "clapping",
  },
];
