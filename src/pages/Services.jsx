const services = [
  {
    number: '01',
    title: 'Software Engineering',
    category: 'SYSTEM DESIGN • DEVELOPMENT • QUALITY',
    description:
      'Designing and building structured software systems with attention to requirements, architecture, maintainability, testing, and long-term reliability.',
    capabilities: [
      'Software architecture & system design',
      'Object-oriented development',
      'Requirements engineering',
      'API & component design',
      'Testing & quality assurance',
      'Git & version control',
      'CI workflows',
      'Technical documentation',
    ],
    technologies: [
      'Python',
      'Java',
      'JavaScript',
      'C#',
      'Git',
      'GitHub Actions',
      'UML',
      'REST APIs',
    ],
  },

  {
    number: '02',
    title: 'Full-Stack Development',
    category: 'FRONT END • BACK END • DEPLOYMENT',
    description:
      'Developing complete web applications from responsive user interfaces through server-side logic, databases, APIs, security, and deployment.',
    capabilities: [
      'Responsive user interfaces',
      'Front-end application development',
      'Server-side application logic',
      'Authentication & authorization',
      'Database integration',
      'REST API development',
      'Application security',
      'Cloud deployment',
    ],
    technologies: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'Flask',
      'PostgreSQL',
      'SQLAlchemy',
      'Render',
    ],
  },

  {
    number: '03',
    title: 'Backend & Systems Development',
    category: 'APIs • DATA • CONCURRENCY • SERVICES',
    description:
      'Building backend services and data-driven systems where performance, reliability, networking, persistence, and clean application boundaries matter.',
    capabilities: [
      'Backend service development',
      'REST API implementation',
      'Relational database design',
      'SQL & data access',
      'Client-server architecture',
      'TCP networking',
      'Concurrency & thread safety',
      'Persistence & recovery',
    ],
    technologies: [
      'Java',
      'Python',
      'Flask',
      'SQL',
      'PostgreSQL',
      'TCP',
      'JUnit',
      'Maven',
    ],
  },

  {
    number: '04',
    title: 'AI & Machine Learning Engineering',
    category: 'MODELS • INTELLIGENT FEATURES • INTEGRATION',
    description:
      'Developing practical machine learning systems and integrating AI capabilities into software products with an emphasis on evaluation, explainability, safety, and usable application experiences.',
    capabilities: [
      'Machine learning pipelines',
      'Classification systems',
      'Model evaluation & validation',
      'Threshold optimization',
      'Feature analysis',
      'Model explainability',
      'AI API integration',
      'AI-assisted application features',
    ],
    technologies: [
      'scikit-learn',
      'XGBoost',
      'Pandas',
      'SHAP',
      'Jupyter',
      'Gemini API',
      'Flask',
      'Python',
    ],
  },
]

function Services() {
  return (
    <main>
      <section className="services-section">
        <div className="services-container">
          <div className="services-heading">
            <p className="services-label">
              ENGINEERING CAPABILITIES
            </p>

            <h1>Services</h1>

            <p>
              Software development across application architecture,
              full-stack systems, backend engineering, and practical
              artificial intelligence.
            </p>
          </div>

          <section className="services-intro-panel">
            <div>
              <p className="services-intro-label">
                SOFTWARE ENGINEERING
              </p>

              <h2>
                From system design to
                <span> intelligent software.</span>
              </h2>
            </div>

            <p>
              I work across the software stack—from designing application
              structure and backend services to building user interfaces,
              integrating data, developing machine learning systems, and
              connecting AI capabilities to real applications.
            </p>
          </section>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-showcase-card"
                key={service.title}
              >
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-category">
                    {service.category}
                  </span>
                </div>

                <h2>{service.title}</h2>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-divider"></div>

                <div className="service-capabilities">
                  <p>CAPABILITIES</p>

                  <div className="service-capability-grid">
                    {service.capabilities.map((capability) => (
                      <div
                        className="service-capability"
                        key={capability}
                      >
                        <span className="capability-marker">
                          +
                        </span>

                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-stack">
                  <p>TECHNOLOGY</p>

                  <div>
                    {service.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="engineering-spectrum">
            <div className="engineering-spectrum-heading">
              <p className="services-label">
                ENGINEERING SPECTRUM
              </p>

              <h2>
                Building across the complete application stack.
              </h2>
            </div>

            <div className="engineering-flow">
              <div className="engineering-stage">
                <span>01</span>
                <strong>Design</strong>
                <p>
                  Requirements, architecture, data models, and system
                  structure.
                </p>
              </div>

              <div className="engineering-flow-line"></div>

              <div className="engineering-stage">
                <span>02</span>
                <strong>Build</strong>
                <p>
                  Front end, backend, APIs, databases, and application logic.
                </p>
              </div>

              <div className="engineering-flow-line"></div>

              <div className="engineering-stage">
                <span>03</span>
                <strong>Intelligence</strong>
                <p>
                  Machine learning models and AI-powered application features.
                </p>
              </div>

              <div className="engineering-flow-line"></div>

              <div className="engineering-stage">
                <span>04</span>
                <strong>Validate</strong>
                <p>
                  Testing, evaluation, security, CI, and technical
                  documentation.
                </p>
              </div>

              <div className="engineering-flow-line"></div>

              <div className="engineering-stage">
                <span>05</span>
                <strong>Deploy</strong>
                <p>
                  Production-ready services, APIs, applications, and cloud
                  deployment.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Services