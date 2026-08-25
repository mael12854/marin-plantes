import { SectionHead } from '../components/SectionHead';
import { color, font, sectionStyle } from '../tokens';

const specs = [
  { name: 'Pousse', lines: ['420 ms', 'cubic-bezier(.22,.68,.2,1)', 'scaleY + opacité'] },
  { name: 'Respiration', lines: ['2 400 ms', 'ease-in-out, infini', 'opacité 1 → .15'] },
  { name: 'Balayage', lines: ['6 000 ms', 'linéaire, infini', 'caméra seulement'] },
  { name: 'Page', lines: ['240 ms', 'fondu simple', 'aucun glissement'] },
];

const bars = [
  { height: '30%', color: color.pousse, duration: '1.6s' },
  { height: '55%', color: color.pousse, duration: '1.9s' },
  { height: '80%', duration: '2.2s' },
  { height: '45%', color: color.pousse, duration: '2.6s' },
];

export function Motion({ phos }: { phos: string }) {
  return (
    <section style={sectionStyle}>
      <SectionHead>10 — Motion</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 64, alignItems: 'start' }}>
        <div>
          <h2 style={{ fontFamily: font.display, fontWeight: 300, fontSize: 52, lineHeight: 1.05, margin: '0 0 20px' }}>
            Ça pousse, ça ne saute pas
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(36,28,22,.75)', margin: '0 0 16px', maxWidth: '46ch' }}>
            Toute animation part du bas et grandit, comme une tige. Origine de transformation en
            bas (<span style={{ fontFamily: font.mono, fontSize: 14 }}>transform-origin: bottom</span>
            ), jamais de rebond, jamais d'entrée par la droite.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(36,28,22,.75)', margin: 0, maxWidth: '46ch' }}>
            Une nouvelle ligne de journal ne surgit pas : elle se déplie en 420&nbsp;ms. Rien ne
            dure moins de 200&nbsp;ms, rien ne dépasse 700&nbsp;ms sauf le balayage caméra.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 1,
            background: 'rgba(36,28,22,.14)',
            border: '1px solid rgba(36,28,22,.14)',
            fontFamily: font.mono,
            fontSize: 12,
            lineHeight: 1.9,
            color: 'rgba(36,28,22,.7)',
          }}
        >
          {specs.map((s) => (
            <div key={s.name} style={{ background: color.craie, padding: 22 }}>
              <div style={{ color: '#241C16', marginBottom: 6 }}>{s.name}</div>
              {s.lines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < s.lines.length - 1 && <br />}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 32, background: color.nuitDeTablette, padding: '28px 24px', display: 'flex', alignItems: 'flex-end', gap: 10, height: 120 }}>
        {bars.map((bar, i) => (
          <div
            key={i}
            style={{
              width: 34,
              height: bar.height,
              background: bar.color ?? phos,
              transformOrigin: 'bottom',
              animation: `grow ${bar.duration} cubic-bezier(.22,.68,.2,1) infinite alternate`,
            }}
          />
        ))}
        <div style={{ fontFamily: font.mono, fontSize: 11, color: 'rgba(242,238,227,.5)', marginLeft: 16, alignSelf: 'flex-end' }}>
          Croissance mensuelle — entrée par le bas, une barre après l'autre
        </div>
      </div>
    </section>
  );
}
