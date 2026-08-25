import { SectionHead } from '../components/SectionHead';
import { color, font, sectionStyle } from '../tokens';

export function Palette({ phos }: { phos: string }) {
  return (
    <section style={sectionStyle}>
      <SectionHead>03 — Palette</SectionHead>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: 1,
          background: 'rgba(36,28,22,.14)',
          border: '1px solid rgba(36,28,22,.14)',
        }}
      >
        <div style={{ background: color.vertMarin, padding: '32px 24px', height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: color.craie }}>
          <div style={{ fontFamily: font.display, fontSize: 24 }}>Vert Marin</div>
          <div style={{ fontFamily: font.mono, fontSize: 11, opacity: 0.7, marginTop: 6 }}>#1E3A2B · 62 %</div>
        </div>
        <div style={{ background: color.craie, padding: '32px 24px', height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={{ fontFamily: font.display, fontSize: 24 }}>Craie</div>
          <div style={{ fontFamily: font.mono, fontSize: 11, opacity: 0.6, marginTop: 6 }}>#F2EEE3 · 24 %</div>
        </div>
        <div style={{ background: color.argile, padding: '32px 24px', height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#FBF6EC' }}>
          <div style={{ fontFamily: font.display, fontSize: 24 }}>Argile</div>
          <div style={{ fontFamily: font.mono, fontSize: 11, opacity: 0.8, marginTop: 6 }}>#C06A3E · 8 %</div>
        </div>
        <div style={{ background: color.terre, padding: '32px 24px', height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: color.craie }}>
          <div style={{ fontFamily: font.display, fontSize: 24 }}>Terre</div>
          <div style={{ fontFamily: font.mono, fontSize: 11, opacity: 0.7, marginTop: 6 }}>#241C16 · texte</div>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: 1,
          background: 'rgba(36,28,22,.14)',
          border: '1px solid rgba(36,28,22,.14)',
          borderTop: 0,
        }}
      >
        <div style={{ background: color.pousse, padding: '22px 24px', height: 96, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#F7FAF3' }}>
          <div style={{ fontSize: 14, fontWeight: 500 }}>Pousse</div>
          <div style={{ fontFamily: font.mono, fontSize: 11, opacity: 0.85, marginTop: 4 }}>#6B8F5E — graphes, jauges</div>
        </div>
        <div style={{ background: color.craieFoncee, padding: '22px 24px', height: 96, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={{ fontSize: 14, fontWeight: 500 }}>Craie foncée</div>
          <div style={{ fontFamily: font.mono, fontSize: 11, opacity: 0.6, marginTop: 4 }}>#E4DDCB — surfaces</div>
        </div>
        <div style={{ background: color.nuitDeTablette, padding: '22px 24px', height: 96, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: phos }}>
          <div style={{ fontSize: 14, fontWeight: 500 }}>Nuit de tablette</div>
          <div style={{ fontFamily: font.mono, fontSize: 11, opacity: 0.85, marginTop: 4 }}>#0E1A13 — fond de l'écran</div>
        </div>
        <div style={{ background: color.nuitDeTablette, padding: '22px 24px', height: 96, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: phos, borderLeft: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 500 }}>Phosphore</div>
          <div style={{ fontFamily: font.mono, fontSize: 11, opacity: 0.85, marginTop: 4 }}>Signal live uniquement</div>
        </div>
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.65)', margin: '20px 0 0', maxWidth: '70ch' }}>
        Deux fonds seulement : Craie pour tout ce qui est lisible, Vert Marin pour les respirations
        et la couverture. Le Phosphore n'est jamais décoratif — il n'apparaît que sur la Nuit de
        tablette, pour signaler que l'écran posé dans l'herbe est réellement en ligne. Aucun rouge
        dans la marque : rien n'est jamais une alerte.
      </p>
    </section>
  );
}
