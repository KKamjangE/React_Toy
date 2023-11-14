import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./page/Home";
import List from "./page/List";
import Sign from "./page/Sign";
import Layout from "./components/common/Layout";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import useApiHandler from "./hooks/queries/useApiError";
import InternalServerError from "./page/InternalServerError";

function App() {
    const { handleError } = useApiHandler();

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                throwOnError: handleError,
            },
            mutations: {
                onError: handleError,
            },
        },
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
                            <Route
                                path="/500"
                                element={<InternalServerError />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
