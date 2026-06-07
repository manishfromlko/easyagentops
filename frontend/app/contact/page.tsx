export default function Contact() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">We'd love to hear from you</p>
      </div>

      <section className="content-section">
        <h2>Contact Information</h2>
        <p>
          Have questions about agent operations? Want to collaborate? Interested in speaking opportunities?
          Reach out to us!
        </p>
      </section>

      <section className="content-section">
        <h2>Get In Touch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>📧 Email</h3>
            <p>
              <a href="mailto:hello@easyagentops.in" style={{ color: '#0070f3', textDecoration: 'none' }}>
                hello@easyagentops.in
              </a>
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>🐦 Social Media</h3>
            <p>
              Follow us on <a href="https://twitter.com" style={{ color: '#0070f3', textDecoration: 'none' }}>Twitter</a> and
              <a href="https://github.com" style={{ color: '#0070f3', textDecoration: 'none' }}> GitHub</a>
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>💼 Professional</h3>
            <p>
              Connect on <a href="https://linkedin.com" style={{ color: '#0070f3', textDecoration: 'none' }}>LinkedIn</a>
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Contact Form</h2>
        <p>
          A contact form will be available soon. In the meantime, please reach out via email or social media.
        </p>
      </section>
    </div>
  );
}
