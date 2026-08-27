import { useEffect, useRef, useState } from 'react';
import { supabase } from '../lib/supabase';
import { color, font } from '../tokens';
import { Button } from './ui/Button';

const CAPTURE_INTERVAL_MS = 20000;

interface LiveBroadcastProps {
  onFrameUploaded: () => void;
}

const CAMERA_PATH = 'garden/latest.jpg';

function captureFrame(video: HTMLVideoElement): Promise<Blob | null> {
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) return Promise.resolve(null);
  ctx.drawImage(video, 0, 0);
  return new Promise((resolve) => canvas.toBlob((b) => resolve(b), 'image/jpeg', 0.8));
}

export function LiveBroadcast({ onFrameUploaded }: LiveBroadcastProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [live, setLive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSent, setLastSent] = useState<Date | null>(null);

  async function uploadFrame() {
    const video = videoRef.current;
    if (!video || video.videoWidth === 0) return;
    const blob = await captureFrame(video);
    if (!blob) return;
    const { error: uploadError } = await supabase.storage.from('camera-frames').upload(CAMERA_PATH, blob, {
      upsert: true,
      contentType: 'image/jpeg',
    });
    if (uploadError) return;
    const { data } = supabase.storage.from('camera-frames').getPublicUrl(CAMERA_PATH);
    await supabase.from('camera_state').update({ frame_url: data.publicUrl, taken_at: new Date().toISOString() }).eq('id', true);
    setLastSent(new Date());
    onFrameUploaded();
  }

  async function start() {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setLive(true);
      await uploadFrame();
      intervalRef.current = setInterval(uploadFrame, CAPTURE_INTERVAL_MS);
    } catch {
      setError("Impossible d'accéder à la caméra. Vérifie les autorisations du navigateur.");
    }
  }

  function stop() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setLive(false);
  }

  useEffect(() => {
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ border: '1px solid rgba(36,28,22,.14)', background: '#fff', padding: '20px 22px' }}>
      <div style={{ fontFamily: font.display, fontSize: 20, marginBottom: 6 }}>Diffusion en direct</div>
      <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(36,28,22,.65)', margin: '0 0 16px' }}>
        Pose ce téléphone dans le jardin, laisse cet onglet ouvert et l'écran allumé. Une photo est envoyée toutes
        les {CAPTURE_INTERVAL_MS / 1000}&nbsp;s tant que la diffusion est active.
      </p>
      <video
        ref={videoRef}
        muted
        playsInline
        style={{
          width: '100%',
          maxWidth: 320,
          display: live ? 'block' : 'none',
          marginBottom: live ? 12 : 0,
          background: color.nuitDeTablette,
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {!live ? (
          <Button onClick={start}>Démarrer la diffusion</Button>
        ) : (
          <Button variant="outline" onClick={stop}>
            Arrêter la diffusion
          </Button>
        )}
        {live && (
          <span style={{ fontFamily: font.mono, fontSize: 11, color: 'rgba(36,28,22,.55)' }}>
            {lastSent ? `Dernier envoi ${lastSent.toLocaleTimeString('fr-FR')}` : 'Envoi en cours…'}
          </span>
        )}
      </div>
      {error && <p style={{ color: color.argile, fontSize: 13, marginTop: 10 }}>{error}</p>}
    </div>
  );
}
