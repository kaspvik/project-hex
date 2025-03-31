"use client";

import { useState } from "react";

const HUE_BRIDGE_IP = "192.168.0.9";
const HUE_API_KEY = "ppxtsTZYlLvVQYQRCFoCURWAPr3y4Zwml4buuGCt";
const LIGHT_IDS = [4, 5, 6];
const TRANSITION_TIME = 15; // 1.5 sekunder fade (Hue räknar i 100ms)

const setLights = async (state: object) => {
  LIGHT_IDS.forEach(async (id) => {
    await fetch(
      `http://${HUE_BRIDGE_IP}/api/${HUE_API_KEY}/lights/${id}/state`,
      {
        method: "PUT",
        body: JSON.stringify(state),
      }
    );
  });
};

const MusicController: React.FC = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playMusicAndLights = (src: string, color: number[]) => {
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(src);
    newAudio.loop = true;
    newAudio.play();
    setAudio(newAudio);

    setLights({
      on: true,
      bri: 254,
      xy: color,
      transitiontime: TRANSITION_TIME,
    });
  };

  const stopMusic = () => {
    if (audio) {
      audio.pause();
      setAudio(null);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <button
        onClick={() =>
          playMusicAndLights("/sounds/new-dawn.mp3", [0.501, 0.415])
        } // Varmt vitt
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">☀️</span>
        <span className="text-sm mt-2">Day</span>
      </button>

      <button
        onClick={() =>
          playMusicAndLights("/sounds/night-time.mp3", [0.153, 0.048])
        } // Blått
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">🌙</span>
        <span className="text-sm mt-2">Night</span>
      </button>

      <button
        onClick={() =>
          playMusicAndLights("/sounds/discussion.mp3", [0.336, 0.364])
        } // Neutralt vitt
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">💬</span>
        <span className="text-sm mt-2">Discussion</span>
      </button>

      <button
        onClick={stopMusic}
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">⏹️</span>
        <span className="text-sm mt-2">Stop</span>
      </button>
    </div>
  );
};

export default MusicController;
