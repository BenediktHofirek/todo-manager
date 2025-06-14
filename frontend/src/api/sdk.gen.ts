// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from "./client";
import type {
  HealthData,
  HealthResponses,
  GetTodosData,
  GetTodosResponses,
  CreateTodoData,
  CreateTodoResponses,
  CreateTodoErrors,
  DeleteTodoData,
  DeleteTodoResponses,
  DeleteTodoErrors,
  GetTodoByIdData,
  GetTodoByIdResponses,
  GetTodoByIdErrors,
  UpdateTodoData,
  UpdateTodoResponses,
  UpdateTodoErrors,
} from "./types.gen";
import { client as _heyApiClient } from "./client.gen";

export type Options<
  TData extends TDataShape = TDataShape,
  ThrowOnError extends boolean = boolean,
> = ClientOptions<TData, ThrowOnError> & {
  /**
   * You can provide a client instance returned by `createClient()` instead of
   * individual options. This might be also useful if you want to implement a
   * custom client.
   */
  client?: Client;
  /**
   * You can pass arbitrary values through the `meta` object. This can be
   * used to access values that aren't defined as part of the SDK function.
   */
  meta?: Record<string, unknown>;
};

/**
 * Health
 */
export const health = <ThrowOnError extends boolean = false>(
  options?: Options<HealthData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    HealthResponses,
    unknown,
    ThrowOnError
  >({
    url: "/api/health",
    ...options,
  }).then((response) => response.data as Exclude<typeof response.data, undefined>);
};

/**
 * Get Todos
 */
export const getTodos = <ThrowOnError extends boolean = false>(
  options?: Options<GetTodosData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetTodosResponses,
    unknown,
    ThrowOnError
  >({
    url: "/api/todos",
    ...options,
  }).then((response) => response.data as Exclude<typeof response.data, undefined>);
};

/**
 * Create Todo
 */
export const createTodo = <ThrowOnError extends boolean = false>(
  options: Options<CreateTodoData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).post<
    CreateTodoResponses,
    CreateTodoErrors,
    ThrowOnError
  >({
    url: "/api/todos",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  }).then((response) => response.data as Exclude<typeof response.data, undefined>);
};

/**
 * Delete Todo
 */
export const deleteTodo = <ThrowOnError extends boolean = false>(
  options: Options<DeleteTodoData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).delete<
    DeleteTodoResponses,
    DeleteTodoErrors,
    ThrowOnError
  >({
    url: "/api/todos/{id}",
    ...options,
  }).then((response) => response.data as Exclude<typeof response.data, undefined>);
};

/**
 * Get Todo By Id
 */
export const getTodoById = <ThrowOnError extends boolean = false>(
  options: Options<GetTodoByIdData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<
    GetTodoByIdResponses,
    GetTodoByIdErrors,
    ThrowOnError
  >({
    url: "/api/todos/{id}",
    ...options,
  }).then((response) => response.data as Exclude<typeof response.data, undefined>);
};

/**
 * Update Todo
 */
export const updateTodo = <ThrowOnError extends boolean = false>(
  options: Options<UpdateTodoData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).put<
    UpdateTodoResponses,
    UpdateTodoErrors,
    ThrowOnError
  >({
    url: "/api/todos/{id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  }).then((response) => response.data as Exclude<typeof response.data, undefined>);
};
