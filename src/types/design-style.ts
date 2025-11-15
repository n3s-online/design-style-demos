/**
 * Design Style Type System
 * Following Open-Closed Principle: open for extension, closed for modification
 */

export type DesignStyleName = 'neobrutalism' | 'bold-minimalism' | 'modern-flat' | 'bento-grid' | 'art-deco' | 'pure-minimalism' | 'glassmorphism' | 'claymorphism' | 'pop-art' | 'y2k' | 'vaporwave' | 'cassette-futurism'

/**
 * Color Palette definition
 * Each design style has 3 color palettes that users can switch between
 */
export interface ColorPalette {
  id: string
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
    border: string
  }
}

/**
 * Interface defining the structure of a design style
 * New styles must implement this interface
 */
export interface DesignStyle {
  name: DesignStyleName
  displayName: string
  colorPalettes: ColorPalette[]
  metadata: {
    description: string
    characteristics: string[]
    colorPalette: string[]
    typography: string[]
  }
  background: {
    body: string
    container: string
  }
  card: {
    container: string
    title: string
    content: string
  }
  navbar: {
    container: string
    select: string
    text: string
    label: string
  }
  button: {
    base: string
    // For style selector dialog
    selected: string
    unselected: string
    // For general button usage
    primary: string
    secondary: string
    outline: string
  }
  input: {
    base: string
    label: string
  }
  textarea: {
    base: string
  }
  checkbox: {
    base: string
    label: string
  }
  switch: {
    base: string
  }
  tabs: {
    list: string
    trigger: string
    triggerActive: string
    triggerInactive: string
    content: string
  }
  accordion: {
    item: string
    trigger: string
    content: string
  }
  alert: {
    base: string
    title: string
    description: string
  }
  badge: {
    base: string
    success: string
    warning: string
    error: string
  }
  progress: {
    container: string
    bar: string
  }
  slider: {
    base: string
  }
  dialog: {
    overlay: string
    content: string
    title: string
    description: string
  }
}
