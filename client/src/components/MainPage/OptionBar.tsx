import { charactersDropdown } from "@constants/characters.constants";
import { Dropdown } from "@components/MainPage/Dropdown.tsx";
import { movelist } from "@constants/moves.constants";
import type { Input } from "@constants/inputs.constants";
import { SECTIONS } from "@constants/ui.constants";
import type { Section } from "@constants/ui.constants";
import { useEffect } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

interface OptionBarProps {
  selectedCharacter: string;
  setSelectedCharacter: (value: string) => void;
  selectedMove: string;
  setSelectedMove: (value: string) => void;
  setInputLength: (value: number) => void;
  setInputNotation: (value: Input[][]) => void;
  setSelectedSection: (value: Section) => void;
  selectedSection: Section;
  className: string;
}

function OptionBar({
  selectedCharacter,
  setSelectedCharacter,
  selectedMove,
  setSelectedMove,
  setInputLength,
  setInputNotation,
  className,
  setSelectedSection,
  selectedSection,
}: OptionBarProps) {
  const state = Flip.getState(".targets");
  const flipAnimation = () => {
    Flip.from(state, { duration: 0.5, ease: "power1.inOut" });
  };

  useEffect(() => {
    flipAnimation();
  }, [selectedSection]);

  return (
    <section className={className}>
      <div
        className={`grid gap-8 ${
          selectedSection === SECTIONS.PRACTICE
            ? "grid-cols-4 col-span-4"
            : "grid-cols-2 col-span-2"
        } targets`}
      >
        <div
          className={`${
            selectedSection === SECTIONS.PRACTICE ? "col-span-2" : "col-span-1"
          } targets`}
        >
          <Dropdown
            value={selectedCharacter}
            onChange={setSelectedCharacter}
            options={charactersDropdown}
            placeholder="Select a character"
            className="w-full h-full bg-black border-0 text-white px-4 py-2 border-r-[1vw] border-r-transparent rounded"
          />
        </div>

        <div
          className={`${selectedSection === SECTIONS.PRACTICE ? "col-span-2" : "col-span-1"} targets`}
        >
          <Dropdown
            value={selectedMove}
            onChange={(selectedValue) => {
              setSelectedMove(selectedValue);
              setInputNotation(
                movelist.find((move) => move.value === selectedValue)
                  ?.inputNotation || [],
              );
              setInputLength(
                movelist.find((move) => move.value === selectedValue)
                  ?.inputLength || 0,
              );
            }}
            options={movelist
              .filter((move) => move.associatedCharacter === selectedCharacter)
              .map((move) => ({ value: move.value, label: move.label }))}
            placeholder="Select a move"
            className="w-full h-full bg-black border-0 text-white px-4 py-2 border-r-[1vw] border-r-transparent rounded"
          />
        </div>
      </div>

      <div className="col-span-1 targets">
        <button
          disabled
          className="w-full h-full px-4 py-2 bg-black text-white rounded cursor-not-allowed disabled:bg-gray-300"
        >
          Timer
        </button>
      </div>

      <div
        className={`${
          selectedSection === SECTIONS.CONTROLS ? "col-span-3" : "col-span-1"
        } targets`}
      >
        <button
          onClick={() => setSelectedSection(SECTIONS.CONTROLS)}
          className="w-full h-full px-4 py-2 bg-black text-white rounded cursor-pointer hover:bg-gray-800 transition-colors duration-200"
        >
          Controls
        </button>
      </div>
    </section>
  );
}

export default OptionBar;
