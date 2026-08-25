import { Button } from '../components/ui/Button';
import { color, font } from '../tokens';

const steps = [
  {
    n: '01',
    title: 'Tu choisis une plante',
    body: 'Monstera, olivier, ficus — tu commandes en deux minutes, sans créer de compte.',
  },
  {
    n: '02',
    title: 'Marin la plante',
    body: "Dans le jardin de ses grands-parents. Il l'arrose, la taille, la surveille. Toi, tu regardes.",
  },
  {
    n: '03',
    title: 'Tu la vois vivre',
    body: 'Chaque action est horodatée dans un journal. Tu peux venir la visiter quand tu veux.',
  },
];

const journalPreview = [
  { time: '08:12', text: 'Arrosage — 0,4 L', meta: '· Marin' },
  { time: '11:03', text: 'Mesure — 61 cm', delta: '+4 cm ce mois' },
  { time: '14:40', text: 'Taille — deux feuilles sèches retirées' },
];

export function Landing() {
  return (
    <div>
      {/* HERO */}
      <section className="mp-section" style={{ background: color.vertMarin, color: color.craie, padding: '110px 72px 96px' }}>
        <h1
          className="mp-hero-title"
          style={{
            fontFamily: font.display,
            fontWeight: 300,
            fontSize: 76,
            lineHeight: 1.02,
            letterSpacing: '-.02em',
            margin: 0,
            maxWidth: '16ch',
          }}
        >
          Ta plante pousse. Marin s'occupe du reste.
        </h1>
        <p
          className="mp-hero-sub"
          style={{
            fontFamily: font.display,
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 22,
            lineHeight: 1.5,
            maxWidth: '44ch',
            margin: '32px 0 0',
            color: 'rgba(242,238,227,.78)',
          }}
        >
          Un jardinier réel, une plante réelle, quelque part. Tu la commandes, tu la vois vivre, tu
          viens la visiter.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
          <Button to="/commander" variant="solid" style={{ background: color.argile, borderColor: color.argile }}>
            Commander une plante
          </Button>
          <Button to="/connexion" variant="outline-light">
            J'ai déjà une plante
          </Button>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="mp-section" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(36,28,22,.12)' }}>
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 11,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: color.argile,
            marginBottom: 32,
          }}
        >
          Comment ça marche
        </div>
        <div className="mp-grid-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(36,28,22,.14)', border: '1px solid rgba(36,28,22,.14)' }}>
          {steps.map((s) => (
            <div key={s.n} style={{ background: color.craie, padding: 32 }}>
              <div style={{ fontFamily: font.mono, fontSize: 11, color: color.argile, marginBottom: 14 }}>{s.n}</div>
              <div style={{ fontFamily: font.display, fontSize: 26, marginBottom: 10 }}>{s.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(36,28,22,.7)' }}>{s.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* APERÇU JOURNAL */}
      <section className="mp-section" style={{ padding: '80px 72px', background: color.nuitDeTablette, color: color.craie }}>
        <div className="mp-grid-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 56, alignItems: 'start', marginBottom: 40 }}>
          <h2 className="mp-h2" style={{ fontFamily: font.display, fontWeight: 300, fontSize: 40, lineHeight: 1.1, margin: 0 }}>
            Le journal de ta plante, en direct
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(242,238,227,.72)', margin: 0, maxWidth: '56ch' }}>
            Chaque geste de Marin est horodaté. Rien n'est promis sans être fait : ce qui est prévu
            reste visuellement plus faible que ce qui est déjà arrivé.
          </p>
        </div>
        <div style={{ maxWidth: 560, border: '1px solid rgba(147,245,162,.25)', background: 'rgba(242,238,227,.03)' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 20px',
              borderBottom: '1px solid rgba(147,245,162,.18)',
              fontFamily: font.mono,
              fontSize: 11,
              letterSpacing: '.12em',
            }}
          >
            <span style={{ color: '#93F5A2' }}>JOURNAL — PLT-0148</span>
            <span style={{ color: 'rgba(242,238,227,.4)' }}>EXEMPLE</span>
          </div>
          <div style={{ padding: '8px 20px 20px', fontFamily: font.mono, fontSize: 13, lineHeight: 1.8 }}>
            {journalPreview.map((row) => (
              <div
                key={row.time}
                style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 16, padding: '12px 0', borderBottom: '1px solid rgba(242,238,227,.08)' }}
              >
                <span style={{ color: '#93F5A2' }}>{row.time}</span>
                <span>
                  {row.text}
                  {row.meta && <span style={{ color: 'rgba(242,238,227,.45)' }}> {row.meta}</span>}
                  {row.delta && <span style={{ color: color.pousse }}> {row.delta}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mp-section" style={{ padding: '72px', background: color.argile, color: '#FBF6EC', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <div>
          <div style={{ fontFamily: font.display, fontSize: 30, marginBottom: 8 }}>Prête à pousser ?</div>
          <div style={{ fontSize: 15, opacity: 0.85 }}>La commande prend deux minutes, sans engagement.</div>
        </div>
        <Button to="/commander" variant="outline-light" style={{ borderColor: 'rgba(251,246,236,.5)', color: '#FBF6EC' }}>
          Commander une plante
        </Button>
      </section>
    </div>
  );
}
