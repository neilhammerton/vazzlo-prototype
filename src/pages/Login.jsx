import { useNavigate } from 'react-router-dom';
import { T, font } from '../theme/tokens';
import Button from '../components/Button';
import { inp, lbl } from '../components/Input';
import { GoogleIcon } from '../components/CalendarIntegration';

export default function Login() {
  const navigate = useNavigate();

  return <div style={{ maxWidth: 400, margin: '60px auto', padding: '0 24px', textAlign: 'center' }}>
    <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', margin: '40px 0 8px' }}>Login</h2>
    <p style={{ color: 'var(--vz-body)', marginBottom: 24, fontSize: 14 }}>Access your dashboard, messages, and settings.</p>
    <button style={{ width: '100%', padding: '12px', borderRadius: 8, border: `1px solid var(--vz-border)`, background: 'var(--vz-glass)', color: 'var(--vz-heading)', fontSize: 14, fontFamily: font, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }} onClick={() => navigate('/dashboard')}>
      <GoogleIcon />
      Sign in with Google
    </button>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <div style={{ flex: 1, height: 1, background: 'var(--vz-border)' }} />
      <span style={{ fontSize: 12, color: 'var(--vz-body)' }}>or use email</span>
      <div style={{ flex: 1, height: 1, background: 'var(--vz-border)' }} />
    </div>
    <div style={{ marginBottom: 16, textAlign: 'left' }}><label style={lbl}>Email</label><input style={inp} type="email" placeholder="you@yourbusiness.co.uk" /></div>
    <div style={{ marginBottom: 20, textAlign: 'left' }}><label style={lbl}>Password</label><input style={inp} type="password" placeholder="••••••••" /></div>
    <Button fullWidth style={{ marginBottom: 12 }} onClick={() => navigate('/dashboard')}>Log in</Button>
    <p style={{ fontSize: 13, color: 'var(--vz-accent-cyan)', cursor: 'pointer' }}>Forgot password?</p>
    <p style={{ fontSize: 13, color: 'var(--vz-body)', marginTop: 16 }}>Don't have an account? Sign up as a <span style={{ color: 'var(--vz-accent-cyan)', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Customer</span> or <span style={{ color: 'var(--vz-accent-cyan)', cursor: 'pointer' }} onClick={() => navigate('/affiliate')}>Affiliate</span></p>

    {/* Test buttons for development */}
    <div style={{ marginTop: 32, padding: 20, borderRadius: 12, border: `1px dashed var(--vz-border)`, background: 'var(--vz-glass)' }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--vz-muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Development Test Logins</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={{ flex: 1, padding: '10px', borderRadius: 8, border: `1px solid ${T.teal}`, background: 'rgba(100,204,201,0.08)', color: 'var(--vz-accent-teal)', fontSize: 13, fontFamily: font, cursor: 'pointer', fontWeight: 600 }} onClick={() => navigate('/dashboard')}>Login as Test Customer</button>
        <button style={{ flex: 1, padding: '10px', borderRadius: 8, border: `1px solid ${T.purple}`, background: 'rgba(168,85,247,0.08)', color: T.purple, fontSize: 13, fontFamily: font, cursor: 'pointer', fontWeight: 600 }} onClick={() => navigate('/affiliate/dashboard')}>Login as Test Affiliate</button>
      </div>
    </div>
  </div>;
}
