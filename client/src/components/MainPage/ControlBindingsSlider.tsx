import BindingOption from "./BindingOption";
import { INPUTS, type Input } from "@constants/inputs.constants";
import Button from "@components/ui/Button";

interface ControlBindingsSliderProps {
  className?: string;
  setActiveBinding: (activeBinding: Input | null) => void;
  activeBinding: Input | null;
}

function ControlBindingsSlider({
  className,
  setActiveBinding,
  activeBinding,
}: ControlBindingsSliderProps) {
  return (
    <div className={className}>
      <BindingOption
        input={INPUTS.UP}
        setActiveBinding={setActiveBinding}
        activeBinding={activeBinding}
      />
      <BindingOption
        input={INPUTS.DOWN}
        setActiveBinding={setActiveBinding}
        activeBinding={activeBinding}
      />
      <BindingOption
        input={INPUTS.LEFT}
        setActiveBinding={setActiveBinding}
        activeBinding={activeBinding}
      />
      <BindingOption
        input={INPUTS.RIGHT}
        setActiveBinding={setActiveBinding}
        activeBinding={activeBinding}
      />
      <BindingOption
        input={INPUTS.ONE}
        setActiveBinding={setActiveBinding}
        activeBinding={activeBinding}
      />
      <BindingOption
        input={INPUTS.TWO}
        setActiveBinding={setActiveBinding}
        activeBinding={activeBinding}
      />
      <BindingOption
        input={INPUTS.THREE}
        setActiveBinding={setActiveBinding}
        activeBinding={activeBinding}
      />
      <BindingOption
        input={INPUTS.FOUR}
        setActiveBinding={setActiveBinding}
        activeBinding={activeBinding}
      />

      <Button onClick={() => setActiveBinding(null)} additionalClasses="h-10">
        Reset to Default
      </Button>
    </div>
  );
}

export default ControlBindingsSlider;
