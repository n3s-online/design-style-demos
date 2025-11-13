import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { StyleSelectorDialog } from '@/components/StyleSelectorDialog'
import { PromptDialog } from '@/components/PromptDialog'
import { HowThisWorksDialog } from '@/components/HowThisWorksDialog'
import { getAvailableStyles } from '@/styles/design-styles'
import type { DesignStyleName } from '@/types/design-style'

export function Navbar() {
  const { currentStyle, styleName, setStyleName, paletteId, setPaletteId } = useDesignStyle()

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
    <nav className={`px-3 sm:px-6 py-3 sm:py-4 ${currentStyle.navbar.container}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:justify-between">
        <h1 className={`text-lg sm:text-xl font-bold ${currentStyle.navbar.text}`}>{currentStyle.displayName}</h1>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {/* Color Palette Selector */}
          <div className="flex items-center gap-1 sm:gap-2">
            <span className={`text-xs sm:text-sm ${currentStyle.navbar.label} hidden md:inline`}>Colors:</span>
            <div className="flex gap-1">
              {currentStyle.colorPalettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => setPaletteId(palette.id)}
                  className={`px-2 py-1 sm:px-3 sm:py-2 text-xs font-semibold transition-all ${currentStyle.navbar.select} ${
                    paletteId === palette.id ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                  }`}
                  aria-label={`Switch to ${palette.name} color palette`}
                  title={palette.name}
                >
                  {palette.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden sm:block w-px h-6 bg-current opacity-20" />

          <HowThisWorksDialog
            triggerClassName={`px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold ${currentStyle.navbar.select}`}
          />
          <PromptDialog
            triggerClassName={`px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold ${currentStyle.navbar.select}`}
          />
          <StyleSelectorDialog
            triggerClassName={`px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold ${currentStyle.navbar.select}`}
          />
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={goToPrevious}
              className={`px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-base font-semibold ${currentStyle.navbar.select}`}
              aria-label="Previous design style"
            >
              ←
            </button>
            <button
              onClick={goToNext}
              className={`px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-base font-semibold ${currentStyle.navbar.select}`}
              aria-label="Next design style"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
