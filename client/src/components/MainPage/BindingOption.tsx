import Button from "@components/ui/Button";
import { inputsImageMap } from "@constants/inputs.constants";
import type { Input } from "@constants/inputs.constants";
import { directionMapping } from "@constants/directions.constants";
import { basicInputsMapping } from "@constants/inputs.constants";

interface BindingOptionProps {
  input: Input;
  setActiveBinding: (activeBinding: Input | null) => void;
  activeBinding: Input | null;
}

function BindingOption({
  input,
  setActiveBinding,
  activeBinding,
}: BindingOptionProps) {
  const isActive = activeBinding === input;
  return (
    <div
      className={`grid grid-cols-2 justify-items-center gap-4 relative ${
        isActive ? "z-50" : "z-10"
      }`}
    >
      <div className="w-10 h-10">
        <img
          src={inputsImageMap[input]}
          style={{ transform: directionMapping[input] }}
        />
      </div>
      <Button onClick={() => setActiveBinding(input)}>
        {isActive ? "-" : basicInputsMapping[input][3]}
      </Button>
    </div>
  );
}

export default BindingOption;
