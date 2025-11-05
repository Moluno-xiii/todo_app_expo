import { useMutation } from "convex/react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { api } from "../convex/_generated/api";
import { Filter } from "../utils/filterTodos";
import CircularCheckbox from "./CircularCheckBox";
import useTheme from "../contexts/ThemeContext";

const TodosContainer = ({
  filteredTodos,
}: {
  filteredTodos: { name: string; id: number; status: Filter }[];
}) => {
  const { colour } = useTheme();
  const deleteTodo = useMutation(api.mutations.deleteTodo.deleteTodo);
  const updateTodoStatus = useMutation(
    api.mutations.updateTodoStatus.updateTodoStatus
  );
  return (
    <FlatList
      data={filteredTodos}
      renderItem={({ item }) => (
        <View
          style={{
            ...styles.todo,
            borderBottomColor: colour.border,
          }}
        >
          <CircularCheckbox
            checked={item.status === "completed"}
            onChange={() =>
              updateTodoStatus({
                status: item.status === "completed" ? "active" : "completed",
                todoId: item.id,
              })
            }
          />
          <Text
            style={{
              flex: 1,
              color:
                item.status === "completed" ? colour.textInactive : colour.text,
              textDecorationLine:
                item.status === "completed" ? "line-through" : "none",
              fontFamily: "josefin-regular",
            }}
          >
            {item.name}
          </Text>
          <TouchableWithoutFeedback onPress={() => deleteTodo}>
            <Image
              source={require("../assets/cancel_logo.png")}
              height={12}
              width={12}
            />
          </TouchableWithoutFeedback>
        </View>
      )}
    />
  );
};

export default TodosContainer;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  todo: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
});
