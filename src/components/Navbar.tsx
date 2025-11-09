import { Select } from '@/components/ui/select'
import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { getAvailableStyles } from '@/styles/design-styles'
import type { DesignStyleName } from '@/types/design-style'

export function Navbar() {
  const { styleName, setStyleName, currentStyle } = useDesignStyle()
  const availableStyles = getAvailableStyles()

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStyleName(event.target.value as DesignStyleName)
  }

  return (
    <nav className={`px-6 py-4 ${currentStyle.navbar.container}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Design Style Demos</h1>

        <div className="flex items-center gap-3">
          <label htmlFor="style-select" className="font-semibold">
            Style:
          </label>
          <Select
            id="style-select"
            value={styleName}
            onChange={handleStyleChange}
            className={currentStyle.navbar.select}
          >
            {availableStyles.map((style) => (
              <option key={style.name} value={style.name}>
                {style.displayName}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </nav>
  )
}
