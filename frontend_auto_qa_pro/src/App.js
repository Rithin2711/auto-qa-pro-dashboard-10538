import React, { useMemo, useState } from "react";
import "./App.css";

const SIDEBAR_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "grid" },
  { id: "suites", label: "My Test Suites", icon: "folder" },
  { id: "tcg", label: "Test Case Generation", icon: "spark" },
  { id: "tsg", label: "Test Script Generation", icon: "code" },
  { id: "jira", label: "Jira Testcase Sync", icon: "sync" },
];

const STATS = [
  { label: "Total Test Cases", value: "12,540", icon: "doc" },
  { label: "Avg Generation Time", value: "450.2", icon: "clock" },
  { label: "Pass Rate", value: "99.8%", icon: "check" },
  { label: "Defect Leakage", value: "1.2%", icon: "trend" },
];

const MODULES = [
  {
    title: "Testcase Generation",
    desc: "Generate high-quality test cases from requirements with consistent coverage and formatting.",
    icon: "spark",
  },
  {
    title: "Test Script Generation",
    desc: "Create automation-ready scripts faster with AI-assisted steps, selectors, and assertions.",
    icon: "code",
  },
  {
    title: "Jira Testcase Sync",
    desc: "Push cases to Jira and keep them in sync with your workflow across projects and teams.",
    icon: "sync",
  },
];

