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
 * Glassmorphism Design Style
 * Characterized by frosted glass effects, transparency, and blur
 */
const glassmorphismStyle: DesignStyle = {
  name: 'glassmorphism',
  displayName: 'Glassmorphism',
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
    title: 'font-semibold text-2xl text-white',
    content: 'font-normal text-base text-white/90 leading-relaxed',
  },
  navbar: {
    container: 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg',
    select: 'bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg font-medium focus:ring-2 focus:ring-white/50 focus:outline-none',
    text: 'text-white',
    label: 'text-white/90 font-medium',
  },
  button: {
    base: 'backdrop-blur-md border border-white/30 rounded-xl font-medium transition-all hover:bg-white/20 hover:shadow-lg',
    // For style selector dialog
    selected: 'bg-purple-500/40 text-white border-purple-400/60 shadow-lg backdrop-blur-md',
    unselected: 'bg-purple-900/30 text-purple-100 border-purple-400/40 hover:bg-purple-800/40 backdrop-blur-md',
    // For general button usage
    primary: 'bg-white/20 text-white border-white/40 hover:bg-white/30 shadow-md',
    secondary: 'bg-purple-500/30 text-white border-purple-300/50 hover:bg-purple-500/40 shadow-md',
    outline: 'bg-transparent text-white border-white/50 hover:bg-white/10',
  },
  input: {
    base: 'bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50 focus:outline-none',
    label: 'font-medium text-white/90',
  },
  textarea: {
    base: 'bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50 focus:outline-none',
  },
  checkbox: {
    base: 'border-2 border-white/50 rounded w-4 h-4 accent-white focus:ring-2 focus:ring-white/50 bg-white/10',
    label: 'font-medium text-white/90',
  },
  switch: {
    base: 'border border-white/30 bg-white/10',
  },
  tabs: {
    list: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-1 gap-1',
    trigger: 'font-medium text-white/70 px-4 py-2 rounded-lg transition-all',
    triggerActive: 'bg-white/30 text-white shadow-md',
    triggerInactive: 'hover:bg-white/10 hover:text-white',
    content: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mt-2 shadow-lg',
  },
  accordion: {
    item: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-xl mb-2 overflow-hidden',
    trigger: 'font-medium text-white hover:bg-white/10 p-4 transition-colors',
    content: 'font-normal text-white/90 p-4 bg-white/5 border-t border-white/20',
  },
  alert: {
    base: 'bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-4',
    title: 'font-semibold text-white',
    description: 'font-normal text-white/90',
  },
  badge: {
    base: 'bg-white/20 backdrop-blur-sm border border-white/30 rounded-full font-medium text-xs px-3 py-1',
    success: 'bg-green-500/30 text-white border-green-300/50',
    warning: 'bg-yellow-500/30 text-white border-yellow-300/50',
    error: 'bg-red-500/30 text-white border-red-300/50',
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
    title: 'font-semibold text-xl text-purple-900',
    description: 'font-normal text-purple-700',
  },
}

/**
 * Claymorphism Design Style
 * Characterized by soft, clay-like 3D elements with inflated appearance
 */
