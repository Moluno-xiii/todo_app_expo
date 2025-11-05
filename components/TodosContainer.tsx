import { useMutation } from "convex/react";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import useTheme from "../contexts/ThemeContext";
import { api } from "../convex/_generated/api";
import { Id } from "../convex/_generated/dataModel";
import { Todo } from "../types";
import CircularCheckbox from "./CircularCheckBox";

const TodosContainer = ({ filteredTodos }: { filteredTodos: Todo[] }) => {
  const { colour } = useTheme();
  const [isDeleting, setIsDeleting] = useState("");
  const [isEditing, setIsEditing] = useState("");
  const deleteTodo = useMutation(api.mutations.deleteTodo.deleteTodo);
  const updateTodoStatus = useMutation(
    api.mutations.updateTodoStatus.updateTodoStatus
  );

  const onDeleteTodo = async (id: string) => {
    try {
      setIsDeleting(id);
      await deleteTodo({ todoId: id as Id<"todos"> });
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Unexpected error occured while deleting Todo.";
      Alert.alert(message);
    } finally {
      setIsDeleting("");
    }
  };

  const onUpdateTodoStatus = async (id: string, currentStatus: string) => {
    try {
      setIsEditing(id);
      await updateTodoStatus({
        status: currentStatus === "completed" ? "active" : "completed",
        todoId: id as Id<"todos">,
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Unexpected error occured while deleting Todo.";
      Alert.alert(message);
    } finally {
      setIsEditing("");
    }
  };

  if (filteredTodos.length < 1) return <Text>No item yet</Text>;

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
            onChange={() => onUpdateTodoStatus(item._id, item.status)}
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
            {isEditing === item._id
              ? "Editing, please wait..."
              : isDeleting === item._id
                ? "Deleting, please wait..."
                : item.name}
          </Text>
          <TouchableWithoutFeedback
            onPress={() => onDeleteTodo(item._id)}
            disabled={isEditing.length > 0 || isDeleting.length > 0}
          >
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
