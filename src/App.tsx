import { Navbar } from '@/components/Navbar'
import { ComponentShowcase } from '@/components/ComponentShowcase'
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'

function App() {
  const { currentStyle } = useDesignStyle()

  return (
    <div className={cn("min-h-screen", currentStyle.background.body)}>
      <Navbar />
      <main className="p-8">
        <div className={cn("max-w-7xl mx-auto p-8 rounded-lg", currentStyle.background.container)}>
          <ComponentShowcase />
        </div>
      </main>
    </div>
  )
}

export default App
