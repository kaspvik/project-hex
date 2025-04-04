import { useState } from "react";

const NightActions: React.FC = () => {
  const [witchesChoice, setWitchesChoice] = useState("");
  const [healersProtection, setHealersProtection] = useState("");
  const [spiesVision, setSpiesVision] = useState("");

  return (
    <div className="mt-4">
      <div className="mb-4">
        <label className="block font-semibold">Healers Protection:</label>
        <textarea
          value={healersProtection}
          onChange={(e) => setHealersProtection(e.target.value)}
          className="w-full h-20 p-2 border border-gray-300 rounded"
          placeholder="Skriv vem helaren skyddade..."
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Witches Choice:</label>
        <textarea
          value={witchesChoice}
          onChange={(e) => setWitchesChoice(e.target.value)}
          className="w-full h-20 p-2 border border-gray-300 rounded"
          placeholder="Skriv vem häxorna valde..."
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Spies Vision:</label>
        <textarea
          value={spiesVision}
          onChange={(e) => setSpiesVision(e.target.value)}
          className="w-full h-20 p-2 border border-gray-300 rounded"
          placeholder="Skriv vad spionen såg..."
        />
      </div>
    </div>
  );
};

export default NightActions;
