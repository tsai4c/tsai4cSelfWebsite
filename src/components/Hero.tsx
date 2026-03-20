import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Waves } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero wave-background">
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="morphing-blob" style={{ top: '10%', left: '10%' }}></div>
      <div className="morphing-blob" style={{ bottom: '20%', right: '15%', animationDelay: '2s' }}></div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
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
            Marine Science Student & Part-time Research Assistant
          </motion.p>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Researching Kuroshio power generation in Taiwan and the Kuroshio large meander phenomenon
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button 
              className="ocean-button primary"
              onClick={scrollToAbout}
            >
              <Waves size={20} />
              Learn More
            </button>
            <button 
              className="ocean-button secondary"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="hero-visual">
            <div className="ocean-illustration liquid-glass-card">
              <div className="wave-circle wave-1"></div>
              <div className="wave-circle wave-2"></div>
              <div className="wave-circle wave-3"></div>
              <Waves className="center-icon" size={80} />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={scrollToAbout}
      >
        <ChevronDown size={24} />
        <span>Scroll Down</span>
      </motion.div>
    </section>
  )
}

export default Hero
