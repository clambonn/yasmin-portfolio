// ─────────────────────────────────────────────────────────────────────────
// All portfolio content lives here. To add a new project, skill, or
// credential, add an object to the matching array below — no component
// edits required. `track` controls where an item appears:
//   "quantum" -> Quantum path only
//   "data"    -> Data Engineering path only
//   "shared"  -> Foundation section (both paths)
// ─────────────────────────────────────────────────────────────────────────

export type Track = "quantum" | "data" | "shared";

export const profile = {
  name: "Yasmin Kasem",
  role: "Physics Graduate — Quantum Computing & Data Engineering",
  location: "Mansoura City, Egypt",
  email: "ykasem84@gmail.com",
  phone: "+20 100 645 5027",
  linkedin: "https://linkedin.com/in/yasmin-clambon",
  github: "https://github.com/clambonn",
  objective:
    "Physics graduate (B.Sc. 2026) focused on quantum computing and machine learning, with a particular interest in applying quantum algorithms to real-world scientific and engineering problems. Seeking research and collaborative opportunities in quantum information science and quantum machine learning.",
};

export const education = [
  {
    institution: "Mansoura University",
    degree: "Preliminary Master's Program (Diploma) in Theoretical Physics",
    period: "Starting Sep 2026",
    location: "Mansoura, Egypt",
  },
  {
    institution: "Mansoura University",
    degree: "B.Sc. in Physics",
    period: "2026",
    location: "Mansoura, Egypt",
    detail:
      "Graduation project: numerical simulation of hole transport in GaN/AlN double-barrier resonant tunneling diodes — extending existing electron-transport literature to the valence band using MATLAB/Python.",
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Conversational" },
];

// ── Projects ────────────────────────────────────────────────────────────
export const projects: {
  title: string;
  period: string;
  track: Track;
  description: string;
  bullets: string[];
  github?: string;
  stack: string[];
}[] = [
 {
  title: "PMSM Motor Data Engineering",

  period: "2026 – Present",

  track: "data",

  description:
    "A project-based learning project focused on processing and exploring large-scale PMSM motor data, with memory optimization, data quality checks, and physics-informed feature engineering.",

  bullets: [
    "Working with a large-scale PMSM motor dataset as part of a Data Engineering roadmap",
    "Exploring memory-efficient data processing and data quality checks",
    "Developing physics-informed features while progressing through the project",
  ],

  github: "https://github.com/clambonn/pmsm-motor-data-engineering",

  stack: ["Python", "Pandas", "NumPy", "Data Engineering"],
},
  {
    title: "Quantum Circuit Simulator",
    period: "2026",
    track: "quantum",
    description: "A modular quantum circuit simulator built with Qiskit.",
    bullets: [
      "Supports quantum gates, measurement, statevectors, probability distributions, and circuit history",
      "Implements ideal and noisy simulation with bit-flip, phase-flip, depolarizing, and readout error models",
      "Adds validation, distribution comparison metrics, visualization, and benchmarking",
      "Tested against known quantum algorithms including GHZ states and teleportation",
    ],
    github: "https://github.com/clambonn/quantum-circuit-simulator",
    stack: ["Qiskit", "Python", "NumPy"],
  },
  {
    title: "GaN/AlN Resonant Tunneling Diode Simulation",
    period: "2026",
    track: "quantum",
    description:
      "Fourth-year graduation thesis: numerical simulation of hole transport in GaN/AlN double-barrier resonant tunneling diodes.",
    bullets: [
      "Extends existing electron-transport literature to the valence band",
      "Combines experimental growth-data analysis with theoretical transport modeling",
      "Implemented in MATLAB and Python",
    ],
    stack: ["MATLAB", "Python", "Numerical Methods"],
  },
  {
    title: "DocChat — RAG Full-Stack AI Project",
    period: "2025",
    track: "data",
    description:
      "A full retrieval-augmented generation pipeline with document ingestion and cited answers.",
    bullets: [
      "Built with FastAPI, LangChain, pgvector, LLaMA 3, React, and Docker",
      "Supports PDF/DOCX ingestion, semantic retrieval, and cited answers",
      "Fixed a concurrency bug and redesigned retrieval to degrade gracefully under load",
    ],
    github: "https://github.com/clambonn/docchat-rag",
    stack: ["FastAPI", "LangChain", "pgvector", "LLaMA 3", "React", "Docker"],
  },
  
];

// ── Experience (research, teaching, current program) ───────────────────
export const experience: {
  role: string;
  org: string;
  period: string;
  location?: string;
  track: Track;
  bullets: string[];
}[] = [
  {
    role: "Data Engineering Track — Trainee",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Jul 2026 – Jan 2027 (in progress)",
    track: "data",
    bullets: [
      "Accepted (15 Jul 2026) into a 6-month scholarship track",
      "Weekly technical, soft-skills, and English sessions",
    ],
  },
  {
    role: "Summer Research Intern — GR Tensor Group",
    org: "CTP, The British University in Egypt · Supervisor: Dr. Waleed El Hanafy",
    period: "Jul 2026",
    track: "quantum",
    bullets: [
      "Applied the GRTensor II package (Maple) to solve Einstein field equations — Schwarzschild, Reissner–Nordström, Kerr, and FLRW metrics",
    ],
  },
  {
    role: "Research Intern",
    org: "Nuclear Physics, Radiation and High Energy Group — Mansoura University",
    period: "2023 – 2024",
    track: "quantum",
    bullets: [
      "Optimized CR-39 nuclear track detector pit geometry, improving detection sensitivity by ~20%",
      "Tested DMSO as an alternative etching solvent, cutting processing time by ~30%",
      "Analyzed 3+ datasets in OriginLab / X'Pert HighScore Plus, producing 10+ calibration curves",
    ],
  },
  {
    role: "High School Physics Lecturer",
    org: "Resala STEM Training Centre (RSTC)",
    period: "Apr 2026",
    track: "shared",
    bullets: [
      "Delivered two outreach lectures: Quantum Mechanics & Particle Physics (25 Apr) and an introductory session on Quantum Computing (29 Apr)",
    ],
  },
];

// ── Skills ──────────────────────────────────────────────────────────────
export const skillGroups: { title: string; track: Track; items: string[] }[] = [
  {
    title: "Quantum Computing",
    track: "quantum",
    items: [
      "Qiskit",
      "Quantum circuits",
      "Quantum gates",
      "Quantum algorithms",
      "Hybrid quantum-classical workflows",
      "Quantum information theory",
    ],
  },
  {
    title: "Data & Web",
    track: "data",
    items: ["FastAPI", "PostgreSQL", "Docker", "Git / GitHub", "OriginLab", "X'Pert HighScore Plus"],
  },
  {
    title: "AI / Machine Learning",
    track: "data",
    items: [
      "LangChain",
      "HuggingFace Transformers",
      "RAG pipelines",
      "Prompt engineering",
      "Deep learning",
      "Neural networks",
      "Vector embeddings",
    ],
  },
  {
    title: "Scientific Computing",
    track: "shared",
    items: ["Python", "MATLAB", "Mathematica", "NumPy", "SciPy", "Pandas", "Matplotlib", "Fortran", "Numerical methods"],
  },
];

// ── Credentials: training, schools, workshops ───────────────────────────
export const credentials: { title: string; org: string; period: string; track: Track }[] = [
  { title: "Quantum Information Science", org: "IBM Quantum Learning", period: "2026 (in progress)", track: "quantum" },
  { title: "Optical Technologies Training Program", org: "Nanophotonics Lab, AUC", period: "2026 (in progress)", track: "quantum" },
  { title: "QBronze Quantum Programming Workshop", org: "QWorld", period: "Nov 2025", track: "quantum" },
  { title: "Quantum Computing Workshop", org: "Electronics Research Institute", period: "May 2025", track: "quantum" },
  { title: "Quantum Connect Webinar: Sensing the Quantum World", org: "APS Virtual", period: "Nov 2025", track: "quantum" },
  { title: "Building RAG Agents with LLMs", org: "NVIDIA DLI (ITI Scholarship)", period: "2026", track: "data" },
  { title: "AI & LLM Specialized Courses (4)", org: "NVIDIA DLI (ITI Scholarship)", period: "2024 – 2025", track: "data" },
  { title: "Data Science Scholarship", org: "DataCamp (GDSC E-JUST)", period: "2025 – 2026", track: "data" },
  { title: "6th CTP Summer School & Internship Programme", org: "BUE", period: "Jul 2026", track: "shared" },
  { title: "ArPS Summer School in High Energy Physics", org: "Zewail City", period: "Sep 2025", track: "shared" },
  { title: "10th Plasma School", org: "BUE & Port Said University", period: "Apr 2025", track: "shared" },
  { title: "5th Plasma Basics Course", org: "BUE & Port Said University", period: "Aug 2024", track: "shared" },
  { title: "Scientific Research Basics Training (SRT)", org: "URI, Mansoura University", period: "Jul – Aug 2024", track: "shared" },
  { title: "CMS Experiment Virtual Visit at CERN", org: "Mansoura University", period: "Mar 2023", track: "shared" },
  { title: "Fundamental Quantities in Classical Mechanics", org: "EGYPLASMA, Port Said University", period: "Dec 2025", track: "shared" },
  { title: "National Institute for Standards", org: "Cairo, Egypt", period: "Aug 2025", track: "shared" },
  { title: "Egyptian Company for Carbon Materials (ECCM)", org: "Cairo, Egypt", period: "Aug 2025", track: "shared" },
  { title: "Atomic Energy Authority", org: "Cairo, Egypt", period: "Aug 2024", track: "shared" },
  { title: "Nuclear Material Authority", org: "Cairo, Egypt", period: "Jul 2024", track: "shared" },
  { title: "National Research Center", org: "Cairo, Egypt", period: "Jul 2024", track: "shared" },
];
