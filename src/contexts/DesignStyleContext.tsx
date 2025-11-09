import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { DesignStyleName, DesignStyle } from '@/types/design-style'
import { getDesignStyle } from '@/styles/design-styles'

const STORAGE_KEY = 'design-style-preference'
const DEFAULT_STYLE: DesignStyleName = 'neobrutalism'

interface DesignStyleContextType {
  currentStyle: DesignStyle
  styleName: DesignStyleName
  setStyleName: (name: DesignStyleName) => void
}

const DesignStyleContext = createContext<DesignStyleContextType | undefined>(undefined)

/**
 * Design Style Provider
 * Manages the current design style and persists to localStorage
 */
export function DesignStyleProvider({ children }: { children: ReactNode }) {
  const [styleName, setStyleNameState] = useState<DesignStyleName>(() => {
    // Load from localStorage on initial render
    const stored = localStorage.getItem(STORAGE_KEY)
    return (stored as DesignStyleName) || DEFAULT_STYLE
  })

  const currentStyle = getDesignStyle(styleName)

  const setStyleName = (name: DesignStyleName) => {
    setStyleNameState(name)
    localStorage.setItem(STORAGE_KEY, name)
  }

  return (
    <DesignStyleContext.Provider value={{ currentStyle, styleName, setStyleName }}>
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
