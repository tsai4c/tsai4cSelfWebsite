import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Calendar, Send, User, MessageSquare, ExternalLink } from 'lucide-react'

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<string>('')

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模擬提交過程
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "tsai4c@marine.ntou.edu.tw",
      description: "Feel free to reach out for collaboration or research discussions",
      action: "mailto:tsai4c@marine.ntou.edu.tw"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      content: "Keelung, Taiwan",
      description: "National Taiwan Ocean University",
      action: null
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      content: "+886-xxx-xxx-xxx",
      description: "Available during business hours",
      action: null
    },
    {
      icon: <Calendar size={24} />,
      title: "Office Hours",
      content: "Mon-Fri 9:00-17:00",
      description: "Taiwan Standard Time (GMT+8)",
      action: null
    }
  ]

  const collaborationAreas = [
    {
      title: "Research Collaboration",
      description: "Joint research projects on Kuroshio Current studies and marine environmental monitoring",
      topics: ["Ocean Current Analysis", "Temperature Monitoring", "Data Visualization", "Environmental Impact"]
    },
    {
      title: "Technical Development",
      description: "Collaborative development of marine science research tools and data analysis systems",
      topics: ["Web Applications", "Data Processing Tools", "Machine Learning Models", "API Development"]
    },
    {
      title: "Academic Exchange",
      description: "Academic discussions, conference participation, and knowledge sharing in marine science",
      topics: ["Conference Presentations", "Paper Collaboration", "Peer Review", "Knowledge Sharing"]
    },
    {
      title: "Educational Outreach",
      description: "Marine science education and public outreach activities to promote ocean awareness",
      topics: ["Science Communication", "Educational Content", "Public Lectures", "Community Engagement"]
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
          <div className="contact-grid">
            <motion.div variants={itemVariants} className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                I'm always excited to connect with fellow researchers, students, 
                and anyone passionate about marine science. Whether you're interested 
                in collaboration, have questions about my research, or just want to 
                discuss the fascinating world of ocean currents, feel free to reach out!
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-method ocean-card liquid-glass"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="floating-particles">
                      <div className="particle"></div>
                      <div className="particle"></div>
                    </div>
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      <p className="contact-content">
                        {info.action ? (
                          <a href={info.action} className="contact-link">
                            {info.content}
                            <ExternalLink size={16} />
                          </a>
                        ) : (
                          info.content
                        )}
                      </p>
                      <p className="contact-description">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-form-container">
              <div className="ocean-card liquid-glass contact-form-wrapper">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <h2>Send a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        <User size={16} />
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        <Mail size={16} />
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">
                      <MessageSquare size={16} />
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">
                      <MessageSquare size={16} />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder="Tell me more about your inquiry or collaboration idea..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      className="success-message"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      ✅ Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
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
          <motion.div variants={itemVariants} className="collaboration-section">
            <h2>Collaboration Opportunities</h2>
            <p className="collaboration-intro">
              I'm always looking for opportunities to collaborate on meaningful projects 
              that advance our understanding of marine ecosystems and contribute to ocean conservation.
            </p>

            <div className="collaboration-grid">
              {collaborationAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="collaboration-card ocean-card liquid-glass"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "rgba(30, 64, 175, 0.2) 0 25px 50px -12px"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="floating-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <div className="collaboration-topics">
                    {area.topics.map((topic, tIndex) => (
                      <span key={tIndex} className="topic-tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="response-info">
            <div className="ocean-card liquid-glass response-card">
              <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <h3>Response Time</h3>
              <p>
                I typically respond to emails within 24-48 hours during weekdays. 
                For urgent research collaborations or time-sensitive matters, 
                please indicate the urgency in your subject line.
              </p>
              <div className="response-tips">
                <h4>Tips for Better Communication:</h4>
                <ul>
                  <li>Be specific about your research interests or collaboration goals</li>
                  <li>Include relevant background information about your work</li>
                  <li>Mention any specific timelines or deadlines</li>
                  <li>Feel free to attach relevant papers or project descriptions</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact
