import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, TrendingUp, ExternalLink, Github } from 'lucide-react'

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

  const projects = [
    {
      title: "Kuroshio Power Generation Assessment System",
      description: "Developing a comprehensive assessment system to evaluate the power generation potential of Taiwan's Kuroshio Current, including energy yield calculations and environmental impact analysis.",
      icon: <TrendingUp size={32} />,
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      status: "In Development",
      type: "Web Application",
      features: [
        "Power generation potential mapping",
        "Energy yield calculations",
        "Environmental impact assessment",
        "Interactive visualization dashboard"
      ]
    },
    {
      title: "Large Meander Detection Tools",
      description: "Creating data processing tools for detecting and analyzing Kuroshio large meander patterns, providing insights into prediction and monitoring of this significant oceanographic phenomenon.",
      icon: <Database size={32} />,
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
      status: "Testing Phase",
      type: "Data Analysis",
      features: [
        "Automated meander pattern detection",
        "Statistical trend analysis",
        "Predictive modeling",
        "Real-time monitoring dashboard"
      ]
    },
    {
      title: "Kuroshio Energy Optimization Model",
      description: "Implementing machine learning models to optimize Kuroshio current energy extraction while minimizing environmental impact, focusing on turbine placement and operation strategies.",
      icon: <Code size={32} />,
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Jupyter"],
      status: "Research Phase",
      type: "Machine Learning",
      features: [
        "Energy extraction optimization",
        "Environmental impact modeling",
        "Turbine placement strategies",
        "Real-time performance monitoring"
      ]
    },
    {
      title: "Kuroshio Energy Education Platform",
      description: "Creating an educational website to promote awareness about Kuroshio current energy potential and large meander phenomena, targeting marine science students and researchers.",
      icon: <Globe size={32} />,
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      status: "Planning",
      type: "Education Platform",
      features: [
        "Interactive current visualizations",
        "Power generation demonstrations",
        "Large meander pattern explorer",
        "Research collaboration tools"
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return '#10b981'
      case 'In Development': return '#3b82f6'
      case 'Testing Phase': return '#f59e0b'
      case 'Research Phase': return '#8b5cf6'
      case 'Planning': return '#6b7280'
      default: return '#6b7280'
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
          <motion.div variants={itemVariants} className="projects-intro">
            <h2>Technical Innovation</h2>
            <p>
              Beyond academic research, I am also dedicated to developing practical tools and systems. 
              I hope to advance marine science research through the power of technology and help more 
              people understand the importance of our oceans.
            </p>
          </motion.div>

          <motion.div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card ocean-card liquid-glass"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "rgba(30, 64, 175, 0.2) 0 25px 50px -12px"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <div className="project-header">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <div className="project-meta">
                    <span className="project-type">{project.type}</span>
                    <span 
                      className="project-status"
                      style={{ backgroundColor: getStatusColor(project.status) }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, tIndex) => (
                        <span key={tIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-actions">
                  <button className="project-btn demo-btn" disabled>
                    <ExternalLink size={16} />
                    Demo (In Development)
                  </button>
                  <button className="project-btn code-btn" disabled>
                    <Github size={16} />
                    Code (Private)
                  </button>
                </div>
              </motion.div>
            ))}
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
          <motion.div variants={itemVariants} className="project-skills">
            <h2>Development Skills</h2>
            <div className="skills-categories">
              <div className="skill-category ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Frontend Development</h3>
                <div className="skill-items">
                  <span className="skill-item">React</span>
                  <span className="skill-item">Next.js</span>
                  <span className="skill-item">JavaScript</span>
                  <span className="skill-item">HTML/CSS</span>
                  <span className="skill-item">D3.js</span>
                </div>
              </div>

              <div className="skill-category ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Backend Development</h3>
                <div className="skill-items">
                  <span className="skill-item">Node.js</span>
                  <span className="skill-item">Python</span>
                  <span className="skill-item">MongoDB</span>
                  <span className="skill-item">RESTful API</span>
                  <span className="skill-item">Express.js</span>
                </div>
              </div>

              <div className="skill-category ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Data Science</h3>
                <div className="skill-items">
                  <span className="skill-item">Python</span>
                  <span className="skill-item">Pandas</span>
                  <span className="skill-item">NumPy</span>
                  <span className="skill-item">Matplotlib</span>
                  <span className="skill-item">TensorFlow</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="future-projects">
            <h2>Future Plans</h2>
            <div className="future-grid">
              <div className="future-item ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Ocean VR Experience</h3>
                <p>Developing virtual reality ocean exploration experiences to help the public understand the Kuroshio Current immersively</p>
              </div>
              <div className="future-item ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>AI Ocean Prediction</h3>
                <p>Integrating more AI technologies to improve the accuracy of marine environment change predictions</p>
              </div>
              <div className="future-item ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Open Source Toolkit</h3>
                <p>Making research tools open source to promote development of the marine science research community</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Projects
