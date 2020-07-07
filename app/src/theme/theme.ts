import { DefaultTheme } from "styled-components";
const colors = {
  bg: "#fff",
  primary: "#124f5e",
  white: "#fff",
  secondary: "#1bb17c",
  error: "red",
};

const background = {
  footerbg: "#FFF",
};

const transitions = {
  normal: "0.5s",
};

const fontSize = {
  big: "6.4rem",
  span: "0.9rem",
  paragraph: "1.4rem",
  small: "1rem",
  ipadHeading: "4.4rem",
  semiHeading: "1.6rem",
};

const lineHeight = {
  big: "6.4rem",
  steps: "4.6rem",
  semiHeading: "2.0rem",
};

const font = {
  heading: "Tahoma",
  paragraph: "Open Sans",
  primary: "Open Sans",
};

const Theme: DefaultTheme = {
  colors,
  fontSize,
  transitions,
  font,
  lineHeight,
  background,
};

export default Theme;
