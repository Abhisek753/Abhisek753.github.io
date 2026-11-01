import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { SkillsData, Practices } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-10">
        {SkillsData.map((group) => (
          <Reveal key={group.type}>
            <h3 className="mb-4 text-lg font-semibold text-accent">{group.type}</h3>
            <div className="flex flex-wrap gap-4">
              {group.list.map((skill) => (
                <div key={skill.name} className="card flex w-28 flex-col items-center gap-3 p-5">
                  <i className={`${skill.icon} text-4xl text-white`} />
                  <span className="text-center text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}

        <Reveal>
          <h3 className="mb-4 text-lg font-semibold text-accent">Practices</h3>
          <div className="flex flex-wrap gap-3">
            {Practices.map((p) => (
              <span key={p} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
