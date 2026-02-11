import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "inttowing",
    category: "Web Empresarial",
    title: "IntTowing",
    src: "/assets/projects-screenshots/inttowing/IntTown.jpeg",
    screenshots: ["IntTown.jpeg", "IntTown2.jpeg"],
    live: "https://ertowing.pages.dev",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Página Web Empresarial - Servicios de Remolque
          </TypographyP>
          <TypographyP className="font-mono">
            Sitio web empresarial moderno desarrollado con Vite y React, 
            diseñado para una empresa de servicios de remolque. Incluye diseño 
            responsivo, animaciones fluidas y una experiencia de usuario optimizada.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/inttowing/IntTown.jpeg`,
              `${BASE_PATH}/inttowing/IntTown2.jpeg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "internationalascc",
    category: "Web Empresarial",
    title: "International ASCC",
    src: "/assets/projects-screenshots/internationalascc/intauto.jpeg",
    screenshots: ["intauto.jpeg", "intauto2.jpeg"],
    live: "https://internationalascc.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Página Web Empresarial - International ASCC
          </TypographyP>
          <TypographyP className="font-mono">
            Sitio web corporativo desarrollado con Vite y React para International ASCC. 
            Diseño profesional y responsivo que presenta los servicios y la información 
            de la empresa de manera clara y atractiva.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/internationalascc/intauto.jpeg`,
              `${BASE_PATH}/internationalascc/intauto2.jpeg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "jwtech-solutions",
    category: "Web Empresarial",
    title: "JW Tech Solutions",
    src: "/assets/projects-screenshots/jwtech/JW.jpeg",
    screenshots: ["JW.jpeg", "JW2.jpeg"],
    live: "https://jwtechssolutions.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            JW Tech Solutions - Con Chatbot de IA Integrado
          </TypographyP>
          <TypographyP className="font-mono">
            Página web empresarial desarrollada con Vite y React, destacando por 
            su chatbot de inteligencia artificial integrado. Diseño completamente 
            responsivo que ofrece una experiencia interactiva y moderna para los visitantes.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Características Principales</TypographyH3>
          <p className="font-mono mb-2">
            Chatbot de IA integrado para atención al cliente automatizada, 
            diseño responsivo optimizado para todos los dispositivos, y 
            interfaz moderna con animaciones fluidas.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/jwtech/JW.jpeg`,
              `${BASE_PATH}/jwtech/JW2.jpeg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "jamcob-electric",
    category: "Web Empresarial",
    title: "Jamcob Electric",
    src: "/assets/projects-screenshots/jamcob/Jamcob.jpeg",
    screenshots: ["Jamcob.jpeg", "Jamcob2.jpeg"],
    live: "https://www.jamcobelectric.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Jamcob Electric - Página Web Empresarial
          </TypographyP>
          <TypographyP className="font-mono">
            Sitio web profesional para empresa de servicios eléctricos, desarrollado 
            con Vite y React. Presenta los servicios eléctricos de manera clara, 
            con diseño responsivo y optimizado para conversión de clientes.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/jamcob/Jamcob.jpeg`,
              `${BASE_PATH}/jamcob/Jamcob2.jpeg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "agregados-geraldo-diaz",
    category: "Sistema de Gestión",
    title: "Agregados Geraldo Diaz",
    src: "/assets/projects-screenshots/agregados/Agregados.jpeg",
    screenshots: ["Agregados.jpeg", "Agregados2.jpeg"],
    live: "https://www.agregadosgeraldodiaz.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Sistema de Ventas Web - Facturación e Inventario
          </TypographyP>
          <TypographyP className="font-mono">
            Sistema completo de gestión empresarial desarrollado para Agregados Geraldo Diaz. 
            Incluye módulos de ventas en línea, facturación electrónica, control de inventario 
            y gestión de clientes. Plataforma robusta construida con React en el frontend y 
            Node.js con Express y PostgreSQL en el backend.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Módulos del Sistema</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Sistema de ventas en línea</li>
            <li>Facturación electrónica</li>
            <li>Control de inventario en tiempo real</li>
            <li>Gestión de clientes y proveedores</li>
            <li>Reportes y análisis de ventas</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/agregados/Agregados.jpeg`,
              `${BASE_PATH}/agregados/Agregados2.jpeg`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
