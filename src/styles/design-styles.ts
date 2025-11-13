import type { DesignStyle, DesignStyleName } from '@/types/design-style'

/**
 * Neobrutalism Design Style
 * Characterized by bold borders, shadows, and high contrast
 */
const neobrutalismStyle: DesignStyle = {
  name: 'neobrutalism',
  displayName: 'Neobrutalism',
  colorPalettes: [
    {
      id: 'sunny',
      name: 'Sunny',
      colors: {
        primary: '#fde047',
        secondary: '#f472b6',
        accent: '#06b6d4',
        background: '#ffffff',
        surface: '#fde047',
        text: '#000000',
        textSecondary: '#374151',
        border: '#000000'
      }
    },
    {
      id: 'ocean',
      name: 'Ocean',
      colors: {
        primary: '#06b6d4',
        secondary: '#3b82f6',
        accent: '#a855f7',
        background: '#ffffff',
        surface: '#06b6d4',
        text: '#000000',
        textSecondary: '#374151',
        border: '#000000'
      }
    },
    {
      id: 'forest',
      name: 'Forest',
      colors: {
        primary: '#10b981',
        secondary: '#84cc16',
        accent: '#f59e0b',
        background: '#ffffff',
        surface: '#10b981',
        text: '#000000',
        textSecondary: '#374151',
        border: '#000000'
      }
    }
  ],
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
    container: 'bg-palette-background border-4 border-palette-border shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]',
  },
  card: {
    container: 'border-4 border-palette-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-palette-surface rounded-none',
    title: 'font-black text-3xl uppercase tracking-tight text-palette-text',
    content: 'font-bold text-lg text-palette-text',
  },
  navbar: {
    container: 'border-b-4 border-palette-border bg-palette-secondary shadow-[0_4px_0px_0px_rgba(0,0,0,1)]',
    select: 'border-4 border-palette-border bg-palette-background font-bold text-palette-text shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:ring-4 focus:ring-palette-border',
    text: 'text-palette-text',
    label: 'text-palette-text',
  },
  button: {
    base: 'border-4 border-palette-border rounded-none font-black uppercase tracking-tight transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none',
    // For style selector dialog
    selected: 'bg-palette-surface text-palette-text',
    unselected: 'bg-palette-background text-palette-text hover:bg-gray-100',
    // For general button usage
    primary: 'bg-palette-accent text-palette-text shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    secondary: 'bg-palette-secondary text-palette-text shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    outline: 'bg-palette-background text-palette-text shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
  },
  input: {
    base: 'border-4 border-palette-border rounded-none bg-palette-background font-bold text-palette-text placeholder:text-gray-500 focus:ring-4 focus:ring-palette-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    label: 'font-black uppercase tracking-tight text-palette-text',
  },
  textarea: {
    base: 'border-4 border-palette-border rounded-none bg-palette-background font-bold text-palette-text placeholder:text-gray-500 focus:ring-4 focus:ring-palette-border focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
  },
  checkbox: {
    base: 'border-4 border-palette-border rounded-none w-6 h-6 accent-palette-accent focus:ring-4 focus:ring-palette-border',
    label: 'font-bold text-palette-text',
  },
  switch: {
    base: 'border-4 border-palette-border rounded-none',
  },
  tabs: {
    list: 'border-4 border-palette-border bg-palette-secondary rounded-none p-1 gap-1',
    trigger: 'font-black uppercase tracking-tight text-palette-text border-4 border-palette-border transition-all px-4 py-2',
    triggerActive: 'bg-palette-surface translate-y-[2px] shadow-none',
    triggerInactive: 'bg-palette-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]',
    content: 'border-4 border-palette-border bg-palette-background p-4 mt-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
  },
  accordion: {
    item: 'border-4 border-palette-border bg-palette-surface mb-2',
    trigger: 'font-black uppercase tracking-tight text-palette-text hover:bg-palette-accent p-4',
    content: 'font-bold text-palette-text p-4 bg-palette-background border-t-4 border-palette-border',
  },
  alert: {
    base: 'border-4 border-palette-border rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4',
    title: 'font-black uppercase tracking-tight text-palette-text',
    description: 'font-bold text-palette-text',
  },
  badge: {
    base: 'border-2 border-palette-border rounded-none font-black uppercase text-xs px-2 py-1',
    success: 'bg-green-400 text-black',
    warning: 'bg-palette-surface text-palette-text',
    error: 'bg-red-400 text-black',
  },
  progress: {
    container: 'border-4 border-palette-border rounded-none bg-palette-background h-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    bar: 'bg-palette-accent h-full border-r-4 border-palette-border',
  },
  slider: {
    base: 'accent-palette-accent h-4 border-2 border-palette-border',
  },
  dialog: {
    overlay: 'bg-black/80',
    content: 'border-4 border-palette-border bg-palette-secondary shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none',
    title: 'font-black text-2xl uppercase tracking-tight text-palette-text',
    description: 'font-bold text-palette-text',
  },
}

/**
 * Art Deco Design Style
 * Characterized by elegant geometric patterns, gold accents, and luxury
 */
const artDecoStyle: DesignStyle = {
  name: 'art-deco',
  displayName: 'Art Deco',
  colorPalettes: [
    {
      id: 'golden',
      name: 'Golden',
      colors: {
        primary: '#d4af37',      // Classic gold
        secondary: '#8b7355',    // Bronze
        accent: '#ffd700',       // Bright gold
        background: '#1a1410',   // Deep brown-black
        surface: '#2a2118',      // Rich brown
        text: '#f5deb3',         // Wheat/champagne
        textSecondary: '#c4a876', // Muted gold
        border: '#d4af37'        // Gold border
      }
    },
    {
      id: 'silver',
      name: 'Silver',
      colors: {
        primary: '#c0c0c0',      // Pure silver
        secondary: '#8c92ac',    // Steel blue
        accent: '#e8e8e8',       // Bright silver
        background: '#0a0a0f',   // Deep navy-black
        surface: '#1a1a24',      // Midnight blue
        text: '#e6e6fa',         // Lavender-white
        textSecondary: '#9d9daa', // Silver-gray
        border: '#c0c0c0'        // Silver border
      }
    },
    {
      id: 'ruby',
      name: 'Ruby',
      colors: {
        primary: '#e0115f',      // Ruby red
        secondary: '#8b0000',    // Dark red
        accent: '#ff1f8f',       // Hot pink
        background: '#150a0a',   // Deep wine-black
        surface: '#2a1414',      // Dark burgundy
        text: '#ffc0cb',         // Light pink
        textSecondary: '#d4a5a5', // Rose
        border: '#e0115f'        // Ruby border
      }
    }
  ],
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
    container: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-palette-border shadow-2xl shadow-amber-900/20',
  },
  card: {
    container: 'border border-palette-border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl rounded-sm relative before:absolute before:inset-0 before:border-2 before:border-amber-500/20 before:rounded-sm',
    title: 'font-serif text-3xl tracking-widest text-palette-text uppercase border-b-2 border-palette-border/50 pb-2',
    content: 'font-serif text-base text-palette-text-secondary leading-relaxed',
  },
  navbar: {
    container: 'border-b border-palette-border bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg',
    select: 'border border-palette-border bg-palette-surface text-palette-text font-serif shadow-md focus:ring-2 focus:ring-amber-500',
    text: 'text-palette-text font-serif',
    label: 'text-amber-300 font-serif',
  },
  button: {
    base: 'border border-palette-border rounded-sm font-serif tracking-widest uppercase transition-all hover:shadow-lg hover:shadow-amber-500/20',
    // For style selector dialog
    selected: 'bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600 text-slate-900 font-bold',
    unselected: 'bg-palette-surface text-palette-text hover:bg-palette-background',
    // For general button usage
    primary: 'bg-gradient-to-r from-amber-600 to-amber-700 text-slate-900 shadow-md hover:from-amber-500 hover:to-amber-600',
    secondary: 'bg-gradient-to-r from-slate-800 to-slate-900 text-palette-text shadow-md hover:from-slate-700 hover:to-slate-800',
    outline: 'bg-transparent text-palette-text border-2 border-palette-border hover:bg-palette-primary/10',
  },
  input: {
    base: 'border border-palette-border rounded-sm bg-palette-surface font-serif text-palette-text placeholder:text-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-inner',
    label: 'font-serif tracking-wider text-amber-300 uppercase text-sm',
  },
  textarea: {
    base: 'border border-palette-border rounded-sm bg-palette-surface font-serif text-palette-text placeholder:text-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-inner',
  },
  checkbox: {
    base: 'border-2 border-palette-border rounded-sm w-5 h-5 accent-palette-accent focus:ring-2 focus:ring-amber-500 bg-palette-surface',
    label: 'font-serif text-palette-text-secondary',
  },
  switch: {
    base: 'border border-palette-border',
  },
  tabs: {
    list: 'border border-palette-border bg-palette-surface rounded-sm p-1 shadow-inner gap-1',
    trigger: 'font-serif tracking-wider text-palette-text uppercase text-sm border border-palette-border/50 px-4 py-2 transition-all',
    triggerActive: 'bg-gradient-to-r from-amber-600/30 to-amber-700/30 border-palette-border shadow-md shadow-amber-500/20',
    triggerInactive: 'bg-palette-background/50 hover:bg-palette-background hover:border-palette-border/70',
    content: 'border border-palette-border bg-gradient-to-br from-slate-900 to-slate-800 p-6 mt-2 shadow-lg rounded-sm',
  },
  accordion: {
    item: 'border border-palette-border/50 bg-gradient-to-r from-slate-900 to-slate-800 mb-1',
    trigger: 'font-serif tracking-wider text-palette-text uppercase text-sm hover:bg-palette-primary/10 p-4 transition-colors',
    content: 'font-serif text-palette-text-secondary p-4 bg-palette-surface/50 border-t border-palette-border/30',
  },
  alert: {
    base: 'border border-palette-border rounded-sm shadow-lg bg-gradient-to-br from-slate-900 to-slate-800 p-4',
    title: 'font-serif tracking-widest text-palette-text uppercase',
    description: 'font-serif text-palette-text-secondary',
  },
  badge: {
    base: 'border border-palette-border rounded-full font-serif uppercase text-xs px-3 py-1 tracking-wider shadow-sm',
    success: 'bg-green-900 text-green-300 border-green-600',
    warning: 'bg-yellow-900 text-yellow-300 border-yellow-600',
    error: 'bg-red-900 text-red-300 border-red-600',
  },
  progress: {
    container: 'border border-palette-border rounded-sm bg-palette-surface h-6 shadow-inner overflow-hidden',
    bar: 'bg-gradient-to-r from-amber-600 to-amber-700 h-full shadow-md',
  },
  slider: {
    base: 'accent-palette-accent h-2 border border-palette-border',
  },
  dialog: {
    overlay: 'bg-black/90',
    content: 'border-2 border-palette-border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl shadow-amber-500/20 rounded-sm',
    title: 'font-serif text-2xl tracking-widest text-palette-text uppercase border-b border-palette-border/50 pb-3',
    description: 'font-serif text-palette-text-secondary',
  },
}

