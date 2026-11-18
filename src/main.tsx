import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { categories, contact, projects, type Project } from './projects'
import './style.css'

const skills = [
  { title: 'Frontend development', tools: 'React, JavaScript, TypeScript, responsive CSS' },
  { title: 'Backend development', tools: 'Python, Django, Node.js, REST APIs, SQL' },
  { title: 'Data science', tools: 'Statistical analysis, predictive modelling, data pipelines' },
  { title: 'Security and delivery', tools: 'Secure authentication, OWASP Top 10, Docker, CI/CD' },
]

function ProjectStack({ project }: { project: Project }) {
  return (
    <ul className="stack" aria-label={`${project.name} technology stack`}>
      {project.tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.demo && (
        <a href={project.demo} aria-label={`${project.name} live demo${project.desktopOnly ? ' (Desktop only)' : ''}`}>
          Live demo <span aria-hidden="true">↗</span>{project.desktopOnly && <small>Desktop only</small>}
        </a>
      )}
      {project.source && <a href={project.source} aria-label={`${project.name} source code`}>Source <span aria-hidden="true">↗</span></a>}
    </div>
  )
}

function Preview({ project }: { project: Project }) {
  if (project.preview) {
    return (
      <div className={`preview preview--${project.id}`}>
        <img src={project.preview.src} alt={project.preview.alt} loading={project.id === 'netflixo' ? 'eager' : 'lazy'} />
      </div>
    )
  }

  if (project.id === 'lucasa') {
    return (
      <div className="preview preview--lucasa">
        <div className="architecture" role="img" aria-label="Lucasa POS runs in Flutter, stores local data in SQLite via Drift, and uses Supabase for cloud backup and sync.">
          <span>Flutter POS</span><span aria-hidden="true">→</span><span>SQLite / Drift</span><span aria-hidden="true">↔</span><span>Supabase</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`preview preview--${project.id}`} aria-hidden="true">
      <div className="preview-title"><span>{project.tags[0]}</span>{project.name}</div>
    </div>
  )
}

function App() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All')
  const featured = projects.filter(project => project.caseStudy)
  const archive = projects.filter(project => !project.caseStudy && (filter === 'All' || project.category === filter))

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#main" aria-label="Chris Njoroge, home"><span>CN</span><strong>Chris Njoroge</strong></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero wrap" aria-labelledby="intro">
          <div className="hero-copy">
            <p className="eyebrow"><span className="dot" /> Based in Kenya</p>
            <h1 id="intro">Chris <span>Njoroge</span></h1>
            <p className="role">Backend developer<br className="role-break" /> &amp; data scientist</p>
            <p className="intro">I build Python APIs and data pipelines, with a focus on secure systems and analytics.</p>
            <div className="hero-actions">
              <a className="button" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              {contact.email && <a className="button button--outline" href="#contact">Get in touch</a>}
            </div>
            <div className="hero-social">
              <a href={contact.github}>GitHub <span aria-hidden="true">↗</span></a>
              {contact.linkedin && <a href={contact.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>}
            </div>
          </div>
          {contact.portrait && (
            <div className="hero-portrait" aria-hidden="true">
              <img src={contact.portrait} alt="" width="1402" height="1122" fetchPriority="high" />
            </div>
          )}
        </section>

        <section id="work" className="wrap section" aria-labelledby="work-title">
          <div className="section-heading"><h2 id="work-title">Featured work</h2><a href="#archive">Project archive <span aria-hidden="true">↓</span></a></div>
          <div className="featured-grid">
            {featured.map(project => (
              <article className="case-study" key={project.id}>
                <Preview project={project} />
                <div className="case-body">
                  <h3>{project.name}</h3>
                  <ProjectStack project={project} />
                  <p className="summary">{project.summary}</p>
                  <dl>
                    <div><dt>Problem</dt><dd>{project.caseStudy?.problem}</dd></div>
                    <div><dt>What I built</dt><dd>{project.caseStudy?.built}</dd></div>
                    <div><dt>Technical decision</dt><dd>{project.caseStudy?.decision}</dd></div>
                  </dl>
                  <ProjectLinks project={project} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="archive" className="wrap section" aria-labelledby="archive-title">
          <div className="section-heading"><h2 id="archive-title">Project archive</h2></div>
          <div className="filters" role="group" aria-label="Filter projects">
            {categories.map(category => (
              <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>
            ))}
          </div>
          <p className="sr-only" role="status">{archive.length} projects shown</p>
          <div className="archive-grid">
            {archive.map(project => (
              <article className="archive-card" key={project.id}>
                {project.preview && <Preview project={project} />}
                <h3>{project.name}</h3>
                <ProjectStack project={project} />
                <p className="summary">{project.summary}</p>
                <ProjectLinks project={project} />
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="wrap section" aria-labelledby="about-title">
          <div className={`about${contact.portrait ? ' about--portrait' : ''}`}>
            {contact.portrait && <img src={contact.portrait} alt="Portrait of Chris Njoroge" width="1402" height="1122" loading="lazy" />}
            <div>
              <h2 id="about-title">About me</h2>
              <p>I’m Chris Njoroge, a backend developer and data scientist based in Kenya. I have over five years of experience in Python development, API design, and database management, with a focus on secure systems and machine learning.</p>
              <p>I earned my BSc in Computer Science from Murang’a University of Technology in 2023. I’m pursuing a master’s in Machine Learning and AI at Jomo Kenyatta University of Agriculture and Technology, where I focus on secure AI systems and adversarial machine learning.</p>
              <p>At Techtonic Online, I lead work on analytical models and build Python tools that process customer interaction data. As a freelance cybersecurity and analytics consultant, I automated reporting and analysis, built predictive models, and assessed security vulnerabilities. Before that, I worked as a full-stack developer at TechTrove, where I built REST APIs and dashboards and added automated security tests to the deployment pipeline.</p>
            </div>
          </div>
        </section>
        <section id="skills" className="wrap section" aria-labelledby="skills-title">
          <div className="section-heading"><h2 id="skills-title">Technical skills</h2></div>
          <dl className="skills-grid">
            {skills.map(skill => (
              <div key={skill.title}><dt>{skill.title}</dt><dd>{skill.tools}</dd></div>
            ))}
          </dl>
        </section>
      </main>

      <footer id="contact" className="wrap section footer" aria-labelledby="contact-title">
        <div>
          <h2 id="contact-title">Let’s connect</h2>
          <p>Get in touch about developer roles, analytics work, or client projects.</p>
        </div>
        <div className="contact-links">
          {contact.whatsapp && <a className="button" href={contact.whatsapp}>WhatsApp <span aria-hidden="true">↗</span></a>}
          <a className="button" href={contact.github}>GitHub <span aria-hidden="true">↗</span></a>
          {contact.email && <a className="button" href={`mailto:${contact.email}`}>Email</a>}
          {contact.linkedin && <a className="button" href={contact.linkedin}>LinkedIn</a>}
          {contact.cv && <a className="button" href={contact.cv}>CV</a>}
        </div>
        <div className="footer-bottom"><span>Chris Njoroge</span><a href="#main">Back to top ↑</a></div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
