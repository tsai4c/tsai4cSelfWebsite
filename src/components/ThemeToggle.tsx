import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme, Theme } from '../hooks/useTheme'

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const themes: { value: Theme; icon: React.ReactNode; label: string }[] = [
    { value: 'light', icon: <Sun size={18} />, label: 'Light' },
    { value: 'dark', icon: <Moon size={18} />, label: 'Dark' },
    { value: 'system', icon: <Monitor size={18} />, label: 'System' },
  ]

  const currentThemeIndex = themes.findIndex(t => t.value === theme)
  const nextTheme = themes[(currentThemeIndex + 1) % themes.length]

  const handleThemeChange = () => {
    setTheme(nextTheme.value)
  }

  return (
    <motion.button
      onClick={handleThemeChange}
      className="theme-toggle-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Switch to ${nextTheme.label} mode`}
      aria-label={`Switch to ${nextTheme.label} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {themes.find(t => t.value === theme)?.icon}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
