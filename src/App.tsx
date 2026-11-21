import { useState } from 'react';
import { days, stops, travelers } from './tripData';

const photo = 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85';

export default function App() {
  const [tab, setTab] = useState('trip');
  const [selectedDay, setSelectedDay] = useState(1);
  const [votes, setVotes] = useState<Record<string, number>>({});

  const vote = (name: string) => setVotes(v => ({ ...v, [name]: (v[name] || 0) + 1 }));

  return (
    <main className="phone">
      <header>
        <div>
          <p className="eyebrow">CANADIAN PASSPORTS · 3 TRAVELERS</p>
          <h1>Iberia, 14 Days</h1>
        </div>
        <button className="avatar" aria-label="Group members">JJ</button>
      </header>

      {tab === 'trip' && <section className="view">
        <div className="hero" style={{ backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(20,29,28,.72)), url(${photo})` }}>
          <div className="hero-tags"><span>14 days</span><span>12 nights</span></div>
          <div><p>MAR 15–28, 2027</p><h2>Spain & Portugal,<br/>at an easy pace.</h2></div>
        </div>

        <div className="section-title"><h3>Route</h3><button onClick={() => setTab('map')}>View map</button></div>
        <div className="route-card">
          {stops.map((stop, i) => <div className="route-stop" key={stop.city}>
            <div className="route-number">{i + 1}</div>
            <div><strong>{stop.city}</strong><span>{stop.country} · {stop.nights} nights</span></div>
            <small>{stop.dates}</small>
          </div>)}
        </div>

        <div className="section-title"><h3>Flights</h3></div>
        <div className="poll">
          <div className="route-stop"><div className="route-number">↑</div><div><strong>AC 820</strong><span>Mar 15 · YYZ 19:50 → BCN 08:20+1</span></div><small>7h30</small></div>
          <div className="route-stop"><div className="route-number">↓</div><div><strong>AC 811</strong><span>Mar 28 · LIS 13:00 → YYZ 15:55</span></div><small>7h55</small></div>
        </div>

        <div className="section-title"><h3>Make it yours</h3></div>
        <div className="poll">
          <div className="poll-head"><span>GROUP PACE</span><small>{travelers.join(' · ')}</small></div>
          {['Keep walking under 15k', 'Choose indoor rainy-day option'].map(name => <button className="poll-option" key={name} onClick={() => vote(name)}>
            <span>{name}</span><b>{votes[name] || 0}</b>
          </button>)}
        </div>
      </section>}

      {tab === 'itinerary' && <section className="view">
        <div className="page-heading"><p>MAR 15–28, 2027</p><h2>Day by day</h2></div>
        <div className="day-strip">
          {days.map((day, i) => <button key={day.date} className={selectedDay === i ? 'active' : ''} onClick={() => setSelectedDay(i)}>
            <small>{day.city.slice(0, 3).toUpperCase()}</small><strong>{i + 1}</strong>
          </button>)}
        </div>
        <article className="day-card">
          <div className="day-photo"><span>{days[selectedDay].city}</span></div>
          <p className="day-kicker">{days[selectedDay].date} · {days[selectedDay].pace.toUpperCase()} PACE</p>
          <h3>{days[selectedDay].title}</h3>
          <p className="day-desc">{days[selectedDay].description}</p>
          <div className="timeline">
            <div><time>AM</time><div><strong>Morning</strong><span>{days[selectedDay].morning}</span></div></div>
            <div><time>MID</time><div><strong>Lunch & rest</strong><span>{days[selectedDay].midday}</span></div></div>
            <div><time>PM</time><div><strong>Evening</strong><span>{days[selectedDay].evening}</span></div></div>
            <div><time>GO</time><div><strong>Transport</strong><span>{days[selectedDay].transport}</span></div></div>
            <div><time>KM</time><div><strong>Pace</strong><span>{days[selectedDay].walking}</span></div></div>
            <div><time>ALT</time><div><strong>Rain / low-energy option</strong><span>{days[selectedDay].alternate}</span></div></div>
          </div>
        </article>
      </section>}

      {tab === 'map' && <section className="view">
        <div className="page-heading"><p>14-DAY ROUTE</p><h2>Spain & Portugal</h2></div>
        <div className="map">
          <div className="country-label portugal">PORTUGAL</div>
          <div className="country-label spain">SPAIN</div>
          {stops.map((stop, i) => <div className="map-pin" style={{ left: `${stop.x}%`, top: `${stop.y}%` }} key={stop.city}>
            <i>{i + 1}</i><span>{stop.city}</span>
          </div>)}
        </div>
        <div className="route-summary"><span>Barcelona</span><b>→ Madrid</b><span>Seville</span><b>→ Lisbon</b></div>
      </section>}

      {tab === 'group' && (
        <section className="view">
          <div className="page-heading"><p>TRIP ROOM</p><h2>Our group</h2></div>
          <div className="members">
            {[
              ['JJ', 'Adult · Organizer'],
              ['QQ', 'Dad · Adult'],
              ['AA', 'Daughter · 13 · Canadian passport'],
            ].map(([name, detail], i) => (
              <div className="member" key={name}>
                <span style={{ background: ['#d28d6d', '#829b78', '#b58b78'][i] }}>{name[0]}</span>
                <div><strong>{name}</strong><small>{detail}</small></div>
              </div>
            ))}
          </div>
          <div className="section-title"><h3>Trip choices</h3><small>Tap to vote</small></div>
          {['Sagrada Família tickets', 'Prado & Retiro', 'Alcázar & Cathedral', 'Belém & Sintra option'].map(name => (
            <button className="choice" key={name} onClick={() => vote(name)}>
              <span>{name}</span><b>♡ {votes[name] || 0}</b>
            </button>
          ))}
        </section>
      )}

      <nav>
        {[['trip','○','Trip'],['itinerary','□','Plan'],['map','⌖','Map'],['group','♙','Group']].map(([id, icon, label]) => <button key={id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}>
          <span>{icon}</span><small>{label}</small>
        </button>)}
      </nav>
    </main>
  );
}
