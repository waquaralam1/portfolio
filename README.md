<h1 align="center">🚀 Waquar Alam - Portfolio Website</h1>

<p align="center">
  <a href="https://waquaralam1.github.io/portfolio" target="_blank">
    🌐 <strong>Live Website</strong>
  </a> | Built with ❤️ using React, TypeScript & Tailwind CSS
</p>

---

A modern, responsive portfolio website that reflects the profile, experience, and work of **Waquar Alam**, a passionate Mechanical Engineering student at Aligarh Muslim University, with a focus on sustainability, thermal systems, and innovation.

---

## ✨ Highlights

- ⚡ **Modern UI/UX** with Framer Motion
- 📱 **Fully Responsive** across devices
- 🧠 **7 Dynamic Pages**: Home, About, Projects, Research, Experience, Achievements, Contact
- 📄 **Downloadable Resume** in one click
- 📨 **Functional Contact Form** with validation
- 🔍 **TypeScript Support** for better maintainability

---

## 🛠️ Tech Stack

| Tech           | Description                          |
|----------------|--------------------------------------|
| **React 18**   | Frontend Framework                   |
| **TypeScript** | Strongly-typed JavaScript            |
| **Tailwind CSS** | Utility-first CSS for design        |
| **Vite**       | Blazing-fast build tool              |
| **Framer Motion** | Smooth animations                 |
| **Lucide React** | Icon library                        |
| **React Router DOM** | Routing and navigation          |

---

## 📁 Folder Structure



```
waquar-portfolio/
├── public/
│   ├── Waquar_Alam_Resume.pdf
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   ├── AnimatedSection.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Publications.tsx
│   │   ├── Experience.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   ├── utils/
│   │   └── cn.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Pages Overview

### Home
- Hero section with introduction
- Quick statistics
- Featured work showcase
- Call-to-action buttons

### About
- Personal background and values
- Education timeline
- Research interests
- Key qualities

### Projects
- Multi-evaporator refrigeration system
- Cryogenic cooling research
- 3D printing applications
- ONGC drilling equipment study

### Research/Publications
- Published book chapters (Springer & Wiley)
- ASHRAE-funded research projects
- Research areas and impact

### Experience
- ONGC Internship
- RISE Internship at IIT Jammu
- ASHRAE Social Media Coordinator
- Harvard Aspire Leadership Program
- Swimming Captain
- Mahindra Pride Training

### Achievements
- AEEF Mini Scholarship
- 2nd Rank in Diploma (88.7%)
- ASHRAE Travel Grant Application
- International internship applications

### Contact
- Contact form with validation
- Social media links
- Resume download
- Contact information

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd waquar-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
    900: '#1e3a8a',
  },
}
```

### Animations
Animations are handled through Framer Motion components in `src/components/AnimatedSection.tsx`.

## 📧 Contact Form

The contact form includes:
- Form validation
- Loading states
- Success/error messages
- Email integration ready (connect to EmailJS or Formspree)

## 📄 Resume

Place the resume PDF file in the `public/` directory as `Waquar_Alam_Resume.pdf`.

## 🌐 Deployment

The project is ready for deployment on:
- Vercel (recommended)
- Netlify
- GitHub Pages

## 📝 License

This project is for personal use. All rights reserved.

## 👤 About Waquar Alam

Waquar Alam is a pre-final year Mechanical Engineering student at Aligarh Muslim University with a passion for thermal systems, sustainability, and innovative engineering solutions. He has published research work in Springer and Wiley publications and has experience with various internships and leadership roles.

---

Built with ❤️ by [Your Name]
