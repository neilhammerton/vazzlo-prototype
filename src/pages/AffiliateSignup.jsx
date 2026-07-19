import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { T, font } from '../theme/tokens';
import Button from '../components/Button';
import { inp, lbl } from '../components/Input';
import StepProgress from '../components/StepProgress';

export default function AffiliateSignup() {
  const navigate = useNavigate();
  const location = useLocation();
  // Allows deep-linking to a specific step, e.g. "Edit branding" in the affiliate dashboard.
  const [step, setStep] = useState(location.state?.step ?? 1);
  const [f, setF] = useState({ name: '', email: '', company: '', phone: '', brandName: '', template: 'dark', logo: null, primaryColor: '#00A9CE', accentColor: '#64CCC9', fontChoice: 'Inter' });

  return <div style={{ maxWidth: 520, margin: '0 auto', padding: '40px 24px' }}>
    <StepProgress currentStep={step} totalSteps={3} titles={['Your details', 'Brand your page', 'Review & launch']} />

    {step === 1 && <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 24 }}>Tell us about you</h2>
      {[['Full name', 'name', 'text', 'Jane Smith'], ['Email', 'email', 'email', 'jane@youragency.com'], ['Company (optional)', 'company', 'text', 'Your Agency Ltd'], ['Phone', 'phone', 'tel', '07700 900000']].map(([l, n, t, ph], i) =>
        <div key={i} style={{ marginBottom: 16 }}><label style={lbl}>{l}</label><input style={inp} type={t} placeholder={ph} value={f[n]} onChange={(e) => setF({ ...f, [n]: e.target.value })} /></div>
      )}
      <Button fullWidth style={{ marginTop: 8 }} onClick={() => setStep(2)}>Continue</Button>
    </div>}

    {step === 2 && <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 6 }}>Brand your page</h2>
      <p style={{ color: 'var(--vz-body)', marginBottom: 24, fontSize: 14 }}>Customers sign up via your branded URL.</p>
      <div style={{ marginBottom: 16 }}>
        <label style={lbl}>Your branded URL</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ padding: '12px 14px', background: 'rgba(0,169,206,0.12)', border: `1px solid var(--vz-border)`, borderRight: 'none', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, fontSize: 14, color: 'var(--vz-accent-teal)', whiteSpace: 'nowrap' }}>ava.com/</div>
          <input style={{ ...inp, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} placeholder="yourbrand" value={f.brandName} onChange={(e) => setF({ ...f, brandName: e.target.value })} />
        </div>
        {f.brandName && <div style={{ fontSize: 12, color: T.green, marginTop: 6 }}>✓ ava.com/{f.brandName.toLowerCase()} is available</div>}
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={lbl}>Upload your logo or leave blank for Ava logo</label>
        <div style={{ border: `2px dashed var(--vz-border)`, borderRadius: 10, padding: 20, textAlign: 'center', cursor: 'pointer' }}>
          <div style={{ fontSize: 22, marginBottom: 6 }}>🖼️</div>
          <div style={{ fontSize: 13, color: 'var(--vz-body)' }}>PNG or SVG, max 2MB</div>
        </div>
      </div>
      <label style={lbl}>Template</label>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        {[{ id: 'light', l: 'Light', bg: '#F7FAFB', fg: '#0A1628' }, { id: 'dark', l: 'Dark', bg: '#0A1628', fg: '#FFF' }, { id: 'custom', l: 'Custom', bg: `linear-gradient(135deg,${T.purple},${T.cyan})`, fg: '#FFF' }].map((t) =>
          <div key={t.id} onClick={() => setF({ ...f, template: t.id })} style={{ flex: 1, cursor: 'pointer', borderRadius: 10, overflow: 'hidden', border: f.template === t.id ? `2px solid ${T.cyan}` : `1px solid var(--vz-border)` }}>
            <div style={{ height: 48, background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {t.id === 'custom' ? <span style={{ fontSize: 16 }}>🎨</span> : <div style={{ width: 24, height: 4, borderRadius: 2, background: T.cyan }} />}
            </div>
            <div style={{ padding: 8, textAlign: 'center', fontSize: 12, fontWeight: 600, color: f.template === t.id ? 'var(--vz-accent-cyan)' : 'var(--vz-body)', background: 'var(--vz-card)' }}>{t.l}</div>
          </div>
        )}
      </div>
      {f.template === 'custom' && <div style={{ padding: 16, borderRadius: 10, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
          <div><label style={lbl}>Primary colour</label><div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><input type="color" value={f.primaryColor} onChange={(e) => setF({ ...f, primaryColor: e.target.value })} style={{ width: 36, height: 36, border: 'none', borderRadius: 6, cursor: 'pointer' }} /><span style={{ fontSize: 13, color: 'var(--vz-body)' }}>{f.primaryColor}</span></div></div>
          <div><label style={lbl}>Accent colour</label><div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><input type="color" value={f.accentColor} onChange={(e) => setF({ ...f, accentColor: e.target.value })} style={{ width: 36, height: 36, border: 'none', borderRadius: 6, cursor: 'pointer' }} /><span style={{ fontSize: 13, color: 'var(--vz-body)' }}>{f.accentColor}</span></div></div>
        </div>
        <label style={lbl}>Font</label>
        <select style={{ ...inp, appearance: 'auto', color: T.dark, background: 'rgba(255,255,255,0.9)' }} value={f.fontChoice} onChange={(e) => setF({ ...f, fontChoice: e.target.value })}>
          <option>Inter</option><option>Poppins</option><option>DM Sans</option><option>Montserrat</option><option>Playfair Display</option>
        </select>
      </div>}

      {/* Live preview */}
      <label style={lbl}>Live preview</label>
      <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
        <div style={{ background: f.template === 'light' ? '#F7FAFB' : f.template === 'dark' ? '#0A1628' : f.primaryColor, padding: 24, fontFamily: f.template === 'custom' ? `'${f.fontChoice}',sans-serif` : font }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: f.template === 'custom' ? f.accentColor : T.cyan }} />
            <span style={{ fontSize: 14, fontWeight: 700, color: f.template === 'light' ? '#0A1628' : '#fff', fontFamily: f.template === 'custom' ? `'${f.fontChoice}',sans-serif` : font }}>{f.brandName || 'Your Brand'}</span>
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: f.template === 'light' ? '#0A1628' : '#fff', marginBottom: 8, fontFamily: f.template === 'custom' ? `'${f.fontChoice}',sans-serif` : font }}>AI Receptionist for your business</div>
          <div style={{ fontSize: 13, color: f.template === 'light' ? '#6B7B8D' : '#94A3B8', marginBottom: 16, fontFamily: f.template === 'custom' ? `'${f.fontChoice}',sans-serif` : font }}>Never miss a call. Starting at £3.25/day.</div>
          <div style={{ display: 'inline-block', padding: '8px 20px', borderRadius: 6, background: f.template === 'custom' ? f.accentColor : `linear-gradient(135deg,${T.cyan},${T.teal})`, color: '#fff', fontSize: 13, fontWeight: 600, fontFamily: f.template === 'custom' ? `'${f.fontChoice}',sans-serif` : font }}>Get started</div>
        </div>
        <div style={{ padding: '8px 12px', background: 'var(--vz-card)', fontSize: 11, color: 'var(--vz-body)', textAlign: 'center' }}>ava.com/{f.brandName?.toLowerCase() || 'yourbrand'}</div>
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        <Button variant="outline" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</Button>
        <Button style={{ flex: 1 }} onClick={() => setStep(3)}>Continue</Button>
      </div>
    </div>}

    {step === 3 && <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 6 }}>Review & launch</h2>
      <p style={{ color: 'var(--vz-body)', marginBottom: 24, fontSize: 14 }}>Check everything, then go live.</p>
      <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
        {[['Name', f.name || '—'], ['Email', f.email || '—'], ['URL', 'ava.com/' + (f.brandName?.toLowerCase() || '—')], ['Template', f.template], ['Commission', '15% recurring']].map(([k, v], i) =>
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 4 ? `1px solid var(--vz-border)` : 'none', fontSize: 14 }}>
            <span style={{ color: 'var(--vz-body)' }}>{k}</span><span style={{ color: 'var(--vz-heading)', fontWeight: 500 }}>{v}</span>
          </div>
        )}
      </div>
      <div style={{ padding: 16, borderRadius: 10, background: 'rgba(0,169,206,0.08)', border: `1px solid rgba(0,169,206,0.2)`, marginBottom: 24, fontSize: 13, color: 'var(--vz-accent-teal)' }}>No payment required. You earn 15% of every customer's monthly subscription, paid on the 1st of each month.</div>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button variant="outline" style={{ flex: 1 }} onClick={() => setStep(2)}>Back</Button>
        <Button style={{ flex: 1, background: `linear-gradient(135deg,${T.green},#16A34A)` }} onClick={() => navigate('/affiliate/dashboard')}>Launch my affiliate page</Button>
      </div>
    </div>}
  </div>;
}
