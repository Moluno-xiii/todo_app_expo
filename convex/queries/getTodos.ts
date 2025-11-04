import { query } from "../_generated/server";

export const getTodos = query({
  args: {},
  handler: async ({ db }) => {
    const todos = await db.query("todos").collect();

    return { todos };
  },
});
