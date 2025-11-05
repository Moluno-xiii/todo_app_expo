import { ActivityIndicator, View } from "react-native";
import useTheme from "../contexts/ThemeContext";

const Loading = () => {
  const { colour } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color={colour.text} />
    </View>
  );
};

export default Loading;
