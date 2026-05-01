// MANCO — Direction C: CONVERSATIONAL
// Hero qui POSE la question · Grille 3×3 stricte avec icônes · Personas en 4 colonnes verticales

const HiFiC = (() => {
  const { useState, useEffect, useRef } = React;
  const S = window.MancoShared;

  // Hero direction B (split layout avec panneau stats credibilité)
  function HeroConversational({ tokens }) {
    return (
      <section style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr',
        background: `radial-gradient(800px 400px at 30% 0%, ${tokens.accent}10, transparent 60%), ${tokens.bg1}`,
        borderBottom: `1px solid ${tokens.border}`,
      }}>
        <div style={{ padding: '100px 48px 80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tokens.textDim, letterSpacing: '0.18em' }}>
            <span style={{ width: 8, height: 8, background: tokens.accent, borderRadius: '50%', boxShadow: `0 0 16px ${tokens.accent}` }} />
            SOCIÉTÉ DE GESTION · PARIS · AGRÉÉE AMF
          </div>
          <h1 style={{ fontFamily: tokens.display, fontSize: 'clamp(40px, 5.5vw, 76px)', lineHeight: 1, letterSpacing: '-0.025em', fontWeight: 400, margin: '32px 0 0', color: tokens.text }}>
            Nous prenons en charge toutes les activités liées au <em style={{ fontStyle: 'italic', color: tokens.accent }}>fonctionnement</em> quotidien de la gestion de fonds.
          </h1>
          <div style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button style={{ padding: '16px 28px', background: tokens.accent, color: tokens.bg0, border: 'none', borderRadius: 999, fontFamily: 'Manrope, sans-serif', fontSize: 14, fontWeight: 600, cursor: 'pointer', boxShadow: `0 8px 32px -8px ${tokens.accent}88` }}>Contactez-nous →</button>
            <button style={{ padding: '16px 28px', background: 'transparent', color: tokens.text, border: `1px solid ${tokens.borderStrong}`, borderRadius: 999, fontFamily: 'Manrope, sans-serif', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>Nos services</button>
          </div>
        </div>
        <div style={{ borderLeft: `1px solid ${tokens.border}`, background: tokens.bg2, display: 'grid', gridTemplateRows: '1fr 1fr 1fr' }}>
          {[
            ['Agréée AMF', 'depuis 2018', 'GP-XX-XXXX'],
            ['12+', 'fonds gérés', 'sous notre agrément'],
            ['1.2 Mds €', 'sous gestion', 'au 31/03/2026'],
          ].map(([big, sub, foot], i) => (
            <div key={i} style={{ padding: '36px 32px', borderTop: i ? `1px solid ${tokens.border}` : 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tokens.textFaint, letterSpacing: '0.16em' }}>0{i+1}</div>
              <div style={{ fontFamily: tokens.display, fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, color: tokens.text, marginTop: 8, lineHeight: 1, letterSpacing: '-0.02em' }}>{big}</div>
              <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, color: tokens.textDim, marginTop: 6 }}>{sub}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tokens.textFaint, marginTop: 4 }}>{foot}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function GridCard({ q, tokens, onOpen, glyph }) {
    const [hover, setHover] = useState(false);
    return (
      <div onClick={() => onOpen(q)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
        background: `linear-gradient(180deg, ${tokens.glassBg}, rgba(255,255,255,0.01))`,
        border: `1px solid ${hover ? tokens.borderStrong : tokens.border}`,
        borderRadius: 14, padding: 28, cursor: 'pointer',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        minHeight: 240, transition: 'all 240ms', transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hover ? `0 16px 48px -16px rgba(0,0,0,0.6)` : 'none',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', border: `1px solid ${hover ? tokens.accent : tokens.borderStrong}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: tokens.display, fontSize: 26, color: tokens.accent, transition: 'border-color 220ms' }}>{glyph}</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tokens.textFaint, letterSpacing: '0.16em' }}>{q.cat.toUpperCase()}</div>
        </div>
        <h3 style={{ fontFamily: tokens.display, fontSize: 24, fontWeight: 400, color: tokens.text, margin: '24px 0 0', letterSpacing: '-0.015em', lineHeight: 1.15 }}>{q.t}</h3>
        <div style={{ marginTop: 20, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: hover ? tokens.accent : tokens.textDim, letterSpacing: '0.1em', transition: 'color 220ms' }}>→ ouvrir le panel</div>
      </div>
    );
  }

  function QuestionsGrid3x3({ tokens, onOpen }) {
    const glyphs = ['€', '§', '+', '↗', '◫', '✓', '⊙', '◇', '~'];
    return (
      <section style={{ padding: `${tokens.sectionGap}px 48px`, background: tokens.bg1, borderBottom: `1px solid ${tokens.border}` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {S.QUESTIONS.map((q, i) => <GridCard key={q.id} q={q} tokens={tokens} onOpen={onOpen} glyph={glyphs[i]} />)}
          </div>
        </div>
      </section>
    );
  }

  function PersonaColumns({ tokens }) {
    const personas = [
      { num: '02', t: 'Porteur de projet', sub: "Solution clé en main, du cadrage à l'onboarding." },
      { num: '03', t: 'Société de gestion', sub: "Concentrez-vous sur vos performances et vos clients." },
      { num: '04', t: 'Conseiller CGP', sub: "Architecture ouverte." },
      { num: '05', t: 'Institutionnel', sub: "One-stop-shop de vos gestions." },
    ];
    return (
      <section style={{ padding: `${tokens.sectionGap}px 48px`, background: tokens.bg2, borderBottom: `1px solid ${tokens.border}` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tokens.accent, letterSpacing: '0.18em', marginBottom: 16 }}>— 02 / VOTRE PROFIL</div>
          <h2 style={{ fontFamily: tokens.display, fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 400, color: tokens.text, lineHeight: 1, letterSpacing: '-0.025em', margin: 0 }}>
            Qui <em style={{ fontStyle: 'italic', color: tokens.accent }}>êtes-vous</em> ?
          </h2>
          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {personas.map(p => (
              <div key={p.num} style={{ background: `linear-gradient(180deg, ${tokens.glassBg}, rgba(255,255,255,0.01))`, border: `1px solid ${tokens.border}`, borderRadius: 14, padding: 28, minHeight: 320, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: tokens.display, fontStyle: 'italic', fontSize: 56, color: tokens.accent, lineHeight: 1 }}>{p.num}</div>
                <h3 style={{ fontFamily: tokens.display, fontSize: 26, fontWeight: 400, color: tokens.text, margin: '20px 0 8px', letterSpacing: '-0.01em' }}>{p.t}</h3>
                <p style={{ color: tokens.textDim, fontFamily: 'Manrope, sans-serif', fontSize: 14, lineHeight: 1.55, margin: 0, flex: 1 }}>{p.sub}</p>
                <button style={{ marginTop: 20, padding: '8px 14px', background: 'transparent', color: tokens.text, border: `1px solid ${tokens.borderStrong}`, borderRadius: 999, fontFamily: 'Manrope, sans-serif', fontSize: 12, fontWeight: 500, cursor: 'pointer', alignSelf: 'flex-start' }}>→ détails</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function SGPDetail({ tokens }) {
    return (
      <section style={{ padding: `${tokens.sectionGap}px 48px`, background: tokens.bg1, borderBottom: `1px solid ${tokens.border}` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tokens.accent, letterSpacing: '0.18em', marginBottom: 16 }}>— DÉTAIL · SOCIÉTÉ DE GESTION</div>
          <h2 style={{ fontFamily: tokens.display, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: tokens.text, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>Quatre piliers opérationnels.</h2>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <S.ServiceCard tokens={tokens} glyph="◫" title="Middle / Back" desc="Valorisation, NAV, contrôle dépositaire." />
            <S.ServiceCard tokens={tokens} glyph="✓" title="Conformité" desc="Procédures, RCCI, formation, audit." />
            <S.ServiceCard tokens={tokens} glyph="~" title="Risques" desc="VaR, stress-tests, suivi des limites." />
            <S.ServiceCard tokens={tokens} glyph="◐" title="Reporting" desc="Réglementaire et commercial." />
          </div>
          <div style={{ marginTop: 56 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tokens.accent, letterSpacing: '0.16em', marginBottom: 20 }}>— TÉMOIGNAGES</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8 }}>
              {[['Carmin', '02:14'], ['Tactical', '01:48'], ['Pivot', '03:02'], ['Northwind', '02:30'], ['Lumen', '01:55'], ['Adagio', '02:22']].map(([n, d]) => <S.VideoTile key={n} tokens={tokens} label={`${n.toUpperCase()} · ${d}`} />)}
            </div>
          </div>
        </div>
      </section>
    );
  }

  function VideosFullBleed({ tokens }) {
    return (
      <section style={{ padding: `${tokens.sectionGap}px 48px`, background: tokens.bg0, borderBottom: `1px solid ${tokens.border}` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {[
            { num: '04', t: 'CGP — Architecture ouverte' },
            { num: '05', t: 'Institutionnel — One-stop-shop' },
          ].map(p => (
            <div key={p.num}>
              <h3 style={{ fontFamily: tokens.display, fontSize: 'clamp(24px, 2.4vw, 36px)', fontWeight: 400, color: tokens.text, margin: '0 0 16px', letterSpacing: '-0.015em' }}>{p.t}</h3>
              <S.VideoTile tokens={tokens} big label={`PRÉSENTATION · 03:24`} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  function TeamHorizontal({ tokens }) {
    return (
      <section style={{ padding: `${tokens.sectionGap}px 48px`, background: tokens.bg1, borderBottom: `1px solid ${tokens.border}` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tokens.accent, letterSpacing: '0.18em', marginBottom: 16 }}>— 06 / L'ÉQUIPE</div>
          <h2 style={{ fontFamily: tokens.display, fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 400, color: tokens.text, lineHeight: 1, letterSpacing: '-0.025em', margin: 0 }}>Les visages derrière <em style={{ fontStyle: 'italic', color: tokens.accent }}>MANCO</em>.</h2>
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'start' }}>
            {S.TEAM.map(p => <S.TeamCard key={p.id} p={p} tokens={tokens} />)}
          </div>
        </div>
      </section>
    );
  }

  function App({ withTweaks = false }) {
    const TWEAK_DEFAULTS = {"accent":"#7DD3FC","displayFont":"Instrument Serif","sectionGap":120,"glassOpacity":0.04};
    const [tweaks, setTweak] = withTweaks && window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];
    const tokens = S.buildTokens(tweaks);
    const [openQ, setOpenQ] = useState(null);
    const [cookies, setCookies] = useState(true);
    const rootRef = useRef(null);

    return (
      <div ref={rootRef} data-manco-root style={{ position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden', background: tokens.bg1, color: tokens.text, fontFamily: 'Manrope, sans-serif' }}>
        <S.GlobalStyles tokens={tokens} />
        <S.Navbar tokens={tokens} scrollTarget={rootRef.current} />
        <HeroConversational tokens={tokens} />
        <QuestionsGrid3x3 tokens={tokens} onOpen={setOpenQ} />
        <PersonaColumns tokens={tokens} />
        <SGPDetail tokens={tokens} />
        <VideosFullBleed tokens={tokens} />
        <TeamHorizontal tokens={tokens} />
        <S.Shareholders tokens={tokens} />
        <S.Footer tokens={tokens} />
        <S.SidePanel q={openQ} onClose={() => setOpenQ(null)} tokens={tokens} />
        {cookies && <S.CookieBanner tokens={tokens} onClose={() => setCookies(false)} />}
        <S.Crisp tokens={tokens} />
        {withTweaks && window.TweaksPanel && (
          <window.TweaksPanel title="Tweaks">
            <window.TweakSection title="Couleur d'accent">
              <window.TweakRadio value={tweaks.accent} onChange={v => setTweak('accent', v)} options={[{ value: '#7DD3FC', label: 'Ice' }, { value: '#60A5FA', label: 'Sky' }, { value: '#3B82F6', label: 'Royal' }, { value: '#06B6D4', label: 'Cyan' }]} />
              <window.TweakColor label="Custom" value={tweaks.accent} onChange={v => setTweak('accent', v)} />
            </window.TweakSection>
            <window.TweakSection title="Font display">
              <window.TweakSelect value={tweaks.displayFont} onChange={v => setTweak('displayFont', v)} options={[{ value: 'Instrument Serif', label: 'Instrument Serif' }, { value: 'Fraunces', label: 'Fraunces' }, { value: 'EB Garamond', label: 'EB Garamond' }, { value: 'Manrope', label: 'Manrope' }]} />
            </window.TweakSection>
            <window.TweakSection title="Espacement"><window.TweakSlider value={tweaks.sectionGap} onChange={v => setTweak('sectionGap', v)} min={64} max={200} step={8} /></window.TweakSection>
            <window.TweakSection title="Opacité glass"><window.TweakSlider value={tweaks.glassOpacity} onChange={v => setTweak('glassOpacity', v)} min={0} max={0.12} step={0.01} /></window.TweakSection>
          </window.TweaksPanel>
        )}
      </div>
    );
  }

  return App;
})();

window.HiFiC = HiFiC;
