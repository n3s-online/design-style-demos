import type { DesignStyle } from '@/types/design-style'

/**
 * Generates a prompt that can be used with a coding agent to transform
 * a website into the specified design style
 */
export function generateStylePrompt(style: DesignStyle): string {
  const { displayName, metadata } = style

  return `Transform my website to use the ${displayName} design style.

## Style Overview
${metadata.description}

## Key Characteristics
${metadata.characteristics.map((char) => `- ${char}`).join('\n')}

## Color Palette
${metadata.colorPalette.map((color) => `- ${color}`).join('\n')}

## Typography
${metadata.typography.map((typo) => `- ${typo}`).join('\n')}

## Implementation Guidelines
- Update all UI components to match the ${displayName} aesthetic
- Apply consistent styling across navigation, buttons, cards, and form elements
- Maintain accessibility standards while implementing the visual style
- Use Tailwind CSS classes where possible for consistency
- Ensure responsive design principles are maintained

Please review my existing code and apply this design style comprehensively throughout the application.`
}
