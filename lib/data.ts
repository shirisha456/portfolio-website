export const site = {
  name: "Shirisha Gujja",
  role: "Software Engineer",
  location: "San Jose, CA",
  email: "shirishagujja456@gmail.com",
  github: "https://github.com/shirisha456",
  linkedin: "https://linkedin.com/in/shirisha-gujja-85a487215",
  resumeHref: "/resume/Shirisha_Gujja_Resume.pdf",
  url:  "https://www.shirishagujja.com",
};

export const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export type Experience = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "S&P Global",
    title: "Software Development Engineer",
    period: "Sep 2024 – Dec 2025",
    location: "Hyderabad, India",
    summary:
      "Built the tool-calling layer connecting enterprise LLM features to internal GraphQL services, and the React surfaces that put the results in front of users — a 25% improvement in end-to-end AI feature response performance.",
    points: [
      "Designed and optimized MCP-based tool integrations that let LLMs retrieve structured data from internal GraphQL services and drive context-aware application workflows, improving tool execution latency by 25% and the reliability of model-to-backend interactions.",
      "Naive tool calls pulled full GraphQL responses regardless of what the model needed next. Built selective retrieval mechanisms with targeted field selection and optimized query execution, cutting unnecessary data transfer by 35% and API response times by 20%.",
      "Developed reusable React components and AI-powered UI widgets to surface model-generated insights and backend data, reducing duplicate frontend development effort across multiple enterprise workflows.",
      "Trained and configured GitHub Copilot on historical support data, automating repetitive support tasks and cutting manual workflow effort by 40%.",
    ],
    tech: ["React", "GraphQL", "MCP", "LLM tool calling", "REST APIs", "Git"],
  },
  {
    company: "S&P Global",
    title: "Software Development Engineer Intern",
    period: "Jan 2024 – Jul 2024",
    location: "Hyderabad, India",
    summary:
      "Took a daily data refresh job from 9 hours to 1 hour 27 minutes — an 84% reduction — by re-architecting it off MS SQL Server stored procedures and onto Redshift-backed Python ETL.",
    points: [
      "A critical daily refresh job, implemented as MS SQL Server stored procedures, was taking 9 hours to run end to end. Led a proof-of-concept to re-architect it on Amazon Redshift with PostgreSQL-based stored procedures, improving scalability and query performance.",
      "Engineered modular Python ETL workflows to orchestrate the new Redshift pipelines, with automated data validation, structured logging, error handling, and retry mechanisms, with AWS Lambda supporting workflow automation.",
      "Reduced end-to-end execution time from 9 hours to 1 hour 27 minutes — an 84% reduction — and presented the optimized architecture for adoption as the standard production refresh process.",
    ],
    tech: ["Python", "Amazon Redshift", "PostgreSQL", "MS SQL Server", "AWS Lambda", "ETL"],
  },
];

export const education = [
  {
    school: "San José State University",
    degree: "Master of Science, Software Engineering",
    period: "Jan 2026 – Present",
    location: "San Jose, CA",
  },
  {
    school: "Vasavi College of Engineering",
    degree: "Bachelor of Engineering, Computer Science",
    period: "Dec 2020 – May 2024",
    location: "Hyderabad, India",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Django", "Node.js", "Express.js", "GraphQL", "REST APIs", "Celery", "SQLAlchemy"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Data & Messaging",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka / Redpanda", "Amazon Redshift"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (EC2, S3, IAM, SES, Lambda)", "Docker", "nginx", "Terraform", "GitHub Actions"],
  },
  {
    category: "AI / LLM",
    items: ["OpenAI API", "MCP", "GitHub Copilot", "Claude", "Scikit-learn"],
  },
] as const;

export type ArchitectureNode = {
  id: string;
  label: string;
  sublabel?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  variant?: "primary" | "store" | "external" | "group";
};

