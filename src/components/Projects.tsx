import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Content } from "../data/content";

export function Projects({ t }: { t: Content }) {
  const { projects } = t;

  return (
    <section id="proyectos" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-14">
<div className="flex items-center gap-6">
            <h2 className="text-3xl font-bold text-white whitespace-nowrap">
              {projects.title}
            </h2>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.items.map((project, i) => (
            <article
              key={project.title}
              className="scroll-reveal group relative bg-zinc-900/80 border border-zinc-800 rounded-2xl p-7 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.1)]"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-block mt-2 px-3 py-0.5 text-[11px] font-mono bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    {project.badge}
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-white transition-colors"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono text-zinc-400 bg-zinc-800/70 rounded-full border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
