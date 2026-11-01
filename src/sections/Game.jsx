import { useEffect, useRef, useState } from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

// "Balloon Catch": move the basket (mouse, finger or arrow keys) to catch falling balloons.
// 🎈 = 1 point, 🌟 = 3 points. Missing 3 balloons ends the game. It speeds up as you score.
// Tweak these numbers to make the game easier or harder.
const LIVES = 3;
const BASKET_WIDTH = 10; // how close (in % of width) a balloon must be to be caught
const START_SPEED = 0.02; // % of the game height per millisecond
const START_SPAWN = 1100; // ms between new balloons at the start

function loadBest() {
  try {
    return Number(localStorage.getItem("balloonBest")) || 0;
  } catch {
    return 0;
  }
}

export default function Game() {
  const [status, setStatus] = useState("idle"); // idle | playing | over
  const [balloons, setBalloons] = useState([]);
  const [basketX, setBasketX] = useState(50); // % from the left
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(LIVES);
  const [best, setBest] = useState(loadBest);
  const basketRef = useRef(50); // the game loop reads the basket position from here
  const areaRef = useRef(null);

  const moveBasket = (x) => {
    const clamped = Math.min(95, Math.max(5, x));
    basketRef.current = clamped;
    setBasketX(clamped);
  };

  // mouse / finger position -> basket position
  const onPointer = (clientX) => {
    if (status !== "playing") return;
    const rect = areaRef.current.getBoundingClientRect();
    moveBasket(((clientX - rect.left) / rect.width) * 100);
  };

  // arrow keys
  useEffect(() => {
    if (status !== "playing") return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        moveBasket(basketRef.current + (e.key === "ArrowLeft" ? -6 : 6));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [status]);

  // the game loop: runs every animation frame while playing
  useEffect(() => {
    if (status !== "playing") return;
    let items = [];
    let points = 0;
    let livesLeft = LIVES;
    let nextId = 0;
    let sinceSpawn = 0;
    let last = performance.now();
    let frame;

    const tick = (now) => {
      const dt = Math.min(now - last, 50); // cap so a hidden tab doesn't jump
      last = now;

      // drop a new balloon now and then (faster as the score grows)
      sinceSpawn += dt;
      if (sinceSpawn > Math.max(400, START_SPAWN - points * 20)) {
        sinceSpawn = 0;
        items.push({
          id: nextId++,
          x: 5 + Math.random() * 90,
          y: -8,
          hue: Math.floor(Math.random() * 360), // random balloon color
          star: Math.random() < 0.1,
        });
      }

      const speed = START_SPEED + points * 0.0008;
      const stillFalling = [];
      items.forEach((b) => {
        b.y += speed * dt;
        const caught = b.y > 80 && b.y < 95 && Math.abs(b.x - basketRef.current) < BASKET_WIDTH;
        if (caught) {
          points += b.star ? 3 : 1;
        } else if (b.y > 100) {
          if (!b.star) livesLeft -= 1; // missing a star is free
        } else {
          stillFalling.push(b);
        }
      });
      items = stillFalling;

      setBalloons([...items]);
      setScore(points);
      setLives(livesLeft);

      if (livesLeft <= 0) {
        setStatus("over");
        setBalloons([]);
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [status]);

  // save a new best score when the game ends
  useEffect(() => {
    if (status === "over" && score > best) {
      setBest(score);
      try {
        localStorage.setItem("balloonBest", score);
      } catch {}
    }
  }, [status, score, best]);

  const start = () => {
    setScore(0);
    setLives(LIVES);
    moveBasket(50);
    setStatus("playing");
  };

  return (
    <Section id="game" title="Take a break">
      <Reveal className="card mx-auto max-w-xl p-6 text-center hover:translate-y-0 md:p-8">
        <h3 className="text-2xl font-bold text-white">🎈 Balloon Catch</h3>
        <p className="mt-2 text-sm">
          Move the basket with your mouse, finger or ← → keys. 🌟 is worth 3 points!
        </p>

        <div className="my-5 flex justify-around text-sm">
          <p>
            Score <span className="block text-2xl font-bold text-white">{score}</span>
          </p>
          <p>
            Lives <span className="block text-2xl">{"❤️".repeat(lives) || "💔"}</span>
          </p>
          <p>
            Best <span className="block text-2xl font-bold text-brand">{best}</span>
          </p>
        </div>

        {/* game area */}
        <div
          ref={areaRef}
          onMouseMove={(e) => onPointer(e.clientX)}
          onTouchMove={(e) => onPointer(e.touches[0].clientX)}
          className="relative h-[26rem] touch-none select-none overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-sky-900/50 via-slate-900 to-slate-950"
        >
          {/* a few clouds for decoration */}
          <span className="absolute left-[10%] top-6 text-4xl opacity-30">☁️</span>
          <span className="absolute right-[15%] top-16 text-5xl opacity-20">☁️</span>

          {balloons.map((b) => (
            <span
              key={b.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 text-4xl"
              style={{
                left: `${b.x}%`,
                top: `${b.y}%`,
                filter: b.star ? "none" : `hue-rotate(${b.hue}deg)`,
              }}
            >
              {b.star ? "🌟" : "🎈"}
            </span>
          ))}

          {/* basket */}
          <span
            className="absolute bottom-2 -translate-x-1/2 text-5xl"
            style={{ left: `${basketX}%` }}
          >
            🧺
          </span>

          {/* start / game over screen */}
          {status !== "playing" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-slate-950/70 backdrop-blur-sm">
              {status === "over" && (
                <p className="animate-fade-up text-lg text-white">
                  {score > 0 && score >= best ? "🏆 New best score! " : "Game over! "}
                  You caught {score} points.
                </p>
              )}
              <button onClick={start} className="btn-primary animate-scale-in">
                {status === "over" ? "Play again" : "Start game"}
              </button>
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
