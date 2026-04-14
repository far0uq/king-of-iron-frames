import Button from "@components/ui/Button";
import { inputsImageMap } from "@constants/inputs.constants";
import type { Input } from "@constants/inputs.constants";
import { directionMapping } from "@constants/directions.constants";
import { basicInputsMapping } from "@constants/inputs.constants";

interface BindingOptionProps {
  input: Input;
}

function BindingOption({ input }: BindingOptionProps) {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-4">
      <div className="w-10 h-10 ">
        <img
          src={inputsImageMap[input]}
          style={{ transform: directionMapping[input] }}
        />
      </div>
      <Button>{basicInputsMapping[input][3]}</Button>
    </div>
  );
}

export default BindingOption;
