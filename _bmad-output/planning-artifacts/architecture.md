---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
workflowType: 'architecture'
lastStep: 8
status: 'complete'
completedAt: '2026-04-09T12:20:00Z'
inputDocuments:
  - 'design-process/A-Product-Brief/project-brief.md'
  - '_bmad-output/planning-artifacts/prd.md'
  - 'design-process/D-Visual-Prototyping/prototypes/01.1-home-hero-final.md'
  - 'design-process/D-Visual-Prototyping/prototypes/02.1-autonomy-lab-final.md'
  - 'design-process/D-Visual-Prototyping/prototypes/03.1-decision-log-final.md'
  - 'design-process/D-Visual-Prototyping/prototypes/04.1-resilience-story-final.md'
  - 'design-process/D-Visual-Prototyping/prototypes/05.1-service-catalog-final.md'
  - 'design-process/D-Visual-Prototyping/prototypes/06.1-case-study-treasurer-final.md'
  - 'design-process/D-Visual-Prototyping/prototypes/07.1-custom-erp-builder-final.md'
  - 'design-process/D-Visual-Prototyping/prototypes/08.1-hyper-learner-dna-final.md'
  - 'design-process/D-Visual-Prototyping/prototypes/09.1-ai-briefing-architect-final.md'
  - 'design-process/D-Design-System/design-tokens.md'
project_name: 'carlossimpore.com'
user_name: 'Carlos-simpore'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## 1. Discovery & Initialization

I have successfully initialized the architecture workspace for **carlossimpore.com**. The following strategic documents have been loaded as the foundation for our technical blueprint:

- **Product Brief**: Loaded (Strategic vision for the Hybrid-Engine).
- **PRD**: Synthesized (Functional and technical requirements for Titan Resilience).
- **UX Design**: 9 Prototype pages loaded (Conceptual blueprints).
- **Project Context**: Relevant rules for AI agent consistency detected.

## 2. Project Context Analysis

### Requirements Overview

**Functional Requirements:**
- **Dynamic Portfolio Core**: 9 strategic domain pages (Home, Lab, Log, etc.) built as modular components.
- **Interactive ROI Engines**: Real-time tools (ERP Builder, AI Briefing) that capture user input and provide strategic feedback.
- **Transparency Layer**: A dedicated Decision Log that demonstrates the "Audit-ready" nature of the engine.

**Non-Functional Requirements:**
- **Titan Resilience**: Requirement for Local-first & Event-sourced architecture to ensure reliability in degraded network conditions.
- **AI Latency**: Use of streaming and Server Actions to minimize perceived latency during AI briefings.
- **Visual Excellence**: Strict adherence to the "Cyber-Architect" design system (Glassmorphism, Neon/Obsidian).

**Scale & Complexity:**
- Primary domain: Next.js 14+ App Router Full-stack
- Complexity level: Medium-High (Strategic Portfolio with Advanced AI & Data layers)
- Estimated architectural components: ~12-15 core modules

### Technical Constraints & Dependencies
- Next.js 14+ (App Router)
- AI Agent Bridge (Streaming/Server Actions)
- Modular multi-domain folder organization

### Cross-Cutting Concerns Identified
- Offline/Online synchronization state
- Event-log persistence and integrity
- Global Design System token application

## 3. Starter Template Evaluation

### Primary Technology Domain
**Full-stack Web Application** (Next.js 14+ App Router).

### Selected Foundation: Next.js 14 (Official) + Resilience Layer

**Rationale for Selection:**
To achieve **Titan Resilience**, we need to treat the browser as the primary source of truth. The official Next.js starter allows us to bake in **PGLite** (Postgres in WASM) and **ElectricSQL** for seamless background sync, while using **Server Actions** for the AI Engine Bridge.

**Initialization Command:**
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

