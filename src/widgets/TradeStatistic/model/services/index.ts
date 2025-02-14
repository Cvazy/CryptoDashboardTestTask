import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "shared/index";
import { IData } from "../types";

export const tradeStatisticApi = createApi({
  reducerPath: "tradeStatisticApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchAllCurrencyData: builder.query<IData, void>({
      query: () => "/data",
    }),
  }),
});

export const { useFetchAllCurrencyDataQuery } = tradeStatisticApi;
