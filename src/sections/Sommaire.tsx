import { font } from '../tokens';

const columns = [
  { title: '01 Fondation', items: ['Positionnement', 'Principes'] },
  { title: '02 Identité', items: ['Logo & variantes', 'Palette', 'Typographie'] },
  { title: '03 Langage', items: ['Ton de voix', 'Iconographie', 'Photographie'] },
  { title: '04 Produit', items: ['Journal live', 'Vue caméra', 'Motion'] },
  { title: '05 Cadre', items: ['Emails', "Do & Don't"] },
];

export function Sommaire() {
  return (
    <section style={{ padding: '56px 72px', borderBottom: '1px solid rgba(36,28,22,.12)' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5,1fr)',
          gap: 28,
          fontFamily: font.mono,
          fontSize: 12,
          lineHeight: 2,
          color: 'rgba(36,28,22,.62)',
        }}
      >
        {columns.map((col) => (
          <div key={col.title} style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#241C16' }}>{col.title}</span>
            {col.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