/**
 * Pure Minimalism Design Style
 * Characterized by extreme simplicity, ample whitespace, and subtle design
 */
const pureMinimalismStyle: DesignStyle = {
  name: 'pure-minimalism',
  displayName: 'Pure Minimalism',
  colorPalettes: [
    {
      id: 'monochrome',
      name: 'Monochrome',
      colors: {
        primary: '#000000',      // Pure black
        secondary: '#404040',    // Dark gray
        accent: '#666666',       // Medium gray
        background: '#ffffff',   // Pure white
        surface: '#fafafa',      // Off-white
        text: '#000000',         // Black text
        textSecondary: '#737373', // Gray text
        border: '#e5e5e5'        // Light gray border
      }
    },
    {
      id: 'warm',
      name: 'Warm',
      colors: {
        primary: '#2c2218',      // Deep warm gray
        secondary: '#5c4a3a',    // Warm brown
        accent: '#8b7355',       // Light brown
        background: '#fffef9',   // Warm white
        surface: '#faf8f3',      // Cream
        text: '#2c2218',         // Warm black
        textSecondary: '#6b5d4f', // Warm gray
        border: '#e8e2d8'        // Warm border
      }
    },
    {
      id: 'cool',
      name: 'Cool',
      colors: {
        primary: '#1a2332',      // Deep blue-gray
        secondary: '#384a5e',    // Blue gray
        accent: '#5a7a9a',       // Light blue gray
        background: '#f8fafb',   // Cool white
        surface: '#f0f4f7',      // Light blue-white
        text: '#1a2332',         // Cool black
        textSecondary: '#546b84', // Blue-gray text
        border: '#d9e2ec'        // Cool border
      }
    }
  ],
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
    title: 'font-light text-2xl text-palette-text',
    content: 'font-light text-base text-gray-600 leading-relaxed',
  },
  navbar: {
    container: 'border-b border-gray-100 bg-white',
    select: 'border border-gray-200 bg-white text-palette-text rounded-sm font-light focus:ring-1 focus:ring-blue-500 focus:outline-none',
    text: 'text-palette-text',
    label: 'text-gray-600 font-light',
  },
  button: {
    base: 'border border-gray-200 rounded-sm font-light transition-all hover:border-gray-300',
    // For style selector dialog
    selected: 'bg-gray-900 text-palette-text border-gray-900',
    unselected: 'bg-white text-palette-text hover:bg-gray-50',
    // For general button usage
    primary: 'bg-gray-900 text-palette-text border-gray-900 hover:bg-gray-800',
    secondary: 'bg-gray-100 text-palette-text border-gray-200 hover:bg-gray-200',
    outline: 'bg-white text-palette-text border-gray-300 hover:bg-gray-50',
  },
  input: {
    base: 'border border-gray-200 rounded-sm bg-white text-palette-text font-light focus:ring-1 focus:ring-blue-500 focus:outline-none',
    label: 'font-light text-gray-600',
  },
  textarea: {
    base: 'border border-gray-200 rounded-sm bg-white text-palette-text font-light focus:ring-1 focus:ring-blue-500 focus:outline-none',
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
    triggerActive: 'text-palette-text border-gray-900',
    triggerInactive: 'border-transparent hover:text-palette-text hover:border-gray-200',
    content: 'bg-white p-4 mt-2',
  },
  accordion: {
    item: 'border-b border-gray-100 bg-white',
    trigger: 'font-light text-palette-text hover:text-gray-600 p-4',
    content: 'font-light text-gray-600 p-4 pt-0',
  },
  alert: {
    base: 'border border-gray-200 rounded-sm bg-white p-4',
    title: 'font-normal text-palette-text',
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
    title: 'font-light text-xl text-palette-text',
    description: 'font-light text-gray-600',
  },
}

/**
 * Glassmorphism Design Style
 * Characterized by frosted glass effects, transparency, and blur
 */
