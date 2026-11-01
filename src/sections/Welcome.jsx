import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { profile } from "../data/profile";

// Full-screen intro shown before the portfolio. A loading bar fills, then "Enter" appears.
export default function Welcome({ onEnter }) {
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const enter = () => {
    setLeaving(true);
    setTimeout(onEnter, 700); // wait for the fade-out to finish
  };

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2200);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  // pressing Enter also opens the portfolio
  useEffect(() => {
    const onKey = (e) => e.key === "Enter" && ready && enter();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 text-center transition duration-700 ${
        leaving ? "scale-110 opacity-0" : "opacity-100"
      }`}
    >
      {/* moving glow blobs */}
      <div className="absolute -left-20 -top-20 h-96 w-96 animate-float rounded-full bg-brand/30 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 animate-float rounded-full bg-accent/20 blur-3xl [animation-delay:2s]" />

      {/* faint grid in the background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative">
        {/* avatar with two rings spinning in opposite directions */}
        <div className="relative mx-auto mb-10 h-40 w-40">
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-brand/60" />
          <div className="absolute -inset-4 animate-spin-reverse rounded-full border border-accent/40" />
          <img
            src={profile.avatar}
            alt={profile.name}
            className="absolute inset-3 h-34 w-34 animate-scale-in rounded-full object-cover"
          />
        </div>

        <p className="animate-fade-up text-sm uppercase tracking-[0.4em] text-accent opacity-0">
          Welcome to my portfolio
        </p>

        {/* each letter of the name drops in one after another */}
        <h1 className="mt-4 text-5xl font-extrabold md:text-7xl" aria-label={profile.name}>
          {profile.name.split("").map((char, i) => (
            <span
              key={i}
              className="gradient-text inline-block animate-fade-up opacity-0"
              style={{ animationDelay: `${300 + i * 60}ms` }}
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </h1>

        <p
          className="mt-4 animate-fade-up text-lg opacity-0 md:text-xl"
          style={{ animationDelay: "1200ms" }}
        >
          {profile.roles[0]} · React · .NET · Node.js
        </p>

        <div className="mx-auto mt-10 h-14 w-64">
          {ready ? (
            <button onClick={enter} className="btn-primary animate-scale-in px-8 text-base">
              Enter portfolio <HiArrowRight />
            </button>
          ) : (
            <div className="mx-auto mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full animate-load rounded-full bg-gradient-to-r from-brand to-accent" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
