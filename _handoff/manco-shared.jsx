// Shared design tokens, data, and atomic components for all 3 hi-fi directions
// Loaded before the direction-specific files

const MancoShared = (() => {
  const { useState, useEffect } = React;

  const buildTokens = (t) => ({
    bg0: '#1A1A1A',
    bg1: '#222222',
    bg2: '#2D2D2D',
    bg3: '#3A3A3A',
    border: 'rgba(255,255,255,0.08)',
    borderStrong: 'rgba(255,255,255,0.16)',
    text: '#FFFFFF',
    textDim: '#B0B0B0',
    textFaint: '#7A7A7A',
    accent: t.accent,
    accentDim: t.accent + '33',
    glassBg: `rgba(255,255,255,${t.glassOpacity})`,
    sectionGap: t.sectionGap,
    display: t.displayFont,
  });

  const QUESTIONS = [
    { id: 'q1', t: 'Comment faire baisser sa structure de coûts ?', cat: 'Optimisation', size: 'xl', body: "Mutualisez les fonctions support, externalisez les opérations à faible valeur ajoutée et concentrez vos ressources sur la performance. Notre modèle permet de réduire jusqu'à 40% le coût de fonctionnement d'un fonds.", contact: { n: 'Élise Marchand', t: 'Directrice associée', m: 'elise.marchand@manco.paris', p: '+33 1 84 88 12 04' } },
    { id: 'q2', t: 'Quelle solution réglementaire ?', cat: 'Conformité', size: 'm', body: "AIFM, UCITS, FIA, FPS — nous vous aidons à choisir le véhicule le plus adapté à votre stratégie d'investissement et à votre cible d'investisseurs.", contact: { n: 'Antoine Léger', t: 'Responsable Conformité', m: 'antoine.leger@manco.paris', p: '+33 1 84 88 12 06' } },
    { id: 'q3', t: 'Créer votre société de gestion ?', cat: 'Incubation', size: 's', body: "Du business plan à l'agrément AMF, nous accompagnons la création de votre SGP en moins de 9 mois. Hébergement, supervision, mentoring inclus.", contact: { n: 'Sophie Dubreuil', t: 'Head of Incubation', m: 'sophie.dubreuil@manco.paris', p: '+33 1 84 88 12 09' } },
    { id: 'q4', t: 'Externaliser le middle / back office ?', cat: 'Opérations', size: 'm', body: "Valorisation, contrôle dépositaire, passage d'ordres, NAV : déchargez-vous de la mécanique pour vous concentrer sur le pilotage.", contact: { n: 'Marc Vasseur', t: 'Head of Operations', m: 'marc.vasseur@manco.paris', p: '+33 1 84 88 12 11' } },
    { id: 'q5', t: 'Reporting investisseurs sur-mesure ?', cat: 'Reporting', size: 's', body: "Reportings réglementaires (AIFMD, EMIR, Solvency II) et reportings commerciaux personnalisés à la fréquence qui convient à vos LP.", contact: { n: 'Léa Khoury', t: 'Reporting & Performance', m: 'lea.khoury@manco.paris', p: '+33 1 84 88 12 14' } },
    { id: 'q6', t: 'Mise en conformité AMF ?', cat: 'Régulation', size: 'm', body: "Audit de conformité, rédaction de procédures, formation des équipes, interface avec le régulateur — un partenaire de bout en bout.", contact: { n: 'Antoine Léger', t: 'Responsable Conformité', m: 'antoine.leger@manco.paris', p: '+33 1 84 88 12 06' } },
    { id: 'q7', t: 'Architecture ouverte pour CGP ?', cat: 'CGP', size: 's', body: "Une alternative à la création de SGP : profitez de notre agrément, distribuez vos propres mandats et fonds via notre plateforme.", contact: { n: 'Pierre Romain', t: 'CGP Relations', m: 'pierre.romain@manco.paris', p: '+33 1 84 88 12 17' } },
    { id: 'q8', t: 'One-stop-shop institutionnel ?', cat: 'Institutionnels', size: 'm', body: "Caisses de retraite, mutuelles, family offices : centralisez l'ensemble de vos gestions sous un seul agrément, un seul reporting, un seul interlocuteur.", contact: { n: 'Hélène Costa', t: 'Institutional Sales', m: 'helene.costa@manco.paris', p: '+33 1 84 88 12 19' } },
    { id: 'q9', t: 'Gestion des risques de marché ?', cat: 'Risques', size: 's', body: "VaR, stress-tests, suivi des limites, modélisation : un dispositif de risk management proportionné à la complexité de vos stratégies.", contact: { n: 'Yann Berthier', t: 'Head of Risk', m: 'yann.berthier@manco.paris', p: '+33 1 84 88 12 22' } },
  ];

  const TEAM = [
    { id: 't1', n: 'Élise Marchand', t: 'Directrice associée', bio: "20 ans d'expérience dans la gestion d'actifs, ex-Carmignac et Lazard Frères Gestion. Diplômée HEC, certifiée AMF.", li: 'linkedin.com/in/elise-marchand', m: 'elise.marchand@manco.paris' },
    { id: 't2', n: 'Antoine Léger', t: 'Responsable Conformité', bio: "15 ans dédiés à la régulation et au contrôle, ex-AMF. Spécialiste AIFM, MIF II et lutte anti-blanchiment.", li: 'linkedin.com/in/antoine-leger', m: 'antoine.leger@manco.paris' },
    { id: 't3', n: 'Sophie Dubreuil', t: 'Head of Incubation', bio: "Accompagne depuis 12 ans les porteurs de projet dans la création de leur SGP. ESCP, master Asset Management.", li: 'linkedin.com/in/sophie-dubreuil', m: 'sophie.dubreuil@manco.paris' },
  ];

  const Logo = ({ size = 24, color = '#fff', accent }) => (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.25, fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: size, letterSpacing: '-0.02em', color, lineHeight: 1 }}>
      <span>MANC</span>
      <span style={{ position: 'relative', display: 'inline-block', width: size * 0.95, height: size * 0.95 }}>
        <span style={{ position: 'absolute', inset: 0, border: `${Math.max(2, size*0.11)}px solid ${color}`, borderRadius: '50%' }} />
        <span style={{ position: 'absolute', inset: '28%', background: accent || color, borderRadius: '50%' }} />
      </span>
      <span style={{ marginLeft: size * 0.5, fontWeight: 400, letterSpacing: '0.4em', fontSize: size * 0.6, color }}>PARIS</span>
    </div>
  );

  function Navbar({ tokens, scrollTarget }) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const root = scrollTarget || document.querySelector('[data-manco-root]');
      if (!root) return;
      const onScroll = () => setScrolled(root.scrollTop > 24);
      root.addEventListener('scroll', onScroll);
      return () => root.removeEventListener('scroll', onScroll);
    }, [scrollTarget]);
    const links = ['Équipe', 'Incubation', 'Sociétés de gestion', 'Family Office', 'Institutionnels', 'Publications'];
    return (
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        padding: scrolled ? '14px 48px' : '22px 48px',
        background: scrolled ? 'rgba(26,26,26,0.78)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
        borderBottom: scrolled ? `1px solid ${tokens.border}` : '1px solid transparent',
        transition: 'all 280ms cubic-bezier(.2,.7,.2,1)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Logo size={20} color={tokens.text} accent={tokens.accent} />
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {links.map(l => (
            <a key={l} style={{
              fontFamily: 'Manrope, sans-serif', fontSize: 13, color: tokens.textDim,
              fontWeight: 500, cursor: 'pointer', transition: 'color 160ms',
            }} onMouseEnter={e => e.currentTarget.style.color = tokens.text}
               onMouseLeave={e => e.currentTarget.style.color = tokens.textDim}>{l}</a>
          ))}
          <div style={{ display: 'flex', gap: 2, padding: 3, border: `1px solid ${tokens.border}`, borderRadius: 999, fontSize: 11, fontFamily: 'JetBrains Mono, monospace' }}>
            <span style={{ padding: '4px 10px', background: tokens.text, color: tokens.bg0, borderRadius: 999 }}>FR</span>
            <span style={{ padding: '4px 10px', color: tokens.textDim, cursor: 'pointer' }}>EN</span>
          </div>
        </div>
      </nav>
    );
  }

  function SidePanel({ q, onClose, tokens }) {
    useEffect(() => {
      const onKey = (e) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);
    if (!q) return null;
    return (
      <>
        <div onClick={onClose} style={{
          position: 'absolute', inset: 0, zIndex: 90,
          background: 'rgba(10,10,10,0.6)', backdropFilter: 'blur(8px)',
          animation: 'mancoFade 280ms ease',
        }} />
        <aside style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, zIndex: 91,
          width: 'min(560px, 92%)',
          background: tokens.bg1,
          borderLeft: `1px solid ${tokens.border}`,
          padding: 40, overflowY: 'auto',
          animation: 'mancoSlideIn 380ms cubic-bezier(.2,.7,.2,1)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tokens.accent, letterSpacing: '0.18em' }}>─ {q.cat.toUpperCase()}</div>
            <button onClick={onClose} style={{
              width: 36, height: 36, borderRadius: '50%',
              border: `1px solid ${tokens.border}`, background: 'transparent',
              color: tokens.text, cursor: 'pointer', fontSize: 16,
            }}>✕</button>
          </div>
          <h2 style={{ fontFamily: tokens.display, fontSize: 38, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', color: tokens.text, margin: 0 }}>{q.t}</h2>
          <p style={{ color: tokens.textDim, fontFamily: 'Manrope, sans-serif', fontSize: 15, lineHeight: 1.65, marginTop: 24 }}>{q.body}</p>
          <div style={{ marginTop: 36, padding: 24, borderRadius: 12, background: tokens.bg2, border: `1px solid ${tokens.border}` }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tokens.textFaint, letterSpacing: '0.16em', marginBottom: 16 }}>VOTRE INTERLOCUTEUR</div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: `linear-gradient(135deg, ${tokens.bg3}, ${tokens.bg2})`,
                border: `1px solid ${tokens.borderStrong}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: tokens.display, fontSize: 22, color: tokens.accent,
              }}>{q.contact.n.split(' ').map(s => s[0]).join('')}</div>
              <div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: 15, fontWeight: 600, color: tokens.text }}>{q.contact.n}</div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, color: tokens.textDim }}>{q.contact.t}</div>
              </div>
            </div>
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: tokens.textDim }}>
              <span>✉ {q.contact.m}</span>
              <span>☏ {q.contact.p}</span>
            </div>
          </div>
          <form style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14 }} onSubmit={e => e.preventDefault()}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tokens.textFaint, letterSpacing: '0.16em' }}>OU LAISSEZ-NOUS UN MESSAGE</div>
            {[
              { label: 'Nom complet', type: 'text' },
              { label: 'Email professionnel', type: 'email' },
              { label: 'Société', type: 'text' },
            ].map(f => (
              <label key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 12, color: tokens.textDim }}>{f.label}</span>
                <input type={f.type} style={{
                  background: tokens.bg2, border: `1px solid ${tokens.border}`,
                  borderRadius: 8, padding: '12px 14px', color: tokens.text,
                  fontFamily: 'Manrope, sans-serif', fontSize: 14, outline: 'none',
                }} onFocus={e => e.target.style.borderColor = tokens.accent}
                   onBlur={e => e.target.style.borderColor = tokens.border} />
              </label>
            ))}
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 12, color: tokens.textDim }}>Votre message</span>
              <textarea rows={4} style={{
                background: tokens.bg2, border: `1px solid ${tokens.border}`,
                borderRadius: 8, padding: '12px 14px', color: tokens.text,
                fontFamily: 'Manrope, sans-serif', fontSize: 14, outline: 'none', resize: 'vertical',
              }} />
            </label>
            <button type="submit" style={{
              marginTop: 8, padding: '14px 24px',
              background: tokens.accent, color: tokens.bg0,
              border: 'none', borderRadius: 999,
              fontFamily: 'Manrope, sans-serif', fontSize: 14, fontWeight: 600,
              cursor: 'pointer', alignSelf: 'flex-start',
            }}>Envoyer →</button>
          </form>
        </aside>
      </>
    );
  }

  function ServiceCard({ tokens, title, desc, glyph }) {
    const [hover, setHover] = useState(false);
    return (
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
        padding: 28,
        background: `linear-gradient(180deg, ${tokens.glassBg}, rgba(255,255,255,0.01))`,
        border: `1px solid ${hover ? tokens.borderStrong : tokens.border}`,
        borderRadius: 14, transition: 'all 220ms',
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        cursor: 'pointer',
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10,
          border: `1px solid ${tokens.borderStrong}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: tokens.display, fontSize: 22, color: tokens.accent,
          background: tokens.bg2,
        }}>{glyph}</div>
        <h3 style={{ fontFamily: tokens.display, fontSize: 22, fontWeight: 400, color: tokens.text, margin: '20px 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
        <p style={{ color: tokens.textDim, fontFamily: 'Manrope, sans-serif', fontSize: 14, lineHeight: 1.55, margin: 0 }}>{desc}</p>
      </div>
    );
  }

  function VideoTile({ tokens, label, big = false }) {
    const [hover, setHover] = useState(false);
    return (
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
        position: 'relative',
        aspectRatio: big ? '16/9' : '4/3',
        background: `linear-gradient(135deg, ${tokens.bg3}, ${tokens.bg2})`,
        border: `1px solid ${tokens.border}`,
        borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
        transition: 'all 220ms', transform: hover ? 'scale(1.01)' : 'scale(1)',
      }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(135deg, transparent 0 8px, rgba(255,255,255,0.02) 8px 9px)` }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: big ? 80 : 56, height: big ? 80 : 56, borderRadius: '50%',
            background: tokens.accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: tokens.bg0, fontSize: big ? 24 : 16, paddingLeft: 4,
            boxShadow: `0 0 0 ${hover ? 8 : 0}px ${tokens.accent}33`, transition: 'box-shadow 280ms',
          }}>▶</div>
        </div>
        <div style={{ position: 'absolute', left: 16, bottom: 14, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tokens.text, letterSpacing: '0.12em', background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: 4 }}>{label}</div>
      </div>
    );
  }

  function TeamCard({ p, tokens, openable = true }) {
    const [open, setOpen] = useState(false);
    return (
      <div style={{
        background: `linear-gradient(180deg, ${tokens.glassBg}, rgba(255,255,255,0.01))`,
        border: `1px solid ${tokens.border}`,
        borderRadius: 16, overflow: 'hidden',
        transition: 'all 320ms cubic-bezier(.2,.7,.2,1)',
        gridColumn: open && openable ? 'span 3' : 'span 1',
      }}>
        <div style={{ display: 'flex', flexDirection: open ? 'row' : 'column' }}>
          <div style={{
            position: 'relative',
            aspectRatio: open ? 'auto' : '4/5',
            width: open ? 280 : '100%',
            minHeight: open ? 360 : 'auto',
            backgroundImage: `repeating-linear-gradient(135deg, transparent 0 12px, rgba(255,255,255,0.02) 12px 13px), linear-gradient(135deg, ${tokens.bg3}, ${tokens.bg2})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontFamily: tokens.display, fontSize: 64, color: tokens.accent, opacity: 0.5 }}>{p.n.split(' ').map(s => s[0]).join('')}</span>
            <span style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: tokens.textFaint, letterSpacing: '0.16em' }}>PORTRAIT</span>
          </div>
          <div style={{ padding: 24, flex: 1 }}>
            <h3 style={{ fontFamily: tokens.display, fontSize: 26, fontWeight: 400, color: tokens.text, margin: 0, letterSpacing: '-0.01em' }}>{p.n}</h3>
            <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, color: tokens.textDim, marginTop: 4 }}>{p.t}</div>
            {open && (
              <>
                <p style={{ color: tokens.textDim, fontFamily: 'Manrope, sans-serif', fontSize: 14, lineHeight: 1.6, marginTop: 20 }}>{p.bio}</p>
                <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: tokens.textDim }}>
                  <span>✉ {p.m}</span>
                  <a href={`https://${p.li}`} style={{ color: tokens.accent, textDecoration: 'none' }}>↗ {p.li}</a>
                </div>
              </>
            )}
            <button onClick={() => openable && setOpen(o => !o)} style={{
              marginTop: 20, padding: '10px 18px',
              background: open ? 'transparent' : tokens.accent,
              color: open ? tokens.text : tokens.bg0,
              border: open ? `1px solid ${tokens.borderStrong}` : 'none',
              borderRadius: 999,
              fontFamily: 'Manrope, sans-serif', fontSize: 13, fontWeight: 600,
              cursor: 'pointer',
            }}>{open ? '← réduire' : 'Contacter →'}</button>
          </div>
        </div>
      </div>
    );
  }

  function Shareholders({ tokens }) {
    return (
      <section style={{ padding: `64px 48px`, background: tokens.bg1, borderBottom: `1px solid ${tokens.border}` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 64, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tokens.textFaint, letterSpacing: '0.18em' }}>NOS ACTIONNAIRES —</div>
          {['BANQUE DELUBAC & CIE', 'HOLDING BCM'].map(name => (
            <div key={name} style={{
              padding: '14px 24px', border: `1px solid ${tokens.border}`,
              borderRadius: 8, fontFamily: tokens.display, fontSize: 18,
              color: tokens.text, letterSpacing: '0.05em', opacity: 0.7,
            }}>{name}</div>
          ))}
        </div>
      </section>
    );
  }

  function Footer({ tokens }) {
    return (
      <footer style={{ background: tokens.bg0, padding: '64px 48px 32px', color: tokens.textDim, fontFamily: 'Manrope, sans-serif' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32, paddingBottom: 48, borderBottom: `1px solid ${tokens.border}` }}>
            <div>
              <Logo size={22} color={tokens.text} accent={tokens.accent} />
              <p style={{ fontSize: 13, lineHeight: 1.6, marginTop: 16, maxWidth: 320 }}>
                Société de gestion d'actifs financiers — solutions opérationnelles, réglementaires et stratégiques pour fonds, CGP et institutionnels.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tokens.textFaint, letterSpacing: '0.16em', marginBottom: 14 }}>PLAN DU SITE</div>
              {['Équipe', 'Incubation', 'Sociétés de gestion', 'Family Office', 'Institutionnels', 'Publications'].map(l => (
                <div key={l} style={{ fontSize: 13, marginBottom: 8 }}>{l}</div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tokens.textFaint, letterSpacing: '0.16em', marginBottom: 14 }}>CONTACT</div>
              <div style={{ fontSize: 13, marginBottom: 8 }}>contact@manco.paris</div>
              <div style={{ fontSize: 13, marginBottom: 8 }}>+33 1 84 88 12 00</div>
              <div style={{ fontSize: 13, marginBottom: 8 }}>12 rue Vivienne<br/>75002 Paris</div>
            </div>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tokens.textFaint, letterSpacing: '0.16em', marginBottom: 14 }}>SUIVEZ-NOUS</div>
              <div style={{ fontSize: 13, marginBottom: 8 }}>↗ LinkedIn</div>
              <div style={{ fontSize: 13, marginBottom: 8 }}>↗ Twitter / X</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, fontSize: 11, fontFamily: 'JetBrains Mono, monospace', color: tokens.textFaint, letterSpacing: '0.12em', flexWrap: 'wrap', gap: 16 }}>
            <span>© 2026 MANCO PARIS · SOCIÉTÉ AGRÉÉE AMF N° GP-XX-XXXX</span>
            <span>MENTIONS LÉGALES · POLITIQUE DE CONFIDENTIALITÉ · COOKIES</span>
          </div>
        </div>
      </footer>
    );
  }

  // Widget hu-manity.co — "Notice Choices" badge flottant bottom-left
  // Reproduit le pattern de leur widget : pill compact + panel d'options au clic
  function CookieBanner({ tokens, onClose }) {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ position: 'absolute', bottom: 24, left: 24, zIndex: 60, fontFamily: 'Manrope, sans-serif' }}>
        {open && (
          <div style={{
            position: 'absolute', bottom: 52, left: 0,
            width: 340, background: tokens.bg2, border: `1px solid ${tokens.borderStrong}`,
            borderRadius: 12, padding: 18,
            boxShadow: '0 24px 64px -16px rgba(0,0,0,0.7)', backdropFilter: 'blur(20px)',
            animation: 'mancoFade 0.18s ease-out',
          }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: tokens.text, letterSpacing: 0.3 }}>Vos préférences de confidentialité</div>
            <div style={{ fontSize: 11, color: tokens.textDim, marginTop: 8, lineHeight: 1.5 }}>
              Conformément au RGPD et au CCPA, vous pouvez choisir comment vos données personnelles sont utilisées sur ce site.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 14 }}>
              {[
                ['Strictement nécessaires', 'Toujours actifs', true],
                ['Mesure d\'audience', 'Optionnel', false],
                ['Ne pas vendre mes informations', 'Opt-out', false],
              ].map(([label, hint, locked]) => (
                <label key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', background: tokens.bg3, borderRadius: 8, cursor: locked ? 'default' : 'pointer' }}>
                  <input type="checkbox" defaultChecked={locked} disabled={locked} style={{ accentColor: tokens.accent }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: tokens.text }}>{label}</div>
                    <div style={{ fontSize: 10, color: tokens.textFaint }}>{hint}</div>
                  </div>
                </label>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              <button onClick={() => { setOpen(false); onClose && onClose(); }} style={{ flex: 1, padding: '8px 12px', background: 'transparent', color: tokens.text, border: `1px solid ${tokens.border}`, borderRadius: 999, fontSize: 11, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>Enregistrer mes choix</button>
              <button onClick={() => { setOpen(false); onClose && onClose(); }} style={{ flex: 1, padding: '8px 12px', background: tokens.accent, color: tokens.bg0, border: 'none', borderRadius: 999, fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Tout accepter</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 12, paddingTop: 10, borderTop: `1px solid ${tokens.border}`, fontSize: 9, color: tokens.textFaint, fontFamily: 'JetBrains Mono, monospace', letterSpacing: 0.5, textTransform: 'uppercase' }}>
              <span>POWERED BY</span>
              <span style={{ color: tokens.textDim, fontWeight: 600 }}>HU-MANITY.CO</span>
            </div>
          </div>
        )}
        <button onClick={() => setOpen(o => !o)} style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '8px 14px 8px 10px',
          background: tokens.bg2, border: `1px solid ${tokens.borderStrong}`,
          borderRadius: 999, color: tokens.text,
          fontFamily: 'inherit', fontSize: 11, fontWeight: 500,
          cursor: 'pointer', boxShadow: '0 8px 24px -8px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(12px)',
        }}>
          <span style={{ width: 22, height: 22, borderRadius: '50%', background: tokens.accent, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: tokens.bg0, fontSize: 11, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>!</span>
          <span>Notice Choices</span>
          <span style={{ fontSize: 9, color: tokens.textFaint, fontFamily: 'JetBrains Mono, monospace', letterSpacing: 0.5, marginLeft: 4 }}>HU-MANITY</span>
        </button>
      </div>
    );
  }

  function Crisp({ tokens }) {
    const [open, setOpen] = useState(false);
    return (
      <>
        {open && (
          <div style={{
            position: 'absolute', bottom: 96, right: 24, zIndex: 55,
            width: 320, height: 380, background: tokens.bg2,
            border: `1px solid ${tokens.borderStrong}`, borderRadius: 14,
            overflow: 'hidden', boxShadow: '0 24px 64px -16px rgba(0,0,0,0.6)',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ padding: 16, borderBottom: `1px solid ${tokens.border}`, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
              <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: 13, fontWeight: 600, color: tokens.text }}>Équipe MANCO</div>
              <span style={{ marginLeft: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tokens.textFaint }}>EN LIGNE</span>
            </div>
            <div style={{ padding: 16, flex: 1, fontFamily: 'Manrope, sans-serif', fontSize: 13, color: tokens.textDim }}>
              <div style={{ background: tokens.bg3, padding: '10px 12px', borderRadius: 10, maxWidth: 240, marginBottom: 10 }}>Bonjour 👋 comment pouvons-nous vous aider ?</div>
            </div>
            <input placeholder="Écrivez un message…" style={{ border: 'none', borderTop: `1px solid ${tokens.border}`, background: tokens.bg2, padding: 14, color: tokens.text, fontFamily: 'Manrope, sans-serif', fontSize: 13, outline: 'none' }} />
          </div>
        )}
        <button onClick={() => setOpen(o => !o)} style={{
          position: 'absolute', bottom: 24, right: 24, zIndex: 55,
          width: 56, height: 56, borderRadius: '50%',
          background: tokens.accent, color: tokens.bg0, border: 'none',
          cursor: 'pointer', fontSize: 22, fontFamily: 'Manrope, sans-serif',
          boxShadow: `0 12px 32px -8px ${tokens.accent}88`,
        }}>{open ? '✕' : '💬'}</button>
      </>
    );
  }

  function GlobalStyles({ tokens }) {
    return (
      <style>{`
        @keyframes mancoSlideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes mancoFade { from { opacity: 0; } to { opacity: 1; } }
        [data-manco-root]::-webkit-scrollbar { width: 10px; }
        [data-manco-root]::-webkit-scrollbar-track { background: ${tokens.bg0}; }
        [data-manco-root]::-webkit-scrollbar-thumb { background: ${tokens.bg3}; border-radius: 8px; }
      `}</style>
    );
  }

  return { buildTokens, QUESTIONS, TEAM, Logo, Navbar, SidePanel, ServiceCard, VideoTile, TeamCard, Shareholders, Footer, CookieBanner, Crisp, GlobalStyles };
})();

window.MancoShared = MancoShared;
