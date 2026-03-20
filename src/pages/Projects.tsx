import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Zap } from 'lucide-react'

const Projects: React.FC = () => {
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

  const futureProjects = [
    {
      title: "Kuroshio Large Meander Prediction",
      description: "Developing advanced prediction models to forecast Kuroshio Large Meander phenomena, helping marine industries and coastal communities prepare for oceanographic changes. This includes machine learning approaches, numerical modeling, and real-time data integration systems.",
      icon: <Lightbulb size={36} />,
      status: "In Planning",
      duration: "2026 - TBD",
      type: "Predictive Research",
      objectives: [
        "Develop advanced forecasting models",
        "Create early warning systems",
        "Support marine industry planning",
        "Enhance coastal management strategies"
      ]
    },
    {
      title: "Kuroshio Generation Website",
      description: "Creating a comprehensive web platform dedicated to Kuroshio Current power generation research, featuring interactive visualizations and real-time data analysis tools. The platform will serve as a resource for researchers, policymakers, and the general public interested in marine renewable energy.",
      icon: <Zap size={36} />,
      status: "Development Phase",
      duration: "2026 - Ongoing",
      type: "Technology Platform",
      objectives: [
        "Design interactive data visualization tools",
        "Integrate real-time oceanographic data",
        "Create educational resources",
        "Enable collaborative research sharing"
      ]
    }
  ]

  return (
    <div className="page">
      {/* Motto Section */}
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="motto-section">
            <div className="motto-content liquid-glass">
              <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <div className="japanese-motto">
                <h2 className="motto-japanese">そうぞうみらい</h2>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Hero Section */}
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="contact-hero">
            <h2>Imagining the Future</h2>
            <p className="contact-hero-description">
              This project area is driven by the spirit of "そうぞうみらい" (imagine the future), where innovative ideas are turned into actionable research
              blueprints that advance marine science and technological solutions for ocean energy and sustainability.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Future Projects Section */}
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 style={{ 
              fontFamily: "'Dancing Script', cursive", 
              fontSize: '2.5rem',
              background: 'linear-gradient(135deg, #1e40af, #3b82f6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Future Plans</h2>
            <p>Upcoming projects and initiatives to expand research horizons and develop innovative solutions.</p>
          </motion.div>

          <div className="projects-grid">
            {futureProjects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="project-card ocean-card liquid-glass"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "rgba(30, 64, 175, 0.3) 0 25px 50px -12px"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <div className="project-meta">
                    <span className="project-status">{project.status}</span>
                    <span className="project-type">{project.type}</span>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  
                  <div className="project-duration">
                    <span>{project.duration}</span>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-objectives">
                    <h5>Project Objectives</h5>
                    <ul>
                      {project.objectives.map((objective, objIndex) => (
                        <li key={objIndex}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Projects

const styles = `
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .project-card {
    padding: 2rem;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }

  .project-header {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    align-items: flex-start;
  }

  .project-icon {
    color: #3b82f6;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .project-meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-status {
    display: inline-block;
    background: linear-gradient(135deg, #1e40af, #3b82f6);
    color: white;
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    width: fit-content;
  }

  .project-type {
    font-size: 0.85rem;
    color: var(--text-secondary);
    font-weight: 500;
  }

  .project-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex-grow: 1;
  }

  .project-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    line-height: 1.3;
  }

  .project-duration {
    font-size: 0.9rem;
    color: #06b6d4;
    font-weight: 600;
  }

  .project-description {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
  }

  .project-objectives {
    margin-top: 1rem;
  }

  .project-objectives h5 {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.5rem 0;
  }

  .project-objectives ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .project-objectives li {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 0.4rem;
    padding-left: 1.2rem;
    position: relative;
  }

  .project-objectives li:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #3b82f6;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .project-card {
      padding: 1.5rem;
    }

    .project-title {
      font-size: 1.1rem;
    }

    .project-header {
      gap: 1rem;
    }
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.textContent = styles
  if (!document.head.querySelector('style[data-projects-styles]')) {
    styleElement.setAttribute('data-projects-styles', 'true')
    document.head.appendChild(styleElement)
  }
}
