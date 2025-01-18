import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "online",
      staleTime: 1000 * 60 * 60,
    },
  },
});

export default queryClient;
