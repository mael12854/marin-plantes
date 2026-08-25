// Marin & Plantes — design tokens.
// Source of truth: design_handoff_marin_brand/README.md (brand guidelines handoff).

import type { CSSProperties } from 'react';

export const color = {
  vertMarin: '#1E3A2B',
  craie: '#F2EEE3',
  craieClaire: '#F7F4EA',
  craieFoncee: '#E4DDCB',
  argile: '#C06A3E',
  terre: '#241C16',
  pousse: '#6B8F5E',
  nuitDeTablette: '#0E1A13',
  white: '#FFFFFF',
} as const;

export const defaultPhosphore = '#93F5A2';
export const phosphoreOptions = ['#93F5A2', '#C7F06A', '#7ED9F5', '#F5C56A'] as const;
export const monogrammeOptions = ['M&P', 'M', '&'] as const;

export const text = {
  onCraie: {
    body: 'rgba(36,28,22,.75)',
    secondary: 'rgba(36,28,22,.7)',
    meta: 'rgba(36,28,22,.5)',
    hairline: 'rgba(36,28,22,.12)',
    border: 'rgba(36,28,22,.14)',
  },
  onNuit: {
    body: 'rgba(242,238,227,.72)',
    secondary: 'rgba(242,238,227,.65)',
    meta: 'rgba(242,238,227,.55)',
    hairline: 'rgba(242,238,227,.08)',
    border: 'rgba(147,245,162,.25)',
    borderDim: 'rgba(147,245,162,.18)',
  },
} as const;

export const font = {
  display: "Newsreader, serif",
  body: "Archivo, sans-serif",
  mono: "'IBM Plex Mono', monospace",
} as const;

export const sectionHeadStyle: CSSProperties = {
  fontFamily: font.mono,
  fontSize: 11,
  letterSpacing: '.16em',
  textTransform: 'uppercase',
  color: color.argile,
  marginBottom: 32,
};

export const sectionStyle: CSSProperties = {
  padding: '80px 72px',
  borderBottom: `1px solid ${text.onCraie.hairline}`,
};