function Icon({ name }) {
  // Simple inline glyphs to mimic the screenshot's small monochrome icons.
  // (Avoids adding dependencies for an icon library.)
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" };

  switch (name) {
    case "grid":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "folder":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M3.5 6.5h6l2 2h9v9.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V6.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M19.5 13.5l.7 3 2.8 1.1-2.8 1.1-.7 3-.7-3-2.8-1.1 2.8-1.1.7-3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity="0.9" />
        </svg>
      );
    case "code":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M9 9 6 12l3 3M15 9l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 19l2-14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "sync":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M20 7v6h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 17v-6h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 13a8 8 0 0 0-14.7-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4 11a8 8 0 0 0 14.7 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M14 3v4a2 2 0 0 0 2 2h4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "check":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "trend":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 16l6-6 4 4 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 8h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "search":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M10 21a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "help":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9.8 9a2.2 2.2 0 1 1 3.9 1.4c-.8.9-1.7 1.2-1.7 2.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 17h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function HeroIllustration() {
  // Abstract blob + small bubbles; intended to visually match screenshot without external assets.
  return (
    <div className="aqp-hero-illustration" aria-label="Abstract AI illustration">
      <svg viewBox="0 0 260 150" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="blob" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.10)" />
          </linearGradient>
          <linearGradient id="bubble" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(234,240,255,0.95)" />
            <stop offset="1" stopColor="rgba(234,240,255,0.55)" />
          </linearGradient>
        </defs>

        <path
          d="M175 18c28 0 58 12 67 37 9 25-6 54-28 70-22 16-55 20-82 11-27-9-47-30-48-55-1-25 17-45 40-55 14-6 33-8 51-8Z"
          fill="url(#blob)"
          opacity="0.9"
        />

        <g opacity="0.95">
          <rect x="168" y="48" rx="12" ry="12" width="74" height="46" fill="rgba(0,0,0,0.10)" />
          <rect x="162" y="44" rx="12" ry="12" width="74" height="46" fill="rgba(255,255,255,0.14)" />
          <circle cx="176" cy="58" r="3.5" fill="url(#bubble)" />
          <circle cx="189" cy="58" r="3.5" fill="url(#bubble)" opacity="0.9" />
          <circle cx="202" cy="58" r="3.5" fill="url(#bubble)" opacity="0.85" />
          <path d="M210 89l10 10-18-4 8-6Z" fill="rgba(255,255,255,0.14)" />
        </g>

        <g opacity="0.9">
          <circle cx="120" cy="36" r="5" fill="rgba(234,240,255,0.75)" />
          <path d="M120 22l2.2 9.4 8.6 3.2-8.6 3.2-2.2 9.4-2.2-9.4-8.6-3.2 8.6-3.2L120 22Z" fill="rgba(234,240,255,0.40)" />
        </g>
      </svg>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** Auto QA Pro dashboard shell (dark theme) matching the provided screenshot/design notes. */
  const [activeItem, setActiveItem] = useState("dashboard");

  const activeLabel = useMemo(() => {
    return SIDEBAR_ITEMS.find((i) => i.id === activeItem)?.label ?? "Dashboard";
  }, [activeItem]);

  return (
    <div className="aqp-app">
      <a className="aqp-skip-link" href="#main">
        Skip to content
      </a>

      <div className="aqp-shell">
        <aside className="aqp-sidebar" aria-label="Primary">
          <div className="aqp-sidebrand" aria-label="Auto QA Pro">
            <div className="aqp-sidebrand-icon" aria-hidden="true">
              <span className="aqp-sidebrand-dot" />
            </div>
            <div className="aqp-sidebrand-name">Auto QA Pro</div>
          </div>

          <nav className="aqp-nav" aria-label="Sidebar navigation">
            <ul className="aqp-navlist">
              {SIDEBAR_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`aqp-navitem ${activeItem === item.id ? "is-active" : ""}`}
                    onClick={() => setActiveItem(item.id)}
                    aria-current={activeItem === item.id ? "page" : undefined}
                  >
                    <span className="aqp-navicon" aria-hidden="true">
                      <Icon name={item.icon} />
                    </span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="aqp-sidebar-footer" aria-label="User">
            <div className="aqp-profile">
              <div className="aqp-avatar" aria-hidden="true" />
              <div className="aqp-profile-name">John Doe</div>
            </div>
          </div>
        </aside>

        <main className="aqp-main" id="main" role="main">
          <header className="aqp-topbar" role="banner" aria-label="Top bar">
            <div className="aqp-topbar-left">
              <div className="aqp-topbar-title">{activeLabel}</div>
              <div className="aqp-topbar-subtitle">Home / {activeLabel}</div>
            </div>

            <div className="aqp-topbar-right" aria-label="Controls">
              <button type="button" className="aqp-topicon" aria-label="Search">
                <Icon name="search" />
              </button>
              <button type="button" className="aqp-topicon" aria-label="Notifications">
                <Icon name="bell" />
              </button>
              <button type="button" className="aqp-topicon" aria-label="Help">
                <Icon name="help" />
              </button>
            </div>
          </header>

          <section className="aqp-hero" aria-label="Hero">
            <div>
              <h1 className="aqp-hero-title">Auto QA Pro</h1>
              <p className="aqp-hero-desc">
                Empower your quality assurance workflow with next-generation AI. Quickly generate test cases and
                scripts, automate duplicate detection, push to Jira and keep them in sync.
              </p>

              <div className="aqp-hero-actions" aria-label="Hero actions">
                <button type="button" className="aqp-btn aqp-btn-primary">
                  Run New Test
                </button>
                <button type="button" className="aqp-btn aqp-btn-secondary">
                  View Dashboard
                </button>
              </div>
            </div>

            <HeroIllustration />
          </section>

          <section className="aqp-stats" aria-label="Key metrics">
            {STATS.map((s) => (
              <div className="aqp-statcard" key={s.label}>
                <div className="aqp-stat-icon" aria-hidden="true">
                  <Icon name={s.icon} />
                </div>
                <div className="aqp-stat-label">{s.label}</div>
                <div className="aqp-stat-value">{s.value}</div>
              </div>
            ))}
          </section>

          <section className="aqp-section" aria-label="Key AI Modules">
            <h2 className="aqp-section-title">Key AI Modules</h2>

            <div className="aqp-modules">
              {MODULES.map((m) => (
                <article key={m.title} className="aqp-modulecard" aria-label={m.title}>
                  <div className="aqp-module-icon" aria-hidden="true">
                    <Icon name={m.icon} />
                  </div>
                  <h3 className="aqp-module-title">{m.title}</h3>
                  <p className="aqp-module-desc">{m.desc}</p>
                  <a className="aqp-module-link" href="#learn-more" onClick={(e) => e.preventDefault()}>
                    Learn more →
                  </a>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