const glassmorphismStyle: DesignStyle = {
  name: 'glassmorphism',
  displayName: 'Glassmorphism',
  colorPalettes: [
    {
      id: 'aurora',
      name: 'Aurora',
      colors: {
        primary: '#8b5cf6',      // Purple
        secondary: '#3b82f6',    // Blue
        accent: '#06b6d4',       // Cyan
        background: '#1e1b4b',   // Deep purple background
        surface: 'rgba(139, 92, 246, 0.15)', // Purple glass tint
        text: '#ffffff',         // White text on dark bg
        textSecondary: 'rgba(255, 255, 255, 0.85)', // Slightly transparent white
        border: 'rgba(139, 92, 246, 0.3)' // Purple border
      }
    },
    {
      id: 'sunset',
      name: 'Sunset',
      colors: {
        primary: '#f97316',      // Orange
        secondary: '#ec4899',    // Pink
        accent: '#f59e0b',       // Amber
        background: '#7c2d12',   // Deep orange-brown background
        surface: 'rgba(249, 115, 22, 0.15)', // Orange glass tint
        text: '#ffffff',         // White text on dark bg
        textSecondary: 'rgba(255, 255, 255, 0.85)', // Slightly transparent white
        border: 'rgba(249, 115, 22, 0.3)' // Orange border
      }
    },
    {
      id: 'ocean',
      name: 'Ocean',
      colors: {
        primary: '#06b6d4',      // Cyan
        secondary: '#0ea5e9',    // Sky blue
        accent: '#14b8a6',       // Teal
        background: '#082f49',   // Deep ocean blue background
        surface: 'rgba(6, 182, 212, 0.15)', // Cyan glass tint
        text: '#ffffff',         // White text on dark bg
        textSecondary: 'rgba(255, 255, 255, 0.85)', // Slightly transparent white
        border: 'rgba(6, 182, 212, 0.3)' // Cyan border
      }
    }
  ],
  metadata: {
    description: 'A modern design style featuring frosted glass effects, transparency, and beautiful blur',
    characteristics: [
      'Frosted glass effect (backdrop-blur)',
      'Semi-transparent backgrounds',
      'Light, subtle borders',
      'Colorful gradient backgrounds',
      'Soft shadows',
      'Floating, layered elements'
    ],
    colorPalette: [
      'Vibrant gradients (pink, purple, blue)',
      'Semi-transparent whites (rgba)',
      'Colorful accents',
      'Light borders with transparency'
    ],
    typography: [
      'Medium font weights (400-500)',
      'Sans-serif fonts',
      'White or dark text for contrast',
      'Clean, modern styling'
    ]
  },
  background: {
    body: 'bg-gradient-to-br from-pink-300 via-purple-300 to-blue-400',
    container: 'bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl',
  },
  card: {
    container: 'bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl',
    title: 'font-semibold text-2xl text-palette-text',
    content: 'font-normal text-base text-palette-text/90 leading-relaxed',
  },
  navbar: {
    container: 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg',
    select: 'bg-white/20 backdrop-blur-md border border-white/30 text-palette-text rounded-lg font-medium focus:ring-2 focus:ring-white/50 focus:outline-none',
    text: 'text-palette-text',
    label: 'text-palette-text/90 font-medium',
  },
  button: {
    base: 'backdrop-blur-md border border-white/30 rounded-xl font-medium transition-all hover:bg-white/20 hover:shadow-lg',
    // For style selector dialog
    selected: 'bg-purple-500/40 text-palette-text border-purple-400/60 shadow-lg backdrop-blur-md',
    unselected: 'bg-purple-900/30 text-purple-100 border-purple-400/40 hover:bg-purple-800/40 backdrop-blur-md',
    // For general button usage
    primary: 'bg-white/20 text-palette-text border-white/40 hover:bg-white/30 shadow-md',
    secondary: 'bg-purple-500/30 text-palette-text border-palette-border/50 hover:bg-purple-500/40 shadow-md',
    outline: 'bg-transparent text-palette-text border-white/50 hover:bg-white/10',
  },
  input: {
    base: 'bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-palette-text placeholder:text-palette-text/60 focus:ring-2 focus:ring-white/50 focus:outline-none',
    label: 'font-medium text-palette-text/90',
  },
  textarea: {
    base: 'bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-palette-text placeholder:text-palette-text/60 focus:ring-2 focus:ring-white/50 focus:outline-none',
  },
  checkbox: {
    base: 'border-2 border-white/50 rounded w-4 h-4 accent-white focus:ring-2 focus:ring-white/50 bg-white/10',
    label: 'font-medium text-palette-text/90',
  },
  switch: {
    base: 'border border-white/30 bg-white/10',
  },
  tabs: {
    list: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-1 gap-1',
    trigger: 'font-medium text-palette-text/70 px-4 py-2 rounded-lg transition-all',
    triggerActive: 'bg-white/30 text-palette-text shadow-md',
    triggerInactive: 'hover:bg-white/10 hover:text-palette-text',
    content: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mt-2 shadow-lg',
  },
  accordion: {
    item: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-xl mb-2 overflow-hidden',
    trigger: 'font-medium text-palette-text hover:bg-white/10 p-4 transition-colors',
    content: 'font-normal text-palette-text/90 p-4 bg-white/5 border-t border-white/20',
  },
  alert: {
    base: 'bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-4',
    title: 'font-semibold text-palette-text',
    description: 'font-normal text-palette-text/90',
  },
  badge: {
    base: 'bg-white/20 backdrop-blur-sm border border-white/30 rounded-full font-medium text-xs px-3 py-1',
    success: 'bg-green-500/30 text-palette-text border-green-300/50',
    warning: 'bg-yellow-500/30 text-palette-text border-yellow-300/50',
    error: 'bg-palette-primary/30 text-palette-text border-red-300/50',
  },
  progress: {
    container: 'bg-white/10 backdrop-blur-sm border border-white/20 rounded-full h-3 overflow-hidden',
    bar: 'bg-gradient-to-r from-pink-400 to-purple-500 h-full shadow-md',
  },
  slider: {
    base: 'accent-white h-2',
  },
  dialog: {
    overlay: 'bg-black/60 backdrop-blur-md',
    content: 'bg-white border border-purple-400/60 shadow-2xl rounded-2xl',
    title: 'font-semibold text-xl text-palette-text',
    description: 'font-normal text-palette-text-secondary',
  },
}

/**
 * Claymorphism Design Style
 * Characterized by soft, clay-like 3D elements with inflated appearance
 */