const claymorphismStyle: DesignStyle = {
  name: 'claymorphism',
  displayName: 'Claymorphism',
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
    title: 'font-bold text-2xl text-purple-900',
    content: 'font-normal text-base text-purple-800 leading-relaxed',
  },
  navbar: {
    container: 'bg-gradient-to-r from-pink-100 to-purple-100 border-b-0 shadow-[0_4px_12px_rgba(0,0,0,0.08)]',
    select: 'bg-gradient-to-br from-white to-pink-50 text-purple-900 rounded-2xl font-medium shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.8),inset_3px_3px_6px_rgba(0,0,0,0.1)] focus:ring-0 focus:outline-none',
    text: 'text-purple-900',
    label: 'text-purple-800 font-medium',
  },
  button: {
    base: 'rounded-2xl font-semibold transition-all shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.8),inset_3px_3px_6px_rgba(0,0,0,0.1),4px_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.8),inset_2px_2px_4px_rgba(0,0,0,0.1),6px_6px_12px_rgba(0,0,0,0.12)] active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]',
    // For style selector dialog
    selected: 'bg-gradient-to-br from-purple-300 to-pink-300 text-purple-900',
    unselected: 'bg-gradient-to-br from-purple-100 to-pink-100 text-purple-800 hover:from-purple-200 hover:to-pink-200',
    // For general button usage
    primary: 'bg-gradient-to-br from-purple-300 to-pink-300 text-purple-900',
    secondary: 'bg-gradient-to-br from-orange-200 to-yellow-200 text-orange-900',
    outline: 'bg-gradient-to-br from-white to-purple-50 text-purple-800',
  },
  input: {
    base: 'bg-gradient-to-br from-white to-purple-50 rounded-2xl text-purple-900 placeholder:text-purple-400 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.12),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]',
    label: 'font-semibold text-purple-800',
  },
  textarea: {
    base: 'bg-gradient-to-br from-white to-purple-50 rounded-2xl text-purple-900 placeholder:text-purple-400 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.12),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]',
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
    trigger: 'font-semibold text-purple-700 px-4 py-2 rounded-2xl transition-all',
    triggerActive: 'bg-gradient-to-br from-purple-300 to-pink-300 text-purple-900 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.7),4px_4px_8px_rgba(0,0,0,0.1)]',
    triggerInactive: 'hover:bg-gradient-to-br hover:from-purple-200 hover:to-pink-200',
    content: 'bg-gradient-to-br from-white to-purple-50 rounded-3xl p-6 mt-2 shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.8),inset_4px_4px_8px_rgba(0,0,0,0.08),8px_8px_16px_rgba(0,0,0,0.08)]',
  },
  accordion: {
    item: 'bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-3 overflow-hidden shadow-[4px_4px_12px_rgba(0,0,0,0.1)]',
    trigger: 'font-semibold text-purple-900 hover:bg-purple-200/50 p-4 transition-colors',
    content: 'font-normal text-purple-800 p-4 bg-gradient-to-br from-white to-purple-50',
  },
  alert: {
    base: 'bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.8),inset_4px_4px_8px_rgba(0,0,0,0.08),8px_8px_16px_rgba(0,0,0,0.1)] p-4',
    title: 'font-bold text-purple-900',
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
    title: 'font-bold text-xl text-purple-900',
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
    container: 'bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
  },
  card: {
    container: 'bg-red-500 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none',
    title: 'font-black text-2xl uppercase text-white [text-shadow:3px_3px_0px_rgba(0,0,0,1)]',
    content: 'font-bold text-base text-white leading-relaxed',
  },
  navbar: {
    container: 'bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 border-b-4 border-black',
    select: 'bg-white border-4 border-black text-black font-black rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:ring-0 focus:outline-none',
    text: 'text-white font-black [text-shadow:2px_2px_0px_rgba(0,0,0,1)]',
    label: 'text-white font-black [text-shadow:2px_2px_0px_rgba(0,0,0,1)]',
  },
  button: {
    base: 'border-4 border-black rounded-none font-black uppercase transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none',
    // For style selector dialog
    selected: 'bg-yellow-400 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    unselected: 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-100',
    // For general button usage
    primary: 'bg-red-500 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [text-shadow:2px_2px_0px_rgba(0,0,0,0.3)]',
    secondary: 'bg-blue-500 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [text-shadow:2px_2px_0px_rgba(0,0,0,0.3)]',
    outline: 'bg-yellow-300 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
  },
  input: {
    base: 'bg-white border-4 border-black rounded-none text-black font-bold placeholder:text-gray-600 focus:ring-0 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    label: 'font-black uppercase text-black',
  },
  textarea: {
    base: 'bg-white border-4 border-black rounded-none text-black font-bold placeholder:text-gray-600 focus:ring-0 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
  },
  checkbox: {
    base: 'border-4 border-black rounded-none w-6 h-6 accent-red-500 focus:ring-0',
    label: 'font-bold text-black',
  },
  switch: {
    base: 'border-4 border-black rounded-none',
  },
  tabs: {
    list: 'bg-pink-400 border-4 border-black p-1 gap-1 rounded-none',
    trigger: 'font-black uppercase text-black px-4 py-2 border-4 border-black transition-all',
    triggerActive: 'bg-yellow-400 shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)]',
    triggerInactive: 'bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]',
    content: 'bg-white border-4 border-black p-6 mt-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none',
  },
  accordion: {
    item: 'bg-blue-500 border-4 border-black mb-2 rounded-none',
    trigger: 'font-black uppercase text-white hover:bg-blue-600 p-4 [text-shadow:2px_2px_0px_rgba(0,0,0,0.3)]',
    content: 'font-bold text-black p-4 bg-yellow-300 border-t-4 border-black',
  },
  alert: {
    base: 'border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 rounded-none',
    title: 'font-black uppercase text-black',
    description: 'font-bold text-black',
  },
  badge: {
    base: 'border-3 border-black rounded-none font-black uppercase text-xs px-2 py-1',
    success: 'bg-green-400 text-black',
    warning: 'bg-yellow-400 text-black',
    error: 'bg-red-500 text-white',
  },
  progress: {
    container: 'bg-white border-4 border-black h-8 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    bar: 'bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 h-full border-r-4 border-black',
  },
  slider: {
    base: 'accent-red-500 h-4 border-2 border-black',
  },
  dialog: {
    overlay: 'bg-black/60',
    content: 'bg-yellow-300 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none',
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
    container: 'bg-gradient-to-br from-white via-gray-50 to-sky-50 border-2 border-sky-400 shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.1)]',
  },
  card: {
    container: 'bg-gradient-to-br from-pink-400 to-pink-300 border-2 border-white shadow-[inset_0_2px_0_rgba(255,255,255,0.6),4px_4px_0_rgba(0,0,0,0.15)] rounded-2xl',
    title: 'font-black text-2xl text-white',
    content: 'font-bold text-base text-white leading-relaxed',
  },
  navbar: {
    container: 'bg-gradient-to-r from-lime-400 via-sky-300 to-pink-400 border-b-2 border-white shadow-[0_4px_0_rgba(255,255,255,0.4)]',
    select: 'bg-white border-2 border-sky-400 text-sky-600 font-black rounded-xl shadow-[inset_0_2px_0_rgba(255,255,255,1),0_4px_0_rgba(0,0,0,0.1)] focus:ring-2 focus:ring-pink-400 focus:outline-none',
    text: 'text-white font-black',
    label: 'text-white font-black',
  },
  button: {
    base: 'border-2 rounded-2xl font-black transition-all shadow-[inset_0_2px_0_rgba(255,255,255,0.5),0_4px_0_rgba(0,0,0,0.2)] hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.5),0_6px_0_rgba(0,0,0,0.25)] hover:translate-y-[-2px] active:translate-y-0 active:shadow-[inset_0_2px_0_rgba(255,255,255,0.5),0_2px_0_rgba(0,0,0,0.2)]',
    // For style selector dialog
    selected: 'bg-gradient-to-br from-lime-400 to-lime-500 text-white border-lime-300',
    unselected: 'bg-gradient-to-br from-sky-300 to-sky-400 text-white border-sky-200 hover:from-sky-400 hover:to-sky-500',
    // For general button usage
    primary: 'bg-gradient-to-br from-pink-400 to-pink-500 text-white border-pink-300',
    secondary: 'bg-gradient-to-br from-lime-400 to-lime-500 text-white border-lime-300',
    outline: 'bg-white text-sky-600 border-sky-400',
  },
  input: {
    base: 'bg-white border-2 border-sky-400 rounded-xl text-sky-900 font-bold placeholder:text-sky-300 focus:ring-2 focus:ring-pink-400 focus:outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]',
    label: 'font-black text-sky-600',
  },
  textarea: {
    base: 'bg-white border-2 border-sky-400 rounded-xl text-sky-900 font-bold placeholder:text-sky-300 focus:ring-2 focus:ring-pink-400 focus:outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]',
  },
  checkbox: {
    base: 'border-2 border-sky-400 rounded w-5 h-5 accent-pink-500 focus:ring-2 focus:ring-pink-400 bg-white',
    label: 'font-bold text-sky-700',
  },
  switch: {
    base: 'border-2 border-sky-400 shadow-[0_2px_0_rgba(0,0,0,0.1)]',
  },
  tabs: {
    list: 'bg-gradient-to-r from-lime-300 to-sky-300 border-2 border-white rounded-2xl p-2 gap-2 shadow-[inset_0_2px_0_rgba(255,255,255,0.4)]',
    trigger: 'font-black text-white px-4 py-2 rounded-xl transition-all border-2',
    triggerActive: 'bg-white text-pink-500 border-pink-300 shadow-[inset_0_2px_0_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.1)]',
    triggerInactive: 'border-transparent hover:bg-white/20',
    content: 'bg-white border-2 border-sky-300 rounded-2xl p-6 mt-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)]',
  },
  accordion: {
    item: 'bg-gradient-to-br from-sky-300 to-sky-400 border-2 border-white rounded-2xl mb-2 overflow-hidden shadow-[0_4px_0_rgba(0,0,0,0.1)]',
    trigger: 'font-black text-white hover:bg-sky-500/50 p-4',
    content: 'font-bold text-sky-900 p-4 bg-white border-t-2 border-sky-200',
  },
  alert: {
    base: 'bg-gradient-to-br from-pink-300 to-pink-400 border-2 border-white rounded-2xl shadow-[inset_0_2px_0_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.1)] p-4',
    title: 'font-black text-white',
    description: 'font-bold text-white',
  },
  badge: {
    base: 'border-2 rounded-full font-black text-xs px-3 py-1 shadow-[0_2px_0_rgba(0,0,0,0.1)]',
    success: 'bg-gradient-to-br from-lime-400 to-lime-500 text-white border-lime-300',
    warning: 'bg-gradient-to-br from-orange-400 to-orange-500 text-white border-orange-300',
    error: 'bg-gradient-to-br from-pink-400 to-pink-500 text-white border-pink-300',
  },
  progress: {
    container: 'bg-white border-2 border-sky-400 rounded-full h-4 overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]',
    bar: 'bg-gradient-to-r from-pink-400 via-lime-400 to-sky-400 h-full shadow-[0_0_8px_rgba(236,72,153,0.4)]',
  },
  slider: {
    base: 'accent-pink-500 h-2',
  },
  dialog: {
    overlay: 'bg-sky-400/40 backdrop-blur-sm',
    content: 'bg-gradient-to-br from-white via-sky-50 to-pink-50 border-2 border-sky-400 rounded-2xl shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(0,0,0,0.15)]',
    title: 'font-black text-xl text-pink-500',
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
    container: 'bg-gradient-to-br from-pink-100/90 to-cyan-100/90 border-2 border-pink-300 shadow-[0_8px_32px_rgba(255,192,203,0.3)]',
  },
  card: {
    container: 'bg-gradient-to-br from-purple-200/80 to-pink-200/80 border-2 border-cyan-300 shadow-[0_8px_24px_rgba(125,211,192,0.3)] rounded-lg backdrop-blur-sm',
    title: 'font-bold text-2xl italic bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent',
    content: 'font-normal text-base text-purple-700 leading-relaxed',
  },
  navbar: {
    container: 'bg-gradient-to-r from-pink-200 via-purple-200 to-cyan-200 border-b-2 border-pink-300 shadow-lg',
    select: 'bg-white/80 backdrop-blur-sm border-2 border-cyan-300 text-purple-600 font-bold italic rounded-lg shadow-md focus:ring-2 focus:ring-pink-300 focus:outline-none',
    text: 'text-transparent bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text font-bold italic',
    label: 'text-purple-600 font-bold italic',
  },
  button: {
    base: 'border-2 rounded-lg font-bold italic transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-100',
    // For style selector dialog
    selected: 'bg-gradient-to-r from-pink-300 to-purple-300 text-purple-700 border-cyan-300 shadow-[0_0_20px_rgba(255,192,203,0.4)]',
    unselected: 'bg-gradient-to-r from-cyan-200 to-pink-200 text-purple-600 border-purple-300 hover:from-cyan-300 hover:to-pink-300',
    // For general button usage
    primary: 'bg-gradient-to-r from-pink-300 to-purple-300 text-white border-pink-400 shadow-md',
    secondary: 'bg-gradient-to-r from-cyan-300 to-teal-300 text-white border-cyan-400 shadow-md',
    outline: 'bg-white/50 backdrop-blur-sm text-purple-600 border-purple-300 hover:bg-purple-100/50',
  },
  input: {
    base: 'bg-white/70 backdrop-blur-sm border-2 border-cyan-300 rounded-lg text-purple-700 font-medium italic placeholder:text-purple-300 focus:ring-2 focus:ring-pink-300 focus:outline-none shadow-inner',
    label: 'font-bold italic text-pink-500',
  },
  textarea: {
    base: 'bg-white/70 backdrop-blur-sm border-2 border-cyan-300 rounded-lg text-purple-700 font-medium italic placeholder:text-purple-300 focus:ring-2 focus:ring-pink-300 focus:outline-none shadow-inner',
  },
  checkbox: {
    base: 'border-2 border-cyan-300 rounded w-5 h-5 accent-pink-400 focus:ring-2 focus:ring-pink-300 bg-white/70',
    label: 'font-medium italic text-purple-600',
  },
  switch: {
    base: 'border-2 border-cyan-300',
  },
  tabs: {
    list: 'bg-gradient-to-r from-pink-200 to-cyan-200 border-2 border-purple-300 rounded-xl p-2 gap-2 shadow-inner',
    trigger: 'font-bold italic text-purple-600 px-4 py-2 rounded-lg transition-all',
    triggerActive: 'bg-white/80 backdrop-blur-sm text-pink-500 shadow-md',
    triggerInactive: 'hover:bg-white/40',
    content: 'bg-white/60 backdrop-blur-sm border-2 border-pink-300 rounded-xl p-6 mt-2 shadow-lg',
  },
  accordion: {
    item: 'bg-gradient-to-br from-pink-200/60 to-purple-200/60 backdrop-blur-sm border-2 border-cyan-300 rounded-xl mb-2 overflow-hidden shadow-md',
    trigger: 'font-bold italic text-purple-600 hover:bg-pink-200/50 p-4 transition-colors',
    content: 'font-normal italic text-purple-700 p-4 bg-white/50 border-t-2 border-pink-200',
  },
  alert: {
    base: 'bg-gradient-to-br from-pink-200/70 to-purple-200/70 backdrop-blur-sm border-2 border-cyan-300 rounded-xl shadow-lg p-4',
    title: 'font-bold italic text-transparent bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text',
    description: 'font-normal italic text-purple-600',
  },
  badge: {
    base: 'border-2 rounded-full font-bold italic text-xs px-3 py-1 shadow-sm',
    success: 'bg-gradient-to-r from-teal-300 to-cyan-300 text-teal-700 border-teal-400',
    warning: 'bg-gradient-to-r from-orange-300 to-peach-300 text-orange-700 border-orange-400',
    error: 'bg-gradient-to-r from-pink-300 to-rose-300 text-pink-700 border-pink-400',
  },
  progress: {
    container: 'bg-white/70 backdrop-blur-sm border-2 border-purple-300 rounded-full h-4 overflow-hidden shadow-inner',
    bar: 'bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 h-full',
  },
  slider: {
    base: 'accent-pink-400 h-2',
  },
  dialog: {
    overlay: 'bg-purple-300/30 backdrop-blur-md',
    content: 'bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 border-2 border-pink-300 rounded-2xl shadow-[0_8px_32px_rgba(255,192,203,0.4)]',
    title: 'font-bold text-xl italic text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 bg-clip-text',
    description: 'font-normal italic text-purple-600',
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
