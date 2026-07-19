import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { T, font } from '../theme/tokens';
import Button from '../components/Button';
import { inp, lbl } from '../components/Input';
import StepProgress from '../components/StepProgress';
import AgentCard from '../components/AgentCard';
import AgentPreview from '../components/AgentPreview';
import CalendarIntegration, { GoogleIcon } from '../components/CalendarIntegration';
import { AGENTS } from '../data/agents';

export default function CustomerSignup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [f, setF] = useState({ firstName: '', lastName: '', email: '', mobile: '', emailV: false, mobileV: false, oE: '', oM: '', companyName: '', companyNum: '', postcode: '', pcResults: [], address1: '', agentName: 'Grace', forwardNumber: '' });
  const [sCal, setSCal] = useState(null); // null,"google","calendly"
  const [sCalStep, setSCalStep] = useState(0); // 0=choose, 1=connecting, 2=form, 3=done
  const [sCalSettings, setSCalSettings] = useState({ days: 'Mon – Fri', start: '09:00', end: '17:30', duration: '30', buffer: '15', window: '4 weeks', calName: '', calendlyToken: '' });
  const totalSteps = 5;
  const titles = ['Your details', 'Verify identity', 'Your business', 'Your AI receptionist', 'Go live'];
  const selectedAgent = AGENTS.find((a) => a.name === f.agentName) || AGENTS[1];
  const fg = (l, n, t = 'text', ph = '', dis = false) => <div style={{ marginBottom: 16 }}>
    <label style={lbl}>{l}</label>
    <input style={{ ...inp, opacity: dis ? 0.4 : 1 }} type={t} placeholder={ph} value={f[n]} disabled={dis} onChange={(e) => setF({ ...f, [n]: e.target.value })} />
  </div>;

  return <div style={{ maxWidth: 520, margin: '0 auto', padding: '40px 24px' }}>
    <StepProgress currentStep={step} totalSteps={totalSteps} titles={titles} />

    {step === 1 && <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 6 }}>Let's get you set up</h2>
      <p style={{ color: 'var(--vz-body)', marginBottom: 20, fontSize: 14 }}>Your AI receptionist will be live in under 5 minutes.</p>
      <button style={{ width: '100%', padding: '12px', borderRadius: 8, border: `1px solid var(--vz-border)`, background: 'var(--vz-glass)', color: 'var(--vz-heading)', fontSize: 14, fontFamily: font, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
        <GoogleIcon />
        Continue with Google
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div style={{ flex: 1, height: 1, background: 'var(--vz-border)' }} />
        <span style={{ fontSize: 12, color: 'var(--vz-body)' }}>or enter manually</span>
        <div style={{ flex: 1, height: 1, background: 'var(--vz-border)' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>{fg('First name', 'firstName', 'text', 'Jane')}</div>
        <div>{fg('Last name', 'lastName', 'text', 'Smith')}</div>
      </div>
      {fg('Email address', 'email', 'email', 'jane@yourbusiness.co.uk')}
      {fg('Mobile number', 'mobile', 'tel', '07700 900000')}
      <Button fullWidth style={{ marginTop: 8 }} onClick={() => setStep(2)}>Continue</Button>
    </div>}

    {step === 2 && <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 6 }}>Verify your identity</h2>
      <p style={{ color: 'var(--vz-body)', marginBottom: 28, fontSize: 14 }}>We've sent codes to your email and mobile.</p>
      {[['Email', f.emailV, 'oE', () => setF({ ...f, emailV: true })], ['Mobile', f.mobileV, 'oM', () => setF({ ...f, mobileV: true })]].map(([label, verified, field, verify], i) =>
        <div key={i} style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid ${verified ? T.green : T.border}`, marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: verified ? 0 : 12 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--vz-heading)' }}>{label} verification</span>
            {verified && <span style={{ fontSize: 13, color: T.green }}>✓ Verified</span>}
          </div>
          {!verified && <div style={{ display: 'flex', gap: 8 }}>
            <input style={{ ...inp, flex: 1 }} placeholder="Enter 6-digit code" value={f[field]} onChange={(e) => setF({ ...f, [field]: e.target.value })} />
            <Button style={{ padding: '12px 20px' }} onClick={verify}>Verify</Button>
          </div>}
        </div>
      )}
      <div style={{ display: 'flex', gap: 12 }}>
        <Button variant="outline" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</Button>
        <Button style={{ flex: 1 }} onClick={() => setStep(3)}>Continue</Button>
      </div>
    </div>}

    {step === 3 && <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 6 }}>Your business</h2>
      <p style={{ color: 'var(--vz-body)', marginBottom: 28, fontSize: 14 }}>This helps us set up your AI receptionist.</p>
      <div style={{ marginBottom: 16 }}>
        <label style={lbl}>Company name</label>
        <input style={inp} placeholder="Start typing to search Companies House..." value={f.companyName} onChange={(e) => setF({ ...f, companyName: e.target.value })} />
        {f.companyName.length > 2 && !f.companyNum && <div style={{ background: 'var(--vz-panel)', border: `1px solid var(--vz-border)`, borderRadius: 8, marginTop: 4, overflow: 'hidden' }}>
          {['ABC Dental Ltd (12345678)', 'ABC Design Studio Ltd (87654321)'].map((c, i) =>
            <div key={i} style={{ padding: '10px 16px', fontSize: 14, color: 'var(--vz-heading)', cursor: 'pointer', borderBottom: `1px solid var(--vz-border)` }} onClick={() => setF({ ...f, companyName: c.split(' (')[0], companyNum: c.match(/\((\d+)\)/)[1] })}>{c}</div>
          )}
        </div>}
      </div>
      {f.companyNum && <div style={{ padding: '8px 12px', background: 'rgba(0,169,206,0.08)', borderRadius: 8, marginBottom: 16, fontSize: 13, color: 'var(--vz-accent-teal)' }}>Companies House: {f.companyNum}</div>}
      <div style={{ marginBottom: 16 }}>
        <label style={lbl}>Postcode</label>
        <div style={{ display: 'flex', gap: 8 }}>
          <input style={{ ...inp, flex: 1 }} placeholder="e.g. SW1A 1AA" value={f.postcode} onChange={(e) => setF({ ...f, postcode: e.target.value })} />
          <Button style={{ padding: '12px 20px', whiteSpace: 'nowrap' }} onClick={() => setF({ ...f, pcResults: ['10 Downing Street, London', '11 Downing Street, London'] })}>Find address</Button>
        </div>
      </div>
      {f.pcResults.length > 0 && <div style={{ marginBottom: 16 }}>
        <label style={lbl}>Select your address</label>
        <select style={{ ...inp, appearance: 'auto' }} onChange={(e) => setF({ ...f, address1: e.target.value, pcResults: [] })}>
          <option value="">— Select —</option>
          {f.pcResults.map((a, i) => <option key={i} value={a}>{a}</option>)}
        </select>
      </div>}
      {f.address1 && <div style={{ padding: '10px 14px', background: 'rgba(0,169,206,0.08)', borderRadius: 8, marginBottom: 16, fontSize: 14, color: 'var(--vz-heading)' }}>{f.address1}</div>}
      <div style={{ marginBottom: 16 }}>
        <label style={lbl}>Fallback phone number</label>
        <p style={{ fontSize: 12, color: 'var(--vz-body)', marginBottom: 6, marginTop: 0 }}>When the AI can't handle a call, we'll transfer to this number.</p>
        <input style={inp} type="tel" placeholder="Your mobile or office number" value={f.forwardNumber} onChange={(e) => setF({ ...f, forwardNumber: e.target.value })} />
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="outline" style={{ flex: 1 }} onClick={() => setStep(2)}>Back</Button>
        <Button style={{ flex: 1 }} onClick={() => setStep(4)}>Continue</Button>
      </div>
    </div>}

    {step === 4 && <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 6 }}>Set up your AI receptionist</h2>
      <p style={{ color: 'var(--vz-body)', marginBottom: 28, fontSize: 14 }}>Train it on your business and choose its personality.</p>
      <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 12 }}>Knowledge base</h3>
        <label style={lbl}>Upload a document about your business</label>
        <div style={{ border: `2px dashed var(--vz-border)`, borderRadius: 10, padding: 28, textAlign: 'center', cursor: 'pointer', marginBottom: 4 }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>📄</div>
          <div style={{ fontSize: 14, color: 'var(--vz-body)' }}>Drop a PDF, DOCX, or TXT here</div>
          <div style={{ fontSize: 12, color: 'var(--vz-muted)', marginTop: 4 }}>or click to browse</div>
        </div>
      </div>
      <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 4 }}>Calendar Integration</h3>
        <p style={{ fontSize: 12, color: 'var(--vz-body)', margin: '0 0 14px' }}>Connect a calendar so your AI can book appointments for callers.</p>
        <CalendarIntegration
          compact
          provider={sCal}
          setProvider={setSCal}
          step={sCalStep}
          setStep={setSCalStep}
          settings={sCalSettings}
          setSettings={setSCalSettings}
          email={f.email || 'jane@abcdental.co.uk'}
        />
      </div>
      <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 12 }}>Choose your AI receptionist</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {AGENTS.map((a) => <AgentCard key={a.name} agent={a} selected={f.agentName === a.name} onSelect={() => setF({ ...f, agentName: a.name })} />)}
        </div>
      </div>
      {/* Agent preview with test button */}
      <div style={{ marginBottom: 20 }}>
        <AgentPreview agent={selectedAgent} companyName={f.companyName} />
      </div>
      {/* Fallback number */}
      <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 4 }}>Fallback number</h3>
        <p style={{ fontSize: 12, color: 'var(--vz-body)', margin: '0 0 12px' }}>If our AI has a technical issue, calls will automatically forward to this number.</p>
        <input style={inp} type="tel" placeholder="Your mobile or office number" value={f.forwardNumber} onChange={(e) => setF({ ...f, forwardNumber: e.target.value })} />
      </div>
      {/* Premium features - coming soon */}
      <div style={{ padding: 20, borderRadius: 12, background: 'rgba(245,158,11,0.04)', border: `1px dashed ${T.amber}`, marginBottom: 20, opacity: 0.6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 16 }}>★</span>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: T.amber, margin: 0 }}>Premium Features — Coming Soon</h3>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ ...lbl, color: 'var(--vz-muted)' }}>Website URL training</label>
          <input style={{ ...inp, opacity: 0.35, cursor: 'not-allowed' }} placeholder="https://yourbusiness.co.uk" disabled />
        </div>
        <div>
          <label style={{ ...lbl, color: 'var(--vz-muted)' }}>Human transfer number</label>
          <p style={{ fontSize: 11, color: 'var(--vz-body)', margin: '0 0 6px' }}>Route callers to a human when the AI detects they need one.</p>
          <input style={{ ...inp, opacity: 0.35, cursor: 'not-allowed' }} placeholder="Transfer destination number" disabled />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button variant="outline" style={{ flex: 1 }} onClick={() => setStep(3)}>Back</Button>
        <Button style={{ flex: 1 }} onClick={() => setStep(5)}>Continue to payment</Button>
      </div>
    </div>}

    {step === 5 && <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 6 }}>You're almost live</h2>
      <p style={{ color: 'var(--vz-body)', marginBottom: 28, fontSize: 14 }}>Review and enter payment details.</p>
      <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
        {[['Business', f.companyName || '—'], ['AI Agent', `${selectedAgent.name} (${selectedAgent.personality})`], ['Fallback number', f.forwardNumber || '—'], ['Monthly cost', '£99 + VAT']].map(([k, v], i) =>
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < 3 ? `1px solid var(--vz-border)` : 'none', fontSize: 14 }}>
            <span style={{ color: 'var(--vz-body)' }}>{k}</span><span style={{ color: 'var(--vz-heading)', fontWeight: 500 }}>{v}</span>
          </div>
        )}
      </div>
      <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 16 }}>Payment details</h3>
        <div style={{ padding: 24, borderRadius: 8, border: `1px dashed var(--vz-border)`, textAlign: 'center', color: 'var(--vz-body)', fontSize: 14 }}>
          <div style={{ fontSize: 22, marginBottom: 8 }}>💳</div>Stripe Checkout embedded here<div style={{ fontSize: 12, color: 'var(--vz-muted)', marginTop: 4 }}>PCI compliant · SSL encrypted</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button variant="outline" style={{ flex: 1 }} onClick={() => setStep(4)}>Back</Button>
        <Button style={{ flex: 1, background: `linear-gradient(135deg,${T.green},#16A34A)` }} onClick={() => setStep(6)}>Pay & go live</Button>
      </div>
    </div>}

    {step === 6 && <div style={{ textAlign: 'center', paddingTop: 40 }}>
      <div style={{ width: 80, height: 80, borderRadius: '50%', margin: '0 auto 24px', background: `linear-gradient(135deg,${T.green},#16A34A)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, color: T.white }}>✓</div>
      <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 8 }}>You're live!</h2>
      <p style={{ color: 'var(--vz-body)', marginBottom: 32, fontSize: 15 }}>Your AI receptionist is ready to answer calls.</p>
      <div style={{ padding: 24, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid ${T.green}`, marginBottom: 24 }}>
        <div style={{ fontSize: 13, color: 'var(--vz-accent-teal)', marginBottom: 8 }}>Your new number</div>
        <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--vz-heading)', letterSpacing: '0.02em' }}>0333 014 2847</div>
        <div style={{ fontSize: 13, color: 'var(--vz-body)', marginTop: 8 }}>Divert your existing business line to this number and {f.agentName || 'Sophie'} will start answering.</div>
      </div>
      {/* Email preview */}
      <div style={{ marginTop: 32, textAlign: 'left' }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--vz-muted)', marginBottom: 12, textAlign: 'center' }}>📧 Confirmation email preview</h3>
        <div style={{ background: '#FFFFFF', borderRadius: 12, overflow: 'hidden', border: `1px solid var(--vz-border)` }}>
          <div style={{ background: `linear-gradient(135deg,${T.dark},${T.navy})`, padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: `linear-gradient(135deg,${T.coral},${T.cyan})` }} />
            {/* Email mock keeps fixed colours in both themes */}
            <span style={{ fontSize: 16, fontWeight: 700, color: T.white }}>Ava</span>
          </div>
          <div style={{ padding: '28px', color: '#1a1a2e' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 8px', color: '#0A1628' }}>Welcome to Ava! 🎉</h2>
            <p style={{ fontSize: 14, color: '#5C6770', lineHeight: 1.7, margin: '0 0 20px' }}>Hi {f.firstName || 'Jane'}, your AI receptionist <strong>{f.agentName || 'Sophie'}</strong> is live and ready to answer calls for <strong>{f.companyName || 'your business'}</strong>.</p>
            <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: 10, padding: 20, marginBottom: 20 }}>
              <div style={{ fontSize: 13, color: '#0369A1', fontWeight: 600, marginBottom: 8 }}>YOUR PHONE NUMBER</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#0A1628', letterSpacing: '0.02em' }}>0333 014 2847</div>
            </div>
            <div style={{ fontSize: 14, color: '#5C6770', lineHeight: 1.8, marginBottom: 20 }}>
              <strong style={{ color: '#0A1628' }}>How to go live:</strong><br />
              1. Call your current phone provider<br />
              2. Ask them to set up a divert to <strong>0333 014 2847</strong><br />
              3. That's it — {f.agentName || 'Sophie'} will start answering your calls
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <div style={{ flex: 1, background: '#F7FAFB', borderRadius: 8, padding: 12, textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#6B7B8D' }}>Agent</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#0A1628' }}>{f.agentName || 'Sophie'}</div>
              </div>
              <div style={{ flex: 1, background: '#F7FAFB', borderRadius: 8, padding: 12, textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#6B7B8D' }}>Voice</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#0A1628' }}>{selectedAgent.personality}</div>
              </div>
              <div style={{ flex: 1, background: '#F7FAFB', borderRadius: 8, padding: 12, textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#6B7B8D' }}>Fallback</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#0A1628' }}>{f.forwardNumber || 'Not set'}</div>
              </div>
            </div>
            <div style={{ textAlign: 'center', padding: '12px', background: `linear-gradient(135deg,${T.cyan},${T.teal})`, borderRadius: 8, color: '#fff', fontWeight: 600, fontSize: 15 }}>Log in to your dashboard</div>
            <p style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center', marginTop: 16 }}>Questions? Reply to this email or call our AI support on 0333 150 0909</p>
          </div>
        </div>
      </div>
      <Button style={{ marginTop: 24 }} onClick={() => navigate('/dashboard')}>Go to your dashboard →</Button>
    </div>}
  </div>;
}
