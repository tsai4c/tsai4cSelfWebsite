import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <footer className="footer">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="footer-content">
          <div className="footer-bottom">
            <p>© 2025-2026 Shi-Xi Tsai. All rights reserved.</p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
