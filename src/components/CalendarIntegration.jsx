import { T, font } from '../theme/tokens';
import Button from './Button';
import { inp, lbl } from './Input';

export function GoogleIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

const CalendlyIcon = ({ size = 36, fontSize = 18, radius = 8 }) => (
  <div style={{ width: size, height: size, borderRadius: radius, background: '#006BFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize, color: '#fff', fontWeight: 700, flexShrink: 0 }}>C</div>
);

/**
 * Multi-step calendar connection flow: choose provider (0) → connecting (1) → settings (2) → done (3).
 * Controlled by the parent via provider/step/settings and their setters.
 *
 * `compact` renders the smaller signup-flow variant from the monolith; the default
 * is the fuller dashboard variant. Copy and sizing differences are preserved exactly.
 */
export default function CalendarIntegration({ provider, setProvider, step, setStep, settings, setSettings, email = 'jane@abcdental.co.uk', onConnected, onDisconnected, compact = false }) {
  const startGoogle = () => {
    setProvider('google');
    setStep(1);
    setTimeout(() => setStep(2), 1500);
  };
  const startCalendly = () => {
    setProvider('calendly');
    setStep(2);
  };
  const cancel = () => {
    setStep(0);
    setProvider(null);
  };
  const save = () => {
    onConnected?.();
    setStep(3);
  };
  const disconnect = () => {
    setStep(0);
    setProvider(null);
    onDisconnected?.();
  };

  if (compact) {
    return (
      <>
        {step === 0 && <>
          <div onClick={startGoogle} style={{ padding: 14, borderRadius: 10, border: `1px solid var(--vz-border)`, background: 'var(--vz-glass)', cursor: 'pointer', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><GoogleIcon /></div>
            <div style={{ flex: 1, textAlign: 'left' }}><div style={{ fontSize: 13, fontWeight: 600, color: 'var(--vz-heading)' }}>Connect Google Calendar</div><div style={{ fontSize: 11, color: 'var(--vz-body)' }}>Sign in with Google — we'll read your availability</div></div>
            <span style={{ fontSize: 12, color: 'var(--vz-accent-cyan)' }}>Connect →</span>
          </div>
          <div onClick={startCalendly} style={{ padding: 14, borderRadius: 10, border: `1px solid var(--vz-border)`, background: 'var(--vz-glass)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
            <CalendlyIcon size={32} fontSize={16} />
            <div style={{ flex: 1, textAlign: 'left' }}><div style={{ fontSize: 13, fontWeight: 600, color: 'var(--vz-heading)' }}>Connect Calendly</div><div style={{ fontSize: 11, color: 'var(--vz-body)' }}>Paste your API token from Calendly settings</div></div>
            <span style={{ fontSize: 12, color: 'var(--vz-accent-cyan)' }}>Connect →</span>
          </div>
          <p style={{ fontSize: 11, color: 'var(--vz-body)', marginTop: 10, marginBottom: 0 }}>Optional — skip this and connect later from your dashboard.</p>
        </>}

        {step === 1 && <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', border: `3px solid var(--vz-border)`, borderTopColor: T.cyan, margin: '0 auto 12px', animation: 'spin2 1s linear infinite' }} />
          <style>{`@keyframes spin2{to{transform:rotate(360deg)}}`}</style>
          <div style={{ fontSize: 14, color: 'var(--vz-heading)', fontWeight: 600 }}>Connecting to Google...</div>
          <div style={{ fontSize: 12, color: 'var(--vz-body)', marginTop: 4 }}>A Google sign-in window would open here</div>
        </div>}

        {step === 2 && <div style={{ borderRadius: 10, border: `1px solid ${T.cyan}`, background: 'rgba(0,169,206,0.04)', padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            {provider === 'google' ? <span style={{ fontSize: 14 }}>📅</span> : <div style={{ width: 20, height: 20, borderRadius: 4, background: '#006BFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff', fontWeight: 700 }}>C</div>}
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--vz-heading)' }}>Configure {provider === 'google' ? 'Google Calendar' : 'Calendly'}</span>
          </div>
          {provider === 'google' && <>
            <div style={{ padding: 8, borderRadius: 6, background: 'rgba(34,197,94,0.06)', marginBottom: 10, fontSize: 12 }}><span style={{ color: T.green }}>✓</span> <span style={{ color: 'var(--vz-heading)' }}>Signed in as {email}</span></div>
            <div style={{ marginBottom: 8 }}><label style={{ ...lbl, fontSize: 11 }}>Calendar</label><select style={{ ...inp, appearance: 'auto', fontSize: 12, padding: '6px 10px' }} value={settings.calName} onChange={(e) => setSettings({ ...settings, calName: e.target.value })}><option value="">— Choose —</option><option>Main Calendar</option><option>Appointments</option><option>Team Calendar</option></select></div>
          </>}
          {provider === 'calendly' && <>
            <div style={{ marginBottom: 8 }}><label style={{ ...lbl, fontSize: 11 }}>API Token</label><input style={{ ...inp, fontSize: 12, padding: '6px 10px' }} placeholder="Paste token" value={settings.calendlyToken} onChange={(e) => setSettings({ ...settings, calendlyToken: e.target.value })} /></div>
            <div style={{ marginBottom: 8 }}><label style={{ ...lbl, fontSize: 11 }}>Event Type</label><select style={{ ...inp, appearance: 'auto', fontSize: 12, padding: '6px 10px' }} onChange={(e) => setSettings({ ...settings, calName: e.target.value })}><option value="">— Select —</option><option>30 Min Meeting</option><option>15 Min Quick Call</option><option>60 Min Consultation</option></select></div>
          </>}
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--vz-heading)', marginBottom: 6, marginTop: 8 }}>Booking availability</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 6 }}>
            <div><label style={{ ...lbl, fontSize: 10 }}>Days</label><select style={{ ...inp, appearance: 'auto', fontSize: 12, padding: '6px 10px' }} value={settings.days} onChange={(e) => setSettings({ ...settings, days: e.target.value })}><option>Mon – Fri</option><option>Mon – Sat</option><option>Every day</option></select></div>
            <div><label style={{ ...lbl, fontSize: 10 }}>Booking window</label><select style={{ ...inp, appearance: 'auto', fontSize: 12, padding: '6px 10px' }} value={settings.window} onChange={(e) => setSettings({ ...settings, window: e.target.value })}><option>1 week</option><option>2 weeks</option><option>4 weeks</option></select></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 6 }}>
            <div><label style={{ ...lbl, fontSize: 10 }}>Start</label><input type="time" style={{ ...inp, fontSize: 12, padding: '6px 10px' }} value={settings.start} onChange={(e) => setSettings({ ...settings, start: e.target.value })} /></div>
            <div><label style={{ ...lbl, fontSize: 10 }}>End</label><input type="time" style={{ ...inp, fontSize: 12, padding: '6px 10px' }} value={settings.end} onChange={(e) => setSettings({ ...settings, end: e.target.value })} /></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 10 }}>
            <div><label style={{ ...lbl, fontSize: 10 }}>Duration</label><select style={{ ...inp, appearance: 'auto', fontSize: 12, padding: '6px 10px' }} value={settings.duration} onChange={(e) => setSettings({ ...settings, duration: e.target.value })}><option value="15">15 min</option><option value="30">30 min</option><option value="45">45 min</option><option value="60">60 min</option></select></div>
            <div><label style={{ ...lbl, fontSize: 10 }}>Buffer</label><select style={{ ...inp, appearance: 'auto', fontSize: 12, padding: '6px 10px' }} value={settings.buffer} onChange={(e) => setSettings({ ...settings, buffer: e.target.value })}><option value="0">None</option><option value="5">5 min</option><option value="10">10 min</option><option value="15">15 min</option></select></div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button style={{ padding: '8px 18px', fontSize: 12 }} onClick={save}>Save & connect</Button>
            <Button variant="outline" style={{ padding: '8px 12px', fontSize: 12 }} onClick={cancel}>Cancel</Button>
          </div>
        </div>}

        {step === 3 && <div style={{ borderRadius: 10, border: `2px solid ${T.green}`, background: 'rgba(34,197,94,0.04)', padding: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {provider === 'google' ? <span style={{ fontSize: 14 }}>📅</span> : <div style={{ width: 20, height: 20, borderRadius: 4, background: '#006BFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff', fontWeight: 700 }}>C</div>}
              <div><div style={{ fontSize: 13, fontWeight: 600, color: 'var(--vz-heading)' }}>{provider === 'google' ? 'Google Calendar' : 'Calendly'}</div><div style={{ fontSize: 11, color: T.green }}>✓ Connected</div></div>
            </div>
            <button style={{ fontSize: 11, color: T.coral, background: 'none', border: 'none', cursor: 'pointer', fontFamily: font }} onClick={disconnect}>Change</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginTop: 8, fontSize: 11 }}>
            <div><span style={{ color: 'var(--vz-muted)' }}>Days</span><div style={{ color: 'var(--vz-heading)' }}>{settings.days}</div></div>
            <div><span style={{ color: 'var(--vz-muted)' }}>Hours</span><div style={{ color: 'var(--vz-heading)' }}>{settings.start}–{settings.end}</div></div>
            <div><span style={{ color: 'var(--vz-muted)' }}>Duration</span><div style={{ color: 'var(--vz-heading)' }}>{settings.duration} min</div></div>
          </div>
        </div>}
      </>
    );
  }

  return (
    <>
      {/* Step 0: Choose provider */}
      {step === 0 && <>
        <div onClick={startGoogle} style={{ padding: 14, borderRadius: 10, border: `1px solid var(--vz-border)`, background: 'var(--vz-glass)', cursor: 'pointer', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 12, transition: 'all 0.2s' }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><GoogleIcon size={20} /></div>
          <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 600, color: 'var(--vz-heading)' }}>Connect Google Calendar</div><div style={{ fontSize: 11, color: 'var(--vz-body)' }}>Sign in with Google — we'll read your calendar availability</div></div>
          <span style={{ fontSize: 13, color: 'var(--vz-accent-cyan)' }}>Connect →</span>
        </div>
        <div onClick={startCalendly} style={{ padding: 14, borderRadius: 10, border: `1px solid var(--vz-border)`, background: 'var(--vz-glass)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}>
          <CalendlyIcon />
          <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 600, color: 'var(--vz-heading)' }}>Connect Calendly</div><div style={{ fontSize: 11, color: 'var(--vz-body)' }}>Paste your API token — we'll sync your event types</div></div>
          <span style={{ fontSize: 13, color: 'var(--vz-accent-cyan)' }}>Connect →</span>
        </div>
      </>}

      {/* Step 1: Connecting (Google OAuth simulation) */}
      {step === 1 && <div style={{ textAlign: 'center', padding: '24px 0' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', border: `3px solid var(--vz-border)`, borderTopColor: T.cyan, margin: '0 auto 16px', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        <div style={{ fontSize: 14, color: 'var(--vz-heading)', fontWeight: 600 }}>Connecting to Google...</div>
        <div style={{ fontSize: 12, color: 'var(--vz-body)', marginTop: 4 }}>A Google sign-in window would open here</div>
      </div>}

      {/* Step 2: Configure settings */}
      {step === 2 && <div style={{ borderRadius: 10, border: `1px solid ${T.cyan}`, background: 'rgba(0,169,206,0.04)', padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          {provider === 'google'
            ? <div style={{ width: 28, height: 28, borderRadius: 6, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GoogleIcon size={16} /></div>
            : <CalendlyIcon size={28} fontSize={14} radius={6} />}
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--vz-heading)' }}>Configure {provider === 'google' ? 'Google Calendar' : 'Calendly'}</div>
        </div>

        {provider === 'calendly' && <>
          <div style={{ marginBottom: 10 }}><label style={{ ...lbl, fontSize: 11 }}>Calendly API Token</label><input style={{ ...inp, fontSize: 13, padding: '8px 12px' }} placeholder="Paste your personal access token" value={settings.calendlyToken} onChange={(e) => setSettings({ ...settings, calendlyToken: e.target.value })} /><div style={{ fontSize: 10, color: 'var(--vz-body)', marginTop: 4 }}>Find this at: Calendly → Settings → Integrations → API & Webhooks</div></div>
          <div style={{ marginBottom: 10 }}><label style={{ ...lbl, fontSize: 11 }}>Event Type</label><select style={{ ...inp, appearance: 'auto', fontSize: 13, padding: '8px 12px' }} onChange={(e) => setSettings({ ...settings, calName: e.target.value })}><option value="">— Select an event type —</option><option value="30 Min Meeting">30 Min Meeting</option><option value="15 Min Quick Call">15 Min Quick Call</option><option value="60 Min Consultation">60 Min Consultation</option></select></div>
        </>}

        {provider === 'google' && <>
          <div style={{ padding: 10, borderRadius: 8, background: 'rgba(34,197,94,0.06)', border: `1px solid rgba(34,197,94,0.15)`, marginBottom: 12, fontSize: 12 }}><span style={{ color: T.green }}>✓</span> <span style={{ color: 'var(--vz-heading)' }}>Signed in as {email}</span></div>
          <div style={{ marginBottom: 10 }}><label style={{ ...lbl, fontSize: 11 }}>Select calendar</label><select style={{ ...inp, appearance: 'auto', fontSize: 13, padding: '8px 12px' }} value={settings.calName} onChange={(e) => setSettings({ ...settings, calName: e.target.value })}><option value="">— Choose a calendar —</option><option value="ABC Dental Appointments">ABC Dental Appointments</option><option value="Jane Smith (personal)">Jane Smith (personal)</option><option value="Team Calendar">Team Calendar</option></select></div>
        </>}

        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--vz-heading)', marginBottom: 8, marginTop: 14 }}>Booking availability</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
          <div><label style={{ ...lbl, fontSize: 11 }}>Available days</label><select style={{ ...inp, appearance: 'auto', fontSize: 13, padding: '8px 12px' }} value={settings.days} onChange={(e) => setSettings({ ...settings, days: e.target.value })}><option>Mon – Fri</option><option>Mon – Sat</option><option>Every day</option><option>Custom</option></select></div>
          <div><label style={{ ...lbl, fontSize: 11 }}>Booking window</label><select style={{ ...inp, appearance: 'auto', fontSize: 13, padding: '8px 12px' }} value={settings.window} onChange={(e) => setSettings({ ...settings, window: e.target.value })}><option>1 week</option><option>2 weeks</option><option>4 weeks</option><option>8 weeks</option></select></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
          <div><label style={{ ...lbl, fontSize: 11 }}>Start time</label><input style={{ ...inp, fontSize: 13, padding: '8px 12px' }} type="time" value={settings.start} onChange={(e) => setSettings({ ...settings, start: e.target.value })} /></div>
          <div><label style={{ ...lbl, fontSize: 11 }}>End time</label><input style={{ ...inp, fontSize: 13, padding: '8px 12px' }} type="time" value={settings.end} onChange={(e) => setSettings({ ...settings, end: e.target.value })} /></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
          <div><label style={{ ...lbl, fontSize: 11 }}>Default duration</label><select style={{ ...inp, appearance: 'auto', fontSize: 13, padding: '8px 12px' }} value={settings.duration} onChange={(e) => setSettings({ ...settings, duration: e.target.value })}><option value="15">15 minutes</option><option value="30">30 minutes</option><option value="45">45 minutes</option><option value="60">60 minutes</option></select></div>
          <div><label style={{ ...lbl, fontSize: 11 }}>Buffer between bookings</label><select style={{ ...inp, appearance: 'auto', fontSize: 13, padding: '8px 12px' }} value={settings.buffer} onChange={(e) => setSettings({ ...settings, buffer: e.target.value })}><option value="0">No buffer</option><option value="5">5 minutes</option><option value="10">10 minutes</option><option value="15">15 minutes</option><option value="30">30 minutes</option></select></div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button style={{ padding: '10px 24px', fontSize: 13 }} onClick={save}>Save & activate</Button>
          <Button variant="outline" style={{ padding: '10px 16px', fontSize: 13 }} onClick={cancel}>Cancel</Button>
        </div>
      </div>}

      {/* Step 3: Connected & active */}
      {step === 3 && <div style={{ borderRadius: 10, border: `2px solid ${T.green}`, background: 'rgba(34,197,94,0.04)', padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {provider === 'google'
              ? <div style={{ width: 32, height: 32, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GoogleIcon /></div>
              : <CalendlyIcon size={32} fontSize={16} />}
            <div><div style={{ fontSize: 14, fontWeight: 600, color: 'var(--vz-heading)' }}>{provider === 'google' ? 'Google Calendar' : 'Calendly'}</div><div style={{ fontSize: 11, color: T.green }}>✓ Connected & Active</div></div>
          </div>
          <button style={{ padding: '4px 12px', borderRadius: 6, border: `1px solid ${T.coral}`, background: 'transparent', color: T.coral, fontSize: 11, fontFamily: font, cursor: 'pointer' }} onClick={disconnect}>Disconnect</button>
        </div>
        <div style={{ padding: 12, borderRadius: 8, background: 'var(--vz-glass)', border: `1px solid var(--vz-border)` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 13 }}>
            {provider === 'google' && <><div><span style={{ fontSize: 11, color: 'var(--vz-muted)' }}>Account</span><div style={{ color: 'var(--vz-heading)' }}>{email}</div></div><div><span style={{ fontSize: 11, color: 'var(--vz-muted)' }}>Calendar</span><div style={{ color: 'var(--vz-heading)' }}>{settings.calName || 'ABC Dental Appointments'}</div></div></>}
            {provider === 'calendly' && <><div><span style={{ fontSize: 11, color: 'var(--vz-muted)' }}>Event Type</span><div style={{ color: 'var(--vz-heading)' }}>{settings.calName || '30 Min Meeting'}</div></div><div><span style={{ fontSize: 11, color: 'var(--vz-muted)' }}>Token</span><div style={{ color: 'var(--vz-heading)' }}>••••••••{settings.calendlyToken.slice(-4) || 'xxxx'}</div></div></>}
            <div><span style={{ fontSize: 11, color: 'var(--vz-muted)' }}>Days</span><div style={{ color: 'var(--vz-heading)' }}>{settings.days}</div></div>
            <div><span style={{ fontSize: 11, color: 'var(--vz-muted)' }}>Hours</span><div style={{ color: 'var(--vz-heading)' }}>{settings.start} – {settings.end}</div></div>
            <div><span style={{ fontSize: 11, color: 'var(--vz-muted)' }}>Duration</span><div style={{ color: 'var(--vz-heading)' }}>{settings.duration} min</div></div>
            <div><span style={{ fontSize: 11, color: 'var(--vz-muted)' }}>Buffer</span><div style={{ color: 'var(--vz-heading)' }}>{settings.buffer} min</div></div>
          </div>
        </div>
        <Button variant="outline" style={{ padding: '6px 14px', fontSize: 12, marginTop: 10 }} onClick={() => setStep(2)}>Edit settings</Button>
      </div>}
    </>
  );
}
