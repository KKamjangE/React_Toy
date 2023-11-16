import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./page/Home";
import List from "./page/List";
import Sign from "./page/Sign";
import Layout from "./components/common/Layout";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
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
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route element={<PrivateRoute />}>
                            <Route path="/list" element={<List />} />
                        </Route>
                        <Route element={<PublicRoute />}>
                            <Route path="/sign" element={<Sign />} />
                        </Route>
                    </Route>
                </Routes>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    closeOnClick
                    pauseOnHover
                    theme="light"
                    limit={3}
                />
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
