"use client";

import { useState } from "react";

interface SoundButtonProps {
  label: string;
  soundSrc: string;
}

const SoundButton: React.FC<SoundButtonProps> = ({ label, soundSrc }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audio) {
      audio.pause(); // Stoppa eventuellt pågående ljud
      audio.currentTime = 0; // Starta om ljudet från början
    }

    const newAudio = new Audio(soundSrc);
    newAudio.play();
    setAudio(newAudio);
  };

  return (
    <button
      onClick={playSound}
      className="flex flex-col items-center justify-center w-22 h-22 border-white border-1 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
      🔊
      <span className="text-sm mt-2">{label}</span>
    </button>
  );
};

export default SoundButton;