const claymorphismStyle: DesignStyle = {
  name: 'claymorphism',
  displayName: 'Claymorphism',
  colorPalettes: [
    {
      id: 'terracotta',
      name: 'Terracotta',
      colors: {
        primary: '#e07856',      // Warm terracotta
        secondary: '#c85a3a',    // Burnt orange
        accent: '#f4a261',       // Sandy peach
        background: '#fef6f1',   // Warm off-white
        surface: '#f9e9dd',      // Light terracotta
        text: '#5d3a1a',         // Deep brown
        textSecondary: '#8b5a3c', // Medium brown
        border: '#e8b298'        // Soft terracotta border
      }
    },
    {
      id: 'lavender',
      name: 'Lavender',
      colors: {
        primary: '#b197fc',      // Soft lavender
        secondary: '#9775fa',    // Medium purple
        accent: '#d0bfff',       // Light lavender
        background: '#f8f5ff',   // Lavender white
        surface: '#ede5ff',      // Pale lavender
        text: '#4c2b85',         // Deep purple
        textSecondary: '#6741b8', // Medium purple
        border: '#c9b4f5'        // Lavender border
      }
    },
    {
      id: 'sage',
      name: 'Sage',
      colors: {
        primary: '#8fb996',      // Soft sage
        secondary: '#6e9e7a',    // Medium sage
        accent: '#b8d4be',       // Light mint
        background: '#f5f9f6',   // Sage white
        surface: '#e7f2ea',      // Pale sage
        text: '#2d4a34',         // Deep forest green
        textSecondary: '#4a6b52', // Medium green
        border: '#a8c9b0'        // Sage border
      }
    }
  ],
  metadata: {
    description: 'A playful design style featuring soft, clay-like 3D elements with a puffy, inflated appearance',
    characteristics: [
      'Soft, puffy 3D elements',
      'Double shadows (inner and outer)',
      'Rounded, smooth corners',
      'Clay-like texture',
      'Pastel color palette',
      'Inflated, tactile appearance'
    ],
    colorPalette: [
      'Soft pastels (peach, mint, lavender)',
      'Light backgrounds',
      'Muted, warm tones',
      'Subtle color variations'
    ],
    typography: [
      'Rounded, soft fonts',
      'Medium font weights',
      'Sans-serif typefaces',
      'Friendly, approachable styling'
    ]
  },
  background: {
    body: 'bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50',
    container: 'bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.8),inset_8px_8px_16px_rgba(0,0,0,0.1),8px_8px_16px_rgba(0,0,0,0.1)]',
  },
  card: {
    container: 'bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.7),inset_5px_5px_10px_rgba(0,0,0,0.1),8px_8px_20px_rgba(0,0,0,0.15)]',
    title: 'font-bold text-2xl text-palette-text',
    content: 'font-normal text-base text-purple-800 leading-relaxed',
  },
  navbar: {
    container: 'bg-gradient-to-r from-pink-100 to-purple-100 border-b-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)]',
    select: 'bg-gradient-to-br from-white to-pink-50 text-palette-text rounded-2xl font-medium shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.8),inset_3px_3px_6px_rgba(0,0,0,0.1)] focus:ring-0 focus:outline-none',
    text: 'text-palette-text',
    label: 'text-purple-800 font-medium',
  },
  button: {
    base: 'rounded-2xl font-semibold transition-all shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.8),inset_3px_3px_6px_rgba(0,0,0,0.1),4px_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.8),inset_2px_2px_4px_rgba(0,0,0,0.1),6px_6px_12px_rgba(0,0,0,0.12)] active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]',
    // For style selector dialog
    selected: 'bg-gradient-to-br from-purple-300 to-pink-300 text-palette-text',
    unselected: 'bg-gradient-to-br from-purple-100 to-pink-100 text-purple-800 hover:from-purple-200 hover:to-pink-200',
    // For general button usage
    primary: 'bg-gradient-to-br from-purple-300 to-pink-300 text-palette-text',
    secondary: 'bg-gradient-to-br from-orange-200 to-yellow-200 text-orange-900',
    outline: 'bg-gradient-to-br from-white to-purple-50 text-purple-800',
  },
  input: {
    base: 'bg-gradient-to-br from-white to-purple-50 rounded-2xl text-palette-text placeholder:text-purple-400 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.12),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]',
    label: 'font-semibold text-purple-800',
  },
  textarea: {
    base: 'bg-gradient-to-br from-white to-purple-50 rounded-2xl text-palette-text placeholder:text-purple-400 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.12),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]',
  },
  checkbox: {
    base: 'rounded-md w-5 h-5 accent-purple-400 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] focus:ring-0',
    label: 'font-medium text-purple-800',
  },
  switch: {
    base: 'rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)]',
  },
  tabs: {
    list: 'bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-2 gap-2 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.08)]',
    trigger: 'font-semibold text-palette-text-secondary px-4 py-2 rounded-2xl transition-all',
    triggerActive: 'bg-gradient-to-br from-purple-300 to-pink-300 text-palette-text shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.7),4px_4px_8px_rgba(0,0,0,0.1)]',
    triggerInactive: 'hover:bg-gradient-to-br hover:from-purple-200 hover:to-pink-200',
    content: 'bg-gradient-to-br from-white to-purple-50 rounded-3xl p-6 mt-2 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.8),inset_4px_4px_8px_rgba(0,0,0,0.08),8px_8px_16px_rgba(0,0,0,0.08)]',
  },
  accordion: {
    item: 'bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-3 overflow-hidden shadow-[4px_4px_12px_rgba(0,0,0,0.1)]',
    trigger: 'font-semibold text-palette-text hover:bg-palette-surface/50 p-4 transition-colors',
    content: 'font-normal text-purple-800 p-4 bg-gradient-to-br from-white to-purple-50',
  },
  alert: {
    base: 'bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.8),inset_4px_4px_8px_rgba(0,0,0,0.08),8px_8px_16px_rgba(0,0,0,0.1)] p-4',
    title: 'font-bold text-palette-text',
    description: 'font-normal text-purple-800',
  },
  badge: {
    base: 'rounded-full font-semibold text-xs px-3 py-1 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.8),inset_2px_2px_4px_rgba(0,0,0,0.1)]',
    success: 'bg-gradient-to-br from-green-200 to-emerald-200 text-green-900',
    warning: 'bg-gradient-to-br from-yellow-200 to-orange-200 text-orange-900',
    error: 'bg-gradient-to-br from-red-200 to-pink-200 text-red-900',
  },
  progress: {
    container: 'bg-gradient-to-r from-purple-100 to-pink-100 rounded-full h-4 overflow-hidden shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1)]',
    bar: 'bg-gradient-to-r from-purple-400 to-pink-400 h-full shadow-[2px_0_4px_rgba(0,0,0,0.1)]',
  },
  slider: {
    base: 'accent-purple-400 h-2 rounded-full',
  },
  dialog: {
    overlay: 'bg-purple-900/30 backdrop-blur-sm',
    content: 'bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.8),inset_8px_8px_16px_rgba(0,0,0,0.1),12px_12px_24px_rgba(0,0,0,0.15)]',
    title: 'font-bold text-xl text-palette-text',
    description: 'font-normal text-purple-800',
  },
}

/**
 * Pop Art Design Style
 * Characterized by bold colors, comic book aesthetics, and 1960s retro style
 */
const popArtStyle: DesignStyle = {
  name: 'pop-art',
  displayName: 'Pop Art',
  colorPalettes: [
    {
      id: 'comic',
      name: 'Comic',
      colors: {
        primary: '#ef4444',      // Bright red
        secondary: '#3b82f6',    // Blue
        accent: '#fbbf24',       // Yellow
        background: '#fef3c7',   // Light yellow bg
        surface: '#fed7aa',      // Peach surface
        text: '#1a1a1a',         // Near black
        textSecondary: '#374151', // Dark gray
        border: '#000000'        // Black borders
      }
    },
    {
      id: 'retro',
      name: 'Retro',
      colors: {
        primary: '#ec4899',      // Hot pink
        secondary: '#f97316',    // Orange
        accent: '#06b6d4',       // Cyan
        background: '#fdf2f8',   // Light pink bg
        surface: '#fbcfe8',      // Pink surface
        text: '#1a1a1a',         // Near black
        textSecondary: '#374151', // Dark gray
        border: '#000000'        // Black borders
      }
    },
    {
      id: 'neon',
      name: 'Neon',
      colors: {
        primary: '#a855f7',      // Purple
        secondary: '#22c55e',    // Green
        accent: '#eab308',       // Yellow
        background: '#faf5ff',   // Light purple bg
        surface: '#e9d5ff',      // Lavender surface
        text: '#1a1a1a',         // Near black
        textSecondary: '#374151', // Dark gray
        border: '#000000'        // Black borders
      }
    }
  ],
  metadata: {
    description: 'A vibrant design style inspired by 1960s pop art, featuring bold colors, comic aesthetics, and high contrast',
    characteristics: [
      'Bold, vibrant primary colors',
      'High contrast combinations',
      'Thick black outlines',
      'Comic book aesthetics',
      'Retro 1960s style',
      'Playful, energetic vibe'
    ],
    colorPalette: [
      'Bright red (#ef4444)',
      'Electric blue (#3b82f6)',
      'Vivid yellow (#facc15)',
      'Hot pink (#ec4899)',
      'Black outlines'
    ],
    typography: [
      'Bold, heavy fonts',
      'Uppercase for emphasis',
      'Comic-style lettering',
      'Black font weights'
    ]
  },
  background: {
    body: 'bg-gradient-to-br from-yellow-300 via-pink-400 to-blue-400',
    container: 'bg-palette-surface border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
  },
  card: {
    container: 'bg-palette-primary border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none',
    title: 'font-black text-2xl uppercase text-palette-text [text-shadow:3px_3px_0px_rgba(0,0,0,1)]',
    content: 'font-bold text-base text-palette-text leading-relaxed',
  },
  navbar: {
    container: 'bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 border-b-4 border-black',
    select: 'bg-white border-4 border-black text-black font-black rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:ring-0 focus:outline-none',
    text: 'text-palette-text font-black [text-shadow:2px_2px_0px_rgba(0,0,0,1)]',
    label: 'text-palette-text font-black [text-shadow:2px_2px_0px_rgba(0,0,0,1)]',
  },
  button: {
    base: 'border-4 border-black rounded-none font-black uppercase transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none',
    // For style selector dialog
    selected: 'bg-palette-surface text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    unselected: 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-100',
    // For general button usage
    primary: 'bg-palette-primary text-palette-text shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [text-shadow:2px_2px_0px_rgba(0,0,0,0.3)]',
    secondary: 'bg-palette-secondary text-palette-text shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [text-shadow:2px_2px_0px_rgba(0,0,0,0.3)]',
    outline: 'bg-palette-surface text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
  },
  input: {
    base: 'bg-white border-4 border-black rounded-none text-black font-bold placeholder:text-gray-600 focus:ring-0 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    label: 'font-black uppercase text-black',
  },
  textarea: {
    base: 'bg-white border-4 border-black rounded-none text-black font-bold placeholder:text-gray-600 focus:ring-0 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
  },
  checkbox: {
    base: 'border-4 border-black rounded-none w-6 h-6 accent-palette-accent focus:ring-0',
    label: 'font-bold text-black',
  },
  switch: {
    base: 'border-4 border-black rounded-none',
  },
  tabs: {
    list: 'bg-palette-secondary border-4 border-black p-1 gap-1 rounded-none',
    trigger: 'font-black uppercase text-black px-4 py-2 border-4 border-black transition-all',
    triggerActive: 'bg-palette-surface shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)]',
    triggerInactive: 'bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]',
    content: 'bg-white border-4 border-black p-6 mt-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none',
  },
  accordion: {
    item: 'bg-palette-secondary border-4 border-black mb-2 rounded-none',
    trigger: 'font-black uppercase text-palette-text hover:bg-blue-600 p-4 [text-shadow:2px_2px_0px_rgba(0,0,0,0.3)]',
    content: 'font-bold text-black p-4 bg-palette-surface border-t-4 border-black',
  },
  alert: {
    base: 'border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 rounded-none',
    title: 'font-black uppercase text-black',
    description: 'font-bold text-black',
  },
  badge: {
    base: 'border-3 border-black rounded-none font-black uppercase text-xs px-2 py-1',
    success: 'bg-green-400 text-black',
    warning: 'bg-palette-surface text-black',
    error: 'bg-palette-primary text-palette-text',
  },
  progress: {
    container: 'bg-white border-4 border-black h-8 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    bar: 'bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 h-full border-r-4 border-black',
  },
  slider: {
    base: 'accent-palette-accent h-4 border-2 border-black',
  },
  dialog: {
    overlay: 'bg-black/60',
    content: 'bg-palette-surface border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none',
    title: 'font-black text-2xl uppercase text-black',
    description: 'font-bold text-black',
  },
}

