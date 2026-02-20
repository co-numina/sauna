"use client";

import { useEffect, useState, useCallback } from "react";

const STEAM_WISPS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + Math.random() * 84}%`,
  width: `${30 + Math.random() * 60}px`,
  height: `${80 + Math.random() * 200}px`,
  duration: `${6 + Math.random() * 8}s`,
  delay: `${Math.random() * 6}s`,
}));

const STATS = [
  { number: "3.3M", label: "Saunas in Finland" },
  { number: "5.5M", label: "Population of Finland" },
  { number: "0.6", label: "Saunas per person — more saunas than cars" },
  { number: "15 min", label: "Average session length at 80-100°C" },
];

const ETIQUETTE = [
  "Shower before entering. Always.",
  "Sit on your own towel. This is non-negotiable.",
  "Silence is welcome. You don't need to talk.",
  "Ask before throwing water on the stones (löyly).",
  "Leave your clothes — and your ego — at the door.",
  "Cool down between rounds. Roll in snow if available.",
  "The person closest to the kiuas (stove) controls the löyly.",
  "Never wear a swimsuit in a Finnish sauna. Locals will judge you.",
];

const DIPLOMACY = [
  {
    year: "1960s",
    title: "Kekkonen's Sauna Diplomacy",
    desc: "President Urho Kekkonen famously conducted foreign policy in the sauna, negotiating with Soviet leaders while sweating at 90°C. The steam, he believed, made people more honest.",
  },
  {
    year: "1997",
    title: "The Yeltsin-Ahtisaari Sessions",
    desc: "Finnish President Martti Ahtisaari and Boris Yeltsin held bilateral discussions in the sauna, reportedly reaching agreements that formal meetings couldn't achieve.",
  },
  {
    year: "2018",
    title: "Trump-Putin Helsinki Warm-Up",
    desc: "Before the Helsinki summit, Finnish hosts offered sauna access to both delegations. A tradition of neutrality — Finland's saunas don't take sides.",
  },
  {
    year: "ONGOING",
    title: "Finnish Parliament Sauna",
    desc: "The Finnish Parliament building has its own sauna. Cross-party negotiations happen there weekly. Some of Finland's most important legislation was agreed upon while naked.",
  },
];

export default function Home() {
  const [scrollPct, setScrollPct] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleScroll = useCallback(() => {
    const h = document.documentElement;
    const pct = h.scrollTop / (h.scrollHeight - h.clientHeight);
    setScrollPct(Math.min(1, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const tempHeight = `${Math.round(scrollPct * 100)}%`;
  const tempC = Math.round(20 + scrollPct * 80);

  const bgGradient = `linear-gradient(180deg, 
    hsl(${40 - scrollPct * 20}, ${20 + scrollPct * 30}%, ${92 - scrollPct * 10}%) 0%, 
    hsl(${35 - scrollPct * 25}, ${25 + scrollPct * 40}%, ${90 - scrollPct * 15}%) 100%)`;

  const copyCA = () => {
    navigator.clipboard.writeText("PASTE_CA_HERE");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div id="temp-gauge" style={{ background: bgGradient }} />

      <div className="steam-container">
        {STEAM_WISPS.map((w) => (
          <div
            key={w.id}
            className="steam-wisp"
            style={{
              left: w.left,
              width: w.width,
              height: w.height,
              animationDuration: w.duration,
              animationDelay: w.delay,
            }}
          />
        ))}
      </div>

      {/* Temperature bar */}
      <div className="temp-bar">
        <div className="temp-fill" style={{ height: tempHeight }} />
      </div>
      <div className="temp-label" style={{ transform: `translateX(-${tempC > 99 ? 4 : 0}px)` }}>
        {tempC}°C
      </div>

      {/* Nav */}
      <nav className="nav">
        <span className="nav-brand">$SAUNA</span>
        <button className="ca-box" onClick={copyCA} title="Copy contract address">
          <span>{copied ? "Copied" : "PASTE_CA_HERE"}</span>
          <svg className="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
        </button>
      </nav>

      {/* Hero */}
      <header className="hero">
        <h1>$SAUNA</h1>
        <p className="hero-sub">
          The most Finnish thing ever, tokenized.<br />
          3.3 million saunas for 5.5 million people.<br />
          Löyly is not just steam — it is spirit.
        </p>
        <span className="hero-stat">More saunas than cars</span>
      </header>

      <div className="divider" />

      {/* Sauna Stats */}
      <section className="section">
        <h2 className="section-title">Sauna Stats</h2>
        <div>
          {STATS.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Etiquette */}
      <section className="section">
        <h2 className="section-title">Sauna Etiquette</h2>
        {ETIQUETTE.map((rule, i) => (
          <div key={i} className="etiquette-item">
            <div className="etiquette-marker" />
            <span>{rule}</span>
          </div>
        ))}
      </section>

      <div className="divider" />

      {/* Sauna Diplomacy */}
      <section className="section">
        <h2 className="section-title">Sauna Diplomacy</h2>
        {DIPLOMACY.map((d, i) => (
          <div key={i} className="diplomacy-card">
            <div className="diplomacy-year">{d.year}</div>
            <div className="diplomacy-title">{d.title}</div>
            <div className="diplomacy-desc">{d.desc}</div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>$SAUNA is a memecoin with no intrinsic value or expectation of financial return.</p>
        <p style={{ marginTop: "0.5rem" }}>Built with löyly. Not financial advice.</p>
      </footer>
    </>
  );
}
