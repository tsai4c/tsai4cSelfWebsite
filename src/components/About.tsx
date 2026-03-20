import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="section">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div variants={itemVariants} className="about-content">
            <p className="about-intro">
              Hello! I'm Shi-Xi Tsai, currently studying at National Taiwan Ocean University 
              while serving as a part-time research assistant at Academia Sinica. I have a deep passion for marine science, 
              with a particular focus on Kuroshio Current research.
            </p>

            <p className="about-description">
              The Kuroshio is one of the world's strongest warm ocean currents, having profound 
              impacts on the climate and ecosystems of Taiwan and the entire Northwest Pacific region. 
              Through studying the Kuroshio's variability patterns, temperature distribution, and 
              effects on marine life, I hope to contribute to the field of marine science.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <GraduationCap className="highlight-icon" />
                <div>
                  <h4>Academic Background</h4>
                  <p>National Taiwan Ocean University</p>
                </div>
              </div>

              <div className="highlight-item">
                <MapPin className="highlight-icon" />
                <div>
                  <h4>Research Focus</h4>
                  <p>Kuroshio Current Studies</p>
                </div>
              </div>

              <div className="highlight-item">
                <Calendar className="highlight-icon" />
                <div>
                  <h4>Research Experience</h4>
                  <p>Part-time at Academia Sinica</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="about-image">
            <div className="image-placeholder ocean-card">
              <div className="placeholder-content">
                <GraduationCap size={64} className="placeholder-icon" />
                <p>個人照片</p>
                <span className="placeholder-note">
                  請替換為您的個人照片
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="skills-section">
          <h3>Professional Skills & Interests</h3>
          <div className="skills-grid">
            <div className="skill-category ocean-card liquid-glass">
              <h4>Research Skills</h4>
              <ul>
                <li>Ocean Data Analysis</li>
                <li>Current Pattern Studies</li>
                <li>Temperature & Salinity Measurements</li>
                <li>Marine Ecological Surveys</li>
              </ul>
            </div>

            <div className="skill-category ocean-card liquid-glass">
              <h4>Technical Abilities</h4>
              <ul>
                <li>Data Visualization</li>
                <li>Statistical Analysis</li>
                <li>Scientific Writing</li>
                <li>Research Methodology Design</li>
              </ul>
            </div>

            <div className="skill-category ocean-card liquid-glass">
              <h4>Academic Interests</h4>
              <ul>
                <li>Physical Oceanography</li>
                <li>Climate Change Impacts</li>
                <li>Marine Conservation</li>
                <li>Sustainable Ocean Development</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
