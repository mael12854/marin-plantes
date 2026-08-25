import { color, font } from '../tokens';

const tags = ['Identité', 'Voix', 'Produit live', 'Motion'];

export function Cover() {
  return (
    <section
      style={{
        background: color.vertMarin,
        color: color.craie,
        padding: '96px 72px 72px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          fontFamily: font.mono,
          fontSize: 12,
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: 'rgba(242,238,227,.55)',
        }}
      >
        <span>Marin &amp; Plantes</span>
        <span>Brand guidelines — v1.0</span>
      </div>
      <div style={{ height: 1, background: 'rgba(242,238,227,.2)', margin: '20px 0 88px' }} />
      <h1
        style={{
          fontFamily: font.display,
          fontWeight: 300,
          fontSize: 104,
          lineHeight: 0.95,
          letterSpacing: '-.02em',
          margin: 0,
          maxWidth: '16ch',
          textWrap: 'pretty',
        }}
      >
        Ta plante pousse. Marin s'occupe du reste.
      </h1>
      <p
        style={{
          fontFamily: font.display,
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 26,
          lineHeight: 1.5,
          maxWidth: '44ch',
          margin: '40px 0 0',
          color: 'rgba(242,238,227,.78)',
        }}
      >
        Un jardinier réel, une plante réelle, quelque part. Tu la commandes, tu la vois vivre, tu
        viens la visiter.
      </p>
      <div
        style={{
          display: 'flex',
          gap: 14,
          marginTop: 64,
          fontFamily: font.mono,
          fontSize: 11,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
        }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            style={{ border: '1px solid rgba(242,238,227,.3)', padding: '8px 14px', borderRadius: 100 }}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
