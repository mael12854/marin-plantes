import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { supabase } from '../../lib/supabase';
import type { Plant, PlantRequest } from '../../lib/types';
import { color, font } from '../../tokens';

export function AdminDashboard() {
  const [requests, setRequests] = useState<PlantRequest[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function load() {
    const [requestsRes, plantsRes] = await Promise.all([
      supabase.from('plant_requests').select('*').order('created_at', { ascending: false }),
      supabase.from('plants').select('*').order('created_at', { ascending: false }),
    ]);
    setRequests((requestsRes.data as PlantRequest[]) ?? []);
    setPlants((plantsRes.data as Plant[]) ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function confirmRequest(r: PlantRequest) {
    setBusyId(r.id);
    await supabase.from('plants').insert({
      species: r.plant_choice,
      request_id: r.id,
      planted_date: new Date().toISOString().slice(0, 10),
    });
    await supabase.from('plant_requests').update({ status: 'confirmed' }).eq('id', r.id);
    setBusyId(null);
    load();
  }

  async function declineRequest(r: PlantRequest) {
    setBusyId(r.id);
    await supabase.from('plant_requests').update({ status: 'declined' }).eq('id', r.id);
    setBusyId(null);
    load();
  }

  if (loading) {
    return <div style={{ padding: 96, textAlign: 'center', fontFamily: font.mono, fontSize: 12, color: 'rgba(36,28,22,.5)' }}>Chargement…</div>;
  }

  const pending = requests.filter((r) => r.status === 'pending');

  return (
    <div className="mp-section" style={{ padding: '72px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 40, flexWrap: 'wrap' }}>
        <h1 style={{ fontFamily: font.display, fontWeight: 300, fontSize: 40, margin: 0 }}>Espace Marin</h1>
        <Button variant="outline" to="/admin/camera">
          Caméra du jardin
        </Button>
      </div>

      <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: color.argile, marginBottom: 20 }}>
        Demandes en attente ({pending.length})
      </div>
      {pending.length === 0 && <p style={{ fontSize: 14, color: 'rgba(36,28,22,.55)', marginBottom: 48 }}>Aucune demande en attente.</p>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 56 }}>
        {pending.map((r) => (
          <div key={r.id} style={{ border: '1px solid rgba(36,28,22,.14)', background: '#fff', padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: font.display, fontSize: 18 }}>{r.plant_choice} — {r.full_name}</div>
              <div style={{ fontSize: 13, color: 'rgba(36,28,22,.6)' }}>
                {r.email} {r.phone ? `· ${r.phone}` : ''} {r.address ? `· ${r.address}` : ''}
              </div>
              {r.message && <div style={{ fontSize: 13, color: 'rgba(36,28,22,.55)', marginTop: 4 }}>« {r.message} »</div>}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button variant="outline" disabled={busyId === r.id} onClick={() => declineRequest(r)}>
                Refuser
              </Button>
              <Button disabled={busyId === r.id} onClick={() => confirmRequest(r)}>
                Confirmer
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: color.argile, marginBottom: 20 }}>
        Plantes actives ({plants.length})
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
        {plants.map((p) => (
          <Link
            key={p.id}
            to={`/admin/plante/${p.id}`}
            style={{
              border: 'none',
              width: '100%',
              aspectRatio: '3/4',
              background: color.craieFoncee,
              borderLeft: `6px solid ${color.argile}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '16px 14px',
            }}
          >
            <div style={{ fontFamily: font.mono, fontSize: 10, letterSpacing: '.1em', color: 'rgba(36,28,22,.6)' }}>{p.code}</div>
            <div style={{ fontFamily: font.display, fontSize: 20, lineHeight: 1.2, color: '#241C16' }}>{p.species}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
