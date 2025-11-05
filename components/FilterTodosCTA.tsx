import { StyleSheet, View, Text, FlatList } from "react-native";
import { Filter } from "../utils/filterTodos";
import useTheme from "../contexts/ThemeContext";
import { Dispatch, SetStateAction } from "react";

const filters: Filter[] = ["all", "active", "completed"];

const FilterTodosCTA = ({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: Filter;
  setActiveFilter: Dispatch<SetStateAction<Filter>>;
}) => {
  const { colour } = useTheme();
  return (
    <FlatList
      contentContainerStyle={{
        ...styles.filterContainer,
        backgroundColor: colour.backgroundLight,
      }}
      data={filters}
      renderItem={({ item }) => (
        <Text
          onPress={() => setActiveFilter(item)}
          style={{
            ...styles.filterButton,
            color: activeFilter === item ? colour.active : colour.textInactive,
          }}
        >
          {item}
        </Text>
      )}
    />
  );
};

export default FilterTodosCTA;

const styles = StyleSheet.create({
  filterContainer: {
    borderRadius: 8,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  filterButton: {
    textTransform: "capitalize",
    fontFamily: "josefin-bold",
  },
});
