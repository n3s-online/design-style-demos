import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { cn } from '@/lib/utils'

export function ColorPaletteDemo() {
  const { currentStyle, currentPalette } = useDesignStyle()

  const colorSwatches = [
    { name: 'Primary', value: currentPalette.colors.primary, key: 'primary' },
    { name: 'Secondary', value: currentPalette.colors.secondary, key: 'secondary' },
    { name: 'Accent', value: currentPalette.colors.accent, key: 'accent' },
    { name: 'Background', value: currentPalette.colors.background, key: 'background' },
    { name: 'Surface', value: currentPalette.colors.surface, key: 'surface' },
    { name: 'Text', value: currentPalette.colors.text, key: 'text' },
    { name: 'Text Secondary', value: currentPalette.colors.textSecondary, key: 'textSecondary' },
    { name: 'Border', value: currentPalette.colors.border, key: 'border' },
  ]

  return (
    <div className={cn('p-6 space-y-4', currentStyle.card.container)}>
      <h2 className={cn('mb-4', currentStyle.card.title)}>
        Color Palette: {currentPalette.name}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {colorSwatches.map((swatch) => (
          <div key={swatch.key} className="flex flex-col items-center gap-2">
            <div
              className="w-16 h-16 rounded-lg shadow-md border-2"
              style={{
                backgroundColor: swatch.value,
                borderColor: currentPalette.colors.border,
              }}
            />
            <div className="text-center">
              <div className={cn('text-sm font-semibold', currentStyle.card.content)}>
                {swatch.name}
              </div>
              <div className={cn('text-xs opacity-70', currentStyle.card.content)}>
                {swatch.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Demo section with palette colors */}
      <div className="mt-8 space-y-4">
        <h3 className={cn('text-lg font-bold', currentStyle.card.title)}>
          Palette in Action
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Primary color demo */}
          <div
            className="p-4 rounded-lg shadow-md"
            style={{ backgroundColor: currentPalette.colors.primary }}
          >
            <div
              className="font-bold text-sm"
              style={{ color: currentPalette.colors.text }}
            >
              Primary Color
            </div>
          </div>

          {/* Secondary color demo */}
          <div
            className="p-4 rounded-lg shadow-md"
            style={{ backgroundColor: currentPalette.colors.secondary }}
          >
            <div
              className="font-bold text-sm"
              style={{ color: currentPalette.colors.text }}
            >
              Secondary Color
            </div>
          </div>

          {/* Accent color demo */}
          <div
            className="p-4 rounded-lg shadow-md"
            style={{ backgroundColor: currentPalette.colors.accent }}
          >
            <div
              className="font-bold text-sm"
              style={{ color: currentPalette.colors.background }}
            >
              Accent Color
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
