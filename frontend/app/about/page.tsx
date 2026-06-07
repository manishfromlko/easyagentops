export default function About() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">About EasyAgentOps</h1>
        <p className="page-subtitle">Learn more about our mission and vision</p>
      </div>

      <section className="content-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to demystify agent operations and make it accessible to developers and
          organizations worldwide. We believe that autonomous agents and intelligent orchestration
          are the future of software development.
        </p>
      </section>

      <section className="content-section">
        <h2>What We Cover</h2>
        <p>
          • Agent Design Patterns<br />
          • Workflow Orchestration<br />
          • Tool Integration<br />
          • Performance Optimization<br />
          • Deployment Strategies<br />
          • Monitoring & Logging
        </p>
      </section>

      <section className="content-section">
        <h2>Get In Touch</h2>
        <p>
          Have questions or suggestions? Feel free to <a href="/contact">contact us</a> anytime.
          We'd love to hear from you!
        </p>
      </section>
    </div>
  );
}
