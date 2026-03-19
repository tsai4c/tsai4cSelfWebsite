import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setShowSearch(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowSearch(false)
      setSearchQuery('')
      closeMobileMenu()
    }
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(e as React.FormEvent)
    }
    if (e.key === 'Escape') {
      setShowSearch(false)
      setSearchQuery('')
    }
  }

  const navItems = [
    { to: '/about', label: 'About' },
    { to: '/research', label: 'Research' },
    { to: '/projects', label: 'Projects' },
    { to: '/awards', label: 'Awards' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="nav-content">
            <motion.div 
              className="nav-brand"
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/" className="brand-link">
                <span className="nav-title cursive-title">Tsai4c</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="nav-links desktop-nav">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className={location.pathname === item.to ? 'active' : ''}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Search and Mobile Menu */}
            <div className="nav-actions">
              <ThemeToggle />
              
              <motion.button
                className="search-button"
                onClick={() => setShowSearch(!showSearch)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle search"
              >
                <Search size={20} />
              </motion.button>

              {/* Mobile Menu Button */}
              <button 
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              className="search-bar"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onKeyDown={handleSearchKeyPress}
                  className="search-input"
                  autoFocus
                />
                <button type="submit" className="search-submit-btn">
                  <Search size={20} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ 
                duration: 0.3, 
                ease: 'easeInOut' 
              }}
            >
              <div className="mobile-nav-header">
                <span className="mobile-nav-title">Menu</span>
                <button 
                  className="mobile-nav-close"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <ul className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link 
                      to={item.to} 
                      onClick={closeMobileMenu} 
                      className={location.pathname === item.to ? 'active' : ''}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Search */}
              <motion.div 
                className="mobile-search"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <form onSubmit={handleSearch} className="mobile-search-form">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="mobile-search-input"
                  />
                  <button type="submit" className="mobile-search-btn">
                    <Search size={20} />
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
