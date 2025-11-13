import type { DesignStyle, ColorPalette } from '@/types/design-style'

/**
 * Generates a prompt that can be used with a coding agent to transform
 * a website into the specified design style
 */
export function generateStylePrompt(style: DesignStyle, palette: ColorPalette): string {
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

## Selected Color Scheme: ${palette.name}
Use the following colors for this design:
- Primary: ${palette.colors.primary}
- Secondary: ${palette.colors.secondary}
- Accent: ${palette.colors.accent}
- Background: ${palette.colors.background}
- Surface: ${palette.colors.surface}
- Text: ${palette.colors.text}
- Text Secondary: ${palette.colors.textSecondary}
- Border: ${palette.colors.border}

## Implementation Guidelines
- Update all UI components to match the ${displayName} aesthetic
- Apply the ${palette.name} color scheme consistently throughout
- Apply consistent styling across navigation, buttons, cards, and form elements
- Maintain accessibility standards while implementing the visual style
- Implement using best practices for the project's tech stack to ensure consistent styling
- Ensure responsive design principles are maintained

Please review my existing code and apply this design style comprehensively throughout the application.`
}
