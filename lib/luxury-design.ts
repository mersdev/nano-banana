// Luxury Design System
// Premium color palette and design tokens for high-end fashion brand aesthetic

export const luxuryColors = {
  // Primary luxury colors
  black: {
    50: '#f8f8f8',
    100: '#f0f0f0',
    200: '#e4e4e4',
    300: '#d1d1d1',
    400: '#b4b4b4',
    500: '#9a9a9a',
    600: '#818181',
    700: '#6a6a6a',
    800: '#5a5a5a',
    900: '#4a4a4a',
    950: '#000000',
  },
  
  // Gold accent colors
  gold: {
    50: '#fffef7',
    100: '#fffbeb',
    200: '#fef3c7',
    300: '#fde68a',
    400: '#fcd34d',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  
  // Neutral grays
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  
  // White variations
  white: {
    pure: '#ffffff',
    warm: '#fefefe',
    cream: '#faf9f7',
    pearl: '#f8f6f0',
  },
  
  // Accent colors
  accent: {
    red: '#dc2626',
    green: '#16a34a',
    blue: '#2563eb',
    purple: '#9333ea',
  }
} as const;

export const luxuryTypography = {
  fontFamilies: {
    primary: '"Inter", "Helvetica Neue", Arial, sans-serif',
    secondary: '"Playfair Display", Georgia, serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },
  
  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  
  fontWeights: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export const luxurySpacing = {
  0: '0px',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
} as const;

export const luxuryShadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  luxury: '0 8px 32px rgb(0 0 0 / 0.12), 0 2px 8px rgb(0 0 0 / 0.08)',
  premium: '0 12px 48px rgb(0 0 0 / 0.15), 0 4px 16px rgb(0 0 0 / 0.1)',
} as const;

export const luxuryBorderRadius = {
  none: '0px',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

export const luxuryAnimations = {
  durations: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '750ms',
  },
  
  easings: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
} as const;

// Utility functions for luxury design
export const getLuxuryGradient = (from: string, to: string) => 
  `linear-gradient(135deg, ${from} 0%, ${to} 100%)`;

export const getLuxuryTextShadow = () => 
  '0 1px 2px rgba(0, 0, 0, 0.1)';

export const getLuxuryBoxShadow = (elevation: 'low' | 'medium' | 'high' = 'medium') => {
  switch (elevation) {
    case 'low':
      return luxuryShadows.md;
    case 'medium':
      return luxuryShadows.luxury;
    case 'high':
      return luxuryShadows.premium;
    default:
      return luxuryShadows.luxury;
  }
};

// CSS custom properties for luxury theme
export const luxuryCSSVariables = {
  '--luxury-primary': luxuryColors.black[950],
  '--luxury-secondary': luxuryColors.gold[500],
  '--luxury-accent': luxuryColors.gold[400],
  '--luxury-background': luxuryColors.white.pure,
  '--luxury-surface': luxuryColors.white.warm,
  '--luxury-text-primary': luxuryColors.black[950],
  '--luxury-text-secondary': luxuryColors.gray[600],
  '--luxury-text-muted': luxuryColors.gray[500],
  '--luxury-border': luxuryColors.gray[200],
  '--luxury-border-focus': luxuryColors.gold[400],
  '--luxury-shadow': luxuryShadows.luxury,
  '--luxury-radius': luxuryBorderRadius.lg,
  '--luxury-font-primary': luxuryTypography.fontFamilies.primary,
  '--luxury-font-secondary': luxuryTypography.fontFamilies.secondary,
} as const;
