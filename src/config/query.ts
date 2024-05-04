import { QueryCache, QueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      refetchOnReconnect: false,
    },
  },
  
});

export default queryClient;
