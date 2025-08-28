import { useRef, useState } from "react";

export default function Player() {
  const [Name, setName] = useState("unknown entity");
  const playerName = useRef("");

  const handleClick = () => {
    setName(playerName.current.value);
    playerName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {Name ?? "Unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
