export const profile = {
  name: "Phan Tiến",
  title: "Fullstack Developer",
  tagline: "",
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

/** CV “Programming languages” / “Database” / “Language” lines (verbatim). */
export const cvTechSummary = {
  programmingLanguages:
    "Programming languages: Ruby, Javascript, Typescript, Golang, Python",
  database: "Database: MySQL, PostgreSQL, SQLite; MongoDB, DynamoDB, Redis",
  language: "Language: English (Upper-intermediate)",
} as const;

/** CV SKILLS bullets (verbatim). See `cvTechSummary` for programming / database / language lines. */
export const skills = {
  strengths: [
    "Ensured system reliability through monitoring, deployment best practices, and operational support",
    "Strong ability to identify issues and incidents early, ensuring system stability and smooth operations",
    "Proactive in monitoring, detecting, and resolving production issues to minimize downtime",
    "Experienced in incident handling and troubleshooting, maintaining reliable system performance",
    "Skilled in team management, coaching, and fostering a collaborative growth environment.",
    "Strong understanding of cloud architecture with practical experience in AWS for application deployment and operations",
    "Designed and maintained CI/CD pipelines to streamline development and release processes",
    "Containerized applications using Docker and configured virtualized development environments",
    "Utilized AI tools to significantly enhance development efficiency, ensuring high-quality output while optimizing time and resources",
  ] as const,
};

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

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

/** Work experience order and wording per CV. */
export const experience: Experience[] = [
  {
    company: "Neolab",
    role: "Back-end Developer",
    period: "OCT 2019 - SEP 2021",
    highlights: [
      "Develop and maintain an old project which was start around 2015",
      "Implement new features, restructure and refactor source code, implement performance",
      "Acted as a Team Lead and key contributor across multiple projects, ensuring high code quality through reviews and best practices",
      "Designed technical solutions and took ownership of complex, high-impact components within projects",
      "Mentored and trained junior developers through internal training sessions and hands-on guidance",
    ],
  },
  {
    company: "Sun Asterisk",
    role: "Fullstack Developer",
    period: "OCT 2016 - OCT 2019",
    highlights: [],
  },
  {
    company: "Sun Asterisk",
    role: "Fullstack Developer & Tech Lead",
    period: "OCT 2021 - APR 2024",
    highlights: [
      "Provided technical leadership and ensured system stability throughout development and operations",
      "Led the development team following Agile/Scrum practices; managed sprint planning, execution, and delivery to ensure high quality and on-time releases.",
      "Collaborated with Sales and stakeholders to propose technical solutions aligned with business needs",
      "Performed effort estimation and drove overall project planning, including roadmap, timeline, and resource allocation",
      "Proactively handled incidents, troubleshot issues, and supported the team in resolving project challenges",
      "Contributed to fullstack development (frontend & backend), conducted code reviews, and improved code quality",
      "Training for team member; resolve conflicts, and motivate team members.",
    ],
  },
  {
    company: "Opus Match",
    role: "Back-end Developer",
    period: "MAY 2024 - PRESENT",
    highlights: [
      "Contributed to multiple product lines, actively participating in feature development and system enhancements",
      "Integrated with various ATS (Applicant Tracking System) platforms to ensure reliable data synchronization",
      "Refactored and rewrote key features to improve system performance and scalability",
      "Monitored system operations and handled incidents in real-time, ensuring minimal downtime and quick issue resolution",
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

/** Key projects — CV wording. */
export const projects: Project[] = [
  {
    name: "HEALTHCARE JOB MATCHING APPLICANT (PRODUCT)",
    role: "",
    period: "",
    description:
      "Implement features and refactor code.\nIntegrate ATS systems: Symplr, Salesforce, Bullhorn, HubSpot.",
    stack: "Technologies: Python (Celery, RabbitMQ) and RoR.",
  },
  {
    name: "WEB APPLICANT FOR CELEBRITY CONTENT",
    role: "Back-end Developer | May 2024 - present",
    period: "",
    description: "",
    stack: "",
  },
  {
    name: "Back-end Developer | Apr 2023 - Oct 2023",
    role: "",
    period: "",
    description:
      "Reviewed, refactored, and restructured features for clearer, reusable architecture, including media content upload, payment gateway integration, and bulk email delivery.",
    stack: "Technologies: RoR and Next.js in a team of 24.",
  },
  {
    name: "WEB APPLICANT FOR CONTENT MANAGEMENT (FOR E-COMMERCE AGENCY)",
    role: "Team Leader | Dec 2022 - March 2023",
    period: "",
    description:
      "Led a 3-member Back-end team to implement APIs and manage website integration with operational applications.\nContributed to Front-end features, including content editor implementation.",
    stack: "Technologies: Go-chi/chi, Next.js in a team of 9.",
  },
  {
    name: "TIMESHEET MANAGEMENT APPLICANT FOR SAILORS",
    role: "Team Leader | Sep 2022 - Dec 2022",
    period: "",
    description:
      "Led a 5-member Back-end team to develop 2 server applications: Ship and Batch Server.\nBuilt Docker images for ship server deployment, used AWS CodeDeploy for updates, and synchronized data via SFTP; developed core calculation systems.",
    stack: "Technologies: Docker, RoR in a team of 10.",
  },
  {
    name: "MANAGEMENT INSURANCE SERVICE",
    role: "Back-end Developer | Jan 2022 - Sep 2022",
    period: "",
    description:
      "Reviewed and implemented APIs for managing insurance policies and synchronizing project data with other services in the customer ecosystem.",
    stack: "Technologies: RoR, React in a team of 30.",
  },
  {
    name: "HUMAN RESOURCES MANAGEMENT",
    role: "Team Leader | Oct 2020 - Dec 2020",
    period: "",
    description:
      "Managed a team of 15, responsible for implementing and operating timesheet and salary calculation functions for over 500,000 active users across 3,000 companies.",
    stack: "Technologies: RoR, DynamoDB in a team of 20.",
  },
  {
    name: "E-LEARNING REGISTRATION SYSTEM",
    role: "Full-stack Developer | Feb 2017 - Sep 2018",
    period: "",
    description:
      "Implement user registration for an e-learning system and integrate user data with other learning platforms, including communication with the GMO payment gateway.",
    stack: "Technologies: RoR, React, Kubernetes in a team of 20.",
  },
];
