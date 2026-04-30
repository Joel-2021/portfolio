export const skills = [
  {
    title: "Core Languages",
    techStack: [
      { icon: "javascript.svg", name: "JavaScript" },
      { icon: "typescript.svg", name: "TypeScript" },
      { icon: "html.svg", name: "HTML" },
      { icon: "css.svg", name: "CSS" },
    ],
  },
  {
    title: "Frontend Frameworks",
    techStack: [
      { icon: "angular.svg", name: "Angular" },
      { icon: "react.svg", name: "React" },
      { icon: "nextjs.svg", name: "Next.js" },
    ],
  },
  {
    title: "Styling",
    techStack: [
      { icon: "tailwind.svg", name: "Tailwind CSS" },
      { icon: "scss.svg", name: "Scss" },
      { icon: "bootstrap.svg", name: "Bootstrap" },
      { icon: "material-ui.svg", name: "Material UI" },
      { icon: "shadcnui.svg", name: "Shadcn UI" },
      { icon: "framer.svg", name: "Framer Motion" },
    ],
  },
  {
    title: "Backend",
    techStack: [
      { icon: "nodejs.svg", name: "Node.js" },
      { icon: "express.svg", name: "Express.js" },
      { icon: "zod.svg", name: "Zod" },
    ],
  },
  {
    title: "Database & Access",
    techStack: [
      { icon: "postgresql.svg", name: "PostgreSQL" },
      { icon: "mongodb.svg", name: "MongoDB" },
      { icon: "drizzle.svg", name: "Drizzle ORM" },
    ],
  },
  {
    title: "Deployment",
    techStack: [
      { icon: "docker.svg", name: "Docker" },
      { icon: "aws.svg", name: "AWS" },
      { icon: "vercel.svg", name: "Vercel" },
      { icon: "netlify.svg", name: "Netlify" },
    ],
  },
  {
    title: "Tools",
    techStack: [
      { icon: "jira.svg", name: "Jira" },
      { icon: "github.svg", name: "GitHub" },
      { icon: "postman.svg", name: "Postman" },
      { icon: "vscode.svg", name: "VS Code" },
      { icon: "webstorm.svg", name: "WebStorm" },
      { icon: "android-studio.svg", name: "Android Studio" },
    ],
  },
];

export const skillList = [
  { icon: "javascript.svg", name: "JavaScript" },
  { icon: "typescript.svg", name: "TypeScript" },
  { icon: "html.svg", name: "HTML" },
  { icon: "css.svg", name: "CSS" },
  { icon: "angular.svg", name: "Angular" },
  { icon: "react.svg", name: "React" },
  { icon: "nextjs.svg", name: "Next.js" },
  { icon: "tailwind.svg", name: "Tailwind CSS" },
  { icon: "scss.svg", name: "Scss" },
  { icon: "bootstrap.svg", name: "Bootstrap" },
  { icon: "material-ui.svg", name: "Material UI" },
  { icon: "shadcnui.svg", name: "Shadcn UI" },
  { icon: "framer.svg", name: "Framer Motion" },
  { icon: "nodejs.svg", name: "Node.js" },
  { icon: "express.svg", name: "Express.js" },
  { icon: "zod.svg", name: "Zod" },
  { icon: "axios.svg", name: "Axios" },
  { icon: "postgresql.svg", name: "PostgreSQL" },
  { icon: "mongodb.svg", name: "MongoDB" },
  { icon: "drizzle.svg", name: "Drizzle ORM" },
  { icon: "docker.svg", name: "Docker" },
  { icon: "aws.svg", name: "AWS" },
  { icon: "vercel.svg", name: "Vercel" },
  { icon: "netlify.svg", name: "Netlify" },
  { icon: "jira.svg", name: "Jira" },
  { icon: "github.svg", name: "GitHub" },
  { icon: "postman.svg", name: "Postman" },
  { icon: "vscode.svg", name: "VS Code" },
  { icon: "webstorm.svg", name: "WebStorm" },
  { icon: "android-studio.svg", name: "Android Studio" },
];

export const skillList1 = skillList.filter((_, i) => i % 2 === 0);
export const skillList2 = skillList.filter((_, i) => i % 2 !== 0);
