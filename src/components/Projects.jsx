import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "SnapCart",
    description:
      "A full-stack grocery delivery platform built with Next.js, TypeScript, Node.js, Express.js, and MongoDB. Features secure authentication, Stripe payments, real-time order tracking with Socket.io, AI-powered chat, and reverse geocoding APIs.",
    image: "/assets/snapcart.png",
    link: "https://snapcart-nu.vercel.app/",
    detailsLink: "/projects/snapcart",
  },
  {
    id: 2,
    title: "IntervAI",
    description:
      "An AI-powered interview preparation platform built with React, Node.js, Express.js, and MongoDB. Includes resume analysis, AI-generated interview questions, speech-based interviews, performance reports, payment integration, and interview history.",
    image: "/assets/intervai.png",
    link: "https://intervai-client-9zgu.onrender.com/",
    detailsLink: "/projects/intervai",
  },
];


export default function Projects() {
  const openDetailsPage = (event, detailsLink) => {
    event.preventDefault();
    window.history.pushState({}, '', detailsLink);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <div className="mt-3 flex items-center gap-4">
                <a href={project.link} className="text-white block" target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live project`}>
                  <TbExternalLink size={23} />
                </a>
                <a
                  href={project.detailsLink}
                  onClick={(event) => openDetailsPage(event, project.detailsLink)}
                  className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  View More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
