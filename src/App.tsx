import { Navbar } from '@/components/Navbar'
import { ComponentShowcase } from '@/components/ComponentShowcase'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-8">
        <ComponentShowcase />
      </main>
    </div>
  )
}

export default App
