import { useEffect, useRef, useState } from "react";
import { HiChatAlt2, HiX, HiPaperAirplane } from "react-icons/hi";
import { getReply, quickQuestions } from "../data/chatbot";
import { profile } from "../data/profile";

const greeting = {
  from: "bot",
  text: `Hi! 👋 I'm ${profile.name}'s assistant. What would you like to know?`,
};

// Floating chat button (bottom left) that opens a small chat window.
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([greeting]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  // keep the newest message in view
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  const send = (text) => {
    if (!text.trim() || typing) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);

    // small delay so it feels like the bot is typing
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", ...getReply(text) }]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 left-6 z-[65] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-brand to-accent text-2xl text-white shadow-lg shadow-brand/40 transition hover:scale-110"
      >
        {open ? <HiX /> : <HiChatAlt2 />}
        {!open && <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand/40" />}
      </button>

      {open && (
        <div className="fixed bottom-24 left-4 right-4 z-[65] flex h-[28rem] max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl animate-scale-in sm:left-6 sm:right-auto sm:w-96">
          {/* header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-brand to-accent px-4 py-3">
            <img src={profile.avatar} alt="" className="h-9 w-9 rounded-full border-2 border-white/60" />
            <div>
              <p className="font-semibold text-white">Ask about {profile.name.split(" ")[0]}</p>
              <p className="text-xs text-white/80">Usually replies instantly</p>
            </div>
          </div>

          {/* messages */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2 text-sm animate-fade-up ${
                    m.from === "user"
                      ? "rounded-br-sm bg-gradient-to-r from-brand to-accent text-white"
                      : "rounded-bl-sm bg-white/10 text-slate-200"
                  }`}
                >
                  {m.text}
                  {m.link && (
                    <a
                      href={m.link.href}
                      target={m.link.href.startsWith("#") ? undefined : "_blank"}
                      rel="noreferrer"
                      onClick={() => m.link.href.startsWith("#") && setOpen(false)}
                      className="mt-2 block font-semibold text-accent underline"
                    >
                      {m.link.label} →
                    </a>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex w-16 gap-1 rounded-2xl rounded-bl-sm bg-white/10 px-4 py-3">
                {[0, 150, 300].map((d) => (
                  <span key={d} className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: `${d}ms` }} />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* quick question chips */}
          <div className="flex gap-2 overflow-x-auto border-t border-white/10 px-3 py-2">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="shrink-0 rounded-full border border-white/15 px-3 py-1 text-xs transition hover:border-brand hover:text-white"
              >
                {q}
              </button>
            ))}
          </div>

          {/* input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-white/10 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none focus:border-brand"
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-brand to-accent text-white"
            >
              <HiPaperAirplane className="rotate-90" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
