import CommandBlock from "./CommandBlock";

interface CommandDisplayProps {
  inputNotation: string[];
}

function CommandDisplay({ inputNotation }: CommandDisplayProps) {
  return (
    <section className="inputs d-flex row justify-content-between col-8 mx-auto mt-5">
      {inputNotation.map((input) => (
        <CommandBlock command={input} />
      ))}
    </section>
  );
}

export default CommandDisplay;