/**
 * Y2K Aesthetic Design Style
 * Characterized by bright colors, chrome effects, and early 2000s web design
 */
const y2kStyle: DesignStyle = {
  name: 'y2k',
  displayName: 'Y2K Aesthetic',
  colorPalettes: [
    {
      id: 'cyber',
      name: 'Cyber',
      colors: {
        primary: '#84cc16',
        secondary: '#ec4899',
        accent: '#38bdf8',
        background: '#f0f9ff',
        surface: '#e0f2fe',
        text: '#0369a1',
        textSecondary: '#ffffff',
        border: '#38bdf8'
      }
    },
    {
      id: 'candy',
      name: 'Candy',
      colors: {
        primary: '#f0abfc',
        secondary: '#fbbf24',
        accent: '#fb923c',
        background: '#fef3c7',
        surface: '#fde68a',
        text: '#92400e',
        textSecondary: '#ffffff',
        border: '#f0abfc'
      }
    },
    {
      id: 'chrome',
      name: 'Chrome',
      colors: {
        primary: '#cbd5e1',
        secondary: '#94a3b8',
        accent: '#06b6d4',
        background: '#f8fafc',
        surface: '#e2e8f0',
        text: '#0f172a',
        textSecondary: '#ffffff',
        border: '#cbd5e1'
      }
    }
  ],
  metadata: {
    description: 'A nostalgic design style inspired by early 2000s internet culture, featuring chrome effects, bright colors, and glossy aesthetics',
    characteristics: [
      'Metallic chrome/silver effects',
      'Bright bubblegum colors',
      'Glossy, reflective surfaces',
      '3D and chunky typography',
      'Lime green and hot pink',
      'Pixel art and low-fi graphics'
    ],
    colorPalette: [
      'Chrome silver/white (#f0f0f0)',
      'Lime green (#84cc16)',
      'Hot pink (#ff0080)',
      'Sky blue (#38bdf8)',
      'Bright orange (#fb923c)'
    ],
    typography: [
      'Chunky, rounded fonts',
      'Bold, playful styling',
      '3D effects',
      'Glossy gradients'
    ]
  },
  background: {
    body: 'bg-gradient-to-br from-sky-200 via-pink-200 to-lime-200',
    container: 'bg-gradient-to-br from-white via-gray-50 to-sky-50 border-2 border-palette-border shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.1)]',
  },
  card: {
    container: 'bg-gradient-to-br from-pink-400 to-pink-300 border-2 border-white shadow-[inset_0_2px_0_rgba(255,255,255,0.6),4px_4px_0_rgba(0,0,0,0.15)] rounded-2xl',
    title: 'font-black text-2xl text-sky-700',
    content: 'font-bold text-base text-sky-900 leading-relaxed',
  },
  navbar: {
    container: 'bg-gradient-to-r from-lime-400 via-sky-300 to-pink-400 border-b-2 border-white shadow-[0_4px_0_rgba(255,255,255,0.4)]',
    select: 'bg-white border-2 border-palette-border text-palette-text font-black rounded-xl shadow-[inset_0_2px_0_rgba(255,255,255,1),0_4px_0_rgba(0,0,0,0.1)] focus:ring-2 focus:ring-pink-400 focus:outline-none',
    text: 'text-palette-text font-black',
    label: 'text-palette-text font-black',
  },
  button: {
    base: 'border-2 rounded-2xl font-black transition-all shadow-[inset_0_2px_0_rgba(255,255,255,0.5),0_4px_0_rgba(0,0,0,0.2)] hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.5),0_6px_0_rgba(0,0,0,0.25)] hover:translate-y-[-2px] active:translate-y-0 active:shadow-[inset_0_2px_0_rgba(255,255,255,0.5),0_2px_0_rgba(0,0,0,0.2)]',
    // For style selector dialog
    selected: 'bg-gradient-to-br from-lime-400 to-lime-500 text-palette-text border-lime-300',
    unselected: 'bg-gradient-to-br from-sky-300 to-sky-400 text-palette-text border-sky-200 hover:from-sky-400 hover:to-sky-500',
    // For general button usage
    primary: 'bg-gradient-to-br from-pink-400 to-pink-500 text-palette-text border-palette-border',
    secondary: 'bg-gradient-to-br from-lime-400 to-lime-500 text-palette-text border-lime-300',
    outline: 'bg-white text-palette-text border-palette-border',
  },
  input: {
    base: 'bg-white border-2 border-palette-border rounded-xl text-sky-900 font-bold placeholder:text-sky-300 focus:ring-2 focus:ring-pink-400 focus:outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]',
    label: 'font-black text-palette-text',
  },
  textarea: {
    base: 'bg-white border-2 border-palette-border rounded-xl text-sky-900 font-bold placeholder:text-sky-300 focus:ring-2 focus:ring-pink-400 focus:outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]',
  },
  checkbox: {
    base: 'border-2 border-palette-border rounded w-5 h-5 accent-palette-accent focus:ring-2 focus:ring-pink-400 bg-white',
    label: 'font-bold text-sky-700',
  },
  switch: {
    base: 'border-2 border-palette-border shadow-[0_2px_0_rgba(0,0,0,0.1)]',
  },
  tabs: {
    list: 'bg-gradient-to-r from-lime-300 to-sky-300 border-2 border-white rounded-2xl p-2 gap-2 shadow-[inset_0_2px_0_rgba(255,255,255,0.4)]',
    trigger: 'font-black text-palette-text px-4 py-2 rounded-xl transition-all border-2',
    triggerActive: 'bg-white text-palette-primary border-palette-border shadow-[inset_0_2px_0_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.1)]',
    triggerInactive: 'border-transparent hover:bg-white/20',
    content: 'bg-white border-2 border-sky-300 rounded-2xl p-6 mt-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)]',
  },
  accordion: {
    item: 'bg-gradient-to-br from-sky-300 to-sky-400 border-2 border-white rounded-2xl mb-2 overflow-hidden shadow-[0_4px_0_rgba(0,0,0,0.1)]',
    trigger: 'font-black text-palette-text hover:bg-sky-500/50 p-4',
    content: 'font-bold text-sky-900 p-4 bg-white border-t-2 border-sky-200',
  },
  alert: {
    base: 'bg-gradient-to-br from-pink-300 to-pink-400 border-2 border-white rounded-2xl shadow-[inset_0_2px_0_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.1)] p-4',
    title: 'font-black text-sky-700',
    description: 'font-bold text-sky-800',
  },
  badge: {
    base: 'border-2 rounded-full font-black text-xs px-3 py-1 shadow-[0_2px_0_rgba(0,0,0,0.1)]',
    success: 'bg-gradient-to-br from-lime-400 to-lime-500 text-palette-text border-lime-300',
    warning: 'bg-gradient-to-br from-orange-400 to-orange-500 text-palette-text border-orange-300',
    error: 'bg-gradient-to-br from-pink-400 to-pink-500 text-palette-text border-palette-border',
  },
  progress: {
    container: 'bg-white border-2 border-palette-border rounded-full h-4 overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]',
    bar: 'bg-gradient-to-r from-pink-400 via-lime-400 to-sky-400 h-full shadow-[0_0_8px_rgba(236,72,153,0.4)]',
  },
  slider: {
    base: 'accent-palette-accent h-2',
  },
  dialog: {
    overlay: 'bg-palette-secondary/40 backdrop-blur-sm',
    content: 'bg-gradient-to-br from-white via-sky-50 to-pink-50 border-2 border-palette-border rounded-2xl shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(0,0,0,0.15)]',
    title: 'font-black text-xl text-palette-primary',
    description: 'font-bold text-sky-700',
  },
}

