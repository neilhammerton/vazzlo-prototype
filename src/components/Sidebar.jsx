import { T } from '../theme/tokens';

export default function Sidebar({ tabs, activeTab, onTabChange }) {
  return (
    <div style={{ width: 220, background: 'var(--vz-panel)', borderRight: `1px solid var(--vz-border)`, padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px', marginBottom: 28, fontSize: 14, fontWeight: 700, color: 'var(--vz-accent-teal)' }}>Menu</div>
      {tabs.map((item, i) => (
        <div
          key={i}
          style={{
            padding: '10px 20px',
            fontSize: 14,
            color: activeTab === item ? 'var(--vz-heading)' : 'var(--vz-accent-teal)',
            fontWeight: activeTab === item ? 600 : 400,
            background: activeTab === item ? 'rgba(0,169,206,0.12)' : 'transparent',
            cursor: 'pointer',
            borderLeft: activeTab === item ? `3px solid ${T.cyan}` : '3px solid transparent',
          }}
          onClick={() => onTabChange(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
