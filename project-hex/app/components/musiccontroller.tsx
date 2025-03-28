"use client";

import { useState } from "react";

const MusicController: React.FC = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playMusic = (src: string) => {
    if (audio) {
      audio.pause(); // Stoppa eventuell tidigare musik
    }
    const newAudio = new Audio(src);
    newAudio.loop = true; // Gör att musiken loopar
    newAudio.play();
    setAudio(newAudio);
  };

  const stopMusic = () => {
    if (audio) {
      audio.pause();
      setAudio(null);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {/* Dag-knapp */}
      <button
        onClick={() => playMusic("/sounds/new-dawn.mp3")}
        className="flex flex-col items-center justify-center w-32 h-32 bg-green-500 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg transition-all">
        <span className="text-4xl">☀️</span>
        <span className="text-sm mt-2">Day</span>
      </button>

      {/* Natt-knapp */}
      <button
        onClick={() => playMusic("/sounds/night-time.mp3")}
        className="flex flex-col items-center justify-center w-32 h-32 bg-purple-500 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition-all">
        <span className="text-4xl">🌙</span>
        <span className="text-sm mt-2">Night</span>
      </button>

      {/* Diskussion-knapp */}
      <button
        onClick={() => playMusic("/sounds/discussion.mp3")}
        className="flex flex-col items-center justify-center w-32 h-32 bg-blue-800 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-all">
        <span className="text-4xl">💬</span>
        <span className="text-sm mt-2">Discussion</span>
      </button>

      {/* Stop-knapp */}
      <button
        onClick={stopMusic}
        className="flex flex-col items-center justify-center w-32 h-32 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg transition-all">
        <span className="text-4xl">⏹️</span>
        <span className="text-sm mt-2">Stop</span>
      </button>
    </div>
  );
};

export default MusicController;
