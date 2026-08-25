import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { font } from '../../tokens';

const labelStyle = {
  display: 'block',
  fontFamily: font.mono,
  fontSize: 10,
  letterSpacing: '.12em',
  textTransform: 'uppercase' as const,
  color: 'rgba(36,28,22,.55)',
  marginBottom: 8,
};

const controlStyle = {
  width: '100%',
  fontFamily: font.body,
  fontSize: 15,
  color: '#241C16',
  background: '#fff',
  border: '1px solid rgba(36,28,22,.2)',
  borderRadius: 0,
  padding: '12px 14px',
  boxSizing: 'border-box' as const,
};

function Wrapper({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label htmlFor={htmlFor} style={labelStyle}>
        {label}
      </label>
      {children}
    </div>
  );
}

export function TextField({ label, id, ...rest }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrapper label={label} htmlFor={id!}>
      <input id={id} style={controlStyle} {...rest} />
    </Wrapper>
  );
}

export function TextAreaField({ label, id, ...rest }: { label: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Wrapper label={label} htmlFor={id!}>
      <textarea id={id} style={{ ...controlStyle, resize: 'vertical' as const }} rows={4} {...rest} />
    </Wrapper>
  );
}

export function SelectField({
  label,
  id,
  children,
  ...rest
}: { label: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Wrapper label={label} htmlFor={id!}>
      <select id={id} style={controlStyle} {...rest}>
        {children}
      </select>
    </Wrapper>
  );
}
