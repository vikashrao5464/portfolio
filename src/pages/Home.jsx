import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const socialLinks = [
    { icon: BiLogoGmail, href: "mailto:vikashrao5464@gmail.com", label: "Email" },
    { icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/vikash-rao-1a837828b/", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/vikash_rao/", label: "LeetCode" },
    { icon: BsGithub, href: "https://github.com/vikashrao5464", label: "GitHub" },
  ];

  return (
    <div className="mt-20" id="home">
      <div className="page-container flex flex-col-reverse items-center gap-8 py-8 sm:gap-10 sm:py-12 lg:flex-row lg:gap-12 lg:py-16">

        <motion.div
          className="w-full min-w-0 lg:flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="flex flex-col gap-2 break-words text-2xl leading-snug sm:text-4xl lg:gap-4 lg:text-[clamp(2rem,3.2vw,3rem)]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello, <TypeAnimation
                sequence={[
                  'I am Vikash Rao',
                  1000,
                  // 'I am a Web Developer',
                  // 1000,
                  // 'I am a UI/UX Designer',
                  // 1000,
                ]}
                speed={10}
                style={{ fontWeight:600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Full-Stack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Building <span className="font-extrabold">AI Solutions.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="mt-5 max-w-2xl text-sm leading-7 text-[#71717A] sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
           Computer Science undergraduate at IIIT Sonepat with a 9.25 CGPA and experience building full-stack and agentic AI applications. I work with React, Next.js, Node.js, FastAPI, MongoDB, Azure OpenAI, LangChain, and LangGraph to create practical, scalable software.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4 lg:mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded border-2 border-black bg-white lg:h-12 lg:w-12"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex w-full justify-center lg:w-[32%] lg:shrink-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            className="h-auto w-full max-w-[220px] rounded-2xl sm:max-w-[260px] lg:max-w-[300px]"
            src="/assets/vikash.jpeg"
            alt="Vikash Rao"
          />
        </motion.div>
      </div>
    </div>
  );
}