/**
 * Vaporwave Design Style
 * Characterized by dreamy pastels, 90s nostalgia, and soft aesthetic
 */
const vaporwaveStyle: DesignStyle = {
  name: 'vaporwave',
  displayName: 'Vaporwave',
  colorPalettes: [
    {
      id: 'sunset',
      name: 'Sunset',
      colors: {
        primary: '#f472b6',
        secondary: '#a855f7',
        accent: '#06b6d4',
        background: '#fdf2f8',
        surface: '#fae8ff',
        text: '#a21caf',
        textSecondary: '#9333ea',
        border: '#f0abfc'
      }
    },
    {
      id: 'oceanic',
      name: 'Oceanic',
      colors: {
        primary: '#06b6d4',
        secondary: '#8b5cf6',
        accent: '#ec4899',
        background: '#ecfeff',
        surface: '#cffafe',
        text: '#0e7490',
        textSecondary: '#7c3aed',
        border: '#67e8f9'
      }
    },
    {
      id: 'peachy',
      name: 'Peachy',
      colors: {
        primary: '#fb923c',
        secondary: '#fbbf24',
        accent: '#f472b6',
        background: '#fff7ed',
        surface: '#fed7aa',
        text: '#c2410c',
        textSecondary: '#92400e',
        border: '#fdba74'
      }
    }
  ],
  metadata: {
    description: 'A nostalgic design style inspired by 80s/90s aesthetics, featuring soft pastels, dreamy vibes, and retro nostalgia',
    characteristics: [
      'Soft pastel pink and cyan',
      'Dreamy, faded aesthetics',
      '90s shopping mall vibes',
      'Greek/Roman statue aesthetic',
      'Glitch effects',
      'Washed-out, nostalgic atmosphere'
    ],
    colorPalette: [
      'Pastel pink (#ffc0cb)',
      'Soft cyan/teal (#7dd3c0)',
      'Lavender purple (#d8b5ff)',
      'Peach (#ffd4a3)',
      'Soft gradients'
    ],
    typography: [
      'Retro, smooth fonts',
      'Italic styling',
      'Wide letter spacing',
      'Soft gradient text'
    ]
  },
  background: {
    body: 'bg-gradient-to-b from-pink-200 via-purple-200 to-cyan-200',
    container: 'bg-gradient-to-br from-pink-100/90 to-cyan-100/90 border-2 border-palette-border shadow-[0_8px_32px_rgba(255,192,203,0.3)]',
  },
  card: {
    container: 'bg-gradient-to-br from-purple-200/80 to-pink-200/80 border-2 border-palette-border shadow-[0_8px_24px_rgba(125,211,192,0.3)] rounded-lg backdrop-blur-sm',
    title: 'font-bold text-2xl italic bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent',
    content: 'font-normal text-base text-palette-text-secondary leading-relaxed',
  },
  navbar: {
    container: 'bg-gradient-to-r from-pink-200 via-purple-200 to-cyan-200 border-b-2 border-palette-border shadow-lg',
    select: 'bg-white/80 backdrop-blur-sm border-2 border-palette-border text-palette-text font-bold italic rounded-lg shadow-md focus:ring-2 focus:ring-pink-300 focus:outline-none',
    text: 'text-transparent bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text font-bold italic',
    label: 'text-palette-text font-bold italic',
  },
  button: {
    base: 'border-2 rounded-lg font-bold italic transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-100',
    // For style selector dialog
    selected: 'bg-gradient-to-r from-pink-300 to-purple-300 text-palette-text-secondary border-palette-border shadow-[0_0_20px_rgba(255,192,203,0.4)]',
    unselected: 'bg-gradient-to-r from-cyan-200 to-pink-200 text-palette-text border-palette-border hover:from-cyan-300 hover:to-pink-300',
    // For general button usage
    primary: 'bg-gradient-to-r from-pink-300 to-purple-300 text-palette-text border-pink-400 shadow-md',
    secondary: 'bg-gradient-to-r from-cyan-300 to-teal-300 text-palette-text border-cyan-400 shadow-md',
    outline: 'bg-white/50 backdrop-blur-sm text-palette-text border-palette-border hover:bg-purple-100/50',
  },
  input: {
    base: 'bg-white/70 backdrop-blur-sm border-2 border-palette-border rounded-lg text-palette-text-secondary font-medium italic placeholder:text-purple-300 focus:ring-2 focus:ring-pink-300 focus:outline-none shadow-inner',
    label: 'font-bold italic text-palette-primary',
  },
  textarea: {
    base: 'bg-white/70 backdrop-blur-sm border-2 border-palette-border rounded-lg text-palette-text-secondary font-medium italic placeholder:text-purple-300 focus:ring-2 focus:ring-pink-300 focus:outline-none shadow-inner',
  },
  checkbox: {
    base: 'border-2 border-palette-border rounded w-5 h-5 accent-palette-accent focus:ring-2 focus:ring-pink-300 bg-white/70',
    label: 'font-medium italic text-palette-text',
  },
  switch: {
    base: 'border-2 border-palette-border',
  },
  tabs: {
    list: 'bg-gradient-to-r from-pink-200 to-cyan-200 border-2 border-palette-border rounded-xl p-2 gap-2 shadow-inner',
    trigger: 'font-bold italic text-palette-text px-4 py-2 rounded-lg transition-all',
    triggerActive: 'bg-white/80 backdrop-blur-sm text-palette-primary shadow-md',
    triggerInactive: 'hover:bg-white/40',
    content: 'bg-white/60 backdrop-blur-sm border-2 border-palette-border rounded-xl p-6 mt-2 shadow-lg',
  },
  accordion: {
    item: 'bg-gradient-to-br from-pink-200/60 to-purple-200/60 backdrop-blur-sm border-2 border-palette-border rounded-xl mb-2 overflow-hidden shadow-md',
    trigger: 'font-bold italic text-palette-text hover:bg-pink-200/50 p-4 transition-colors',
    content: 'font-normal italic text-palette-text-secondary p-4 bg-white/50 border-t-2 border-pink-200',
  },
  alert: {
    base: 'bg-gradient-to-br from-pink-200/70 to-purple-200/70 backdrop-blur-sm border-2 border-palette-border rounded-xl shadow-lg p-4',
    title: 'font-bold italic text-transparent bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text',
    description: 'font-normal italic text-palette-text',
  },
  badge: {
    base: 'border-2 rounded-full font-bold italic text-xs px-3 py-1 shadow-sm',
    success: 'bg-gradient-to-r from-teal-300 to-cyan-300 text-teal-700 border-teal-400',
    warning: 'bg-gradient-to-r from-orange-300 to-peach-300 text-orange-700 border-orange-400',
    error: 'bg-gradient-to-r from-pink-300 to-rose-300 text-pink-700 border-pink-400',
  },
  progress: {
    container: 'bg-white/70 backdrop-blur-sm border-2 border-palette-border rounded-full h-4 overflow-hidden shadow-inner',
    bar: 'bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 h-full',
  },
  slider: {
    base: 'accent-palette-accent h-2',
  },
  dialog: {
    overlay: 'bg-palette-surface/30 backdrop-blur-md',
    content: 'bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 border-2 border-palette-border rounded-2xl shadow-[0_8px_32px_rgba(255,192,203,0.4)]',
    title: 'font-bold text-xl italic text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 bg-clip-text',
    description: 'font-normal italic text-palette-text',
  },
}

/**
 * Bold Minimalism Design Style
 * Characterized by clean layouts with bold typography and ample white space
 */
