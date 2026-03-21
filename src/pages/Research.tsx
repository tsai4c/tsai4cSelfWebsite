import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Battery, MapPin, TrendingUp, Clock } from 'lucide-react'

const AnimatedSection: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}> = ({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  
  const initialState = {
    opacity: 0,
    ...(direction === 'up' && { y: 50 }),
    ...(direction === 'left' && { x: -50 }),
    ...(direction === 'right' && { x: 50 }),
  }
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialState}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initialState}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.22, 1, 0.36, 1] as const
      }}
    >
      {children}
    </motion.div>
  )
}

const Research: React.FC = () => {
  const ongoingResearch = [
    {
      title: "Kuroshio Current Power Generation",
      description: "Assessing the feasibility of renewable energy generation using the Kuroshio Current off Taiwan's east coast. This research includes turbine configuration analysis, energy output calculations, and environmental impact assessments on marine ecosystems.",
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
      description: "Investigating the spatial distribution and migration patterns of marine blue carbon under ocean current dynamics. This study explores carbon sequestration mechanisms and the impact of climate change on blue carbon ecosystems.",
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
      description: "In-depth analysis of the formation mechanisms and predictive potential of Kuroshio Large Meander phenomena. This research involves developing numerical models to forecast the timing and path variations of large meanders.",
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
      <section className="section">
        <AnimatedSection direction="up" delay={0}>
          <div className="motto-content liquid-glass">
            <div className="floating-particles">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="particle"
                  animate={{ y: [-15, 15, -15], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
            </div>
            <div className="japanese-motto">
              <h2 className="motto-japanese">ななころびやおき</h2>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="section">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="contact-hero">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Resilience in Research
            </motion.h2>
            <p className="contact-hero-description">
              Inspired by the motto "ななころびやおき" (fall down seven times, get up eight), this section reflects the ongoing commitment to persistent,
              adaptive research that navigates challenges and emerges stronger for the science of the Kuroshio Current.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="section">
        <AnimatedSection direction="up" delay={0}>
          <div className="section-header">
            <h2 style={{ 
              fontFamily: "'Dancing Script', cursive", 
              fontSize: '2.5rem',
              background: 'linear-gradient(135deg, #1e40af, #3b82f6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Ongoing Research</h2>
            <p>Current research projects focusing on Taiwan's marine environment and ocean current systems.</p>
          </div>

          <div className="research-grid">
            {ongoingResearch.map((project, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 0.15}>
                <motion.div 
                  className="research-card ocean-card liquid-glass"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 3,
                    boxShadow: "rgba(30, 64, 175, 0.3) 0 25px 50px -12px"
                  }}
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
                          <motion.li 
                            key={objIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: objIndex * 0.1 }}
                          >
                            {objective}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="floating-particles">
                    {[0, 1].map((i) => (
                      <motion.div
                        key={i}
                        className="particle"
                        animate={{ y: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}

export default Research
