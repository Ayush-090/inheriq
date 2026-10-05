'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, Brain, Check, CheckCircle2,
  ChevronDown, ChevronRight, Clock3, IndianRupee, Languages, LockKeyhole,
  Menu, MessageCircle, Moon, Phone, ShieldCheck, Sparkles, Sun, Users, X,
  CalendarDays, HeartPulse, Utensils, Scissors, Dumbbell, ShoppingBag,
  GraduationCap, Building2, Plane, BriefcaseBusiness,
} from 'lucide-react';
import { ExplodedWorkforce } from './sections/ExplodedWorkforce';

const agents = [
  { name: 'Arjun', role: 'AI Sales Manager', initials: 'A', color: '#4263eb', intro: 'Every lead gets a quick, helpful reply. Even after hours.', work: ['Answers calls and WhatsApp leads', 'Qualifies budgets and books appointments', 'Follows up for 30 days, automatically', 'Connects with IndiaMART and Magicbricks'], message: 'Namaste Ramesh ji! I have a 4 PM slot open for your visit. Should I book it?', numbers: [['Meetings booked', '12'], ['First response', '<10 sec'], ['Follow-ups', '30 days']] },
  { name: 'Kavya', role: 'AI HR Specialist', initials: 'K', color: '#ad50c9', intro: 'The everyday people tasks, handled on the WhatsApp your team already uses.', work: ['Selfie and GPS attendance', 'Simple leave request approvals', 'PDF payslips sent privately', 'Answers from your staff policies'], message: 'Attendance saved for 24 team members. 2 leave requests are ready for your review.', numbers: [['Attendance', '24 staff'], ['Payslips', 'PDF ready'], ['Time saved', '40 hrs']] },
  { name: 'Rohan', role: 'AI Marketing Specialist', initials: 'R', color: '#db7a21', intro: 'Stay in touch with customers with thoughtful, on-brand campaigns.', work: ['Festival WhatsApp broadcasts', 'Social posts and ad copy', 'Writes in local languages', 'Brings past customers back'], message: 'Your festive offer is ready in Hindi and English. Send it to 186 opted-in customers?', numbers: [['Campaigns', 'Ready to send'], ['Languages', '8+'], ['Customers', 'Re-engaged']] },
  { name: 'Priya', role: 'AI Support Specialist', initials: 'P', color: '#0d9278', intro: 'Customers get a clear answer in seconds, day or night.', work: ['24/7 voice and chat support', 'Order and appointment updates', 'Answers from your company knowledge', 'Escalates the important things to you'], message: 'Your order is on the way, Ramesh ji. You can expect it by 6 PM today.', numbers: [['Availability', '24 / 7'], ['Replies', '<6 sec'], ['Channels', 'Voice + chat']] },
  { name: 'Vikram', role: 'AI Finance Specialist', initials: 'V', color: '#c45237', intro: 'Invoices and polite payment reminders move along without the daily chase.', work: ['GST invoices, made in moments', 'UPI payment reminders', 'Automatic payment reconciliation', 'Connects with Tally and Razorpay'], message: 'A gentle reminder for invoice #1042 (₹14,500). Pay securely with your UPI link.', numbers: [['Invoices', 'GST-ready'], ['Payments', 'UPI links'], ['Books', 'Auto-matched']] },
];

const problems = [
  ['Missed calls', 'A customer calls while you are busy. By the time you call back, they have moved on.', Phone],
  ['Follow-ups slip', 'Leads go quiet when nobody has time to reply or follow up.', Clock3],
  ['HR takes the day', 'Attendance, leave and payslips turn into another pile of messages.', Users],
  ['Payments arrive late', 'Invoices wait while you find time to send another reminder.', IndianRupee],
  ['Customers forget you', 'Past customers are ready to return, but no one reaches out.', HeartPulse],
  ['Too many apps', 'Important work gets scattered between tools that do not talk.', BarChart3],
];

const WHATSAPP_URL = 'https://wa.me/919319882410?text=Hi%20Inheriq%2C%20I%27d%20like%20to%20start%20a%20trial.';
const SUPPORT_EMAIL = 'raghvandrasingh111@gmail.com';
const SUPPORT_PHONE = '+919319882410';

const industries = [
  ['Clinics', HeartPulse], ['Restaurants', Utensils], ['Salons', Scissors], ['Gyms', Dumbbell],
  ['Retail', ShoppingBag], ['Coaching', GraduationCap], ['Real estate', Building2],
  ['Travel', Plane], ['Agencies', BriefcaseBusiness],
];

