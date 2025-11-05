import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const updateTodoStatus = mutation({
  args: {
    todoId: v.id("todos"),
    status: v.string(),
  },
  handler: async ({ db }, { todoId, status }) => {
    await db.patch(todoId, { status });

    return {
      message: "Todo updated successfully!",
    };
  },
});
