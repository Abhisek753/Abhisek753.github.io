// Professional projects (from the resume). No demo or code links because they are private.
// `highlights` are shown in the popup when a card is clicked.
export const WorkProjects = [
  {
    id: "w1",
    type: "professional",
    title: "DriveIQ CRM",
    company: "Toyota Kirloskar",
    period: "Jul 2026 – Present",
    about:
      "A full-stack automotive CRM for Toyota Kirloskar to manage vehicle sales enquiries, leads, follow-ups, estimates and service enquiries.",
    highlights: [
      "Role-based routing and JWT authentication.",
      "Automated Hot/Warm/Cold lead scheduling.",
      "Excel bulk enquiry upload, dashboards and reports.",
      "Background services for stock alerts and email notifications.",
      "Controller-Service-Repository architecture on the backend.",
    ],
    tags: ["React 19", "Vite", "Tailwind CSS", "ASP.NET Core 8", "SQL Server"],
  },
  {
    id: "w2",
    type: "professional",
    title: "VDEM Quality Gate",
    company: "Toyota Kirloskar Motor",
    period: "Jul 2025 – Present",
    about:
      "An enterprise quality-management system for vehicle quality gates on the manufacturing line.",
    highlights: [
      "VIN/QR scanning, inspection checks and defect tracking.",
      "Repair workflows and Quality Hold processes.",
      "Real-time updates via WebSockets alongside REST APIs.",
      "Authentication and authorization across user roles.",
    ],
    tags: ["React.js", "ASP.NET Core", "C#", "SQL Server", "WebSockets"],
  },
  {
    id: "w3",
    type: "professional",
    title: "Lavender Healthcare",
    company: "USA-based healthcare client",
    period: "Jun 2023 – Mar 2025",
    about:
      "A healthcare management application supporting rental bookings, availability and orders across multiple user roles.",
    highlights: [
      "Rental booking management and custom availability charts.",
      "Order tracking across multiple user roles.",
      "PDF generation and document workflows with PDFMake and HTML2Canvas.",
    ],
    tags: ["React.js", "Redux", "PDFMake", "HTML2Canvas"],
  },
  {
    id: "w4",
    type: "professional",
    title: "Ultron Company Management",
    company: "Internal product",
    period: "Mar 2023 – Sep 2024",
    about: "An internal company management system built as microfrontends on the MERN stack.",
    highlights: [
      "Employee leave management and timesheets.",
      "Project tracking, noticeboard and ticketing.",
    ],
    tags: ["MERN", "Microfrontend"],
  },
];
