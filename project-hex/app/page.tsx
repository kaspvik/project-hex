"use client";

import { useState } from "react";
import MusicController from "./components/musiccontroller";
import NightActions from "./components/nightactions";
import PlayerList from "./components/playerlist";
import Script from "./components/script";
import SoundButton from "./components/soundbutton";
import { soundData } from "./data/sounds";
import "./globals.css";

export default function Home() {
  const [lastScene, setLastScene] = useState("DBlnYRTI7dC635yd");

  return (
    <div className="min-h-screen min-w-full flex flex-col lg:flex-row items-start justify-center bg-black text-white p-4 md:p-8 lg:p-12 gap-6">
      {/* Manus-sektionen */}
      <section className="order-1 lg:order-2 flex items-center w-full lg:max-w-md xl:max-w-xl">
        <Script />
      </section>

      {/* Ljudknapp-sektionen */}
      <section className="order-2 lg:order-1 flex flex-col items-center bg-stone-900/30 p-4 md:p-6 shadow-lg w-full lg:w-auto">
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

      {/* Extra-sektionen */}
      <section className="order-3 flex flex-col items-center w-full max-w-md mx-auto p-4 lg:items-start lg:mx-0">
        <PlayerList />
        <NightActions />
      </section>
    </div>
  );
}
