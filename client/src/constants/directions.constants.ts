import { INPUTS } from "@constants/inputs.constants";

export const directionMapping: Record<string, string> = {
  [INPUTS.UP]: "rotate(0deg)",
  [INPUTS.UP_LEFT]: "rotate(315deg)",
  [INPUTS.UP_RIGHT]: "rotate(45deg)",

  [INPUTS.RIGHT]: "rotate(90deg)",
  [INPUTS.LEFT]: "rotate(270deg)",

  [INPUTS.DOWN]: "rotate(180deg)",
  [INPUTS.DOWN_LEFT]: "rotate(225deg)",
  [INPUTS.DOWN_RIGHT]: "rotate(45deg)",
};
