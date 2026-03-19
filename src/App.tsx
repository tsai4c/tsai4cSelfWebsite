import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Projects from './pages/Projects'
import Awards from './pages/Awards'
import Contact from './pages/Contact'
import SearchResults from './pages/SearchResults'
import './App.css'

const AppContent: React.FC = () => {
  const location = useLocation()
  const showFooter = location.pathname !== '/'

  return (
    <div className="App">
      <Navbar />
      <MobileMenu />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </motion.main>
      {showFooter && <Footer />}
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
