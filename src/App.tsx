import { useState } from 'react';
import { days, stops, travelers } from './tripData';
import { choiceZh, countriesZh, dayZh, Language, stopDatesZh, stopsZh, ui } from './translations';

const photo = 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85';

export default function App() {
  const [tab, setTab] = useState('trip');
  const [selectedDay, setSelectedDay] = useState(1);
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [language, setLanguage] = useState<Language>(() =>
    (localStorage.getItem('trip-language') as Language) || 'en',
  );
  const text = ui[language];
  const isZh = language === 'zh';

  const vote = (name: string) => setVotes(v => ({ ...v, [name]: (v[name] || 0) + 1 }));
  const switchLanguage = () => {
    const next = isZh ? 'en' : 'zh';
    setLanguage(next);
    localStorage.setItem('trip-language', next);
  };

  return (
    <main className="phone">
      <button className="language-toggle" onClick={switchLanguage} aria-label="Switch language">
        <span className={!isZh ? 'active' : ''}>EN</span>
        <span className={isZh ? 'active' : ''}>中文</span>
      </button>

      <header>
        <div>
          <p className="eyebrow">{text.passports}</p>
          <h1>{text.title}</h1>
        </div>
        <button className="avatar" aria-label={text.members}>JJ</button>
      </header>

      {tab === 'trip' && <section className="view">
        <div className="hero" style={{ backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(20,29,28,.72)), url(${photo})` }}>
          <div className="hero-tags"><span>{text.days}</span><span>{text.nights}</span></div>
          <div><p>{text.routeSubtitle}</p><h2>{text.routeHero}</h2></div>
        </div>

        <div className="section-title"><h3>{text.route}</h3><button onClick={() => setTab('map')}>{text.viewMap}</button></div>
        <div className="route-card">
          {stops.map((stop, i) => <div className="route-stop" key={stop.city}>
            <div className="route-number">{i + 1}</div>
            <div><strong>{isZh ? stopsZh[i] : stop.city}</strong><span>{isZh ? countriesZh[i] : stop.country} · {stop.nights} {isZh ? '晚' : 'nights'}</span></div>
            <small>{isZh ? stopDatesZh[i] : stop.dates}</small>
          </div>)}
        </div>

        <div className="section-title"><h3>{text.flights}</h3></div>
        <div className="poll">
          <div className="route-stop"><div className="route-number">↑</div><div><strong>AC 820</strong><span>Mar 15 · YYZ 19:50 → BCN 08:20+1</span></div><small>7h30</small></div>
          <div className="route-stop"><div className="route-number">↓</div><div><strong>AC 811</strong><span>Mar 28 · LIS 13:00 → YYZ 15:55</span></div><small>7h55</small></div>
        </div>

        <div className="section-title"><h3>{text.makeItYours}</h3></div>
        <div className="poll">
          <div className="poll-head"><span>{text.groupPace}</span><small>{travelers.join(' · ')}</small></div>
          {(isZh ? ['每日步数控制在1.5万以内', '选择室内雨天方案'] : [text.keepWalking, text.indoorOption]).map(name => <button className="poll-option" key={name} onClick={() => vote(name)}>
            <span>{name}</span><b>{votes[name] || 0}</b>
          </button>)}
        </div>
      </section>}

      {tab === 'itinerary' && <section className="view">
        <div className="page-heading"><p>{text.planSubtitle}</p><h2>{text.dayByDay}</h2></div>
        <div className="day-strip">
          {days.map((day, i) => <button key={day.date} className={selectedDay === i ? 'active' : ''} onClick={() => setSelectedDay(i)}>
            <small>{isZh ? dayZh[i].city.slice(0, 2) : day.city.slice(0, 3).toUpperCase()}</small><strong>{i + 1}</strong>
          </button>)}
        </div>
        <article className="day-card">
          <div className="day-photo"><span>{isZh ? dayZh[selectedDay].city : days[selectedDay].city}</span></div>
          <p className="day-kicker">{isZh ? dayZh[selectedDay].description : `${days[selectedDay].date} · ${days[selectedDay].pace === 'Light' ? text.light : text.moderate}`}</p>
          <h3>{isZh ? dayZh[selectedDay].title : days[selectedDay].title}</h3>
          <p className="day-desc">{isZh ? dayZh[selectedDay].description : days[selectedDay].description}</p>
          <div className="timeline">
            <div><time>AM</time><div><strong>{text.morning}</strong><span>{isZh ? dayZh[selectedDay].morning : days[selectedDay].morning}</span></div></div>
            <div><time>MID</time><div><strong>{text.lunchRest}</strong><span>{isZh ? dayZh[selectedDay].midday : days[selectedDay].midday}</span></div></div>
            <div><time>PM</time><div><strong>{text.evening}</strong><span>{isZh ? dayZh[selectedDay].evening : days[selectedDay].evening}</span></div></div>
            <div><time>GO</time><div><strong>{text.transport}</strong><span>{isZh ? dayZh[selectedDay].transport : days[selectedDay].transport}</span></div></div>
            <div><time>KM</time><div><strong>{text.pace}</strong><span>{isZh ? dayZh[selectedDay].walking : days[selectedDay].walking}</span></div></div>
            <div><time>ALT</time><div><strong>{text.alternate}</strong><span>{isZh ? dayZh[selectedDay].alternate : days[selectedDay].alternate}</span></div></div>
          </div>
        </article>
      </section>}

      {tab === 'map' && <section className="view">
        <div className="page-heading"><p>{text.mapRoute}</p><h2>{text.mapTitle}</h2></div>
        <div className="map">
          <div className="country-label portugal">{isZh ? '葡萄牙' : 'PORTUGAL'}</div>
          <div className="country-label spain">{isZh ? '西班牙' : 'SPAIN'}</div>
          {stops.map((stop, i) => <div className="map-pin" style={{ left: `${stop.x}%`, top: `${stop.y}%` }} key={stop.city}>
            <i>{i + 1}</i><span>{isZh ? stopsZh[i] : stop.city}</span>
          </div>)}
        </div>
        <div className="route-summary"><span>{isZh ? '巴塞罗那' : 'Barcelona'}</span><b>→ {isZh ? '马德里' : 'Madrid'}</b><span>{isZh ? '塞维利亚' : 'Seville'}</span><b>→ {isZh ? '里斯本' : 'Lisbon'}</b></div>
      </section>}

      {tab === 'group' && (
        <section className="view">
          <div className="page-heading"><p>{text.tripRoom}</p><h2>{text.groupTitle}</h2></div>
          <div className="members">
            {[
              ['JJ', text.jj], ['QQ', text.qq], ['AA', text.aa],
            ].map(([name, detail], i) => (
              <div className="member" key={name}>
                <span style={{ background: ['#d28d6d', '#829b78', '#b58b78'][i] }}>{name[0]}</span>
                <div><strong>{name}</strong><small>{detail}</small></div>
              </div>
            ))}
          </div>
          <div className="section-title"><h3>{text.tripChoices}</h3><small>{text.tapVote}</small></div>
          {(isZh ? choiceZh : ['Sagrada Família tickets', 'Prado & Retiro', 'Alcázar & Cathedral', 'Belém & Sintra option']).map(name => (
            <button className="choice" key={name} onClick={() => vote(name)}>
              <span>{name}</span><b>♡ {votes[name] || 0}</b>
            </button>
          ))}
        </section>
      )}

      <nav>
        {[['trip','○',text.tripTab],['itinerary','□',text.planTab],['map','⌖',text.mapTab],['group','♙',text.groupTab]].map(([id, icon, label]) => <button key={id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}>
          <span>{icon}</span><small>{label}</small>
        </button>)}
      </nav>
    </main>
  );
}
