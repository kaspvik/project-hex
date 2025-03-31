"use client";

import { useState } from "react";

const HUE_BRIDGE_IP = "192.168.0.9";
const HUE_API_KEY = "ppxtsTZYlLvVQYQRCFoCURWAPr3y4Zwml4buuGCt";
const LIGHT_IDS = [4, 5, 6]; // Alla tre lampor

const changeLightState = async (
  on: boolean,
  brightness: number,
  hue: number
) => {
  await Promise.all(
    LIGHT_IDS.map((id) =>
      fetch(`http://${HUE_BRIDGE_IP}/api/${HUE_API_KEY}/lights/${id}/state`, {
        method: "PUT",
        body: JSON.stringify({
          on: on,
          bri: brightness, // 1-254 (ljusstyrka)
          hue: hue, // 0-65535 (färgton)
          sat: 254, // Mättnad
        }),
        headers: { "Content-Type": "application/json" },
      })
    )
  );
};

const MusicController: React.FC = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playMusic = (
    src: string,
    lightSettings: { on: boolean; bri: number; hue: number }
  ) => {
    if (audio) audio.pause();
    const newAudio = new Audio(src);
    newAudio.loop = true;
    newAudio.play();
    setAudio(newAudio);

    // Uppdatera alla lampor
    changeLightState(lightSettings.on, lightSettings.bri, lightSettings.hue);
  };

  const stopMusic = () => {
    if (audio) {
      audio.pause();
      setAudio(null);
    }
    changeLightState(false, 0, 0); // Släck alla lampor
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {/* Dag-knapp */}
      <button
        onClick={() =>
          playMusic("/sounds/new-dawn.mp3", { on: true, bri: 200, hue: 10000 })
        }
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">☀️</span>
        <span className="text-sm mt-2">Day</span>
      </button>

      {/* Natt-knapp */}
      <button
        onClick={() =>
          playMusic("/sounds/night-time.mp3", { on: true, bri: 50, hue: 47000 })
        }
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">🌙</span>
        <span className="text-sm mt-2">Night</span>
      </button>

      {/* Diskussion-knapp */}
      <button
        onClick={() =>
          playMusic("/sounds/discussion.mp3", {
            on: true,
            bri: 180,
            hue: 25000,
          })
        }
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">💬</span>
        <span className="text-sm mt-2">Discussion</span>
      </button>

      {/* Stop-knapp */}
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
