import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import type { Role } from '../lib/types';
import { color, font } from '../tokens';

export function ProtectedRoute({ role, children }: { role?: Role; children: ReactNode }) {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ padding: 96, textAlign: 'center', fontFamily: font.mono, fontSize: 12, color: 'rgba(36,28,22,.5)' }}>
        Chargement…
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/connexion" replace />;
  }

  if (role && profile?.role !== role) {
    return (
      <div style={{ padding: 96, textAlign: 'center' }}>
        <p style={{ fontFamily: font.display, fontSize: 26, color: color.terre }}>Accès non autorisé.</p>
      </div>
    );
  }

  return <>{children}</>;
}
