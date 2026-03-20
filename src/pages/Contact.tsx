import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, User, MessageSquare, ExternalLink, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react'

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

  const contentBlockVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
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
      content: "isshixitsai@gmail.com",
      description: "Feel free to reach out for collaboration or research discussions",
      action: "mailto:isshixitsai@gmail.com"
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
      content: "+886-916-339-897",
      description: "Available during business hours",
      action: null
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
                <h2 className="motto-japanese">連絡しましょう</h2>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Hero Section */}
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="contact-hero">
            <h2>Let's Connect</h2>
            <p className="contact-hero-description">
              Whether you're interested in marine research collaboration, have questions about 
              ocean current studies, or want to discuss the future of sustainable marine energy, 
              I'd love to hear from you.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={contentBlockVariants}
        >
          <div className="contact-layout">
            {/* Contact Information Cards */}
            <motion.div variants={itemVariants} className="contact-info-section">
              <h3>Get In Touch</h3>
              
              {/* Social Media Links */}
              <div className="social-links mobile-centered">
                <a href="https://linkedin.com/in/tsai4c" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/libta_8uh9/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram size={24} />
                </a>
                <a href="https://github.com/tsai4c" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={24} />
                </a>
                <a href="https://t.me/tsai4c" target="_blank" rel="noopener noreferrer" className="social-link">
                  <MessageCircle size={24} />
                </a>
              </div>
              
              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-card ocean-card liquid-glass"
                    variants={itemVariants}
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
                    </div>
                    <div className="contact-card-icon">
                      {info.icon}
                    </div>
                    <div className="contact-card-content">
                      <h4>{info.title}</h4>
                      <div className="contact-value">
                        {info.action ? (
                          <a href={info.action} className="contact-link">
                            {info.content}
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          <span>{info.content}</span>
                        )}
                      </div>
                      <p className="contact-desc">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="contact-form-section">
              <div className="contact-form-container ocean-card liquid-glass">
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <div className="form-header">
                  <h3>Send a Message</h3>
                  <p>I typically respond within 24-48 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        <User size={16} />
                        <span>Full Name</span>
                      </label>
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
                      <label htmlFor="email" className="form-label">
                        <Mail size={16} />
                        <span>Email Address</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your.email@domain.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      <MessageSquare size={16} />
                      <span>Subject</span>
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
                    <label htmlFor="message" className="form-label">
                      <MessageSquare size={16} />
                      <span>Message</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="form-textarea"
                      placeholder="Share your thoughts, questions, or collaboration ideas..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className={`form-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      className="success-notification"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="success-icon">✨</div>
                      <div>
                        <h4>Message Sent Successfully!</h4>
                        <p>Thank you for reaching out. I'll get back to you soon.</p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact

const styles = `
  .contact-hero {
    text-align: center;
    margin-bottom: 4rem;
  }

  .contact-hero h2 {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #1e40af, #3b82f6, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
    font-family: 'Dancing Script', cursive;
  }

  .contact-hero-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary);
    max-width: 800px;
    margin: 0 auto;
  }

  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 3rem;
    align-items: start;
  }

  .contact-info-section {
    display: flex;
    flex-direction: column;
  }

  .contact-form-section {
    position: static;
    height: fit-content;
    margin-top: 7.5rem;
  }

  .contact-info-section h3 {
    font-size: 2rem;
    font-weight: 600;
    background: linear-gradient(135deg, #1e40af, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 2rem;
    font-family: 'Dancing Script', cursive;
  }

  .contact-cards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .contact-card {
    padding: 1.5rem;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .contact-card-icon {
    color: #3b82f6;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .contact-card h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .contact-value {
    margin-bottom: 0.75rem;
  }

  .contact-link {
    color: #60a5fa;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .contact-link:hover {
    color: #3b82f6;
    transform: translateX(5px);
  }

  .contact-desc {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    justify-content: center;
  }

  .social-links.mobile-centered {
    justify-content: center;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--text-primary);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .social-link:hover {
    transform: translateY(-3px);
    background: rgba(59, 130, 246, 0.2);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
  }

  .social-link:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.3), transparent);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  .social-link:hover:before {
    opacity: 1;
  }

  .contact-form-section {
    position: static;
    height: fit-content;
  }

  .contact-form-container {
    padding: 2.5rem;
    border-radius: 25px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .form-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-header h3 {
    font-size: 2rem;
    font-weight: 600;
    background: linear-gradient(135deg, #1e40af, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    font-family: 'Dancing Script', cursive;
  }

  .form-header p {
    color: var(--text-secondary);
    font-size: 0.95rem;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-primary);
    font-weight: 500;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
  }

  .form-input, .form-textarea {
    width: 100%;
    padding: 1rem 1.25rem;
    border: 2px solid rgba(30, 64, 175, 0.1);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.9);
    color: var(--text-primary);
    font-size: 1rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-sizing: border-box;
  }

  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: #3b82f6;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  }

  .form-input::placeholder, .form-textarea::placeholder {
    color: var(--text-muted);
  }

  .form-textarea {
    resize: vertical;
    min-height: 120px;
    font-family: inherit;
  }

  .form-submit-btn {
    width: 100%;
    padding: 1.25rem 2rem;
    background: linear-gradient(135deg, #1e40af, #3b82f6);
    color: white;
    border: none;
    border-radius: 15px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    position: relative;
    overflow: hidden;
  }

  .form-submit-btn:not(.submitting):hover {
    background: linear-gradient(135deg, #1e3a8a, #2563eb);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
  }

  .form-submit-btn.submitting {
    background: rgba(59, 130, 246, 0.7);
    cursor: not-allowed;
  }

  .loading-spinner {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(59, 130, 246, 0.3);
    border-top: 2px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .success-notification {
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2));
    border: 1px solid rgba(34, 197, 94, 0.3);
    border-radius: 15px;
    padding: 1.5rem;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    backdrop-filter: blur(10px);
  }

  .success-icon {
    font-size: 1.5rem;
  }

  .success-notification h4 {
    color: #10b981;
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
  }

  .success-notification p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    .contact-hero h2 {
      font-size: 2.5rem;
    }

    .contact-hero-description {
      font-size: 1rem;
    }

    .contact-layout {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .contact-form-section {
      position: static;
      margin-top: 0;
    }

    .contact-form-container {
      padding: 2rem;
      min-height: auto;
    }

    .form-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .form-header h3 {
      font-size: 1.75rem;
    }

    .contact-info-section h3 {
      font-size: 1.75rem;
    }

    .social-links {
      gap: 0.75rem;
      margin-top: 1.5rem;
    }

    .social-link {
      width: 44px;
      height: 44px;
    }
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.textContent = styles
  if (!document.head.querySelector('style[data-contact-styles]')) {
    styleElement.setAttribute('data-contact-styles', 'true')
    document.head.appendChild(styleElement)
  }
}
