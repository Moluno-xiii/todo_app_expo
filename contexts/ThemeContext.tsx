import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useColorScheme } from "react-native";
import colours, { Colour } from "../colours";

type ThemeContextType = {
  colour: Colour;
  theme: "dark" | "light";
  handleToggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const defaultTheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeContextType["theme"]>("light");
  console.log("defaultTheme", defaultTheme);
  const colour = colours[theme];

  useEffect(() => {
    (async () => {
      const storedTheme = await AsyncStorage.getItem("theme");

      if (storedTheme) {
        setTheme(storedTheme as "light" | "dark");
      } else {
        await AsyncStorage.setItem("theme", defaultTheme ?? "light");
        setTheme(defaultTheme ?? "light");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem("theme", theme);
    })();
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  const contextValues = { colour, theme, handleToggleTheme };

  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeContext was used outside of its scope.");
  return context;
};

export { ThemeProvider };
export default useTheme;
