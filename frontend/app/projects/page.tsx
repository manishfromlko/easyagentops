export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI Workflow Orchestrator',
      description: 'A complete framework for orchestrating multi-agent workflows',
      status: 'In Development',
    },
    {
      id: 2,
      title: 'Agent Monitoring Dashboard',
      description: 'Real-time monitoring and analytics for autonomous agents',
      status: 'Planning',
    },
    {
      id: 3,
      title: 'Tool Integration Library',
      description: 'Pre-built integrations for popular APIs and services',
      status: 'In Development',
    },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">Showcase of agent operations projects</p>
      </div>

      <section className="content-section">
        <h2>Featured Projects</h2>
        <div>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                padding: '1.5rem',
                marginBottom: '1.5rem',
                backgroundColor: '#f5f5f5',
                borderRadius: '6px',
                border: '1px solid #e0e0e0',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p style={{ color: '#666', marginBottom: '0.5rem' }}>{project.description}</p>
                </div>
                <span
                  style={{
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                  }}
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Open Source Contributions</h2>
        <p>
          We're committed to contributing to the open-source community. Check back soon for our
          open-source projects and initiatives.
        </p>
      </section>
    </div>
  );
}
