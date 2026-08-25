import { SectionHead } from '../components/SectionHead';
import { color, font, sectionStyle } from '../tokens';

export function Motifs() {
  return (
    <section style={sectionStyle}>
      <SectionHead>05 — Motifs</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'start', marginBottom: 44 }}>
        <h2 style={{ fontFamily: font.display, fontWeight: 300, fontSize: 52, lineHeight: 1.05, margin: 0 }}>
          Quatre motifs, tous issus du métier
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(36,28,22,.75)', margin: 0, maxWidth: '58ch' }}>
          Aucun motif de la marque n'est décoratif : chacun est la trace d'un geste réel de Marin.
          Un motif ne se superpose jamais à un autre, et n'occupe jamais plus d'un tiers d'une
          surface. En cas de doute : du vide.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1, background: 'rgba(36,28,22,.14)', border: '1px solid rgba(36,28,22,.14)' }}>
        <div style={{ background: color.craie, padding: 0 }}>
          <div
            style={{
              height: 220,
              backgroundColor: color.vertMarin,
              backgroundImage: 'radial-gradient(circle at center, rgba(242,238,227,.55) 1.6px, transparent 1.7px)',
              backgroundSize: '22px 22px',
            }}
          />
          <div style={{ padding: '26px 28px 30px' }}>
            <div style={{ fontFamily: font.display, fontSize: 26, marginBottom: 6 }}>Le calendrier d'arrosage</div>
            <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: color.argile, marginBottom: 12 }}>
              Grille de points · 22 px
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.7)', margin: 0 }}>
              Un point = un arrosage. C'est le motif principal, la texture par défaut des grands
              fonds verts. Point plein = fait, point évidé = prévu. Sur Craie, points en Terre à
              20&nbsp;% d'opacité.
            </p>
          </div>
        </div>

        <div style={{ background: color.craie, padding: 0 }}>
          <div
            style={{
              height: 220,
              backgroundColor: color.craieFoncee,
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(36,28,22,.22) 0 1px, transparent 1px 34px)',
            }}
          />
          <div style={{ padding: '26px 28px 30px' }}>
            <div style={{ fontFamily: font.display, fontSize: 26, marginBottom: 6 }}>Les sillons</div>
            <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: color.argile, marginBottom: 12 }}>
              Filets verticaux · 34 px
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.7)' }}>
              Les sillons que Marin creuse lui-même à la pelle, vus de dessus — inégaux, faits à
              la main. Séparateur de sections, fond des plans du jardin. Toujours vertical, jamais
              incliné, jamais animé.
            </p>
          </div>
        </div>

        <div style={{ background: color.craie, padding: 0 }}>
          <div
            style={{
              height: 220,
              backgroundColor: color.nuitDeTablette,
              backgroundImage:
                'linear-gradient(rgba(147,245,162,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(147,245,162,.13) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: 2,
                background: 'linear-gradient(90deg,transparent,rgba(147,245,162,.5),transparent)',
                animation: 'scanline 5.5s linear infinite',
              }}
            />
          </div>
          <div style={{ padding: '26px 28px 30px' }}>
            <div style={{ fontFamily: font.display, fontSize: 26, marginBottom: 6 }}>La vieille dalle</div>
            <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: color.argile, marginBottom: 12 }}>
              Grille phosphore · 28 px
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.7)', margin: 0 }}>
              La grille de pixels de la tablette posée dans l'herbe. Réservée au territoire live :
              la vue caméra et le journal. C'est le seul motif qui bouge (une ligne de balayage,
              5,5&nbsp;s, une seule fois visible à l'écran). Interdit sur les supports imprimés et
              commerciaux.
            </p>
          </div>
        </div>

        <div style={{ background: color.craie, padding: 0 }}>
          <div
            style={{
              height: 220,
              background: color.craie,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 14,
              padding: '0 28px',
            }}
          >
            <div
              style={{
                width: 96,
                height: 130,
                background: color.craieFoncee,
                borderLeft: `6px solid ${color.argile}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '12px 10px',
              }}
            >
              <div style={{ fontFamily: font.mono, fontSize: 9, letterSpacing: '.1em', color: 'rgba(36,28,22,.6)' }}>PLT-0148</div>
              <div style={{ fontFamily: font.display, fontSize: 15, lineHeight: 1.2 }}>Monstera</div>
            </div>
            <div
              style={{
                width: 96,
                height: 130,
                background: color.vertMarin,
                borderLeft: `6px solid ${color.argile}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '12px 10px',
                color: color.craie,
              }}
            >
              <div style={{ fontFamily: font.mono, fontSize: 9, letterSpacing: '.1em', opacity: 0.7 }}>PLT-0149</div>
              <div style={{ fontFamily: font.display, fontSize: 15, lineHeight: 1.2 }}>Olivier</div>
            </div>
            <div
              style={{
                width: 96,
                height: 130,
                background: color.argile,
                borderLeft: `6px solid ${color.terre}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '12px 10px',
                color: '#FBF6EC',
              }}
            >
              <div style={{ fontFamily: font.mono, fontSize: 9, letterSpacing: '.1em', opacity: 0.85 }}>PLT-0150</div>
              <div style={{ fontFamily: font.display, fontSize: 15, lineHeight: 1.2 }}>Ficus</div>
            </div>
          </div>
          <div style={{ padding: '26px 28px 30px' }}>
            <div style={{ fontFamily: font.display, fontSize: 26, marginBottom: 6 }}>L'étiquette</div>
            <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: color.argile, marginBottom: 12 }}>
              Bloc 3:4 · liseré 6 px
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.7)', margin: 0 }}>
              L'étiquette plantée dans le pot devient l'unité de mise en page : liseré Argile à
              gauche, identifiant en mono en haut, nom en Newsreader en bas. Cartes, vignettes,
              emails, réseaux sociaux : même bloc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
