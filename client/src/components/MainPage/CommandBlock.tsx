import { directionMapping } from "@constants/directions.constants";
import { inputsImageMap } from "@constants/inputs.constants";
import type { Input } from "@constants/inputs.constants";

type Props = {
  inputSet: Input[];
  inputLength: number;
  className?: string;
};

function CommandBlock({ inputSet, inputLength, className }: Props) {
  return (
    <div
      className={`h-full grid grid-flow-col content-center bg-black rounded w-${inputSet.length / inputLength} ${className}`}
    >
      {inputSet.map((input) => (
        <img
          src={inputsImageMap[input]}
          style={{ transform: directionMapping[input] }}
        />
      ))}
    </div>
  );
}

export default CommandBlock;
