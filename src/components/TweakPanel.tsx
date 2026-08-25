import { color, font, monogrammeOptions, phosphoreOptions } from '../tokens';

interface TweakPanelProps {
  tu: boolean;
  onTuChange: (tu: boolean) => void;
  phos: string;
  onPhosChange: (phos: string) => void;
  mono: string;
  onMonoChange: (mono: string) => void;
}

const labelStyle = {
  fontFamily: font.mono,
  fontSize: 10,
  letterSpacing: '.1em',
  textTransform: 'uppercase' as const,
  color: 'rgba(242,238,227,.55)',
};

/**
 * Dev-only tweak panel for the three props the design handoff exposes as
 * "exploration" toggles (tutoiement, phosphore, monogramme) — not a
 * product feature. See design_handoff_marin_brand/README.md.
 */
export function TweakPanel({ tu, onTuChange, phos, onPhosChange, mono, onMonoChange }: TweakPanelProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 148,
        right: 16,
        zIndex: 50,
        background: 'rgba(14,26,19,.92)',
        border: '1px solid rgba(147,245,162,.25)',
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        backdropFilter: 'blur(4px)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={labelStyle}>Ton</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {[
            { key: true, label: 'Tu' },
            { key: false, label: 'Vous' },
          ].map((opt) => (
            <button
              key={String(opt.key)}
              onClick={() => onTuChange(opt.key)}
              style={{
                fontFamily: font.mono,
                fontSize: 11,
                padding: '4px 10px',
                cursor: 'pointer',
                background: tu === opt.key ? phos : 'transparent',
                color: tu === opt.key ? color.nuitDeTablette : color.craie,
                border: `1px solid ${tu === opt.key ? phos : 'rgba(242,238,227,.3)'}`,
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={labelStyle}>Phosphore</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {phosphoreOptions.map((c) => (
            <button
              key={c}
              onClick={() => onPhosChange(c)}
              aria-label={c}
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: c,
                cursor: 'pointer',
                border: c === phos ? '2px solid #fff' : '1px solid rgba(255,255,255,.3)',
              }}
            />
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={labelStyle}>Monogramme</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {monogrammeOptions.map((m) => (
            <button
              key={m}
              onClick={() => onMonoChange(m)}
              style={{
                fontFamily: font.display,
                fontSize: 13,
                padding: '4px 10px',
                cursor: 'pointer',
                background: mono === m ? phos : 'transparent',
                color: mono === m ? color.nuitDeTablette : color.craie,
                border: `1px solid ${mono === m ? phos : 'rgba(242,238,227,.3)'}`,
              }}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
