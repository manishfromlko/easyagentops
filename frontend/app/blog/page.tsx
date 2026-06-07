export default function Blog() {
  const blogPosts = [
    { id: 1, title: 'Getting Started with Agent Operations', date: '2024-06-01' },
    { id: 2, title: 'Building Your First Autonomous Agent', date: '2024-05-28' },
    { id: 3, title: 'Workflow Orchestration Best Practices', date: '2024-05-20' },
    { id: 4, title: 'Scaling Agents in Production', date: '2024-05-15' },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Blog</h1>
        <p className="page-subtitle">Articles and guides on agent operations</p>
      </div>

      <section className="content-section">
        <h2>Latest Posts</h2>
        <div>
          {blogPosts.map((post) => (
            <div
              key={post.id}
              style={{
                padding: '1rem',
                marginBottom: '1rem',
                borderBottom: '1px solid #eee',
                cursor: 'pointer',
              }}
            >
              <h3 style={{ marginBottom: '0.5rem', color: '#0070f3' }}>{post.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#999' }}>{post.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Blog Features Coming Soon</h2>
        <p>
          • Full article management<br />
          • Search and filtering<br />
          • Categories and tags<br />
          • Comments and discussions
        </p>
      </section>
    </div>
  );
}
