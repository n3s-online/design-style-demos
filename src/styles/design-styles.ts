import type { DesignStyle, DesignStyleName } from '@/types/design-style'

/**
 * Neobrutalism Design Style
 * Characterized by bold borders, shadows, and high contrast
 */
const neobrutalismStyle: DesignStyle = {
  name: 'neobrutalism',
  displayName: 'Neobrutalism',
  metadata: {
    description: 'A bold, unapologetic design style featuring thick borders, hard shadows, and high-contrast colors',
    characteristics: [
      'Thick black borders (4px)',
      'Hard drop shadows with no blur',
      'No rounded corners',
      'Bold, uppercase typography',
      'High contrast color combinations',
      'Playful, energetic aesthetic'
    ],
    colorPalette: [
      'Bright yellows (#fde047)',
      'Pink accents (#f472b6)',
      'Pure black borders',
      'White backgrounds'
    ],
    typography: [
      'Black font weights (900)',
      'Uppercase text for emphasis',
      'Tight letter spacing',
      'Sans-serif fonts'
    ]
  },
  background: {
    body: 'bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100',
    container: 'bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]',
  },
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
    base: 'border-4 border-black rounded-none font-black uppercase tracking-tight transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none',
    // For style selector dialog
    selected: 'bg-yellow-300 text-black',
    unselected: 'bg-white text-black hover:bg-gray-100',
    // For general button usage
    primary: 'bg-cyan-400 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    secondary: 'bg-pink-300 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    outline: 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
  },
  input: {
    base: 'border-4 border-black rounded-none bg-white font-bold text-black placeholder:text-gray-500 focus:ring-4 focus:ring-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    label: 'font-black uppercase tracking-tight text-black',
  },
  textarea: {
    base: 'border-4 border-black rounded-none bg-white font-bold text-black placeholder:text-gray-500 focus:ring-4 focus:ring-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
  },
  checkbox: {
    base: 'border-4 border-black rounded-none w-6 h-6 accent-cyan-400 focus:ring-4 focus:ring-black',
    label: 'font-bold text-black',
  },
  switch: {
    base: 'border-4 border-black rounded-none',
  },
  tabs: {
    list: 'border-4 border-black bg-pink-300 rounded-none p-1 gap-1',
    trigger: 'font-black uppercase tracking-tight text-black border-4 border-black transition-all px-4 py-2',
    triggerActive: 'bg-yellow-300 translate-y-[2px] shadow-none',
    triggerInactive: 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]',
    content: 'border-4 border-black bg-white p-4 mt-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
  },
  accordion: {
    item: 'border-4 border-black bg-yellow-300 mb-2',
    trigger: 'font-black uppercase tracking-tight text-black hover:bg-cyan-400 p-4',
    content: 'font-bold text-black p-4 bg-white border-t-4 border-black',
  },
  alert: {
    base: 'border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4',
    title: 'font-black uppercase tracking-tight text-black',
    description: 'font-bold text-black',
  },
  badge: {
    base: 'border-2 border-black rounded-none font-black uppercase text-xs px-2 py-1',
    success: 'bg-green-400 text-black',
    warning: 'bg-yellow-400 text-black',
    error: 'bg-red-400 text-black',
  },
  progress: {
    container: 'border-4 border-black rounded-none bg-white h-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    bar: 'bg-cyan-400 h-full border-r-4 border-black',
  },
  slider: {
    base: 'accent-cyan-400 h-4 border-2 border-black',
  },
  dialog: {
    overlay: 'bg-black/80',
    content: 'border-4 border-black bg-pink-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none',
    title: 'font-black text-2xl uppercase tracking-tight text-black',
    description: 'font-bold text-black',
  },
}

/**
 * Art Deco Design Style
 * Characterized by elegant geometric patterns, gold accents, and luxury
 */