const testimonials = [
  ['PS', 'Dr. Priya Sharma', 'Dental clinic · Jaipur', '3.2×', 'more appointment bookings', 'Arjun answers calls during treatment and books patients in Hindi.'],
  ['RP', 'Rajesh Patel', 'Restaurant owner · Ahmedabad', '96%', 'of dues collected', 'Vikram sends polite payment reminders, so we spend less time chasing invoices.'],
  ['AD', 'Anita Deshmukh', 'Salon owner · Pune', '+45%', 'more revenue from campaigns', 'Rohan helps us reach regulars with offers that sound like us.'],
  ['VS', 'Vikram Singh', 'Gym owner · Delhi', '40 hrs', 'saved on monthly HR work', 'Kavya made attendance and payslip days much easier for our staff.'],
  ['MK', 'Meera Krishnan', 'Coaching centre · Chennai', '8+', 'languages for parent updates', 'Parents get quick updates in Tamil and English, even after class hours.'],
  ['AM', 'Arjun Mehta', 'Real estate · Mumbai', '12', 'site visits booked this week', 'Arjun follows up with buyers and puts visits straight on my calendar.'],
];

const faqs = [
  ['What is Inheriq Brain AI?', 'It is the shared memory for your AI team. Add your services, prices, policies and business rules once. Arjun, Kavya, Rohan, Priya and Vikram can then use the same up-to-date information.'],
  ['Do I need technical skills?', 'No. If you can use WhatsApp, you can get started. Setup takes about 5 minutes, and our team can help you connect your tools.'],
  ['Which languages does it speak?', 'Your team can work in Hindi, Hinglish, English and regional languages including Tamil, Telugu, Marathi and Bengali.'],
  ['What tools can I connect?', 'Inheriq works with WhatsApp, phone, Tally, Razorpay and Google Calendar. Available connections can depend on the role you choose.'],
  ['How do you protect my data?', 'Business data is protected with AES-256 encryption and hosted on Indian servers. Inheriq is designed with India’s DPDP requirements in mind.'],
  ['What happens during the free trial?', 'Try your AI team for 7 days with no credit card. Set up your business details, test real tasks and decide if it is right for you. Cancel anytime.'],
];

const dashboardData = [
  { kpis: [['Leads', '38'], ['Meetings', '12'], ['Queries', '78'], ['Recovered', '₹3.1L']], bars: [38, 55, 46, 72, 61, 88, 67], activity: ['Booked a 4 PM site visit with Ramesh ji', 'Qualified 6 new WhatsApp enquiries', 'Sent 12 follow-ups due today'] },
  { kpis: [['Present', '24'], ['On leave', '2'], ['Payslips', '18'], ['Hours saved', '40']], bars: [72, 84, 67, 91, 76, 62, 89], activity: ['Recorded attendance for the morning shift', 'Prepared 18 payslips for review', 'Shared leave request with the manager'] },
  { kpis: [['Reach', '1.8k'], ['Replies', '142'], ['Posts', '6'], ['Returning', '34']], bars: [44, 70, 56, 83, 94, 72, 88], activity: ['Prepared a festive offer in Hindi', 'Re-engaged 34 past customers', 'Drafted 3 social posts for approval'] },
  { kpis: [['Queries', '78'], ['Answered', '74'], ['Rating', '4.9'], ['Response', '<6s']], bars: [86, 74, 91, 69, 82, 95, 78], activity: ['Answered a delivery question in Hinglish', 'Shared opening hours with a new customer', 'Sent a complex request to your team'] },
  { kpis: [['Invoices', '42'], ['Paid', '31'], ['Pending', '11'], ['Recovered', '₹3.1L']], bars: [52, 64, 78, 58, 91, 72, 86], activity: ['Matched 9 UPI payments in Tally', 'Sent 11 friendly payment reminders', 'Created a GST invoice for review'] },
];

function Mark({ size = 34 }: { size?: number }) {
  return <span className="brand-mark" style={{ width: size, height: size }}><Sparkles aria-hidden="true" size={size * 0.52} /></span>;
}

