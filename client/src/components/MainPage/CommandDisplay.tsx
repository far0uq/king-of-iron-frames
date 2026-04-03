import CommandBlock from "./CommandBlock";
import type { Input } from "@constants/inputs.constants";

interface CommandDisplayProps {
  inputNotation: Input[][];
}

function CommandDisplay({ inputNotation }: CommandDisplayProps) {
  return (
    <section className="inputs d-flex row justify-content-between col-8 mx-auto mt-5">
      {inputNotation.map((inputSet) => (
        <CommandBlock inputSet={inputSet} />
      ))}
    </section>
  );
}

export default CommandDisplay;
