import { useEffect, useState, type FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { TextAreaField, TextField } from '../components/ui/Field';
import { useAuth } from '../lib/AuthContext';
import { supabase } from '../lib/supabase';
import type { JournalEntry, Plant } from '../lib/types';
import { color, font, text } from '../tokens';

export function PlantDetail() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [plant, setPlant] = useState<Plant | null>(null);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [visitOpen, setVisitOpen] = useState(false);
  const [visitSent, setVisitSent] = useState(false);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;

    async function load() {
      const [plantRes, entriesRes] = await Promise.all([
        supabase.from('plants').select('*').eq('id', id).maybeSingle(),
        supabase.from('journal_entries').select('*').eq('plant_id', id).order('occurred_at', { ascending: false }),
      ]);
      if (cancelled) return;
      setPlant((plantRes.data as Plant) ?? null);
      setEntries((entriesRes.data as JournalEntry[]) ?? []);
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  async function handleVisitSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!id || !user) return;
    const form = new FormData(e.currentTarget);
    await supabase.from('visit_requests').insert({
      plant_id: id,
      requested_by: user.id,
      preferred_date: form.get('preferred_date') || null,
      message: form.get('message') || null,
    });
    setVisitSent(true);
  }

  if (loading) {
    return <div style={{ padding: 96, textAlign: 'center', fontFamily: font.mono, fontSize: 12, color: 'rgba(36,28,22,.5)' }}>Chargement…</div>;
  }

  if (!plant) {
    return (
      <div style={{ padding: 96, textAlign: 'center' }}>
        <p style={{ fontFamily: font.display, fontSize: 26 }}>Plante introuvable.</p>
      </div>
    );
  }

  return (
    <div className="mp-section" style={{ padding: '72px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ fontFamily: font.mono, fontSize: 12, color: color.argile, letterSpacing: '.1em', marginBottom: 10 }}>
        {plant.code}
        {plant.plot ? ` · ${plant.plot.toUpperCase()}` : ''}
      </div>
      <h1 style={{ fontFamily: font.display, fontWeight: 300, fontSize: 44, lineHeight: 1.05, margin: '0 0 40px' }}>{plant.species}</h1>

      <div style={{ border: `1px solid ${text.onNuit.border}`, background: color.nuitDeTablette, marginBottom: 32 }}>
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
          <span style={{ color: '#93F5A2' }}>JOURNAL — {plant.code}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(242,238,227,.6)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#93F5A2', animation: 'blip 2.4s ease-in-out infinite' }} />
            EN DIRECT
          </span>
        </div>
        <div style={{ padding: '8px 20px 20px', fontFamily: font.mono, fontSize: 13, lineHeight: 1.8, color: color.craie }}>
          {entries.length === 0 && (
            <div style={{ padding: '20px 0', color: 'rgba(242,238,227,.5)' }}>Rien pour l'instant. Marin passe bientôt.</div>
          )}
          {entries.map((entry) => (
            <div
              key={entry.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '96px 1fr',
                gap: 16,
                padding: '12px 0',
                borderBottom: `1px solid ${text.onNuit.hairline}`,
                opacity: entry.planned ? 0.4 : 1,
              }}
            >
              <span style={{ color: '#93F5A2' }}>
                {new Date(entry.occurred_at).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })}{' '}
                {new Date(entry.occurred_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
              </span>
              <span>
                {entry.description}
                {entry.delta && <span style={{ color: color.pousse }}> {entry.delta}</span>}
                {entry.planned && (
                  <span style={{ border: '1px dashed rgba(242,238,227,.35)', padding: '1px 6px', marginLeft: 8 }}>PRÉVU</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      {!visitSent ? (
        !visitOpen ? (
          <Button variant="outline" onClick={() => setVisitOpen(true)}>
            Demander une visite
          </Button>
        ) : (
          <form onSubmit={handleVisitSubmit} style={{ maxWidth: 420 }}>
            <TextField label="Date souhaitée" id="preferred_date" name="preferred_date" type="date" />
            <TextAreaField label="Message (facultatif)" id="message" name="message" />
            <Button type="submit">Envoyer la demande</Button>
          </form>
        )
      ) : (
        <p style={{ fontSize: 14, color: 'rgba(36,28,22,.65)' }}>Demande envoyée. Marin te répond bientôt.</p>
      )}
    </div>
  );
}