function LeadModal({ onClose }: { onClose: () => void }) {
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown); previousFocus?.focus(); };
  }, [onClose]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError('');
    const data = new FormData(event.currentTarget);
    const phone = String(data.get('phone') || '').replace(/\D/g, '');
    if (String(data.get('name') || '').trim().length < 2) return setError('Please enter your name.');
    if (!data.get('businessType')) return setError('Choose the kind of business you run.');
    if (!/^\d{10}$/.test(phone)) return setError('Enter a valid 10-digit WhatsApp number.');
    setBusy(true);
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.get('name'), businessType: data.get('businessType'), phone: `+91${phone}`, source: 'Homepage trial form', sourceType: 'onboarding' }) });
      if (!response.ok) throw new Error('Could not send your request. Please try again.');
      setSent(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Something went wrong. Please try again.');
    } finally { setBusy(false); }
  }
  return <div className="lead-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><section className="lead-dialog" role="dialog" aria-modal="true" aria-labelledby="lead-title"><button ref={closeRef} className="icon-button lead-close" onClick={onClose} aria-label="Close form"><X size={20} /></button>
    {sent ? <div className="lead-success"><CheckCircle2 size={42} /><p className="eyebrow">Request received</p><h2 id="lead-title">Namaste! We’ll be in touch.</h2><p>Our team will message you on WhatsApp to help set up your 7-day trial.</p><button className="button button-primary" onClick={onClose}>Done</button></div> : <><p className="eyebrow">Start with a real person</p><h2 id="lead-title">Let’s get your AI team ready.</h2><p className="lead-intro">Share a few details. We’ll help you get started in about 5 minutes.</p>
      <form onSubmit={submit} noValidate><label>Your name<input name="name" autoComplete="name" placeholder="e.g. Ramesh Kumar" required /></label><label>What kind of business?<select name="businessType" defaultValue="" required><option value="" disabled>Select your business</option>{['Clinic or healthcare', 'Restaurant or cafe', 'Salon or wellness', 'Gym or fitness', 'Retail or e-commerce', 'Coaching or education', 'Real estate', 'Travel', 'Agency', 'Other'].map((option) => <option key={option}>{option}</option>)}</select></label><label>WhatsApp number<span className="phone-field"><span>+91</span><input name="phone" inputMode="numeric" autoComplete="tel-national" placeholder="98765 43210" maxLength={10} required /></span></label><p className="form-hint">We’ll send your setup details here. No spam, promise.</p>{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-primary form-submit" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Start my 7-day free trial'} <ArrowRight size={17} /></button><p className="form-terms">No credit card · Cancel anytime</p></form></>}
  </section></div>;
}

function Navbar({ onLead, dark, setDark, hindi, setHindi }: { onLead: () => void; dark: boolean; setDark: (value: boolean) => void; hindi: boolean; setHindi: (value: boolean) => void }) {
  const [open, setOpen] = useState(false);
  const links = [['Home', '#home'], ['AI Employees', '#employees'], ['Industries', '#industries'], ['About', '#about'], ['Contact', '#contact']];
  return <><header className="site-nav"><div className="nav-inner"><a className="brand" href="#home" aria-label="Inheriq home"><img src={dark ? "/inheriq-logo-dark.svg" : "/inheriq-logo.svg"} alt="Inheriq — The AI Workforce" width={140} height={46} className="brand-logo-img" /></a><nav className="desktop-links" aria-label="Main navigation">{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav><div className="nav-actions"><button className="language-toggle" onClick={() => setHindi(!hindi)} aria-label="Switch language">{hindi ? 'हिं' : 'EN'} <ChevronDown size={13} /></button><button className="icon-button theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button><button className="button button-secondary nav-demo" onClick={onLead}>Book demo</button><button className="button button-primary nav-start" onClick={onLead}>Start free <ArrowRight size={15} /></button><button className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button></div></div></header>
    {open && <div className="mobile-menu"><nav aria-label="Mobile navigation">{links.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={17} /></a>)}</nav><div className="mobile-menu-bottom"><p>One helpful team. Always on.</p><button className="button button-primary" onClick={() => { setOpen(false); onLead(); }}>Start free <ArrowRight size={17} /></button></div></div>}
    <div className="mobile-cta"><button className="button button-primary" onClick={onLead}>Start free <ArrowRight size={16} /></button><a href={WHATSAPP_URL} aria-label="Message Inheriq on WhatsApp"><MessageCircle size={21} /></a></div></>;
}


function Hero({ onLead, hindi }: { onLead: () => void; hindi: boolean }) {
  return <section className="hero section-wrap" id="home"><div className="hero-copy"><div className="eyebrow-pill"><span className="pulse-dot" />Your AI workforce, available 24/7</div><h1>{hindi ? <>आपकी AI टीम.<br /><span>हमेशा काम पर.</span></> : <>Hire your first<br className="desktop-break" /> AI team. <span>They never sleep.</span></>}</h1><p className="hero-sub">Meet Arjun, Kavya, Rohan, Priya and Vikram: a 24/7 team for calls, WhatsApp, sales, marketing, support, finance and HR.</p><div className="hero-actions"><button className="button button-primary button-large" onClick={onLead}>Start your 7-day free trial <ArrowRight size={18} /></button><button className="button button-secondary button-large" onClick={onLead}><CalendarDays size={17} /> Book a 1-on-1 demo</button></div><div className="proof-line"><span className="stars" aria-label="5 out of 5 stars">★★★★★</span><span>Built for hundreds of Indian businesses</span></div><div className="trust-chips"><span><Check size={14} /> 7-day risk-free trial</span><span><Languages size={14} /> Hindi, Hinglish & more</span><span><Check size={14} /> No credit card</span></div></div><div className="hero-visual"><WorkforceHub /></div><div className="hero-note"><span className="note-sun">✳</span><span>Namaste! Your team is already at work.</span><ArrowDownRight size={17} /></div></section>;
}

function WorkforceHub() {
  const [activityIndex, setActivityIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = window.setInterval(() => setActivityIndex((current) => current + 1), 4200);
    return () => window.clearInterval(interval);
  }, []);
  const hubAgents = [
    { name: 'Arjun', role: 'Sales', color: '#3b82f6', status: '142 active chats', updates: ['Qualifying a WhatsApp lead', 'Booking a site visit for 4 PM', 'Following up with 3 new enquiries'] },
    { name: 'Kavya', role: 'HR', color: '#a78bfa', status: 'Attendance synced', updates: ['Attendance saved for 24 staff', 'Preparing 18 payslips', 'Leave request ready for review'] },
    { name: 'Rohan', role: 'Marketing', color: '#25c987', status: 'Campaign ready', updates: ['Writing a festive offer in Hindi', 'Re-engaging 34 past customers', 'Social post ready for your approval'] },
  ];
  return <div className="hub-window">
    <div className="window-top"><div className="window-lights"><i /><i /><i /></div><span className="window-url">app.inheriq.in / workforce</span><span className="live-badge"><span /> Live</span></div>
    <div className="hub-heading"><div className="hub-brand"><Mark size={39} /><div><span>LIVE WORKFORCE HUB</span><b>5 AI employees active</b></div></div><span className="hub-operational"><i /> Operational</span></div>
    <div className="hub-meter"><span><b>5 / 5</b> teammates online</span><div><i /></div></div>
    <div className="hub-activity">{hubAgents.map((agent, index) => <article className="hub-row" key={agent.name} style={{ '--agent-color': agent.color } as React.CSSProperties}><span className="hub-avatar">{agent.name[0]}</span><div className="hub-copy"><div><b>{agent.name} <small>({agent.role})</small></b><span>{agent.status}</span></div><p>{agent.updates[(activityIndex + index) % agent.updates.length]}</p></div><span className="hub-check"><Check size={14} /></span></article>)}</div>
    <div className="hub-integrations"><span>CONNECTED</span><i>WhatsApp</i><i>Phone</i><i>Calendar</i><i>Tally</i></div>
  </div>;
}

