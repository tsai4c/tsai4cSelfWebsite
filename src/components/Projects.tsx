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
      title: "Kuroshio Temperature Monitoring System",
      description: "Building a real-time Kuroshio temperature monitoring and visualization system to provide researchers with convenient data query interfaces.",
      icon: <TrendingUp size={32} />,
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      status: "In Development",
      type: "Web Application",
      features: [
        "Real-time temperature data display",
        "Historical trend analysis",
        "Interactive map interface",
        "Data export functionality"
      ]
    },
    {
      title: "Ocean Data Analysis Tools",
      description: "Developing data processing and analysis tools for marine science research to simplify complex statistical analysis workflows.",
      icon: <Database size={32} />,
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
      status: "Testing Phase",
      type: "Data Analysis",
      features: [
        "Automated data cleaning",
        "Statistical analysis functions",
        "Chart generation",
        "Report generator"
      ]
    },
    {
      title: "Ocean Current Prediction Model",
      description: "Using machine learning techniques to build prediction models for Kuroshio flow direction and intensity, improving forecast accuracy.",
      icon: <Code size={32} />,
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Jupyter"],
      status: "Research Phase",
      type: "Machine Learning",
      features: [
        "Deep learning models",
        "Prediction accuracy validation",
        "Model optimization",
        "Result visualization"
      ]
    },
    {
      title: "Marine Science Education Website",
      description: "Building a marine science knowledge sharing platform to promote ocean conservation awareness and science education.",
      icon: <Globe size={32} />,
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      status: "Planning",
      type: "Education Platform",
      features: [
        "Interactive learning content",
        "Ocean knowledge base",
        "Virtual laboratory",
        "Community discussion features"
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
    <section id="projects" className="section">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Projects
        </motion.h2>

        <motion.div variants={itemVariants} className="projects-intro">
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

        <motion.div variants={itemVariants} className="project-skills">
          <h3>開發技能</h3>
          <div className="skills-categories">
            <div className="skill-category ocean-card">
              <h4>前端開發</h4>
              <div className="skill-items">
                <span className="skill-item">React</span>
                <span className="skill-item">Next.js</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">HTML/CSS</span>
                <span className="skill-item">D3.js</span>
              </div>
            </div>

            <div className="skill-category ocean-card">
              <h4>後端開發</h4>
              <div className="skill-items">
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Python</span>
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">RESTful API</span>
                <span className="skill-item">Express.js</span>
              </div>
            </div>

            <div className="skill-category ocean-card">
              <h4>數據科學</h4>
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
          <h3>未來規劃</h3>
          <div className="future-grid">
            <div className="future-item ocean-card">
              <h4>海洋VR體驗</h4>
              <p>開發虛擬實境海洋探索體驗，讓大眾身歷其境地了解黑潮</p>
            </div>
            <div className="future-item ocean-card">
              <h4>AI海洋預測</h4>
              <p>整合更多AI技術，提升海洋環境變化預測的準確性</p>
            </div>
            <div className="future-item ocean-card">
              <h4>開源工具包</h4>
              <p>將研究工具開源化，促進海洋科學研究社群的發展</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
