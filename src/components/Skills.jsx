import { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaRobot } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiMongodb, SiRedux, SiLangchain } from "react-icons/si";

export default function Skills() {
const [skills] = useState([
  { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
  { id: 2, name: "TypeScript", icon: <SiTypescript size={50} /> },
  { id: 3, name: "React.js", icon: <FaReact size={50} /> },
  { id: 4, name: "Next.js", icon: <RiNextjsFill size={50} /> },
  { id: 5, name: "Node.js", icon: <FaNodeJs size={50} /> },
  { id: 6, name: "Express.js", icon: <SiExpress size={50} /> },
  { id: 7, name: "MongoDB", icon: <SiMongodb size={50} /> },
  { id: 8, name: "PostgreSQL", icon: <BiLogoPostgresql size={50} /> },
  { id: 9, name: "Tailwind CSS", icon: <RiTailwindCssFill size={50} /> },
  { id: 10, name: "Redux Toolkit", icon: <SiRedux size={50} /> },
  { id: 11, name: "Python", icon: <FaPython size={50} /> },
  { id: 12, name: "Git", icon: <FaGitAlt size={50} /> },
  { id: 13, name: "Docker", icon: <FaDocker size={50} /> },
  { id: 14, name: "LangChain", icon: <SiLangchain size={50} /> },
  { id: 15, name: "LangGraph", icon: <SiLangchain size={50} /> },
  { id: 16, name: "AI Agents", icon: <FaRobot size={50} /> },
]);
  const [experiences] = useState([
   {
  id: 1,
  company: "Tech Mahindra",
  role: "Software Development Intern (Agentic AI)",
  period: "May 2026 - July 2026",
  description:
    "Developed an AI-powered Incident Resolver Agent using Python, FastAPI, Streamlit, MongoDB, Azure OpenAI, JWT, and REST APIs, supporting ticket resolution across 4 resolver queues: Incident Resolver, L1, L2, and L3.",
  highlights: [
    "Implemented exact-ID and similarity-based incident retrieval across up to 5,000 ticket candidates, with user-level ownership validation and contextual follow-up queries to prevent unauthorized ticket access.",
    "Built an AI-guided troubleshooting workflow that generates 4-6 safe resolution steps, automatically creates resolved tickets, and escalates unresolved incidents to the appropriate L1/L2/L3 queue.",
    "Developed an admin dashboard covering 4 ticket repositories and 10 operational data collections, with ticket filtering, status updates, CSV exports, audit logs, chat history, unmatched-query analysis, and system reports.",
    "Implemented secure user and administrator authentication using JWT, along with role-based access controls and persistent chat sessions.",
    "Created automated tests for authentication, ticket matching, ownership enforcement, troubleshooting responses, L1 API integration, and resolver-level routing.",
  ],
  logo: "/assets/techmahindra.svg",
}
    // {
    //   id: 2,
    //   company: "Youtube",
    //   role: "Software Engineer",
    //   period: "Jan 2017 - Oct 2019",
    //   description:
    //     "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    //   logo: "/assets/youtube.svg",
    // },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="page-container">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="mt-7 grid w-full grid-cols-2 justify-items-center gap-3 text-center text-sm font-bold sm:grid-cols-3 sm:gap-5 sm:text-base md:grid-cols-4 lg:mt-12 lg:gap-6 lg:text-lg xl:grid-cols-5">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="flex h-36 w-full min-w-0 max-w-44 cursor-pointer flex-col items-center justify-center gap-4 rounded border-2 border-black bg-white p-3 transition-colors hover:bg-black hover:text-white sm:h-40 lg:h-44"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="page-container my-8 space-y-10 lg:mt-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start justify-between gap-4 xl:flex-row xl:items-center">
                <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-5">
                  <img className="mt-1 w-7 shrink-0 sm:mt-0" src={exp.logo} alt="" />
                  <h2 className="min-w-0 text-base font-semibold text-white sm:text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="shrink-0 text-sm font-semibold text-[#D4D4D8] lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
              {exp.highlights && (
                <ul className="text-[#D4D4D8] mt-4 list-disc pl-5 text-sm/6 lg:text-base font-light space-y-2">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
