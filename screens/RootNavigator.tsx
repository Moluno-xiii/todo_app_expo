import { useQuery } from "convex/react";
import { StyleSheet, View, Text } from "react-native";
import { api } from "../convex/_generated/api";
import Header from "../components/Header";
import Todos from "../components/Todos";
import useTheme from "../contexts/ThemeContext";

const RootNavigator = () => {
  //   const todos = useQuery(api.queries.getTodos.getTodos);
  const todos = {};
  const { colour } = useTheme();

  if (!todos)
    return (
      <View style={styles.screen}>
        <Text style={{ marginTop: 40, color: colour.textInactive }}>
          No todos yet, try again to add todos
        </Text>
      </View>
    );

  return (
    <View
      style={{
        ...styles.screen,
        backgroundColor: colour.backgroundDark,
      }}
    >
      <Header />
      <View style={{ position: "relative", top: -30 }}>
        <Todos />
      </View>
      <Text
        style={{
          marginTop: 40,
          color: colour.textInactive,
          textAlign: "center",
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
});
