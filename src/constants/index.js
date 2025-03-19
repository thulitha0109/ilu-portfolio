import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  brandlabs,
  learnbot,
  ekwa,
  dealo,
  romalanka,
  sys_dna,
  telegram,
  thebug,
  thebugv2,
  threejs,
  file,
  file1,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-stack Developer",
    icon: web,
  },
  {
    title: "Native Mobile developer",
    icon: mobile,
  },
  {
    title: "System Administrator",
    icon: backend,
  },
  {
    title: "UI UX Designer Photographer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Master",
    company_name: "ekwa",
    icon: ekwa,
    iconBg: "#fff",
    date: "Dec 2021 - Oct 2023",
    points: [
      "Revamping websites according to the client needs",
      "Considering Google page insights and optimizing website loading speeds and improve performance, accessibility, SEO and best practices",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Brandlabs",
    icon: brandlabs,
    iconBg: "#fff",
    date: "Aug 2019 - Sep 2021",
    points: [
      "Converting designs into the website as per client requirements and frameworks",
      "Collaborating with clients to build reliable and appropriate websites",
      "Analyzing and implementing development life cycle as per software requirements",
      "Testing, deploying, maintaining and updating websites for optimal performance", 
    ],
  },
  {
    title: "Junior Developer",
    company_name: "Learnbot",
    icon: learnbot,
    iconBg: "#fff",
    date: "Jan 2019 - June 2019",
    points: [
      "Developing web applications using PHP and other required technologies.",
      "Creating a real-time learning application and implementing CI/CD.",
      "Analyzing system capabilities and maintaining the server requirements",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He was really helped me to get out the problems we have faced for a long time, thanks man.",
    name: "Charbel dow",
    designation: "CEO",
    company: "Dow Group",
    image: file1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like TT does.",
    name: "Gaurav",
    designation: "CEO",
    company: "Digitalmarket",
    image: file,
  },
  {
    testimonial:
      "After TT optimized our website, our traffic increased by 60%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dealo",
    description:
      "Web based cross browser capable complete enterprise resource planning software for handle day today business activities and customer handling and live chat.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "xml",
        color: "pink-text-gradient",
      },
    ],
    image: dealo,
    source_code_link: "https://dealo.io/",
  },
  {
    name: "Romalanka",
    description:
      "Static website designed as simple ui as cake that enables customers to select the type of a cake by using simple interactions and send inquires via form.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: romalanka,
    source_code_link: "https://romacake-noether-34191f.netlify.app/",
  },
  {
    name: "Telegram Trade",
    description:
      "A modern design for a automation software which is a website developed by using modern web technologies for faster load speeds.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: telegram,
    source_code_link: "https://keen-bhabha-c4b74c.netlify.app/",
  },
  {
    name: "Thebug",
    description:
      "Full stack web application that can work to update on the website, developed by using modern web technolgies to gain maximum performance.",
    tags: [
      {
        name: "gatsby",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: thebug,
    source_code_link: "https://gracious-bhabha-ceeb8e.netlify.app/",
  },
  {
    name: "Thebug V2",
    description:
      "Full stack web application that look and feel from future designer, developed by using modern web technolgies and it has a interactive chat bot.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "aurora",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: thebugv2,
    source_code_link: "https://kind-banach-d4f6fb.netlify.app/",
  },
  {
    name: "SYS DNA",
    description:
      "Modern software company profile webiste which is designed and developed to gain maximum page loading speeds and dynamic content update on the go",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sys_dna,
    source_code_link: "https://elastic-sammet-3a6432.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
