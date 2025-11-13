import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LayoutSelector } from '@/components/LayoutSelector'
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'

function App() {
  const { currentStyle } = useDesignStyle()

  return (
    <div className={cn("min-h-screen flex flex-col relative", currentStyle.background.body)}>
      {/* Glassmorphism background pattern - covers entire page */}
      {currentStyle.name === 'glassmorphism' && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
          {/* Prominent geometric grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />

          {/* Diagonal stripes overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255, 255, 255, 0.03) 40px, rgba(255, 255, 255, 0.03) 80px)',
          }} />

          {/* Large floating circles with gradients */}
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%)',
              animationDuration: '4s'
            }}
          />
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
              animationDuration: '6s',
              animationDelay: '1s'
            }}
          />
          <div className="absolute -bottom-32 left-1/3 w-[450px] h-[450px] rounded-full blur-3xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.18) 0%, transparent 70%)',
              animationDuration: '5s',
              animationDelay: '2s'
            }}
          />

          {/* Medium geometric shapes */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-white/15 rounded-3xl rotate-45 blur-sm" />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 border-2 border-white/12 rounded-3xl -rotate-12 blur-sm" />
          <div className="absolute top-1/2 right-1/3 w-56 h-56 border border-white/10 rounded-full blur-md" />

          {/* Small solid accent shapes */}
          <div className="absolute top-20 right-1/2 w-40 h-40 bg-white/20 rounded-2xl rotate-12 blur-xl" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-white/15 rounded-full blur-xl" />
          <div className="absolute top-2/3 right-1/4 w-36 h-36 bg-white/18 rounded-3xl -rotate-45 blur-xl" />

          {/* Dot grid pattern for texture */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.12) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />

          {/* Corner accent gradients */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-white/10 to-transparent blur-2xl" />
        </div>
      )}

      <div className="relative z-10">
        <Navbar />
      </div>
      <main className="flex-1 p-4 sm:p-6 md:p-8 relative z-10">
        <div className={cn("max-w-7xl mx-auto p-4 sm:p-6 md:p-8 rounded-lg", currentStyle.background.container)}>
          <LayoutSelector />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default App
