import React from 'react'
import { motion } from 'framer-motion'
import { Waves, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="page home-page">
      {/* Hero Section - 簡化版 */}
      <section className="hero min-hero unified-bg">
        <div className="container">
          <div className="hero-content-center">
            <motion.div
              className="hero-text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-title-large cursive-title"
              >
                Shi-Xi Tsai
              </motion.h1>
            
              <motion.p 
                className="hero-subtitle-clean"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Marine Science Student & Part-time Research Assistant
              </motion.p>

              <motion.p 
                className="hero-description-clean"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Researching Kuroshio power generation in Taiwan and the Kuroshio large meander
              </motion.p>

              <motion.div
                className="hero-buttons-clean"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link to="/about" className="clean-button primary">
                  <Waves size={18} />
                  Learn More
                </Link>
                <Link to="/research" className="clean-button secondary">
                  My Research
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
