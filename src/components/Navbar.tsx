import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { StyleSelectorDialog } from '@/components/StyleSelectorDialog'
import { PromptDialog } from '@/components/PromptDialog'
import { getAvailableStyles } from '@/styles/design-styles'
import type { DesignStyleName } from '@/types/design-style'

export function Navbar() {
  const { currentStyle, styleName, setStyleName } = useDesignStyle()

  const availableStyles = getAvailableStyles()
  const styleNames: DesignStyleName[] = availableStyles.map((style) => style.name)
  const currentIndex = styleNames.indexOf(styleName)

  const goToPrevious = () => {
    const previousIndex = currentIndex === 0 ? styleNames.length - 1 : currentIndex - 1
    setStyleName(styleNames[previousIndex])
  }

  const goToNext = () => {
    const nextIndex = currentIndex === styleNames.length - 1 ? 0 : currentIndex + 1
    setStyleName(styleNames[nextIndex])
  }

  return (
    <nav className={`px-6 py-4 ${currentStyle.navbar.container}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={goToPrevious}
            className={`px-3 py-2 font-semibold ${currentStyle.navbar.select}`}
            aria-label="Previous design style"
          >
            ←
          </button>
          <h1 className={`text-xl font-bold ${currentStyle.navbar.text}`}>{currentStyle.displayName}</h1>
          <button
            onClick={goToNext}
            className={`px-3 py-2 font-semibold ${currentStyle.navbar.select}`}
            aria-label="Next design style"
          >
            →
          </button>
        </div>

        <div className="flex items-center gap-3">
          <PromptDialog
            triggerClassName={`px-4 py-2 font-semibold ${currentStyle.navbar.select}`}
          />
          <StyleSelectorDialog
            triggerClassName={`px-4 py-2 font-semibold ${currentStyle.navbar.select}`}
          />
        </div>
      </div>
    </nav>
  )
}
