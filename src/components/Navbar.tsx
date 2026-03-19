import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowSearch(false)
      setSearchQuery('')
    }
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(e as React.FormEvent)
    }
  }

  return (
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
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/research" className={location.pathname === '/research' ? 'active' : ''}>Research</Link></li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/awards" className={location.pathname === '/awards' ? 'active' : ''}>Awards</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>

          {/* Search and Mobile Menu */}
          <div className="nav-actions">
            <motion.button
              className="search-button"
              onClick={() => setShowSearch(!showSearch)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={20} />
            </motion.button>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <motion.div
          className="search-bar"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search content..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyPress={handleSearchKeyPress}
              className="search-input"
              autoFocus
            />
            <button type="submit" className="search-submit-btn">
              <Search size={20} />
            </button>
          </form>
        </motion.div>
      )}

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="mobile-nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="nav-links mobile-nav-links">
            <li><Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/research" onClick={closeMobileMenu} className={location.pathname === '/research' ? 'active' : ''}>Research</Link></li>
            <li><Link to="/projects" onClick={closeMobileMenu} className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/awards" onClick={closeMobileMenu} className={location.pathname === '/awards' ? 'active' : ''}>Awards</Link></li>
            <li><Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
