/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        'slate-900': '#0F172A',
        'slate-950': '#020617',
        'slate-50': '#F8FAFC',
        'slate-600': '#4B5563',
        'slate-700': '#374151',
        'slate-800': '#1F2937',

        // Path colors
        'gaming': '#8B5CF6', // Vibrant Purple
        'professional': '#10B981', // Emerald Green
        'connection': '#FBBF24', // Warm Amber

        // Keep some original colors for backward compatibility during transition
        'primary': '#6366F1', // Indigo
        'secondary': '#1E293B', // Dark slate
        'accent': '#EC4899', // Fuchsia
      },
      fontFamily: {
        // Primary fonts
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        // Display font for headings — geometric, high-authority
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        // Monospace accent font for metrics / metadata
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-purple': '0 0 40px -8px rgba(139, 92, 246, 0.55)',
        'glow-emerald': '0 0 40px -8px rgba(16, 185, 129, 0.55)',
        'glow-purple-lg': '0 0 70px -12px rgba(139, 92, 246, 0.7)',
        'glow-emerald-lg': '0 0 70px -12px rgba(16, 185, 129, 0.7)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        blob: 'blob 11s infinite ease-in-out',
        'gradient-x': 'gradient-x 4s ease-in-out infinite',
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
      // Border radius
      borderRadius: {
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.25rem', // 20px
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