import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-zinc-800/60">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} &mdash; Alejo Arenas
        </p>
        <SocialLinks size={16} showEmail={false} className="gap-5" />
      </div>
    </footer>
  );
}
