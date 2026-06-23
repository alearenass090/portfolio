import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { SOCIAL_LINKS } from "../data/content";

interface Props {
  size?: number;
  showEmail?: boolean;
  className?: string;
}

export function SocialLinks({ size = 20, showEmail = true, className = "gap-6" }: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      <a
        href={SOCIAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-zinc-600 hover:text-white transition-colors"
      >
        <GithubIcon size={size} />
      </a>
      <a
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-zinc-600 hover:text-white transition-colors"
      >
        <LinkedinIcon size={size} />
      </a>
      {showEmail && (
        <a
          href={`mailto:${SOCIAL_LINKS.email}`}
          aria-label="Email"
          className="text-zinc-600 hover:text-white transition-colors"
        >
          <Mail size={size} />
        </a>
      )}
    </div>
  );
}
