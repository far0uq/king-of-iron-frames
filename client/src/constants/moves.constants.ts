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
    inputLenght: 5,
  },
  {
    value: "SKYROCKET",
    associatedCharacter: CHARACTERS.HWAORANG,
    label: "Sky Rocket",
    inputNotation: [
      [INPUTS.RIGHT],
      [INPUTS.NEUTRAL],
      [INPUTS.DOWN],
      [INPUTS.DOWN_RIGHT, INPUTS.FOUR],
    ],
    inputLenght: 5,
  },
  {
    value: "SHINING_WIZARD",
    associatedCharacter: CHARACTERS.KING,
    label: "Blue-Spark Shining Wizard",
    inputNotation: [
      [INPUTS.RIGHT],
      [INPUTS.RIGHT],

      [INPUTS.RIGHT, INPUTS.TWO_FOUR],
    ],
    inputLenght: 4,
  },
  {
    value: "ACID_RAIN",
    associatedCharacter: CHARACTERS.LEE_CHAOLAN,
    label: "Acid Rain",
    inputNotation: [[INPUTS.ONE], [INPUTS.THREE, INPUTS.THREE, INPUTS.THREE]],
    inputLength: 4,
  },
];
