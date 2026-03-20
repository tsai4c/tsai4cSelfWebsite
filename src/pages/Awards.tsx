import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, MapPin } from 'lucide-react'

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
      title: "台北市112學年度畢業生市長獎",
      englishTitle: "Taipei City Mayor's Award for Outstanding Graduate 2024",
      organization: "內湖高中",
      englishOrganization: "Neihu High School",
      date: "2024",
      category: "Academic Excellence",
      description: "Awarded to the most outstanding graduate for exceptional academic performance and leadership qualities.",
      icon: <Award size={32} />
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
                <h2 className="motto-japanese">どりょくせいしゅう</h2>
              </div>
            </div>
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
          {/* Awards Section */}
          <motion.div variants={itemVariants} className="awards-section">
            <h2>Awards & Recognition</h2>
            <div className="awards-grid">
              {awards.map((award, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="award-card ocean-card liquid-glass"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "rgba(30, 64, 175, 0.2) 0 25px 50px -12px"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="floating-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div>
                  <div className="award-header">
                    <div className="award-icon">
                      {award.icon}
                    </div>
                    <div className="award-meta">
                      <span className="award-category">{award.category}</span>
                      <div className="award-date">
                        <Calendar size={16} />
                        <span>{award.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="award-content">
                    <h3 className="award-title">{award.title}</h3>
                    <h4 className="award-subtitle">{award.englishTitle}</h4>
                    
                    <div className="award-organization">
                      <MapPin size={16} />
                      <div>
                        <p className="org-chinese">{award.organization}</p>
                        <p className="org-english">{award.englishOrganization}</p>
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
    </div>
  )
}

export default Awards
