import BindingOption from "./BindingOption";
import { INPUTS } from "@constants/inputs.constants";

interface ControlBindingsSliderProps {
  className?: string;
}

function ControlBindingsSlider({ className }: ControlBindingsSliderProps) {
  return (
    <div className={className}>
      <BindingOption input={INPUTS.UP} />
      <BindingOption input={INPUTS.DOWN} />
      <BindingOption input={INPUTS.LEFT} />
      <BindingOption input={INPUTS.RIGHT} />
      <BindingOption input={INPUTS.ONE} />
      <BindingOption input={INPUTS.TWO} />
      <BindingOption input={INPUTS.THREE} />
      <BindingOption input={INPUTS.FOUR} />
    </div>
  );
}

export default ControlBindingsSlider;
