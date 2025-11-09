/**
 * Design Style Type System
 * Following Open-Closed Principle: open for extension, closed for modification
 */

export type DesignStyleName = 'neobrutalism' | 'art-deco'

/**
 * Interface defining the structure of a design style
 * New styles must implement this interface
 */
export interface DesignStyle {
  name: DesignStyleName
  displayName: string
  card: {
    container: string
    title: string
    content: string
  }
  navbar: {
    container: string
    select: string
  }
}
