"use client";

import { useState } from "react";

interface Player {
  id: number;
  name: string;
  role: string;
}

const PlayerList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const addPlayer = () => {
    if (name.trim() && role.trim()) {
      setPlayers([...players, { id: Date.now(), name, role }]);
      setName("");
      setRole("");
    }
  };

  const removePlayer = (id: number) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  return (
    <div className="p-4 bg-stone-900/50 text-white rounded-lg w-80">
      <h2 className="custom-title text-xl font-bold mb-4">Player List</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="custom-text p-2 mr-2 mb-2 text-white bg-stone-900/80 border-1 border-white"
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="custom-text p-2 mr-2 mb-2 text-white bg-stone-900/80 border-1 border-white"
        />
        <button
          onClick={addPlayer}
          className=" custom-title bg-stone-900 hover:bg-stone-950 border-1 border-white px-3 py-2 s ">
          Add
        </button>
      </div>
      <ul>
        {players.map((player) => (
          <li
            key={player.id}
            className="flex justify-between p-2 border-b border-gray-600">
            <span className="custom-text text-2xl">
              {player.name} - {player.role}
            </span>
            <button
              onClick={() => removePlayer(player.id)}
              className="custom-title bg-red-500 px-2 py-1 rounded-lg">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
