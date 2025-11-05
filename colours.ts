type Colour = {
  text: string;
  backgroundLight: string;
  backgroundDark: string;
  active: string;
  textInactive: string;
  border: string;
  textSecondary: string;
};

const colours: Record<"light" | "dark", Colour> = {
  light: {
    text: "#494C6B",
    backgroundLight: "#FFFFFF",
    backgroundDark: "#C2C3D680",
    active: "#3A7CFD",
    textInactive: "#D1D2DA",
    border: "#E3E4F1",
    textSecondary: "#9495A5",
  },
  dark: {
    text: "#C8CBE7",
    backgroundLight: "#25273D",
    backgroundDark: "#000000",
    active: "#3A7CFD",
    textInactive: "#4D5067",
    border: "#393A4B",
    textSecondary: "#5B5E7E",
  },
};

export type { Colour };
export default colours;
