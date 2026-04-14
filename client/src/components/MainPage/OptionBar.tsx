import { charactersDropdown } from "@constants/characters.constants";
import { Dropdown } from "@components/MainPage/Dropdown.tsx";
import { movelist } from "@constants/moves.constants";
import type { Input } from "@constants/inputs.constants";

interface OptionBarProps {
  selectedCharacter: string;
  setSelectedCharacter: (value: string) => void;
  selectedMove: string;
  setSelectedMove: (value: string) => void;
  setInputLength: (value: number) => void;
  setInputNotation: (value: Input[][]) => void;
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
}: OptionBarProps) {
  return (
    <section className={className}>
      <div className="col-span-3">
        <Dropdown
          value={selectedCharacter}
          onChange={setSelectedCharacter}
          options={charactersDropdown}
          placeholder="Select a character"
          className="w-full h-full bg-black border-0 text-white px-4 py-2 border-r-[1vw] border-r-transparent rounded"
        />
      </div>

      <div className="col-span-3">
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
    </section>
  );
}

export default OptionBar;
