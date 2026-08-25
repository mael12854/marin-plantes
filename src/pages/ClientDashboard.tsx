import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { supabase } from '../lib/supabase';
import type { Plant, PlantRequest } from '../lib/types';
import { color, font } from '../tokens';

export function ClientDashboard() {
  const { user } = useAuth();
  const [plants, setPlants] = useState<Plant[]>([]);
  const [pendingRequests, setPendingRequests] = useState<PlantRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    let cancelled = false;

    async function load() {
      const [plantsRes, requestsRes] = await Promise.all([
        supabase.from('plants').select('*').order('created_at', { ascending: false }),
        supabase.from('plant_requests').select('*').eq('email', user!.email).order('created_at', { ascending: false }),
      ]);
      if (cancelled) return;
      setPlants((plantsRes.data as Plant[]) ?? []);
      setPendingRequests(((requestsRes.data as PlantRequest[]) ?? []).filter((r) => r.status === 'pending'));
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  if (loading) {
    return <div style={{ padding: 96, textAlign: 'center', fontFamily: font.mono, fontSize: 12, color: 'rgba(36,28,22,.5)' }}>Chargement…</div>;
  }

  return (
    <div style={{ padding: '72px', maxWidth: 1100, margin: '0 auto' }}>
      <h1 style={{ fontFamily: font.display, fontWeight: 300, fontSize: 40, margin: '0 0 40px' }}>Mon jardin</h1>

      {plants.length === 0 && pendingRequests.length === 0 && (
        <p style={{ fontSize: 15, color: 'rgba(36,28,22,.65)' }}>
          Tu n'as pas encore de plante. <Link to="/commander">Commande la première.</Link>
        </p>
      )}

      {pendingRequests.map((r) => (
        <div key={r.id} style={{ background: color.craieFoncee, padding: '20px 24px', marginBottom: 16, maxWidth: 480 }}>
          <div style={{ fontFamily: font.mono, fontSize: 10, letterSpacing: '.1em', color: 'rgba(36,28,22,.5)', marginBottom: 6, textTransform: 'uppercase' }}>
            Demande en cours
          </div>
          <div style={{ fontSize: 14, color: 'rgba(36,28,22,.75)' }}>
            {r.plant_choice} — Marin va confirmer la plantation.
          </div>
        </div>
      ))}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
        {plants.map((p) => (
          <Link
            key={p.id}
            to={`/plante/${p.id}`}
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
