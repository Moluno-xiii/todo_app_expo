import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Todos from "../components/Todos";
import useTheme from "../contexts/ThemeContext";

const RootNavigator = () => {
  const { colour } = useTheme();

  return (
    <View
      style={{
        ...styles.screen,
        backgroundColor: colour.backgroundDark,
      }}
    >
      <Header />
      <View style={styles.todoContainer}>
        <Todos />
      </View>
      <Text
        style={{
          ...styles.text,
          color: colour.textSecondary,
        }}
      >
        Drag and drop to reorder list
      </Text>
    </View>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  screen: { flex: 1, fontSize: 12 },
  text: {
    textAlign: "center",
    marginBottom: 72,
    fontFamily: "josefin-regular",
  },
  todoContainer: { position: "relative", top: -30, flex: 1 },
});
