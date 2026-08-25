import { color, font, text } from '../tokens';

interface CameraPanelProps {
  plot?: string | null;
  imageUrl?: string | null;
  takenAt?: string | null;
}

const ONLINE_WINDOW_HOURS = 24;

function relativeTime(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diffMs / 60000);
  if (mins < 1) return "à l'instant";
  if (mins < 60) return `il y a ${mins} min`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `il y a ${hours} h`;
  const days = Math.round(hours / 24);
  return `il y a ${days} j`;
}

export function CameraPanel({ plot, imageUrl, takenAt }: CameraPanelProps) {
  const online = !!takenAt && Date.now() - new Date(takenAt).getTime() < ONLINE_WINDOW_HOURS * 3600 * 1000;
  // Cache-bust: a live broadcast reuses the same file path, so the URL alone
  // won't change between frames — force a refetch keyed on the timestamp.
  const displayUrl = imageUrl && takenAt ? `${imageUrl}?t=${encodeURIComponent(takenAt)}` : imageUrl;

  return (
    <div style={{ border: `1px solid ${text.onNuit.border}`, background: color.nuitDeTablette }}>
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
        <span style={{ color: '#93F5A2' }}>TABLETTE{plot ? ` — ${plot.toUpperCase()}` : ''}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(242,238,227,.6)' }}>
          {online && (
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#93F5A2', animation: 'blip 2.4s ease-in-out infinite' }} />
          )}
          {online ? 'EN LIGNE' : 'HORS LIGNE'}
        </span>
      </div>
      <div style={{ position: 'relative', height: 300, background: '#0A130E', overflow: 'hidden' }}>
        {displayUrl ? (
          <img src={displayUrl} alt="Dernière photo du carré" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: font.mono,
              fontSize: 11,
              color: 'rgba(242,238,227,.35)',
              textAlign: 'center',
              padding: 24,
            }}
          >
            la tablette dort, Marin la rallumera.
          </div>
        )}
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
        {online && (
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
        )}
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
        {takenAt ? (
          <div>Dernière photo — {relativeTime(takenAt)}</div>
        ) : (
          <div>Aucune photo pour l'instant.</div>
        )}
        {!online && takenAt && <div>La tablette dort, Marin la rallumera.</div>}
      </div>
    </div>
  );
}
