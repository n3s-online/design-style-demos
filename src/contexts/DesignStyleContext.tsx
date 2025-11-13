import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { DesignStyleName, DesignStyle, ColorPalette } from '@/types/design-style'
import { getDesignStyle } from '@/styles/design-styles'

const STORAGE_KEY = 'design-style-preference'
const PALETTE_STORAGE_KEY = 'color-palette-preference'
const DEFAULT_STYLE: DesignStyleName = 'neobrutalism'

interface DesignStyleContextType {
  currentStyle: DesignStyle
  styleName: DesignStyleName
  setStyleName: (name: DesignStyleName) => void
  currentPalette: ColorPalette
  paletteId: string
  setPaletteId: (id: string) => void
}

const DesignStyleContext = createContext<DesignStyleContextType | undefined>(undefined)

/**
 * Apply color palette as CSS variables to the document root
 */
function applyColorPalette(palette: ColorPalette) {
  const root = document.documentElement
  root.style.setProperty('--color-primary', palette.colors.primary)
  root.style.setProperty('--color-secondary', palette.colors.secondary)
  root.style.setProperty('--color-accent', palette.colors.accent)
  root.style.setProperty('--color-background', palette.colors.background)
  root.style.setProperty('--color-surface', palette.colors.surface)
  root.style.setProperty('--color-text', palette.colors.text)
  root.style.setProperty('--color-text-secondary', palette.colors.textSecondary)
  root.style.setProperty('--color-border', palette.colors.border)
}

/**
 * Design Style Provider
 * Manages the current design style and color palette, persists to localStorage
 */
export function DesignStyleProvider({ children }: { children: ReactNode }) {
  const [styleName, setStyleNameState] = useState<DesignStyleName>(() => {
    // Load from localStorage on initial render
    const stored = localStorage.getItem(STORAGE_KEY)
    return (stored as DesignStyleName) || DEFAULT_STYLE
  })

  const [paletteId, setPaletteIdState] = useState<string>(() => {
    // Load palette preference from localStorage
    const storedPalettes = localStorage.getItem(PALETTE_STORAGE_KEY)
    if (storedPalettes) {
      try {
        const palettesMap = JSON.parse(storedPalettes)
        return palettesMap[styleName] || getDesignStyle(styleName).colorPalettes[0].id
      } catch {
        return getDesignStyle(styleName).colorPalettes[0].id
      }
    }
    return getDesignStyle(styleName).colorPalettes[0].id
  })

  const currentStyle = getDesignStyle(styleName)
  const currentPalette = currentStyle.colorPalettes.find(p => p.id === paletteId) || currentStyle.colorPalettes[0]

  const setStyleName = (name: DesignStyleName) => {
    setStyleNameState(name)
    localStorage.setItem(STORAGE_KEY, name)

    // Load the saved palette for this style, or use the first one
    const storedPalettes = localStorage.getItem(PALETTE_STORAGE_KEY)
    if (storedPalettes) {
      try {
        const palettesMap = JSON.parse(storedPalettes)
        const savedPaletteId = palettesMap[name]
        if (savedPaletteId) {
          setPaletteIdState(savedPaletteId)
          return
        }
      } catch {
        // If parsing fails, continue to default
      }
    }

    // Default to first palette
    const newStyle = getDesignStyle(name)
    setPaletteIdState(newStyle.colorPalettes[0].id)
  }

  const setPaletteId = (id: string) => {
    setPaletteIdState(id)

    // Save palette preference per style
    const storedPalettes = localStorage.getItem(PALETTE_STORAGE_KEY)
    let palettesMap: Record<string, string> = {}

    if (storedPalettes) {
      try {
        palettesMap = JSON.parse(storedPalettes)
      } catch {
        palettesMap = {}
      }
    }

    palettesMap[styleName] = id
    localStorage.setItem(PALETTE_STORAGE_KEY, JSON.stringify(palettesMap))
  }

  // Apply color palette as CSS variables whenever it changes
  useEffect(() => {
    applyColorPalette(currentPalette)
  }, [currentPalette])

  return (
    <DesignStyleContext.Provider value={{ currentStyle, styleName, setStyleName, currentPalette, paletteId, setPaletteId }}>
      {children}
    </DesignStyleContext.Provider>
  )
}

/**
 * Hook to access the current design style
 */
export function useDesignStyle() {
  const context = useContext(DesignStyleContext)
  if (context === undefined) {
    throw new Error('useDesignStyle must be used within a DesignStyleProvider')
  }
  return context
}
