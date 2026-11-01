import { useState } from "react";
import { FaLock, FaArrowRight } from "react-icons/fa";
import Section from "../components/Section";
import ProjectModal from "../components/ProjectModal";
import { ProjectData } from "../data/projects";
import { WorkProjects } from "../data/workProjects";

const allProjects = [...WorkProjects, ...ProjectData.map((p) => ({ ...p, type: "personal" }))];

const filters = [
  { label: "All", value: "all" },
  { label: "Professional", value: "professional" },
  { label: "Personal", value: "personal" },
];

function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="card group flex h-full w-full flex-col overflow-hidden text-left"
    >
      <div className="relative w-full overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          // professional projects have no screenshot, so show a gradient banner
          <div className="flex h-48 items-center justify-center bg-gradient-to-br from-brand/40 to-accent/30">
            <span className="text-6xl font-extrabold text-white/80">{project.title[0]}</span>
          </div>
        )}
        {/* "View details" overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 transition group-hover:opacity-100">
          <span className="flex items-center gap-2 font-semibold text-white">
            View details <FaArrowRight />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {project.company && <p className="text-xs uppercase tracking-wider text-accent">{project.company}</p>}
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm">{project.about}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full bg-brand/15 px-3 py-1 text-xs text-brand">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-1 py-1 text-xs">+{project.tags.length - 4}</span>
          )}
        </div>

        {project.type === "professional" && (
          <span className="mt-5 flex items-center gap-2 text-xs text-slate-400">
            <FaLock /> Private project
          </span>
        )}
      </div>
    </button>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const shown = allProjects.filter((p) => filter === "all" || p.type === filter);

  return (
    <Section id="projects" title="Projects">
      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              filter === f.value
                ? "border-transparent bg-gradient-to-r from-brand to-accent text-white"
                : "border-white/20 hover:border-brand hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* key={filter} replays the fade-in whenever the filter changes */}
      <div key={filter} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((project, i) => (
          <div
            key={project.id}
            className="animate-fade-up opacity-0"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <ProjectCard project={project} onOpen={() => setSelected(project)} />
          </div>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </Section>
  );
}
