import { SocialData } from "../data/social";

export default function SocialLinks() {
  return (
    <div className="flex gap-3">
      {SocialData.map(({ platform, link, icon: Icon }) => (
        <a
          key={platform}
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={platform}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:-translate-y-1 hover:border-brand hover:text-brand"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
