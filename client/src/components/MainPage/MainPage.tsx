import { useEffect, useState } from "react";
import "@components/MainPage/MainPage.css";
import { movelist } from "@constants/moves.constants";
import { characters } from "@constants/characters.constants";
import { Dropdown } from "@components/MainPage/Dropdown.tsx";
import CommandDisplay from "@components/MainPage/CommandDisplay.tsx";

export default function MainPage() {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [selectedMove, setSelectedMove] = useState("");
  const [inputNotation, setInputNotation] = useState<string[]>([]);

  useEffect(() => {
    setSelectedMove("");
    setInputNotation([]);
  }, [selectedCharacter]);

  return (
    <div className="main-box d-flex align-items-center">
      <div className="container">
        <header className="iron-frames-header row justify-content-center">
          <h1 className="col-7">
            King of <br /> Iron Frames
          </h1>
          <h3 className="col-7">Practice your TEKKEN Just-Frame Inputs!</h3>
        </header>

        <CommandDisplay inputNotation={inputNotation} />

        <section className="iron-frames-settings row justify-content-between mx-auto col-12 mt-5">
          <Dropdown
            value={selectedCharacter}
            onChange={setSelectedCharacter}
            options={characters}
            placeholder="Select a character"
            className="col-4"
          />

          <Dropdown
            value={selectedMove}
            onChange={(selectedValue) => {
              setSelectedMove(selectedValue);
              setInputNotation(
                movelist.find((move) => move.value === selectedValue)
                  ?.inputNotation || [],
              );
            }}
            options={movelist
              .filter((move) => move.associatedCharacter === selectedCharacter)
              .map((move) => ({ value: move.value, label: move.label }))}
            placeholder="Select a move"
            className="col-4"
          />

          <button disabled>Timer</button>
          <button disabled>Controls</button>
        </section>

        <footer className="iron-frames-footer">Made by Farouq with ⚡</footer>
      </div>
    </div>
  );
}
