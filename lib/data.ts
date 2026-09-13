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
  { href: "#work", label: "Projects" },
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
      "Led a proof-of-concept to re-architect a critical daily refresh job, originally implemented as MS SQL Server stored procedures, onto Amazon Redshift with PostgreSQL-based stored procedures, improving scalability and query performance.",
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
    slug: "mcp-shared-memory-server",
    name: "MCP Shared Memory Server",
    tagline: "Shared memory service for AI coding tools, with conflict-safe writes and hybrid search",
    problem:
      "Developers switch between multiple AI coding tools — Claude Desktop for one task, Cursor for another — and each one starts from zero, because nothing carries context between them. A decision explained to one tool is invisible to the next, and re-explaining it every session defeats the point of an assistant having memory at all.",
    approach: [
      "A PostgreSQL-backed memory service exposed over MCP, so Claude Desktop, Cursor, and any other MCP client read and write one shared, versioned project memory instead of each maintaining its own.",
      "Optimistic concurrency on every write: a compare-and-set update means two clients editing the same memory at once produce one winner and one explicit conflict response with the winning revision attached, never a silent overwrite.",
      "Immutable revision history with structural supersession — retiring a memory excludes it from every retrieval path in the same transaction that creates its replacement, so an outdated decision can't resurface as a search result while remaining fully readable in the audit trail.",
      "Hybrid retrieval combining PostgreSQL full-text search and pgvector similarity search, merged with Reciprocal Rank Fusion and served through a token-budgeted context tool so results fit a caller's context window.",
      "Idempotent writes and content-hash deduplication kept as two distinct mechanisms: one client retrying the same request replays the original response, while two clients independently asserting the same fact are merged as corroborating evidence rather than duplicated.",
      "369 tests against a real PostgreSQL instance, including 50 concurrent writers proving the conflict resolution for real and a hand-graded retrieval-quality benchmark gated against a committed baseline.",
    ],
    decisions: [
      {
        title: "PostgreSQL as the only source of truth, including as a job queue",
        detail:
          "Embedding generation is enqueued via FOR UPDATE SKIP LOCKED in the same transaction as the write it's for, so no separate broker like Redis or Kafka is needed — the durability guarantees a job queue needs were already sitting in the database.",
      },
      {
        title: "Optimistic concurrency over pessimistic locking",
        detail:
          "A conflicting writer gets an immediate, informative refusal with the winning revision attached, instead of blocking behind a lock or hitting a generic serialization failure.",
      },
      {
        title: "Structural exclusion over ranking-based suppression",
        detail:
          "A retired memory is removed from the candidate set before any ranking runs, so no scoring function — today's or a future one — can accidentally resurrect it.",
      },
      {
        title: "Reciprocal Rank Fusion over score blending",
        detail:
          "Full-text and vector search scores live on incompatible, unbounded scales; combining rank positions sidesteps needing a shared scale at all.",
      },
      {
        title: "A similarity threshold chosen by measurement, not intuition",
        detail:
          "Without gating semantic search past a cosine-distance cutoff, hybrid retrieval looked better on paper (higher nDCG) while precision collapsed, because every unanswerable query started returning confident-looking irrelevant results.",
      },
    ],
    production: [
      "369 tests across seven categories — unit, integration against real PostgreSQL, concurrency, failure injection, performance, MCP protocol, and retrieval-quality evaluation — with no mocked database anywhere in the suite.",
      "Mutation testing on the two mechanisms correctness depends on most: the retrieval filter and the failure-classifier's branch order. Each was deliberately broken to confirm the relevant tests actually fail, then restored.",
      "Retrieval quality measured against a hand-graded set of 200 memories and 34 queries, with results gated against a committed baseline so a regression fails the build instead of going unnoticed.",
      "Known gaps stated directly rather than glossed over: no authentication layer (fine for local single-user use, a real gap for a shared multi-tenant server), no metrics exporter, and manual retention that has to be invoked rather than scheduled.",
    ],
    stack: [
      "Python 3.12",
      "MCP SDK",
      "PostgreSQL 16",
      "pgvector (HNSW)",
      "SQLAlchemy 2.0 (async)",
      "asyncpg",
      "Alembic",
      "fastembed",
      "Docker Compose",
      "pytest",
    ],
    github: "https://github.com/shirisha456/mcp_shared_memory_server",
    status: "369 tests, all passing",
    diagram: {
      nodes: [
        { id: "clients", label: "MCP Clients", sublabel: "Claude Desktop · Cursor", x: 20, y: 140, w: 180, h: 55, variant: "external" },
        { id: "server", label: "memhub-server", sublabel: "7 MCP tools", x: 260, y: 140, w: 180, h: 55, variant: "primary" },
        { id: "service", label: "Service layer", sublabel: "CAS · idempotency · dedup", x: 500, y: 60, w: 210, h: 55, variant: "group" },
        { id: "postgres", label: "PostgreSQL 16", sublabel: "memories · revisions · outbox", x: 500, y: 220, w: 210, h: 55, variant: "store" },
        { id: "hybrid", label: "Full-text + pgvector", sublabel: "Reciprocal Rank Fusion", x: 770, y: 60, w: 200, h: 55, variant: "group" },
        { id: "filter", label: "Stage-0 filter", sublabel: "excludes superseded/deleted", x: 770, y: 220, w: 200, h: 55, variant: "group" },
      ],
      edges: [
        { from: "clients", to: "server", label: "stdio / JSON-RPC" },
        { from: "server", to: "service" },
        { from: "service", to: "postgres", label: "same transaction" },
        { from: "service", to: "hybrid" },
        { from: "postgres", to: "hybrid" },
        { from: "hybrid", to: "filter" },
        { from: "filter", to: "service", label: "token-budgeted context", dashed: true },
      ],
    },
  },
  {
    slug: "personal-finance-platform",
    name: "Personal Finance Platform",
    tagline: "Full-stack finance platform for budgets, investments, and real-time spending alerts",
    problem:
      "Personal finance data is scattered across banks, brokerages, and manual tracking. Getting one accurate picture — spending by category, budget adherence, net worth, investment performance — usually means a spreadsheet, or handing a third party read access to every account.",
    approach: [
      "A modular backend architecture covering accounts, transactions, budgets, savings goals, investments, net worth, and cash-flow forecasting, all scoped to the authenticated user.",
      "Plaid integration for bank account linking and transaction sync, with encrypted access tokens, cursor-based pagination, and database-level deduplication so a re-synced account never creates duplicate transactions.",
      "A transactional outbox that writes each event in the same database transaction as the record that triggered it, so no event is lost if the message broker is unavailable.",
      "Three independently deployable consumer services on Kafka that categorize transactions, detect unusual spending with idempotent alert creation, and push real-time alerts to the browser over WebSockets.",
      "AI-generated monthly spending insights grounded on pre-computed aggregates, with a deterministic template fallback when the model call fails.",
      "Distributed tracing, metrics, and structured logs correlated end to end through OpenTelemetry, Prometheus, Grafana, and Tempo, with failure testing that validates recovery from crashes, outages, and broker failures.",
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
      "Built across 16 reviewed phases, each with its own design doc and, for cross-cutting decisions, an ADR under docs/adr/.",
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

export type OtherProject = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

export const otherWork: OtherProject[] = [
  {
    name: "Fitness Tracker",
    tagline: "Full-stack fitness platform for workouts, nutrition, and progress, with an AI coach",
    description:
      "A modular, domain-driven FastAPI backend — auth, workouts, nutrition, progress, profile, and AI coaching — behind a Next.js frontend acting as its own backend-for-frontend, with JWT authentication, refresh-token rotation with reuse detection, and httpOnly cookies. An OpenAI-backed AI coach generates personalized workout and meal plans with graceful degradation when the API is unavailable. Deployed on AWS EC2 behind nginx with Let's Encrypt HTTPS.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "Celery", "Redis", "Docker", "AWS EC2"],
    github: "https://github.com/shirisha456/Fitness_Tracker",
    live: "https://fitness-tracker.18-221-88-168.sslip.io",
  },
  {
    name: "Secure File Transfer",
    tagline: "Two secure transfer protocols, built and compared from scratch",
    description:
      "Moves a 4GB file across an untrusted network two different ways: mutual TLS with a full CA, server, and client certificate chain, and an application-layer AES-256-GCM envelope with an HMAC-authenticated manifest over plain TCP. Both stream in chunks with running SHA-256 verification and fail closed — a corrupted or tampered transfer is rejected, and the partial file is never written as valid.",
    tech: ["Python", "TLS / mTLS", "AES-256-GCM", "HMAC", "Sockets"],
    github: "https://github.com/shirisha456/secure-4gb-transfer",
  },
];
