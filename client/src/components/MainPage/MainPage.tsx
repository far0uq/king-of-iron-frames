import { useEffect, useState } from "react";
import "@components/MainPage/MainPage.css";
import { movelist } from "@constants/moves.constants";
import { charactersDropdown } from "@constants/characters.constants";
import { Dropdown } from "@components/MainPage/Dropdown.tsx";
import CommandDisplay from "@components/MainPage/CommandDisplay.tsx";
import type { Input } from "@constants/inputs.constants";

export default function MainPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<string>("");
  const [selectedMove, setSelectedMove] = useState<string>("");
  const [inputNotation, setInputNotation] = useState<Input[][]>([]);

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

        <section className="iron-frames-settings row justify-content-between mx-auto col-10 mt-5">
          <Dropdown
            value={selectedCharacter}
            onChange={setSelectedCharacter}
            options={charactersDropdown}
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

        <CommandDisplay inputNotation={inputNotation} />

        <footer className="iron-frames-footer">Made by Farouq with ⚡</footer>
      </div>
    </div>
  );
}
