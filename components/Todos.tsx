import { useMutation } from "convex/react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import useTheme from "../contexts/ThemeContext";
import { api } from "../convex/_generated/api";
import filterTodos, { Filter } from "../utils/filterTodos";
import FilterTodosCTA from "./FilterTodosCTA";
import TodosContainer from "./TodosContainer";

const Todos = () => {
  const { colour } = useTheme();
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const deleteCompleted = useMutation(
    api.mutations.clearCompletedTodos.clearcompletedTodos
  );

  const todos: { name: string; status: Filter; id: number }[] = [
    {
      name: "first todo",
      status: "completed",
      id: 1,
    },
    {
      name: "second todo",
      status: "active",
      id: 2,
    },
    {
      name: "third todo",
      status: "completed",
      id: 3,
    },
    {
      name: "fourth todo",
      status: "active",
      id: 4,
    },
  ];
  const filteredTodos = filterTodos(activeFilter, todos);

  if (!todos.length)
    return (
      <View>
        <Text style={{ ...styles.empty, color: colour.textSecondary }}>
          No Todos yet, add a todo to get started.
        </Text>
      </View>
    );

  return (
    <View style={styles.screen}>
      <View
        style={{
          ...styles.todosContainer,
          backgroundColor: colour.backgroundLight,
        }}
      >
        <TodosContainer filteredTodos={filteredTodos} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: colour.textSecondary,
              fontFamily: "josefin-regular",
            }}
          >
            5 items left
          </Text>
          <Text
            onPress={() => deleteCompleted()}
            style={{
              color: colour.textSecondary,
              fontFamily: "josefin-regular",
            }}
          >
            Clear Completed
          </Text>
        </View>
      </View>

      <FilterTodosCTA
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    gap: 16,
    paddingHorizontal: 24,
  },
  todosContainer: {
    flexDirection: "column",
    gap: 20,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },

  empty: { fontFamily: "josefin-regular-bold", textAlign: "center" },
});
