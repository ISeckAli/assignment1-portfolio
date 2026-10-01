import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section className="home-section">
        <div className="home-content">
          <div className="hero-copy">
            <p className="hero-label">
              SOFTWARE ENGINEERING • FULL STACK • AI
            </p>

            <h1>
              Building software
              <span> with intelligence.</span>
            </h1>

            <p className="hero-description">
              I am a Software Engineering Technologies – Artificial Intelligence
              student focused on building reliable software, full-stack
              applications, and practical machine learning and AI solutions.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="primary-button">
                View My Projects
              </Link>

              <Link to="/about" className="secondary-button">
                About Me
              </Link>
            </div>
          </div>

          <div className="tech-panel">
            <div className="tech-panel-header">
              <div className="window-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="panel-title">portfolio.sys</span>
            </div>

            <div className="tech-panel-body">
              <p>
                <span className="terminal-symbol">&gt;</span>
                <span className="terminal-command"> profile</span>
              </p>

              <div className="system-row">
                <span>Primary Focus</span>
                <strong>Software Engineering</strong>
              </div>

              <div className="system-row">
                <span>Development</span>
                <strong>Full-Stack Applications</strong>
              </div>

              <div className="system-row">
                <span>Specialization</span>
                <strong>AI & Machine Learning</strong>
              </div>

              <div className="system-row">
                <span>Current Mode</span>
                <strong className="status-active">
                  <span className="status-dot"></span>
                  Building
                </strong>
              </div>

              <div className="circuit-divider">
                <span></span>
              </div>

              <p className="terminal-line">
                <span className="terminal-symbol">&gt;</span>
                Designing systems. Building solutions._
              </p>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>EXPLORE</span>
          <div></div>
        </div>
      </section>
    </main>
  )
}

export default Home