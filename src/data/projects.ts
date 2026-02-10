import { type Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "EasyBank Website",
    description:
      "Responsive banking landing page built with React and Tailwind css",
    image: "images/easybank.jpg",
    github: "https://github.com/Abeem007/Bank-web",
    live: "https://easybank-w.netlify.app/",
    techStack: ["React", "Tailwind", "Framer Motion"],
  },
  {
    id: 2,
    title: "Audiopille E-commerce",
    description: "E-commerce site with cart,checkout & email integration",
    image: "images/audiophile.jpg",
    github: "https://github.com/Abeem007/Audiophile-ecommerce",
    live: "https://audiophille-ecommerce.netlify.app/",
    techStack: ["Nextjs", "Convex", "Typescript", "Emailjs"],
  },
  {
    id: 3,
    title: "GPT3-WEB",
    description: "Responsive Landing page showcasing GPT-3 AI capabilities",
    image: "images/GPT-3.jpg",
    github: "https://github.com/Abeem007/GPT3-WEB",
    live: "https://gpt-3-web-3b4e.vercel.app/#blog",
    techStack: ["React", "CSS"],
  },
  {
    id: 4,
    title: "Space-tourism-website",
    description:
      "A responsive space tourism website built with React, TypeScript, and Framer Motion.",
    image: "images/space-tourism.jpg",
    github: "https://github.com/Abeem007/Space-tourism-website",
    live: "https://space-tourism-we.netlify.app/",
    techStack: ["React", "Framer Motion", "Typescript", "Tailwind CSS"],
  },

  {
    id: 5,
    title: "Facebook-Clone",
    description:
      "A responsive Facebook-like social media web app built with React, Firebase, and TailwindCSS. ",
    image: "images/facebook-clone.png",
    github: "https://github.com/Abeem007/Facebook-Clone",
    live: "https://radiant-twilight-3747bc.netlify.app/dashboard",
    techStack: ["React", "Firebase Firestore", "Typescript", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "TicketFlow",
    description:
      "A ticket management UI built in React with mock authentication and simple state management.",
    image: "images/ticket-flow.jpg",
    github: "https://github.com/Abeem007/ticketweb-project",
    live: "https://ticketweb-project.netlify.app/",
    techStack: ["React", "Tailwind CSS", "React Router DOM"],
  },
];