import { theme as t, Theme } from "@chakra-ui/react";
import { getColor } from "@chakra-ui/theme-tools";

const getTheColor = (key: keyof Theme["colors"]): null =>
  // Trying to trigger tsc type errors however cli seems to skip over them. Intended? (Present in v1.3.0)
  getColor(t, key) as string;

export const colors = {
  green: "#234239",
  red: getTheColor("someNotColor"),
};
