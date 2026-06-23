import { useState, useEffect, useCallback } from "react";
import { content, type Lang, type Content } from "../data/content";

export function useLang() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("portfolio-lang");
    return saved === "en" ? "en" : "es";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t: Content = content[lang];
  const toggleLang = useCallback(() => setLang((prev) => (prev === "es" ? "en" : "es")), []);
  return { lang, t, toggleLang };
}
