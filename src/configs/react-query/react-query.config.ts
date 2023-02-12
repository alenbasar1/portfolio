import { QueryClientConfig } from "react-query";

export const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      suspense: false,
    },
    mutations: {
      retry: 0,
    },
  },
};
