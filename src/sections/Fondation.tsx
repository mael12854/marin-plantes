import { SectionHead } from '../components/SectionHead';
import { color, font, sectionStyle } from '../tokens';

const principles = [
  {
    n: '01',
    title: 'Preuve, pas promesse',
    body: "Chaque action est horodatée. On montre plutôt que d'affirmer.",
  },
  {
    n: '02',
    title: 'Marin est une personne',
    body: 'Pas un service anonyme. Il signe, il tutoie, il a des avis.',
  },
  {
    n: '03',
    title: 'Le temps végétal',
    body: 'Rien ne clignote en rouge. Une plante ne demande jamais une réponse immédiate.',
  },
  {
    n: '04',
    title: 'Toujours visitable',
    body: "L'adresse, l'heure, le chemin : la visite est un droit, pas une option.",
  },
];

export function Fondation() {
  return (
    <section style={sectionStyle}>
      <SectionHead>01 — Fondation</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}>
        <div>
          <h2
            style={{
              fontFamily: font.display,
              fontWeight: 300,
              fontSize: 52,
              lineHeight: 1.05,
              letterSpacing: '-.01em',
              margin: '0 0 24px',
            }}
          >
            Le luxe de la lenteur
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(36,28,22,.75)', margin: '0 0 16px', maxWidth: '46ch' }}>
            Marin &amp; Plantes n'est pas une jardinerie. C'est une délégation : tu choisis une
            plante, Marin la plante, l'arrose, la taille, la surveille. Toi, tu regardes.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(36,28,22,.75)', margin: 0, maxWidth: '46ch' }}>
            La marque doit faire ressentir deux choses en même temps : <em>ça existe vraiment</em>{' '}
            (preuve, journal, caméra, une visite possible) et <em>tu n'as rien à faire</em> (calme,
            aucune urgence, aucune notification anxieuse).
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(36,28,22,.14)' }}>
          {principles.map((p) => (
            <div key={p.n} style={{ background: color.craie, padding: 26 }}>
              <div style={{ fontFamily: font.mono, fontSize: 11, color: color.argile, marginBottom: 10 }}>{p.n}</div>
              <div style={{ fontFamily: font.display, fontSize: 24, marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(36,28,22,.65)' }}>{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
