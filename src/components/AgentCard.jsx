import { T } from '../theme/tokens';

const sizes = {
  md: { pad: 12, img: 48, gap: 12, name: 14, meta: 11, sub: 10, radius: 10 },
  sm: { pad: 10, img: 44, gap: 10, name: 13, meta: 10, sub: 10, radius: 10 },
};

export default function AgentCard({ agent, selected = false, onSelect, size = 'md' }) {
  const s = sizes[size];
  return (
    <div
      onClick={onSelect}
      style={{
        display: 'flex',
        gap: s.gap,
        alignItems: 'center',
        padding: s.pad,
        borderRadius: s.radius,
        cursor: 'pointer',
        border: selected ? `2px solid ${T.cyan}` : `1px solid var(--vz-border)`,
        background: selected ? 'rgba(0,169,206,0.08)' : 'transparent',
        transition: 'all 0.15s',
      }}
    >
      <img src={agent.img} alt={agent.name} style={{ width: s.img, height: s.img, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
      <div>
        <div style={{ fontSize: s.name, fontWeight: 700, color: 'var(--vz-heading)' }}>{agent.name}</div>
        <div style={{ fontSize: s.meta, color: 'var(--vz-accent-teal)' }}>{agent.personality}</div>
        <div style={{ fontSize: s.sub, color: 'var(--vz-body)' }}>{agent.gender} · {agent.voice}</div>
      </div>
    </div>
  );
}
