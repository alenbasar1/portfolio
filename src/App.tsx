import { useLayoutEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { queryConfig } from "./configs/react-query/react-query.config";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const queryClient = new QueryClient(queryConfig);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
