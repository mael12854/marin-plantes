import { color, font } from '../tokens';

export function SiteFooter() {
  return (
    <footer
      style={{
        padding: '32px 72px',
        borderTop: `1px solid ${'rgba(36,28,22,.14)'}`,
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: font.mono,
        fontSize: 11,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'rgba(36,28,22,.5)',
        background: color.craie,
      }}
    >
      <span>Marin &amp; Plantes</span>
      <span>marinetplantes@yopmail.com</span>
    </footer>
  );
}
