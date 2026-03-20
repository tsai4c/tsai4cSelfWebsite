import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // 重置頁面特效和動畫
    const resetPageEffects = () => {
      // 1. 滾動到頁面頂端
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })

      // 2. 移除所有懸停狀態和焦點
      document.querySelectorAll(':hover').forEach((element: any) => {
        element.blur?.()
      })

      // 3. 重置所有表單輸入
      document.querySelectorAll('input, textarea').forEach((element: any) => {
        element.blur?.()
        element.value = element.defaultValue || ''
      })

      // 4. 移除所有動畫狀態類別
      document.querySelectorAll('[class*="active"], [class*="hover"], [class*="focus"]').forEach((element) => {
        element.classList.forEach((className) => {
          if (className.includes('active') || className.includes('hover') || className.includes('focus')) {
            element.classList.remove(className)
          }
        })
      })

      // 5. 重置 Framer Motion 動畫 - 觸發新的動畫週期
      const main = document.querySelector('main')
      if (main) {
        main.style.opacity = '0'
        setTimeout(() => {
          main.style.opacity = '1'
        }, 0)
      }
    }

    // 使用 setTimeout 確保頁面完全載入後再執行重置
    const timer = setTimeout(resetPageEffects, 10)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default ScrollToTop
