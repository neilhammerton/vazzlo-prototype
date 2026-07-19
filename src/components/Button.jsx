import { T, font } from '../theme/tokens';

const variants = {
  primary: {
    border: 'none',
    background: `linear-gradient(135deg,${T.cyan},${T.teal})`,
  },
  outline: {
    border: `1.5px solid ${T.cyan}`,
    background: 'transparent',
  },
  danger: {
    border: `1px solid ${T.coral}`,
    background: 'transparent',
  },
};

const sizes = {
  md: { padding: '14px 28px', fontSize: 15 },
  sm: { padding: '8px 16px', fontSize: 13 },
};

export default function Button({ variant = 'primary', size = 'md', fullWidth = false, style, children, ...rest }) {
  return (
    <button
      style={{
        borderRadius: 8,
        // Primary sits on the gradient (always white); outline follows the theme.
        color: variant === 'danger' ? T.coral : variant === 'outline' ? 'var(--vz-heading)' : T.white,
        fontWeight: 600,
        fontFamily: font,
        cursor: 'pointer',
        transition: 'all 0.2s',
        letterSpacing: '0.01em',
        ...(fullWidth ? { width: '100%' } : {}),
        ...variants[variant],
        ...sizes[size],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
