import { SectionHead } from '../components/SectionHead';
import { color, font, sectionStyle } from '../tokens';

const icons = [
  { label: 'GOUTTE', style: { width: 26, height: 26, border: `1.5px solid ${color.vertMarin}`, borderRadius: '50%' } },
  { label: 'POT', style: { width: 26, height: 26, border: `1.5px solid ${color.vertMarin}` } },
  { label: 'FEUILLE', style: { width: 26, height: 26, border: `1.5px solid ${color.vertMarin}`, borderRadius: '50% 0 50% 0' } },
  { label: 'PELLE', style: { width: 26, height: 26, border: `1.5px solid ${color.vertMarin}`, borderRadius: '13px 13px 0 0' } },
  { label: 'TABLETTE', style: { width: 26, height: 14, border: `1.5px solid ${color.vertMarin}`, borderRadius: 3 } },
  { label: 'VISITE', style: { width: 26, height: 26, border: `1.5px dashed ${color.vertMarin}`, borderRadius: '50%' } },
];

export function Iconographie() {
  return (
    <section style={sectionStyle}>
      <SectionHead>07 — Iconographie</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 1, background: 'rgba(36,28,22,.14)', border: '1px solid rgba(36,28,22,.14)' }}>
          {icons.map((icon) => (
            <div
              key={icon.label}
              style={{
                background: color.craie,
                aspectRatio: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
              }}
            >
              <div style={icon.style} />
              <div style={{ fontFamily: font.mono, fontSize: 9, color: 'rgba(36,28,22,.55)' }}>{icon.label}</div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: font.display, fontSize: 26, marginBottom: 12 }}>Géométrie, pas illustration</div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.7)', margin: '0 0 14px' }}>
            Les icônes se construisent à partir de trois primitives seulement : le cercle, le
            carré, l'arc. Trait de 1,5&nbsp;px, extrémités carrées, grille de 24&nbsp;px, aucun
            remplissage, aucun angle arrondi ajouté.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.7)', margin: 0 }}>
            Le tiret discontinu signifie toujours « prévu, pas encore fait ». Pas de jeux d'icônes
            tiers, pas d'emoji, pas de plante dessinée — les plantes sont photographiées, jamais
            illustrées.
          </p>
        </div>
      </div>
    </section>
  );
}
