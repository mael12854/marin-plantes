import { SectionHead } from '../components/SectionHead';
import { color, font, sectionStyle } from '../tokens';

export function Emails() {
  return (
    <section style={sectionStyle}>
      <SectionHead>11 — Emails &amp; notifications</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, alignItems: 'start' }}>
        <div style={{ border: '1px solid rgba(36,28,22,.14)', background: '#fff' }}>
          <div style={{ borderLeft: `6px solid ${color.argile}`, padding: '24px 22px' }}>
            <div style={{ fontFamily: font.mono, fontSize: 10, letterSpacing: '.12em', color: 'rgba(36,28,22,.5)', marginBottom: 16 }}>
              LUNDI 08:20 · PLT-0148
            </div>
            <div style={{ fontFamily: font.display, fontSize: 28, lineHeight: 1.2, marginBottom: 12 }}>Elle a bu ce matin</div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.72)', margin: '0 0 18px' }}>
              0,4 L, et j'ai tourné le pot vers l'est. Elle fait 61 cm, quatre de plus que le mois
              dernier.
            </p>
            <div style={{ fontFamily: font.display, fontStyle: 'italic', fontSize: 16, color: 'rgba(36,28,22,.6)' }}>— Marin</div>
          </div>
        </div>
        <div style={{ border: '1px solid rgba(36,28,22,.14)', background: color.vertMarin, color: color.craie }}>
          <div style={{ padding: '24px 22px' }}>
            <div style={{ fontFamily: font.mono, fontSize: 10, letterSpacing: '.12em', opacity: 0.6, marginBottom: 16 }}>
              INVITATION — VISITE
            </div>
            <div style={{ fontFamily: font.display, fontSize: 28, lineHeight: 1.2, marginBottom: 12 }}>Samedi, si tu veux</div>
            <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.78, margin: '0 0 20px' }}>
              Le jardin est ouvert toute la journée. Ta plante est dans le carré nord, près du
              pommier. Je serai là, avec la pelle.
            </p>
            <div style={{ display: 'inline-block', border: '1px solid rgba(242,238,227,.4)', padding: '10px 18px', fontFamily: font.mono, fontSize: 11, letterSpacing: '.12em' }}>
              RÉSERVER UNE HEURE
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ background: color.craieFoncee, padding: '16px 18px', fontSize: 14, lineHeight: 1.6 }}>
            <span style={{ fontFamily: font.mono, fontSize: 11, color: 'rgba(36,28,22,.5)', display: 'block', marginBottom: 6 }}>
              PUSH · 1 LIGNE
            </span>
            Marin a taillé ton monstera.
          </div>
          <div style={{ background: color.craieFoncee, padding: '16px 18px', fontSize: 14, lineHeight: 1.6 }}>
            <span style={{ fontFamily: font.mono, fontSize: 11, color: 'rgba(36,28,22,.5)', display: 'block', marginBottom: 6 }}>
              PUSH · 1 LIGNE
            </span>
            +4 cm ce mois. Regarde la caméra.
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.7)' }}>
            Rythme maximal : un email par semaine, un push par jour, jamais avant 8&nbsp;h ni après
            20&nbsp;h. Objet en minuscules, sans emoji, sans urgence. Aucune notification n'annonce
            une mauvaise nouvelle sans dire ce que Marin a déjà fait pour la régler.
          </div>
        </div>
      </div>
    </section>
  );
}
