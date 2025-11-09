import { Navbar } from '@/components/Navbar'
import { StyledCard } from '@/components/StyledCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex items-center justify-center p-8">
        <StyledCard
          title="Hello World"
          content="This card adapts to the selected design style. Try switching between Neobrutalism and Art Deco in the navbar above!"
          className="w-full max-w-md"
        />
      </main>
    </div>
  )
}

export default App
