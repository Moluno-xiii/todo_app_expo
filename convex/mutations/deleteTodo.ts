import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const deleteTodo = mutation({
  args: {
    todoId: v.id("todos"),
  },
  handler: async ({ db }, { todoId }) => {
    await db.delete(todoId);

    return {
      message: "Todo deleted successfully!",
    };
  },
});
