import MusicController from "./components/musiccontroller";
import SoundButton from "./components/soundbutton";
import { soundData } from "./data/sounds"; // Importera ljudspår
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
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
  );
}
