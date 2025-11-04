import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    name: v.string(),
    status: v.string(),
    dateCreated: v.string(),
  }),
});
