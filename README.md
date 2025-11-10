# Design Style Demos

A React showcase demonstrating 8 distinct design styles through an interactive business dashboard. Each theme provides a complete visual experience with custom layouts, components, and imagery.

## 🎨 Available Design Styles

- **Neobrutalism** - Bold geometric shapes, thick borders, high contrast
- **Art Deco** - 1920s luxury, gold accents, geometric elegance
- **Pure Minimalism** - Clean white space, essential elements only
- **Glassmorphism** - Frosted glass effects, translucent surfaces
- **Claymorphism** - Soft 3D clay textures, tactile feel
- **Pop Art** - 1960s comic book style, bold primary colors
- **Y2K** - Early 2000s aesthetic, chrome effects, glossy surfaces
- **Vaporwave** - 80s/90s nostalgia, pastel gradients, dreamy vibes

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library
- **Lucide React** - Icon library

## 📦 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/n3s-online/design-style-demos.git

# Navigate to project directory
cd design-style-demos

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app in action.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui base components
│   ├── layouts/         # Theme-specific layout components
│   ├── Navbar.tsx       # Navigation bar
│   └── Footer.tsx       # Footer component
├── contexts/
│   └── DesignStyleContext.tsx  # Theme management
├── styles/
│   └── design-styles.ts        # Theme definitions
├── types/
│   └── design-style.ts         # TypeScript types
└── App.tsx              # Main application
```

## 🎯 Core Features

Each design theme includes a complete business dashboard with:

- Welcome cards and hero sections
- Interactive forms with validation
- Action buttons and navigation
- Project status indicators with badges
- Tabbed content interfaces
- FAQ accordions
- System notifications and alerts
- Modal dialogs
- Responsive service grids
- Theme-specific imagery and iconography

## 🛠️ Adding a New Theme

This project follows the **Open-Closed Principle** - easily extensible without modifying existing code.

1. **Define the style** in `src/styles/design-styles.ts`
2. **Update types** in `src/types/design-style.ts`
3. **Create layout component** in `src/components/layouts/`
4. **Add theme imagery** to `public/[theme-name]/`
5. **Register in selector** at `src/components/LayoutSelector.tsx`

See `CLAUDE.md` for detailed instructions and best practices.

## 📱 Responsive Design

All themes are fully responsive and tested across:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-theme`)
3. Follow the theme creation guidelines in `CLAUDE.md`
4. Commit your changes (`git commit -m 'Add new theme'`)
5. Push to the branch (`git push origin feature/new-theme`)
6. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for learning and inspiration.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
