import { T } from '../theme/tokens';
import Button from './Button';

// Sizing/copy differences between the signup and dashboard previews, preserved from the monolith.
const variants = {
  signup: {
    pad: 20, img: 64, name: 16,
    greeting: { padding: '10px 16px', fontSize: 13 },
    button: { padding: '10px 16px', fontSize: 13 },
    testLabel: '▶ Test voice',
  },
  dashboard: {
    pad: 24, img: 72, name: 18,
    greeting: { padding: '10px 14px', fontSize: 12 },
    button: { padding: '8px 14px', fontSize: 12 },
    testLabel: '▶ Test',
  },
};

export default function AgentPreview({ agent, companyName, onTestVoice, title, greeting, variant = 'signup' }) {
  const v = variants[variant];
  const greetingText = greeting ?? `"Good morning, thank you for calling ${companyName || 'your business'}. My name is ${agent.name}, how can I help?"`;
  return (
    <div style={{ padding: v.pad, borderRadius: 12, background: `linear-gradient(135deg,rgba(0,169,206,0.15),rgba(100,204,201,0.08))`, border: `1px solid rgba(0,169,206,0.3)`, textAlign: 'center' }}>
      {title && <div style={{ fontSize: 13, color: 'var(--vz-accent-teal)', marginBottom: 12 }}>{title}</div>}
      <img src={agent.img} alt={agent.name} style={{ width: v.img, height: v.img, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px', display: 'block' }} />
      <div style={{ fontSize: v.name, fontWeight: 700, color: 'var(--vz-heading)' }}>{agent.name}</div>
      <div style={{ fontSize: 12, color: 'var(--vz-accent-teal)', marginBottom: 4 }}>{agent.personality}</div>
      <div style={{ fontSize: 11, color: 'var(--vz-body)', marginBottom: variant === 'dashboard' ? 16 : 10 }}>{agent.gender} · {agent.voice}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
        <div style={{ flex: 1, borderRadius: 8, background: 'rgba(0,0,0,0.3)', color: T.mint, fontStyle: 'italic', textAlign: 'left', ...v.greeting }}>{greetingText}</div>
        <Button style={{ whiteSpace: 'nowrap', flexShrink: 0, ...v.button }} onClick={onTestVoice}>{v.testLabel}</Button>
      </div>
    </div>
  );
}
