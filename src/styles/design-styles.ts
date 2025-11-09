import type { DesignStyle, DesignStyleName } from '@/types/design-style'

/**
 * Neobrutalism Design Style
 * Characterized by bold borders, shadows, and high contrast
 */
const neobrutalismStyle: DesignStyle = {
  name: 'neobrutalism',
  displayName: 'Neobrutalism',
  card: {
    container: 'border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-yellow-300 rounded-none',
    title: 'font-black text-3xl uppercase tracking-tight text-black',
    content: 'font-bold text-lg text-black',
  },
  navbar: {
    container: 'border-b-4 border-black bg-pink-400 shadow-[0_4px_0px_0px_rgba(0,0,0,1)]',
    select: 'border-4 border-black bg-white font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:ring-4 focus:ring-black',
    text: 'text-black',
    label: 'text-black',
  },
  button: {
    base: 'border-4 border-black font-black uppercase tracking-tight rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all',
    selected: 'bg-yellow-300 text-black',
    unselected: 'bg-white text-black hover:bg-gray-100',
  },
}

/**
 * Art Deco Design Style
 * Characterized by elegant geometric patterns, gold accents, and luxury
 */
const artDecoStyle: DesignStyle = {
  name: 'art-deco',
  displayName: 'Art Deco',
  card: {
    container: 'border border-amber-600 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl rounded-sm relative before:absolute before:inset-0 before:border-2 before:border-amber-500/20 before:rounded-sm',
    title: 'font-serif text-3xl tracking-widest text-amber-400 uppercase border-b-2 border-amber-600/50 pb-2',
    content: 'font-serif text-base text-slate-300 leading-relaxed',
  },
  navbar: {
    container: 'border-b border-amber-600 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg',
    select: 'border border-amber-600 bg-slate-900 text-amber-400 font-serif shadow-md focus:ring-2 focus:ring-amber-500',
    text: 'text-amber-400 font-serif',
    label: 'text-amber-300 font-serif',
  },
  button: {
    base: 'border border-amber-600 font-serif tracking-widest uppercase shadow-lg hover:shadow-xl transition-all rounded-sm',
    selected: 'bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600 text-slate-900 font-bold',
    unselected: 'bg-slate-900 text-amber-400 hover:bg-slate-800',
  },
}

/**
 * Design Style Registry
 * To add a new style: simply add it to this object
 * This follows the Open-Closed Principle
 */
export const designStyleRegistry: Record<DesignStyleName, DesignStyle> = {
  neobrutalism: neobrutalismStyle,
  'art-deco': artDecoStyle,
}

/**
 * Get all available design styles
 */
export const getAvailableStyles = (): DesignStyle[] => {
  return Object.values(designStyleRegistry)
}

/**
 * Get a specific design style by name
 */
export const getDesignStyle = (name: DesignStyleName): DesignStyle => {
  return designStyleRegistry[name]
}
