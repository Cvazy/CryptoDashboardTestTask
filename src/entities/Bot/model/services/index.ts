import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "shared/index";
import { IBot } from "../types";

export const botListApi = createApi({
  reducerPath: "botListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchAllBots: builder.query<IBot[], void>({
      query: () => "/bots",
    }),
  }),
});

export const { useFetchAllBotsQuery } = botListApi;
