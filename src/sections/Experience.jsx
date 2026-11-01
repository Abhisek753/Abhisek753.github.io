import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { ExperienceData, EducationData } from "../data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {/* timeline: a vertical line with a dot for each job */}
      <div className="relative ml-3 border-l-2 border-white/10 pl-8">
        {ExperienceData.map((job) => (
          <Reveal key={job.role + job.company} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[2.6rem] top-1.5 h-4 w-4 rounded-full border-4 border-slate-950 bg-gradient-to-r from-brand to-accent" />
            <p className="text-sm text-accent">{job.period}</p>
            <h3 className="text-xl font-bold text-white">{job.role}</h3>
            <p className="mb-3 text-slate-400">{job.company}</p>
            <ul className="list-disc space-y-2 pl-5 text-sm marker:text-brand">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <h3 className="mb-6 mt-20 text-2xl font-bold text-white">Education</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {EducationData.map((e) => (
          <Reveal key={e.title}>
            <div className="card h-full p-6">
              <h4 className="font-bold text-white">{e.title}</h4>
              <p className="mt-1 text-sm">{e.place}</p>
              {e.period && <p className="mt-2 text-sm text-accent">{e.period}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
