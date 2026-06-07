export default function Learn() {
  const resources = [
    {
      title: 'Fundamentals of Agent Design',
      level: 'Beginner',
      description: 'Learn the core concepts behind intelligent agents',
    },
    {
      title: 'Advanced Orchestration Patterns',
      level: 'Intermediate',
      description: 'Master complex multi-agent workflows and patterns',
    },
    {
      title: 'Production Deployment Strategies',
      level: 'Advanced',
      description: 'Scale and deploy agents reliably in production',
    },
    {
      title: 'LLM Integration & Optimization',
      level: 'Intermediate',
      description: 'Work with large language models effectively',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return '#10b981';
      case 'Intermediate':
        return '#f59e0b';
      case 'Advanced':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Learning Resources</h1>
        <p className="page-subtitle">Structured learning paths for agent operations</p>
      </div>

      <section className="content-section">
        <h2>Available Learning Modules</h2>
        <div>
          {resources.map((resource, index) => (
            <div
              key={index}
              style={{
                padding: '1.5rem',
                marginBottom: '1rem',
                backgroundColor: '#f9f9f9',
                borderRadius: '6px',
                borderLeft: `4px solid ${getLevelColor(resource.level)}`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3 style={{ marginBottom: '0.5rem' }}>{resource.title}</h3>
                  <p style={{ color: '#666' }}>{resource.description}</p>
                </div>
                <span
                  style={{
                    backgroundColor: getLevelColor(resource.level),
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {resource.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Learning Paths</h2>
        <p>
          • Beginner Path: Start with fundamentals and basic agent design<br />
          • Intermediate Path: Advance to complex workflows and optimizations<br />
          • Advanced Path: Master production deployment and scaling<br />
        </p>
      </section>
    </div>
  );
}
