import './Experience.css'

interface ExperienceItem {
  hash: string
  title: string
  organization: string
  date: string
  type: 'education' | 'work'
}

const workExperiences: ExperienceItem[] = [
  {
    hash: 'a3f8c2d',
    title: 'Software Development Intern',
    organization: 'Botpress',
    date: 'Sept 2025 - Dec 2025',
    type: 'work'
  },
  {
    hash: '7b9e1f5',
    title: 'Co-Founder and Full-Stack Developer',
    organization: 'Cyber Engineering McGill',
    date: 'Jan 2025 - Now',
    type: 'work'
  },
  {
    hash: '9e3f7b1',
    title: 'Software Developer',
    organization: 'Game Dev McGill',
    date: 'Sep 2024 - Now',
    type: 'work'
  }
]

const education: ExperienceItem[] = [
  {
    hash: 'c4d2a8e',
    title: 'Bachelor of Software Engineering',
    organization: 'McGill University',
    date: 'Sept 2024 - May 2028',
    type: 'education'
  }
]

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="experience-layout">
          <div className="git-commits">
            <div className="commits-header">
              <span className="commits-title">$ git log --all --graph</span>
            </div>
            <div className="commits-list">
              {/* Education Branch */}
              <div className="branch-section education">
                <div className="branch-header">
                  <span className="branch-icon">*</span>
                  <span className="branch-name">education</span>
                </div>
                {education.map((exp) => (
                  <div key={exp.hash} className={`commit-item ${exp.type}`}>
                    <div className="commit-graph">|</div>
                    <div className="commit-content">
                      <div className="commit-hash">{exp.hash}</div>
                      <div className="commit-details">
                        <div className="commit-title">{exp.title}</div>
                        <div className="commit-org">{exp.organization}</div>
                        <div className="commit-date">{exp.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Experience Branch */}
              <div className="branch-section">
                <div className="branch-header">
                  <span className="branch-icon">*</span>
                  <span className="branch-name">experience</span>
                </div>
                {workExperiences.map((exp) => (
                  <div key={exp.hash} className={`commit-item ${exp.type}`}>
                    <div className="commit-graph">|</div>
                    <div className="commit-content">
                      <div className="commit-hash">{exp.hash}</div>
                      <div className="commit-details">
                        <div className="commit-title">{exp.title}</div>
                        <div className="commit-org">{exp.organization}</div>
                        <div className="commit-date">{exp.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="resume-embed">
            <iframe
              src="/resume.pdf"
              className="resume-iframe"
              title="Resume PDF"
            />
            <div className="resume-fallback">
              <div className="resume-icon">📄</div>
              <a 
                href="/resume.pdf" 
                className="resume-download"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

