import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import type { CameraState } from './types';

const POLL_MS = 15000;

/** The garden has one shared camera feed — same image for every viewer, on every plant page. */
export function useCameraState() {
  const [state, setState] = useState<CameraState | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const { data } = await supabase.from('camera_state').select('*').eq('id', true).maybeSingle();
      if (!cancelled) setState((data as CameraState) ?? null);
    }

    load();
    const interval = setInterval(load, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  async function refetch() {
    const { data } = await supabase.from('camera_state').select('*').eq('id', true).maybeSingle();
    setState((data as CameraState) ?? null);
  }

  return { camera: state, refetch };
}
