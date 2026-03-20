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

  const contentBlockVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
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

      {/* Awards Hero Section */}
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="contact-hero">
            <h2>Effort Meets Recognition</h2>
            <p className="contact-hero-description">
              The phrase "どりょくせいしゅう" (effort brings success) is reflected here through achievements that acknowledge persistence,
              academic excellence, and dedication to oceanographic research in the face of complex challenges.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Awards 內容區塊 */}
      <section className="section">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={contentBlockVariants}
        >
          <motion.div className="awards-section">
            <h2>Awards & Recognition</h2>
            <div className="awards-grid">
              {awards.map((award, index) => (
                <motion.div 
                  key={index}
                  className="award-card ocean-card liquid-glass"
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

const styles = `
  .awards-section {
    display: flex;
    flex-direction: column;
  }

  .awards-section h2 {
    font-size: 2.5rem;
    font-weight: 600;
    background: linear-gradient(135deg, #1e40af, #3b82f6, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 3rem;
    text-align: center;
    font-family: 'Dancing Script', cursive;
  }

  .awards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .award-card {
    padding: 2rem;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
    align-items: start;
  }

  .award-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .award-icon {
    color: #3b82f6;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .award-meta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .award-category {
    display: inline-block;
    background: linear-gradient(135deg, #1e40af, #3b82f6);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .award-date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .award-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .award-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    line-height: 1.4;
  }

  .award-subtitle {
    font-size: 1.1rem;
    font-weight: 500;
    color: #3b82f6;
    margin: 0;
    font-style: italic;
  }

  .award-organization {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .award-organization svg {
    color: #06b6d4;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }

  .org-chinese {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
  }

  .org-english {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin: 0.25rem 0 0 0;
  }

  .award-description {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    .awards-section h2 {
      font-size: 2rem;
    }

    .award-card {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 1.5rem;
    }

    .award-header {
      flex-direction: row;
      align-items: center;
      gap: 1rem;
    }

    .award-meta {
      flex-direction: row;
      align-items: center;
      gap: 1rem;
    }

    .award-title {
      font-size: 1.25rem;
    }

    .award-subtitle {
      font-size: 1rem;
    }
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.textContent = styles
  if (!document.head.querySelector('style[data-awards-styles]')) {
    styleElement.setAttribute('data-awards-styles', 'true')
    document.head.appendChild(styleElement)
  }
}
