import { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";
import { HiX } from "react-icons/hi";

// Full details of one project, shown in a popup. Closes on Esc, the X button or a click outside.
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // stop the page scrolling behind the popup
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 animate-scale-in"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/70 text-xl text-white hover:text-accent"
        >
          <HiX />
        </button>

        {project.image ? (
          <img src={project.image} alt={project.title} className="h-64 w-full object-cover md:h-80" />
        ) : (
          <div className="flex h-48 items-center justify-center bg-gradient-to-br from-brand/50 to-accent/30">
            <span className="text-7xl font-extrabold text-white/80">{project.title[0]}</span>
          </div>
        )}

        <div className="p-6 md:p-8">
          {project.company && <p className="text-xs uppercase tracking-wider text-accent">{project.company}</p>}
          <h3 className="text-3xl font-bold text-white">{project.title}</h3>
          {project.period && <p className="mt-1 text-sm">{project.period}</p>}

          <p className="mt-5 leading-relaxed">{project.about}</p>

          {project.highlights && (
            <>
              <h4 className="mb-3 mt-6 font-semibold text-white">Highlights</h4>
              <ul className="list-disc space-y-2 pl-5 text-sm marker:text-brand">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </>
          )}

          <h4 className="mb-3 mt-6 font-semibold text-white">Tech stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-brand/15 px-3 py-1 text-xs text-brand">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
                <FaExternalLinkAlt /> Live demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                <FaGithub /> Source code
              </a>
            )}
            {project.type === "professional" && (
              <span className="flex items-center gap-2 text-sm text-slate-400">
                <FaLock /> Client project, code is private
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