function DashboardPreview({ hero = false }: { hero?: boolean }) {
  const [active, setActive] = useState(0); const data = dashboardData[active];
  const [feedOffset, setFeedOffset] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = window.setInterval(() => setFeedOffset((current) => (current + 1) % data.activity.length), 4800);
    return () => window.clearInterval(interval);
  }, [active, data.activity.length]);
  return <div className={`dashboard-window ${hero ? 'hero-dashboard' : ''}`}><div className="window-top"><div className="window-lights"><i /><i /><i /></div><span className="window-url">app.inheriq.in / overview</span><span className="live-badge"><span /> Live</span></div><div className="dashboard-layout"><aside className="dash-sidebar"><Mark size={27} /><span className="dash-side-caption">YOUR TEAM</span>{agents.map((agent, index) => <button key={agent.name} className={`dash-agent ${active === index ? 'selected' : ''}`} onClick={() => setActive(index)} aria-label={`Show ${agent.name} dashboard`}><span style={{ '--agent-color': agent.color } as React.CSSProperties}>{agent.initials}</span><small>{agent.name}</small></button>)}<div className="side-help"><ShieldCheck size={15} /> Secure workspace</div></aside><div className="dash-main"><div className="dash-title"><div><span className="dash-greeting">Good morning, Ramesh</span><h3>{hero ? 'Your business, at a glance' : `${agents[active].name}’s activity`}</h3></div><div className="dash-date">This week <ChevronDown size={14} /></div></div><div className="kpi-grid">{data.kpis.map(([label, value], index) => <div className="kpi-card" key={label}><span>{label}</span><strong>{hero && index === 3 ? '₹3.1L' : value}</strong><small><span>↗</span> {index % 2 ? '+12%' : 'Today'}</small></div>)}</div><div className="dash-chart"><div className="chart-heading"><span>Work completed</span><span className="chart-legend"><i /> This week</span></div><div className="chart-bars" aria-label="Weekly activity bar chart">{data.bars.map((height, index) => <div className="chart-column" key={index}><i style={{ height: `${height}%` }} /><small>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</small></div>)}</div></div><div className="activity-feed"><div className="feed-title">Recent activity <span>Live updates</span></div>{data.activity.map((_, index) => { const item = data.activity[(index + feedOffset) % data.activity.length]; return <div className="feed-item motion-live" key={`${active}-${feedOffset}-${index}`}><span className="feed-avatar" style={{ '--agent-color': agents[active].color } as React.CSSProperties}>{agents[active].initials}</span><p><b>{agents[active].name}</b> {item}</p><small>{index + 2}m</small></div>; })}</div></div></div></div>;
}

