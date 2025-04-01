"use client";

import { useState } from "react";

const HUE_BRIDGE_IP = "192.168.0.9";
const HUE_API_KEY = "ppxtsTZYlLvVQYQRCFoCURWAPr3y4Zwml4buuGCt";
const SCENE_ID_DAG = "DBlnYRTI7dC635yd";
const SCENE_ID_NATT = "zIcCc5aWFKU8ETQd";
const SCENE_ID_DISKUSSION = "d64HkvuifPFnM-cz";
const TRANSITION_TIME = 15; // 1.5 sekunder fade (Hue räknar i 100ms)

const activateScene = async (sceneId: string) => {
  await fetch(`http://${HUE_BRIDGE_IP}/api/${HUE_API_KEY}/groups/0/action`, {
    method: "PUT",
    body: JSON.stringify({ scene: sceneId, transitiontime: 40 }),
  });
};

const MusicController: React.FC = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playMusic = (src: string) => {
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(src);
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
        onClick={() => {
          playMusic("/sounds/new-dawn.mp3");
          activateScene(SCENE_ID_DAG);
        }}
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">☀️</span>
        <span className="text-sm mt-2">Day</span>
      </button>

      {/* Natt-knapp */}
      <button
        onClick={() => {
          playMusic("/sounds/night-time.mp3");
          activateScene(SCENE_ID_NATT);
        }}
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">🌙</span>
        <span className="text-sm mt-2">Night</span>
      </button>

      {/* Diskussion-knapp */}
      <button
        onClick={() => {
          playMusic("/sounds/discussion.mp3");
          activateScene(SCENE_ID_DISKUSSION);
        }}
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2  bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
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
