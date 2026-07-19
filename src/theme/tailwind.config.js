/**
 * Vazzlo Tailwind theme extension.
 * Loaded from src/index.css via `@config` so classes like
 * `bg-vz-dark` and `text-vz-cyan` are available everywhere.
 */

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'vz-dark': '#0A1628',
        'vz-navy': '#0F2341',
        'vz-cyan': '#00A9CE',
        'vz-teal': '#64CCC9',
        'vz-mint': '#B8F0ED',
        'vz-white': '#FFFFFF',
        'vz-ghost': '#F7FAFB',
        'vz-slate': '#6B7B8D',
        'vz-light-slate': '#94A3B8',
        'vz-border': '#1E3A5F',
        'vz-coral': '#F8485E',
        'vz-green': '#22C55E',
        'vz-amber': '#F59E0B',
        'vz-purple': '#A855F7',
        'vz-card': 'rgba(15,35,65,0.6)',
        'vz-glass': 'rgba(255,255,255,0.04)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
};
