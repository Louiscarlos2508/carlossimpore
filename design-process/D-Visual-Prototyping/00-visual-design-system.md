# Visual Design System (VDS) — carlossimpore.com

## 1. Aesthetic Identity: "Cyber-Architect / Titan Resilience"
The visual language must communicate **High-Precision Engineering**, **Mission-Critical Autonomy**, and **Architectural Depth**.

> [!NOTE]
> **Design Vision**: A premium, "Dark Mode" environment where Obsidian meets Neon Blue. It should feel like a high-end command center for a business engine.

---

## 2. Design Tokens

### 2.1 Color Palette (Obsidian & Neon)
| Name | Hex | Usage |
|---|---|---|
| **Obsidian (Base)** | `#0A0A0B` | Main backgrounds, the bedrock. |
| **Coal (Surface)** | `#0D0D0E` | Cards, logic panels, secondary surfaces. |
| **Neon Blue (Logic)** | `#3B82F6` | Primary accents, human/AI sync pathways. |
| **Emerald (Success)** | `#10B981` | Autonomous success, online status, ROI proof. |
| **Cyber Steel (Text)** | `#F9FAFB` | Primary headings, clear messaging. |
| **Faint Grid (Structure)** | `rgba(255,255,255,0.05)` | Background patterns, blueprint lines. |

### 2.2 Typography
- **Primary (Sans)**: **Inter (Variable)**
  - Weights: 300 (Light), 400 (Regular), 700 (Bold), 900 (Black).
  - Use: Headings, body copy, strategic messaging.
- **Support (Mono)**: **JetBrains Mono**
  - Use: Telemetry counters, logic logs, "Titan" labels, code snippets.

### 2.3 Spacing & Radius
- **Grid**: 4px / 8px baseline.
- **Radius**: `24px` (Small Cards), `48px` (Main Sections), `999px` (Status Pills).

---

## 3. Visual Components (Design Patterns)

### A. The "Engine Heartbeat"
- A pulsing, glowing wave animation (using `animate-pulse` and `shadow-blue-500/20`).
- Signifies "Proof of Life" in the Autonomy Lab.

### B. The "Resilience Grid"
- A background pattern of thin lines or dots (`stroke-width="0.1"`).
- Communicates "Structural Blueprint" and "Architecture."

### C. The "Titan Badge"
- A high-contrast, rotated label (`rotate-3`) with a thick border.
- Used for Authority markers (e.g., "TITAN CORE," "98.4% ROI").

---

## 4. Implementation Directives (HTML-to-Figma)
- All prototypes use **Tailwind CSS classes**.
- Use absolute positioning for "Telemetry" overlays.
- Ensure high contrast for all critical CTAs.
- Use `backdrop-blur-md` for floating strategic panels.
