import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Waves, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const FloatingParticle: React.FC<{ delay: number; x: number; y: number; size: number }> = ({ 
  delay, 
  x, 
  y, 
  size 
}) => (
  <motion.div
    className="floating-particle"
    style={{
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))',
    }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
)

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <div className="page home-page" ref={containerRef}>
      <motion.div 
        className="hero min-hero unified-bg" 
        style={{ y: smoothY, opacity, scale }}
      >
        <div className="hero-particles">
          <FloatingParticle delay={0} x={10} y={20} size={8} />
          <FloatingParticle delay={0.5} x={25} y={60} size={6} />
          <FloatingParticle delay={1} x={40} y={30} size={10} />
          <FloatingParticle delay={1.5} x={55} y={70} size={7} />
          <FloatingParticle delay={2} x={70} y={40} size={9} />
          <FloatingParticle delay={2.5} x={85} y={25} size={6} />
          <FloatingParticle delay={3} x={15} y={80} size={8} />
          <FloatingParticle delay={3.5} x={60} y={15} size={7} />
        </div>

        <div className="container">
          <div className="hero-content-center">
            <motion.div
              className="hero-text-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="hero-title-large cursive-title"
              >
                Shi-Xi Tsai
              </motion.h1>
            
              <motion.p 
                className="hero-subtitle-clean"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Marine Science Student & Part-time Research Assistant
              </motion.p>

              <motion.p 
                className="hero-description-clean"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Researching Kuroshio power generation in Taiwan and the Kuroshio large meander
              </motion.p>

              <motion.div
                className="hero-buttons-clean"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/about" className="clean-button primary">
                    <Waves size={18} />
                    Learn More
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/research" className="clean-button secondary">
                    My Research
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="scroll-mouse"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="scroll-wheel" />
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Home

const homeStyles = `
  .hero-particles {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .floating-particle {
    position: absolute;
    pointer-events: none;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .scroll-mouse {
    width: 26px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    padding-top: 8px;
  }

  .scroll-wheel {
    width: 4px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
  }

  .stats-section {
    padding: 4rem 0;
  }

  .stats-grid {
    display: flex;
    justify-content: center;
    gap: 4rem;
  }

  .stat-item {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #1e40af, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Dancing Script', cursive;
  }

  .stat-label {
    font-size: 1rem;
    color: var(--text-secondary);
    font-weight: 500;
  }

  @media (max-width: 767px) {
    .stats-grid {
      gap: 2rem;
    }

    .stat-number {
      font-size: 2.5rem;
    }

    .scroll-indicator {
      display: none;
    }
  }
`

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.textContent = homeStyles
  if (!document.head.querySelector('style[data-home-styles]')) {
    styleElement.setAttribute('data-home-styles', 'true')
    document.head.appendChild(styleElement)
  }
}
