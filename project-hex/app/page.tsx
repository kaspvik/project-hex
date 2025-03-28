import MusicController from "./components/musiccontroller";
import SoundButton from "./components/soundbutton";
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Ljudspelare</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <SoundButton label="Nature" soundSrc="/sounds/power-of-nature.mp3" />
        <SoundButton label="Witches" soundSrc="/sounds/witch-laugh.mp3" />
        <SoundButton label="Mindreader" soundSrc="/sounds/mindreader.mp3" />
        <SoundButton label="Ringbell" soundSrc="/sounds/ringbell.mp3" />
        <SoundButton label="Thunder" soundSrc="/sounds/thunder.mp3" />
        <SoundButton label="Dead-witch" soundSrc="/sounds/dead-witch.mp3" />
      </div>
      <MusicController />
    </div>
  );
}
