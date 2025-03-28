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
      className="flex flex-col items-center justify-center w-32 h-32 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-all">
      🔊
      <span className="text-sm mt-2">{label}</span>
    </button>
  );
};

export default SoundButton;
