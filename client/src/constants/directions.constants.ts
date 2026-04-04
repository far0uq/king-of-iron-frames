import { INPUTS } from "@constants/inputs.constants";

export const directionMapping: Record<string, string> = {
  [INPUTS.UP_LEFT]: "rotate(-135deg)",
  [INPUTS.UP]: "rotate(-90deg)",
  [INPUTS.UP_RIGHT]: "rotate(-45deg)",
  [INPUTS.RIGHT]: "rotate(0deg)",
  [INPUTS.DOWN_RIGHT]: "rotate(45deg)",
  [INPUTS.DOWN]: "rotate(90deg)",
  [INPUTS.DOWN_LEFT]: "rotate(135deg)",
  [INPUTS.LEFT]: "rotate(180deg)",
};
