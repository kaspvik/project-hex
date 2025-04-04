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

  return (
    <div>
      <h2>
        <div>
          <input type="text" />
          <input type="text" />
          <button></button>
        </div>
        <ul>
          <li>
            <span></span>
            <button></button>
          </li>
        </ul>
      </h2>
    </div>
  );
};
