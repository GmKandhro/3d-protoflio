import {
  mobile,
  backend,
  creator,
  web,
 
  
 figma,
 
  starbucks,
  carrent,
  jobit,
  tripguide,
 ai,
  canva,
  ps,
  xd,
  ld,
  p,
  icon123
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Logo Desiner",
    icon: web,
  },
  {
    title: "Podcast Cover Designer",
    icon: mobile,
  },
  {
    title: "Thumbnail  Designer",
    icon: backend,
  },
  {
    title: "Menu Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "ps",
    icon: ai,
  },
  {
    name: "CSS 3",
    icon: ps,
  },
  {
    name: "JavaScript",
    icon: canva,
  },
  {
    name: "TypeScript",
    icon: icon123,
  },
  {
    name: "React JS",
    icon: xd,
  },
  {
    name: "Redux Toolkit",
    icon: p,
  },
  {
    name: "Tailwind CSS",
    icon: ld,
  },
  {
    name: "Tailwind CSS",
    icon: figma,
  },
  
 
 
];

const experiences = [
  {
    title: "Graphic designer",
    company_name: "Faisal School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2021",
    points: [
      "Collaborated with a local school to design print-ready banners.",
      "Created visually appealing banner designs tailored to school events.",
      "Ensured designs met print specifications for high-quality banners.",
      "Incorporated school branding and themes into the banner designs.",
      "Worked closely with the school staff to gather design requirements.",
      "Produced banners suitable for various school functions and occasions.",
    ],
  },
  {
    title: "Graphic designer",
    company_name: "Faisal School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2021",
    points: [
      "Collaborated with a local school to design print-ready banners.",
      "Created visually appealing banner designs tailored to school events.",
      "Ensured designs met print specifications for high-quality banners.",
      "Incorporated school branding and themes into the banner designs.",
      "Worked closely with the school staff to gather design requirements.",
      "Produced banners suitable for various school functions and occasions.",
    ],
  },
  {
    title: "Graphic designer",
    company_name: "Faisal School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2021",
    points: [
      "Collaborated with a local school to design print-ready banners.",
      "Created visually appealing banner designs tailored to school events.",
      "Ensured designs met print specifications for high-quality banners.",
      "Incorporated school branding and themes into the banner designs.",
      "Worked closely with the school staff to gather design requirements.",
      "Produced banners suitable for various school functions and occasions.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
