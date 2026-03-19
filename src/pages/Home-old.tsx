import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Waves, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="hero-text"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Shi-Xi Tsai
              </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Marine Science Student & Research Assistant
            </motion.p>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Exploring the mysteries of ocean science through Kuroshio Current research
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Link to="/about" className="ocean-button primary">
                <Waves size={20} />
                Learn More
              </Link>
              <Link to="/contact" className="ocean-button secondary">
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="ocean-illustration">
              <div className="ocean-wave"></div>
              <div className="ocean-current"></div>
              <Waves className="center-icon" size={80} />
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section overview-section">
        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Welcome to My Research World
          </motion.h2>

          <motion.p variants={fadeInUp} className="overview-intro">
            Dive deep into the fascinating world of marine science with me. From understanding 
            the powerful Kuroshio Current to developing innovative research tools, my work spans 
            across oceanography, data science, and marine conservation.
          </motion.p>

          <div className="overview-grid">
            <motion.div variants={fadeInUp} className="overview-card ocean-card liquid-glass">
              <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <h3>Research Focus</h3>
              <p>Studying the Kuroshio Current's impact on Taiwan's marine ecosystem and climate patterns.</p>
              <Link to="/research" className="card-link">
                Explore Research <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="overview-card ocean-card liquid-glass">
              <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <h3>Technical Projects</h3>
              <p>Developing cutting-edge tools for ocean data analysis and visualization.</p>
              <Link to="/projects" className="card-link">
                View Projects <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="overview-card ocean-card liquid-glass">
              <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <h3>Academic Journey</h3>
              <p>Learn about my background in marine science and research experience.</p>
              <Link to="/about" className="card-link">
                About Me <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="section stats-section">
        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Research Highlights
          </motion.h2>

          <div className="stats-grid">
            <motion.div variants={fadeInUp} className="stat-card liquid-glass">
              <div className="stat-number">3+</div>
              <div className="stat-label">Active Research Projects</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="stat-card liquid-glass">
              <div className="stat-number">2</div>
              <div className="stat-label">Publications in Progress</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="stat-card liquid-glass">
              <div className="stat-number">4+</div>
              <div className="stat-label">Technical Projects</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="stat-card liquid-glass">
              <div className="stat-number">∞</div>
              <div className="stat-label">Ocean Discoveries</div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
