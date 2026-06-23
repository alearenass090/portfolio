import type { Content } from "../data/content";

export function Skills({ t }: { t: Content }) {
  const { skills } = t;

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal mb-14">
<div className="flex items-center gap-6">
            <h2 className="text-3xl font-bold text-white whitespace-nowrap">
              {skills.title}
            </h2>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.categories.map((cat, i) => (
            <div
              key={cat.name}
              className="scroll-reveal bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-6">
                {cat.name}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-zinc-300 flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
