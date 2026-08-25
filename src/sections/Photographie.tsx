import { ImageSlot } from '../components/ImageSlot';
import { SectionHead } from '../components/SectionHead';
import { font, sectionStyle } from '../tokens';

const notes = [
  {
    title: 'Lumière',
    body: "Lumière du jardin, fin d'après-midi. Ombres longues, herbe un peu jaunie, rien de rangé. Jamais de flash, jamais de fond studio blanc, jamais de plante détourée.",
  },
  {
    title: 'Cadrage',
    body: "Deux distances : le plan large qui montre le lieu, le très gros plan qui montre la matière. Rien entre les deux. Le pot et l'étiquette restent visibles : ils prouvent que c'est la bonne plante.",
  },
  {
    title: 'Traitement',
    body: "Verts légèrement désaturés pour rejoindre le Vert Marin, hautes lumières crème. Pas de filtre, pas de vignettage, aucun texte incrusté dans l'image.",
  },
];

export function Photographie() {
  return (
    <section style={sectionStyle}>
      <SectionHead>08 — Photographie des plantes</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
        <div style={{ height: 340, position: 'relative' }}>
          <ImageSlot label="La plante dans l'herbe du jardin, fin d'après-midi" />
        </div>
        <div style={{ height: 340, position: 'relative' }}>
          <ImageSlot label="Détail : une feuille, la main terreuse de Marin" />
        </div>
        <div style={{ height: 340, position: 'relative' }}>
          <ImageSlot label="Marin qui creuse à la pelle, jamais posé face caméra" />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 28 }}>
        <div style={{ height: 200, position: 'relative' }}>
          <ImageSlot label="Le jardin des grands-parents en large, herbe haute" />
        </div>
        <div style={{ height: 200, position: 'relative' }}>
          <ImageSlot label="La pelle plantée dans la terre retournée" />
        </div>
        <div style={{ height: 200, position: 'relative' }}>
          <ImageSlot label="La vieille tablette calée sur une brique, dans l'herbe" />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 48 }}>
        {notes.map((n) => (
          <div key={n.title}>
            <div style={{ fontFamily: font.display, fontSize: 22, marginBottom: 10 }}>{n.title}</div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.7)', margin: 0 }}>{n.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
