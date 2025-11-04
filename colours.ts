type Colour = {
  text: string;
  backgroundLight: string;
  backgroundDark: string;
  active: string;
  textInactive: string;
};

const colours: Record<"light" | "dark", Colour> = {
  light: {
    text: "#494C6B",
    backgroundLight: "#FFFFFF",
    backgroundDark: "#C2C3D680",
    active: "#3A7CFD",
    textInactive: "#D1D2DA",
  },
  dark: {
    text: "#C8CBE7",
    backgroundLight: "#25273D",
    backgroundDark: "#000000",
    active: "#3A7CFD",
    textInactive: "#4D5067",
  },
};

export type { Colour };
export default colours;
