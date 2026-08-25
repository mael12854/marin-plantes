import { useRef, useState, type ChangeEvent } from 'react';
import { CameraPanel } from '../../components/CameraPanel';
import { LiveBroadcast } from '../../components/LiveBroadcast';
import { Button } from '../../components/ui/Button';
import { supabase } from '../../lib/supabase';
import { useCameraState } from '../../lib/useCameraState';
import { color, font } from '../../tokens';

const CAMERA_PATH = 'garden/latest.jpg';

export function AdminCamera() {
  const { camera, refetch } = useCameraState();
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handlePhotoChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingPhoto(true);
    setPhotoError(null);
    const { error: uploadError } = await supabase.storage.from('camera-frames').upload(CAMERA_PATH, file, { upsert: true });
    if (uploadError) {
      setUploadingPhoto(false);
      setPhotoError("L'envoi de la photo n'a pas marché, réessaie.");
      return;
    }
    const { data: urlData } = supabase.storage.from('camera-frames').getPublicUrl(CAMERA_PATH);
    const { error: updateError } = await supabase
      .from('camera_state')
      .update({ frame_url: urlData.publicUrl, taken_at: new Date().toISOString() })
      .eq('id', true);
    setUploadingPhoto(false);
    if (updateError) {
      setPhotoError("La photo est envoyée mais l'état caméra n'a pas pu être mis à jour, réessaie.");
      return;
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
    refetch();
  }

  return (
    <div className="mp-section" style={{ padding: '72px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: color.argile, marginBottom: 16 }}>
        Caméra
      </div>
      <h1 style={{ fontFamily: font.display, fontWeight: 300, fontSize: 40, lineHeight: 1.05, margin: '0 0 8px' }}>Le jardin, en direct</h1>
      <p style={{ fontSize: 14, color: 'rgba(36,28,22,.6)', margin: '0 0 32px' }}>
        Un seul flux, partagé par tout le monde — chaque client le voit sur la page de sa plante, quelle que soit
        la plante.
      </p>

      <div className="mp-grid-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>
        <div>
          <CameraPanel imageUrl={camera?.frame_url} takenAt={camera?.taken_at} />
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
        <LiveBroadcast onFrameUploaded={refetch} />
      </div>
    </div>
  );
}