function StatCard({ value, label, detail }: { value: string; label: string; detail: string }) { return <div className="stat-card motion-reveal"><strong>{value}</strong><span>{label}</span><small>{detail}</small></div>; }

function SectionNudge({ onLead }: { onLead: () => void }) { return <div className="section-nudge section-wrap"><span><b className="stars">★★★★★</b> Join Indian businesses starting their free trial</span><button className="button button-primary" onClick={onLead}>Start free <ArrowRight size={15} /></button></div>; }

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text: string }) { return <div className="section-heading motion-reveal"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>; }

function AgentTabs({ onLead }: { onLead: () => void }) {
  const [selected, setSelected] = useState(0); const agent = agents[selected];
  return <section className="section section-tint" id="employees">
    <div className="section-wrap">
      <SectionHeading eyebrow="Meet the team" title={<>Five real roles.<br /><span>One less thing to worry about.</span></>} text="Not another chatbot. Meet AI teammates who take care of the everyday work that keeps your business moving." />
      <div className="agent-experience">
        <div className="agent-list" role="tablist" aria-label="Choose an AI employee">
          {agents.map((item, index) => <button key={item.name} role="tab" aria-selected={selected === index} aria-controls="agent-detail" id={`agent-tab-${index}`} className={`agent-tab ${selected === index ? 'active' : ''}`} style={{ '--agent-color': item.color } as React.CSSProperties} onClick={() => setSelected(index)} onKeyDown={(event) => {
            const next = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? (selected + 1) % agents.length : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? (selected + agents.length - 1) % agents.length : event.key === 'Home' ? 0 : event.key === 'End' ? agents.length - 1 : selected;
            if (next !== selected) { event.preventDefault(); setSelected(next); document.getElementById(`agent-tab-${next}`)?.focus(); }
          }}>
            <span className="avatar">{item.initials}</span>
            <span className="agent-tab-copy"><b>{item.name}</b><small>{item.role}</small><span>{item.intro}</span></span>
            <ChevronRight size={17} />
            <span className="agent-card-meta"><b>{item.numbers[0][1]}</b><small>{item.numbers[0][0]}</small></span>
          </button>)}
        </div>
        <div className="agent-detail" id="agent-detail" role="tabpanel" aria-labelledby={`agent-tab-${selected}`} key={agent.name}>
          <div className="agent-info">
            <div className="agent-title"><span className="avatar avatar-large" style={{ '--agent-color': agent.color } as React.CSSProperties}>{agent.initials}</span><div><p className="eyebrow">Your {agent.role}</p><h3>{agent.name}</h3></div></div>
            <p className="agent-intro">{agent.intro}</p>
            <ul className="check-list">{agent.work.map((line) => <li key={line}><CheckCircle2 size={17} />{line}</li>)}</ul>
            <div className="language-row"><span>Speaks</span>{['हिंदी', 'Hinglish', 'English', '+ regional'].map((language) => <i key={language}>{language}</i>)}</div>
            <button className="button button-primary" onClick={onLead}>Hire {agent.name} <ArrowRight size={16} /></button>
          </div>
          <ChatMockup agent={agent} />
        </div>
      </div>
    </div>
  </section>;
}

