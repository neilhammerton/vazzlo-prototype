import { useNavigate } from 'react-router-dom';
import { T, font } from '../theme/tokens';
import { useTheme } from '../theme/ThemeContext';
import Button from '../components/Button';
import { AGENTS } from '../data/agents';
import step1Img from '../assets/images/step1-upload.png';
import step2Img from '../assets/images/step2-voice.png';
import step3Img from '../assets/images/step3-golive.png';
import answerEveryCallIcon from '../assets/images/answer-every-call.png';
import takeMessagesIcon from '../assets/images/take-messages.png';
import bookAppointmentsIcon from '../assets/images/book-appointments.png';
import routeToHumansIcon from '../assets/images/route-to-humans.png';
import answerFaqsIcon from '../assets/images/answer-faqs.png';
import yourVoiceIcon from '../assets/images/your-voice-your-brand.png';

// Carousel rotation order preserved from the monolith (not the AGENTS array order).
const carouselOrder = ['Grace', 'Priya', 'Ruby', 'Tom', 'Amara', 'Kenji', 'Marcus'];
const carouselAgents = carouselOrder.map((name) => AGENTS.find((a) => a.name === name));

const howItWorksSteps = [
  { s: 'Step 1', t: 'Tell us about your business', d: 'Upload a document about your services. Our AI learns your hours, team, and FAQs.', img: step1Img },
  { s: 'Step 2', t: 'Choose your AI receptionist', d: "Pick a name, voice, and personality. Preview how they'll greet your callers.", img: step2Img },
  { s: 'Step 3', t: 'Go live instantly', d: 'We assign a UK 0333 number. Divert your line and the AI starts answering.', img: step3Img },
];

const features = [
  { icon: answerEveryCallIcon, t: 'Answer every call' },
  { icon: takeMessagesIcon, t: 'Take messages' },
  { icon: bookAppointmentsIcon, t: 'Book appointments' },
  { icon: routeToHumansIcon, t: 'Route to humans' },
  { icon: answerFaqsIcon, t: 'Answer FAQs' },
  { icon: yourVoiceIcon, t: 'Your voice, your brand' },
];

