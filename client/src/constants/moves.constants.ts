import { INPUTS } from "@constants/inputs.constants";
import { CHARACTERS } from "@constants/characters.constants";

export const movelist = [
  {
    value: "EWGF",
    associatedCharacter: CHARACTERS.DEVIL_JIN,
    label: "EWGF",
    inputNotation: [
      [INPUTS.RIGHT],
      [INPUTS.NEUTRAL],
      [INPUTS.DOWN],
      [INPUTS.DOWN_RIGHT, INPUTS.TWO],
    ],
  },
  {
    value: "SKYROCKET",
    associatedCharacter: CHARACTERS.HWAORANG,
    label: "Sky Rocket",
    inputNotation: [
      [INPUTS.RIGHT],
      [INPUTS.NEUTRAL],
      [INPUTS.DOWN],
      [INPUTS.DOWN_RIGHT, INPUTS.TWO],
    ],
  },
  {
    value: "SHINING_WIZARD",
    associatedCharacter: CHARACTERS.KING,
    label: "Blue-Spark Shining Wizard",
    inputNotation: [
      [INPUTS.RIGHT],
      [INPUTS.NEUTRAL],
      [INPUTS.DOWN],
      [INPUTS.DOWN_RIGHT, INPUTS.TWO],
    ],
  },
];
