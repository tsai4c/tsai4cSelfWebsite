# 🌊 Tsai4c Personal Website

A modern personal website for marine science research, built with React and featuring an ocean-themed design.

## 👋 About

This is the personal website of Shi-Xi Tsai (Charles), a Marine Science Student & Part-time Research Assistant at Academia Sinica, specializing in Kuroshio Current research.

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 8
- **Styling**: CSS3 with liquid glass effects
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Cloudflare Pages

## 🚀 Features

- ✨ Modern liquid glass design
- 🌊 Ocean-themed visual effects
- 📱 Fully responsive design
- 🎯 Single Page Application (SPA)
- 🔍 Search functionality
- 📧 Contact integration
- 🏆 Awards showcase
- 📚 Research focus sections

## 🏃‍♂️ Getting Started

- **前端框架**: React 18
- **構建工具**: Vite
- **動畫庫**: Framer Motion
- **圖標庫**: Lucide React
- **路由**: React Router DOM
- **樣式**: CSS3 (自定義海洋主題)

## 項目結構

```
src/
├── components/         # React 組件
│   ├── Navbar.jsx     # 導航欄
│   ├── Hero.jsx       # 首頁橫幅
│   ├── About.jsx      # 關於我
│   ├── Research.jsx   # 研究領域
│   ├── Projects.jsx   # 專案作品
│   └── Contact.jsx    # 聯絡我
├── App.jsx            # 主應用組件
├── App.css            # 組件樣式
├── index.css          # 全域樣式
└── main.jsx           # 應用入口
```

## 安裝與運行

1. 安裝依賴：
```bash
npm install
```

2. 開發模式運行：
```bash
npm run dev
```

3. 構建生產版本：
```bash
npm run build
```

4. 預覽生產版本：
```bash
npm run preview
```

## 網站內容

### 主要部分

1. **首頁 (Hero)** - 介紹和歡迎訊息
2. **關於我 (About)** - 個人背景和學術經歷
3. **研究 (Research)** - 黑潮研究項目和方法
4. **專案 (Projects)** - 技術項目和工具開發
5. **聯絡 (Contact)** - 聯絡資訊和表單

### 設計主題

- 海洋藍色調配色方案
- 波浪動畫效果
- 玻璃質感設計元素
- 流暢的過場動畫

## 自定義指南

### 更新個人資訊

1. 修改 `src/components/Hero.jsx` 中的姓名和介紹
2. 更新 `src/components/About.jsx` 中的個人背景
3. 替換 `src/components/Contact.jsx` 中的聯絡資訊

### 添加個人照片

在 `src/components/About.jsx` 中的 `.image-placeholder` 部分替換為您的個人照片。

### 更新研究內容

修改 `src/components/Research.jsx` 中的研究項目、方法和發表資訊。

### 添加新專案

在 `src/components/Projects.jsx` 中的 `projects` 陣列添加新的專案資訊。

## 部署建議

### Vercel (推薦)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# 上傳 dist/ 文件夾到 Netlify
```

### GitHub Pages
```bash
npm run build
# 將 dist/ 內容部署到 gh-pages 分支
```

## 瀏覽器支援

- Chrome (推薦)
- Firefox
- Safari
- Edge

## 授權

此項目僅供個人使用。

## 聯絡資訊

如有任何問題或建議，歡迎聯繫：
- Email: your.email@example.com
- GitHub: [您的 GitHub]

---

*探索海洋，研究黑潮，保護我們的藍色星球。*
