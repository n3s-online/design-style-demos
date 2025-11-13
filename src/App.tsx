import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LayoutSelector } from '@/components/LayoutSelector'
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'

function App() {
  const { currentStyle } = useDesignStyle()

  return (
    <div className={cn("min-h-screen flex flex-col", currentStyle.background.body)}>
      <Navbar />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className={cn("max-w-7xl mx-auto p-4 sm:p-6 md:p-8 rounded-lg", currentStyle.background.container)}>
          <LayoutSelector />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
