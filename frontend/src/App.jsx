const featureItems = [
  {
    title: "Secure Exam Flow",
    description:
      "Timed sections, autosave, randomized questions, device checks, and audit logs."
  },
  {
    title: "AI Integrity Signals",
    description:
      "Flag anomalies like sudden answer changes, rapid guessing, and unusual navigation."
  },
  {
    title: "Human-in-the-Loop Review",
    description:
      "Proctor dashboards with evidence-based alerts, timelines, and context."
  },
  {
    title: "Interview Studio",
    description:
      "Structured interviews, rubric scoring, candidate playback, and AI summaries."
  },
  {
    title: "Candidate Experience",
    description:
      "Mobile-friendly UI, accessibility modes, and clear instructions at every step."
  },
  {
    title: "Enterprise Controls",
    description:
      "Role-based access, SSO-ready configuration, and regional data residency."
  }
];

const workflowSteps = [
  "Create question banks and import from CSV.",
  "Assemble exams with sections, rules, and accommodations.",
  "Invite candidates and configure availability windows.",
  "Monitor real-time integrity signals during the exam.",
  "Review results and export analytics."
];

const capabilities = [
  {
    title: "Assessment Builder",
    items: [
      "Question bank with tagging and difficulty calibration.",
      "Adaptive sections with branching logic.",
      "Rubric templates for structured interviews."
    ]
  },
  {
    title: "Proctoring & Integrity",
    items: [
      "Multi-signal integrity scoring with explainability.",
      "Session timelines for flagged events.",
      "Configurable evidence retention policies."
    ]
  },
  {
    title: "Analytics & Insights",
    items: [
      "Pass/fail and time-on-task analytics.",
      "Skill gap breakdowns for hiring teams.",
      "Exportable CSV and API-ready summaries."
    ]
  }
];

const integrations = [
  "SSO (SAML/OIDC)",
  "HRIS & ATS integrations",
  "Calendar scheduling",
  "Secure file uploads",
  "Webhooks and API access"
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">AI-assisted online exam software</p>
          <h1>Trusted assessments with human oversight.</h1>
          <p className="subtitle">
            A React + Java starter that delivers a professional exam platform with
            transparent AI signals, accessible workflows, and audit-ready reporting.
          </p>
          <div className="cta-row">
            <button type="button" className="primary">
              Launch demo
            </button>
            <button type="button" className="ghost">
              View admin console
            </button>
          </div>
          <div className="pill-row">
            <span>WCAG-friendly</span>
            <span>GDPR-ready</span>
            <span>Evidence-based AI</span>
            <span>Global-ready</span>
          </div>
        </div>
        <div className="panel">
          <h2>Exam Status</h2>
          <div className="panel-grid">
            <div>
              <p className="label">Active sessions</p>
              <p className="value">128</p>
            </div>
            <div>
              <p className="label">Integrity alerts</p>
              <p className="value warning">7</p>
            </div>
            <div>
              <p className="label">Avg. completion</p>
              <p className="value">82%</p>
            </div>
            <div>
              <p className="label">Queued reviews</p>
              <p className="value">19</p>
            </div>
          </div>
          <div className="panel-footer">
            <p>Alerts never auto-fail candidates. Review with evidence.</p>
          </div>
        </div>
      </header>

      <section className="card-grid">
        {featureItems.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="capabilities">
        <div>
          <h2>Full platform capabilities</h2>
          <p>
            Everything you need to run professional online exams, interviews, and
            compliance-driven assessments in one place.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="card" key={capability.title}>
              <h3>{capability.title}</h3>
              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow">
        <div>
          <h2>How it works</h2>
          <p>
            Build exams that scale globally while keeping humans in control of decisions.
          </p>
        </div>
        <ol>
          {workflowSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="integrations">
        <div>
          <h2>Integrations & automation</h2>
          <p>
            Connect the platform to the rest of your hiring or certification stack.
          </p>
        </div>
        <div className="pill-row">
          {integrations.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="ai-safety">
        <div>
          <h2>Responsible AI checklist</h2>
          <p>
            This starter emphasizes transparent AI usage, candidate privacy, and
            explainable scoring support.
          </p>
        </div>
        <ul>
          <li>Clearly disclose AI-assisted monitoring to candidates.</li>
          <li>Store only necessary evidence and delete on schedule.</li>
          <li>Require human confirmation for any adverse decision.</li>
          <li>Provide appeal workflows and accessibility accommodations.</li>
        </ul>
      </section>
    </div>
  );
}