export type ArchitectureEdge = {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
};

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  approach: string[];
  decisions: { title: string; detail: string }[];
  production: string[];
  stack: string[];
  github: string;
  live?: string;
  status: string;
  diagram: {
    nodes: ArchitectureNode[];
    edges: ArchitectureEdge[];
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fitness-tracker",
    name: "Fitness Tracker",
    tagline: "AI-powered fitness platform, built and deployed phase by phase",
    problem:
      "Fitness tracking is usually split across single-purpose apps — a calorie counter, a workout log, a spreadsheet for weight over time — none of which share data. That means any \"AI coaching\" those apps offer is generic, because it isn't reasoning over a person's actual logged history across all three.",
    approach: [
      "Six backend domains — auth, workouts, nutrition, progress, profile, and AI coaching — each with its own database models, validation schemas, service layer, and REST endpoints.",
      "A single data model spanning workouts, nutrition, and body measurements, so the AI coach can reason over a user's complete logged history rather than one slice of it.",
      "An AI coach built on the OpenAI API that generates personalized workout and meal plans and answers fitness questions, with structured response validation and graceful degradation when the API is unavailable.",
      "Session handling with JWT access tokens, refresh token rotation, and httpOnly cookies held by a Next.js backend-for-frontend layer, keeping tokens out of browser JavaScript.",
      "A containerized deployment on AWS EC2 behind nginx with Let's Encrypt HTTPS, plus Celery and Redis running background jobs off the request path.",
    ],
    decisions: [
      {
        title: "BFF pattern over client-held tokens",
        detail:
          "Next.js Route Handlers proxy every backend call and hold the JWT in an httpOnly cookie. It costs an extra request hop, but it closes off the class of XSS-reads-localStorage token theft that a client-held access token is exposed to.",
      },
      {
        title: "Session security beyond a bare JWT",
        detail:
          "Refresh token rotation, password hashing, session revocation, and automatic silent token refresh — so a session survives normal use without ever asking a user to babysit expiring tokens.",
      },
      {
        title: "The AI coach is designed to fail without taking the app down",
        detail:
          "OpenAI calls return a typed 503 on a missing key or exhausted quota and a 502 on other upstream errors, with structured response validation — a third-party outage degrades one feature, not the whole product.",
      },
      {
        title: "Real infrastructure caught what unit tests didn't",
        detail:
          "Running the actual Docker Compose stack surfaced an nginx route-shadowing bug, a Compose port override that silently no-op'd, and a migration that raced its own auto-migrate-on-restart — none of which a unit test suite alone would have caught.",
      },
    ],
    production: [
      "16 phases, each independently validated end to end before the next began: 6 backend domains, then the matching frontend surface for each, then Docker/nginx, then CI, then production deploy config.",
      "GitHub Actions CI runs lint, test, and build for both the FastAPI backend and the Next.js frontend on every change.",
      "Live on AWS EC2 behind nginx path-based routing, with HTTPS issued via certbot's Let's Encrypt webroot method.",
      "Background work — AI generation jobs and scheduled tasks — runs on Celery workers with Redis as the broker, kept off the request path.",
    ],
    stack: [
      "FastAPI",
      "SQLAlchemy 2.0 (async)",
      "Alembic",
      "Celery",
      "Redis",
      "PostgreSQL 16",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Docker Compose",
      "nginx",
      "AWS EC2",
      "GitHub Actions",
      "OpenAI API",
    ],
    github: "https://github.com/shirisha456/Fitness_Tracker",
    live: "https://fitness-tracker.18-221-88-168.sslip.io",
    status: "Live · 16/16 phases complete",
    diagram: {
      nodes: [
        { id: "browser", label: "Browser", x: 20, y: 150, w: 120, h: 48, variant: "external" },
        { id: "nginx", label: "nginx", sublabel: ":80 / :443", x: 200, y: 150, w: 130, h: 48, variant: "group" },
        { id: "frontend", label: "Next.js BFF", sublabel: "Route Handlers · httpOnly cookies", x: 400, y: 60, w: 190, h: 60, variant: "primary" },
        { id: "backend", label: "FastAPI backend", sublabel: "REST API", x: 400, y: 220, w: 190, h: 60, variant: "primary" },
        { id: "postgres", label: "PostgreSQL", sublabel: "asyncpg", x: 660, y: 150, w: 150, h: 50, variant: "store" },
        { id: "redis", label: "Redis", sublabel: "Celery broker", x: 660, y: 230, w: 150, h: 50, variant: "store" },
        { id: "worker", label: "Celery worker + beat", x: 400, y: 320, w: 190, h: 50, variant: "group" },
        { id: "openai", label: "OpenAI", sublabel: "AI coach only", x: 660, y: 320, w: 150, h: 50, variant: "external" },
      ],
      edges: [
        { from: "browser", to: "nginx" },
        { from: "nginx", to: "frontend", label: "/* " },
        { from: "nginx", to: "backend", label: "/api/v1/*" },
        { from: "frontend", to: "backend", label: "internal, never via nginx", dashed: true },
        { from: "backend", to: "postgres" },
        { from: "backend", to: "redis" },
        { from: "worker", to: "redis" },
        { from: "backend", to: "openai", dashed: true },
      ],
    },
  },
  {
    slug: "personal-finance-platform",
    name: "Personal Finance Platform",
    tagline: "Event-driven personal finance platform with a transactional outbox",
    problem:
      "Personal finance data is scattered across banks, brokerages, and manual tracking. Getting one accurate picture — spending by category, budget adherence, net worth, investment performance — usually means a spreadsheet, or handing a third party read access to every account.",
    approach: [
      "Accounts, transactions, budgets, savings goals, investments, net worth, and cash-flow forecasting, all scoped to the authenticated user.",
      "Plaid integration for bank account linking and transaction sync, with access tokens encrypted at rest and per-user authorization enforced across financial data.",
      "A transactional outbox that writes each event in the same database transaction as the record that triggered it, so no event is lost if the message broker is unavailable.",
      "Three independently deployable consumer services on Kafka that categorize transactions, detect unusual spending, and push real-time alerts to the browser over WebSockets.",
      "AI-generated monthly spending insights grounded on pre-computed aggregates, with a deterministic template fallback when the model call fails.",
      "Distributed tracing, metrics, and structured logs across every service, correlated end to end through OpenTelemetry, Prometheus, Grafana, Loki, and Tempo.",
    ],
    decisions: [
      {
        title: "Transactional outbox, publish-then-mark by construction",
        detail:
          "A background publisher polls unpublished outbox rows and marks a row published only after Kafka confirms delivery — so a crash between the two never produces a false 'delivered' record. Async end-to-end with aiokafka rather than the sync confluent-kafka SDK, so the whole app stays non-blocking.",
      },
      {
        title: "Idempotency enforced in the database, not just in application logic",
        detail:
          "Alert creation is backed by a real UNIQUE(source_event_id, alert_type) constraint, verified with a test that simulates message redelivery and asserts no duplicate alert is created — closing a correctness gap that's easy to claim and easy to get wrong.",
      },
      {
        title: "Rotating refresh tokens with theft detection",
        detail:
          "A refresh token that's presented twice — already used, or already revoked — kills its entire token family, not just the one token, so a stolen-and-replayed token can't quietly ride alongside a legitimate session.",
      },
      {
        title: "Grounded AI insights with a real fallback",
        detail:
          "The LLM only ever sees pre-computed spend aggregates, never raw transaction rows, and a deterministic template summary — computed from the same aggregates — keeps the feature available when the API call fails or isn't configured, rather than showing an error or a mocked number.",
      },
      {
        title: "Chaos-tested against the real stack, not reasoned about in the abstract",
        detail:
          "Killing the enrichment service mid-pipeline loses no data, because Kafka consumer-group offsets resume exactly where it left off. Stopping the Kafka broker entirely doesn't touch the request path at all, since the outbox never makes a synchronous call to it.",
      },
    ],
    production: [
      "Rebuilt from an earlier version across 16 reviewed phases, each with its own design doc and, for cross-cutting decisions, an ADR under docs/adr/.",
      "Observability stack wired end to end: OpenTelemetry traces into Tempo, Prometheus metrics, structured JSON logs into Loki, with a working Grafana trace-to-logs correlation via a hand-carried trace_id.",
      "Infrastructure as code for two environments (a Terraform + Helm/EKS design, and a single-EC2 path sized from real docker stats measurements) — written and validated in CI, deliberately never applied against real AWS, and documented as exactly that: a scope boundary, not an oversight.",
      "CI runs backend, frontend, and three independent consumer services as separate jobs, plus a chaos-smoke-test job on main that actually kills and restarts containers against a full Compose stack.",
    ],
    stack: [
      "FastAPI",
      "SQLAlchemy 2.0 (async)",
      "PostgreSQL",
      "Redis",
      "Kafka / Redpanda",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "OpenTelemetry",
      "Grafana / Loki / Tempo",
      "Docker",
      "Terraform",
      "Plaid API",
      "OpenAI API",
    ],
    github: "https://github.com/shirisha456/Personal-Finance-Platform",
    status: "16/16 phases complete · infra validated, not deployed",
    diagram: {
      nodes: [
        { id: "browser", label: "Browser", sublabel: "Next.js dashboard", x: 20, y: 170, w: 130, h: 50, variant: "external" },
        { id: "api", label: "core-api", sublabel: "FastAPI · REST + WS", x: 220, y: 100, w: 160, h: 55, variant: "primary" },
        { id: "outbox", label: "Outbox publisher", sublabel: "polls every 3s", x: 220, y: 200, w: 160, h: 50, variant: "group" },
        { id: "postgres", label: "PostgreSQL", sublabel: "source of truth", x: 460, y: 60, w: 150, h: 50, variant: "store" },
        { id: "redis", label: "Redis", sublabel: "cache · idempotency", x: 460, y: 150, w: 150, h: 50, variant: "store" },
        { id: "kafka", label: "Redpanda", sublabel: "Kafka API", x: 460, y: 240, w: 150, h: 50, variant: "group" },
        { id: "enrichment", label: "enrichment-service", x: 700, y: 20, w: 170, h: 46, variant: "primary" },
        { id: "anomaly", label: "anomaly-service", x: 700, y: 90, w: 170, h: 46, variant: "primary" },
        { id: "notification", label: "notification-service", x: 700, y: 160, w: 170, h: 46, variant: "primary" },
        { id: "marketdata", label: "market-data-service", sublabel: "scheduled poller", x: 700, y: 230, w: 170, h: 46, variant: "primary" },
        { id: "external", label: "Plaid · OpenAI · market data", x: 220, y: 300, w: 260, h: 46, variant: "external" },
      ],
      edges: [
        { from: "browser", to: "api", label: "HTTPS + WS" },
        { from: "api", to: "postgres" },
        { from: "api", to: "redis" },
        { from: "api", to: "outbox", label: "same transaction" },
        { from: "outbox", to: "kafka" },
        { from: "kafka", to: "enrichment" },
        { from: "kafka", to: "anomaly" },
        { from: "kafka", to: "notification" },
        { from: "notification", to: "redis", label: "pub/sub", dashed: true },
        { from: "marketdata", to: "postgres", dashed: true },
        { from: "api", to: "external", dashed: true },
      ],
    },
  },
];

export const otherWork = [
  {
    name: "secure-4gb-transfer",
    tagline: "Two architecturally distinct secure file-transfer protocols, from scratch",
    description:
      "A security-engineering assessment comparing two ways to move a 4GB file over an untrusted network: mutual TLS with a full CA/server/client certificate chain, versus an application-layer AES-256-GCM envelope with an HMAC-authenticated manifest over plain TCP. Both stream in chunks with running SHA-256 verification and fail closed — a corrupted or tampered transfer is rejected and the partial file is never written as valid.",
    tech: ["Python", "TLS / mTLS", "AES-256-GCM", "HMAC", "Sockets"],
    github: "https://github.com/shirisha456/secure-4gb-transfer",
  },
];
