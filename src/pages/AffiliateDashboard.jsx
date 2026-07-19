import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { T, font } from '../theme/tokens';
import Button from '../components/Button';
import { inp, lbl } from '../components/Input';
import Sidebar from '../components/Sidebar';
import AgentCard from '../components/AgentCard';
import AgentPreview from '../components/AgentPreview';
import DataTable from '../components/DataTable';
import { AGENTS } from '../data/agents';
import { affiliateCustomers, affiliateOwnMessages } from '../data/mockData';

export default function AffiliateDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('Dashboard');
  const [agentName, setAgentName] = useState('Grace');
  const tabs = ['Dashboard', 'Customers', 'Messages', 'Agent Setup', 'Billing', 'Settings'];
  const customers = affiliateCustomers;
  const selectedAgent = AGENTS.find((a) => a.name === agentName) || AGENTS[1];

  const customerColumns = (full) => [
    { key: 'n', label: 'Customer', width: '1fr', render: (c) => <span style={{ color: 'var(--vz-heading)', fontWeight: 500 }}>{c.n}</span> },
    { key: 'num', label: 'Number', width: '140px', render: (c) => <span style={{ color: 'var(--vz-accent-teal)', fontSize: 12 }}>{c.num}</span> },
    { key: 'calls', label: 'Calls', width: '80px' },
    { key: 'm', label: 'MRR', width: '80px', render: (c) => <span style={{ color: 'var(--vz-heading)' }}>{c.m}</span> },
    ...(full ? [{ key: 'joined', label: 'Joined', width: '100px', render: (c) => <span style={{ color: 'var(--vz-body)', fontSize: 12 }}>{c.joined}</span> }] : []),
    { key: 's', label: 'Status', width: '80px', render: (c) => <span style={{ color: c.s === 'Active' ? T.green : T.amber, fontSize: 12 }}>{c.s}</span> },
  ];

  return <div style={{ display: 'flex', minHeight: 'calc(100vh - 65px)' }}>
    <Sidebar tabs={tabs} activeTab={tab} onTabChange={setTab} />
    <div style={{ flex: 1, padding: '32px', maxWidth: 960, overflow: 'auto' }}>

      {tab === 'Dashboard' && <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div><h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', margin: 0 }}>Affiliate Dashboard</h1><p style={{ fontSize: 14, color: 'var(--vz-body)', margin: '4px 0 0' }}>Jane Smith · yourbrand</p></div>
          <div style={{ padding: '8px 16px', borderRadius: 8, background: 'rgba(0,169,206,0.08)', border: `1px solid rgba(0,169,206,0.25)`, fontSize: 13, color: 'var(--vz-accent-cyan)' }}>ava.com/yourbrand</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 28 }}>
          {[{ v: '23', l: 'Customers' }, { v: '£2,277', l: 'Total MRR' }, { v: '£341', l: 'Your Commission' }, { v: '156', l: 'Link Clicks (7d)' }].map((k, i) => <div key={i} style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}><div style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)' }}>{k.v}</div><div style={{ fontSize: 12, color: 'var(--vz-body)', marginTop: 4 }}>{k.l}</div></div>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
          <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 16 }}>Traffic & Signups (Last 7 days)</h3>
            <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 100 }}>
              {[45, 62, 38, 71, 55, 89, 67].map((v, i) => <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}><div style={{ width: '100%', height: v, borderRadius: 4, background: `linear-gradient(180deg,${T.cyan},${T.teal})`, opacity: 0.8 }} /><span style={{ fontSize: 9, color: 'var(--vz-body)' }}>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span></div>)}
            </div>
          </div>
          <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 16 }}>Commission Summary</h3>
            {[['This month', '£341.55', 'In progress'], ['Last month', '£312.00', 'Paid ✓'], ['Total earned', '£1,847.20', '']].map(([k, v, s], i) => <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < 2 ? `1px solid var(--vz-border)` : 'none', fontSize: 14 }}><span style={{ color: 'var(--vz-body)' }}>{k}</span><div><span style={{ color: 'var(--vz-heading)', fontWeight: 600 }}>{v}</span>{s && <span style={{ fontSize: 11, color: s.includes('Paid') ? T.green : T.amber, marginLeft: 8 }}>{s}</span>}</div></div>)}
          </div>
        </div>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 12 }}>Recent Customers</h2>
        <DataTable columns={customerColumns(false)} data={customers.slice(0, 4)} />
        <div style={{ textAlign: 'center', marginTop: 12 }}><span style={{ fontSize: 13, color: 'var(--vz-accent-cyan)', cursor: 'pointer' }} onClick={() => setTab('Customers')}>View all customers →</span></div>
      </>}

      {tab === 'Customers' && <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', margin: 0 }}>Customers</h1>
          <div style={{ display: 'flex', gap: 8 }}><input style={{ ...inp, width: 200, padding: '6px 12px', fontSize: 13 }} placeholder="Search customers..." /><Button variant="outline" style={{ padding: '8px 16px', fontSize: 13 }}>Export CSV</Button></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 24 }}>
          {[{ v: '23', l: 'Total Customers' }, { v: '22', l: 'Active' }, { v: '1', l: 'Trial' }].map((k, i) => <div key={i} style={{ padding: 16, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}><div style={{ fontSize: 22, fontWeight: 700, color: 'var(--vz-heading)' }}>{k.v}</div><div style={{ fontSize: 12, color: 'var(--vz-body)', marginTop: 4 }}>{k.l}</div></div>)}
        </div>
        <DataTable columns={customerColumns(true)} data={customers} />
      </>}

      {tab === 'Messages' && <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', margin: 0 }}>Your Messages</h1>
          <Button variant="outline" style={{ padding: '8px 16px', fontSize: 13 }}>Export CSV</Button>
        </div>
        <p style={{ fontSize: 13, color: 'var(--vz-body)', marginBottom: 16 }}>Messages for your own company. To view customer-specific messages, go to <span style={{ color: 'var(--vz-accent-cyan)', cursor: 'pointer' }} onClick={() => setTab('Customers')}>Customers</span> and select a customer.</p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          {['All', 'Messages', 'Bookings', 'Transfers'].map((f, i) => <button key={i} style={{ padding: '6px 14px', borderRadius: 6, fontSize: 13, fontFamily: font, border: i === 0 ? `1px solid ${T.cyan}` : `1px solid var(--vz-border)`, background: i === 0 ? 'rgba(0,169,206,0.12)' : 'transparent', color: i === 0 ? 'var(--vz-accent-cyan)' : 'var(--vz-body)', cursor: 'pointer' }}>{f}</button>)}
          <div style={{ flex: 1 }} />
          <input style={{ ...inp, width: 200, padding: '6px 12px', fontSize: 13 }} placeholder="Search messages..." />
        </div>
        <DataTable
          columns={[
            { key: 'd', label: 'Date', width: '110px' },
            { key: 'caller', label: 'Caller', width: '110px', render: (m) => <span style={{ color: 'var(--vz-heading)', fontWeight: 500 }}>{m.caller}</span> },
            { key: 's', label: 'Summary', width: '1fr' },
            { key: 'act', label: 'Type', width: '70px', render: (m) => <span style={{ fontSize: 11, padding: '2px 6px', borderRadius: 4, background: m.act === 'Transfer' ? 'rgba(168,85,247,0.12)' : 'rgba(0,169,206,0.12)', color: m.act === 'Transfer' ? T.purple : T.cyan }}>{m.act}</span> },
            { key: 'action', label: 'Action', width: '70px', render: () => <span style={{ color: 'var(--vz-accent-cyan)', cursor: 'pointer', fontSize: 11 }}>📧 Resend</span> },
          ]}
          data={affiliateOwnMessages}
        />
      </>}

      {tab === 'Agent Setup' && <>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', margin: '0 0 8px' }}>Default Agent Setup</h1>
        <p style={{ fontSize: 13, color: 'var(--vz-body)', marginBottom: 24 }}>Choose the default AI agent for new customers signing up via your link. Customers can change this in their own dashboard.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 12 }}>Choose default AI receptionist</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {AGENTS.map((a) => <AgentCard key={a.name} agent={a} selected={a.name === agentName} onSelect={() => setAgentName(a.name)} size="sm" />)}
              </div>
            </div>
          </div>
          <div>
            <AgentPreview
              variant="dashboard"
              title="Default Agent Preview"
              agent={selectedAgent}
              greeting={`"Hello, how can I help you today?"`}
            />
          </div>
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 12 }}><Button style={{ padding: '12px 32px' }}>Save defaults</Button><Button variant="outline" style={{ padding: '12px 32px' }}>Cancel</Button></div>
      </>}

      {tab === 'Billing' && <>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', margin: '0 0 24px' }}>Billing & Commission</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 28 }}>
          {[{ v: '£2,277', l: 'Total MRR' }, { v: '£341.55', l: 'Your Commission (15%)' }, { v: '1 Aug 2026', l: 'Next Payout' }, { v: '23', l: 'Active Customers' }].map((k, i) => <div key={i} style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}><div style={{ fontSize: 22, fontWeight: 700, color: 'var(--vz-heading)' }}>{k.v}</div><div style={{ fontSize: 12, color: 'var(--vz-body)', marginTop: 4 }}>{k.l}</div></div>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', margin: 0 }}>Payout History</h3>
              <Button variant="outline" style={{ padding: '6px 12px', fontSize: 12 }}>Export CSV</Button>
            </div>
            {[['July 2026', '£341.55', '23', 'In progress', T.amber], ['June 2026', '£312.00', '21', 'Paid ✓', T.green], ['May 2026', '£267.30', '18', 'Paid ✓', T.green], ['April 2026', '£198.00', '14', 'Paid ✓', T.green]].map(([m, a, c, s, col], i) => <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 3 ? `1px solid var(--vz-border)` : 'none', fontSize: 13 }}>
              <span style={{ color: 'var(--vz-body)', width: 90 }}>{m}</span>
              <span style={{ color: 'var(--vz-heading)', fontWeight: 600 }}>{a}</span>
              <span style={{ color: 'var(--vz-body)', fontSize: 12 }}>{c} cust</span>
              <span style={{ color: col, fontSize: 12 }}>{s}</span>
            </div>)}
          </div>
          <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 16 }}>Payment Details</h3>
            <div style={{ marginBottom: 12 }}><label style={{ ...lbl, fontSize: 12 }}>Bank account name</label><input style={inp} defaultValue="Jane Smith" /></div>
            <div style={{ marginBottom: 12 }}><label style={{ ...lbl, fontSize: 12 }}>Sort code</label><input style={inp} defaultValue="12-34-56" /></div>
            <div style={{ marginBottom: 12 }}><label style={{ ...lbl, fontSize: 12 }}>Account number</label><input style={inp} defaultValue="12345678" /></div>
            <Button style={{ padding: '10px 24px', fontSize: 13, marginTop: 4 }}>Update bank details</Button>
          </div>
        </div>
      </>}

      {tab === 'Settings' && <>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--vz-heading)', margin: '0 0 24px' }}>Settings</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 16 }}>Account Details</h3>
              {[['Name', 'Jane Smith'], ['Email', 'jane@youragency.com'], ['Company', 'Your Agency Ltd'], ['Phone', '07700 900000']].map(([l, v], i) => <div key={i} style={{ marginBottom: 12 }}><label style={{ ...lbl, fontSize: 12 }}>{l}</label><input style={inp} defaultValue={v} /></div>)}
              <Button style={{ padding: '10px 24px', fontSize: 13 }}>Save</Button>
            </div>
            <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)` }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 16 }}>Branding</h3>
              <div style={{ marginBottom: 12 }}><label style={{ ...lbl, fontSize: 12 }}>Your URL</label><div style={{ fontSize: 15, color: 'var(--vz-accent-cyan)', fontWeight: 600 }}>ava.com/yourbrand</div></div>
              <div style={{ marginBottom: 12 }}><label style={{ ...lbl, fontSize: 12 }}>Template</label><div style={{ fontSize: 14, color: 'var(--vz-heading)' }}>Dark</div></div>
              <div style={{ marginBottom: 12 }}><label style={{ ...lbl, fontSize: 12 }}>Logo</label><div style={{ display: 'inline-block', padding: '8px 16px', borderRadius: 8, background: 'var(--vz-glass)', border: `1px solid var(--vz-border)`, fontSize: 13, color: 'var(--vz-body)' }}>yourbrand_logo.png</div></div>
              <Button variant="outline" style={{ padding: '8px 16px', fontSize: 13, marginTop: 4 }} onClick={() => navigate('/affiliate/signup', { state: { step: 2 } })}>Edit branding</Button>
            </div>
          </div>
          <div>
            <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 16 }}>Notifications</h3>
              {[['Email on new signup', true], ['Email on customer cancellation', true], ['Weekly performance report', true], ['Monthly commission statement', true]].map(([l, on], i) => <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 3 ? `1px solid var(--vz-border)` : 'none' }}>
                <span style={{ fontSize: 13, color: 'var(--vz-heading)' }}>{l}</span>
                <div style={{ width: 40, height: 22, borderRadius: 11, background: on ? T.cyan : 'var(--vz-border)', cursor: 'pointer', position: 'relative' }}><div style={{ width: 18, height: 18, borderRadius: '50%', background: '#fff', position: 'absolute', top: 2, left: on ? 20 : 2, transition: 'all 0.2s' }} /></div>
              </div>)}
            </div>
            <div style={{ padding: 20, borderRadius: 12, background: 'var(--vz-card)', border: `1px solid var(--vz-border)`, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--vz-heading)', marginBottom: 12 }}>Share Your Link</h3>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                <div style={{ flex: 1, padding: '10px 14px', borderRadius: 8, background: 'rgba(0,169,206,0.08)', border: `1px solid var(--vz-border)`, fontSize: 14, color: 'var(--vz-heading)' }}>ava.com/yourbrand</div>
                <Button style={{ padding: '10px 16px', fontSize: 13 }}>Copy</Button>
              </div>
              <p style={{ fontSize: 12, color: 'var(--vz-body)', margin: 0 }}>Share this link on LinkedIn, Facebook, Instagram, email — anywhere your audience is.</p>
            </div>
            <div style={{ padding: 20, borderRadius: 12, background: 'rgba(248,72,94,0.04)', border: `1px solid rgba(248,72,94,0.2)` }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: T.coral, marginBottom: 8 }}>Close Account</h3>
              <p style={{ fontSize: 13, color: 'var(--vz-body)', marginBottom: 12 }}>Close your affiliate account. Active customers will transfer to Ava direct.</p>
              <button style={{ padding: '8px 20px', borderRadius: 8, border: `1px solid ${T.coral}`, background: 'transparent', color: T.coral, fontSize: 13, fontFamily: font, cursor: 'pointer', fontWeight: 600 }}>Close account</button>
            </div>
          </div>
        </div>
      </>}

    </div>
  </div>;
}
