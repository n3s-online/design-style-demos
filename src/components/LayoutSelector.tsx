import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { BaseLayout } from './layouts/BaseLayout'
import { NeobrutalismLayout } from './layouts/NeobrutalismLayout'

/**
 * LayoutSelector Component
 *
 * This component selects and renders the appropriate layout based on the current design style.
 * It follows the Open-Closed Principle: new layouts can be added without modifying existing code.
 *
 * To add a new custom layout:
 * 1. Create the layout component in src/components/layouts/
 * 2. Import it here
 * 3. Add a case for it in the switch statement
 */
export function LayoutSelector() {
  const { currentStyle } = useDesignStyle()

  switch (currentStyle.name) {
    case 'neobrutalism':
      return <NeobrutalismLayout />

    // Default fallback layout
    default:
      return <BaseLayout />
  }
}
