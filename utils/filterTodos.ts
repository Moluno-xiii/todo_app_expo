import { Todo } from "../types";

const filterTodos = (criteria: Filter, todos: Todo[]) => {
  if (criteria === "all") {
    return todos;
  }

  return todos.filter((t) => t.status === criteria);
};

type Filter = "all" | "active" | "completed";

export default filterTodos;
export type { Filter };
