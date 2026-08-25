import { SectionHead } from '../components/SectionHead';
import { color, font, sectionStyle } from '../tokens';

export function Logo({ mono }: { mono: string }) {
  return (
    <section style={sectionStyle}>
      <SectionHead>02 — Logo &amp; variantes</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <div
            style={{
              border: '1px solid rgba(36,28,22,.14)',
              background: '#fff',
              padding: '72px 56px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div
              style={{
                fontFamily: font.display,
                fontWeight: 300,
                fontSize: 58,
                lineHeight: 1,
                letterSpacing: '-.015em',
                color: color.vertMarin,
              }}
            >
              Marin <span style={{ color: color.argile }}>&amp;</span> Plantes
            </div>
            <div
              style={{
                fontFamily: font.mono,
                fontSize: 11,
                letterSpacing: '.3em',
                textTransform: 'uppercase',
                color: 'rgba(36,28,22,.5)',
                paddingLeft: 3,
              }}
            >
              Jardinier — depuis 2024
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 16 }}>
            <div
              style={{
                border: '1px solid rgba(36,28,22,.14)',
                background: color.vertMarin,
                height: 150,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontFamily: font.display, fontWeight: 300, fontSize: 26, color: color.craie }}>
                Marin <span style={{ color: color.argile }}>&amp;</span> Plantes
              </div>
            </div>
            <div
              style={{
                border: '1px solid rgba(36,28,22,.14)',
                background: color.craie,
                height: 150,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: '50%',
                  border: `1px solid ${color.vertMarin}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: font.display,
                  fontSize: 26,
                  color: color.vertMarin,
                }}
              >
                {mono}
              </div>
            </div>
            <div
              style={{
                border: '1px solid rgba(36,28,22,.14)',
                background: color.argile,
                height: 150,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontFamily: font.display, fontWeight: 300, fontSize: 44, color: '#FBF6EC' }}>&amp;</div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 24,
              marginTop: 14,
              fontFamily: font.mono,
              fontSize: 11,
              color: 'rgba(36,28,22,.5)',
            }}
          >
            <span>Wordmark inversé — fond vert</span>
            <span>Monogramme — favicon, tampon</span>
            <span>Esperluette — sceau, étiquette</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <div style={{ fontFamily: font.display, fontSize: 22, marginBottom: 10 }}>Construction</div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.7)', margin: 0 }}>
              Le wordmark est composé en Newsreader Light, interlettrage −1,5&nbsp;%. L'esperluette
              est toujours en Argile : c'est le seul point de couleur chaude du logo, et il
              signifie la relation entre le jardinier et la plante.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: font.display, fontSize: 22, marginBottom: 10 }}>Zone de respect</div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.7)', margin: 0 }}>
              Marge minimale égale à la hauteur du « M » sur les quatre côtés. Taille minimale :
              96&nbsp;px de large à l'écran, 22&nbsp;mm en impression. Sous cette taille, utiliser
              le monogramme.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: font.display, fontSize: 22, marginBottom: 10 }}>Interdits</div>
            <ul style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(36,28,22,.7)', margin: 0, paddingLeft: 18, listStyle: 'disc' }}>
              <li>Pas de feuille, pousse ou arrosoir ajouté au wordmark.</li>
              <li>Pas de gras, d'italique ni de contour.</li>
              <li>Pas de logo posé sur une photo sans plaque de fond.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
