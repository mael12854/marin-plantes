import { SectionHead } from '../components/SectionHead';
import { color, font, sectionStyle } from '../tokens';

interface TonDeVoixProps {
  tu: boolean;
}

export function TonDeVoix({ tu }: TonDeVoixProps) {
  const voixTitre = tu ? 'Marin te tutoie' : 'Marin vous vouvoie';
  const exA = tu
    ? "Ton ficus a pris 4 cm ce mois-ci. Je l'ai tourné vers le sud."
    : "Votre ficus a pris 4 cm ce mois-ci. Je l'ai tourné vers le sud.";
  const exB = tu
    ? "Il fait sec cette semaine, je passe deux fois. Ne t'inquiète pas."
    : 'Il fait sec cette semaine, je passe deux fois. Ne vous inquiétez pas.';
  const exC = tu
    ? "Tu peux venir la voir samedi, le jardin est ouvert jusqu'au soir."
    : "Vous pouvez venir la voir samedi, le jardin est ouvert jusqu'au soir.";

  return (
    <section style={sectionStyle}>
      <SectionHead>06 — Ton de voix</SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 64, alignItems: 'start' }}>
        <div>
          <h2 style={{ fontFamily: font.display, fontWeight: 300, fontSize: 52, lineHeight: 1.05, margin: '0 0 20px' }}>
            {voixTitre}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(36,28,22,.75)', margin: '0 0 28px', maxWidth: '46ch' }}>
            C'est Marin qui écrit, à la première personne, au présent. Phrases courtes. Un fait,
            puis un geste. Jamais de point d'exclamation, jamais de vocabulaire de plateforme («
            utilisateur », « abonnement », « dashboard »).
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(36,28,22,.14)', border: '1px solid rgba(36,28,22,.14)' }}>
            <div style={{ background: color.craie, padding: 20 }}>
              <div style={{ fontFamily: font.mono, fontSize: 10, letterSpacing: '.12em', color: color.pousse, marginBottom: 10 }}>ON DIT</div>
              <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(36,28,22,.8)' }}>
                « J'ai arrosé »
                <br />
                « Ta plante »
                <br />
                « Passe quand tu veux »
                <br />
                « Elle a soif »
              </div>
            </div>
            <div style={{ background: color.craie, padding: 20 }}>
              <div style={{ fontFamily: font.mono, fontSize: 10, letterSpacing: '.12em', color: color.argile, marginBottom: 10 }}>ON NE DIT PAS</div>
              <div
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'rgba(36,28,22,.55)',
                  textDecoration: 'line-through',
                  textDecorationColor: 'rgba(192,106,62,.5)',
                }}
              >
                « Arrosage effectué »
                <br />
                « Votre actif végétal »
                <br />
                « Réserver un créneau »
                <br />
                « Alerte hydrique »
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: color.vertMarin, color: color.craie, padding: '32px 34px' }}>
            <div style={{ fontFamily: font.mono, fontSize: 10, letterSpacing: '.14em', opacity: 0.6, marginBottom: 14 }}>
              NOTIFICATION — CROISSANCE
            </div>
            <div style={{ fontFamily: font.display, fontStyle: 'italic', fontWeight: 300, fontSize: 26, lineHeight: 1.45 }}>{exA}</div>
          </div>
          <div style={{ background: color.craieFoncee, padding: '32px 34px' }}>
            <div style={{ fontFamily: font.mono, fontSize: 10, letterSpacing: '.14em', color: 'rgba(36,28,22,.5)', marginBottom: 14 }}>
              MÉTÉO — RASSURER
            </div>
            <div style={{ fontFamily: font.display, fontStyle: 'italic', fontWeight: 300, fontSize: 26, lineHeight: 1.45 }}>{exB}</div>
          </div>
          <div style={{ background: color.argile, color: '#FBF6EC', padding: '32px 34px' }}>
            <div style={{ fontFamily: font.mono, fontSize: 10, letterSpacing: '.14em', opacity: 0.75, marginBottom: 14 }}>
              INVITATION — VISITE
            </div>
            <div style={{ fontFamily: font.display, fontStyle: 'italic', fontWeight: 300, fontSize: 26, lineHeight: 1.45 }}>{exC}</div>
          </div>
          <div style={{ fontFamily: font.mono, fontSize: 11, lineHeight: 1.9, color: 'rgba(36,28,22,.6)', marginTop: 6 }}>
            <div>Signature ······· « Marin »</div>
            <div>Longueur max ···· 2 phrases en notification, 4 en email</div>
            <div>Chiffres ········ toujours concrets (4 cm, 41 arrosages, 18 h)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
