import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'

const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const location = useLocation()

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/research', label: 'Research' },
    { to: '/projects', label: 'Projects' },
    { to: '/awards', label: 'Awards' },
    { to: '/contact', label: 'Contact' },
  ]

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setShowSearch(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery)
      // TODO: Implement search functionality
      setSearchQuery('')
      setShowSearch(false)
      setIsMenuOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (showSearch) setShowSearch(false)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setShowSearch(false)
  }

  return (
    <>
      {/* Mobile Menu Button - Fixed Position */}
      <motion.button
        className="mobile-menu-trigger"
        onClick={toggleMenu}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            
            {/* Dropdown Menu */}
            <motion.div
              className="mobile-menu-dropdown"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.4, 0.0, 0.2, 1] 
              }}
            >
              <div className="mobile-menu-header">
                <div className="mobile-menu-title">Navigation</div>
              </div>
              
              <nav className="mobile-menu-nav">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    className="mobile-menu-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 + 0.1 }}
                  >
                    <Link 
                      to={item.to} 
                      onClick={closeMenu}
                      className={`mobile-menu-link ${location.pathname === item.to ? 'active' : ''}`}
                    >
                      <span className="menu-link-text">{item.label}</span>
                      {location.pathname === item.to && (
                        <motion.div 
                          className="menu-link-indicator"
                          layoutId="mobile-menu-indicator"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Search Section */}
              <motion.div 
                className="mobile-menu-search"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="mobile-search-header">
                  <span>Quick Search</span>
                  <button
                    onClick={() => setShowSearch(!showSearch)}
                    className="search-toggle-btn"
                  >
                    <Search size={18} />
                  </button>
                </div>
                
                <AnimatePresence>
                  {showSearch && (
                    <motion.form 
                      onSubmit={handleSearch} 
                      className="mobile-search-form"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="search-input-wrapper">
                        <input
                          type="text"
                          placeholder="Search content..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="mobile-search-input"
                          autoFocus
                        />
                        {searchQuery && (
                          <button 
                            type="button" 
                            className="search-clear-btn"
                            onClick={() => setSearchQuery('')}
                          >
                            <X size={16} />
                          </button>
                        )}
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
