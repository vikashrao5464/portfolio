import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="page-container flex flex-col items-center gap-8 lg:flex-row lg:gap-12" id="about">
      <motion.div
        className="w-full min-w-0 lg:flex-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img className="mx-auto h-auto w-full max-w-sm lg:max-w-md" src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="w-full min-w-0 lg:flex-1"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl lg:text-4xl">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
         I'm a Computer Science undergraduate at IIIT Sonepat with a 9.25 CGPA, focused on building full-stack web applications and AI-powered products. I enjoy turning real problems into clean, responsive, and scalable software.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My core stack includes React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, FastAPI, and Tailwind CSS. I have also worked with Azure OpenAI, OpenRouter, Gemini API, LangChain, LangGraph, and AI agent workflows.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
         I have internship experience in agentic AI at Tech Mahindra and have solved 800+ DSA problems across coding platforms. I like working on products that combine strong engineering, useful automation, and thoughtful user experience.
        </p>
      </motion.div>
    </div>
  );
}
