export default function Home() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Welcome to EasyAgentOps</h1>
        <p className="page-subtitle">Master the art of agent operations</p>
      </div>

      <section className="content-section">
        <h2>About This Blog</h2>
        <p>
          EasyAgentOps is your comprehensive guide to understanding and implementing agent operations.
          Whether you're building autonomous agents, orchestrating workflows, or managing complex systems,
          we've got you covered.
        </p>
      </section>

      <section className="content-section">
        <h2>Latest Articles</h2>
        <p>
          Check out our <a href="/blog">blog</a> for the latest articles on agent operations,
          best practices, and real-world implementations.
        </p>
      </section>

      <section className="content-section">
        <h2>Getting Started</h2>
        <p>
          New to agent operations? Start with our <a href="/learn">learning resources</a> and
          <a href="/tutorials"> tutorials</a> section to get up to speed quickly.
        </p>
      </section>
    </div>
  );
}
