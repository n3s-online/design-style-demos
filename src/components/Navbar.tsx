import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { StyleSelectorDialog } from '@/components/StyleSelectorDialog'

export function Navbar() {
  const { currentStyle } = useDesignStyle()

  return (
    <nav className={`px-6 py-4 ${currentStyle.navbar.container}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className={`text-xl font-bold ${currentStyle.navbar.text}`}>Design Style Demos</h1>

        <StyleSelectorDialog
          triggerClassName={`px-4 py-2 font-semibold ${currentStyle.navbar.select}`}
        />
      </div>
    </nav>
  )
}
