/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as mutations_addTodo from "../mutations/addTodo.js";
import type * as mutations_clearCompletedTodos from "../mutations/clearCompletedTodos.js";
import type * as mutations_deleteTodo from "../mutations/deleteTodo.js";
import type * as mutations_updateTodoStatus from "../mutations/updateTodoStatus.js";
import type * as queries_getTodos from "../queries/getTodos.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "mutations/addTodo": typeof mutations_addTodo;
  "mutations/clearCompletedTodos": typeof mutations_clearCompletedTodos;
  "mutations/deleteTodo": typeof mutations_deleteTodo;
  "mutations/updateTodoStatus": typeof mutations_updateTodoStatus;
  "queries/getTodos": typeof queries_getTodos;
}>;
declare const fullApiWithMounts: typeof fullApi;

export declare const api: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "internal">
>;

export declare const components: {};
