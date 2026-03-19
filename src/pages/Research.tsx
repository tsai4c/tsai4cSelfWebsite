import React from 'react'
import { motion } from 'framer-motion'
import { Battery, MapPin, TrendingUp, Clock } from 'lucide-react'

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

  const ongoingResearch = [
    {
      title: "黑潮洋流發電",
      englishTitle: "Kuroshio Current Power Generation",
      description: "評估利用台灣東部黑潮洋流進行再生能源發電的可行性，包括海流渦輪機配置分析、能源產出計算，以及對海洋生態系統的環境影響評估。研究目標是開發適合台灣海域特性的潔淨能源解決方案。",
      icon: <Battery size={36} />,
      status: "進行中",
      duration: "2024 - 進行中",
      type: "主要研究項目",
      objectives: [
        "評估黑潮洋流能源潛力",
        "海流渦輪機最佳配置研究",
        "環境影響評估與生態保護策略",
        "經濟可行性分析"
      ]
    },
    {
      title: "藍碳軌跡飄移",
      englishTitle: "Blue Carbon Trajectory Drift",
      description: "研究海洋藍碳在洋流作用下的空間分布與遷移模式，探討碳封存機制以及氣候變遷對藍碳生態系統的影響。此研究對於理解海洋碳循環和制定碳中和策略具有重要意義。",
      icon: <MapPin size={36} />,
      status: "數據收集",
      duration: "2024 - 進行中",
      type: "環境研究",
      objectives: [
        "藍碳生態系統空間分布調查",
        "洋流對碳遷移影響分析",
        "碳封存效率評估",
        "氣候變遷適應策略研究"
      ]
    },
    {
      title: "黑潮大蛇行可預報性之評估",
      englishTitle: "Kuroshio Large Meander Predictability Assessment",
      description: "深入分析黑潮大蛇行現象的形成機制與預測可能性，建立數值模型來預報大蛇行的發生時間和路徑變化。此研究對於海洋漁業、航運及沿岸環境管理具有重要應用價值。",
      icon: <TrendingUp size={36} />,
      status: "模型建立",
      duration: "2024 - 進行中",
      type: "預測性研究",
      objectives: [
        "大蛇行現象成因機制分析",
        "數值預報模型開發",
        "預報準確性驗證",
        "漁業與環境管理應用研究"
      ]
    }
  ]

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="page-title">Research</h1>
            <p className="page-subtitle">
              Ongoing Marine Science Research Projects
            </p>
            <p className="hero-description">
              Exploring the dynamics of Taiwan's marine environment through innovative research 
              in ocean current energy, blue carbon systems, and predictive oceanography.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Ongoing Research Section */}
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>進行中研究 | Ongoing Research</h2>
            <p>Current research projects focusing on Taiwan's marine environment and ocean current systems.</p>
          </motion.div>

          <div className="research-grid">
            {ongoingResearch.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="research-card ocean-card liquid-glass"
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
                  <h4 className="research-subtitle">{project.englishTitle}</h4>
                  
                  <div className="research-duration">
                    <Clock size={16} />
                    <span>{project.duration}</span>
                  </div>
                  
                  <p className="research-description">{project.description}</p>
                  
                  <div className="research-objectives">
                    <h5>研究目標 | Research Objectives</h5>
                    <ul>
                      {project.objectives.map((objective, objIndex) => (
                        <li key={objIndex}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Research Philosophy Section */}
      <section className="section">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="research-philosophy">
            <div className="philosophy-content liquid-glass">
              <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <h2>研究理念 | Research Philosophy</h2>
              <blockquote>
                "透過深入研究台灣周邊海域的洋流系統，我們致力於開發永續的海洋能源解決方案，
                同時保護珍貴的海洋生態環境。每項研究都是為了更好地理解海洋、
                利用海洋資源並與海洋和諧共存。"
              </blockquote>
              <cite>- Shi-Xi Tsai</cite>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Research
