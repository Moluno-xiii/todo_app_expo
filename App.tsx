import { ConvexProvider, ConvexReactClient } from "convex/react";
import RootNavigator from "./screens/RootNavigator";
import { ThemeProvider } from "./contexts/ThemeContext";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </ConvexProvider>
  );
}
