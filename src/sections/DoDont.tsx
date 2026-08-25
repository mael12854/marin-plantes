import { SectionHead } from '../components/SectionHead';
import { color, font } from '../tokens';

const dos = [
  'Nommer la plante et son numéro dans la même phrase.',
  'Laisser du vide : au moins 30 % de chaque écran.',
  'Garder le live sombre et le reste clair.',
  'Signer chaque message « Marin ».',
  'Toujours offrir la visite comme sortie de secours.',
];

const donts = [
  'Du rouge, des badges d’alerte, des compteurs qui pressent.',
  "Du dégradé, de l'ombre portée, du verre dépoli.",
  'Deux motifs superposés, ou un motif sur une photo.',
  'Des plantes illustrées, des icônes de feuille mignonnes.',
  'Parler de « votre expérience » : on parle de sa plante.',
];

export function DoDont() {
  return (
    <section style={{ padding: '80px 72px 110px' }}>
      <SectionHead>12 — Do &amp; Don't</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ border: '1px solid rgba(36,28,22,.14)', padding: 32, background: color.craieClaire }}>
          <div style={{ fontFamily: font.display, fontSize: 30, marginBottom: 20, color: color.vertMarin }}>On fait</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 15, lineHeight: 1.6, color: 'rgba(36,28,22,.78)' }}>
            {dos.map((line) => (
              <div key={line} style={{ display: 'flex', gap: 12 }}>
                <span style={{ color: color.pousse, fontFamily: font.mono }}>+</span>
                {line}
              </div>
            ))}
          </div>
        </div>
        <div style={{ border: '1px solid rgba(36,28,22,.14)', padding: 32, background: color.craieClaire }}>
          <div style={{ fontFamily: font.display, fontSize: 30, marginBottom: 20, color: color.argile }}>On ne fait pas</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 15, lineHeight: 1.6, color: 'rgba(36,28,22,.78)' }}>
            {donts.map((line) => (
              <div key={line} style={{ display: 'flex', gap: 12 }}>
                <span style={{ color: color.argile, fontFamily: font.mono }}>−</span>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 64,
          paddingTop: 28,
          borderTop: '1px solid rgba(36,28,22,.14)',
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: font.mono,
          fontSize: 11,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: 'rgba(36,28,22,.5)',
        }}
      >
        <span>Marin &amp; Plantes — Brand guidelines v1.0</span>
        <span>Questions : marinetplantes@yopmail.com</span>
      </div>
    </section>
  );
}
