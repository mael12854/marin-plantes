import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { TextField } from '../components/ui/Field';
import { useAuth } from '../lib/AuthContext';
import { supabase } from '../lib/supabase';
import { color, font } from '../tokens';

export function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { profile } = useAuth();

  useEffect(() => {
    if (profile) {
      navigate(profile.role === 'marin' ? '/admin' : '/mon-jardin', { replace: true });
    }
  }, [profile, navigate]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = new FormData(e.currentTarget);
    const email = String(form.get('email'));
    const password = String(form.get('password'));

    if (mode === 'signup') {
      const fullName = String(form.get('full_name') || '');
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } },
      });
      setSubmitting(false);
      if (error) {
        setError(error.message);
        return;
      }
      navigate('/mon-jardin');
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (error) {
      setError(error.message);
      return;
    }
    navigate('/');
  }

  return (
    <div style={{ padding: '96px 72px', maxWidth: 480, margin: '0 auto' }}>
      <h1 style={{ fontFamily: font.display, fontWeight: 300, fontSize: 40, lineHeight: 1.05, margin: '0 0 8px' }}>
        {mode === 'login' ? 'Connexion' : 'Créer un compte'}
      </h1>
      <p style={{ fontSize: 14, color: 'rgba(36,28,22,.6)', margin: '0 0 32px' }}>
        {mode === 'login' ? (
          <>
            Pas encore de compte ?{' '}
            <button type="button" onClick={() => setMode('signup')} style={{ background: 'none', border: 'none', padding: 0, color: color.vertMarin, cursor: 'pointer', fontSize: 14, textDecoration: 'underline' }}>
              Crée-en un
            </button>
          </>
        ) : (
          <>
            Déjà un compte ?{' '}
            <button type="button" onClick={() => setMode('login')} style={{ background: 'none', border: 'none', padding: 0, color: color.vertMarin, cursor: 'pointer', fontSize: 14, textDecoration: 'underline' }}>
              Connecte-toi
            </button>
          </>
        )}
      </p>
      <form onSubmit={handleSubmit}>
        {mode === 'signup' && <TextField label="Nom" id="full_name" name="full_name" required />}
        <TextField label="Email" id="email" name="email" type="email" required />
        <TextField label="Mot de passe" id="password" name="password" type="password" required minLength={6} />
        {error && <p style={{ color: color.argile, fontSize: 14, marginBottom: 16 }}>{error}</p>}
        <Button type="submit" disabled={submitting} style={{ opacity: submitting ? 0.6 : 1 }}>
          {submitting ? 'Un instant…' : mode === 'login' ? 'Se connecter' : 'Créer mon compte'}
        </Button>
      </form>
    </div>
  );
}
