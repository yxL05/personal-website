import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="intro">
            <p>
              Hi, I'm <span className="highlight">Yang</span>, an up-and-coming software engineer experienced in <span className="highlight">full-stack development</span>. 
              I also enjoy working on <span className="highlight">cybersecurity</span> and <span className="highlight">game dev</span> projects on the side.
            </p>
          </div>

          <div className="accomplishments">
            <h3 className="subsection-title">Cool stuff I did so far:</h3>
            <ul className="accomplishments-list">
              <li className="accomplishment-item">
                <span className="bullet">▹</span>
                <div className="accomplishment-content">
                  <span className="accomplishment-text">Intern @ Botpress</span>
                </div>
              </li>
              <li className="accomplishment-item">
                <span className="bullet">▹</span>
                <div className="accomplishment-content">
                  <span className="accomplishment-text">
                    Co-founded Cyber Engineering McGill and built / deployed a full-stack website for it (check it out @ <a href="https://cyberengineeringmcgill.club" target="_blank" rel="noopener noreferrer" className="link">cyberengineeringmcgill.club</a>).
                  </span>
                </div>
              </li>
              <li className="accomplishment-item">
                <span className="bullet">▹</span>
                <div className="accomplishment-content">
                  <span className="accomplishment-text">Built 2 games with Game Dev McGill.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="closing">
            <p>
              I don't like wasting people's time, so if you're looking for someone who can both <span className="highlight">communicate efficiently</span> and <span className="highlight">get stuff done</span>, feel free to reach out.
            </p>
          </div>

          <div className="ps">
            <p className="ps-text">
              <span className="ps-label">P.S.</span> I hid a CTF flag on this page. Kudos to you if you find it. Don't go to the repo, that's cheating.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

