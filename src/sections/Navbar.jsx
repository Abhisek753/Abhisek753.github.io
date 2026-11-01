import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { profile } from "../data/profile";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home">
          <img src={profile.avatar} alt="Logo" className="h-9 w-9 rounded-full ring-2 ring-brand" />
        </a>

        {/* desktop menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resume} download className="btn-primary !px-5 !py-2">
              Resume
            </a>
          </li>
        </ul>

        {/* mobile button */}
        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <ul className="flex flex-col gap-4 border-t border-white/10 bg-slate-950 px-6 py-6 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block text-lg">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resume} download className="btn-primary">
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
