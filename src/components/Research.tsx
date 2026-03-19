import React from 'react'
import { motion } from 'framer-motion'
import { Waves, Thermometer, BarChart3, FileText, ExternalLink } from 'lucide-react'

const Research: React.FC = () => {
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

  const researchProjects = [
    {
      title: "Kuroshio Temperature Variation Study",
      description: "Analyzing seasonal temperature variation patterns of the Kuroshio Current and exploring its impacts on Taiwan's eastern waters.",
      icon: <Thermometer size={32} />,
      status: "Ongoing",
      type: "Primary Research"
    },
    {
      title: "Kuroshio Flow Velocity Monitoring",
      description: "Using current meters to monitor Kuroshio flow velocity variations and establish a long-term observational database.",
      icon: <Waves size={32} />,
      status: "Data Collection",
      type: "Long-term Monitoring"
    },
    {
      title: "Marine Ecosystem Correlation Analysis",
      description: "Studying the impacts of Kuroshio variations on surrounding marine life distribution and migration patterns.",
      icon: <BarChart3 size={32} />,
      status: "Analysis Phase",
      type: "Interdisciplinary Research"
    }
  ]

  const publications = [
    {
      title: "Impacts of Kuroshio Current on Temperature Distribution in Taiwan's Eastern Waters",
      journal: "Taiwan Journal of Marine Science",
      year: "2024",
      status: "Under Review"
    },
    {
      title: "Analysis of Kuroshio Variability Trends in the Northwest Pacific",
      journal: "Journal of Oceanic Research",
      year: "2024",
      status: "In Preparation"
    }
  ]

  return (
    <section id="research" className="section" style={{ background: 'var(--bg)' }}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Research
        </motion.h2>

        <motion.div variants={itemVariants} className="research-intro">
          <p>
            My research primarily focuses on the Kuroshio, a world-class warm ocean current. 
            The Kuroshio originates from the eastern Philippines, flows northward along Taiwan's 
            eastern coast, and has significant impacts on Taiwan's climate, fisheries, and marine 
            ecology. Through multifaceted research approaches, I am dedicated to understanding 
            the characteristics and variability of the Kuroshio Current.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="research-focus">
          <h3>Main Research Directions</h3>
          <div className="grid">
            {researchProjects.map((project, index) => (
              <motion.div
                key={index}
                className="research-card ocean-card liquid-glass"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <div className="research-icon">
                  {project.icon}
                </div>
                <div className="research-content">
                  <span className="research-type">{project.type}</span>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="research-meta">
                    <span className={`status ${project.status.replace(/\s/g, '-').toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="research-methods">
          <h3>研究方法與工具</h3>
          <div className="methods-grid">
            <div className="method-card ocean-card">
              <h4>現場觀測</h4>
              <ul>
                <li>CTD溫鹽深儀測量</li>
                <li>ADCP海流剖面儀</li>
                <li>浮標觀測系統</li>
                <li>船舶調查</li>
              </ul>
            </div>

            <div className="method-card ocean-card">
              <h4>數據分析</h4>
              <ul>
                <li>統計分析方法</li>
                <li>時間序列分析</li>
                <li>空間分佈分析</li>
                <li>相關性研究</li>
              </ul>
            </div>

            <div className="method-card ocean-card">
              <h4>模式研究</h4>
              <ul>
                <li>海洋環流模式</li>
                <li>數值模擬</li>
                <li>預測模型建構</li>
                <li>驗證與校正</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="publications-section">
          <h3>研究成果與發表</h3>
          <div className="publications-list">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="publication-item ocean-card"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="publication-content">
                  <FileText className="publication-icon" size={24} />
                  <div className="publication-details">
                    <h4>{pub.title}</h4>
                    <p>{pub.journal} ({pub.year})</p>
                    <span className={`publication-status ${pub.status.replace(/\s/g, '-').toLowerCase()}`}>
                      {pub.status}
                    </span>
                  </div>
                </div>
                <ExternalLink size={16} className="external-link" />
              </motion.div>
            ))}
          </div>

          <div className="research-collaboration">
            <h4>合作機構</h4>
            <div className="collaboration-list">
              <div className="collaboration-item">國立台灣海洋大學</div>
              <div className="collaboration-item">中央研究院環境變遷研究中心</div>
              <div className="collaboration-item">海洋委員會海洋保育署</div>
              <div className="collaboration-item">台灣海洋科技研究中心</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Research
