"use client";

import { useState } from "react";
import MusicController from "./components/musiccontroller";
import Script from "./components/script"; // ⬅ Importera manuskomponenten
import SoundButton from "./components/soundbutton";
import { soundData } from "./data/sounds"; // Importera ljudspår
import "./globals.css";

export default function Home() {
  const [lastScene, setLastScene] = useState("DBlnYRTI7dC635yd");

  return (
    <div className="min-h-screen min-w-full flex flex-row items-start justify-center bg-black text-white p-12 gap-5">
      {/* Ljudknapp-sektionen */}
      <section className="flex flex-col items-center bg-stone-900/30 p-6 shadow-lg w-auto">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {soundData.map((sound, index) => (
            <SoundButton
              key={index}
              label={sound.label}
              soundSrc={sound.soundSrc}
              sceneId={sound.sceneId}
              lastScene={lastScene}
            />
          ))}
        </div>
        <MusicController setLastScene={setLastScene} />
      </section>

      {/* Manus-sektionen */}
      <section>
        <Script />
      </section>
    </div>
  );
}
