import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playName, setPlayName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  function handleEditClick() {
    setEditing((editing) => !editing);
    if (isEditing) onChangeName(symbol, playName);
  }

  function handleChange(event) {
    setPlayName(event.target.value);
  }

  let editablePlayName = <span className="player-name">{playName}</span>;

  if (isEditing) {
    editablePlayName = (
      <input
        type="text"
        required
        value={playName}
        className="player-name"
        onChange={handleChange}
      ></input>
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
