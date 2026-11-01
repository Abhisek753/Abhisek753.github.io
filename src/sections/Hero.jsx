import { profile } from "../data/profile";
import SocialLinks from "../components/SocialLinks";
import useTyping from "../components/useTyping";
import photo from "../portfolio_img/pic.jpg";

export default function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 pt-24 md:flex-row md:justify-between"
    >
      <div className="text-center md:text-left">
        <p className="mb-3 font-medium text-accent">Hello there 👋 I am</p>
        <h1 className="text-5xl font-extrabold text-white md:text-7xl">
          <span className="gradient-text">{profile.name}</span>
        </h1>
        {/* min-h keeps the layout from jumping while typing */}
        <h2 className="mt-4 min-h-[2.5rem] text-2xl font-semibold text-white md:text-3xl">
          {typed}
          <span className="animate-pulse text-accent">|</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md md:mx-0">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a href="#projects" className="btn-primary">
            View my work
          </a>
          <a href={profile.resume} download className="btn-outline">
            Download resume
          </a>
        </div>

        <div className="mt-8 flex justify-center md:justify-start">
          <SocialLinks />
        </div>
      </div>

      {/* photo with a glowing, slowly spinning gradient ring */}
      <div className="relative">
        <div className="absolute -inset-2 animate-spin-slow rounded-full bg-gradient-to-r from-brand via-accent to-brand opacity-70 blur-xl" />
        <img
          src={photo}
          alt={profile.name}
          className="relative h-64 w-64 rounded-full border-4 border-slate-950 object-cover md:h-96 md:w-96"
        />
      </div>
    </section>
  );
}