const boldMinimalismStyle: DesignStyle = {
  name: 'bold-minimalism',
  displayName: 'Bold Minimalism',
  colorPalettes: [
    {
      id: 'monochrome',
      name: 'Monochrome',
      colors: {
        primary: '#000000',
        secondary: '#1f2937',
        accent: '#4b5563',
        background: '#ffffff',
        surface: '#f9fafb',
        text: '#000000',
        textSecondary: '#6b7280',
        border: '#e5e7eb'
      }
    },
    {
      id: 'blue',
      name: 'Blue',
      colors: {
        primary: '#1e3a8a',
        secondary: '#1e40af',
        accent: '#3b82f6',
        background: '#ffffff',
        surface: '#eff6ff',
        text: '#1e3a8a',
        textSecondary: '#3b82f6',
        border: '#dbeafe'
      }
    },
    {
      id: 'emerald',
      name: 'Emerald',
      colors: {
        primary: '#064e3b',
        secondary: '#065f46',
        accent: '#10b981',
        background: '#ffffff',
        surface: '#ecfdf5',
        text: '#064e3b',
        textSecondary: '#059669',
        border: '#d1fae5'
      }
    }
  ],
  metadata: {
    description: 'A clean, minimal design style with bold typography as the focal point, using ample white space for a modern, professional look',
    characteristics: [
      'Bold, oversized typography',
      'Abundant white space',
      'Clean, simple layouts',
      'Minimal elements',
      'High contrast between text and background',
      'Professional, modern aesthetic'
    ],
    colorPalette: [
      'Pure white backgrounds (#ffffff)',
      'Deep black text (#000000)',
      'Light gray accents (#f5f5f5)',
      'Subtle shadows for depth'
    ],
    typography: [
      'Extra bold headings (800-900)',
      'Large font sizes for emphasis',
      'Light body text (300-400)',
      'Sans-serif fonts',
      'Generous line height'
    ]
  },
  background: {
    body: 'bg-white',
    container: 'bg-white',
  },
  card: {
    container: 'bg-white rounded-none',
    title: 'font-black text-4xl text-black tracking-tight',
    content: 'font-light text-lg text-gray-700 leading-relaxed',
  },
  navbar: {
    container: 'bg-white border-b border-gray-200',
    select: 'border-none bg-gray-50 text-black rounded-none font-bold focus:ring-0 focus:outline-none',
    text: 'text-black font-black text-xl',
    label: 'text-gray-600 font-light text-sm',
  },
  button: {
    base: 'rounded-none font-black text-sm uppercase tracking-widest transition-all px-8 py-4',
    selected: 'bg-black text-palette-text',
    unselected: 'bg-white text-black border border-gray-200 hover:bg-gray-50',
    primary: 'bg-black text-palette-text hover:bg-gray-900',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    outline: 'bg-white text-black border-2 border-black hover:bg-black hover:text-palette-text',
  },
  input: {
    base: 'border-b-2 border-gray-300 rounded-none bg-white text-black font-light text-lg placeholder:text-gray-400 focus:border-black focus:ring-0 focus:outline-none px-0 py-3',
    label: 'font-black text-xs uppercase tracking-widest text-black mb-4',
  },
  textarea: {
    base: 'border-b-2 border-gray-300 rounded-none bg-white text-black font-light text-lg placeholder:text-gray-400 focus:border-black focus:ring-0 focus:outline-none px-0 py-3',
  },
  checkbox: {
    base: 'border-2 border-black rounded-none w-6 h-6 accent-black focus:ring-0',
    label: 'font-light text-base text-gray-700',
  },
  switch: {
    base: 'border-2 border-black rounded-full',
  },
  tabs: {
    list: 'border-b-2 border-gray-200 bg-white p-0 gap-8',
    trigger: 'font-black text-lg uppercase tracking-wider px-0 py-4 transition-all border-b-4',
    triggerActive: 'text-black border-black',
    triggerInactive: 'text-gray-400 border-transparent hover:text-gray-600',
    content: 'bg-white p-8 mt-8',
  },
  accordion: {
    item: 'border-b border-gray-200 bg-white py-4',
    trigger: 'font-black text-xl text-black hover:text-gray-600 transition-colors',
    content: 'font-light text-base text-gray-700 pt-4 leading-relaxed',
  },
  alert: {
    base: 'border-l-4 bg-white p-6 rounded-none',
    title: 'font-black text-lg uppercase tracking-wider',
    description: 'font-light text-base mt-2',
  },
  badge: {
    base: 'rounded-none font-black uppercase text-xs px-3 py-1 tracking-wider',
    success: 'bg-black text-palette-text',
    warning: 'bg-gray-900 text-palette-text',
    error: 'bg-gray-800 text-palette-text',
  },
  progress: {
    container: 'border border-gray-300 rounded-none bg-gray-100 h-2 overflow-hidden',
    bar: 'bg-black h-full',
  },
  slider: {
    base: 'accent-black h-1',
  },
  dialog: {
    overlay: 'bg-black/50',
    content: 'border-none bg-white shadow-2xl rounded-none p-12',
    title: 'font-black text-3xl text-black uppercase tracking-wide',
    description: 'font-light text-lg text-gray-700 mt-4',
  },
}

/**
 * Modern Flat Design Style
 * Characterized by flat colors, darker backgrounds, and vibrant accent colors
 */
const modernFlatStyle: DesignStyle = {
  name: 'modern-flat',
  displayName: 'Modern Flat',
  colorPalettes: [
    {
      id: 'emerald',
      name: 'Emerald',
      colors: {
        primary: '#10b981',
        secondary: '#059669',
        accent: '#34d399',
        background: '#18181b',
        surface: '#27272a',
        text: '#ffffff',
        textSecondary: '#a1a1aa',
        border: '#3f3f46'
      }
    },
    {
      id: 'violet',
      name: 'Violet',
      colors: {
        primary: '#8b5cf6',
        secondary: '#7c3aed',
        accent: '#a78bfa',
        background: '#18181b',
        surface: '#27272a',
        text: '#ffffff',
        textSecondary: '#a1a1aa',
        border: '#3f3f46'
      }
    },
    {
      id: 'rose',
      name: 'Rose',
      colors: {
        primary: '#f43f5e',
        secondary: '#e11d48',
        accent: '#fb7185',
        background: '#18181b',
        surface: '#27272a',
        text: '#ffffff',
        textSecondary: '#a1a1aa',
        border: '#3f3f46'
      }
    }
  ],
  metadata: {
    description: 'A modern flat design with darker backgrounds and strategic use of vibrant accent colors to focus attention on key elements',
    characteristics: [
      'Flat, non-gradient colors',
      'Dark backgrounds (#1a1a1a, #2d2d2d)',
      'Vibrant accent colors (green, red, blue)',
      'Clean, sharp edges',
      'Minimal shadows',
      'Strategic color use for CTAs'
    ],
    colorPalette: [
      'Dark charcoal (#1a1a1a)',
      'Vibrant green (#10b981)',
      'Electric blue (#3b82f6)',
      'Bright red (#ef4444)',
      'Pure white text (#ffffff)'
    ],
    typography: [
      'Medium to bold fonts (500-700)',
      'Sans-serif typefaces',
      'Clear hierarchy',
      'High contrast for readability'
    ]
  },
  background: {
    body: 'bg-palette-background',
    container: 'bg-palette-surface border border-palette-border',
  },
  card: {
    container: 'bg-palette-surface border border-palette-border rounded-lg',
    title: 'font-bold text-2xl text-palette-text',
    content: 'font-normal text-base text-zinc-300 leading-relaxed',
  },
  navbar: {
    container: 'bg-palette-background border-b border-zinc-800',
    select: 'bg-palette-surface border border-palette-border text-palette-text rounded-md font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none',
    text: 'text-palette-text font-semibold',
    label: 'text-zinc-400 font-medium',
  },
  button: {
    base: 'rounded-md font-semibold transition-all',
    selected: 'bg-palette-accent text-palette-text',
    unselected: 'bg-palette-surface text-palette-text border border-palette-border hover:bg-zinc-700',
    primary: 'bg-palette-accent text-palette-text hover:bg-emerald-600',
    secondary: 'bg-palette-secondary text-palette-text hover:bg-blue-600',
    outline: 'bg-transparent text-palette-text border-2 border-zinc-600 hover:bg-palette-surface',
  },
  input: {
    base: 'bg-palette-surface border border-palette-border rounded-md text-palette-text placeholder:text-zinc-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none',
    label: 'font-semibold text-zinc-200',
  },
  textarea: {
    base: 'bg-palette-surface border border-palette-border rounded-md text-palette-text placeholder:text-zinc-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none',
  },
  checkbox: {
    base: 'border-2 border-zinc-600 rounded w-5 h-5 accent-palette-accent focus:ring-2 focus:ring-emerald-500 bg-palette-surface',
    label: 'font-medium text-zinc-300',
  },
  switch: {
    base: 'border border-zinc-600 bg-palette-surface',
  },
  tabs: {
    list: 'bg-palette-surface border border-palette-border rounded-lg p-1 gap-1',
    trigger: 'font-semibold text-zinc-400 px-4 py-2 rounded-md transition-all',
    triggerActive: 'bg-palette-accent text-palette-text',
    triggerInactive: 'hover:bg-zinc-700 hover:text-zinc-200',
    content: 'bg-palette-surface border border-palette-border rounded-lg p-6 mt-2',
  },
  accordion: {
    item: 'bg-palette-surface border border-palette-border rounded-lg mb-2 overflow-hidden',
    trigger: 'font-semibold text-palette-text hover:bg-zinc-700 p-4 transition-colors',
    content: 'font-normal text-zinc-300 p-4 bg-palette-background/50',
  },
  alert: {
    base: 'bg-palette-surface border-l-4 rounded-md p-4',
    title: 'font-bold text-palette-text',
    description: 'font-normal text-zinc-300',
  },
  badge: {
    base: 'rounded-md font-semibold text-xs px-3 py-1',
    success: 'bg-palette-accent text-palette-text',
    warning: 'bg-palette-secondary text-palette-text',
    error: 'bg-palette-primary text-palette-text',
  },
  progress: {
    container: 'bg-palette-surface border border-palette-border rounded-full h-3 overflow-hidden',
    bar: 'bg-palette-accent h-full',
  },
  slider: {
    base: 'accent-palette-accent h-2',
  },
  dialog: {
    overlay: 'bg-black/80',
    content: 'bg-palette-surface border border-palette-border shadow-2xl rounded-lg',
    title: 'font-bold text-xl text-palette-text',
    description: 'font-normal text-zinc-300',
  },
}

