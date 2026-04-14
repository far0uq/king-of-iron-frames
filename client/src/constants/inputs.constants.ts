import direction from "@assets/direction.png";
import direction_held from "@assets/direction_held.png";
import neutral from "@assets/neutral.png";
import two from "@assets/two.png";
import one from "@assets/one.png";
import three from "@assets/three.png";
import four from "@assets/four.png";
import one_two from "@assets/one_two.png";
import one_three from "@assets/one_three.png";
import one_four from "@assets/one_four.png";
import two_three from "@assets/two_three.png";
import two_four from "@assets/two_four.png";
import three_four from "@assets/three_four.png";
import all_four from "@assets/all_four.png";
import one_two_three from "@assets/one_two_three.png";
import one_two_four from "@assets/one_two_four.png";
import two_three_four from "@assets/two_three_four.png";

export const INPUTS = {
  NEUTRAL: "NEUTRAL",

  ONE: "ONE",
  TWO: "TWO",
  THREE: "THREE",
  FOUR: "FOUR",

  // Combos
  ONE_TWO: "ONE_TWO",
  ONE_THREE: "ONE_THREE",
  ONE_FOUR: "ONE_FOUR",
  TWO_THREE: "TWO_THREE",
  TWO_FOUR: "TWO_FOUR",
  THREE_FOUR: "THREE_FOUR",

  ONE_TWO_THREE: "ONE_TWO_THREE",
  ONE_TWO_FOUR: "ONE_TWO_FOUR",
  TWO_THREE_FOUR: "TWO_THREE_FOUR",

  ONE_TWO_THREE_FOUR: "ONE_TWO_THREE_FOUR",

  // directions
  UP: "UP",
  UP_HELD: "UP_HELD",
  DOWN: "DOWN",
  DOWN_HELD: "DOWN_HELD",
  LEFT: "LEFT",
  LEFT_HELD: "LEFT_HELD",
  RIGHT: "RIGHT",
  RIGHT_HELD: "RIGHT_HELD",

  UP_LEFT: "UP_LEFT",
  UP_LEFT_HELD: "UP_LEFT_HELD",
  UP_RIGHT: "UP_RIGHT",
  UP_RIGHT_HELD: "UP_RIGHT_HELD",
  DOWN_LEFT: "DOWN_LEFT",
  DOWN_LEFT_HELD: "DOWN_LEFT_HELD",
  DOWN_RIGHT: "DOWN_RIGHT",
  DOWN_RIGHT_HELD: "DOWN_RIGHT_HELD",
} as const;

export type Input = keyof typeof INPUTS;

export const inputsImageMap: Record<Input, string> = {
  [INPUTS.NEUTRAL]: neutral,
  [INPUTS.ONE]: one,
  [INPUTS.TWO]: two,
  [INPUTS.THREE]: three,
  [INPUTS.FOUR]: four,

  [INPUTS.ONE_TWO]: one_two,
  [INPUTS.ONE_THREE]: one_three,
  [INPUTS.ONE_FOUR]: one_four,

  [INPUTS.TWO_THREE]: two_three,
  [INPUTS.TWO_FOUR]: two_four,

  [INPUTS.THREE_FOUR]: three_four,

  [INPUTS.ONE_TWO_THREE]: one_two_three,
  [INPUTS.ONE_TWO_FOUR]: one_two_four,
  [INPUTS.TWO_THREE_FOUR]: two_three_four,

  [INPUTS.ONE_TWO_THREE_FOUR]: all_four,

  [INPUTS.UP]: direction,
  [INPUTS.UP_HELD]: direction_held,
  [INPUTS.DOWN]: direction,
  [INPUTS.DOWN_HELD]: direction_held,
  [INPUTS.LEFT]: direction,
  [INPUTS.LEFT_HELD]: direction_held,
  [INPUTS.RIGHT]: direction,
  [INPUTS.RIGHT_HELD]: direction_held,
  [INPUTS.UP_LEFT]: direction,
  [INPUTS.UP_LEFT_HELD]: direction_held,
  [INPUTS.UP_RIGHT]: direction,
  [INPUTS.UP_RIGHT_HELD]: direction_held,
  [INPUTS.DOWN_LEFT]: direction,
  [INPUTS.DOWN_LEFT_HELD]: direction_held,
  [INPUTS.DOWN_RIGHT]: direction,
  [INPUTS.DOWN_RIGHT_HELD]: direction_held,
};

