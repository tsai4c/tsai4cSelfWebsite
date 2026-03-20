import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, FileText, User, Beaker, Folder, Mail } from 'lucide-react'

interface SearchResult {
  title: string;
  type: string;
  path: string;
  content: string;
  icon: React.ComponentType<{ size?: number }>;
}

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // 搜尋內容數據
  const searchData = [
    // Home page content
    {
      title: "Shi-Xi Tsai - Marine Science Student",
      content: "Marine Science Student & Part-time Research Assistant at Academia Sinica studying Kuroshio Current research oceanography Taiwan",
      path: "/",
      type: "Home",
      icon: User
    },
    // About page content
    {
      title: "About Me",
      content: "marine science student part-time research assistant at Academia Sinica oceanography biology Taiwan university academic background education experience",
      path: "/about",
      type: "About",
      icon: User
    },
    // Research content
    {
      title: "Kuroshio Current Research",
      content: "ocean current research Taiwan Pacific oceanography marine biology current system water temperature salinity marine ecosystem",
      path: "/research",
      type: "Research",
      icon: Beaker
    },
    {
      title: "Marine Biology Studies",
      content: "marine biology ecosystem biodiversity coral reef fisheries sustainable ocean conservation marine life species",
      path: "/research",
      type: "Research", 
      icon: Beaker
    },
    {
      title: "Oceanographic Data Analysis",
      content: "data analysis oceanographic measurements water quality temperature salinity current velocity marine data collection",
      path: "/research",
      type: "Research",
      icon: Beaker
    },
    // Projects content
    {
      title: "Research Projects",
      content: "marine research projects oceanography fieldwork laboratory analysis data visualization scientific methodology",
      path: "/projects",
      type: "Projects",
      icon: Folder
    },
    {
      title: "Ocean Current Monitoring",
      content: "current monitoring system oceanographic instruments data collection real-time measurements marine technology",
      path: "/projects",
      type: "Projects",
      icon: Folder
    },
    {
      title: "Marine Conservation Project",
      content: "conservation marine ecosystem protection sustainability environmental impact assessment marine protected areas",
      path: "/projects",
      type: "Projects",
      icon: Folder
    },
    // Contact content
    {
      title: "Contact Information",
      content: "contact collaboration research opportunities academic partnership marine science networking professional",
      path: "/contact",
      type: "Contact",
      icon: Mail
    }
  ]

  useEffect(() => {
    const performSearch = () => {
      setIsLoading(true)
      
      if (!query.trim()) {
        setResults([])
        setIsLoading(false)
        return
      }

      // 模擬搜尋延遲
      setTimeout(() => {
        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0)
        
        const searchResults = searchData.filter(item => {
          const searchText = `${item.title} ${item.content}`.toLowerCase()
          return searchTerms.some(term => searchText.includes(term))
        }).map(item => {
          // 計算相關性分數
          const searchText = `${item.title} ${item.content}`.toLowerCase()
          let relevanceScore = 0
          
          searchTerms.forEach(term => {
            const titleMatches = (item.title.toLowerCase().match(new RegExp(term, 'g')) || []).length
            const contentMatches = (item.content.toLowerCase().match(new RegExp(term, 'g')) || []).length
            
            relevanceScore += titleMatches * 3 + contentMatches
          })
          
          return { ...item, relevanceScore }
        }).sort((a, b) => b.relevanceScore - a.relevanceScore)

        setResults(searchResults)
        setIsLoading(false)
      }, 300)
    }

    performSearch()
  }, [query])

  const highlightText = (text: string, query: string): string => {
    if (!query.trim()) return text
    
    const terms = query.toLowerCase().split(' ').filter((term: string) => term.length > 0)
    let highlightedText = text
    
    terms.forEach((term: string) => {
      const regex = new RegExp(`(${term})`, 'gi')
      highlightedText = highlightedText.replace(regex, '<mark>$1</mark>')
    })
    
    return highlightedText
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="page">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="page-header"
        >
          <h1 className="page-title">
            <Search className="inline mr-3" size={36} />
            Search Results
          </h1>
          {query && (
            <p className="page-subtitle">
              {isLoading ? 'Searching...' : `${results.length} results found for "${query}"`}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="search-results"
        >
          {!query.trim() ? (
            <motion.div variants={fadeInUp} className="no-query">
              <div className="ocean-card text-center">
                <Search size={48} className="text-ocean-secondary mb-4 mx-auto" />
                <h3>Enter a search term</h3>
                <p className="text-text-secondary">
                  Use the search bar above to find content across my website including research, projects, and more.
                </p>
              </div>
            </motion.div>
          ) : isLoading ? (
            <motion.div variants={fadeInUp} className="loading">
              <div className="ocean-card text-center">
                <div className="loading-spinner mb-4"></div>
                <h3>Searching...</h3>
                <p className="text-text-secondary">Finding relevant content for you.</p>
              </div>
            </motion.div>
          ) : results.length === 0 ? (
            <motion.div variants={fadeInUp} className="no-results">
              <div className="ocean-card text-center">
                <Search size={48} className="text-text-muted mb-4 mx-auto" />
                <h3>No results found</h3>
                <p className="text-text-secondary">
                  No content matches your search for "<strong>{query}</strong>". 
                  Try different keywords or check the spelling.
                </p>
              </div>
            </motion.div>
          ) : (
            results.map((result, index) => {
              const IconComponent = result.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="search-result-item"
                >
                  <Link to={result.path} className="result-link">
                    <div className="ocean-card search-result-card">
                      <div className="result-header">
                        <div className="result-icon">
                          <IconComponent size={24} />
                        </div>
                        <div className="result-meta">
                          <span className="result-type">{result.type}</span>
                        </div>
                      </div>
                      <h3 
                        className="result-title"
                        dangerouslySetInnerHTML={{ 
                          __html: highlightText(result.title, query) 
                        }}
                      />
                      <p 
                        className="result-content"
                        dangerouslySetInnerHTML={{ 
                          __html: highlightText(result.content.substring(0, 200) + '...', query)
                        }}
                      />
                      <div className="result-path">
                        {result.path === '/' ? 'Home' : result.path}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default SearchResults
