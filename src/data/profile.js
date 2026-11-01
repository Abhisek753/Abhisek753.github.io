// Your personal details live here. Edit this file to change text across the site.
export const profile = {
  name: "Abhisek Kumar",
  // the hero types these one after another
  roles: ["Full Stack Developer", "React.js Developer", ".NET / C# Developer", "Mentor & Instructor"],
  tagline: "Building secure, production-ready web apps with React, .NET and Node.js.",
  about:
    "Full Stack Developer with 3+ years building and shipping production web applications in React.js, .NET/C#, and the MERN stack. Currently building enterprise systems for Toyota Kirloskar Motor at Technoforte Software, owning features end-to-end across secure authentication, role-based authorization and API design. I enjoy mentoring junior developers and delivering under production deadlines.",
  location: "Bengaluru, India",
  email: "kumarabhisek753@gmail.com",
  phone: "+919733905029",
  avatar: "https://avatars.githubusercontent.com/u/112477961?v=4",
  // file inside the /public folder. To update, replace that PDF with the same name.
  resume: process.env.PUBLIC_URL + "/Abhisek-Kumar-Resume.pdf",
  // numbers count up when scrolled into view
  stats: [
    { value: 3, suffix: "+", label: "Years experience" },
    { value: 250, suffix: "+", label: "Students mentored" },
    { value: 30, suffix: "%", label: "Performance boost" },
    { value: 4, suffix: "", label: "Production apps" },
  ],
};
