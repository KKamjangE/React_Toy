import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 100000,
            gcTime: 600000,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
    </QueryClientProvider>
);
