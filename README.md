# iPhone 16 Showcase Website

A stunning, interactive 3D website showcasing the iPhone 16 with smooth animations, video carousels, and immersive 3D models. Built with React, Three.js, and GSAP for premium user experience.

## Live Demo

- For live demo go to https://iphone-16-demo.netlify.app/

## ✨ Features

- **3D Interactive Models**: Fully interactive iPhone 16 3D models with color variants
- **Smooth Animations**: GSAP-powered animations with scroll triggers
- **Video Carousel**: Highlight videos showcasing iPhone 16 features
- **Responsive Design**: Optimized for all device sizes
- **Apple Intelligence Integration**: Dedicated section for AI features
- **Camera Control Demo**: Interactive camera control demonstrations
- **Battery & Performance**: Detailed specs and performance metrics
- **Modern UI/UX**: Apple-inspired design language

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: GSAP (GreenSock Animation Platform)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── assets/
│   ├── components/          # React components
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Navbar.jsx      # Navigation
│   │   ├── Highlights.jsx  # Video highlights
│   │   ├── Model.jsx       # 3D model viewer
│   │   ├── Appleai.jsx     # Apple Intelligence section
│   │   ├── Feature.jsx     # Camera features
│   │   ├── Chip.jsx        # A18 chip section
│   │   ├── Battery.jsx     # Battery life section
│   │   └── Footer.jsx      # Footer
│   ├── constrant/          # Constants and data
│   ├── utils/              # Utility functions and exports
│   ├── images/             # Image assets
│   └── videos/             # Video assets
├── App.jsx                 # Main app component
├── App.css                 # Global styles
└── main.jsx               # Entry point

public/
└── models/                 # 3D model files (.glb)
```

## 🎨 Key Components

### Hero Section

- Animated Apple Intelligence logo
- iPhone 16 hero image with zoom effects
- Call-to-action button

### 3D Model Viewer

- Interactive iPhone 16 models
- Multiple color variants (Ultramarine, Teal, Pink, White, Black)
- Size options (6.1" and 6.7")
- Smooth rotation and zoom controls

### Video Carousel

- Highlight videos with custom controls
- Progress indicators
- Auto-play functionality
- Responsive design

### Apple Intelligence

- Dedicated AI features section
- Privacy-focused messaging
- Security illustrations

### Camera Control

- Visual intelligence demonstrations
- Camera system explanations
- Interactive features

## 🎯 Customization

###Fonts
The projects uses Apple's SF PRO font

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  blue: "#2997FF",
  "custom-gray": "#AEB1C3",
  "custom-blue": "#0065cc",
  "custom-purple": "#708DFA",
  "custom-pink": "#D464AE",
  // ... more colors
}
```

### 3D Models

To customize iPhone colors, modify the color arrays in `src/assets/constrant/index.js`:

```javascript
export const models = [
  {
    id: 1,
    title: "iPhone 16 in Ultramarine",
    color: ["#5c6ab4", "#4053a6", "#232b7e", "#4268c3"],
  },
  // more color variants
];
```

### Animations

GSAP animations can be customized in individual components. Key animation utilities are in `src/assets/utils/Animation.js`.

## ⚡ Performance Optimizations

- **Lazy Loading**: 3D models and videos load on demand
- **Optimized Assets**: Compressed images and videos
- **Code Splitting**: Components loaded as needed
- **Smooth Animations**: Hardware-accelerated CSS transforms
- **Efficient Rendering**: React Three Fiber optimizations

## 🙏 Acknowledgments

- Apple for design inspiration
- Three.js community for 3D graphics
- GSAP for smooth animations
- React Three Fiber for React integration

Project Link:(https://github.com/PickMcFlurry/iPhone-16-homepage)

## 📚 References & Credits

### 3D Models

- **iPhone 16 3D Models**: [Source/EV_car2013](https://sketchfab.com/3d-models/iphone-16-ultramarine-fixed-8eb2922b08b44ea78bbbda66a63d68cd)
  - `iphone16.glb` - Main iPhone 16 model

### Assets & Media

- **Videos and images**:
  > Apple product media (images/videos) © Apple Inc.  
  > All rights reserved. Used under fair use for educational demonstration.

### Inspiration & Design

- **Design Language**: Inspired by Apple's official iPhone 16 marketing materials
- **UI/UX Patterns**: Based on Apple's design guidelines
- **Color Palette**: Derived from official iPhone 16 color variants

### Third-Party Libraries

- **Three.js**: 3D graphics library - [threejs.org](https://threejs.org/)
- **React Three Fiber**: React renderer for Three.js - [docs.pmnd.rs/react-three-fiber](https://docs.pmnd.rs/react-three-fiber)
- **GSAP**: Animation library - [greensock.com](https://greensock.com/)
- **Tailwind CSS**: Utility-first CSS framework - [tailwindcss.com](https://tailwindcss.com/)

### Tutorial Credits

This project was built with inspiration and guidance from:

**JavaScript Mastery**

- **Channel**: [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)
- **Specific Video**: [https://www.youtube.com/watch?v=kRQbRAJ4-Fs&t=690s]
- **What I learned**: Advanced React concepts, 3D web development with Three.js, GSAP animations, and modern web development practices

**Note**: This project is for educational/portfolio purposes. All Apple trademarks and product names are property of Apple Inc.

---

⭐ Star this repo if you found it helpful!

# iPhone-16-homepage

# iPhone-16-homepage

# iPhone-16-homepage

# iPhone-16-homepage
