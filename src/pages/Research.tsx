import React from 'react'
import { motion } from 'framer-motion'
import { Waves, Thermometer, BarChart3, FileText, ExternalLink } from 'lucide-react'

const Research: React.FC = () => {
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

  const researchProjects = [
    {
      title: "Kuroshio Power Generation Potential Assessment",
      description: "Evaluating the feasibility and potential of harnessing Taiwan's Kuroshio Current for renewable energy generation, including turbine placement analysis and energy yield calculations.",
      icon: <Thermometer size={32} />,
      status: "Ongoing",
      type: "Primary Research"
    },
    {
      title: "Kuroshio Large Meander Pattern Analysis",
      description: "Investigating the large meander phenomenon of the Kuroshio Current and its impacts on Taiwan's eastern waters, focusing on prediction models and environmental effects.",
      icon: <Waves size={32} />,
      status: "Data Analysis",
      type: "Long-term Study"
    },
    {
      title: "Energy Generation Optimization",
      description: "Developing optimization strategies for Kuroshio current energy extraction while minimizing environmental impact on marine ecosystems.",
      icon: <BarChart3 size={32} />,
      status: "Research Phase",
      type: "Applied Research"
    }
  ]

  const publications = [
    {
      title: "Impacts of Kuroshio Current on Temperature Distribution in Taiwan's Eastern Waters",
      journal: "Taiwan Journal of Marine Science",
      year: "2024",
      status: "Under Review"
    },
    {
      title: "Analysis of Kuroshio Variability Trends in the Northwest Pacific",
      journal: "Journal of Oceanic Research",
      year: "2024",
      status: "In Preparation"
    }
  ]

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
          <motion.div variants={itemVariants} className="research-intro">
            <h2>Research Overview</h2>
            <p>
              My research primarily focuses on the Kuroshio, a world-class warm ocean current. 
              The Kuroshio originates from the eastern Philippines, flows northward along Taiwan's 
              eastern coast, and has significant impacts on Taiwan's climate, fisheries, and marine 
              ecology. Through multifaceted research approaches, I am dedicated to understanding 
              the characteristics and variability of the Kuroshio Current.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="research-focus">
            <h2>Main Research Directions</h2>
            <div className="grid">
              {researchProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="research-card ocean-card liquid-glass"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="floating-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div>
                  <div className="research-icon">
                    {project.icon}
                  </div>
                  <div className="research-content">
                    <span className="research-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="research-meta">
                      <span className={`status ${project.status.replace(/\s/g, '-').toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
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
          <motion.div variants={itemVariants} className="research-methods">
            <h2>Research Methods & Tools</h2>
            <div className="methods-grid">
              <div className="method-card ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Field Observations</h3>
                <ul>
                  <li>CTD Temperature-Salinity Measurements</li>
                  <li>ADCP Current Profiler</li>
                  <li>Buoy Observation Systems</li>
                  <li>Ship-based Surveys</li>
                </ul>
              </div>

              <div className="method-card ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Data Analysis</h3>
                <ul>
                  <li>Statistical Analysis Methods</li>
                  <li>Time Series Analysis</li>
                  <li>Spatial Distribution Analysis</li>
                  <li>Correlation Studies</li>
                </ul>
              </div>

              <div className="method-card ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Model Studies</h3>
                <ul>
                  <li>Ocean Circulation Models</li>
                  <li>Numerical Simulations</li>
                  <li>Prediction Model Development</li>
                  <li>Validation & Calibration</li>
                </ul>
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
          <motion.div variants={itemVariants} className="publications-section">
            <h2>Research Results & Publications</h2>
            <div className="publications-list">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  className="publication-item ocean-card liquid-glass"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="floating-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div>
                  <div className="publication-content">
                    <FileText className="publication-icon" size={24} />
                    <div className="publication-details">
                      <h3>{pub.title}</h3>
                      <p>{pub.journal} ({pub.year})</p>
                      <span className={`publication-status ${pub.status.replace(/\s/g, '-').toLowerCase()}`}>
                        {pub.status}
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="external-link" />
                </motion.div>
              ))}
            </div>

            <div className="research-collaboration liquid-glass">
              <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <h3>Collaborative Institutions</h3>
              <div className="collaboration-list">
                <div className="collaboration-item">National Taiwan Ocean University</div>
                <div className="collaboration-item">Academia Sinica Research Center for Environmental Changes</div>
                <div className="collaboration-item">Ocean Conservation Administration</div>
                <div className="collaboration-item">Taiwan Ocean Research Institute</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Research
