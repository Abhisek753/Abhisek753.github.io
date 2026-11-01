import Reveal from "./Reveal";

// Common wrapper for every section: anchor id, width, title.
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <Reveal>
        <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
          {title} <span className="gradient-text">.</span>
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
