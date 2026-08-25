import { createClient } from '@supabase/supabase-js';

// Fallback to the marin+plantes project's public URL and anon key so the
// app still works if VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY aren't set on
// the host (e.g. Vercel env vars not configured). The anon key is meant to
// be public — access is enforced by row-level security, not by hiding it.
const FALLBACK_URL = 'https://tipqbafkybljcwjpkfjh.supabase.co';
const FALLBACK_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpcHFiYWZreWJsamN3anBrZmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2NjI0NzcsImV4cCI6MjEwMzIzODQ3N30.47vjAZXifp3OOfigJ4r_-k6pnCuQPmd4ceKcJkn-PeA';

const url = (import.meta.env.VITE_SUPABASE_URL as string) || FALLBACK_URL;
const anonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || FALLBACK_ANON_KEY;

export const supabase = createClient(url, anonKey);
