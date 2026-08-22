export const personalInfo = {
  name: "Kyle Holliday",
  title: "Full Stack Developer + Designer",
  location: "Charlotte, NC",
  description:
    "I like to build and design mobile-friendly, accessible products that provide a great user experience.",
  // Change this if you'd rather route contact through a form or a different address.
  email: "kholliday88@gmail.com",
};

export const aboutContent = [
  "Howdy! I'm Kyle. I've been involved in the world of software engineering for the better part of a decade. My knowledge mainly focuses on crafting seamless user experiences using React, Angular, JavaScript, and PostgreSQL/SQL. While coding makes up the majority of my portfolio, I also enjoy designing (lately with tools like Figma and Sketch).",
  "Throughout my career, I've had the privilege of contributing to a variety of endeavors, from small startups to Fortune 500 companies and financial institutions. Looking ahead, my focus remains on leveraging technology to build impactful solutions. Excited about the future, I bring a creative blend of programming and design skills to every project. Let's shape the digital landscape together.",
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kyleholliday",
    icon: "github",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/KyleHolliday",
    icon: "dribbble",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kyle-holliday/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:kholliday88@gmail.com",
    icon: "email",
  },
];

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Companies", href: "#companies" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export const experience = [
  {
    period: "2024 — Present",
    title: "Senior Front End Developer",
    company: "Premier Inc.",
    url: "https://www.premierinc.com",
    description:
      "Architect and lead design system development for a multi-billion dollar healthcare technology platform serving two-thirds of U.S. healthcare providers. I prioritize accessibility and user experience while proactively addressing technical challenges. Through mentorship and scalable design systems, I help teams deliver consistent, inclusive digital experiences across the organization.",
    technologies: [
      "React",
      "CSS/SCSS",
      "JavaScript",
      "TypeScript",
      "Git",
      "Figma",
      "Sanity CMS",
      "Craft CMS",
    ],
  },
  {
    period: "2023 — 2024",
    title: "Software Developer",
    company: "First Citizens Bank",
    url: "https://www.firstcitizens.com/",
    description:
      "Designed and developed internal applications in JavaScript and Angular. Migrated large-scale internal applications from AngularJS to Angular 2+, as well as updated design systems.",
    technologies: [
      "Angular",
      "CSS/SCSS",
      "JavaScript",
      "TypeScript",
      "Storybook",
      "TIBCO",
      "Azure",
    ],
  },
  {
    period: "2020 — 2023",
    title: "Software Engineer / Senior Consultant",
    company: "CapTech Consulting",
    url: "https://www.captechconsulting.com",
    description:
      "Developed high-quality production applications for a diverse array of development projects, teams, and clients including Bank of America, Capital One, and PGA Tour. Designed and implemented award-winning responsive, accessible, and mobile-friendly interfaces using modern day technology libraries. Utilized tools like Figma, Sketch, and Invision in the design process. Employed agile methodologies and project management techniques to deliver projects on time.",
    technologies: [
      "JavaScript",
      "React",
      "Angular",
      "TypeScript",
      "CSS/SCSS",
      "Craft CMS",
      "Sanity CMS",
    ],
  },
  {
    period: "2016 — 2020",
    title: "Web Developer",
    company: "SignUpGenius",
    url: "https://www.signupgenius.com/",
    description:
      "Coded dynamic and responsive applications, landing pages and emails. Designed multiple applications, landing pages, and emails in a team-based environment using tools such as Sketch and Invision Freehand. Worked on and with multiple teams in tandem (UI/UX, Development, Marketing, and Testing) to produce the best product in the least amount of time.",
    technologies: ["JavaScript", "React", "Angular", "CSS/SCSS"],
  },
];

/*
 * Logo grid.
 *
 * Each entry renders a wordmark by default. To use a real logo instead, drop the
 * file in /public and add a `logo` key:
 *
 *   { name: "Premier Inc.", url: "...", logo: "/logos/premier.svg" }
 *
 * SVG is strongly preferred — it stays sharp and the grayscale/hover treatment
 * works on it cleanly. Only add logos you have permission to display.
 */
export const companies = [
  {
    label: "Worked at",
    items: [
      { name: "Premier Inc.", url: "https://www.premierinc.com" },
      { name: "First Citizens Bank", url: "https://www.firstcitizens.com/" },
      { name: "CapTech", url: "https://www.captechconsulting.com" },
      { name: "SignUpGenius", url: "https://www.signupgenius.com/" },
    ],
  },
  {
    label: "Built for",
    items: [
      { name: "Bank of America", url: "https://www.bankofamerica.com" },
      { name: "Capital One", url: "https://www.capitalone.com" },
      { name: "PGA Tour", url: "https://www.pgatour.com" },
    ],
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS/SCSS",
      "SQL/PostgreSQL",
      "PHP",
      "ColdFusion",
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: ["React", "Angular", "Node", "Next.js", "Tailwind", "Bootstrap"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Azure",
      "Netlify",
      "Vercel",
      "Bitbucket",
      "Docker",
      "Supabase",
      "Craft CMS",
      "Sanity CMS",
      "Jira",
      "Figma",
      "Sketch",
      "Photoshop",
      "InVision",
      "npm",
      "Yarn",
      "Gulp",
    ],
  },
];

export const projects = [
  {
    title: "Bijou",
    url: "https://www.bijou-movies.com",
    image: "bijou-2025.webp",
    imageFallback: "bijou-2025.jpg",
    imageWidth: 1200,
    imageHeight: 1124,
    description:
      "Movie and TV database app that utilizes React, TypeScript, and a handful of APIs. Discover a world of entertainment with over a million movies and TV shows. From upcoming and newly released blockbusters to trending TV.",
    note: "*Updated as of 2025",
    technologies: ["React", "PostgreSQL", "REST APIs", "Supabase"],
  },
];

export const footer = {
  text: "This site was made with React and Tailwind by",
  authorName: "Kyle Holliday",
  authorUrl: "https://github.com/kyleholliday/portfolio2024",
  hostingText: "and is hosted via",
  hostingName: "Netlify",
  hostingUrl: "https://netlify.com",
};