const artDecoStyle: DesignStyle = {
  name: 'art-deco',
  displayName: 'Art Deco',
  metadata: {
    description: 'An elegant design style inspired by 1920s luxury, featuring geometric patterns, gold accents, and sophisticated typography',
    characteristics: [
      'Geometric patterns and layered borders',
      'Luxurious gradient backgrounds',
      'Gold/amber accent colors',
      'Wide letter spacing',
      'Elegant serif typography',
      'Sophisticated, timeless aesthetic'
    ],
    colorPalette: [
      'Dark slate backgrounds (#0f172a, #1e293b)',
      'Gold/amber accents (#fbbf24, #d97706)',
      'Amber borders and highlights',
      'Subtle gradient overlays'
    ],
    typography: [
      'Serif fonts for elegance',
      'Wide letter spacing (tracking-widest)',
      'Uppercase for dramatic effect',
      'Regular to bold weights'
    ]
  },
  background: {
    body: 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950',
    container: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-amber-600 shadow-2xl shadow-amber-900/20',
  },
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
    base: 'border border-amber-600 rounded-sm font-serif tracking-widest uppercase transition-all hover:shadow-lg hover:shadow-amber-500/20',
    // For style selector dialog
    selected: 'bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600 text-slate-900 font-bold',
    unselected: 'bg-slate-900 text-amber-400 hover:bg-slate-800',
    // For general button usage
    primary: 'bg-gradient-to-r from-amber-600 to-amber-700 text-slate-900 shadow-md hover:from-amber-500 hover:to-amber-600',
    secondary: 'bg-gradient-to-r from-slate-800 to-slate-900 text-amber-400 shadow-md hover:from-slate-700 hover:to-slate-800',
    outline: 'bg-transparent text-amber-400 border-2 border-amber-600 hover:bg-amber-600/10',
  },
  input: {
    base: 'border border-amber-600 rounded-sm bg-slate-900 font-serif text-amber-400 placeholder:text-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-inner',
    label: 'font-serif tracking-wider text-amber-300 uppercase text-sm',
  },
  textarea: {
    base: 'border border-amber-600 rounded-sm bg-slate-900 font-serif text-amber-400 placeholder:text-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-inner',
  },
  checkbox: {
    base: 'border-2 border-amber-600 rounded-sm w-5 h-5 accent-amber-500 focus:ring-2 focus:ring-amber-500 bg-slate-900',
    label: 'font-serif text-slate-300',
  },
  switch: {
    base: 'border border-amber-600',
  },
  tabs: {
    list: 'border border-amber-600 bg-slate-900 rounded-sm p-1 shadow-inner gap-1',
    trigger: 'font-serif tracking-wider text-amber-400 uppercase text-sm border border-amber-600/50 px-4 py-2 transition-all',
    triggerActive: 'bg-gradient-to-r from-amber-600/30 to-amber-700/30 border-amber-600 shadow-md shadow-amber-500/20',
    triggerInactive: 'bg-slate-800/50 hover:bg-slate-800 hover:border-amber-600/70',
    content: 'border border-amber-600 bg-gradient-to-br from-slate-900 to-slate-800 p-6 mt-2 shadow-lg rounded-sm',
  },
  accordion: {
    item: 'border border-amber-600/50 bg-gradient-to-r from-slate-900 to-slate-800 mb-1',
    trigger: 'font-serif tracking-wider text-amber-400 uppercase text-sm hover:bg-amber-600/10 p-4 transition-colors',
    content: 'font-serif text-slate-300 p-4 bg-slate-900/50 border-t border-amber-600/30',
  },
  alert: {
    base: 'border border-amber-600 rounded-sm shadow-lg bg-gradient-to-br from-slate-900 to-slate-800 p-4',
    title: 'font-serif tracking-widest text-amber-400 uppercase',
    description: 'font-serif text-slate-300',
  },
  badge: {
    base: 'border border-amber-600 rounded-full font-serif uppercase text-xs px-3 py-1 tracking-wider shadow-sm',
    success: 'bg-green-900 text-green-300 border-green-600',
    warning: 'bg-yellow-900 text-yellow-300 border-yellow-600',
    error: 'bg-red-900 text-red-300 border-red-600',
  },
  progress: {
    container: 'border border-amber-600 rounded-sm bg-slate-900 h-6 shadow-inner overflow-hidden',
    bar: 'bg-gradient-to-r from-amber-600 to-amber-700 h-full shadow-md',
  },
  slider: {
    base: 'accent-amber-500 h-2 border border-amber-600',
  },
  dialog: {
    overlay: 'bg-black/90',
    content: 'border-2 border-amber-600 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl shadow-amber-500/20 rounded-sm',
    title: 'font-serif text-2xl tracking-widest text-amber-400 uppercase border-b border-amber-600/50 pb-3',
    description: 'font-serif text-slate-300',
  },
}

