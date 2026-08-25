import { ImageSlot } from '../components/ImageSlot';
import { color, font, text } from '../tokens';

interface ProduitLiveProps {
  phos: string;
}

const journalRows = [
  { time: '08:12', text: 'Arrosage — 0,4 L', meta: '· Marin' },
  { time: '08:14', text: 'Terre retournée à la pelle sur 20 cm' },
  { time: '11:03', text: 'Mesure — 61 cm', delta: '+4 cm ce mois' },
  { time: '14:40', text: 'Taille — deux feuilles sèches retirées' },
];

export function ProduitLive({ phos }: ProduitLiveProps) {
  return (
    <section style={{ padding: '80px 72px', background: color.nuitDeTablette, color: color.craie }}>
      <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: phos, marginBottom: 32 }}>
        09 — Journal live &amp; vue caméra
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 56, alignItems: 'start', marginBottom: 44 }}>
        <h2 style={{ fontFamily: font.display, fontWeight: 300, fontSize: 52, lineHeight: 1.05, margin: 0 }}>
          Une tablette dans l'herbe
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: text.onNuit.body, margin: 0, maxWidth: '60ch' }}>
          Le direct, ce n'est pas une salle de contrôle : c'est une vieille tablette calée sur une
          brique dans l'herbe, qui filme un carré du jardin. Fond Nuit de tablette, mono, Phosphore
          comme seule couleur de signal — l'esthétique d'un écran fatigué, pas d'un système de
          sécurité.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 24 }}>
        {/* journal */}
        <div style={{ border: `1px solid ${text.onNuit.border}`, background: 'rgba(242,238,227,.03)' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 20px',
              borderBottom: `1px solid ${text.onNuit.borderDim}`,
              fontFamily: font.mono,
              fontSize: 11,
              letterSpacing: '.12em',
            }}
          >
            <span style={{ color: phos }}>JOURNAL — PLT-0148</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(242,238,227,.6)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: phos, animation: 'blip 2.4s ease-in-out infinite' }} />
              EN DIRECT
            </span>
          </div>
          <div style={{ padding: '8px 20px 20px', fontFamily: font.mono, fontSize: 13, lineHeight: 1.8 }}>
            {journalRows.map((row) => (
              <div
                key={row.time}
                style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 16, padding: '12px 0', borderBottom: `1px solid ${text.onNuit.hairline}` }}
              >
                <span style={{ color: phos }}>{row.time}</span>
                <span>
                  {row.text}
                  {row.meta && <span style={{ color: 'rgba(242,238,227,.45)' }}> {row.meta}</span>}
                  {row.delta && <span style={{ color: color.pousse }}> {row.delta}</span>}
                </span>
              </div>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 16, padding: '12px 0', color: 'rgba(242,238,227,.4)' }}>
              <span>demain</span>
              <span>
                Arrosage prévu{' '}
                <span style={{ border: '1px dashed rgba(242,238,227,.35)', padding: '1px 6px', marginLeft: 4 }}>PRÉVU</span>
              </span>
            </div>
          </div>
        </div>

        {/* camera */}
        <div style={{ border: `1px solid ${text.onNuit.border}`, background: 'rgba(242,238,227,.03)' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 20px',
              borderBottom: `1px solid ${text.onNuit.borderDim}`,
              fontFamily: font.mono,
              fontSize: 11,
              letterSpacing: '.12em',
            }}
          >
            <span style={{ color: phos }}>TABLETTE — CARRÉ NORD</span>
            <span style={{ color: 'rgba(242,238,227,.6)' }}>14:41:07</span>
          </div>
          <div style={{ position: 'relative', height: 300, background: '#0A130E', overflow: 'hidden' }}>
            <ImageSlot label="Image du flux caméra" color={color.craie} />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                backgroundImage:
                  'linear-gradient(rgba(147,245,162,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(147,245,162,.07) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: 2,
                background: 'linear-gradient(90deg,transparent,rgba(147,245,162,.45),transparent)',
                animation: 'scanline 6s linear infinite',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 14,
                left: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: font.mono,
                fontSize: 11,
                letterSpacing: '.14em',
                color: phos,
                pointerEvents: 'none',
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: phos, animation: 'blip 2.4s ease-in-out infinite' }} />
              REC
            </div>
            <div
              style={{
                position: 'absolute',
                top: 14,
                right: 16,
                fontFamily: font.mono,
                fontSize: 11,
                color: 'rgba(147,245,162,.75)',
                textAlign: 'right',
                lineHeight: 1.7,
                pointerEvents: 'none',
              }}
            >
              640 × 480
              <br />
              BATT 34 %
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 14,
                right: 16,
                width: 46,
                height: 46,
                border: '1px solid rgba(147,245,162,.5)',
                pointerEvents: 'none',
              }}
            />
          </div>
          <div
            style={{
              padding: '16px 20px',
              fontFamily: font.mono,
              fontSize: 11,
              lineHeight: 1.9,
              color: 'rgba(242,238,227,.55)',
              borderTop: `1px solid ${text.onNuit.borderDim}`,
            }}
          >
            <div>1 image / s, jamais de son, 640 × 480 assumé.</div>
            <div>Cadre fixe et un peu de travers : on ne redresse pas.</div>
            <div>Hors ligne : « la tablette dort, Marin la rallumera. »</div>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 44, marginTop: 44 }}>
        <div>
          <div style={{ fontFamily: font.display, fontSize: 22, marginBottom: 10 }}>Horodatage obligatoire</div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: text.onNuit.secondary, margin: 0 }}>
            Aucune ligne de journal sans heure. Le passé est en Craie, le prévu est en pointillés à
            40&nbsp;% : la promesse est visuellement plus faible que le fait.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: font.display, fontSize: 22, marginBottom: 10 }}>Un seul point qui clignote</div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: text.onNuit.secondary, margin: 0 }}>
            Le pastille « en direct » est le seul élément pulsant d'un écran, 2,4&nbsp;s par cycle.
            Deux points qui clignotent en même temps, c'est une erreur de design.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: font.display, fontSize: 22, marginBottom: 10 }}>La tablette assume</div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: text.onNuit.secondary, margin: 0 }}>
            On garde l'esthétique de l'écran fatigué : grille de pixels, REC, batterie, cadre de
            travers. C'est une vieille tablette dans l'herbe, pas un système de sécurité — et ça se
            voit, exprès.
          </p>
        </div>
      </div>
    </section>
  );
}
