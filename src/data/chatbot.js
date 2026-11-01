import { profile } from "./profile";
import { SkillsData } from "./skills";
import { ExperienceData, EducationData } from "./experience";
import { ProjectData } from "./projects";
import { WorkProjects } from "./workProjects";

// The bot picks the topic whose keywords appear most in the visitor's message.
// To teach it something new, add a topic here: a list of keywords and a reply.
// A reply is { text, link? } where link is { label, href }.

const allProjects = [...WorkProjects, ...ProjectData];

const topics = [
  {
    keywords: ["hi", "hello", "hey", "namaste", "hii"],
    reply: () => ({
      text: `Hi! 👋 I'm ${profile.name}'s assistant. Ask me about his skills, experience, projects or how to contact him.`,
    }),
  },
  {
    keywords: ["who", "about", "yourself", "abhisek", "summary", "introduce"],
    reply: () => ({ text: profile.about }),
  },
  {
    keywords: ["skill", "skills", "tech", "stack", "technologies", "know", "language", "react", "net", "node"],
    reply: () => ({
      text: SkillsData.map((g) => `${g.type}: ${g.list.map((s) => s.name).join(", ")}`).join("\n"),
    }),
  },
  {
    keywords: ["experience", "work", "job", "company", "companies", "career", "technoforte", "imenso", "years"],
    reply: () => ({
      text: ExperienceData.map((j) => `• ${j.role} at ${j.company} (${j.period})`).join("\n"),
      link: { label: "See full experience", href: "#experience" },
    }),
  },
  {
    keywords: ["project", "projects", "built", "build", "made", "apps"],
    reply: () => ({
      text:
        "Here are his projects:\n" +
        allProjects.map((p) => `• ${p.title}`).join("\n") +
        "\n\nAsk me about any one by name!",
      link: { label: "Open projects", href: "#projects" },
    }),
  },
  {
    keywords: ["contact", "email", "mail", "phone", "call", "number", "reach", "hire", "connect"],
    reply: () => ({
      text: `📧 ${profile.email}\n📞 ${profile.phone}`,
      link: { label: "Go to contact", href: "#contact" },
    }),
  },
  {
    keywords: ["resume", "cv", "download"],
    reply: () => ({
      text: "You can download his resume here.",
      link: { label: "Download resume", href: profile.resume },
    }),
  },
  {
    keywords: ["where", "location", "live", "based", "city"],
    reply: () => ({ text: `He is based in ${profile.location}.` }),
  },
  {
    keywords: ["education", "degree", "study", "studied", "college", "university", "qualification"],
    reply: () => ({
      text: EducationData.map((e) => `• ${e.title}, ${e.place}${e.period ? ` (${e.period})` : ""}`).join("\n"),
    }),
  },
  {
    keywords: ["teach", "teaching", "mentor", "students", "instructor", "trainer"],
    reply: () => ({
      text: "He teaches part-time at The Skillians and has mentored 250+ students in frontend and full-stack development. He also leads and trains junior developers at work.",
    }),
  },
  {
    keywords: ["thanks", "thank", "thx", "great", "nice", "cool"],
    reply: () => ({ text: "You're welcome! 😊 Anything else you'd like to know?" }),
  },
  {
    keywords: ["bye", "goodbye", "see"],
    reply: () => ({ text: "Bye! Thanks for visiting. 👋" }),
  },
];

const fallback = {
  text: "Sorry, I didn't get that. 🤔 Try asking about skills, experience, projects, education, resume or contact.",
};

// Buttons shown under the chat so visitors don't have to type.
export const quickQuestions = ["About him", "Skills", "Experience", "Projects", "Contact", "Resume"];

export function getReply(message) {
  const text = message.toLowerCase();
  const words = text.split(/[^a-z0-9]+/);

  // asked about one project by name? show its details
  const project = allProjects.find((p) => text.includes(p.title.toLowerCase().split(" ")[0]));
  if (project) {
    return {
      text: `${project.title}${project.company ? ` (${project.company})` : ""}\n\n${project.about}\n\nTech: ${project.tags.join(", ")}`,
      link: project.demo ? { label: "Live demo", href: project.demo } : { label: "Open projects", href: "#projects" },
    };
  }

  let best = null;
  let bestScore = 0;
  topics.forEach((topic) => {
    const score = topic.keywords.filter((k) => words.includes(k)).length;
    if (score > bestScore) {
      best = topic;
      bestScore = score;
    }
  });

  return best ? best.reply() : fallback;
}
