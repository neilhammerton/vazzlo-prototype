import { useNavigate } from 'react-router-dom';
import { T } from '../theme/tokens';
import Button from '../components/Button';
import shareLinkIcon from '../assets/images/share-your-link-icon.png';
import peopleSignUpIcon from '../assets/images/people-sign-up-icon.png';
import youEarnIcon from '../assets/images/you-earn-15-icon.png';

export default function AffiliateHome() {
  const navigate = useNavigate();

  return <div style={{ maxWidth: 740, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
    <h1 style={{ fontSize: 40, fontWeight: 800, color: 'var(--vz-heading)', marginBottom: 12, lineHeight: 1.15 }}>Refer AI receptionists.<br /><span style={{ color: 'var(--vz-accent-teal)' }}>Earn recurring income.</span></h1>
    <p style={{ fontSize: 17, color: 'var(--vz-body)', lineHeight: 1.7, margin: '0 auto 40px', maxWidth: 580 }}>We build the whole thing for you in 10 minutes. You get a branded web link to share with your contacts — via LinkedIn, Facebook, Instagram, email, anywhere. We handle the tech, billing, and support.</p>

    {/* Infographic — this panel keeps its dark gradient in both themes, so its
        inner text uses fixed light colours rather than theme variables. */}
    <div style={{ padding: 32, borderRadius: 16, background: `linear-gradient(145deg,${T.navy},${T.dark})`, border: `1px solid var(--vz-border)`, marginBottom: 48 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: T.white, textAlign: 'center', marginBottom: 28 }}>How a few shares become £70k+ per year</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, flexWrap: 'wrap' }}>
        {[
          { icon: shareLinkIcon, title: 'Share your link', sub: 'LinkedIn, Facebook,\nInstagram, email', color: T.cyan },
          null,
          { icon: peopleSignUpIcon, title: 'People sign up', sub: 'No work from you.\nWe handle everything.', color: T.teal },
          null,
          { icon: youEarnIcon, title: 'You earn 15%', sub: '£14.85/month\nper customer', color: T.green },
        ].map((item, i) => item === null ?
          <div key={i} style={{ fontSize: 24, color: T.cyan, padding: '0 8px' }}>→</div> :
          <div key={i} style={{ textAlign: 'center', padding: 16, flex: '1 1 140px' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: `rgba(${item.color === T.cyan ? '0,169,206' : item.color === T.teal ? '100,204,201' : '34,197,94'},0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}><img src={item.icon} alt="" style={{ width: 48, height: 48, objectFit: 'contain' }} /></div>
            <div style={{ fontSize: 14, fontWeight: 700, color: T.white, marginBottom: 4 }}>{item.title}</div>
            <div style={{ fontSize: 12, color: T.lightSlate, whiteSpace: 'pre-line', lineHeight: 1.4 }}>{item.sub}</div>
          </div>
        )}
      </div>
      <div style={{ marginTop: 28, textAlign: 'center' }}>
        <div style={{ display: 'inline-block', padding: 20, borderRadius: 12, background: 'rgba(34,197,94,0.08)', border: `1px solid rgba(34,197,94,0.25)` }}>
          <div style={{ fontSize: 13, color: T.green, fontWeight: 600, marginBottom: 4 }}>Just 400 customers and you're earning</div>
          <div style={{ fontSize: 42, fontWeight: 800, color: T.white }}>£71,280<span style={{ fontSize: 16, color: T.green, fontWeight: 500 }}>/year</span></div>
          <div style={{ fontSize: 12, color: T.lightSlate, marginTop: 4 }}>400 × £14.85/month × 12 months = £71,280 recurring</div>
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', gap: 20, marginBottom: 48, flexWrap: 'wrap' }}>
      {[{ v: '15%', d: 'Recurring commission, every customer, every month' }, { v: '£0', d: 'No cost. No stock. No risk. We handle everything.' }, { v: '10 min', d: 'From signup to your branded page being live' }].map((item, i) =>
        <div key={i} style={{ flex: '1 1 180px', padding: 24, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}>
          <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--vz-accent-cyan)', marginBottom: 6 }}>{item.v}</div>
          <div style={{ fontSize: 13, color: 'var(--vz-body)', lineHeight: 1.5 }}>{item.d}</div>
        </div>
      )}
    </div>

    <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 16 }}>Your affiliate dashboard includes</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 40 }}>
      {['Unique branded URL', 'Real-time traffic stats', 'Customer sign-up tracking', 'Revenue share dashboard', 'Monthly payout reports', 'CSV export for accounting'].map((item, i) =>
        <div key={i} style={{ display: 'flex', gap: 8, fontSize: 14, color: 'var(--vz-heading)' }}><span style={{ color: 'var(--vz-accent-cyan)' }}>✓</span>{item}</div>
      )}
    </div>
    <Button style={{ padding: '18px 56px', fontSize: 19, fontWeight: 700, borderRadius: 10, boxShadow: '0 14px 40px rgba(0,169,206,0.35)' }} onClick={() => navigate('/affiliate/signup')}>Sign up as an Affiliate and start earning now!</Button>
  </div>;
}