**Architectural Decisions Provided by this Foundation:**
- **Language & Runtime**: TypeScript (Latest) for type-safe event schemas.
- **Styling Solution**: Tailwind CSS (Configured for Cyber-Architect tokens).
- **Resilience Layer**: Manual integration of `PGLite` within a Service Worker for true offline capability.
- **AI Integration**: Native use of `ai` SDK + Server Actions for streaming the AI Briefing Architect.
- **Code Organization**: Custom **Multi-domain** structure (`modules/lab`, `modules/briefing`, `modules/log`).

## 4. Core Architectural Decisions

### Data Architecture (Titan Resilience)
- **Local Database**: PGLite v0.4 (WASM) with IndexedDB persistence.
- **ORM**: Drizzle ORM for unified local/remote schema management.
- **State Logic**: Event-Sourcing pattern via an immutable `event_log` table.
- **Sync Protocol**: Batch background synchronization via Next.js Server Actions.

### AI Engine Bridge
- **Foundation**: Vercel AI SDK Core.
- **Interaction**: Streaming Server Actions for the "AI Briefing Architect" page (Page 09.1).
- **Context Handling**: Dynamic injection of "Hybrid-Engine" domain knowledge into AI prompts.

### SEO & Performance Architecture
- **Metadata Management**: Native Next.js 14 Metadata API with dynamic `generateMetadata` for all strategic modules.
- **Structured Data**: JSON-LD integration for "Project" (Case Studies), "SoftwareApplication" (Lab), and "ProfessionalService" schemas.
- **Sitemap**: Dynamic `sitemap.ts` to ensure real-time indexing of the Decision Log.

### GEO & Edge Intelligence
- **Location Awareness**: **Next.js Edge Middleware** using `request.geo` for zero-latency personalization.
- **Multi-region Sync**: Global event-syncing strategy via a distributed Postgres backend (connected to local PGLite).
- **Localized ROI**: Context-aware briefings that adjust financial projections or partner references based on the visitor’s geographic region.

### Folder Structure (Modular Multi-domain)
- **Root**: `/src/modules/`
- **Infrastructure**: `/src/lib/` for `db`, `events`, `ai`, and `seo` utilities.
- **Modules**: `shared`, `home`, `lab`, `log`, `resilience`, `services`, `studies`, `tools`, `dna`, `briefing`.

## 5. Implementation Patterns & Consistency Rules

### Naming Conventions
- **Database**: `snake_case` for tables/columns (e.g. `autonomy_proofs`).
- **Components**: `PascalCase.tsx` for files and exports.
- **Logic/Hooks**: `kebab-case.ts` for files, `camelCase` for exports.
- **Events**: `domain:action` format (e.g. `ai:briefing_started`).

### Data & State Patterns
- **Repository Pattern**: All DB interactions must happen through `src/lib/db/repositories/`.
- **Event-Sourcing**: Every mutation MUST be preceded by an append to the `event_log`. 
- **Zustand Store**: One store per domain module to keep the state tree clean and modular.

### AI & Streaming Patterns
- **Server Actions**: Located in `src/modules/*/actions.ts`.
- **Streaming**: Use `StreamingTextResponse` from Vercel AI SDK for all AI-logic bridges.

### SEO & GEO Patterns
- **Metadata**: Strict use of the Next.js 14 Metadata API in all modular `page.tsx` files.
- **Geo-Awareness**: Middleware-level detection of `request.geo` with header injection (`x-user-geo`).
- **Structured Data**: Component-level injection of JSON-LD for "Strategic Credibility" (Schema.org).

### Conflict Prevention Rules for AI Agents
1. **No direct DB writes**: Always use the defined repository layer.
2. **Standardized Errors**: All Server Actions must return a consistent `{ success: boolean, data?: T, error?: string }` wrapper.
3. **Zod First**: No data enters the engine without passing a Zod schema validation.

## 6. Project Structure & Boundaries

### Complete Project Directory Structure

