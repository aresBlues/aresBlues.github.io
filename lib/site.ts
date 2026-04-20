/**
 * Portfolio copy — edit this file to personalize the site.
 */

export const site = {
  meta: {
    title: "Akshay Ganesh — Data Scientist & Analyst",
    description:
      "Portfolio of Akshay Ganesh — data science, analytics, and problem-solving with data.",
  },

  /** Nav + browser context */
  brand: "AKSHAY GANESH",

  hero: {
    badge: "DATA SCIENCE · ANALYTICS",
    line1: "TURNING DATA",
    lineAccent: "INTO INSIGHTS",
    line2: "",
    tagline:
      "Problem-solver at heart. I work as a data scientist and analyst—making messy data understandable and useful.",
    ctaLabel: "VIEW PROJECTS",
    ctaHref: "#work" as const,
  },

  email: "akshayganesh3003@gmail.com",

  social: {
    github: "https://github.com/aresBlues",
    linkedin: "https://www.linkedin.com/in/akshayganesh/",
    instagram: "https://instagram.com/aresblues/",
  },

  projectsSubtitle: "Selected work & experiments",

  projects: [
    {
      title: "PREDICTIVE_MODEL",
      description:
        "End-to-end pipeline: feature engineering, model selection, and validation—reliable forecasts and interpretable metrics.",
      tags: ["PYTHON", "SCIKIT", "SQL"],
      color: "cyan" as const,
      href: "https://github.com/aresBlues",
    },
    {
      title: "ANALYTICS_DASHBOARD",
      description:
        "Interactive reporting from raw extracts to KPIs—visualizations and queries stakeholders actually use.",
      tags: ["SQL", "TABLEAU", "PYTHON"],
      color: "fuchsia" as const,
      href: "https://github.com/aresBlues",
    },
    {
      title: "NLP_EXPERIMENT",
      description:
        "Text classification and embeddings on messy real-world inputs—experimentation and solid evaluation.",
      tags: ["PYTHON", "PYTORCH", "NLP"],
      color: "purple" as const,
      href: "https://github.com/aresBlues",
    },
    {
      title: "OPEN_ANALYSIS",
      description:
        "Reproducible notebooks on public datasets—the why, not only the what.",
      tags: ["JUPYTER", "PANDAS", "STATS"],
      color: "yellow" as const,
      href: "https://github.com/aresBlues",
    },
  ],

  about: {
    lead:
      "I care about clear questions, sound methods, and honest results. Rigor matters when it meets business impact—whether in models, dashboards, or experiments.",
    stackTrace: [
      "Python · R · SQL",
      "Pandas · scikit-learn · PyTorch",
      "Git · Jupyter · Cloud notebooks",
    ],
    protocols: [
      "Clarity over complexity",
      "Reproducible workflows",
      "Always learning",
    ],
  },

  contact: {
    headingBefore: "LET'S",
    headingHighlight: "CONNECT",
    subtext:
      "Open to data science and analytics collaborations. Email me or find me below.",
    emailButton: "EMAIL ME",
    repoButton: { label: "VIEW ON GITHUB", href: "https://github.com/aresBlues/aresBlues.github.io" },
  },

  footerLine: "© Akshay Ganesh",
};
