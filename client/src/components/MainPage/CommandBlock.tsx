import { directionMapping } from "@constants/directions.constants";
import { inputsImageMap } from "@constants/inputs.constants";
import type { Input } from "@constants/inputs.constants";

type Props = {
  inputSet: Input[];
};

function CommandBlock({ inputSet }: Props) {
  return (
    <div>
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
