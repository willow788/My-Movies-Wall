<div align="center">

# 🎬 My Movies Wall

<img src="./Demonstration/Demo.png" alt="My Movies Wall Demo" width="800" />

### *A nostalgic Windows 95-inspired movie poster gallery*

[![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

---

**[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Customization](#-customization) • [Contributing](#-contributing)**

---

</div>

## ✨ Features

<table>
  <tr>
    <td width="50%">
      
### 🎨 Retro Aesthetic
- Authentic Windows 95 UI design
- Pastel gradient desktop backgrounds
- Classic window chrome with beveled borders
- CRT scanline effects for that vintage vibe

</td>
    <td width="50%">
      
### 🚀 Modern Functionality
- Responsive grid layout
- Smooth hover animations
- Lazy-loading images
- Fallback poster support
- Express.js backend API

</td>
  </tr>
</table>

## 🎭 Demo

The application displays your favorite movies in a stunning retro-themed poster wall, complete with:
- 🖼️ **Grid Layout** – Automatically responsive poster display
- 💫 **Interactive Effects** – Hover to zoom and highlight
- 🎨 **Gradient Overlays** – Subtle pastel effects on posters
- 📱 **Mobile Friendly** – Works on all screen sizes

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/willow788/My-Movies-Wall.git

# Navigate to project directory
cd My-Movies-Wall/code

# Install dependencies
npm install

# Start the server
npm start
```

The application will be running at `http://localhost:3000` 🎉

## 📖 Usage

### Adding Movies

Edit the `code/movies.json` file to add your favorite movies:

```json
[
  {
    "title": "Your Movie Title",
    "poster": "/imgs/your-poster.jpg"
  }
]
```

### File Structure

```
My-Movies-Wall/
├── code/
│   ├── index.html          # Main application UI
│   ├── server.js           # Express server
│   ├── movies.json         # Movie data
│   ├── sync-posters.mjs    # Poster sync utility
│   ├── check-posters.mjs   # Poster validation
│   └── check-sizes.mjs     # Image size checker
├── Demonstration/
│   └── Demo.png            # Screenshot
└── README.md
```

## 🎨 Customization

### Changing Color Scheme

The app uses CSS custom properties for easy theming. Edit these variables in `index.html`:

```css
:root {
  --desktop-1: #ffd6ea;      /* Primary desktop gradient */
  --desktop-2: #d9d9ff;      /* Secondary desktop gradient */
  --desktop-3: #c8f1ff;      /* Tertiary desktop gradient */
  --accent-a: #7c6cff;       /* Purple accent */
  --accent-b: #ff5aa6;       /* Pink accent */
  --accent-c: #3aa7ff;       /* Blue accent */
}
```

### Adjusting Grid Layout

Modify the grid template in the `.wall` class:

```css
.wall {
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 28px;
}
```

## 🔧 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Serves the main HTML page |
| `/api/movies` | GET | Returns JSON array of movies |

## 🌟 Design Highlights

- **Windows 95 Window Chrome** – Authentic beveled borders and shadows
- **Pastel Gradients** – Soft, multi-color backgrounds
- **CRT Effects** – Subtle scanlines for retro authenticity
- **Interactive Posters** – Zoom on hover, click effects
- **Status Bar** – Classic Windows status indicators

## 📸 Screenshots

The demo image shows the complete retro interface with:
- Gradient title bar with rainbow effects
- Fake window controls (minimize, maximize, close)
- Classic menubar (File, Edit, View, Help)
- Grid of movie posters with hover effects
- Sunken status bar at the bottom

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🎉 Open a Pull Request

## 💝 Credits

- **Aesthetic Styling & Design**: Created with assistance from [GitHub Copilot](https://github.com/features/copilot)
- **Retro UI Inspiration**: Windows 95 & vintage operating systems
- **Developer**: [@willow788](https://github.com/willow788)

## 📝 License

This project is licensed under the ISC License.

## 💡 Inspiration

This project combines:
- 90s nostalgia and Windows 95 aesthetic
- Modern web development practices
- Smooth animations and responsive design
- Personal movie collection showcase

---

<div align="center">

### 🎬 Show off your favorite movies in style! 🎬

Made with 💜 by [willow788](https://github.com/willow788)

⭐ Star this repo if you love retro aesthetics! ⭐

</div>