```text
carlossimpore.com/
├── README.md
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .env.local
├── .env.example
├── middleware.ts              # GEO-targeting & Edge Intelligence
├── src/
│   ├── app/                   # Next.js App Router (Routing only)
│   │   ├── layout.tsx         # Global Layout + SEO JSON-LD
│   │   ├── page.tsx           # Home Hero Bridge
│   │   ├── (modules)/         # Grouped module routes
│   │   │   ├── lab/page.tsx
│   │   │   ├── log/page.tsx
│   │   │   ├── briefing/page.tsx
│   │   │   └── ...
│   │   └── api/               # External Webhooks/Integrations
│   ├── modules/               # Domain-Driven Modules (Logic + Components)
│   │   ├── shared/            # Common UI, Hooks, Layouts
│   │   ├── home/              # Hero Engine Core logic
│   │   ├── autonomy-lab/      # Innovation grid + Lab Waves
│   │   ├── decision-log/      # Event-log visualizer
│   │   ├── resilience/        # Titan Story components
│   │   └── ai-briefing/       # Streaming AI Agent Bridge
│   │       ├── actions.ts     # streaming Server Actions
│   │       ├── components/    # Chat UI, ROI Projections
│   │       └── use-briefing.ts
│   ├── lib/                   # The "Titan" Infrastructure Layer
│   │   ├── db/                # PouchDB / PGLite + Drizzle
│   │   │   ├── schema.ts      # Event & Projection schemas
│   │   │   └── repository.ts  # Hand-off logic
│   │   ├── events/            # Event-Sourcing logic & replay
│   │   ├── ai/                # Vercel AI SDK wrappers
│   │   └── seo/               # Metadata & Schema generation utilities
│   ├── components/            # Atomic UI components (Shadcn/Custom)
│   │   └── ui/
│   ├── styles/                # Global CSS + Design Tokens
│   └── types/                 # Global Types (Events, Metadata)
├── public/                    # 3D assets, SVG Blueprints
└── logs/                      # Local dev execution logs
```

### Architectural Boundaries & Data Flow

- **API Boundary**: All mutation logic is handled via **Server Actions** in `modules/*/actions.ts`. No direct API fetch calls to internal routes.
- **Data Boundary**: Components *never* write to the DB. They dispatch **Events** to the `lib/events` handler, which persists to the **PGLite** log.
- **GEO Boundary**: **Middleware** intercepts requests before the App Router, injecting location headers that Server Components use to personalize content blocks.
- **AI Boundary**: The AI streaming context is managed within the `ai-briefing` module, ensuring LLM logic doesn't leak into the presentation components.

### Requirements to Structure Mapping

- **9 Prototype Pages** -> Each corresponds to a sub-folder in `src/modules/` and a route in `src/app/(modules)/`.
- **Local-First** -> Handled by the interaction between `middleware.ts` (Edge caching) and `src/lib/db` (PGLite persistence).
- **SEO & GEO** -> Centralized in `src/middleware.ts` and `src/lib/seo` for consistency.

## 7. Architecture Validation Results

### Coherence Validation ✅
- **Compatibility**: The hybrid stack (Next.js 14 + PGLite + AI SDK) is fully compatible.
- **Pattern Alignment**: Event-sourcing and modularity provide a unified implementation path.

### Requirements Coverage Validation ✅
- **Titan Resilience**: Fully addressed via local-first PGLite sync strategy.
- **SEO/GEO**: Fully addressed via dynamic metadata and Edge Middleware.
- **Modular Multi-domain**: Project structure supports independent evolution of Lab, Log, and Case Studies.

### Architecture Readiness Assessment
- **Status**: READY FOR IMPLEMENTATION
- **Compliance**: All AI Agents MUST strictly follow the `/src/modules/` organization rules.

### Implementation Handoff
- **First Action**: Initialize the engine using the command in Section 3.
- **Second Action**: Setup the `lib/db` layer to enable the Titan Resilience engine.
