import React from 'react'
import { motion } from 'framer-motion'
import { Battery, MapPin, TrendingUp, Clock } from 'lucide-react'

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

  const ongoingResearch = [
    {
      title: "Kuroshio Current Power Generation",
      description: "Assessing the feasibility of renewable energy generation using the Kuroshio Current off Taiwan's east coast. This research includes turbine configuration analysis, energy output calculations, and environmental impact assessments on marine ecosystems. The goal is to develop clean energy solutions suitable for Taiwan's marine characteristics.",
      icon: <Battery size={36} />,
      status: "In Progress",
      duration: "2025 - Ongoing",
      type: "Primary Research Project",
      objectives: [
        "Evaluate Kuroshio Current energy potential",
        "Optimize ocean current turbine configurations",
        "Assess environmental impact and ecological protection strategies",
        "Conduct economic feasibility analysis"
      ]
    },
    {
      title: "Blue Carbon Trajectory Drift",
      description: "Investigating the spatial distribution and migration patterns of marine blue carbon under ocean current dynamics. This study explores carbon sequestration mechanisms and the impact of climate change on blue carbon ecosystems. The research is crucial for understanding ocean carbon cycles and developing carbon neutrality strategies.",
      icon: <MapPin size={36} />,
      status: "Data Collection",
      duration: "2025 - Ongoing",
      type: "Environmental Research",
      objectives: [
        "Survey blue carbon ecosystem spatial distribution",
        "Analyze ocean current effects on carbon migration",
        "Evaluate carbon sequestration efficiency",
        "Research climate change adaptation strategies"
      ]
    },
    {
      title: "Kuroshio Large Meander Predictability Assessment",
      description: "In-depth analysis of the formation mechanisms and predictive potential of Kuroshio Large Meander phenomena. This research involves developing numerical models to forecast the timing and path variations of large meanders. The study has significant applications for marine fisheries, shipping, and coastal environmental management.",
      icon: <TrendingUp size={36} />,
      status: "Model Development",
      duration: "2025 - Ongoing",
      type: "Predictive Research",
      objectives: [
        "Analyze large meander formation mechanisms",
        "Develop numerical forecasting models",
        "Validate prediction accuracy",
        "Apply research to fisheries and environmental management"
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
                <h2 className="motto-japanese">ななころびやおき</h2>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Research Hero Section */}
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="page-hero">
            <h2>Resilience in Research</h2>
            <p>
              Inspired by the motto "ななころびやおき" (fall down seven times, get up eight), this section reflects the ongoing commitment to persistent,
              adaptive research that navigates challenges and emerges stronger for the science of the Kuroshio Current.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Ongoing Research Section */}
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>Ongoing Research</h2>
            <p>Current research projects focusing on Taiwan's marine environment and ocean current systems.</p>
          </motion.div>

          <div className="research-grid">
            {ongoingResearch.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="research-card ocean-card liquid-glass"
              >
                <div className="research-header">
                  <div className="research-icon">
                    {project.icon}
                  </div>
                  <div className="research-meta">
                    <span className="research-status">{project.status}</span>
                    <span className="research-type">{project.type}</span>
                  </div>
                </div>
                
                <div className="research-content">
                  <h3 className="research-title">{project.title}</h3>
                  
                  <div className="research-duration">
                    <Clock size={16} />
                    <span>{project.duration}</span>
                  </div>
                  
                  <p className="research-description">{project.description}</p>
                  
                  <div className="research-objectives">
                    <h5>Research Objectives</h5>
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

export default Research
