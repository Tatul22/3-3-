import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// BEGIN (write your solution here)
export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "api/tasks",
      providesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: (body) => ({
        url: "api/tasks",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `api/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
// END
