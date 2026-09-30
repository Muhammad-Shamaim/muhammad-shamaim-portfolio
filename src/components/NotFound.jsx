function NotFound() {
  return (
    <section className="not-found">
      <div className="section-container">
        <p className="section-label">ERROR</p>

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for does not exist.
        </p>

        <a href="/" className="btn primary-btn">
          Back to Home
        </a>
      </div>
    </section>
  );
}

export default NotFound;