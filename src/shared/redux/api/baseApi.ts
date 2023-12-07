import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICurrencyData } from '../model';

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coinbase.com",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getCurrencies: builder.query<ICurrencyData, void>({
      query: () => "/v2/currencies",
    }),
  }),
});

export const { useGetCurrenciesQuery } = baseApi;
