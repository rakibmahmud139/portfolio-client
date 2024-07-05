import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-server-chi-lemon.vercel.app/api/",
  }),
  tagTypes: ["project", "skill", "blog"],
  endpoints: () => ({}),
});
