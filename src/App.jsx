import Router from "./routes/Router";
import {
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import useApiError from "./hooks/queries/useApiError";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const { handleError } = useApiError();
    const queryClient = new QueryClient({
        defaultOptions: {
            mutations: {
                onError: handleError,
            },
            queries: {
                throwOnError: true,
            },
        },
        queryCache: new QueryCache({
            onError: handleError,
        }),
    });

    return (
        <QueryClientProvider client={queryClient}>
            <Router />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                closeOnClick
                pauseOnHover
                theme="light"
                limit={3}
            />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
