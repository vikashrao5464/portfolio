import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const socialLinks = [
    { icon: BiLogoGmail, href: "mailto:vikashrao5464@gmail.com", label: "Email" },
    { icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/vikash-rao-1a837828b/", label: "LinkedIn" },
    { icon: BsGithub, href: "https://github.com/vikashrao5464", label: "GitHub" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='page-container my-8 lg:my-16'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='mt-8 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-12'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='w-full min-w-0'
        >
          <form
            className='w-full space-y-3 lg:space-y-5'
            action="https://formsubmit.co/vikashrao5464@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New message from your portfolio" />
            <input className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="text" name="name" placeholder='Your name' required />
            <input className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="email" name="email" placeholder='Email' required />
            <input className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="text" name="website" placeholder='Your website (If exists)' />
            <textarea className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full' name="message" placeholder='How can I help?*' required></textarea>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex flex-wrap items-center gap-4'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type='submit'
                className='flex min-h-11 items-center justify-center gap-x-3 rounded bg-black px-4 py-2 font-medium text-white hover:shadow-lg'
              >
                Get In Touch
              </motion.button>

              <div className='flex items-center gap-3'>
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
              </div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='w-full min-w-0'
        >
          <div className='space-y-1 break-words text-2xl font-extrabold leading-snug sm:text-4xl lg:space-y-3 lg:text-[clamp(2rem,3.2vw,3rem)]'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
            <h2>Something special</h2>
          </div>

          <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>I'm open to full-stack, backend, and AI-focused opportunities where I can build reliable products, improve workflows, and solve practical engineering problems.</p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <motion.a
              whileHover={{ x: 5 }}
              className='group flex min-w-0 items-center gap-2 break-all'
              href="mailto:vikashrao5464@gmail.com"
            >
              <span className='shrink-0 rounded-full border-2 border-transparent p-1 transition-all group-hover:border-black'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              vikashrao5464@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="tel:9588793351"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]'>
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              9588793351
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
