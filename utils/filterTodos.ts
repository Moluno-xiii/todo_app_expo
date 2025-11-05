const filterTodos = (
  criteria: Filter,
  todos: { status: Filter; name: string; id: number }[]
) => {
  if (criteria === "all") {
    return todos;
  }

  return todos.filter((t) => t.status === criteria);
};

type Filter = "all" | "active" | "completed";

export default filterTodos;
export type { Filter };
