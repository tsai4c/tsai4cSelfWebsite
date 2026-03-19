import React from 'react'
import { motion } from 'framer-motion'
import { Award, Trophy, Medal, Star, Calendar, MapPin } from 'lucide-react'

const Awards: React.FC = () => {
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

  const awards = [
    {
      title: "Outstanding Research Assistant Award",
      organization: "National Taiwan Ocean University",
      date: "2024",
      category: "Academic Excellence",
      description: "Recognized for exceptional contributions to Kuroshio Current research and dedication to marine science studies.",
      icon: <Trophy size={32} />
    },
    {
      title: "Best Student Paper Award",
      organization: "Taiwan Marine Science Conference",
      date: "2024",
      category: "Research Paper",
      description: "Awarded for presenting innovative research on Kuroshio power generation potential at the annual marine science conference.",
      icon: <Award size={32} />
    },
    {
      title: "Marine Science Excellence Scholarship",
      organization: "Marine Science Foundation",
      date: "2023",
      category: "Scholarship",
      description: "Merit-based scholarship for outstanding academic performance and research potential in marine science.",
      icon: <Medal size={32} />
    },
    {
      title: "Young Researcher Recognition",
      organization: "Pacific Ocean Research Institute",
      date: "2023",
      category: "Research Recognition",
      description: "Recognized as a promising young researcher in oceanographic studies focusing on current patterns.",
      icon: <Star size={32} />
    }
  ]

  const certifications = [
    {
      title: "Ocean Data Analysis Certification",
      issuer: "International Oceanographic Institute",
      date: "2024",
      skills: ["Data Processing", "Statistical Analysis", "Ocean Modeling"]
    },
    {
      title: "Marine Research Methodology",
      issuer: "Taiwan Marine Research Center",
      date: "2023",
      skills: ["Field Research", "Data Collection", "Research Design"]
    },
    {
      title: "Scientific Writing & Publication",
      issuer: "Academic Writing Institute",
      date: "2023",
      skills: ["Academic Writing", "Peer Review", "Publication Ethics"]
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
          {/* Page Header */}
          <motion.div variants={itemVariants} className="page-header">
            <h1>Awards & Recognition</h1>
            <p className="page-description">
              Achievements and recognition received throughout my academic and research journey
            </p>
          </motion.div>

          {/* Awards Section */}
          <motion.div variants={itemVariants} className="awards-section">
            <h2>Awards & Honors</h2>
            <div className="awards-grid">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="award-card ocean-card liquid-glass"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="floating-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div>
                  
                  <div className="award-icon">
                    {award.icon}
                  </div>
                  
                  <div className="award-content">
                    <div className="award-header">
                      <h3>{award.title}</h3>
                      <span className="award-category">{award.category}</span>
                    </div>
                    
                    <div className="award-details">
                      <div className="award-info">
                        <MapPin size={16} />
                        <span>{award.organization}</span>
                      </div>
                      <div className="award-info">
                        <Calendar size={16} />
                        <span>{award.date}</span>
                      </div>
                    </div>
                    
                    <p className="award-description">{award.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="certifications-section">
            <h2>Certifications & Training</h2>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-card ocean-card liquid-glass"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="floating-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div>
                  
                  <div className="certification-header">
                    <h3>{cert.title}</h3>
                    <p className="certification-issuer">{cert.issuer}</p>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                  
                  <div className="certification-skills">
                    <h4>Skills Acquired:</h4>
                    <div className="skills-tags">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Future Goals Section */}
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="goals-section">
            <h2>Future Aspirations</h2>
            <div className="goals-content liquid-glass">
              <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <div className="goals-text">
                <h3>Research Excellence Goals</h3>
                <ul>
                  <li>Publish peer-reviewed research on Kuroshio power generation feasibility</li>
                  <li>Complete PhD in Marine Science with focus on renewable ocean energy</li>
                  <li>Collaborate with international research institutions on large meander studies</li>
                  <li>Contribute to sustainable energy policy development in Taiwan</li>
                </ul>
                
                <h3>Professional Development</h3>
                <ul>
                  <li>Obtain advanced certifications in ocean energy systems</li>
                  <li>Lead multi-disciplinary research projects</li>
                  <li>Mentor undergraduate students in marine science research</li>
                  <li>Present findings at international oceanographic conferences</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Awards
