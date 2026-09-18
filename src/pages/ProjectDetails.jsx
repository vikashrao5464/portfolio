import React from 'react';
import { TbExternalLink } from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';
import { projectDetails } from '../data/projectDetails';

export default function ProjectDetails({ slug }) {
  const project = projectDetails[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-black px-5 py-20 text-white lg:px-28">
        <a href="/" className="text-sm text-zinc-400 transition hover:text-white">Back to home</a>
        <h1 className="mt-10 text-4xl font-extrabold">Project not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white lg:px-28 lg:py-16">
      <a href="/#projects" className="text-sm text-zinc-400 transition hover:text-white">Back to projects</a>

      <section className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">{project.subtitle}</p>
          <h1 className="mt-4 text-5xl font-extrabold lg:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 lg:text-lg">{project.overview}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-zinc-200"
            >
              Live Project <TbExternalLink size={18} />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black"
            >
              GitHub <BsGithub size={17} />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
          <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 p-6">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-zinc-400">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 p-6">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        {project.sections.map((section) => (
          <article key={section.title} className="rounded-3xl border border-white/10 p-6">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{section.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
