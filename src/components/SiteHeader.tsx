import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { supabase } from '../lib/supabase';
import { color, font } from '../tokens';

export function SiteHeader() {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate('/');
  }

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 72px',
        borderBottom: '1px solid rgba(36,28,22,.12)',
        background: color.craie,
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: font.display,
          fontWeight: 300,
          fontSize: 22,
          color: color.vertMarin,
          border: 'none',
        }}
      >
        Marin <span style={{ color: color.argile }}>&amp;</span> Plantes
      </Link>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 28,
          fontFamily: font.mono,
          fontSize: 11,
          letterSpacing: '.1em',
          textTransform: 'uppercase',
        }}
      >
        <Link to="/commander" style={{ color: color.terre, border: 'none' }}>
          Commander
        </Link>
        {!loading && !user && (
          <Link to="/connexion" style={{ color: color.terre, border: 'none' }}>
            Connexion
          </Link>
        )}
        {!loading && user && profile?.role === 'client' && (
          <Link to="/mon-jardin" style={{ color: color.terre, border: 'none' }}>
            Mon jardin
          </Link>
        )}
        {!loading && user && profile?.role === 'marin' && (
          <Link to="/admin" style={{ color: color.terre, border: 'none' }}>
            Espace Marin
          </Link>
        )}
        {!loading && user && (
          <button
            onClick={handleLogout}
            style={{
              fontFamily: font.mono,
              fontSize: 11,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              background: 'transparent',
              border: 'none',
              color: 'rgba(36,28,22,.5)',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Déconnexion
          </button>
        )}
      </nav>
    </header>
  );
}
