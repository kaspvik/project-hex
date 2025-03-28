"use client";

import { useState } from "react";

interface SoundButtonProps {
  label: string;
  soundSrc: string;
}

const SoundButton: React.FC<SoundButtonProps> = ({ label, soundSrc }) => {
  const [audio] = useState(() => new Audio(soundSrc));

  const playSound = () => {
    audio.currentTime = 0; // Starta om ljudet om det redan spelas
    audio.play();
  };

  return (
    <button
      onClick={playSound}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
      {label}
    </button>
  );
};

export default SoundButton;
