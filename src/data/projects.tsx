import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo, download }: { live?: string; repo?: string; download?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
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
      )}
      {repo && repo !== "#" && (
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
      {download && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={download}
        >
          <Button variant={"default"} size={"sm"}>
            Download AppImage
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
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
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
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
  linux: {
    title: "Linux",
    bg: "black",
    fg: "white",
    icon: <FaLinux size={"24"} />,
  },
  vercel: brand("Vercel", "vercel-mono.svg"),
  java: { title: "Java", bg: "black", fg: "white", icon: <span className="text-xs font-bold">Java</span> },
  html: { title: "HTML", bg: "black", fg: "white", icon: <span className="text-xs font-bold">HTML</span> },
  css: { title: "CSS", bg: "black", fg: "white", icon: <span className="text-xs font-bold">CSS</span> },
  makefile: { title: "Makefile", bg: "black", fg: "white", icon: <span className="text-xs font-bold">Makefile</span> },
  batchfile: { title: "Batchfile", bg: "black", fg: "white", icon: <span className="text-xs font-bold">Batch</span> },
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
    id: "repolens",
    category: "Codebase Risk Intelligence Platform",
    title: "RepoLens",
    src: `${BASE_PATH}/repolens/3.png`,
    screenshots: ["1.png", "2.png", "3.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "#",
    github: "https://github.com/rishabh98080/RepoLens",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An advanced Codebase Risk Intelligence Platform designed to elevate your repository's security posture. Connects seamlessly to Git repositories to analyze code structure, detect deep-seated dependencies, surface hidden configuration flaws, and lock down exposed secrets for maximum security and compliance adherence.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Comprehensive Analysis Engine
          </TypographyH3>
          <p className="font-mono mb-2">
            Orchestrates a robust suite of industry-standard security tools. From SAST scanning with Semgrep to dependency vulnerability detection and precise secret scanning using Gitleaks, every line of your project is thoroughly evaluated.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/repolens/1.png`,
              `${BASE_PATH}/repolens/2.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">AI-Powered Risk Assessment</TypographyH3>
          <p className="font-mono mb-2">
            Goes beyond standard vulnerability reports. Leverages localized LLMs and trained Machine Learning models to contextualize findings, calculate precise impact scores based on exposure, and automatically generate actionable remediation strategies without compromising sensitive code data.
          </p>
          <SlideShow images={[`${BASE_PATH}/repolens/3.png`]} />
          <TypographyH3 className="my-4 ">Deep Legal & Compliance Checks</TypographyH3>
          <p className="font-mono mb-2">
            Proactively identifies potential licensing friction and compliance risks. Maps your entire dependency tree and evaluates compatibility, ensuring your project remains legally sound before hitting production.
          </p>
        </div>
      );
    },
  },
  {
    id: "collaborative-coding",
    category: "Web Application",
    title: "Collaborative_Coding_Platform",
    src: `${BASE_PATH}/collaborative-coding/4.png`,
    screenshots: ["3.png", "4.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.js, PROJECT_SKILLS.css],
      backend: [PROJECT_SKILLS.java, PROJECT_SKILLS.docker],
    },
    live: "https://collaborative-coding-platform-topaz.vercel.app",
    github: "https://github.com/rishabh98080/Collaborative_Coding_Platform",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A full-stack real-time collaborative coding platform designed for distributed teams to edit, synchronize, and manage code together with low-latency updates.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Real-time Synchronization
          </TypographyH3>
          <p className="font-mono mb-2">
            Built with Yjs and WebSockets, every keystroke is synced instantly with conflict resolution.
          </p>
          <SlideShow images={[`${BASE_PATH}/collaborative-coding/3.png`]} />
          <TypographyH3 className="my-4 ">Live Execution & Chat</TypographyH3>
          <p className="font-mono mb-2">
            Run your code on the fly and communicate with your team directly within the workspace.
          </p>
          <SlideShow images={[`${BASE_PATH}/collaborative-coding/4.png`]} />
        </div>
      );
    },
  },
  {
    id: "cortex-chat-assistant",
    category: "AI Chat Application",
    title: "Cortex_Chat_Assisstant",
    src: `${BASE_PATH}/cortex-chat-assistant/2.png`,
    screenshots: ["1.png", "2.png", "3.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [],
    },
    live: "https://cortex-chat-assisstant.vercel.app",
    github: "https://github.com/rishabh98080/Cortex_Chat_Assisstant",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An AI-powered assistant for industrial Energy Management Systems (EMS) that combines telemetry analysis, multimodal AI, and natural language interaction.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Real-time Interactions
          </TypographyH3>
          <p className="font-mono mb-2">
            Leveraging Socket.io, the assistant provides seamless and rapid responses without polling.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/cortex-chat-assistant/1.png`,
              `${BASE_PATH}/cortex-chat-assistant/2.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Smart Capabilities</TypographyH3>
          <p className="font-mono mb-2">
            Integrated with MongoDB for context awareness, retaining conversation history for a highly personalized AI experience.
          </p>
          <SlideShow images={[`${BASE_PATH}/cortex-chat-assistant/3.png`]} />
        </div>
      );
    },
  },
  {
    id: "data-force",
    category: "Web Application",
    title: "DataForge",
    src: `${BASE_PATH}/data-force/2.png`,
    screenshots: ["2.png", "1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://data-forge-fix.vercel.app/",
    github: "https://github.com/rishabh98080/DataForge",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            DataForge is a modern application tailored to bring efficiency and performance to your workflow.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Intuitive Interface
          </TypographyH3>
          <p className="font-mono mb-2">
            Experience a sleek, dark-themed UI that puts power and ease of use at the forefront of your experience.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/data-force/2.png`,
              `${BASE_PATH}/data-force/1.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "universal-media-downloader",
    category: "Web Application",
    title: "Universal-Media-Downloader",
    src: `${BASE_PATH}/universal-media-downloader/3.png`,
    screenshots: ["2.png", "3.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [
        PROJECT_SKILLS.docker,
      ],
    },
    live: "#",
    github: "https://github.com/rishabh98080/Universal-Media-Downloader",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Universal-Media-Downloader project.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Media Downloading Made Easy
          </TypographyH3>
          <p className="font-mono mb-2">
            Paste any link, and the platform fetches the media. Simple, fast, and reliable.
          </p>
          <SlideShow images={[`${BASE_PATH}/universal-media-downloader/2.png`]} />
          <TypographyH3 className="my-4 ">Supported Platforms</TypographyH3>
          <p className="font-mono mb-2">
            Supports multiple social media sites out of the box, with options to download in different formats.
          </p>
          <SlideShow images={[`${BASE_PATH}/universal-media-downloader/3.png`]} />
        </div>
      );
    },
  },
  {
    id: "appimage-manager",
    category: "Desktop Application",
    title: "AppImage-Manager-for-Ubuntu-Linux",
    src: `${BASE_PATH}/appimage-manager/1.png`,
    screenshots: ["1.png", "2.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
      ],
      backend: [],
    },
    live: "#",
    github: "https://github.com/rishabh98080/AppImage-Manager-for-Ubuntu-Linux",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Automates AppImage installation, creating organized folders and .desktop shortcuts.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} download="https://github.com/rishabh98080/AppImage-Manager-for-Ubuntu-Linux/releases/download/v1.0.0/AppImageManager" />
          <TypographyH3 className="my-4 mt-8">
            AppImage Management
          </TypographyH3>
          <p className="font-mono mb-2">
            Easily discover, install, and update AppImages with a clean and intuitive user interface built natively for Linux.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/appimage-manager/1.png`,
              `${BASE_PATH}/appimage-manager/2.png`,
            ]}
          />
        </div>
      );
    },
  }
];
export default projects;
