/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({ theme: 'dark', setTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);

// CSS custom property values per theme. Components that support theming
// reference var(--vz-*) instead of the fixed T.* tokens.
export const themeVars = {
  dark: {
    '--vz-bg': '#0A1628',
    '--vz-card': 'rgba(15,35,65,0.6)',
    '--vz-glass': 'rgba(255,255,255,0.04)',
    '--vz-border': '#1E3A5F',
    '--vz-heading': '#FFFFFF',
    '--vz-body': '#6B7B8D',
    '--vz-muted': '#94A3B8',
    '--vz-nav-bg': 'rgba(10,22,40,0.9)',
    '--vz-panel': '#0F2341',
    '--vz-input-bg': 'rgba(255,255,255,0.05)',
    // Brand accents as used on dark backgrounds.
    '--vz-accent-cyan': '#00A9CE',
    '--vz-accent-teal': '#64CCC9',
    '--vz-mint': '#B8F0ED',
    '--vz-card-shadow': 'none',
  },
  light: {
    '--vz-bg': '#F7FAFB',
    '--vz-card': '#FFFFFF',
    '--vz-glass': 'rgba(15,35,65,0.03)',
    '--vz-border': '#E2E8F0',
    '--vz-heading': '#0A1628',
    '--vz-body': '#475569',
    '--vz-muted': '#64748B',
    '--vz-nav-bg': '#FFFFFF',
    '--vz-panel': '#EDF2F7',
    '--vz-input-bg': '#FFFFFF',
    // Darkened accents: the dark-theme cyan/teal/mint wash out on light backgrounds.
    '--vz-accent-cyan': '#007797',
    '--vz-accent-teal': '#0E8A85',
    '--vz-mint': '#0E8A85',
    '--vz-card-shadow': '0 1px 3px rgba(10,22,40,0.08), 0 4px 12px rgba(10,22,40,0.05)',
  },
};
