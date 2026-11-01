import { useEffect, useRef } from "react";

// Full-screen background of floating dots joined by lines (like particles.js).
// Dots near the mouse connect to it and get pushed away gently.
// Tweak these numbers to change the effect.
const COLORS = ["#8b5cf6", "#22d3ee", "#a78bfa"]; // brand + accent shades
const DENSITY = 9000; // one dot per this many square pixels (smaller = more dots)
const LINK_DISTANCE = 120; // dots closer than this get a line between them
const MOUSE_RADIUS = 160; // how far the mouse reaches
const SPEED = 0.4;

export default function MouseParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const mouse = { x: null, y: null };
    let particles = [];
    let frame;

    const createParticles = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.min(Math.floor((canvas.width * canvas.height) / DENSITY), 160);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * SPEED * 2,
        vy: (Math.random() - 0.5) * SPEED * 2,
        size: Math.random() * 2 + 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    // draws a line whose opacity fades with distance
    const line = (x1, y1, x2, y2, distance, maxDistance, color) => {
      ctx.globalAlpha = 1 - distance / maxDistance;
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // move and bounce off the screen edges
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // mouse: draw a line to it and push the dot away a little
        if (mouse.x !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_RADIUS) {
            line(p.x, p.y, mouse.x, mouse.y, d, MOUSE_RADIUS, "#22d3ee");
            p.x += (dx / d) * 1.5;
            p.y += (dy / d) * 1.5;
          }
        }

        // lines to nearby dots (j > i so each pair is drawn once)
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < LINK_DISTANCE) line(p.x, p.y, q.x, q.y, d, LINK_DISTANCE, "#8b5cf6");
        }

        // the dot itself
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    createParticles();
    draw();
    window.addEventListener("resize", createParticles);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", createParticles);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // -z-10 keeps it behind all page content but above the body background
  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10" />;
}
