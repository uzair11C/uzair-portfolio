export interface TelemetryStat {
  label: string;
  value: string;
  subtext?: string;
}

export interface F1Visuals {
  heroCar: string;
  cockpitView: string;
  trackNight: string;
}

export interface Profile {
  name: string;
  role: string;
  status: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  avatarUrl: string;
  f1Visuals: F1Visuals;
  telemetryStats: TelemetryStat[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'CORE WEB' | 'FRONTEND ENGINEERING' | 'UI / UX' | 'ROKU DEVELOPMENT' | 'AI-ASSISTED ENGINEERING';
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface AiWorkflowStep {
  stepNumber: string;
  title: string;
  agentRole: string;
  description: string;
  iconName: string;
}

export interface AiWorkflowProcess {
  id: string;
  name: string;
  command: string;
  description: string;
  steps: AiWorkflowStep[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  ownership: string;
  category: 'flagship' | 'company' | 'roku' | 'legacy';
  description: string;
  overview?: string;
  contributions?: string[];
  technologies: string[];
  keyFeatures?: string[];
  architecture?: string;
  integrations?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  confidential?: boolean;
  thumbnailLabel: string;
  imageSlotRequirement?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  stintPeriod: string;
  stintType: string;
  location: string;
  description: string;
  keyResponsibilities?: string[];
  telemetryMilestones: string[];
  technologies: string[];
  transitionNote?: string;
}

export interface AboutInfo {
  headline: string;
  paragraphs: string[];
  uxPhilosophy: string;
  journeyTimeline: { year: string; title: string; detail: string }[];
}

export interface PortfolioData {
  profile: Profile;
  about: AboutInfo;
  skills: Skill[];
  aiWorkflows: AiWorkflowProcess[];
  projects: Project[];
  experiences: Experience[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Uzair Abdullah",
    role: "Junior Frontend Engineer",
    status: "SYSTEM: ACTIVE",
    tagline: "Building modern, production-grade web experiences with React, Next.js, TypeScript, and AI-assisted engineering workflows.",
    bio: "Frontend engineer with ~3 years of professional Roku/BrightScript development experience, currently specializing in modern React & Next.js frontend engineering at Invotyx. Focused on reusable component architecture, strong UI/UX standards, and agentic AI coding workflows.",
    location: "Global / Remote",
    email: "uzairabdullah973@gmail.com",
    github: "https://github.com/uzair11C",
    linkedin: "https://www.linkedin.com/in/uzair-abdullah07/",
    resumeUrl: "/files/resume.pdf",
    avatarUrl: "/images/uzair_avatar.jpg",
    f1Visuals: {
      heroCar: "/images/f1/Ferrari F1 Formula One World Championship.jpg",
      cockpitView: "/images/f1/ferrari cockpit view.jpg",
      trackNight: "/images/f1/bahrain-night.jpg"
    },
    telemetryStats: [
      {
        label: "PRIMARY STACK",
        value: "React / Next.js",
        subtext: "App Router & TypeScript"
      },
      {
        label: "UI ENGINEERING",
        value: "HTML / CSS / Tailwind",
        subtext: "Reusable Components & UX"
      },
      {
        label: "ROKU EXPERTISE",
        value: "~3 Years BrightScript",
        subtext: "TV App & SDK Architecture"
      },
      {
        label: "CURRENT FOCUS",
        value: "AI-Assisted Dev",
        subtext: "Multi-Agent Workflows"
      }
    ]
  },
  about: {
    headline: "Engineering user interfaces with speed, reusability, and user-centric UX advocacy.",
    paragraphs: [
      "My engineering journey began at Invotyx in 2020 prior to university, starting with foundational web technologies (HTML, CSS, JavaScript, and React). Over the subsequent years, I expanded my professional technical scope into specialized TV app development.",
      "For approximately three years (2023–2026), I served as a dedicated Roku Developer at Invotyx, architecting numerous frontend TV streaming applications using BrightScript and the Roku SceneGraph SDK. Working under strict smart TV hardware constraints developed my deep appreciation for UI responsiveness, clean state management, and limited-input UX design.",
      "In May 2026, I transitioned back into full-time web development as a Junior Frontend Engineer at Invotyx. I am currently leading frontend development on flagship web projects like neofulkrum and vendorIQ using Next.js App Router, TypeScript, and multi-agent AI engineering workflows."
    ],
    uxPhilosophy: "I treat UI/UX as an essential engineering discipline. I care strongly about usability, visual hierarchy, interaction consistency, and component reusability. When a proposed requirement creates a poor user experience, I constructively discuss and defend alternative UX approaches with team leads and product managers, while always respecting the final decision of the product owner.",
    journeyTimeline: [
      {
        year: "2020",
        title: "Joined Invotyx (Foundation)",
        detail: "Joined Invotyx before university. Learned Photoshop, HTML, CSS, and foundational React."
      },
      {
        year: "2022–2023",
        title: "Web / React Internship",
        detail: "Contributed to frontend sections of the VentiSwap web project."
      },
      {
        year: "2023–2024",
        title: "Part-time Roku Developer",
        detail: "Built frontend Roku TV applications, BrightScript logic, and API integrations."
      },
      {
        year: "2024–2026",
        title: "Full-time Roku Developer",
        detail: "~3 years of specialized Roku TV app engineering across streaming, media, and social TV channels."
      },
      {
        year: "May 2026–Present",
        title: "Junior Frontend Engineer (React/Web)",
        detail: "Transitioned to full-time React & Next.js web development. Leading UI on vendorIQ and flagship neofulkrum."
      }
    ]
  },
  skills: [
    // CORE WEB
    {
      id: "html5",
      name: "HTML5",
      category: "CORE WEB",
      description: "Semantic markup, accessible DOM structure, and web standards.",
      iconName: "IconBrandHtml5",
      highlight: true
    },
    {
      id: "css3",
      name: "CSS3 & Custom Styling",
      category: "CORE WEB",
      description: "Advanced CSS layouts, Flexbox, Grid, custom styling tokens, and glassmorphism.",
      iconName: "IconBrandCss3",
      highlight: true
    },
    {
      id: "javascript",
      name: "JavaScript (ES6+)",
      category: "CORE WEB",
      description: "Asynchronous JS, ES modules, DOM manipulation, and functional patterns.",
      iconName: "IconBrandJavascript"
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "CORE WEB",
      description: "Strict typing, interface contracts, generics, and compile-time safety.",
      iconName: "IconBrandTypescript"
    },

    // FRONTEND ENGINEERING
    {
      id: "react",
      name: "React 19",
      category: "FRONTEND ENGINEERING",
      description: "Component lifecycle, custom hooks, state architecture, and reusable UI composition.",
      iconName: "IconBrandReact",
      highlight: true
    },
    {
      id: "nextjs",
      name: "Next.js 16 (App Router)",
      category: "FRONTEND ENGINEERING",
      description: "App Router architecture, React Server Components, layout streaming, and SSR.",
      iconName: "IconBrandNextjs",
      highlight: true
    },

    // UI / UX
    {
      id: "ui-engineering",
      name: "UI Engineering & Layouts",
      category: "UI / UX",
      description: "Visual hierarchy, responsive layout systems, and pixel-accurate implementation.",
      iconName: "IconLayout"
    },
    {
      id: "ux-advocacy",
      name: "UX Consistency & Advocacy",
      category: "UI / UX",
      description: "Usability advocacy, interaction design validation, and constructive product UX review.",
      iconName: "IconHeartHandshake"
    },
    {
      id: "reusability",
      name: "Reusable Component Design",
      category: "UI / UX",
      description: "Designing modular, DRY component primitives to prevent codebase duplication.",
      iconName: "IconComponents"
    },
    {
      id: "tailwind",
      name: "Tailwind CSS & Design Tokens",
      category: "UI / UX",
      description: "Utility-first CSS, custom design tokens, and dark carbon glass themes.",
      iconName: "IconBrandTailwind"
    },

    // ROKU DEVELOPMENT (~3 Years Expertise)
    {
      id: "roku-tv",
      name: "Roku TV Development",
      category: "ROKU DEVELOPMENT",
      description: "Custom TV channel development, video player streaming nodes, and focus navigation.",
      iconName: "IconDeviceTv",
      highlight: true
    },
    {
      id: "brightscript",
      name: "BrightScript",
      category: "ROKU DEVELOPMENT",
      description: "Object-oriented BrightScript logic, async task threads, and data parsing.",
      iconName: "IconCode",
      highlight: true
    },
    {
      id: "roku-sdk",
      name: "Roku SDK / SceneGraph",
      category: "ROKU DEVELOPMENT",
      description: "SceneGraph XML UI components, grid screens, and TV remote D-pad input handling.",
      iconName: "IconLayoutGrid"
    },
    {
      id: "roku-api",
      name: "TV API Integration",
      category: "ROKU DEVELOPMENT",
      description: "REST API consumption, video feed parsing, and authentication workflows on Roku.",
      iconName: "IconApi"
    },

    // AI-ASSISTED ENGINEERING
    {
      id: "agentic-dev",
      name: "Agentic AI Workflows",
      category: "AI-ASSISTED ENGINEERING",
      description: "Multi-agent coding workflows via AGENTS.md, custom Codex skills, and subagent orchestration.",
      iconName: "IconCpu",
      highlight: true
    },
    {
      id: "ai-skills",
      name: "Custom AI Agent Skills",
      category: "AI-ASSISTED ENGINEERING",
      description: "Scaffolding custom agent skills (implement-module, resolve-issues) with model-tier selection.",
      iconName: "IconSparkles"
    },
    {
      id: "ai-review",
      name: "Automated Code & Reusability Review",
      category: "AI-ASSISTED ENGINEERING",
      description: "Utilizing subagents for automated reusability analysis, edge-case checking, and diff review.",
      iconName: "IconActivity"
    }
  ],
  aiWorkflows: [
    {
      id: "implement-module",
      name: "Module Implementation Workflow",
      command: "/implement-module",
      description: "Structured multi-agent pipeline for building substantial new frontend components and pages without unnecessary duplication.",
      steps: [
        {
          stepNumber: "01",
          title: "Requirements Analyzer",
          agentRole: "Subagent (Light Model)",
          description: "Parses ticket criteria, Figma nodes, and visual references to extract exact functional and UI requirements.",
          iconName: "IconFileSearch"
        },
        {
          stepNumber: "02",
          title: "Reusability Analyzer",
          agentRole: "Subagent (Light Model)",
          description: "Scans existing codebase for reusable components, hooks, and patterns to prevent code duplication.",
          iconName: "IconComponents"
        },
        {
          stepNumber: "03",
          title: "Main Implementation Agent",
          agentRole: "Parent Agent",
          description: "Executes the code changes, respecting design tokens, accessibility standards, and strict TypeScript types.",
          iconName: "IconCode"
        },
        {
          stepNumber: "04",
          title: "Code Review Agent",
          agentRole: "Subagent (Independent Reviewer)",
          description: "Conducts independent pass checking for missed requirements, regressions, type errors, or component duplication.",
          iconName: "IconChecklist"
        },
        {
          stepNumber: "05",
          title: "Final Integration",
          agentRole: "Parent Agent",
          description: "Applies reviewer fixes, executes verification checks (typecheck, lint, build), and presents completion summary.",
          iconName: "IconCircleCheck"
        }
      ]
    },
    {
      id: "resolve-issues",
      name: "Issue Resolution Workflow",
      command: "/resolve-issues",
      description: "Targeted multi-agent triage and bug-fixing pipeline designed to resolve issue lists cleanly without destabilizing existing behavior.",
      steps: [
        {
          stepNumber: "01",
          title: "Issue Locator",
          agentRole: "Subagent (Light Model)",
          description: "Pinpoints the exact source files and root causes behind reported issues to minimize blast radius.",
          iconName: "IconCrosshair"
        },
        {
          stepNumber: "02",
          title: "Reusability Check",
          agentRole: "Subagent (Light Model)",
          description: "Checks whether existing component parameters or state utilities can be reused to solve the issue.",
          iconName: "IconComponents"
        },
        {
          stepNumber: "03",
          title: "Minimal Root-Cause Fix",
          agentRole: "Parent Agent",
          description: "Applies targeted code fixes focusing on the underlying root cause without broad refactoring.",
          iconName: "IconTools"
        },
        {
          stepNumber: "04",
          title: "Independent Review",
          agentRole: "Subagent (Independent Reviewer)",
          description: "Verifies that all issue IDs were addressed and no unexpected regressions were introduced.",
          iconName: "IconShieldCheck"
        },
        {
          stepNumber: "05",
          title: "Per-Issue Verification",
          agentRole: "Parent Agent",
          description: "Runs TypeScript compilation checks and reports per-issue resolution statuses.",
          iconName: "IconCircleCheck"
        }
      ]
    }
  ],
  projects: [
    // FLAGSHIP WEB PROJECT
    {
      id: "neofulkrum",
      title: "neofulkrum",
      role: "Junior Frontend Engineer",
      ownership: "Full Frontend Development & UI Implementation",
      category: "flagship",
      description: "Flagship Enterprise Analytics Dashboard featuring real-time data visualizations, dark carbon glass UI, and complex telemetry widgets.",
      overview: "neofulkrum is my current flagship web project at Invotyx. I hold primary responsibility for full frontend development, UI/design implementation, and API integration using Next.js 16 App Router, TypeScript, and Tailwind CSS.",
      contributions: [
        "Architected the frontend component hierarchy using Next.js 16 App Router and strict TypeScript contracts.",
        "Engineered custom glassmorphism UI card components, telemetry badge indicators, and responsive grid layouts.",
        "Integrated real-time API streaming feeds and optimistic state updates for dynamic analytics widgets."
      ],
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "AI Tooling"],
      keyFeatures: [
        "Real-time data telemetry widgets",
        "Custom dark carbon & glassmorphism theme system",
        "Sub-15ms component rendering performance",
        "Responsive grid layouts across desktop and mobile"
      ],
      liveUrl: "https://neofulkrum.example.com",
      githubUrl: "https://github.com/uzair11C/neofulkrum",
      featured: true,
      thumbnailLabel: "NEOFULKRUM // ENTERPRISE ANALYTICS DASHBOARD",
      imageSlotRequirement: "Landscape 16:9 screenshot of neofulkrum dashboard UI"
    },

    // COMPANY WEB PROJECT
    {
      id: "vendoriq",
      title: "vendorIQ",
      role: "Junior Frontend Engineer",
      ownership: "Module Design, Frontend Implementation & API Integration",
      category: "company",
      description: "Enterprise Vendor Intelligence platform providing vendor scorecard tracking, compliance management, and Role-Based Access Control (RBAC).",
      overview: "vendorIQ was my first major web project at Invotyx after transitioning back into React development in May 2026. I designed several key modules, implemented frontend functionality, integrated backend APIs, and worked with RBAC (Role-Based Access Control) permissions.",
      contributions: [
        "Designed and implemented frontend UI modules for vendor scorecards and compliance tracking.",
        "Integrated REST APIs with async data handling, loading states, and error boundary fallbacks.",
        "Implemented Role-Based Access Control (RBAC) frontend UI guards and permission views."
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "REST APIs", "RBAC"],
      keyFeatures: [
        "Vendor scorecard tables and filtering",
        "Role-Based Access Control (RBAC) UI views",
        "Dynamic financial and compliance analytics charts"
      ],
      liveUrl: "https://vendoriq.example.com",
      githubUrl: "https://github.com/uzair11C/vendoriq",
      featured: true,
      thumbnailLabel: "VENDORIQ // INTELLIGENCE & SCORECARD ENGINE",
      imageSlotRequirement: "Landscape 16:9 screenshot of vendorIQ platform UI"
    },

    // ROKU APPLICATION PORTFOLIO (~3 Years Professional Experience)
    {
      id: "roku-twit-kick",
      title: "Twitch & Kick Live Streaming for Roku",
      role: "Roku Application Developer",
      ownership: "Frontend Application & API Integration",
      category: "roku",
      description: "Custom Roku TV applications for live game streaming channels Twitch and Kick, featuring live stream players, chat overlays, and channel browsing.",
      overview: "Developed full frontend Roku applications for live streaming platforms Twitch and Kick during my Roku development period at Invotyx. Built custom SceneGraph grid screens, video player nodes, and live chat feed integrations.",
      contributions: [
        "Built Roku SceneGraph XML layouts for live channel grids, video player viewports, and stream metadata.",
        "Wrote BrightScript logic for video stream initialization, quality switching, and remote control D-pad focus handling.",
        "Integrated REST APIs for channel feeds, top game categories, and stream status."
      ],
      technologies: ["BrightScript", "Roku SDK", "SceneGraph XML", "REST APIs", "Video Streaming"],
      featured: true,
      thumbnailLabel: "ROKU TV // TWITCH & KICK GAME STREAMING APPS",
      imageSlotRequirement: "Landscape 16:9 screenshot of Twitch/Kick Roku TV interface"
    },
    {
      id: "roku-tiktok-shorts",
      title: "TikTok, Shorts & Reels for Roku",
      role: "Roku Application Developer",
      ownership: "Frontend Application & API Integration",
      category: "roku",
      description: "TV-adapted short-form video streaming applications for Roku, featuring vertical video playback, infinite feed scrolling, and remote navigation.",
      overview: "Architected short-form video feed applications for Roku TV displays at Invotyx. Adapted mobile-native vertical video UX concepts for large TV screens operated by limited-input remote controls.",
      contributions: [
        "Implemented custom BrightScript feed preloading for seamless short-form video playback.",
        "Created TV-friendly focus navigation handling for single-button remote interactions.",
        "Integrated video playback APIs and content metadata feeds."
      ],
      technologies: ["BrightScript", "Roku SDK", "SceneGraph XML", "REST APIs"],
      featured: false,
      thumbnailLabel: "ROKU TV // TIKTOK & SHORTS STREAMING APPS",
      imageSlotRequirement: "Landscape 16:9 screenshot of TikTok/Shorts Roku TV interface"
    },
    {
      id: "roku-media-apps",
      title: "Google Video Search, KidsTube & Telegram for Roku",
      role: "Roku Application Developer",
      ownership: "Frontend Application & API Integration",
      category: "roku",
      description: "Suite of specialized Roku TV applications including Google Video Search integration, KidsTube video app (renamed for copyright), and Telegram TV media viewer.",
      overview: "Engineered frontend Roku applications connecting external media and messaging APIs to TV displays. Focused on kid-friendly simplified remote navigation, search input screens, and media gallery displays.",
      contributions: [
        "Built Google Video Search query interface and video player integration on Roku.",
        "Engineered KidsTube frontend video app with kid-safe simplified UI controls.",
        "Developed Telegram for Roku media channel viewer and image gallery grid."
      ],
      technologies: ["BrightScript", "Roku SDK", "SceneGraph XML", "Media APIs"],
      featured: false,
      thumbnailLabel: "ROKU TV // GOOGLE VIDEO, KIDSTUBE & TELEGRAM",
      imageSlotRequirement: "Landscape 16:9 screenshot of Roku media applications"
    },
    {
      id: "roku-soundcloud",
      title: "SoundCloud Audio Streaming for Roku (3 Variants)",
      role: "Roku Application Developer",
      ownership: "Frontend Application & API Integration",
      category: "roku",
      description: "Frontend audio player applications for Roku TV across three distinct branded instances/variants, featuring waveform playback and track playlists.",
      overview: "Developed three custom frontend Roku application variants for SoundCloud audio streaming at Invotyx. Built music playback controls, audio progress bars, track searching, and artist playlist navigation.",
      contributions: [
        "Engineered 3 distinct UI visual variants of the Roku SoundCloud audio player.",
        "Wrote BrightScript background audio playback handlers and playlist queue management.",
        "Integrated SoundCloud audio streaming APIs and cover art image caching."
      ],
      technologies: ["BrightScript", "Roku SDK", "Audio Streaming", "REST APIs"],
      featured: false,
      thumbnailLabel: "ROKU TV // SOUNDCLOUD AUDIO PLAYER (3 VARIANTS)",
      imageSlotRequirement: "Landscape 16:9 screenshot of SoundCloud Roku audio player"
    },

    // LEGACY REACT PROJECTS
    {
      id: "smart-learn-fyp",
      title: "Smart Learn — AI Career & Learning Platform (FYP)",
      role: "Frontend Developer (Final Year Project)",
      ownership: "AI Chat, Resume Analyzer & Roadmap Generator Modules",
      category: "legacy",
      description: "React final-year university project featuring an IT career AI chatbot, LLM resume role analyzer, and interactive AI roadmap generator with React D3 Tree.",
      overview: "Smart Learn was my university Final Year Project built in React. It comprised 4 distinct modules. Note: The Resume Generator module was built entirely by my teammate; I developed the AI Chat, AI Resume Analyzer, and AI Roadmap Generator modules.",
      contributions: [
        "Developed Career-focused AI Chatbot limited to IT industry scope via system prompts.",
        "Built AI Resume Analyzer module: user uploads resume -> LLM identifies top 3 suitable roles -> third-party jobs API fetches available job listings.",
        "Built AI Roadmap Generator: user inputs skill/role -> AI returns structured JSON -> rendered visually using React D3 Tree + YouTube API videos."
      ],
      technologies: ["React", "JavaScript", "React D3 Tree", "LLM APIs", "REST APIs"],
      keyFeatures: [
        "AI Resume Analyzer with role matching & job feed API",
        "Interactive AI Roadmap visualizer powered by React D3 Tree",
        "Career-focused IT chatbot with prompt boundary controls"
      ],
      githubUrl: "https://github.com/uzair11C/smart-learn",
      featured: false,
      thumbnailLabel: "LEGACY ERA // SMART LEARN AI PLATFORM (FYP)"
    },
    {
      id: "ai-code-roaster",
      title: "AI Code Roaster",
      role: "Developer",
      ownership: "Personal Experimental AI App",
      category: "legacy",
      description: "Fun experimental React AI application where users paste or upload code snippets and an LLM analyzes and 'roasts' the code with humorous feedback.",
      overview: "Built as a fun side project experimenting with LLM API integrations in React. Allows developers to submit code snippets and receive humorous, constructive code roasts.",
      technologies: ["React", "JavaScript", "LLM APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/uzair11C/ai-code-roaster",
      featured: false,
      thumbnailLabel: "LEGACY ERA // AI CODE ROASTER EXPERIMENT"
    },
    {
      id: "flight-axis",
      title: "Flight Axis Frontend Prototype",
      role: "Frontend Developer",
      ownership: "Freelance Customer-Side UI Prototype",
      category: "legacy",
      description: "Customer-facing flight booking UI prototype created for a freelance client project. Note: Flow was a customer UI prototype, not a live payment system.",
      technologies: ["React", "JavaScript", "HTML/CSS"],
      featured: false,
      thumbnailLabel: "LEGACY ERA // FLIGHT AXIS UI PROTOTYPE"
    },
    {
      id: "ventiswap-internship",
      title: "VentiSwap (Web Internship Project)",
      role: "Web / React Intern",
      ownership: "Frontend UI Sections",
      category: "legacy",
      description: "Frontend UI components developed during my 2022–2023 web internship at Invotyx. Project has since been taken down.",
      technologies: ["React", "JavaScript", "HTML/CSS"],
      featured: false,
      thumbnailLabel: "LEGACY ERA // VENTISWAP (INTERNSHIP)"
    },
    {
      id: "legacy-semester-apps",
      title: "Weather App, Chat App, Blog App & Job Portal",
      role: "Developer",
      ownership: "Academic & Semester Projects",
      category: "legacy",
      description: "Collection of foundational React semester projects including a real-time OpenWeatherMap Weather App, Chat App, Blog App with fake posts API, and Job Portal.",
      technologies: ["React", "JavaScript", "OpenWeatherMap API", "HTML/CSS"],
      featured: false,
      thumbnailLabel: "LEGACY ERA // REACT SEMESTER PROJECTS"
    }
  ],
  experiences: [
    {
      id: "stint-05",
      company: "Invotyx",
      role: "Junior Frontend Engineer",
      stintPeriod: "MAY 2026 - PRESENT",
      stintType: "STINT 05 // ACTIVE LAP",
      location: "Remote",
      description: "Transitioned from Roku development back into full-time web development using React and Next.js. Leading frontend engineering on flagship web applications vendorIQ and neofulkrum.",
      keyResponsibilities: [
        "Lead frontend development, UI/design implementation, and API integration on flagship project neofulkrum.",
        "Designed and implemented UI modules, REST API integrations, and Role-Based Access Control (RBAC) for vendorIQ.",
        "Established multi-agent AI coding workflows (AGENTS.md, implement-module, resolve-issues) with Codex subscriptions."
      ],
      telemetryMilestones: [
        "Full frontend development ownership of flagship enterprise dashboard neofulkrum.",
        "Delivered key modules and RBAC integration for vendorIQ platform.",
        "Configured project custom AI agent workflows for rapid component delivery and code review."
      ],
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "AI Tooling"],
      transitionNote: "May 2026: Official transition from Roku TV development back to React & Next.js web development."
    },
    {
      id: "stint-04",
      company: "Invotyx",
      role: "Full-time Roku Developer",
      stintPeriod: "2024 - MAY 2026",
      stintType: "STINT 04 // ROKU EXPERTISE",
      location: "Remote",
      description: "Served as a full-time Roku Developer building frontend Roku TV streaming applications using BrightScript and Roku SceneGraph SDK.",
      keyResponsibilities: [
        "Architected complete frontend Roku TV applications for Twitch, Kick, TikTok, Google Video Search, KidsTube, Telegram, and SoundCloud.",
        "Wrote object-oriented BrightScript logic for video/audio streaming players, playlist feeds, and focus navigation.",
        "Integrated REST APIs and content metadata feeds under tight smart TV memory constraints."
      ],
      telemetryMilestones: [
        "Engineered 8+ major Roku TV streaming applications across live gaming, video feeds, and audio players.",
        "Optimized TV remote D-pad focus navigation for limited-input smart TV screens."
      ],
      technologies: ["BrightScript", "Roku SDK", "SceneGraph XML", "REST APIs", "Video Streaming"]
    },
    {
      id: "stint-03",
      company: "Invotyx",
      role: "Part-time Roku Developer",
      stintPeriod: "2023 - 2024",
      stintType: "STINT 03 // ROKU DEV",
      location: "Remote",
      description: "Developed frontend Roku TV applications and BrightScript UI components while completing university studies.",
      keyResponsibilities: [
        "Developed SceneGraph XML component layouts for 1080p and 4K TV displays.",
        "Integrated backend media APIs with BrightScript data parsing and video player nodes."
      ],
      telemetryMilestones: [
        "Built initial Roku TV channel applications and video player viewports."
      ],
      technologies: ["BrightScript", "Roku SDK", "SceneGraph XML", "REST APIs"]
    },
    {
      id: "stint-02",
      company: "Invotyx",
      role: "Web / React Intern",
      stintPeriod: "2022 - 2023",
      stintType: "STINT 02 // WEB INTERNSHIP",
      location: "Remote",
      description: "Worked on frontend sections of web application VentiSwap using React, JavaScript, HTML, and CSS.",
      keyResponsibilities: [
        "Developed responsive UI components for the VentiSwap web project.",
        "Collaborated with senior developers to translate design mockups into React code."
      ],
      telemetryMilestones: [
        "Completed frontend section deliverables for VentiSwap web platform."
      ],
      technologies: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
      id: "stint-01",
      company: "Invotyx",
      role: "Junior Developer (Foundation)",
      stintPeriod: "2020 - 2022",
      stintType: "STINT 01 // FOUNDATION",
      location: "Hybrid",
      description: "Joined Invotyx prior to university with no prior professional experience. Built foundational skills in Photoshop, HTML, CSS, and React.",
      keyResponsibilities: [
        "Learned core web technologies: HTML5, CSS3, JavaScript, and React fundamentals.",
        "Practiced UI layout techniques and digital design in Photoshop."
      ],
      telemetryMilestones: [
        "Built initial foundation in web development and React before university studies."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Photoshop"]
    }
  ]
};