function ChatMockup({ agent }: { agent: typeof agents[number] }) {
  const [simulation, setSimulation] = useState({ agent: agent.name, turn: 0 });
  const turn = simulation.agent === agent.name ? simulation.turn : 0;
  const task = agent.work[turn % agent.work.length].toLowerCase();
  return <div className="chat-card"><div className="chat-head"><span className="chat-avatar" style={{ '--agent-color': agent.color } as React.CSSProperties}>{agent.initials}</span><span><b>{agent.name}</b><small><i /> Online now</small></span><span className="chat-brand">WhatsApp</span></div><div className="chat-body"><div className="chat-date">TODAY</div><div className="chat-bubble incoming" key={`ask-${turn}`}>{turn === 0 ? 'Can you help me with this?' : `Can you take care of “${task}”?`}</div><div className="chat-bubble outgoing motion-live" key={`reply-${turn}`} style={{ '--agent-color': agent.color } as React.CSSProperties}>{turn === 0 ? agent.message : `On it. I’ll take care of ${task} and share an update here shortly.`}<small>Now · ✓✓</small></div><div className="typing"><i /><i /><i /><span>{agent.name} is replying</span></div></div><button className="chat-simulate" onClick={() => setSimulation({ agent: agent.name, turn: turn + 1 })}><Sparkles size={14} /> Simulate next interaction <ArrowRight size={14} /></button><div className="chat-stats">{agent.numbers.map(([label, value]) => <div key={label}><b>{value}</b><small>{label}</small></div>)}</div></div>;
}

function ProblemSection() {
  return <section className="section" id="about"><div className="section-wrap"><SectionHeading eyebrow="Sound familiar?" title={<>You started a business.<br /><span>Not 5 more jobs.</span></>} text="When you are busy serving customers, the small things can quietly cost you." /><div className="problem-grid">{problems.map(([title, text, Icon]) => <article className="problem-card" key={String(title)}><span className="problem-icon"><Icon size={20} /></span><h3>{String(title)}</h3><p>{String(text)}</p></article>)}</div><div className="solution-line"><span>One team for the work behind your work.</span><b>All solved by Inheriq <ArrowRight size={17} /></b></div></div></section>;
}

function BrainSection() {
  return <section className="section section-ink" id="brain"><div className="section-wrap"><SectionHeading eyebrow="One shared brain" title={<>Teach it once.<br /><span>Your whole team knows.</span></>} text="Share your catalog, prices and rules with Inheriq Brain AI. Every employee works from the same trusted information." /><div className="brain-layout"><div className="brain-visual"><div className="brain-orbit orbit-one" /><div className="brain-orbit orbit-two" /><div className="brain-core"><Brain size={32} /><b>Brain AI</b><small>Your business, remembered</small></div>{agents.map((agent, index) => <div className={`brain-node node-${index + 1}`} key={agent.name} style={{ '--agent-color': agent.color } as React.CSSProperties}><span>{agent.initials}</span>{agent.name}</div>)}<div className="integrations"><span>WhatsApp</span><span>Phone</span><span>Tally</span><span>Calendar</span></div></div><div className="brain-features"><article><span><Brain size={20} /></span><div><h3>Company memory</h3><p>Your services, prices, timings and policies, ready whenever a customer asks.</p></div></article><article><span><Sparkles size={20} /></span><div><h3>Your kind of conversation</h3><p>Set a warm, helpful tone that sounds like your business, in the language customers prefer.</p></div></article><article><span><LockKeyhole size={20} /></span><div><h3>Built around your privacy</h3><p>DPDP aligned, AES-256 encrypted and hosted on Indian servers.</p><div className="security-tags"><i><ShieldCheck size={13} /> DPDP</i><i><LockKeyhole size={13} /> AES-256</i><i>India hosted</i></div></div></article></div></div></div></section>;
}

function DashboardSection() { return <section className="section" id="dashboard"><div className="section-wrap"><SectionHeading eyebrow="Your business, in one view" title={<>A little more clarity.<br /><span>A lot less chasing.</span></>} text="See what your team handled today. Pick an employee to see the work that matters to you." /><DashboardPreview /></div></section>; }

