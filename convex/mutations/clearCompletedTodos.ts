import { mutation } from "../_generated/server";

export const clearcompletedTodos = mutation({
  args: {},
  handler: async ({ db }) => {
    const completedTodos = await db
      .query("todos")
      .filter((q) => q.eq(q.field("status"), "completed"))
      .collect();

    for (const todo of completedTodos) {
      await db.delete(todo._id);
    }

    return {
      message: `Deleted ${completedTodos.length} todos successfully.`,
    };
  },
});