export default function CustomerHome() {
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  return <div>
    <section style={{ padding: '60px 32px 80px', background: `radial-gradient(720px 520px at 20% 12%,rgba(0,169,206,0.10),transparent 60%),radial-gradient(680px 520px at 84% 20%,rgba(100,204,201,0.07),transparent 60%)`, textAlign: 'center' }}>
      {/* Cross-fade: each image eases in over the first 4.76% (~1.2s) of the cycle while
          the previous one is still easing out (14.28%–19.04%), so transitions overlap. */}
      <style>{`
        @keyframes fadeChar{0%{opacity:0;transform:scale(0.95)}4.76%,14.28%{opacity:1;transform:scale(1)}19.04%,100%{opacity:0;transform:scale(0.95)}}
        @keyframes breathe{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:1;transform:scale(1.07)}}
      `}</style>
      {/* Rotating AI receptionist characters */}
      <div style={{ position: 'relative', width: 150, height: 150, margin: '0 auto 8px' }}>
        <div style={{ position: 'absolute', inset: -16, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,169,206,0.40),transparent 68%)', filter: 'blur(6px)', animation: 'breathe 3.6s ease-in-out infinite' }} />
        {carouselAgents.map((a, i) => (
          <img key={a.name} src={a.img} alt="" style={{
            position: 'absolute', top: 0, left: 0, width: 150, height: 150,
            borderRadius: '50%', objectFit: 'cover',
            animation: `fadeChar 25.2s ${-i * 3.6}s infinite`,
            opacity: 0,
          }} />
        ))}
      </div>
      {/* "Meet [Name]" label, synced with the carousel via identical animation timing */}
      <div style={{ position: 'relative', height: 20, marginBottom: 12 }}>
        {carouselAgents.map((a, i) => (
          <span key={a.name} style={{
            position: 'absolute', left: 0, width: '100%',
            fontSize: 13, fontWeight: 600, color: 'var(--vz-mint)',
            animation: `fadeChar 25.2s ${-i * 3.6}s infinite`,
            opacity: 0,
          }}>Meet {a.name}</span>
        ))}
      </div>
      <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 20, background: 'rgba(0,169,206,0.12)', border: `1px solid rgba(0,169,206,0.25)`, fontSize: 13, color: 'var(--vz-accent-cyan)', fontWeight: 600, marginBottom: 24 }}>AI Receptionists for UK Businesses</div>
      <h1 style={{ fontSize: 60, fontWeight: 800, color: 'var(--vz-heading)', margin: '0 auto 20px', maxWidth: 720, lineHeight: 1.04, letterSpacing: '-0.02em' }}>
        Never miss a call.<br />
        Never miss a lead.<br />
        <span style={{ background: `linear-gradient(135deg,${T.cyan},${T.teal})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Never miss a booking.</span>
      </h1>
      <p style={{ fontSize: 19, fontWeight: 500, color: 'var(--vz-body)', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.6 }}>An AI voice agent that answers your business calls 24/7 — taking messages, booking appointments, and routing urgent callers to you.</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button style={{ padding: '18px 56px', fontSize: 19, fontWeight: 700, borderRadius: 10, boxShadow: '0 14px 40px rgba(0,169,206,0.35)' }} onClick={() => navigate('/signup')}>Start now for only £3.25+VAT / day</Button>
      </div>
      <p style={{ fontSize: 13, color: 'var(--vz-body)', marginTop: 16 }}>No contracts. Cancel anytime. Live in under 5 minutes.</p>
    </section>

    {/* Try it */}
    <section style={{ padding: '28px 32px', background: `linear-gradient(90deg,rgba(0,169,206,0.08),rgba(100,204,201,0.04))`, borderTop: `1px solid var(--vz-border)`, borderBottom: `1px solid var(--vz-border)`, textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--vz-heading)' }}>Try it now!</div>
          <div style={{ fontSize: 17, color: 'var(--vz-accent-teal)' }}>Call <strong style={{ color: 'var(--vz-heading)', fontSize: 22, letterSpacing: '0.03em' }}>0333 150 0909</strong> to speak to our AI receptionist and see how it works!</div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section style={{ display: 'flex', justifyContent: 'center', gap: 48, padding: '32px', borderBottom: `1px solid var(--vz-border)`, flexWrap: 'wrap' }}>
      {[{ num: '47%', desc: 'of SME calls go unanswered' }, { num: '85%', desc: 'of callers never try again' }, { num: '24/7', desc: 'AI receptionist coverage' }, { num: '<5 min', desc: 'from signup to live' }].map((s, i) =>
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--vz-accent-cyan)' }}>{s.num}</div>
          <div style={{ fontSize: 13, color: 'var(--vz-body)' }}>{s.desc}</div>
        </div>
      )}
    </section>

    {/* Features */}
    <section style={{ padding: '80px 32px', background: 'var(--vz-glass)', borderTop: `1px solid var(--vz-border)`, borderBottom: `1px solid var(--vz-border)` }}>
      <style>{`
        .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        @media(max-width:900px){.feat-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.feat-grid{grid-template-columns:1fr}}
      `}</style>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--vz-heading)', textAlign: 'center', marginBottom: 48 }}>What your AI receptionist handles</h2>
        <div className="feat-grid">
          {features.map((f, i) =>
            <div key={i} style={{ padding: 24, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, boxShadow: 'var(--vz-card-shadow)', textAlign: 'center' }}>
              <img src={f.icon} alt="" style={{ width: 88, height: 88, objectFit: 'contain', display: 'block', margin: '0 auto 14px' }} />
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--vz-accent-cyan)', margin: 0 }}>{f.t}</h3>
            </div>
          )}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section style={{ padding: '80px 32px', maxWidth: 1000, margin: '0 auto' }}>
      <style>{`
        .hiw-flow{display:flex;align-items:stretch}
        .hiw-line{flex:0 0 28px;align-self:center;height:2px;background:linear-gradient(90deg,${T.cyan},${T.teal})}
        @media(max-width:900px){
          .hiw-flow{flex-direction:column}
          .hiw-line{flex:0 0 28px;width:2px;height:28px;align-self:center;background:linear-gradient(180deg,${T.cyan},${T.teal})}
        }
      `}</style>
      <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--vz-heading)', textAlign: 'center', marginBottom: 12 }}>How it works</h2>
      <p style={{ textAlign: 'center', color: 'var(--vz-body)', marginBottom: 56, fontSize: 16 }}>Your AI receptionist is live in three steps</p>
      <div className="hiw-flow">
        {howItWorksSteps.map((item, i) => <div key={item.s} style={{ display: 'contents' }}>
          {i > 0 && <div className="hiw-line" />}
          <div style={{ flex: 1, padding: 24, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, boxShadow: 'var(--vz-card-shadow)', display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 40, padding: '0 16px', borderRadius: 20, background: `linear-gradient(135deg,${T.cyan},${T.teal})`, fontSize: 15, fontWeight: 800, color: T.dark, marginBottom: 16 }}>{item.s}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--vz-heading)', marginTop: 0, marginBottom: 8 }}>{item.t}</h3>
              <p style={{ fontSize: 14, color: 'var(--vz-body)', lineHeight: 1.6, margin: 0 }}>{item.d}</p>
            </div>
            <img src={item.img} alt="" style={{ width: 96, height: 96, objectFit: 'contain', flexShrink: 0 }} />
          </div>
        </div>)}
      </div>
    </section>

    {/* Pricing */}
    <section style={{ padding: '80px 32px', maxWidth: 500, margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 12 }}>Simple pricing</h2>
      <p style={{ color: 'var(--vz-body)', marginBottom: 40 }}>One plan. Everything included. No per-call charges.</p>
      <div style={{ padding: 40, borderRadius: 16, background: `linear-gradient(145deg,rgba(0,169,206,0.1),rgba(100,204,201,0.05))`, border: `1.5px solid ${T.cyan}` }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--vz-accent-teal)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>All-inclusive</div>
        {/* Slight left nudge so the £ price reads as optically centred */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4, marginBottom: 4, paddingLeft: 12 }}>
          <span style={{ fontSize: 56, fontWeight: 800, color: 'var(--vz-heading)' }}>£3.25</span>
          <span style={{ fontSize: 18, color: 'var(--vz-body)' }}>/day</span>
        </div>
        <div style={{ fontSize: 14, color: 'var(--vz-body)', marginBottom: 24 }}>That's just £99/month + VAT</div>
        <div style={{ textAlign: 'left', maxWidth: 280, margin: '0 auto 28px' }}>
          {['UK 0333 number included', '24/7 AI voice receptionist', 'Message taking & email alerts', 'Calendly & Google Calendar booking', 'Trained from your documents', 'Cancel anytime'].map((item, i) =>
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 14, color: 'var(--vz-heading)' }}>
              <span style={{ color: T.green }}>✓</span>{item}
            </div>
          )}
          {['Website AI training', 'Human call transfer'].map((item, i) =>
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 14, color: 'var(--vz-muted)' }}>
              <span style={{ color: T.amber }}>★</span><span>{item}</span><span style={{ fontSize: 11, color: T.amber, marginLeft: 4 }}>Premium</span>
            </div>
          )}
        </div>
        <Button fullWidth style={{ padding: '16px', fontSize: 16 }} onClick={() => navigate('/signup')}>Get started now</Button>
      </div>
    </section>

    {/* Affiliate CTA */}
    <section style={{ padding: '64px 32px', textAlign: 'center', borderTop: `1px solid var(--vz-border)`, background: `radial-gradient(ellipse at 50% 50%,rgba(248,72,94,0.06) 0%,transparent 60%)` }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 12 }}>Refer AI receptionists and earn recurring income</h2>
      <p style={{ color: 'var(--vz-body)', maxWidth: 520, margin: '0 auto 24px', fontSize: 15, lineHeight: 1.6 }}>Earn 15% recurring commission on every customer. We handle the tech, billing, and support. No technical knowledge needed.</p>
      <Button variant="outline" style={{ color: 'var(--vz-heading)' }} onClick={() => navigate('/affiliate')}>Learn about the affiliate programme →</Button>
    </section>

    <footer style={{ padding: '32px', textAlign: 'center', fontSize: 13, color: 'var(--vz-body)', borderTop: `1px solid var(--vz-border)` }}>
      {/* Design test toggles */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 11, color: 'var(--vz-muted)', padding: '8px 0', marginRight: 8 }}>Theme preview:</div>
        {[['Dark', 'dark'], ['Light', 'light'], ['Modern', 'modern']].map(([label, id]) =>
          <button
            key={id}
            style={{ padding: '6px 14px', borderRadius: 6, fontSize: 11, fontFamily: font, border: `1px solid var(--vz-border)`, background: 'var(--vz-glass)', color: 'var(--vz-accent-teal)', cursor: 'pointer' }}
            onClick={() => {
              if (id === 'modern') {
                alert('Theme: Modern\n\nIn production, this switches the affiliate-branded page template.\n\nModern = custom colours + fonts');
              } else {
                setTheme(id);
              }
            }}
          >{label}</button>
        )}
      </div>
      © 2026 Ava. All rights reserved.
    </footer>
  </div>;
}
