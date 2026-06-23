import { useState, useEffect, useRef, useMemo } from "react";
import { Search } from "lucide-react";
import type { Content } from "../data/content";
import { SOCIAL_LINKS } from "../data/content";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  t: Content;
}

export function CommandPalette({ isOpen, onClose, t }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo(
    () => [
      { label: t.nav.inicio, group: "nav", action: () => go("inicio") },
      { label: t.nav.proyectos, group: "nav", action: () => go("proyectos") },
      { label: t.nav.skills, group: "nav", action: () => go("skills") },
      { label: t.nav.contacto, group: "nav", action: () => go("contacto") },
      { label: "GitHub", group: "links", action: () => window.open(SOCIAL_LINKS.github, "_blank") },
      { label: "LinkedIn", group: "links", action: () => window.open(SOCIAL_LINKS.linkedin, "_blank") },
      { label: "Email", group: "links", action: () => navigator.clipboard.writeText(SOCIAL_LINKS.email) },
    ],
    [t, onClose]
  );

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  function go(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  }

  function pick(cmd: (typeof commands)[0]) {
    cmd.action();
    onClose();
  }

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-200 ${
        isOpen ? "" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`absolute top-[18%] left-1/2 -translate-x-1/2 w-full max-w-lg px-4 transition-all duration-200 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-4"
        }`}
      >
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800">
            <Search size={16} className="text-zinc-500 shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.commandPalette.placeholder}
              className="flex-1 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-600"
            />
            <kbd className="px-2 py-0.5 text-[10px] font-mono text-zinc-500 border border-zinc-700 rounded">
              ESC
            </kbd>
          </div>

          <div className="max-h-64 overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <p className="text-zinc-500 text-sm text-center py-8">
                {t.commandPalette.empty}
              </p>
            ) : (
              filtered.map((cmd) => (
                <button
                  key={cmd.label}
                  onClick={() => pick(cmd)}
                  className="w-full text-left px-3 py-2.5 text-sm text-zinc-400 rounded-lg hover:bg-zinc-800 hover:text-zinc-100 transition-colors flex items-center justify-between"
                >
                  {cmd.label}
                  <span className="text-[10px] font-mono text-zinc-600 uppercase">
                    {cmd.group}
                  </span>
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
