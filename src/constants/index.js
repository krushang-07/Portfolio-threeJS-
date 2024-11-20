import {
  mobile,
  backend,
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
  figma
} from "../assets";

import Ldrp from "../assets/company/Ldrp.png";
import ssip from "../assets/company/ssip.jpeg";
import prodigy from "../assets/company/prodigy.svg";
import chat from "../assets/projectImg/chat.jpg";
import movie from "../assets/projectImg/movie.jpg";
import money from "../assets/projectImg/money.jpg";
import crypto from "../assets/projectImg/crypto.jpg";
import news from "../assets/projectImg/news.jpg";
import all from "../assets/projectImg/all.jpg";

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
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "MERN stack workshop",
    company_name: "LDRP institute of technology",
    icon: Ldrp,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Gained in-depth knowledge of Node.js, Express, and MongoDB, focusing on server-side scripting and database management",

      "Enhanced my understanding of Advanced JavaScript and its application in back-end development",

      "Mastered React.js, including project setup, component lifecycles, and code optimization techniques",

      "Developed practical full-stack development skills through hands-on projects and real-world scenarios",
    ],
  },
  {
    title: "Student Startup and Innovation Policy(2023)",
    company_name: "Finalist",
    icon: ssip,
    iconBg: "#383E56",
    date: "Nov 2023 - dec 2023",
    points: [
      "Our team successfully completed the SSIP'23 Hackathon project under the guidance of Prof. Vishal Barot",

      "Out of 2062 teams, we proudly reached the finals, with only 181 teams selected",

      "The Hackathon fostered collaboration, innovation, and enhanced our problem-solving skills",

      "It was a key learning experience that prepared us for real-world challenges",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Prodigy Infotech",
    icon: prodigy,
    iconBg: "#383E56",
    date: "Jun 2024 - Jul 2024",
    points: [
      "Successfully completed a Web Development internship at Prodigy InfoTech, working on innovative projects and enhancing my technical skills",
      "Collaborated with a talented team, gaining valuable experience in real-world problem-solving and project development",
      "Received a Letter of Recommendation (LoR) and a Certificate of Completion, highlighting my commitment and expertise in web development",
      "Eager to apply the skills and knowledge gained during the internship to future opportunities in the web development field",
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
    name: "Chatter-Space",
    description:
      "Chatter-Space is a secure, real-time chat app built with the MERN stack, offering intuitive one-on-one and group messaging. It includes JWT-based authentication, instant notifications, and dynamic group management. With features like profile viewing, personalized photo uploads, and a robust user search, Chatter-Space creates a seamless",
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
        name: "chakraUI",
        color: "pink-text-gradient",
      },
      {
        name: "socketio",
        color: "white-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/krushang-07/Chatter-Space",
  },
  {
    name: "Money-Mind",
    description:
      "Money Manager is a MERN-based tool with Chart.js that streamlines finances for individuals and small businesses. It offers secure transactions, real-time insights, and clear graphs for easy data visualization. Manage expenses effortlessly and make informed financial decisions with Money Manager",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "chartJS",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "black-text-gradient",
      },
    ],
    image: money,
    source_code_link: "https://github.com/krushang-07/money-mind",
  },
  {
    name: "CryptoApp",
    description:
      "CryptoHub is a responsive platform built with ReactJS and Chakra-UI, providing real-time data on cryptocurrency exchanges, coins, and NFTs via the CoinGecko API. It features detailed insights, interactive graphs, search, pagination, and multi-currency support, delivering a seamless experience for crypto enthusiasts",
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
    image: crypto,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie rating platform",
    description:
      "Built with Next.js and styled with Tailwind CSS, this app allows users to explore movies, view dynamic search results, and toggle light/dark modes. With server-side rendering for fast performance and optimized image handling, it delivers a smooth, responsive user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/krushang-07/IMDb",
  },
  {
    name: "News App",
    description:
      "Built with Next.js and styled with Tailwind CSS, this app allows users to explore movies, view dynamic search results, and toggle light/dark modes. With server-side rendering for fast performance and optimized image handling, it delivers a smooth, responsive user experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/krushang-07/News-world",
  },
  {
    name: "Mini projects",
    description:
      "From text conversion tools and speech recognition to secure payment integrations and a full-stack to-do app, I’ve built a variety of projects featuring both frontend and backend elements. These applications showcase dynamic functionalities, real-time processing, and user-friendly interfaces, creating practical solutions for everyday tasks.",
    tags: [
      {
        name: "backend",
        color: "blue-text-gradient",
      },
      {
        name: "frontend",
        color: "green-text-gradient",
      },
    ],
    image: all,
    source_code_link: "https://github.com/krushang-07",
  },
];

export { services, technologies, experiences, testimonials, projects };
