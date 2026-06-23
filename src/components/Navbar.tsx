import { useState } from "react";
import { Command, Languages, Menu, X } from "lucide-react";
import type { Content, Lang } from "../data/content";

const LINKS = ["inicio", "proyectos", "skills", "contacto"] as const;

interface Props {
  t: Content;
  lang: Lang;
  toggleLang: () => void;
  onCommandPalette: () => void;
}

export function Navbar({ t, lang, toggleLang, onCommandPalette }: Props) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-zinc-800/60"
      style={{ animation: "nav-slide 0.6s ease-out" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => go("inicio")}
          className="text-lg font-bold text-blue-500 hover:text-blue-400 transition-colors"
        >
          AA
        </button>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((key) => (
            <button
              key={key}
              onClick={() => go(key)}
              className="text-[13px] text-zinc-400 hover:text-white transition-colors"
            >
              {t.nav[key]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onCommandPalette}
            aria-label="Command palette (Ctrl+K)"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-500 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:text-zinc-300 transition-colors"
          >
            <Command size={13} />
            <span>Ctrl+K</span>
          </button>

          <button
            onClick={toggleLang}
            aria-label={`Switch language to ${lang === "es" ? "English" : "Español"}`}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-500 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:text-zinc-300 transition-colors"
          >
            <Languages size={13} />
            {lang.toUpperCase()}
          </button>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-800/60 bg-[#0a0a0b] px-6 py-4 flex flex-col gap-4">
          {LINKS.map((key) => (
            <button
              key={key}
              onClick={() => go(key)}
              className="text-sm text-zinc-400 hover:text-white transition-colors text-left"
            >
              {t.nav[key]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
