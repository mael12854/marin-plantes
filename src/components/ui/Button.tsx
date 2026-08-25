import type { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { color, font } from '../../tokens';

type Variant = 'solid' | 'outline' | 'outline-light';

const base = {
  fontFamily: font.mono,
  fontSize: 11,
  letterSpacing: '.12em',
  textTransform: 'uppercase' as const,
  padding: '14px 22px',
  display: 'inline-block',
  cursor: 'pointer',
  textAlign: 'center' as const,
};

const variants: Record<Variant, React.CSSProperties> = {
  solid: { background: color.vertMarin, color: color.craie, border: `1px solid ${color.vertMarin}` },
  outline: { background: 'transparent', color: color.terre, border: '1px solid rgba(36,28,22,.3)' },
  'outline-light': { background: 'transparent', color: color.craie, border: '1px solid rgba(242,238,227,.4)' },
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  to?: string;
}

export function Button({ variant = 'solid', to, style, children, ...rest }: ButtonProps) {
  const combined = { ...base, ...variants[variant], ...style };
  if (to) {
    return (
      <Link to={to} style={combined}>
        {children}
      </Link>
    );
  }
  return (
    <button style={{ ...combined, fontFamily: base.fontFamily }} {...rest}>
      {children}
    </button>
  );
}
