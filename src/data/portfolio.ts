export interface TelemetryStat {
  label: string;
  value: string;
  unit?: string;
  status: 'OPTIMAL' | 'PEAK' | 'ACTIVE';
  change: string;
}

export interface Profile {
  name: string;
  handle: string;
  role: string;
  tagline: string;
  bio: string;
  status: string;
  statusDetails: string;
  location: string;
  telemetryStats: TelemetryStat[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'Core UI' | 'AI Acceleration' | 'Backend & Architecture';
  proficiency: number; // 0 - 100
  rpm: number; // e.g. 11200 RPM
  description: string;
  iconName: string; // Tabler Icon identifier key
}

export interface Project {
  id: string;
  title: string;
  role: string;
  ownership: string;
  category: 'flagship' | 'company' | 'legacy';
  description: string;
  longDescription?: string;
  telemetryTags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  thumbnailLabel: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  stintPeriod: string;
  stintType: string; // e.g. "STINT 03 // PRESENT"
  location: string;
  description: string;
  telemetryMilestones: string[];
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitch: string;
  location: string;
  radioFrequency: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  contact: ContactInfo;
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Uzair Abdullah",
    handle: "[PIT_WALL // UZAIR.DEV]",
    role: "AI-Assisted Senior Frontend Engineer",
    tagline: "Engineering high-velocity, pit-wall precise web architectures accelerated by advanced LLM workflows.",
    bio: "Specializing in Next.js App Router, TypeScript, and modern design systems. Leveraging cutting-edge AI tooling to deliver 4x faster production UI with zero compromise on precision, accessibility, and performance.",
    status: "PIT WALL ACTIVE",
    statusDetails: "TELEMETRY 100% // AVAILABLE FOR CONTRACT & FULL-TIME ROLES",
    location: "Global / Remote",
    telemetryStats: [
      {
        label: "UI Velocity",
        value: "4.2x",
        unit: "FAST-LAP",
        status: "PEAK",
        change: "+320% AI Boost"
      },
      {
        label: "Production Stack",
        value: "Next 16",
        unit: "APP ROUTER",
        status: "OPTIMAL",
        change: "React 19 Server Components"
      },
      {
        label: "Telemetry Score",
        value: "99.8",
        unit: "LIGHTHOUSE",
        status: "OPTIMAL",
        change: "A11y & Core Vitals"
      },
      {
        label: "Code Precision",
        value: "100%",
        unit: "TYPED TS",
        status: "ACTIVE",
        change: "Strict Type Safety"
      }
    ]
  },
  skills: [
    // Core UI
    {
      id: "nextjs",
      name: "Next.js 16 (App Router)",
      category: "Core UI",
      proficiency: 96,
      rpm: 14500,
      description: "Server Components, Parallel Routes, Server Actions, Dynamic Streaming & SSR Optimization.",
      iconName: "IconBrandNextjs"
    },
    {
      id: "react",
      name: "React 19 & TypeScript",
      category: "Core UI",
      proficiency: 98,
      rpm: 15000,
      description: "Strict TypeScript, Custom React Hooks, Complex State Management, Concurrent Rendering.",
      iconName: "IconBrandReact"
    },
    {
      id: "tailwind",
      name: "Tailwind CSS & Glassmorphism",
      category: "Core UI",
      proficiency: 95,
      rpm: 14200,
      description: "Custom CSS Variables, Design Tokens, Translucent Pit Wall Glass, Responsive Grid Systems.",
      iconName: "IconBrandTailwind"
    },
    {
      id: "design-systems",
      name: "shadcn/ui & UI Primitives",
      category: "Core UI",
      proficiency: 94,
      rpm: 13800,
      description: "Accessible Radix-based Primitives, Custom Component Libraries, Theme Systems.",
      iconName: "IconComponents"
    },

    // AI Acceleration
    {
      id: "ai-copilot",
      name: "LLM Orchestration & Prompting",
      category: "AI Acceleration",
      proficiency: 96,
      rpm: 14800,
      description: "Multi-agent coding setups, custom context prompts, spec generation, AI pair programming.",
      iconName: "IconCpu"
    },
    {
      id: "ai-tooling",
      name: "Cursor / Codex / Claude 3.5",
      category: "AI Acceleration",
      proficiency: 97,
      rpm: 14900,
      description: "Automated refactoring, test generation, rapid prototype iteration & module scaffolding.",
      iconName: "IconSparkles"
    },
    {
      id: "ai-workflow",
      name: "AI-Augmented QA & Review",
      category: "AI Acceleration",
      proficiency: 92,
      rpm: 13600,
      description: "Automated diff analysis, edge-case detection, accessibility checks, automated documentation.",
      iconName: "IconActivity"
    },

    // Backend & Architecture
    {
      id: "api-integration",
      name: "REST / GraphQL & App Sync",
      category: "Backend & Architecture",
      proficiency: 88,
      rpm: 12400,
      description: "TanStack Query, SWR, Server Actions, resilient error handling & optimistic updates.",
      iconName: "IconApi"
    },
    {
      id: "state-architecture",
      name: "Zustand & Context Engines",
      category: "Backend & Architecture",
      proficiency: 92,
      rpm: 13500,
      description: "Lightweight global state, reactive telemetry hooks, state persistence & selectors.",
      iconName: "IconDatabase"
    },
    {
      id: "perf-optimization",
      name: "Performance & Telemetry Analytics",
      category: "Backend & Architecture",
      proficiency: 90,
      rpm: 13000,
      description: "Bundle reduction, Core Web Vitals tuning, image optimization, telemetry tracking.",
      iconName: "IconGauge"
    }
  ],
  projects: [
    {
      id: "neofulkrum",
      title: "neofulkrum",
      role: "Lead Frontend Architect",
      ownership: "100% UI Ownership",
      category: "flagship",
      description: "Flagship Enterprise Analytics Platform featuring full UI ownership, high-density data visualizations, and real-time dashboard telemetry.",
      longDescription: "Architected and engineered neofulkrum from ground zero using Next.js App Router and TypeScript. Built a custom design system with dark carbon themes, dynamic grid layouts, and high-performance real-time data streaming.",
      telemetryTags: ["FLAGSHIP", "NEXT.JS 16", "TYPESCRIPT", "TAILWIND CSS", "REALTIME DATA"],
      liveUrl: "https://neofulkrum.example.com",
      githubUrl: "https://github.com/uzair/neofulkrum",
      featured: true,
      metrics: [
        { label: "Render Time", value: "<12ms" },
        { label: "UI Coverage", value: "100% Custom" },
        { label: "Data Latency", value: "Realtime" }
      ],
      thumbnailLabel: "NEOFULKRUM // ENTERPRISE TELEMETRY DASHBOARD"
    },
    {
      id: "vendoriq",
      title: "vendorIQ",
      role: "Senior UI Engineer",
      ownership: "Company Platform Lead",
      category: "company",
      description: "Enterprise Vendor Intelligence & Analytics interface powering automated vendor management workflows, compliance tracking, and financial insights.",
      longDescription: "Designed and engineered complex data tables, dynamic vendor scorecard widgets, and multi-tenant management workflows using Next.js, Radix UI primitives, and Tailwind CSS.",
      telemetryTags: ["ENTERPRISE", "ANALYTICS", "RADIX UI", "ZUSTAND", "NEXT.JS"],
      liveUrl: "https://vendoriq.example.com",
      githubUrl: "https://github.com/uzair/vendoriq",
      featured: true,
      metrics: [
        { label: "Vendor Records", value: "50k+" },
        { label: "Workflow Speed", value: "3x Faster" }
      ],
      thumbnailLabel: "VENDORIQ // INTELLIGENCE & SCORECARD ENGINE"
    },
    {
      id: "legacy-vault-1",
      title: "React Formula Pit Stop Simulator",
      role: "Frontend Developer",
      ownership: "Personal Project",
      category: "legacy",
      description: "Interactive real-time React simulator tracking pit stop timing, tire wear degradation physics, and race strategy decision trees.",
      telemetryTags: ["REACT 18", "TYPESCRIPT", "CANVAS API", "TAILWIND CSS"],
      liveUrl: "https://formula-pitstop.example.com",
      githubUrl: "https://github.com/uzair/react-pitstop-sim",
      featured: false,
      metrics: [
        { label: "Physics Loop", value: "60 FPS" }
      ],
      thumbnailLabel: "LEGACY ERA // PIT STOP SIMULATOR (REACT)"
    },
    {
      id: "legacy-vault-2",
      title: "Scuderia Telemetry Visualizer",
      role: "UI Developer",
      ownership: "Open Source",
      category: "legacy",
      description: "Foundational React web visualizer mapping vehicle sensor data, lap time comparison graphs, and cornering g-force telemetry.",
      telemetryTags: ["REACT", "CHART.JS", "TAILWIND CSS", "WEBSOCKETS"],
      liveUrl: "https://scuderia-telemetry.example.com",
      githubUrl: "https://github.com/uzair/scuderia-telemetry",
      featured: false,
      metrics: [
        { label: "Streams", value: "16 Channels" }
      ],
      thumbnailLabel: "LEGACY ERA // SCUDERIA TELEMETRY GRAPH"
    }
  ],
  experiences: [
    {
      id: "stint-03",
      company: "Enterprise AI & Frontend Solutions",
      role: "AI-Assisted Senior Frontend Engineer",
      stintPeriod: "2024 - PRESENT",
      stintType: "STINT 03 // ACTIVE LAP",
      location: "Remote",
      description: "Spearheading modern frontend architecture for enterprise products. Utilizing AI coding workflows to accelerate component delivery, design system implementation, and complex data dashboard builds.",
      telemetryMilestones: [
        "Delivered flagship enterprise platform neofulkrum with 100% UI ownership.",
        "Increased UI velocity by 320% using AI multi-agent specs and LLM workflows.",
        "Established company-wide Next.js App Router and Tailwind CSS design tokens."
      ],
      technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "AI Tooling", "Zustand"]
    },
    {
      id: "stint-02",
      company: "VendorIQ Tech Systems",
      role: "Senior UI / Frontend Engineer",
      stintPeriod: "2022 - 2024",
      stintType: "STINT 02 // PIT STOP COMPLETE",
      location: "Remote",
      description: "Owned key frontend modules for VendorIQ enterprise SaaS. Built high-throughput data tables, analytics widgets, and vendor scorecard interfaces.",
      telemetryMilestones: [
        "Architected enterprise vendor analytics dashboard serving over 50,000 active records.",
        "Optimized frontend bundle size by 45% using dynamic imports and RSC optimization.",
        "Created reusable UI component library based on accessible Radix primitives."
      ],
      technologies: ["React", "TypeScript", "Next.js", "Radix UI", "TanStack Query"]
    },
    {
      id: "stint-01",
      company: "Digital Edge Web Agency",
      role: "Frontend Developer",
      stintPeriod: "2020 - 2022",
      stintType: "STINT 01 // FOUNDATION LAP",
      location: "On-site / Hybrid",
      description: "Built custom client web applications, responsive landing pages, and interactive React dashboards with meticulous visual precision.",
      telemetryMilestones: [
        "Developed 15+ custom client web applications with 100% lighthouse performance scores.",
        "Collaborated with UI/UX designers to translate Figma mockups into pixel-perfect code."
      ],
      technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "REST APIs"]
    }
  ],
  contact: {
    email: "uzair.abdullah.dev@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitch: "https://twitch.tv",
    location: "Global / Remote",
    radioFrequency: "CH_01 // 462.5625 MHz [PIT WALL]"
  }
};
