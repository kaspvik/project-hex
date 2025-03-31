import MusicController from "./components/musiccontroller";
import Script from "./components/script"; // ⬅ Importera manuskomponenten
import SoundButton from "./components/soundbutton";
import { soundData } from "./data/sounds"; // Importera ljudspår
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-row items-start justify-center bg-gray-900 text-white p-12 gap-16">
      {/* Ljudknapp-sektionen */}
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg w-1/4">
        <h1 className="text-3xl font-bold mb-6">Ljudspelare</h1>
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
