import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // 滾動到頁面頂端
    // 使用 setTimeout 確保頁面完全載入後再滾動
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // 使用即時滾動，避免平滑滾動過程中的視覺問題
      })
    }, 10) // 短暫延遲確保DOM更新完成

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default ScrollToTop
