import { useState, useEffect } from 'react'
import './Home.css'

const roles = [
  'SWE @ McGill',
  'Software Development Intern @ Botpress',
  'Co-founder of Cyber Engineering McGill'
]

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="home-section">
      <div className="container home-container">
        <div className="home-content">
          <h1 className="greeting">I'm Yang.</h1>
          <div className="role-container">
            <h2 className={`role ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              {roles[currentRole]}
            </h2>
          </div>
          <div className="catchphrase">
            <p className="catchphrase-text">
              Everything you need to know about me in one place
            </p>
          </div>
        </div>
        <div className="visual-container">
          <div className="geometric-art">
            <div className="cube cube-1"></div>
            <div className="cube cube-2"></div>
            <div className="cube cube-3"></div>
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  )
}

export default Home

