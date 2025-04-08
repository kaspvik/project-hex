"use client";

import { useState } from "react";

const NightActions: React.FC = () => {
  const [witchesChoice, setWitchesChoice] = useState("");
  const [healersProtection, setHealersProtection] = useState("");
  const [spiesVision, setSpiesVision] = useState("");

  return (
    <div className="p-4 bg-stone-900/50 rounded-lg w-80 mt-5">
      <div className="costum-title mb-4">
        <label className="block custom-title">Healers Protection:</label>
        <input
          onChange={(e) => setHealersProtection(e.target.value)}
          className="block custom-text text-2xl w-full h-12 p-2 border border-gray-300"
          placeholder="Skriv vem helaren skyddade..."
        />
      </div>

      <div className="mb-4">
        <label className="block custom-title">Witches Choice:</label>
        <input
          value={witchesChoice}
          onChange={(e) => setWitchesChoice(e.target.value)}
          className="block custom-text text-2xl w-full h-12 p-2 border border-gray-300"
          placeholder="Skriv vem häxorna valde..."
        />
      </div>

      <div className="mb-4">
        <label className="block custom-title">Spies Vision:</label>
        <input
          value={spiesVision}
          onChange={(e) => setSpiesVision(e.target.value)}
          className="block custom-text text-2xl w-full h-12 p-2 border border-gray-300"
          placeholder="Skriv vad spionen såg..."
        />
      </div>
    </div>
  );
};

export default NightActions;
