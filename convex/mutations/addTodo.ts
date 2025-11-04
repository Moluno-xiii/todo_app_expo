import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const addTodo = mutation({
  args: {
    todo: v.object({
      name: v.string(),
      status: v.string(),
    }),
  },
  handler: async ({ db }, { todo }) => {
    const todoId = await db.insert("todos", {
      ...todo,
      dateCreated: new Date().toLocaleString(),
    });

    return {
      todoId,
      message: "Todo added successfully!",
    };
  },
});
