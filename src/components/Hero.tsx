import { SocialLinks } from "./SocialLinks";
import type { Content } from "../data/content";

export function Hero({ t }: { t: Content }) {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto w-full text-center">
        <p
          className="text-blue-500 text-sm font-mono tracking-wider mb-4"
          style={{ animation: "hero-fade 1s ease-out both" }}
        >
          {t.hero.greeting}
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3"
          style={{ animation: "hero-fade 1s ease-out 0.15s both" }}
        >
          {t.hero.name}
        </h1>

        <h2
          className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-400 mb-8"
          style={{ animation: "hero-fade 1s ease-out 0.3s both" }}
        >
          {t.hero.role}
        </h2>

        <p
          className="text-zinc-500 text-base max-w-md mx-auto mb-10 leading-relaxed"
          style={{ animation: "hero-fade 1s ease-out 0.45s both" }}
        >
          {t.hero.bio}
        </p>

        <div
          className="flex items-center justify-center gap-4 mb-12"
          style={{ animation: "hero-fade 1s ease-out 0.55s both" }}
        >
          <a
            href="#proyectos"
            className="px-8 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors"
          >
            {t.hero.primaryCta}
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 text-sm font-medium text-zinc-300 border border-zinc-700 rounded-lg hover:border-zinc-500 hover:text-white transition-colors"
          >
            {t.hero.secondaryCta}
          </a>
        </div>

        <div style={{ animation: "hero-fade 1s ease-out 0.65s both" }}>
          <SocialLinks className="gap-6 justify-center" />
        </div>
      </div>
    </section>
  );
}
