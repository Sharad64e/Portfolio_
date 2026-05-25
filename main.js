const skills = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "⬢" },
  { name: "Express", icon: "EX" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind CSS", icon: "≈" },
  { name: "AWS", icon: "☁" },
];

const projects = [
  {
    title: "YourTee E-Commerce",
    image: "./assets/yourtee.png",
    description:
      "A modern fashion e-commerce experience built with React and TypeScript, featuring responsive UI, reusable components, dynamic routing, and interactive lookbook sections.",
    tags: ["React", "TypeScript", "Responsive UI"],
    live: "https://yourtee-ten.vercel.app/#lookbook",
    source: "https://github.com/Sharad64e/Yourtee",
  },
  {
    title: "Student Grievance Management System",
    image: "./assets/student-grievance.png",
    description:
      "A MERN grievance portal where students can register, log in, and manage academic, facility, and administration complaints with JWT auth and protected CRUD flows.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    live: "https://student-grievance-management-system-xi.vercel.app/",
    source: "https://github.com/Sharad64e/student-grievance-management-system",
  },
  {
    title: "Civil Resolve",
    image: "./assets/civil-resolve.png",
    description:
      "An AI-themed civic complaint interface focused on submitting, tracking, and routing public issues with a secure, transparent dashboard experience.",
    tags: ["AI UI", "Dashboard", "Civic Tech"],
    live: "https://complaint-system-1-a70y.onrender.com/",
    source: "https://github.com/Sharad64e/complaint-system",
  },
];

const skillRoot = document.querySelector("#skills");
const projectRoot = document.querySelector("#projects-list");

skillRoot.innerHTML = skills
  .map(
    (skill) => `
      <article class="skill-card">
        <span class="skill-icon" aria-hidden="true">${skill.icon}</span>
        <h3 class="text-xs font-bold">${skill.name}</h3>
      </article>
    `,
  )
  .join("");

projectRoot.innerHTML = projects
  .map(
    (project) => `
      <article class="project-card">
        <img class="project-image" src="${project.image}" alt="${project.title} preview" loading="lazy" />
        <div class="mt-4">
          <h3 class="font-display text-lg font-bold">${project.title}</h3>
          <p class="mt-2 text-sm leading-6 text-zinc-400">${project.description}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
          </div>
          <div class="mt-5 flex flex-wrap gap-3">
            ${project.live ? `<a class="project-link" href="${project.live}" target="_blank" rel="noreferrer">Live Demo</a>` : `<span class="project-link disabled">Live Soon</span>`}
            ${project.source ? `<a class="project-link" href="${project.source}" target="_blank" rel="noreferrer">Source Code</a>` : `<span class="project-link disabled">Code Soon</span>`}
          </div>
        </div>
      </article>
    `,
  )
  .join("");
