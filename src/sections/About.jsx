import { HiLocationMarker } from "react-icons/hi";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import { profile } from "../data/profile";

export default function About() {
  return (
    <Section id="about" title="About me">
      <Reveal>
        <p className="max-w-3xl text-lg leading-relaxed">{profile.about}</p>
        <p className="mt-4 flex items-center gap-2 text-accent">
          <HiLocationMarker /> {profile.location}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 grid-cols-2 lg:grid-cols-4">
        {profile.stats.map((s) => (
          <Reveal key={s.label}>
            <div className="card p-8 text-center">
              <p className="gradient-text text-4xl font-extrabold">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
