# Background Patterns — carlossimpore.com

We use code-driven SVG and CSS patterns instead of heavy images to maintain high performance and "Titan-grade" engineering standards.

---

## 1. The Titan Grid (Standard)
**Usage**: Main page backdrops (Home, Hero, Lab).
**Spec**: 80px or 40px grid lines with a blueprint feel.

```html
<svg width="100%" height="100%">
  <pattern id="titan-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
     <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#3B82F6" stroke-width="0.2" />
     <circle cx="0" cy="0" r="1" fill="#3B82F6" opacity="0.5" />
  </pattern>
  <rect width="100%" height="100%" fill="url(#titan-grid)" />
</svg>
```

---

## 2. The Logic Dots
**Usage**: Section dividers, card interiors, and telemetry panels.
**Spec**: 20px staggered dots in faint white or logic-blue.

```html
<svg width="100%" height="100%">
  <pattern id="logic-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
     <circle cx="2" cy="2" r="0.5" fill="white" opacity="0.1" />
  </pattern>
  <rect width="100%" height="100%" fill="url(#logic-dots)" />
</svg>
```

---

## 3. High-Glow Overlays
**Usage**: Behind hero elements or active nodes.
**Spec**: Radial gradients with `backdrop-blur`.

```css
.glow-overlay {
  background: radial-gradient(50% 50% at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(10, 10, 11, 0) 100%);
  filter: blur(120px);
}
```
