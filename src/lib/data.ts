import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiNodedotjs,
  SiSpring,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiVuedotjs,
  SiJenkins,
  SiKubernetes,
} from "react-icons/si"
import type { IconType } from "react-icons"
import { TbCloud } from "react-icons/tb"

export interface StackItem {
  name: string
  icon: IconType
  color: string
}

export const stackCategories: { category: string; items: StackItem[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#6DB33F" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "AWS", icon: TbCloud, color: "#FF9900" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
    ],
  },
]

export const projects = [
  {
    title: "PayFlow",
    href: "/works/payflow",
    thumbnail: "/projects/payflow-screen.png",
    stack: ["Angular", "TypeScript", "SpringBoot", "AWS"],
  },
  {
    title: "LifeOnIce",
    href: "/works/lifeonice",
    thumbnail: "/projects/life-screen.png",
    stack: ["Next.js", "TypeScript", "React", "Node.js"],
  },
  {
    title: "OmniFood",
    href: "/works/omnifood",
    thumbnail: "/projects/omnifood-screen.png",
    description: "Otra descripción corta.",
    stack: ["Next.js", "TypeScript", "React"],
  },
  {
    title: "TermiCode",
    href: "/works/termicode",
    thumbnail: "/projects/adminshop-screen.png",
    stack: ["Vue.js", "TypeScript", "SpringBoot"],
  },
]
