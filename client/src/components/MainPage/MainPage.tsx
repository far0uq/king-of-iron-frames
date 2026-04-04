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
    <div className="h-screen grid grid-flow-row grid-rows-12 gap-6 p-10">
      <header className="row-span-2 content-center">
        <h1 className=" text-7xl font-bold">King of Iron Frames</h1>
        <h3 className=" text-xl">Practice your TEKKEN Just-Frame Inputs!</h3>
      </header>

      <section className="row-span-1 grid grid-cols-6 gap-8 bg-gray-50">
        <div className="col-span-2">
          <Dropdown
            value={selectedCharacter}
            onChange={setSelectedCharacter}
            options={charactersDropdown}
            placeholder="Select a character"
            className="w-full h-full bg-black border-0 text-white px-4 py-2 border-r-[1vw] border-r-transparent rounded"
          />
        </div>

        <div className="col-span-2">
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
            className="w-full h-full bg-black border-0 text-white px-4 py-2 border-r-[1vw] border-r-transparent rounded"
          />
        </div>

        <div className="col-span-1">
          <button
            disabled
            className="w-full h-full px-4 py-2 bg-black text-white rounded cursor-not-allowed disabled:bg-gray-300"
          >
            Timer
          </button>
        </div>

        <div className="col-span-1">
          <button
            disabled
            className="w-full h-full px-4 py-2 bg-black text-white rounded cursor-not-allowed disabled:bg-gray-300"
          >
            Controls
          </button>
        </div>
      </section>

      {/* Command Display */}
      <CommandDisplay inputNotation={inputNotation} className="row-span-8" />

      {/* Footer */}
      <footer className="row-span-1 text-center text-sm text-gray-500 content-center">
        Made by Farouq with ⚡
      </footer>
    </div>
  );
}
