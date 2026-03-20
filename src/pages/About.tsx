import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Github, Linkedin, Mail, Instagram } from 'lucide-react'

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
    <div className="page">
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Hero Profile Section */}
          <div className="profile-hero mobile-friendly">
            <motion.div variants={itemVariants} className="profile-image-section mobile-priority">
              <div className="profile-photo-container ocean-card liquid-glass">
                <img 
                  src="/profile-photo.png" 
                  alt="Shi-Xi Tsai"
                  className="profile-photo"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="profile-info">
              <h1 className="profile-name">Shi-Xi Tsai</h1>
              <p className="profile-nickname">Charles</p>
              <p className="profile-motto">You've got to find what you love.</p>
              
              <div className="social-links mobile-centered">
                <a href="https://linkedin.com/in/tsai4c" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/libta_8uh9/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram size={24} />
                </a>
                <a href="https://github.com/tsai4c" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={24} />
                </a>
                <a href="mailto:isshixitsai@gmail.com" className="social-link">
                  <Mail size={24} />
                </a>
              </div>
              
              <p className="profile-description mobile-compact">
                Marine Science Student & Part-time Research Assistant at Academia Sinica. 
                Passionate about Kuroshio Current research, focusing on power generation potential 
                and large meander phenomena affecting Taiwan's marine environment.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Academic Background Section */}
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="academic-section">
            <h2>Academic Background</h2>
            <div className="academic-grid">
              <div className="academic-item ocean-card liquid-glass">
                <GraduationCap className="academic-icon" />
                <div>
                  <h4>Education</h4>
                  <p>Marine Environmental Informatics (Computer Science)</p>
                  <p>National Taiwan Ocean University</p>
                </div>
              </div>

              <div className="academic-item ocean-card liquid-glass">
                <MapPin className="academic-icon" />
                <div>
                  <h4>Research Focus</h4>
                  <p>Kuroshio Power Generation</p>
                  <p>Large Meander Phenomena</p>
                </div>
              </div>

              <div className="academic-item ocean-card liquid-glass">
                <Calendar className="academic-icon" />
                <div>
                  <h4>Position</h4>
                  <p>Part-time Research Assistant</p>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>Academia Sinica</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="skills-section">
            <h2>Professional Skills & Interests</h2>
            <div className="skills-grid">
              <div className="skill-category ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Research Skills</h3>
                <ul>
                  <li>Ocean Data Analysis</li>
                  <li>Current Pattern Studies</li>
                  <li>Temperature & Salinity Measurements</li>
                  <li>Marine Ecological Surveys</li>
                </ul>
              </div>

              <div className="skill-category ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Technical Abilities</h3>
                <ul>
                  <li>Data Visualization</li>
                  <li>Statistical Analysis</li>
                  <li>Scientific Writing</li>
                  <li>Research Methodology Design</li>
                </ul>
              </div>

              <div className="skill-category ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Academic Interests</h3>
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
    </div>
  )
}

export default About
