import { sectionHeadStyle } from '../tokens';

export function SectionHead({ children, color }: { children: string; color?: string }) {
  return <div style={{ ...sectionHeadStyle, ...(color ? { color } : {}) }}>{children}</div>;
}
