import CommandBlock from "./CommandBlock";
import type { Input } from "@constants/inputs.constants";
import EmptyCommandDisplay from "./EmptyCommandDisplay";

interface CommandDisplayProps {
  inputNotation: Input[][];
  inputLength: number;
  className?: string;
}

function CommandDisplay({
  inputNotation,
  inputLength,
  className,
}: CommandDisplayProps) {
  const isBorderVisible = inputNotation.length === 0;
  return (
    <section
      className={`flex gap-4 border-2 ${isBorderVisible ? "border-black border-dashed" : "border-transparent"} items-center justify-center rounded ${className}`}
    >
      {inputNotation.length === 0 ? (
        <EmptyCommandDisplay />
      ) : (
        inputNotation.map((inputSet) => (
          <CommandBlock inputSet={inputSet} inputLength={inputLength} />
        ))
      )}
    </section>
  );
}

export default CommandDisplay;
