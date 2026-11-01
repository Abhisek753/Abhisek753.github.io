import { useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/profile";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-brand";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  // No backend needed: this opens the visitor's email app with the message filled in.
  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" title="Get in touch">
      <Reveal className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="mb-6 text-lg">Want to work together or just say hi? Reach out on any platform.</p>
          <a href={`mailto:${profile.email}`} className="card flex items-center gap-4 p-5">
            <AiFillMail className="text-2xl text-brand" />
            <span className="break-all">{profile.email}</span>
          </a>
          <a href={`tel:${profile.phone}`} className="card flex items-center gap-4 p-5">
            <FiPhoneCall className="text-2xl text-brand" />
            <span>{profile.phone}</span>
          </a>
          <div className="pt-2">
            <SocialLinks />
          </div>
        </div>

        <form onSubmit={send} className="space-y-4">
          <input
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
          <textarea
            required
            rows={5}
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={inputClass}
          />
          <button type="submit" className="btn-primary">
            Send message
          </button>
        </form>
      </Reveal>
    </Section>
  );
}
