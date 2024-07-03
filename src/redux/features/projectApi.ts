import { baseApi } from "../api/baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
      providesTags: ["project"],
    }),
  }),
});

export const { useGetAllProjectsQuery } = projectApi;
