"use client";

import { useState } from "react";
import { musicData } from "../data/music";

const HUE_BRIDGE_IP = "192.168.0.9";
const HUE_API_KEY = "ppxtsTZYlLvVQYQRCFoCURWAPr3y4Zwml4buuGCt";

const activateScene = async (sceneId: string) => {
  try {
    await fetch(`http://${HUE_BRIDGE_IP}/api/${HUE_API_KEY}/groups/0/action`, {
      method: "PUT",
      body: JSON.stringify({ scene: sceneId, transitiontime: 40 }),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Fel vid aktivering av scen:", error);
  }
};

const MusicController: React.FC<{
  setLastScene: (sceneId: string) => void;
}> = ({ setLastScene }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playMusic = (soundSrc: string, sceneId: string) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    const newAudio = new Audio(soundSrc);
    newAudio.play();
    setAudio(newAudio);

    setLastScene(sceneId);
    activateScene(sceneId);
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {musicData.map((music, index) => (
        <button
          key={index}
          onClick={() => playMusic(music.soundSrc, music.sceneId)}
          className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
          <img
            src={`/svg/${music.label.toLowerCase().replace(/\s+/g, "-")}.svg`}
            alt={`${music.label} Icon`}
            className="w-10 h-10"
          />
          <span className="custom-title text-xl mt-2">{music.label}</span>
        </button>
      ))}
      <button
        onClick={() => audio?.pause()}
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <img src="/svg/stop.svg" alt="Stop Icon" className="w-10 h-10" />
        <span className="custom-title text-xl mt-2">Stop</span>
      </button>
    </div>
  );
};

export default MusicController;
