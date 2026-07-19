import { T } from '../theme/tokens';

export default function StepProgress({ currentStep, totalSteps, titles }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 13, color: 'var(--vz-muted)' }}>Step {currentStep} of {totalSteps}</span>
        <span style={{ fontSize: 13, color: 'var(--vz-accent-cyan)' }}>{titles[currentStep - 1]}</span>
      </div>
      <div style={{ height: 4, borderRadius: 2, background: 'var(--vz-border)' }}>
        <div style={{ height: '100%', borderRadius: 2, background: `linear-gradient(90deg,${T.cyan},${T.teal})`, width: `${(currentStep / totalSteps) * 100}%`, transition: 'width 0.3s' }} />
      </div>
    </div>
  );
}