function ComparisonTable() {
  const rows = [['Answers after hours', 'Usually no', 'Yes, 24/7'], ['Speaks your customers’ language', 'Depends who is on shift', 'Hindi, Hinglish & regional'], ['Remembers every follow-up', 'Easy to miss', 'Consistent, automatic'], ['Setup and training', 'Weeks of hiring', 'About 5 minutes'], ['Works where you already are', 'More apps to manage', 'WhatsApp, phone and more']];
  return <section className="section section-tint"><div className="section-wrap"><SectionHeading eyebrow="A simpler way to work" title={<>People first. Busywork handled.</>} text="Your business deserves tools that fit the way you work, not another complicated system." /><div className="comparison-table"><div className="comparison-head"><span>At a glance</span><span>Traditional software</span><span>Inheriq</span></div>{rows.map(([topic, old, fresh]) => <div className="comparison-row" key={topic}><b>{topic}</b><span className="old-value"><X size={16} />{old}</span><span className="new-value"><Check size={16} />{fresh}</span></div>)}</div></div></section>;
}

function Timeline({ onLead }: { onLead: () => void }) {
  const steps = [['01', 'Tell us about your business', 'A few details help us tailor the setup. No long forms.'], ['02', 'Connect the tools you use', 'Link WhatsApp, phone, calendar or finance tools.'], ['03', 'Share what your team needs to know', 'Add your services, prices and business rules.'], ['04', 'Meet your AI employees', 'Your team is ready to help with real daily tasks.'], ['05', 'Get a simple daily update', 'At 8 PM, see what got done and what needs you.']];
  return <section className="section" id="how-it-works"><div className="section-wrap"><SectionHeading eyebrow="Getting started" title={<>From hello to all set<br /><span>in about 5 minutes.</span></>} text="No technical setup. We will guide you through it, one easy step at a time." /><div className="timeline">{steps.map(([number, title, description], index) => <article className="timeline-step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{description}</p>{index === 4 && <div className="briefing"><span className="briefing-icon"><MessageCircle size={17} /></span><p><b>8:00 PM · Your Inheriq update</b><br />12 leads followed up · 4 payments received · 3 appointments booked</p></div>}</div></article>)}</div><div className="center-cta"><button className="button button-primary" onClick={onLead}>Get started free <ArrowRight size={16} /></button><span>7 days free · No card needed</span></div></div></section>;
}

function IndustrySection() {
  return <section className="section section-tint" id="industries"><div className="section-wrap"><SectionHeading eyebrow="Made for your kind of business" title={<>Good work looks different<br /><span>in every business.</span></>} text="From the first appointment to the last payment, your team can take care of the details." /><div className="industry-grid">{industries.map(([label, Icon], index) => <a href="/industries" className="industry-card" key={String(label)}><span className={`industry-icon industry-${index}`}><Icon size={21} /></span><b>{String(label)}</b><ArrowUpRight size={16} /></a>)}</div><a className="text-link" href="/industries">Explore all industries <ArrowRight size={16} /></a></div></section>;
}

function Testimonial({ item }: { item: typeof testimonials[number] }) {
  const [initials, name, business, metric, impact, quote] = item;
  return <article className="testimonial-card"><div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div><p className="testimonial-quote">“{quote}”</p><div className="testimonial-impact"><b>{metric}</b><span>{impact}</span></div><div className="testimonial-person"><span>{initials}</span><p><b>{name}</b><small>{business}</small></p><CheckCircle2 size={17} /></div></article>;
}

function Testimonials() { return <section className="section"><div className="section-wrap"><SectionHeading eyebrow="Small teams, more breathing room" title={<>A better kind of<br /><span>busy day.</span></>} text="Owners across India are finding more time for the work only they can do." /><div className="testimonial-grid">{testimonials.map((item) => <Testimonial item={item} key={item[1]} />)}</div><p className="testimonial-disclaimer">Illustrative customer stories. Outcomes vary by business and usage.</p></div></section>; }

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="section section-tint" id="faq"><div className="section-wrap faq-layout"><div><p className="eyebrow">Good questions</p><h2>Before you<br /><span>get started.</span></h2><p className="faq-aside">Still wondering about something? We’re happy to talk it through.</p><a className="text-link" href="/contact">Talk to our team <ArrowRight size={16} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={`faq-item ${open === index ? 'open' : ''}`} key={question}><h3><button aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>{question}<span>{open === index ? <X size={17} /> : <ChevronDown size={17} />}</span></button></h3>{open === index && <p>{answer}</p>}</article>)}</div></div></section>;
}

