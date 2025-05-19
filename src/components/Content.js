import img from "../assets/Images/portfolio-img.webp";
import ai from "../assets/Images/ai-logo.webp";
import food from "../assets/Images/logo2.png";

export const mainContent =
  "I am a passionate front-end web developer with skills to make scalable and responsive front-end project works. I have frontend skills like JavaScript, React, Redux toolkit and worked with contect-api. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.";

export const aboutText =
  "I am dedicated towards provide my skills and experience to make user friendly and effective frontend web applications. I have professional experience of 3.5+ years in DXC Technology. My journey in web development begins with curiosity for how web things works and whats happening at the back of it, from there I continuously strive to learn and adapt to new challenges. Outside of coding, I enjoy staying active, exploring new technologies and play outdoor or watch some series for entertainment. ";

export const experience = [
  {
    year: "2021 -  Present",
    role: "Application - Software Engineer",
    company: "DXC Technology",
    description:
      "Worked on multiple applications to maintain and manage the application functionality and proper working. Associated with team to develop automations to enhance the workflow and reduce the overall time consumptions on repetative tasks. Explored application UI and also worked on it's fixes and deployments which was appreciated by business clients and users.",
    tech: ["Python", "CSS", "JS", "Unix"],
  },
];

export const Projects = [
  {
    title: "Portfolio Website",
    image: img,
    description:
      "A personal portfolio website fully responsive showcasing projects, skills, and contact information.",
    tech: ["React", "Tailwind CSS", "Framer motion"],
    link: "https://ayush-portfolio-xi-eight.vercel.app/",
  },
  {
    title: "AI-chat(Gemini clone)",
    image: ai,
    description:
      "An AI chat app developed using Gemini API to give answers to users based o their query. It fetches the result from gemini-ai and displays on the UI created almost same as Gemini. It's responsive and gives the result the same way as an AI model gives.",
    tech: ["React", "Tailwind CSS", "CSS", "Context API"],
    link: "/",
  },
  {
    title: "Food-Heaven",
    image: food,
    description:
      "Built a fully responsive and dynamic food ordering application. The app allows to browse the menu, view food items they want, add items to the cart, and place orders with a seamless and modern UI. State management is efficiently handled using Redux Toolkit for cart operations and dynamic filtering, while Tailwind CSS ensures visually appealing design and UI. Also used react-hot-tost for notification UI and and a smooth navigation experience using React Router.",
    tech: ["React", "Tailwind CSS", "Redux-toolkit"],
    link: "https://food-heaven-lake.vercel.app/",
  },
];

export const contact = {
  address: "Delhi, India",
  email: "yath.sharma04@gmail.com",
};
