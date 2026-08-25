import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CameraPanel } from '../../components/CameraPanel';
import { Button } from '../../components/ui/Button';
import { SelectField, TextField } from '../../components/ui/Field';
import { supabase } from '../../lib/supabase';
import type { JournalEntry, Plant } from '../../lib/types';
import { color, font, text } from '../../tokens';

const actionTypes = ['Arrosage', 'Taille', 'Mesure', 'Terre retournée', 'Autre'];

export function AdminPlant() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [plant, setPlant] = useState<Plant | null>(null);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function load() {
    if (!id) return;
    const [plantRes, entriesRes] = await Promise.all([
      supabase.from('plants').select('*').eq('id', id).maybeSingle(),
      supabase.from('journal_entries').select('*').eq('plant_id', id).order('occurred_at', { ascending: false }),
    ]);
    setPlant((plantRes.data as Plant) ?? null);
    setEntries((entriesRes.data as JournalEntry[]) ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function handleAddEntry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!id) return;
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const planned = form.get('planned') === 'on';
    await supabase.from('journal_entries').insert({
      plant_id: id,
      action_type: form.get('action_type'),
      description: form.get('description'),
      delta: form.get('delta') || null,
      planned,
      occurred_at: planned && form.get('occurred_at') ? form.get('occurred_at') : new Date().toISOString(),
    });
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    load();
  }

  async function handlePhotoChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !id) return;
    setUploadingPhoto(true);
    setPhotoError(null);
    const path = `${id}/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from('camera-frames').upload(path, file, { upsert: false });
    if (uploadError) {
      setUploadingPhoto(false);
      setPhotoError("L'envoi de la photo n'a pas marché, réessaie.");
      return;
    }
    const { data: urlData } = supabase.storage.from('camera-frames').getPublicUrl(path);
    const { error: updateError } = await supabase
      .from('plants')
      .update({ camera_frame_url: urlData.publicUrl, camera_frame_taken_at: new Date().toISOString() })
      .eq('id', id);
    setUploadingPhoto(false);
    if (updateError) {
      setPhotoError("La photo est envoyée mais la plante n'a pas pu être mise à jour, réessaie.");
      return;
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
    load();
  }

  async function handleDelete() {
    if (!id) return;
    const ok = window.confirm(
      `Supprimer ${plant?.species ?? 'cette plante'} (${plant?.code}) ? Le journal et les demandes de visite associés seront supprimés aussi. Impossible à annuler.`
    );
    if (!ok) return;
    setDeleting(true);
    const { error } = await supabase.from('plants').delete().eq('id', id);
    setDeleting(false);
    if (error) {
      window.alert("La suppression n'a pas marché, réessaie.");
      return;
    }
    navigate('/admin');
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 10 }}>
        <div style={{ fontFamily: font.mono, fontSize: 12, color: color.argile, letterSpacing: '.1em' }}>{plant.code}</div>
        <Button variant="outline" onClick={handleDelete} disabled={deleting} style={{ borderColor: color.argile, color: color.argile, opacity: deleting ? 0.6 : 1 }}>
          {deleting ? 'Suppression…' : 'Supprimer la plante'}
        </Button>
      </div>
      <h1 style={{ fontFamily: font.display, fontWeight: 300, fontSize: 40, lineHeight: 1.05, margin: '0 0 32px' }}>{plant.species}</h1>

      <div style={{ marginBottom: 40 }}>
        <CameraPanel plot={plant.plot} imageUrl={plant.camera_frame_url} takenAt={plant.camera_frame_taken_at} />
        <div style={{ marginTop: 12 }}>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            id="camera_photo"
            onChange={handlePhotoChange}
            style={{ display: 'none' }}
          />
          <Button variant="outline" disabled={uploadingPhoto} onClick={() => fileInputRef.current?.click()} style={{ opacity: uploadingPhoto ? 0.6 : 1 }}>
            {uploadingPhoto ? 'Envoi…' : 'Prendre / envoyer une photo'}
          </Button>
          {photoError && <p style={{ color: color.argile, fontSize: 13, marginTop: 8 }}>{photoError}</p>}
        </div>
      </div>

      <form
        onSubmit={handleAddEntry}
        className="mp-grid-stack"
        style={{ border: '1px solid rgba(36,28,22,.14)', background: '#fff', padding: '24px 22px', marginBottom: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}
      >
        <SelectField label="Action" id="action_type" name="action_type" defaultValue={actionTypes[0]}>
          {actionTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </SelectField>
        <TextField label="Delta (facultatif, ex. +4 cm)" id="delta" name="delta" />
        <div style={{ gridColumn: '1 / -1' }}>
          <TextField label="Description" id="description" name="description" required placeholder="Arrosage — 0,4 L" />
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: font.mono, fontSize: 11, marginBottom: 20 }}>
          <input type="checkbox" name="planned" /> Prévu (pas encore fait)
        </label>
        <div style={{ gridColumn: '1 / -1' }}>
          <Button type="submit" disabled={submitting} style={{ opacity: submitting ? 0.6 : 1 }}>
            {submitting ? 'Ajout…' : "Ajouter au journal"}
          </Button>
        </div>
      </form>

      <div style={{ border: `1px solid ${text.onNuit.border}`, background: color.nuitDeTablette }}>
        <div style={{ padding: '16px 20px', borderBottom: `1px solid ${text.onNuit.borderDim}`, fontFamily: font.mono, fontSize: 11, letterSpacing: '.12em', color: '#93F5A2' }}>
          JOURNAL — {plant.code}
        </div>
        <div style={{ padding: '8px 20px 20px', fontFamily: font.mono, fontSize: 13, lineHeight: 1.8, color: color.craie }}>
          {entries.length === 0 && <div style={{ padding: '20px 0', color: 'rgba(242,238,227,.5)' }}>Aucune entrée.</div>}
          {entries.map((entry) => (
            <div
              key={entry.id}
              style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 16, padding: '12px 0', borderBottom: `1px solid ${text.onNuit.hairline}`, opacity: entry.planned ? 0.4 : 1 }}
            >
              <span style={{ color: '#93F5A2' }}>
                {new Date(entry.occurred_at).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })}{' '}
                {new Date(entry.occurred_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
              </span>
              <span>
                {entry.description}
                {entry.delta && <span style={{ color: color.pousse }}> {entry.delta}</span>}
                {entry.planned && <span style={{ border: '1px dashed rgba(242,238,227,.35)', padding: '1px 6px', marginLeft: 8 }}>PRÉVU</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
