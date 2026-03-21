import React, { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Github, Linkedin, Mail, Instagram } from 'lucide-react'

const AnimatedSection: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
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
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  }

  return (
    <div className="page">
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="profile-hero mobile-friendly">
            <AnimatedSection direction="left" className="profile-image-section mobile-priority" delay={0.1}>
              <motion.div 
                className="profile-photo-container ocean-card liquid-glass"
                whileHover={{ scale: 1.03, rotateY: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/profile-photo.png" 
                  alt="Shi-Xi Tsai"
                  className="profile-photo"
                />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="profile-info" delay={0.2}>
              <motion.h1 
                className="profile-name"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Shi-Xi Tsai
              </motion.h1>
              <p className="profile-nickname">Charles</p>
              <p className="profile-motto">You've got to find what you love.</p>
              
              <div className="social-links mobile-centered">
                {[
                  { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/tsai4c" },
                  { icon: <Instagram size={24} />, href: "https://www.instagram.com/libta_8uh9/" },
                  { icon: <Github size={24} />, href: "https://github.com/tsai4c" },
                  { icon: <Mail size={24} />, href: "mailto:isshixitsai@gmail.com" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
              
              <p className="profile-description mobile-compact">
                Marine Science Student & Part-time Research Assistant at Academia Sinica. 
                Passionate about Kuroshio Current research, focusing on power generation potential 
                and large meander phenomena affecting Taiwan's marine environment.
              </p>
            </AnimatedSection>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatedSection direction="up" className="academic-section" delay={0}>
            <h2>Academic Background</h2>
            <div className="academic-grid">
              {[
                { icon: <GraduationCap className="academic-icon" />, title: "Education", lines: ["Marine Environmental Informatics", "National Taiwan Ocean University"] },
                { icon: <MapPin className="academic-icon" />, title: "Research Focus", lines: ["Kuroshio Power Generation", "Large Meander Phenomena"] },
                { icon: <Calendar className="academic-icon" />, title: "Position", lines: ["Part-time Research Assistant", "Academia Sinica"] },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="academic-item ocean-card liquid-glass"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, rotateY: 2, boxShadow: "0 15px 35px rgba(30, 64, 175, 0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                  <div>
                    <h4>{item.title}</h4>
                    {item.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </motion.div>
      </section>

      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatedSection direction="up" className="skills-section" delay={0}>
            <h2>Professional Skills & Interests</h2>
            <div className="skills-grid">
              {[
                { 
                  title: "Research Skills",
                  skills: ["Ocean Data Analysis", "Current Pattern Studies", "Temperature & Salinity Measurements", "Marine Ecological Surveys"]
                },
                { 
                  title: "Technical Abilities",
                  skills: ["Data Visualization", "Statistical Analysis", "Scientific Writing", "Research Methodology Design"]
                },
                { 
                  title: "Academic Interests",
                  skills: ["Physical Oceanography", "Climate Change Impacts", "Marine Conservation", "Sustainable Ocean Development"]
                },
              ].map((category, index) => (
                <motion.div 
                  key={index}
                  className="skill-category ocean-card liquid-glass"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 40px rgba(30, 64, 175, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="floating-particles">
                    <motion.div 
                      className="particle"
                      animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <motion.div 
                      className="particle"
                      animate={{ y: [10, -10, 10], opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </div>
                  <h3>{category.title}</h3>
                  <ul>
                    {category.skills.map((skill, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </motion.div>
      </section>
    </div>
  )
}

export default About