function FinalCTA({ onLead }: { onLead: () => void }) {
  return <section className="final-cta" id="contact"><div className="cta-orbit" /><div className="cta-content"><p className="eyebrow">Your next good hire</p><h2>Ready to hire your<br />AI workforce?</h2><p>Give your team a hand. And give yourself a little room to grow.</p><div className="hero-actions"><button className="button button-white" onClick={onLead}>Start your free trial <ArrowRight size={17} /></button><button className="button button-outline-light" onClick={onLead}><CalendarDays size={17} /> Book a demo</button></div><div className="cta-trust"><span>7-day free trial</span><i /> <span>No credit card</span><i /> <span>Cancel anytime</span></div></div><div className="cta-aside"><div><Sparkles size={18} /><b>Meet your team</b></div><p>Arjun · Kavya · Rohan · Priya · Vikram</p><span>Ready when you are.</span></div></section>;
}

function Footer({ dark = true }: { dark?: boolean }) {
  const columns = [['Product', [['AI Employees', '#employees'], ['Industries', '#industries'], ['How it works', '#how-it-works']]], ['Company', [['About Inheriq', '/about'], ['Contact', '/contact'], ['Careers', '/careers']]], ['Legal', [['Privacy', '/privacy'], ['Terms', '/terms']]]];
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-brand"><a className="brand" href="#home" aria-label="Inheriq home"><img src={dark ? "/inheriq-logo-dark.svg" : "/inheriq-logo.svg"} alt="Inheriq — The AI Workforce" width={130} height={40} className="brand-logo-img brand-logo-img-sm" /></a><p>Your AI workforce. Available 24/7.<br />Made for the way India does business.</p><a href={`mailto:${SUPPORT_EMAIL}`} className="footer-mail">{SUPPORT_EMAIL} <ArrowUpRight size={14} /></a><a href={`tel:${SUPPORT_PHONE}`} className="footer-phone"><Phone size={14} /> +91 93198 82410</a></div>
      {columns.map(([title, items]) => <details open className="footer-column" key={String(title)}><summary>{String(title)}<ChevronDown size={16} /></summary><div>{(items as string[][]).map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div></details>)}
      <div className="footer-social"><span>Say hello</span><a href={WHATSAPP_URL} aria-label="Chat with Inheriq on WhatsApp"><MessageCircle size={19} /></a><a href={`tel:${SUPPORT_PHONE}`} aria-label="Call Inheriq"><Phone size={18} /></a><a href={`mailto:${SUPPORT_EMAIL}`} aria-label="Email Inheriq"><ArrowUpRight size={19} /></a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Inheriq Technologies. All rights reserved.</span><span>Built with care for Indian businesses <span className="footer-saffron">✳</span></span></div>
  </footer>;
}

export function MarketingLanding() {
  const [leadOpen, setLeadOpen] = useState(false); const [dark, setDark] = useState(true); const [hindi, setHindi] = useState(false); const openLead = () => setLeadOpen(true);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const shell = document.querySelector('.landing-shell');
    if (!shell) return;
    shell.classList.add('motion-ready');
    const elements = shell.querySelectorAll('.motion-reveal, .agent-detail, .brain-features article, .timeline-step, .industry-card, .testimonial-card, .faq-item');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12, rootMargin: '0px 0px -28px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => { observer.disconnect(); shell.classList.remove('motion-ready'); };
  }, []);
  return <div className={`landing-shell ${dark ? 'theme-dark' : 'theme-light'} ${hindi ? 'lang-hi' : 'lang-en'}`} lang={hindi ? 'hi' : 'en'} data-hindi={hindi}><Navbar onLead={openLead} dark={dark} setDark={setDark} hindi={hindi} setHindi={setHindi} /><main><Hero onLead={openLead} hindi={hindi} /><section className="stats-strip" aria-label="Inheriq at a glance"><div className="stats-inner"><StatCard value="63M+" label="MSMEs in India" detail="Built for your world" /><StatCard value="24/7" label="Always available" detail="Even after closing time" /><StatCard value="5" label="AI employees" detail="One team, many skills" /><StatCard value="8+" label="Languages" detail="Talk like you" /></div></section><ProblemSection /><ExplodedWorkforce onLead={openLead} /><AgentTabs onLead={openLead} /><BrainSection /><SectionNudge onLead={openLead} /><DashboardSection /><SectionNudge onLead={openLead} /><ComparisonTable /><Timeline onLead={openLead} /><IndustrySection /><SectionNudge onLead={openLead} /><Testimonials /><SectionNudge onLead={openLead} /><FAQ /><FinalCTA onLead={openLead} /></main><Footer dark={dark} /><a className="whatsapp-float" href={WHATSAPP_URL} aria-label="Chat with us on WhatsApp"><MessageCircle size={21} /><span>Chat with us</span></a>{leadOpen && <LeadModal onClose={() => setLeadOpen(false)} />}</div>;
}