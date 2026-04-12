export const SECTIONS = {
  PRACTICE: "PRACTICE",
  CONTROLS: "CONTROLS",
  TIMER: "TIMER",
} as const;

export type Section = (typeof SECTIONS)[keyof typeof SECTIONS];
