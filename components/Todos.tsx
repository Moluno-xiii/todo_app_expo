import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import useTheme from "../contexts/ThemeContext";

const Todos = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { colour } = useTheme();
  return (
    <View style={styles.screen}>
      <View
        style={{
          height: 200,
          backgroundColor: colour.backgroundLight,
          borderRadius: 8,
          marginBottom: 8,
        }}
      ></View>
      {/* <View> */}
      <FlatList
        contentContainerStyle={{
          backgroundColor: colour.backgroundLight,
          borderRadius: 8,
          paddingVertical: 15,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 20,
        }}
        data={filters}
        renderItem={({ item }) => (
          <Text
            onPress={() => setActiveFilter(item)}
            style={{
              color:
                activeFilter === item ? colour.active : colour.textInactive,
              textTransform: "uppercase",
            }}
          >
            {item}
          </Text>
        )}
      />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    columnGap: 16,
    paddingHorizontal: 24,
  },
});

const filters = ["all", "active", "completed"];
