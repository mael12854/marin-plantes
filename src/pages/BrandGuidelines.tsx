import { useState } from 'react';
import { TweakPanel } from '../components/TweakPanel';
import { Cover } from '../sections/Cover';
import { DoDont } from '../sections/DoDont';
import { Emails } from '../sections/Emails';
import { Fondation } from '../sections/Fondation';
import { Iconographie } from '../sections/Iconographie';
import { Logo } from '../sections/Logo';
import { Motifs } from '../sections/Motifs';
import { Motion } from '../sections/Motion';
import { Palette } from '../sections/Palette';
import { Photographie } from '../sections/Photographie';
import { ProduitLive } from '../sections/ProduitLive';
import { Sommaire } from '../sections/Sommaire';
import { TonDeVoix } from '../sections/TonDeVoix';
import { Typographie } from '../sections/Typographie';
import { defaultPhosphore } from '../tokens';

export function BrandGuidelines() {
  const [tu, setTu] = useState(true);
  const [phos, setPhos] = useState(defaultPhosphore);
  const [mono, setMono] = useState('M&P');

  return (
    <div style={{ fontFamily: 'Archivo,sans-serif', color: '#241C16', background: '#F2EEE3' }}>
      <TweakPanel tu={tu} onTuChange={setTu} phos={phos} onPhosChange={setPhos} mono={mono} onMonoChange={setMono} />
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <Cover />
        <Sommaire />
        <Fondation />
        <Logo mono={mono} />
        <Palette phos={phos} />
        <Typographie />
        <Motifs />
        <TonDeVoix tu={tu} />
        <Iconographie />
        <Photographie />
        <ProduitLive phos={phos} />
        <Motion phos={phos} />
        <Emails />
        <DoDont />
      </div>
    </div>
  );
}
