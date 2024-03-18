// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const mineApi = createApi({
  reducerPath: "mineApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/" }),
  endpoints: (builder) => ({
    getMine: builder.query({
      query: () => `coin/`,
    }),
    getMineById: builder.query({
      query: (id) => `coin/${id}/`,
      providesTags: (result, error, id) => [{ type: "Mining", id }],
    }),
    spinById: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ id, formData }) => ({
        url: `coin/${id}/`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Mining", id }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMineQuery, useGetMineByIdQuery, useSpinByIdMutation } =
  mineApi;
