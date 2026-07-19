import { useState } from 'react';
import { T, font } from '../theme/tokens';
import { useTheme } from '../theme/ThemeContext';
import logoDarkTheme from '../assets/brand/ava-horizontal-white.png';
import logoLightTheme from '../assets/brand/ava-horizontal.png';

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export function Logo({ size = 28 }) {
  const { theme } = useTheme();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <img src={theme === 'dark' ? logoDarkTheme : logoLightTheme} alt="Ava" style={{ height: size * 2, width: 'auto' }} />
    </div>
  );
}

const navBtn = {
  padding: '10px 20px',
  borderRadius: 8,
  border: `1.5px solid ${T.cyan}`,
  background: 'transparent',
  color: 'var(--vz-heading)',
  fontSize: 13,
  fontWeight: 600,
  fontFamily: font,
  cursor: 'pointer',
  transition: 'all 0.2s',
};

export default function Navbar({ onNavigate, current }) {
  const isDash = current === 'affDash' || current === 'custDash';
  const { theme, setTheme } = useTheme();
  const [hov, setHov] = useState(null);
  const hoverStyle = { background: `rgba(0,169,206,0.2)` };
  const nb = (label, target, idx) => (
    <button
      style={{ ...navBtn, ...(hov === idx ? hoverStyle : {}) }}
      onMouseEnter={() => setHov(idx)}
      onMouseLeave={() => setHov(null)}
      onClick={() => onNavigate(target)}
    >
      {label}
    </button>
  );

  let buttons = null;
  if (isDash) {
    buttons = nb('Log out', 'home', 0);
  } else if (current === 'home' || current === 'signup') {
    buttons = <>{nb('Affiliate Homepage', 'affiliate', 0)}{nb('Login', 'login', 1)}</>;
  } else if (current === 'affiliate' || current === 'affSignup') {
    buttons = <>{nb('Customer Homepage', 'home', 0)}{nb('Login', 'login', 1)}</>;
  } else if (current === 'login') {
    buttons = <>{nb('Customer Homepage', 'home', 0)}{nb('Affiliate Homepage', 'affiliate', 1)}</>;
  }

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', borderBottom: `1px solid var(--vz-border)`, background: 'var(--vz-nav-bg)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}><Logo /></div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {buttons}
        <button
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{ padding: '10px 12px', borderRadius: 8, border: `1px solid var(--vz-border)`, background: 'transparent', color: 'var(--vz-heading)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
}
