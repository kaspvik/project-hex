"use client";

import { useState } from "react";

interface SoundButtonProps {
  label: string;
  soundSrc: string;
  sceneId: string;
  lastScene: string; // Senaste huvudbelysning
}

const HUE_BRIDGE_IP = "192.168.0.9";
const HUE_API_KEY = "ppxtsTZYlLvVQYQRCFoCURWAPr3y4Zwml4buuGCt";

const SoundButton: React.FC<SoundButtonProps> = ({
  label,
  soundSrc,
  sceneId,
  lastScene,
}) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playSoundAndActivateScene = async () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    const newAudio = new Audio(soundSrc);
    newAudio.play();
    setAudio(newAudio);

    try {
      await fetch(
        `http://${HUE_BRIDGE_IP}/api/${HUE_API_KEY}/groups/0/action`,
        {
          method: "PUT",
          body: JSON.stringify({ scene: sceneId }),
          headers: { "Content-Type": "application/json" },
        }
      );

      newAudio.onended = async () => {
        await fetch(
          `http://${HUE_BRIDGE_IP}/api/${HUE_API_KEY}/groups/0/action`,
          {
            method: "PUT",
            body: JSON.stringify({ scene: lastScene }),
            headers: { "Content-Type": "application/json" },
          }
        );
      };
    } catch (error) {
      console.error("Fel vid aktivering av scen:", error);
    }
  };

  return (
    <button
      onClick={playSoundAndActivateScene}
      className="flex flex-col items-center justify-center w-22 h-22 border-white border-1 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
      🔔
      <span className="text-sm mt-2">{label}</span>
    </button>
  );
};

export default SoundButton;
