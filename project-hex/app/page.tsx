import MusicController from "./components/musiccontroller";
import Script from "./components/script"; // ⬅ Importera manuskomponenten
import SoundButton from "./components/soundbutton";
import { soundData } from "./data/sounds"; // Importera ljudspår
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-row items-start justify-center bg-black-900 text-white p-12 gap-5">
      {/* Ljudknapp-sektionen */}
      <div className="flex flex-col items-center bg-stone-900 p-6 shadow-lg width-200px">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {soundData.map((sound, index) => (
            <SoundButton
              key={index}
              label={sound.label}
              soundSrc={sound.soundSrc}
            />
          ))}
        </div>
        <MusicController />
      </div>

      {/* Manus-sektionen */}
      <Script />
    </div>
  );
}
