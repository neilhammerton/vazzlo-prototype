import { font } from '../theme/tokens';

export const inp = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 8,
  border: `1px solid var(--vz-border)`,
  background: 'var(--vz-input-bg)',
  color: 'var(--vz-heading)',
  fontSize: 15,
  fontFamily: font,
  outline: 'none',
  boxSizing: 'border-box',
};

export const lbl = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--vz-muted)',
  marginBottom: 6,
  letterSpacing: '0.02em',
};

export default function Input({ label, style, ...rest }) {
  return (
    <div>
      {label && <label style={lbl}>{label}</label>}
      <input style={{ ...inp, ...style }} {...rest} />
    </div>
  );
}