export const Keys: Record<string, string> = {
  // Letters
  ...Object.fromEntries(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((c) => [c, `Key${c}`]),
  ),

  // Digits
  ...Object.fromEntries(
    "0123456789".split("").map((n) => [`N${n}`, `Digit${n}`]),
  ),

  // Arrows
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",

  // Modifiers & System
  SPACE: "Space",
  ENTER: "Enter",
  ESCAPE: "Escape",
  SHIFT: "ShiftLeft",
  CTRL: "ControlLeft",
  ALT: "AltLeft",
  BACKSPACE: "Backspace",
  TAB: "Tab",

  // Brackets/Misc (Useful for "Reset Position" shortcuts)
  L_BRACKET: "BracketLeft",
  R_BRACKET: "BracketRight",
  COMMA: "Comma",
  PERIOD: "Period",
  SLASH: "Slash",
};

export const basicInputsMapping: Record<string, string> = {
  [INPUTS.UP]: Keys.W,
  [INPUTS.DOWN]: Keys.S,
  [INPUTS.LEFT]: Keys.A,
  [INPUTS.RIGHT]: Keys.D,
  [INPUTS.ONE]: Keys.U,
  [INPUTS.TWO]: Keys.I,
  [INPUTS.THREE]: Keys.J,
  [INPUTS.FOUR]: Keys.K,
};

const jointInputsMapping: Record<string, string[]> = {
  // Diagonals
  [INPUTS.UP_LEFT]: [
    basicInputsMapping[INPUTS.UP],
    basicInputsMapping[INPUTS.LEFT],
  ],
  [INPUTS.UP_RIGHT]: [
    basicInputsMapping[INPUTS.UP],
    basicInputsMapping[INPUTS.RIGHT],
  ],
  [INPUTS.DOWN_LEFT]: [
    basicInputsMapping[INPUTS.DOWN],
    basicInputsMapping[INPUTS.LEFT],
  ],
  [INPUTS.DOWN_RIGHT]: [
    basicInputsMapping[INPUTS.DOWN],
    basicInputsMapping[INPUTS.RIGHT],
  ],

  // Button Combinations
  [INPUTS.ONE_TWO]: [
    basicInputsMapping[INPUTS.ONE],
    basicInputsMapping[INPUTS.TWO],
  ],
  [INPUTS.ONE_THREE]: [
    basicInputsMapping[INPUTS.ONE],
    basicInputsMapping[INPUTS.THREE],
  ],
  [INPUTS.ONE_FOUR]: [
    basicInputsMapping[INPUTS.ONE],
    basicInputsMapping[INPUTS.FOUR],
  ],
  [INPUTS.TWO_THREE]: [
    basicInputsMapping[INPUTS.TWO],
    basicInputsMapping[INPUTS.THREE],
  ],
  [INPUTS.TWO_FOUR]: [
    basicInputsMapping[INPUTS.TWO],
    basicInputsMapping[INPUTS.FOUR],
  ],
  [INPUTS.THREE_FOUR]: [
    basicInputsMapping[INPUTS.THREE],
    basicInputsMapping[INPUTS.FOUR],
  ],

  // Multi-Button Combinations
  [INPUTS.ONE_TWO_THREE]: [
    basicInputsMapping[INPUTS.ONE],
    basicInputsMapping[INPUTS.TWO],
    basicInputsMapping[INPUTS.THREE],
  ],
  [INPUTS.ONE_TWO_FOUR]: [
    basicInputsMapping[INPUTS.ONE],
    basicInputsMapping[INPUTS.TWO],
    basicInputsMapping[INPUTS.FOUR],
  ],
  [INPUTS.TWO_THREE_FOUR]: [
    basicInputsMapping[INPUTS.TWO],
    basicInputsMapping[INPUTS.THREE],
    basicInputsMapping[INPUTS.FOUR],
  ],
  [INPUTS.ONE_TWO_THREE_FOUR]: [
    basicInputsMapping[INPUTS.ONE],
    basicInputsMapping[INPUTS.TWO],
    basicInputsMapping[INPUTS.THREE],
    basicInputsMapping[INPUTS.FOUR],
  ],
};
