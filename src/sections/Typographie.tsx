import { SectionHead } from '../components/SectionHead';
import { color, font, sectionStyle } from '../tokens';

const specimens = [
  {
    sample: 'Aa',
    sampleFont: font.display,
    sampleWeight: 300,
    sampleSize: 76,
    label: 'Newsreader Light / Italic',
    body: 'Titres, citations de Marin, chiffres de croissance. Jamais en dessous de 20 px. Interlignage serré (0,95–1,1).',
  },
  {
    sample: 'Aa',
    sampleFont: font.body,
    sampleWeight: 500,
    sampleSize: 76,
    label: 'Archivo 400 / 500 / 600',
    body: 'Interface, paragraphes, boutons, formulaires. 14–17 px, interlignage 1,6–1,7.',
  },
  {
    sample: 'Aa',
    sampleFont: font.mono,
    sampleWeight: 400,
    sampleSize: 70,
    label: 'IBM Plex Mono 400',
    body: "Tout ce qui est mesuré : horodatages, journal live, températures, identifiants de plante, étiquettes.",
  },
];

const scale = [
  'Titre écran ····· Newsreader 300 / 44–104 px / −1,5 %',
  'Sous-titre ······ Newsreader Italic 300 / 22–26 px',
  'Corps ··········· Archivo 400 / 16 px / 1,7',
  'Étiquette ······· Plex Mono 400 / 11 px / +0,14 em / caps',
  'Journal ········· Plex Mono 400 / 13 px / 1,8',
];

export function Typographie() {
  return (
    <section style={sectionStyle}>
      <SectionHead>04 — Typographie</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'rgba(36,28,22,.14)', border: '1px solid rgba(36,28,22,.14)' }}>
        {specimens.map((s) => (
          <div key={s.label} style={{ background: color.craie, padding: 32 }}>
            <div
              style={{
                fontFamily: s.sampleFont,
                fontWeight: s.sampleWeight,
                fontSize: s.sampleSize,
                lineHeight: 1,
                marginBottom: s.sampleFont === font.mono ? 24 : 18,
              }}
            >
              {s.sample}
            </div>
            <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: color.argile, marginBottom: 8 }}>
              {s.label}
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.7)' }}>{s.body}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 40, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: font.display, fontWeight: 300, fontSize: 44, lineHeight: 1.05, margin: '0 0 8px' }}>
            Le monstera de Camille
          </div>
          <div style={{ fontFamily: font.mono, fontSize: 12, color: color.argile, letterSpacing: '.1em', marginBottom: 14 }}>
            PLT-0148 · CARRÉ NORD · PRÈS DU POMMIER
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(36,28,22,.75)', margin: 0 }}>
            Planté le 14 mars. Arrosé 41 fois. Taillé deux fois. Visité une fois par Camille, un
            dimanche matin, avec un café.
          </p>
        </div>
        <div style={{ fontFamily: font.mono, fontSize: 12, lineHeight: 2.1, color: 'rgba(36,28,22,.7)' }}>
          {scale.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
