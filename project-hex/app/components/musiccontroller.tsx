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
    <div className="flex gap-4">
      <button
        onClick={() => playMusic("/sounds/new-dawn.mp3")}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all">
        ☀️ Day
      </button>
      <button
        onClick={() => playMusic("/sounds/discussion.mp3")}
        className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
        Discussion
      </button>
      <button
        onClick={() => playMusic("/sounds/night-time.mp3")}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-all">
        🌙 Night
      </button>
      <button
        onClick={stopMusic}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all">
        ⏹️ Stop
      </button>
    </div>
  );
};

export default MusicController;
