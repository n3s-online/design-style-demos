import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LayoutSelector } from '@/components/LayoutSelector'
import { ColorPaletteDemo } from '@/components/ColorPaletteDemo'
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'

function App() {
  const { currentStyle } = useDesignStyle()

  return (
    <div className={cn("min-h-screen flex flex-col", currentStyle.background.body)}>
      <Navbar />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className={cn("max-w-7xl mx-auto space-y-4 sm:space-y-6 md:space-y-8")}>
          {/* Color Palette Demo Section */}
          <div className={cn("p-4 sm:p-6 md:p-8 rounded-lg", currentStyle.background.container)}>
            <ColorPaletteDemo />
          </div>

          {/* Main Layout Content */}
          <div className={cn("p-4 sm:p-6 md:p-8 rounded-lg", currentStyle.background.container)}>
            <LayoutSelector />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