/**
 * Pure Minimalism Design Style
 * Characterized by extreme simplicity, ample whitespace, and subtle design
 */
const pureMinimalismStyle: DesignStyle = {
  name: 'pure-minimalism',
  displayName: 'Pure Minimalism',
  metadata: {
    description: 'An ultra-clean design style emphasizing whitespace, simplicity, and the bare essentials',
    characteristics: [
      'Abundant whitespace',
      'Minimal color palette',
      'Ultra-thin borders (1px)',
      'Light shadows',
      'Sans-serif typography',
      'Focus on content over decoration'
    ],
    colorPalette: [
      'Pure white backgrounds (#ffffff)',
      'Light gray accents (#f9fafb)',
      'Dark gray text (#111827)',
      'Subtle blue accents (#3b82f6)'
    ],
    typography: [
      'Light font weights (300-400)',
      'Generous line spacing',
      'Sans-serif fonts',
      'Normal case text'
    ]
  },
  background: {
    body: 'bg-white',
    container: 'bg-white border border-gray-100',
  },
  card: {
    container: 'border border-gray-100 bg-white rounded-sm',
    title: 'font-light text-2xl text-gray-900',
    content: 'font-light text-base text-gray-600 leading-relaxed',
  },
  navbar: {
    container: 'border-b border-gray-100 bg-white',
    select: 'border border-gray-200 bg-white text-gray-900 rounded-sm font-light focus:ring-1 focus:ring-blue-500 focus:outline-none',
    text: 'text-gray-900',
    label: 'text-gray-600 font-light',
  },
  button: {
    base: 'border border-gray-200 rounded-sm font-light transition-all hover:border-gray-300',
    // For style selector dialog
    selected: 'bg-gray-900 text-white border-gray-900',
    unselected: 'bg-white text-gray-900 hover:bg-gray-50',
    // For general button usage
    primary: 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800',
    secondary: 'bg-gray-100 text-gray-900 border-gray-200 hover:bg-gray-200',
    outline: 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50',
  },
  input: {
    base: 'border border-gray-200 rounded-sm bg-white text-gray-900 font-light focus:ring-1 focus:ring-blue-500 focus:outline-none',
    label: 'font-light text-gray-600',
  },
  textarea: {
    base: 'border border-gray-200 rounded-sm bg-white text-gray-900 font-light focus:ring-1 focus:ring-blue-500 focus:outline-none',
  },
  checkbox: {
    base: 'border border-gray-300 rounded-sm w-4 h-4 accent-gray-900 focus:ring-1 focus:ring-blue-500',
    label: 'font-light text-gray-600',
  },
  switch: {
    base: 'border border-gray-300 rounded-full',
  },
  tabs: {
    list: 'border-b border-gray-100 bg-white p-0 gap-0',
    trigger: 'font-light text-gray-600 px-4 py-2 transition-all border-b-2',
    triggerActive: 'text-gray-900 border-gray-900',
    triggerInactive: 'border-transparent hover:text-gray-900 hover:border-gray-200',
    content: 'bg-white p-4 mt-2',
  },
  accordion: {
    item: 'border-b border-gray-100 bg-white',
    trigger: 'font-light text-gray-900 hover:text-gray-600 p-4',
    content: 'font-light text-gray-600 p-4 pt-0',
  },
  alert: {
    base: 'border border-gray-200 rounded-sm bg-white p-4',
    title: 'font-normal text-gray-900',
    description: 'font-light text-gray-600',
  },
  badge: {
    base: 'border border-gray-200 rounded-full font-light text-xs px-2 py-0.5',
    success: 'bg-green-50 text-green-700 border-green-200',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    error: 'bg-red-50 text-red-700 border-red-200',
  },
  progress: {
    container: 'border border-gray-200 rounded-full bg-gray-50 h-2 overflow-hidden',
    bar: 'bg-gray-900 h-full',
  },
  slider: {
    base: 'accent-gray-900 h-1',
  },
  dialog: {
    overlay: 'bg-black/20',
    content: 'border border-gray-100 bg-white shadow-xl rounded-sm',
    title: 'font-light text-xl text-gray-900',
    description: 'font-light text-gray-600',
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
  'pure-minimalism': pureMinimalismStyle,
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
