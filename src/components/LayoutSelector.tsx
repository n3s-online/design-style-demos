import { useDesignStyle } from '@/contexts/DesignStyleContext'
import { BaseLayout } from './layouts/BaseLayout'
import { NeobrutalismLayout } from './layouts/NeobrutalismLayout'
import { ArtDecoLayout } from './layouts/ArtDecoLayout'
import { PureMinimalismLayout } from './layouts/PureMinimalismLayout'
import { GlassmorphismLayout } from './layouts/GlassmorphismLayout'
import { ClaymorphismLayout } from './layouts/ClaymorphismLayout'
import { PopArtLayout } from './layouts/PopArtLayout'
import { Y2KLayout } from './layouts/Y2KLayout'
import { VaporwaveLayout } from './layouts/VaporwaveLayout'
import { BoldMinimalismLayout } from './layouts/BoldMinimalismLayout'
import { ModernFlatLayout } from './layouts/ModernFlatLayout'
import { BentoGridLayout } from './layouts/BentoGridLayout'

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
    case 'art-deco':
      return <ArtDecoLayout />
    case 'pure-minimalism':
      return <PureMinimalismLayout />
    case 'glassmorphism':
      return <GlassmorphismLayout />
    case 'claymorphism':
      return <ClaymorphismLayout />
    case 'pop-art':
      return <PopArtLayout />
    case 'y2k':
      return <Y2KLayout />
    case 'vaporwave':
      return <VaporwaveLayout />
    case 'bold-minimalism':
      return <BoldMinimalismLayout />
    case 'modern-flat':
      return <ModernFlatLayout />
    case 'bento-grid':
      return <BentoGridLayout />

    // Default fallback layout
    default:
      return <BaseLayout />
  }
}
