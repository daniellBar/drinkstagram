import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { FunctionComponent } from "react";
import { router } from "./router/Router";
import { GlobalStyle } from "./globalStyles";

const App: FunctionComponent = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <SnackbarProvider
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
      >
        <RouterProvider router={router} />
      </SnackbarProvider>
    </QueryClientProvider>
  );
};

export default App;
