import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, Waves } from 'lucide-react'

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
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you can add form submission logic
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+886 123 456 789',
      href: 'tel:+886123456789'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Address',
      value: 'Keelung City, Taiwan',
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: '#',
      color: '#0077b5'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: '#',
      color: '#333'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      href: 'mailto:your.email@example.com',
      color: '#ea4335'
    }
  ]

  return (
    <section id="contact" className="section wave-background">
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants} className="section-title" style={{ color: 'white' }}>
          Contact Me
        </motion.h2>

        <motion.div variants={itemVariants} className="contact-intro">
          <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Welcome to discuss marine science research topics or any collaboration opportunities. 
            I'm happy to share my research experience and look forward to hearing your thoughts and suggestions.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div variants={itemVariants} className="contact-info">
            <div className="glass-effect contact-card liquid-glass">
              <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <h3>Contact Information</h3>
              <div className="contact-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">{info.label}</span>
                      {info.href ? (
                        <a href={info.href} className="contact-value">
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact-value">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-links">
                <h4>Social Media</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="social-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ borderColor: social.color }}
                    >
                      {social.icon}
                      <span>{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="contact-form">
            <div className="glass-effect contact-card liquid-glass">
              <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <h3>Send Message</h3>
              <form onSubmit={handleSubmit} className="form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter message subject"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="form-textarea"
                    rows={5}
                    placeholder="Enter your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn ocean-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="contact-footer">
          <div className="footer-content liquid-glass">
            <div className="floating-particles">
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <div className="footer-logo">
              <Waves size={32} />
              <span>Shi-Xi Tsai</span>
            </div>
            <p>© 2024 Shi-Xi Tsai. All rights reserved. Exploring oceans, researching Kuroshio, protecting our blue planet.</p>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#research">Research</a>
              <a href="#projects">Projects</a>
              <a href="#awards">Awards</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
