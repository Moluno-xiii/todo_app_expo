import { ConvexProvider, ConvexReactClient } from "convex/react";
import RootNavigator from "./screens/RootNavigator";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function App() {
  const [fontsLoaded] = useFonts({
    "josefin-regular": require("./fonts/JosefinSans-Regular.ttf"),
    "josefin-bold": require("./fonts/JosefinSans-Bold.ttf"),
  });

  if (!fontsLoaded)
    return (
      <View style={{ backgroundColor: "#f7f7f7" }}>
        <Text style={{ color: "#000000" }}>Loading...</Text>
      </View>
    );

  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <GestureHandlerRootView>
          <RootNavigator />
        </GestureHandlerRootView>
      </ThemeProvider>
    </ConvexProvider>
  );
}
