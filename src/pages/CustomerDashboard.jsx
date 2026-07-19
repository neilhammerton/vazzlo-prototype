import { useState } from 'react';
import { T, font } from '../theme/tokens';
import Button from '../components/Button';
import { inp, lbl } from '../components/Input';
import Sidebar from '../components/Sidebar';
import AgentCard from '../components/AgentCard';
import AgentPreview from '../components/AgentPreview';
import CalendarIntegration from '../components/CalendarIntegration';
import DataTable from '../components/DataTable';
import { AGENTS } from '../data/agents';
import { customerMessages } from '../data/mockData';

const grace = AGENTS.find((a) => a.name === 'Grace');

export default function CustomerDashboard() {
  const [tab, setTab] = useState('Dashboard');
  const [agentName, setAgentName] = useState('Grace');
  const [calProvider, setCalProvider] = useState(null); // null, "google", "calendly"
  const [calSettings, setCalSettings] = useState({ days: 'Mon – Fri', start: '09:00', end: '17:30', duration: '30', buffer: '15', window: '4 weeks', calName: '', calendlyToken: '' });
  const [calStep, setCalStep] = useState(0); // 0=choose, 1=connecting, 2=settings, 3=done
  const tabs = ['Dashboard', 'Messages', 'Agent Setup', 'Billing', 'Settings'];
  const messages = customerMessages;
  const selectedAgent = AGENTS.find((a) => a.name === agentName) || grace;

  return <div style={{ display: 'flex', minHeight: 'calc(100vh - 65px)' }}>
    <Sidebar tabs={tabs} activeTab={tab} onTabChange={setTab} />
    <div style={{ flex: 1, padding: '32px', maxWidth: 960, overflow: 'auto' }}>

      {tab === 'Dashboard' && <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div><h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', margin: 0 }}>Welcome back, Jane</h1><p style={{ fontSize: 14, color: 'var(--vz-body)', margin: '4px 0 0' }}>ABC Dental Ltd</p></div>
          <div style={{ padding: '8px 16px', borderRadius: 8, background: 'rgba(34,197,94,0.12)', border: `1px solid rgba(34,197,94,0.3)`, fontSize: 13, color: T.green, fontWeight: 600 }}>● Agent Live</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 28 }}>
          {[{ v: '0333 014 2847', l: 'Your Number' }, { v: '47', l: 'Calls This Month' }, { v: '12', l: 'Appointments Booked' }, { v: '3', l: 'Calls Today' }].map((k, i) => <div key={i} style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}><div style={{ fontSize: 22, fontWeight: 700, color: 'var(--vz-heading)' }}>{k.v}</div><div style={{ fontSize: 12, color: 'var(--vz-body)', marginTop: 4 }}>{k.l}</div></div>)}
        </div>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 12 }}>Recent Messages</h2>
        <DataTable
          columns={[
            { key: 'd', label: 'Date', width: '120px' },
            { key: 'c', label: 'Caller', width: '120px', render: (m) => <span style={{ color: 'var(--vz-heading)', fontWeight: 500 }}>{m.c}</span> },
            { key: 's', label: 'Summary', width: '1fr' },
            { key: 'act', label: 'Action', width: '100px', render: () => <span style={{ color: 'var(--vz-accent-cyan)', cursor: 'pointer', fontSize: 12 }}>📧 Resend</span> },
          ]}
          data={messages.slice(0, 4)}
        />
        <div style={{ textAlign: 'center', marginTop: 12 }}><span style={{ fontSize: 13, color: 'var(--vz-accent-cyan)', cursor: 'pointer' }} onClick={() => setTab('Messages')}>View all messages →</span></div>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--vz-heading)', margin: '28px 0 12px' }}>Your AI Receptionist</h2>
        <div style={{ display: 'flex', gap: 16, padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, alignItems: 'center' }}>
          <img src={grace.img} alt="Grace" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
          <div style={{ flex: 1 }}><div style={{ fontSize: 16, fontWeight: 700, color: 'var(--vz-heading)' }}>Grace</div><div style={{ fontSize: 13, color: 'var(--vz-accent-teal)' }}>Warm professional · Female · British</div></div>
          <Button variant="outline" style={{ padding: '8px 16px', fontSize: 13 }} onClick={() => setTab('Agent Setup')}>Edit agent</Button>
        </div>
      </>}

      {tab === 'Messages' && <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', margin: 0 }}>Messages</h1>
          <Button variant="outline" style={{ padding: '8px 16px', fontSize: 13 }}>Export CSV</Button>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          {['All', 'Messages', 'Bookings', 'Transfers'].map((f, i) => <button key={i} style={{ padding: '6px 14px', borderRadius: 6, fontSize: 13, fontFamily: font, border: i === 0 ? `1px solid ${T.cyan}` : `1px solid var(--vz-border)`, background: i === 0 ? 'rgba(0,169,206,0.12)' : 'transparent', color: i === 0 ? 'var(--vz-accent-cyan)' : 'var(--vz-body)', cursor: 'pointer' }}>{f}</button>)}
          <div style={{ flex: 1 }} />
          <input style={{ ...inp, width: 200, padding: '6px 12px', fontSize: 13 }} placeholder="Search messages..." />
        </div>
        <DataTable
          columns={[
            { key: 'd', label: 'Date', width: '110px' },
            { key: 'c', label: 'Caller', width: '130px', render: (m) => <span style={{ color: 'var(--vz-heading)', fontWeight: 500 }}>{m.c}</span> },
            { key: 'ph', label: 'Phone', width: '90px', render: (m) => <span style={{ color: 'var(--vz-accent-teal)', fontSize: 11 }}>{m.ph}</span> },
            { key: 's', label: 'Summary', width: '1fr' },
            { key: 'act', label: 'Type', width: '80px', render: (m) => <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 4, background: m.act === 'Booking' ? 'rgba(34,197,94,0.12)' : m.act === 'Transfer' ? 'rgba(168,85,247,0.12)' : 'rgba(0,169,206,0.12)', color: m.act === 'Booking' ? T.green : m.act === 'Transfer' ? T.purple : T.cyan }}>{m.act}</span> },
            { key: 'action', label: 'Action', width: '80px', render: () => <span style={{ color: 'var(--vz-accent-cyan)', cursor: 'pointer', fontSize: 12 }}>📧 Resend</span> },
          ]}
          data={messages}
        />
      </>}

      {tab === 'Agent Setup' && <>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', margin: '0 0 24px' }}>Agent Setup</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 12 }}>Choose your AI receptionist</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {AGENTS.map((a) => <AgentCard key={a.name} agent={a} selected={a.name === agentName} onSelect={() => setAgentName(a.name)} size="sm" />)}
              </div>
            </div>
            <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 12 }}>Knowledge Base</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, borderRadius: 8, background: 'rgba(0,169,206,0.06)', border: `1px solid var(--vz-border)`, marginBottom: 12 }}>
                <div><div style={{ fontSize: 13, color: 'var(--vz-heading)', fontWeight: 500 }}>business_info.pdf</div><div style={{ fontSize: 11, color: 'var(--vz-body)' }}>Uploaded 3 Jul 2026 · 245 KB</div></div>
                <span style={{ fontSize: 12, color: T.coral, cursor: 'pointer' }}>Remove</span>
              </div>
              <div style={{ border: `2px dashed var(--vz-border)`, borderRadius: 10, padding: 16, textAlign: 'center', cursor: 'pointer' }}><div style={{ fontSize: 13, color: 'var(--vz-body)' }}>📄 Upload new document</div></div>
            </div>
            <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 4 }}>Calendar Integration</h3>
              <p style={{ fontSize: 12, color: 'var(--vz-body)', margin: '0 0 14px' }}>Connect a calendar so your AI can check availability and book appointments for callers.</p>
              <CalendarIntegration
                provider={calProvider}
                setProvider={setCalProvider}
                step={calStep}
                setStep={setCalStep}
                settings={calSettings}
                setSettings={setCalSettings}
              />
            </div>
            <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 12 }}>Fallback Number</h3>
              <p style={{ fontSize: 12, color: 'var(--vz-body)', margin: '0 0 8px' }}>Calls forward here if AI encounters a technical issue.</p>
              <input style={inp} defaultValue="07930 417 367" />
            </div>
          </div>
          <div>
            <div style={{ marginBottom: 20 }}>
              <AgentPreview
                variant="dashboard"
                title="Agent Preview"
                agent={selectedAgent}
                greeting={`"Good morning, thank you for calling ABC Dental. My name is ${selectedAgent.name}, how can I help?"`}
              />
            </div>
            <div style={{ padding: 20, borderRadius: 12, background: 'rgba(245,158,11,0.04)', border: `1px dashed ${T.amber}`, opacity: 0.6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><span>★</span><h3 style={{ fontSize: 14, fontWeight: 700, color: T.amber, margin: 0 }}>Premium — Coming Soon</h3></div>
              <div style={{ marginBottom: 8 }}><label style={{ ...lbl, color: 'var(--vz-muted)', fontSize: 12 }}>Website URL training</label><input style={{ ...inp, opacity: 0.35, cursor: 'not-allowed', padding: '8px 12px', fontSize: 13 }} disabled placeholder="https://yourbusiness.co.uk" /></div>
              <div><label style={{ ...lbl, color: 'var(--vz-muted)', fontSize: 12 }}>Human transfer number</label><input style={{ ...inp, opacity: 0.35, cursor: 'not-allowed', padding: '8px 12px', fontSize: 13 }} disabled placeholder="Transfer destination" /></div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 12 }}><Button style={{ padding: '12px 32px' }}>Save changes</Button><Button variant="outline" style={{ padding: '12px 32px' }}>Cancel</Button></div>
      </>}

      {tab === 'Billing' && <>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', margin: '0 0 24px' }}>Billing</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 28 }}>
          {[{ v: '£99', l: 'Monthly Plan' }, { v: '1 Aug 2026', l: 'Next Payment' }, { v: 'Active', l: 'Subscription Status', c: T.green }].map((k, i) => <div key={i} style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}><div style={{ fontSize: 24, fontWeight: 700, color: k.c || 'var(--vz-heading)' }}>{k.v}</div><div style={{ fontSize: 12, color: 'var(--vz-body)', marginTop: 4 }}>{k.l}</div></div>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 16 }}>Payment Method</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 8, background: 'var(--vz-glass)', border: `1px solid var(--vz-border)`, marginBottom: 12 }}>
              <div style={{ fontSize: 22 }}>💳</div>
              <div><div style={{ fontSize: 14, color: 'var(--vz-heading)' }}>•••• •••• •••• 4242</div><div style={{ fontSize: 12, color: 'var(--vz-body)' }}>Expires 12/28</div></div>
            </div>
            <Button variant="outline" fullWidth style={{ padding: '8px 16px', fontSize: 13 }}>Update payment method</Button>
          </div>
          <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 16 }}>Invoice History</h3>
            {[['1 Jul 2026', '£99.00', 'Paid'], ['1 Jun 2026', '£99.00', 'Paid'], ['1 May 2026', '£99.00', 'Paid']].map(([d, a, s], i) => <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < 2 ? `1px solid var(--vz-border)` : 'none', fontSize: 13 }}><span style={{ color: 'var(--vz-body)' }}>{d}</span><span style={{ color: 'var(--vz-heading)' }}>{a}</span><span style={{ color: T.green, fontSize: 12 }}>{s} ✓</span></div>)}
            <Button variant="outline" fullWidth style={{ padding: '6px 12px', fontSize: 12, marginTop: 12 }}>Download all invoices</Button>
          </div>
        </div>
      </>}

      {tab === 'Settings' && <>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', margin: '0 0 24px' }}>Settings</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 16 }}>Account Details</h3>
            {[['Name', 'Jane Smith'], ['Email', 'jane@abcdental.co.uk'], ['Mobile', '07930 417 367'], ['Company', 'ABC Dental Ltd'], ['Company No.', '12345678']].map(([l, v], i) => <div key={i} style={{ marginBottom: 12 }}><label style={{ ...lbl, fontSize: 12 }}>{l}</label><input style={inp} defaultValue={v} /></div>)}
            <Button style={{ padding: '10px 24px', fontSize: 13, marginTop: 4 }}>Save</Button>
          </div>
          <div>
            <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 16 }}>Notification Preferences</h3>
              {[['Email summary after every call', true], ['Daily digest at 8am', false], ['Weekly report (Monday)', true], ['SMS alert for missed transfers', false]].map(([l, on], i) => <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 3 ? `1px solid var(--vz-border)` : 'none' }}>
                <span style={{ fontSize: 13, color: 'var(--vz-heading)' }}>{l}</span>
                <div style={{ width: 40, height: 22, borderRadius: 11, background: on ? T.cyan : 'var(--vz-border)', cursor: 'pointer', position: 'relative', transition: 'all 0.2s' }}><div style={{ width: 18, height: 18, borderRadius: '50%', background: '#fff', position: 'absolute', top: 2, left: on ? 20 : 2, transition: 'all 0.2s' }} /></div>
              </div>)}
            </div>
            <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 12 }}>Your Number</h3>
              <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 4 }}>0333 014 2847</div>
              <p style={{ fontSize: 12, color: 'var(--vz-body)', margin: 0 }}>Divert your business line to this number for AI coverage.</p>
            </div>
            <div style={{ padding: 20, borderRadius: 12, background: 'rgba(248,72,94,0.04)', border: `1px solid rgba(248,72,94,0.2)` }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: T.coral, marginBottom: 8 }}>Danger Zone</h3>
              <p style={{ fontSize: 13, color: 'var(--vz-body)', marginBottom: 12 }}>Cancel your subscription. Your AI receptionist will stop answering calls immediately.</p>
              <button style={{ padding: '8px 20px', borderRadius: 8, border: `1px solid ${T.coral}`, background: 'transparent', color: T.coral, fontSize: 13, fontFamily: font, cursor: 'pointer', fontWeight: 600 }}>Cancel subscription</button>
            </div>
          </div>
        </div>
      </>}

    </div>
  </div>;
}
