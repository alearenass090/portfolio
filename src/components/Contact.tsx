import { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import type { Content } from "../data/content";
import { SOCIAL_LINKS } from "../data/content";

export function Contact({ t }: { t: Content }) {
  const { contact } = t;
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="scroll-reveal mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
            {contact.title}
          </h2>
        </div>

        <p className="scroll-reveal text-zinc-400 leading-relaxed mb-10">
          {contact.description}
        </p>

        <div className="scroll-reveal flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="px-8 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors"
            >
              <Mail size={16} className="inline mr-2 -mt-0.5" />
              {SOCIAL_LINKS.email}
            </a>
            <button
              onClick={copy}
              className="p-3 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
              title={contact.copyLabel}
              aria-label={copied ? contact.copiedLabel : contact.copyLabel}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>

          <SocialLinks showEmail={false} />
        </div>
      </div>
    </section>
  );
}
