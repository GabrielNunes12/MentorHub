/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Theme surface tokens (flip via .dark — see src/styles/globals.css)
        'bg': 'var(--bg)',
        'surface': 'var(--surface)',
        'edge': 'var(--edge)',
        'ink': 'var(--ink)',
        'muted': 'var(--muted)',
        'dim': 'var(--dim)',

        // Business-line accents
        'games': 'var(--games)', // terminal green
        'outsourcing': 'var(--outsourcing)', // amber

        // Fixed (non-theme-flipping) terminal palette — for panels that stay
        // dark regardless of the light/dark toggle (hero, CTA band, chatbot header)
        'obsidian': '#0B0E0C',
        'obsidian-surface': '#12160F',
        'obsidian-edge': '#1D2620',
        'obsidian-fg': '#F2FBF4',
        'obsidian-dim': '#8FA396',
        'games-bright': '#7CF29C',
        'outsourcing-bright': '#F2C94C',

        // Base colors (still used directly in a few places)
        'slate-900': '#0F172A',
        'slate-950': '#020617',
        'slate-50': '#F8FAFC',
        'slate-600': '#4B5563',
        'slate-700': '#374151',
        'slate-800': '#1F2937',
      },
      fontFamily: {
        // Body copy
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        // Display font for headings — monospace, terminal-styled
        display: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        // Monospace accent font for metrics / metadata
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-games': '0 0 40px -8px rgba(124, 242, 156, 0.45)',
        'glow-outsourcing': '0 0 40px -8px rgba(242, 201, 76, 0.45)',
        'glow-games-lg': '0 0 70px -12px rgba(124, 242, 156, 0.6)',
        'glow-outsourcing-lg': '0 0 70px -12px rgba(242, 201, 76, 0.6)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      // Typography scale
      fontSize: {
        'display': ['3rem', { lineHeight: '1', letterSpacing: '-0.02em' }], // 48px
        'h2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 36px
        'h3': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 30px
        'h4': ['1.5rem', { lineHeight: '1.4' }], // 24px
        'base': ['1.125rem', { lineHeight: '1.7' }], // 18px
        'sm': ['1rem', { lineHeight: '1.6' }], // 16px
        'xs': ['0.875rem', { lineHeight: '1.5' }], // 14px
        '2xs': ['0.75rem', { lineHeight: '1.4' }], // 12px
      },
      // Border radius — sharp/technical, matches the terminal direction
      borderRadius: {
        'xl': '0.25rem', // 4px
        '2xl': '0.375rem', // 6px
        '3xl': '0.5rem', // 8px
      },
      // Spacing (4px grid)
      spacing: {
        '0.5': '0.125rem', // 2px
        '1': '0.25rem', // 4px
        '1.5': '0.375rem', // 6px
        '2': '0.5rem', // 8px
        '2.5': '0.625rem', // 10px
        '3': '0.75rem', // 12px
        '3.5': '0.875rem', // 14px
        '4': '1rem', // 16px
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px
        '7': '1.75rem', // 28px
        '8': '2rem', // 32px
        '10': '2.5rem', // 40px
        '12': '3rem', // 48px
        '16': '4rem', // 64px
        '20': '5rem', // 80px
        '24': '6rem', // 96px
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}