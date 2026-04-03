export const profile = {
  name: "Phan Quang Tien",
  title: "Fullstack Developer",
  tagline:
    "",
  bio: "Hi, I'm Tien, a software developer with 9+ years of experience, including 4 years in leadership roles. I started programming before graduating, and in the beginning, I was coding for food, but now it's for coffee and food. I consider myself open-minded and thrive on challenges, especially those involving new technologies.",
  contacts: {
    phone: "+84 935 253 027",
    phoneDisplay: "0935 253 027",
    email: "phanqtien@gmail.com",
    github: "https://github.com/phantien133",
    githubHandle: "phantien133",
    linkedin: "https://www.linkedin.com/in/phantien133/",
    linkedinPath: "linkedin.com/in/phantien133",
  },
};

/** Served from `public/` — downloadable résumé (PDF). */
export const resumePdf = {
  path: "assets/Resume_Phan-Tien.pdf",
  downloadFileName: "Resume_Phan-Tien.pdf",
} as const;

export const skillBars = [
  { name: "Ruby / Rails", percent: 92 },
  { name: "TypeScript / JavaScript", percent: 90 },
  { name: "Go", percent: 72 },
  { name: "Python", percent: 72 },
] as const;

export type AtomServiceIcon =
  | "development"
  | "content"
  | "mobile"
  | "email"
  | "design"
  | "graphics";

export const atomServices: {
  title: string;
  description: string;
  icon: AtomServiceIcon;
}[] = [
  {
    title: "Backend & APIs",
    description:
      "Robust APIs, integrations, and data layers with a focus on reliability and clarity.",
    icon: "development",
  },
  {
    title: "Fullstack delivery",
    description:
      "End-to-end features across Rails, Go, React, and Next.js in production teams.",
    icon: "content",
  },
  {
    title: "Cloud & scaling",
    description:
      "AWS operations, performance work, and refactors that keep systems healthy under load.",
    icon: "mobile",
  },
  {
    title: "CI/CD & automation",
    description:
      "Pipelines, Dockerized workflows, and deployment practices teams can repeat with confidence.",
    icon: "email",
  },
  {
    title: "Team leadership",
    description:
      "Sprint planning, mentoring, code reviews, and delivery when stakes are high.",
    icon: "design",
  },
  {
    title: "Integrations & ATS",
    description:
      "Connecting products to ATS, payments, and ecosystem services with dependable sync.",
    icon: "graphics",
  },
];

export const atomStats = [
  {
    value: "9+",
    label: "Years experience",
    icon: "icon-project.svg" as const,
  },
  {
    value: "8",
    label: "Key projects",
    icon: "icon-award.svg" as const,
  },
  {
    value: "4",
    label: "Years in leadership",
    icon: "icon-happy.svg" as const,
  },
  {
    value: "500K+",
    label: "Users served (HR platform)",
    icon: "icon-puzzle.svg" as const,
  },
] as const;

export const organizations = ["Opus Match", "Sun Asterisk", "Neolab"] as const;

export const skills = {
  languages: ["Ruby", "JavaScript", "TypeScript", "Go", "Python"],
  data: [
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "MongoDB",
    "DynamoDB",
    "Redis",
  ],
  human: "English (upper-intermediate)",
  strengths: [
    "System reliability: monitoring, deployment, operational support",
    "Early issue detection; stable operations under load",
    "Incident handling and production troubleshooting",
    "Team leadership, coaching, collaborative growth",
    "AWS for deployment and operations",
    "CI/CD pipeline design and maintenance",
    "Docker and virtualized dev environments",
    "Efficient use of AI-assisted development without sacrificing quality",
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Opus Match",
    role: "Back-end Developer",
    period: "May 2024 – Present",
    highlights: [
      "Feature development and system enhancements across multiple product lines",
      "Integration with ATS platforms for reliable data synchronization",
      "Refactors to improve performance and scalability",
      "Real-time monitoring and incident response with minimal downtime",
    ],
  },
  {
    company: "Sun Asterisk",
    role: "Fullstack Developer & Tech Lead",
    period: "Oct 2021 – Apr 2024",
    highlights: [
      "Technical leadership and operational stability",
      "Agile/Scrum: sprint planning, execution, and on-time, high-quality delivery",
      "Partnered with sales and stakeholders on solutions aligned to business goals",
      "Effort estimation, roadmap, timelines, and resource planning",
      "Incident handling and team support through project challenges",
      "Hands-on fullstack work, code reviews, and quality improvements",
      "Training, conflict resolution, and team motivation",
    ],
  },
  {
    company: "Neolab",
    role: "Back-end Developer",
    period: "Oct 2019 – Sep 2021",
    highlights: [
      "Developed and maintained a long-running product (since ~2015)",
      "New features, restructuring, refactors, and performance work",
      "Team lead contributor across multiple projects with strong review standards",
      "Owned complex components and mentored junior developers",
    ],
  },
  {
    company: "Sun Asterisk",
    role: "Fullstack Developer",
    period: "Oct 2016 – Oct 2019",
    highlights: [
      "Designed solutions and owned high-impact product areas",
      "Fullstack delivery across the stack with consistent engineering practices",
    ],
  },
];

export type Project = {
  name: string;
  role: string;
  period: string;
  description: string;
  stack: string;
};

export const projects: Project[] = [
  {
    name: "Healthcare job matching",
    role: "Back-end",
    period: "Product",
    description:
      "Feature delivery and refactors; integrations with Symplr, Salesforce, Bullhorn, and HubSpot ATS.",
    stack: "Python (Celery, RabbitMQ), Ruby on Rails",
  },
  {
    name: "Celebrity content web application",
    role: "Back-end Developer",
    period: "May 2024 – Present",
    description:
      "Active contributor on content and platform capabilities for celebrity-focused product lines.",
    stack: "Ruby on Rails, modern frontend stack",
  },
  {
    name: "Content management for large media team",
    role: "Back-end Developer",
    period: "Apr 2023 – Oct 2023",
    description:
      "Refactored media upload, payment gateway, and bulk email features for clearer, reusable architecture.",
    stack: "Ruby on Rails, Next.js · Team of 24",
  },
  {
    name: "E-commerce agency CMS",
    role: "Team Lead (Back-end)",
    period: "Dec 2022 – Mar 2023",
    description:
      "Led a 3-person back-end team on APIs and integrations; contributed to content editor UX.",
    stack: "Go (chi), Next.js · Team of 9",
  },
  {
    name: "Timesheet platform for maritime workforce",
    role: "Team Lead (Back-end)",
    period: "Sep 2022 – Dec 2022",
    description:
      "Led a 5-person team building Ship and Batch servers; Docker images, AWS CodeDeploy, SFTP sync, core calculations.",
    stack: "Docker, Ruby on Rails · Team of 10",
  },
  {
    name: "Insurance policy management",
    role: "Back-end Developer",
    period: "Jan 2022 – Sep 2022",
    description:
      "APIs for policy management and synchronization with ecosystem services.",
    stack: "Ruby on Rails, React · Team of 30",
  },
  {
    name: "Human resources platform",
    role: "Team Lead",
    period: "Oct 2020 – Dec 2020",
    description:
      "Led delivery of timesheet and payroll features for 500,000+ active users across 3,000 companies.",
    stack: "Ruby on Rails, DynamoDB · Team of 20",
  },
  {
    name: "E-learning registration",
    role: "Full-stack Developer",
    period: "Feb 2017 – Sep 2018",
    description:
      "Registration flows and integrations with learning platforms; GMO payment gateway integration.",
    stack: "Ruby on Rails, React, Kubernetes · Team of 20",
  },
];
