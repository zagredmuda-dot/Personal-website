import Stage from '@/components/Stage';
import Cover from '@/components/pages/Cover';
import Profile from '@/components/pages/Profile';
import NoteForge from '@/components/pages/NoteForge';
import Krazzy from '@/components/pages/Krazzy';
import OtherWork from '@/components/pages/OtherWork';
import BackCover from '@/components/pages/BackCover';

export default function Home() {
  return (
    <Stage>
      <Cover />
      <Profile />
      <NoteForge />
      <Krazzy />
      <OtherWork />
      <BackCover />
    </Stage>
  );
}
