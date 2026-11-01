import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
