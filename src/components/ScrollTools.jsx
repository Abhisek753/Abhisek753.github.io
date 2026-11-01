import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

// A thin progress bar at the top and a back-to-top button at the bottom right.
export default function ScrollTools() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-brand to-accent"
        style={{ width: `${progress}%` }}
      />
      <a
        href="#home"
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-brand to-accent text-xl text-white shadow-lg transition duration-300 ${
          progress > 15 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <HiArrowUp />
      </a>
    </>
  );
}
