import { Suspense } from "react";
import FallbackUI from "../components/common/FallbackUI";
import SearchResult from "../components/home/SearchResult";
import SearchForm from "./../components/home/SearchForm";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "../components/common/Loading";

const Home = () => {
    return (
        <section className="w-1/3">
            <SearchForm />
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary onReset={reset} fallbackRender={FallbackUI}>
                        <Suspense fallback={<Loading />}>
                            <SearchResult />
                        </Suspense>
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </section>
    );
};

export default Home;