/**
 * Bento Grid Design Style
 * Characterized by tile-based grid layouts with varying box sizes
 */
const bentoGridStyle: DesignStyle = {
  name: 'bento-grid',
  displayName: 'Bento Grid',
  colorPalettes: [
    {
      id: 'neutral',
      name: 'Neutral',
      colors: {
        primary: '#3b82f6',
        secondary: '#6366f1',
        accent: '#8b5cf6',
        background: '#f9fafb',
        surface: '#ffffff',
        text: '#111827',
        textSecondary: '#6b7280',
        border: '#e5e7eb'
      }
    },
    {
      id: 'warm',
      name: 'Warm',
      colors: {
        primary: '#f59e0b',
        secondary: '#f97316',
        accent: '#ef4444',
        background: '#fef3c7',
        surface: '#fffbeb',
        text: '#78350f',
        textSecondary: '#92400e',
        border: '#fde68a'
      }
    },
    {
      id: 'cool',
      name: 'Cool',
      colors: {
        primary: '#06b6d4',
        secondary: '#0ea5e9',
        accent: '#3b82f6',
        background: '#ecfeff',
        surface: '#f0f9ff',
        text: '#164e63',
        textSecondary: '#0c4a6e',
        border: '#cffafe'
      }
    }
  ],
  metadata: {
    description: 'A tile-based grid layout inspired by bento boxes, organizing content in customizable boxes with different sizes for emphasis',
    characteristics: [
      'Grid-based tile layouts',
      'Varying box sizes for emphasis',
      'Clean organization',
      'Rounded corners on tiles',
      'Subtle shadows and borders',
      'Modern, organized presentation'
    ],
    colorPalette: [
      'Light backgrounds (#f8f9fa)',
      'White tiles (#ffffff)',
      'Soft borders (#e5e7eb)',
      'Subtle shadows',
      'Accent colors for highlights'
    ],
    typography: [
      'Medium font weights (500-600)',
      'Clear hierarchy',
      'Sans-serif fonts',
      'Balanced spacing'
    ]
  },
  background: {
    body: 'bg-gray-50',
    container: 'bg-gray-50',
  },
  card: {
    container: 'bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow',
    title: 'font-semibold text-xl text-palette-text',
    content: 'font-normal text-sm text-gray-600 leading-relaxed',
  },
  navbar: {
    container: 'bg-white border-b border-gray-200',
    select: 'bg-white border border-gray-300 text-palette-text rounded-xl font-medium shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none',
    text: 'text-palette-text font-semibold',
    label: 'text-gray-600 font-medium',
  },
  button: {
    base: 'rounded-xl font-medium transition-all shadow-sm hover:shadow-md',
    selected: 'bg-palette-secondary text-palette-text',
    unselected: 'bg-white text-palette-text border border-gray-300 hover:bg-gray-50',
    primary: 'bg-palette-secondary text-palette-text hover:bg-blue-600',
    secondary: 'bg-gray-100 text-palette-text hover:bg-gray-200',
    outline: 'bg-white text-palette-text border-2 border-gray-300 hover:border-gray-400',
  },
  input: {
    base: 'bg-white border border-gray-300 rounded-xl text-palette-text placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none shadow-sm',
    label: 'font-medium text-gray-700',
  },
  textarea: {
    base: 'bg-white border border-gray-300 rounded-xl text-palette-text placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none shadow-sm',
  },
  checkbox: {
    base: 'border-2 border-gray-300 rounded-md w-5 h-5 accent-blue-500 focus:ring-2 focus:ring-blue-500 bg-white',
    label: 'font-normal text-gray-700',
  },
  switch: {
    base: 'border border-gray-300 bg-gray-200',
  },
  tabs: {
    list: 'bg-gray-100 rounded-xl p-1 gap-1',
    trigger: 'font-medium text-gray-600 px-4 py-2 rounded-lg transition-all',
    triggerActive: 'bg-white text-palette-text shadow-sm',
    triggerInactive: 'hover:text-palette-text',
    content: 'bg-white border border-gray-200 rounded-xl p-6 mt-2 shadow-sm',
  },
  accordion: {
    item: 'bg-white border border-gray-200 rounded-xl mb-2 overflow-hidden shadow-sm',
    trigger: 'font-medium text-palette-text hover:bg-gray-50 p-4 transition-colors',
    content: 'font-normal text-gray-600 p-4 bg-gray-50/50',
  },
  alert: {
    base: 'bg-white border border-gray-200 rounded-xl shadow-sm p-4',
    title: 'font-semibold text-palette-text',
    description: 'font-normal text-gray-600',
  },
  badge: {
    base: 'rounded-lg font-medium text-xs px-3 py-1 shadow-sm',
    success: 'bg-green-100 text-green-700 border border-green-200',
    warning: 'bg-amber-100 text-amber-700 border border-amber-200',
    error: 'bg-red-100 text-red-700 border border-red-200',
  },
  progress: {
    container: 'bg-gray-200 rounded-full h-3 overflow-hidden',
    bar: 'bg-palette-secondary h-full rounded-full',
  },
  slider: {
    base: 'accent-blue-500 h-2',
  },
  dialog: {
    overlay: 'bg-gray-900/40 backdrop-blur-sm',
    content: 'bg-white border border-gray-200 shadow-2xl rounded-2xl',
    title: 'font-semibold text-xl text-palette-text',
    description: 'font-normal text-gray-600',
  },
}

/**
 * Design Style Registry
 * To add a new style: simply add it to this object
 * This follows the Open-Closed Principle
 */
export const designStyleRegistry: Record<DesignStyleName, DesignStyle> = {
  neobrutalism: neobrutalismStyle,
  'bold-minimalism': boldMinimalismStyle,
  'modern-flat': modernFlatStyle,
  'bento-grid': bentoGridStyle,
  'art-deco': artDecoStyle,
  'pure-minimalism': pureMinimalismStyle,
  glassmorphism: glassmorphismStyle,
  claymorphism: claymorphismStyle,
  'pop-art': popArtStyle,
  y2k: y2kStyle,
  vaporwave: vaporwaveStyle,
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
