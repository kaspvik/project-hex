"use client";

import { useState } from "react";

const HUE_BRIDGE_IP = "192.168.0.9";
const HUE_API_KEY = "ppxtsTZYlLvVQYQRCFoCURWAPr3y4Zwml4buuGCt";
const SCENE_ID_DAG = "DBlnYRTI7dC635yd";
const SCENE_ID_NATT = "zIcCc5aWFKU8ETQd";
const SCENE_ID_DISKUSSION = "d64HkvuifPFnM-cz";
const SCENE_ID_INTRO = "d64HkvuifPFnM-cz";
const SCENE_ID_JUDGEMENT = "d64HkvuifPFnM-cz";

const activateScene = async (sceneId: string) => {
  await fetch(`http://${HUE_BRIDGE_IP}/api/${HUE_API_KEY}/groups/0/action`, {
    method: "PUT",
    body: JSON.stringify({ scene: sceneId, transitiontime: 40 }),
  });
};

const MusicController: React.FC<{
  setLastScene: (sceneId: string) => void;
}> = ({ setLastScene }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playMusic = (src: string, sceneId: string) => {
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(src);
    newAudio.play();
    setAudio(newAudio);
    setLastScene(sceneId); // Spara senaste huvudbelysningen
    activateScene(sceneId);
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <button
        onClick={() => playMusic("/sounds/new-beginning.mp3", SCENE_ID_INTRO)}
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">🌄</span>
        <span className="custom-title text-sm mt-2">Intro</span>
      </button>
      <button
        onClick={() => playMusic("/sounds/night-time.mp3", SCENE_ID_NATT)}
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">🌙</span>
        <span className="custom-title text-sm mt-2">Night</span>
      </button>
      <button
        onClick={() => playMusic("/sounds/new-dawn.mp3", SCENE_ID_DAG)}
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">☀️</span>
        <span className="custom-title text-sm mt-2">Day</span>
      </button>
      <button
        onClick={() => playMusic("/sounds/discussion.mp3", SCENE_ID_DISKUSSION)}
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">💬</span>
        <span className="custom-title text-sm mt-2">Discussion</span>
      </button>
      <button
        onClick={() =>
          playMusic("/sounds/final-judgement.mp3", SCENE_ID_JUDGEMENT)
        }
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">🗣️</span>
        <span className="custom-title text-sm mt-2">Final judgement</span>
      </button>
      <button
        onClick={() => audio?.pause()}
        className="flex flex-col items-center justify-center w-32 h-32 border-white border-2 bg-stone-900 hover:bg-stone-950 text-white font-bold shadow-lg transition-all">
        <span className="text-4xl">⏹️</span>
        <span className="custom-title text-sm mt-2">Stop</span>
      </button>
    </div>
  );
};

export default MusicController;
