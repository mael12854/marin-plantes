import type { CSSProperties } from 'react';
import { font } from '../tokens';

interface ImageSlotProps {
  label: string;
  height?: number | string;
  color?: string;
  style?: CSSProperties;
}

/**
 * Production placeholder for a real photo slot.
 * The design handoff's `image-slot.js` (drag-and-drop, prototype-only) is
 * intentionally not ported — see design_handoff_marin_brand/README.md.
 * All photography is Marin's own garden shots and still needs to be shot.
 */
export function ImageSlot({ label, height = '100%', color = '#241C16', style }: ImageSlotProps) {
  return (
    <div
      style={{
        position: 'relative',
        height,
        width: '100%',
        border: `1.5px dashed ${color}55`,
        background: 'rgba(127,127,127,.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 12,
        color,
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: font.mono,
          fontSize: 11,
          letterSpacing: '.06em',
          opacity: 0.55,
          maxWidth: '32ch',
          lineHeight: 1.6,
        }}
      >
        {label}
      </span>
    </div>
  );
}
