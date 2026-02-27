import React, { useMemo, useState } from "react";
import "./App.css";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "settings", label: "Settings" },
];

const FEATURES = [
  { title: "Test Case Generator", desc: "Generate structured test cases from requirements." },
  { title: "Regression Suite Builder", desc: "Assemble and manage repeatable regression packs." },
  { title: "API Test Runner", desc: "Create, run, and report on API checks." },
  { title: "UI Automation Planner", desc: "Organize UI flows and selectors for automation." },
  { title: "Test Data Manager", desc: "Create datasets and seed environments quickly." },
  { title: "Defect Triage Assistant", desc: "Summarize failures and propose likely root causes." },
];

// PUBLIC_INTERFACE
function App() {
  /** Main SPA shell for Auto QA Pro UI. */
  const [activeNav, setActiveNav] = useState("home");
  const [activeFeature, setActiveFeature] = useState(FEATURES[0].title);

  const activeFeatureObj = useMemo(
    () => FEATURES.find((f) => f.title === activeFeature) ?? FEATURES[0],
    [activeFeature]
  );

  return (
    <div className="aqp-app">
      <a className="aqp-skip-link" href="#main">
        Skip to content
      </a>

      <header className="aqp-topbar" role="banner">
        <div className="aqp-topbar-left">
          <div className="aqp-brand" aria-label="Auto QA Pro">
            <div className="aqp-logo" aria-hidden="true">
              <span className="aqp-logo-dot" />
            </div>
            <div className="aqp-brand-text">
              <div className="aqp-brand-title">Auto QA Pro</div>
              <div className="aqp-brand-subtitle">QA automation dashboard</div>
            </div>
          </div>
        </div>

        <nav className="aqp-topbar-right" aria-label="Top navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`aqp-topnav-btn ${activeNav === item.id ? "is-active" : ""}`}
              onClick={() => setActiveNav(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <div className="aqp-layout">
        <aside className="aqp-sidebar" aria-label="Feature navigation">
          <div className="aqp-sidebar-title">Automation Features</div>
          <ul className="aqp-feature-list">
            {FEATURES.map((f) => (
              <li key={f.title}>
                <button
                  type="button"
                  className={`aqp-feature-item ${activeFeature === f.title ? "is-active" : ""}`}
                  onClick={() => setActiveFeature(f.title)}
                >
                  <div className="aqp-feature-item-title">{f.title}</div>
                  <div className="aqp-feature-item-desc">{f.desc}</div>
                </button>
              </li>
            ))}
          </ul>

          <div className="aqp-sidebar-footer">
            <div className="aqp-pill" title="Theme">
              Light • Modern
            </div>
            <div className="aqp-pill aqp-pill-accent" title="Status">
              Ready
            </div>
          </div>
        </aside>

        <main id="main" className="aqp-main" role="main">
          <div className="aqp-main-inner">
            <section className="aqp-hero" aria-label="Landing content">
              <div className="aqp-hero-badge">New</div>
              <h1 className="aqp-hero-title">Build faster QA automation workflows</h1>
              <p className="aqp-hero-subtitle">
                Plan, generate, and run QA assets from one place. Start by selecting a feature on the left.
              </p>

              <div className="aqp-card">
                <div className="aqp-card-header">
                  <div className="aqp-card-title">{activeFeatureObj.title}</div>
                  <div className="aqp-card-tag">{activeNav === "settings" ? "Settings" : "Home"}</div>
                </div>
                <p className="aqp-card-body">{activeFeatureObj.desc}</p>

                <div className="aqp-card-actions" aria-label="Primary actions">
                  <button type="button" className="aqp-btn aqp-btn-primary">
                    Get started
                  </button>
                  <button type="button" className="aqp-btn aqp-btn-secondary">
                    View docs
                  </button>
                </div>
              </div>

              <div className="aqp-metrics" aria-label="Highlights">
                <div className="aqp-metric">
                  <div className="aqp-metric-value">1</div>
                  <div className="aqp-metric-label">Unified workspace</div>
                </div>
                <div className="aqp-metric">
                  <div className="aqp-metric-value">6</div>
                  <div className="aqp-metric-label">Automation modules</div>
                </div>
                <div className="aqp-metric">
                  <div className="aqp-metric-value">∞</div>
                  <div className="aqp-metric-label">Runs & iterations</div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
