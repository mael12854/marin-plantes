import { useState, type FormEvent } from 'react';
import { Button } from '../components/ui/Button';
import { SelectField, TextAreaField, TextField } from '../components/ui/Field';
import { supabase } from '../lib/supabase';
import { color, font } from '../tokens';

export function Order() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = new FormData(e.currentTarget);
    const { error } = await supabase.from('plant_requests').insert({
      full_name: form.get('full_name'),
      email: form.get('email'),
      phone: form.get('phone') || null,
      address: form.get('address') || null,
      plant_choice: form.get('plant_choice'),
      message: form.get('message') || null,
    });
    setSubmitting(false);
    if (error) {
      setError("La demande n'est pas passée. Réessaie dans un instant.");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div style={{ padding: '96px 72px', maxWidth: 640, margin: '0 auto' }}>
        <div style={{ border: '1px solid rgba(36,28,22,.14)', background: '#fff', borderLeft: `6px solid ${color.argile}`, padding: '32px 28px' }}>
          <div style={{ fontFamily: font.display, fontSize: 28, marginBottom: 12 }}>C'est noté</div>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(36,28,22,.75)', margin: '0 0 18px' }}>
            J'ai reçu ta demande. Je te réponds pour confirmer la plante et la date de plantation.
          </p>
          <div style={{ fontFamily: font.display, fontStyle: 'italic', fontSize: 16, color: 'rgba(36,28,22,.6)' }}>— Marin</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '96px 72px', maxWidth: 640, margin: '0 auto' }}>
      <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: color.argile, marginBottom: 16 }}>
        Commander
      </div>
      <h1 style={{ fontFamily: font.display, fontWeight: 300, fontSize: 44, lineHeight: 1.05, margin: '0 0 40px' }}>
        Choisis ta plante
      </h1>
      <form onSubmit={handleSubmit}>
        <TextField label="Nom" id="full_name" name="full_name" required />
        <TextField label="Email" id="email" name="email" type="email" required />
        <TextField label="Téléphone" id="phone" name="phone" type="tel" />
        <TextField label="Adresse (pour la visite)" id="address" name="address" />
        <SelectField label="Plante" id="plant_choice" name="plant_choice" required defaultValue="">
          <option value="" disabled>
            Choisis une plante
          </option>
          <option value="Monstera">Monstera</option>
          <option value="Olivier">Olivier</option>
          <option value="Ficus">Ficus</option>
          <option value="Autre">Autre — je précise dans le message</option>
        </SelectField>
        <TextAreaField label="Message (facultatif)" id="message" name="message" />
        {error && <p style={{ color: color.argile, fontSize: 14, marginBottom: 16 }}>{error}</p>}
        <Button type="submit" disabled={submitting} style={{ opacity: submitting ? 0.6 : 1 }}>
          {submitting ? 'Envoi…' : 'Envoyer la demande'}
        </Button>
      </form>
    </div>
  );
}
