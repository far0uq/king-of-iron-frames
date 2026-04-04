import CommandBlock from "./CommandBlock";
import type { Input } from "@constants/inputs.constants";
import EmptyCommandDisplay from "./EmptyCommandDisplay";

interface CommandDisplayProps {
  inputNotation: Input[][];
  className?: string;
}

function CommandDisplay({ inputNotation, className }: CommandDisplayProps) {
  return (
    <section
      className={`grid border-2 border-black border-dashed content-center justify-items-center rounded ${className}`}
    >
      {inputNotation.length === 0 ? (
        <EmptyCommandDisplay />
      ) : (
        inputNotation.map((inputSet) => <CommandBlock inputSet={inputSet} />)
      )}
    </section>
  );
}

export default CommandDisplay;
