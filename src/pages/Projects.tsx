import React from 'react'
import { motion } from 'framer-motion'

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

      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="future-projects">
            <h2>Future Plans</h2>
            <div className="future-grid">
              <motion.div
                variants={itemVariants}
                className="future-item ocean-card liquid-glass"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "rgba(30, 64, 175, 0.3) 0 25px 50px -12px"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Kuroshio Large Meander Prediction</h3>
                <p>Developing advanced prediction models to forecast Kuroshio Large Meander phenomena, helping marine industries and coastal communities prepare for oceanographic changes</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="future-item ocean-card liquid-glass"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "rgba(30, 64, 175, 0.3) 0 25px 50px -12px"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h3>Kuroshio Generation Website</h3>
                <p>Creating a comprehensive web platform dedicated to Kuroshio Current power generation research, featuring interactive visualizations and real-time data analysis tools</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Projects
