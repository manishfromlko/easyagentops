export default function Tutorials() {
  const tutorials = [
    {
      id: 1,
      title: 'Building Your First Agent in 30 Minutes',
      duration: '30 mins',
      difficulty: 'Beginner',
    },
    {
      id: 2,
      title: 'Creating a Multi-Agent System',
      duration: '2 hours',
      difficulty: 'Intermediate',
    },
    {
      id: 3,
      title: 'Integrating External Tools and APIs',
      duration: '1.5 hours',
      difficulty: 'Intermediate',
    },
    {
      id: 4,
      title: 'Deploying Agents to Production',
      duration: '3 hours',
      difficulty: 'Advanced',
    },
    {
      id: 5,
      title: 'Performance Optimization and Debugging',
      duration: '2 hours',
      difficulty: 'Advanced',
    },
    {
      id: 6,
      title: 'Monitoring and Analytics Setup',
      duration: '1 hour',
      difficulty: 'Intermediate',
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
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
        <h1 className="page-title">Tutorials</h1>
        <p className="page-subtitle">Step-by-step guides to master agent operations</p>
      </div>

      <section className="content-section">
        <h2>Available Tutorials</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              style={{
                padding: '1.5rem',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              <h3 style={{ marginBottom: '1rem', color: '#1a1a1a' }}>{tutorial.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#999' }}>⏱ {tutorial.duration}</span>
                <span
                  style={{
                    backgroundColor: getDifficultyColor(tutorial.difficulty),
                    color: '#fff',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                  }}
                >
                  {tutorial.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Tutorial Categories</h2>
        <p>
          • Getting Started<br />
          • Agent Development<br />
          • Integration & Deployment<br />
          • Advanced Topics
        </p>
      </section>
    </div>
  );
}
