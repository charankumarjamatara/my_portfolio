import type { LucideIcon } from "lucide-react";
import {
  Terminal,
  Globe,
  GitBranch,
  Trophy,
  Code2,
  FileCode2,
  Users,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

/* ──────────────────────────── Navigation ──────────────────────────── */

export interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Activities", href: "#activities" },
  { name: "Contact", href: "#contact" },
];

/* ──────────────────────────── Skills ──────────────────────────────── */

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: Terminal,
    skills: ["C", "Python", "Java"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    title: "Tools & Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code"],
  },
];

/* ──────────────────────────── Projects ─────────────────────────────── */

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "BrainBridge \u2013 Peer Learning Platform",
    description:
      "Platform for students to connect with mentors and peers for knowledge sharing and collaboration. Fosters an interactive learning environment.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/deepakkurella24/BrainBridgeFrontEnd",
    liveUrl: "https://github.com/deepakkurella24/BrainBridgeFrontEnd",
    image: `${import.meta.env.BASE_URL}brainbridge.jpg`,
  },
  {
    title: "HR \u2013 FLOW",
    description:
      "HR-FLOW is an autonomous, multi-agent AI platform designed to seamlessly automate the entire human resource workflow, from candidate screening and data-driven decision making to employee performance and leave management.",
    tags: ["JavaScript", "HTML", "CSS", "TypeScript", "Node.js", "Express.js", "Tailwind CSS", "Gemini API"],
    githubUrl: "https://github.com/charankumarjamatara/HR-FLOW",
    liveUrl: "https://hr-floww.vercel.app/",
    image: `${import.meta.env.BASE_URL}hrflow.png`,
  },
  {
    title: "Movix \u2013 Movie Website",
    description:
      "A movie browsing web app that displays latest released movies and their details using REST API integration. Features search and filtering.",
    tags: ["React.js", "next.js", "TypeScript", "Tailwind CSS", "TMDB API", "PostgreSQL"],
    githubUrl: "https://github.com/charankumarjamatara/movix",
    liveUrl: "https://movix-project1.vercel.app/",
    image: `${import.meta.env.BASE_URL}movix.png`,
  },
];

/* ──────────────────────────── Activities ───────────────────────────── */

export interface Activity {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ACTIVITIES: Activity[] = [
  {
    title: "Hackathons & Events",
    description:
      "Actively participates in college and national level hackathons and technical events.",
    icon: Trophy,
  },
  {
    title: "Competitive Programming",
    description:
      "Regularly solves problems on LeetCode and CodeChef to improve algorithmic thinking.",
    icon: Code2,
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Strong focus on mastering DSA concepts to optimize code efficiency and logic.",
    icon: FileCode2,
  },
  {
    title: "Full-Stack Development",
    description:
      "Building responsive, modern, and interactive web applications using the latest tech stack.",
    icon: Users,
  },
];

/* ──────────────────────────── Contact ──────────────────────────────── */

export interface ContactInfo {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}

export const CONTACT_INFO: ContactInfo[] = [
  {
    label: "Email",
    value: "charankumarjamatara@gmail.com",
    href: "mailto:charankumarjamatara@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 630 299 8045",
    href: "tel:+916302998045",
    icon: Phone,
  },
  {
    label: "Location",
    value: "India",
    icon: MapPin,
  },
];

/* ──────────────────────────── Social Links ─────────────────────────── */

export interface SocialLink {
  name: string;
  href: string;
  icon?: LucideIcon;
  hoverClass: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/charan-kumar-jamatara-bb411b342/",
    icon: Linkedin,
    hoverClass:
      "hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20",
  },
  {
    name: "GitHub",
    href: "https://github.com/charankumarjamatara",
    icon: Github,
    hoverClass:
      "hover:bg-gray-900 hover:text-white hover:shadow-lg",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/charankumarjamatara/",
    hoverClass:
      "hover:bg-yellow-500 hover:text-white hover:shadow-lg hover:shadow-yellow-500/20",
  },
  {
    name: "CodeChef",
    href: "https://www.codechef.com/users/charan_kumar14",
    hoverClass:
      "hover:bg-[#5B4638] hover:text-white hover:shadow-lg hover:shadow-[#5B4638]/20",
  },
  {
    name: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/charankumarjamatara",
    hoverClass:
      "hover:bg-green-600 hover:text-white hover:shadow-lg hover:shadow-green-600/20",
  },
];
