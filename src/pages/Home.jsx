import { Suspense } from "react";
import FallbackUI from "../components/common/FallbackUI";
import SearchResult from "../components/home/SearchResult";
import SearchForm from "./../components/home/SearchForm";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import SkeletonCenterItem from "../components/skeleton/SkeletonCenterItem";

const Home = () => {
    return (
        <>
            <SearchForm />
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary onReset={reset} fallbackRender={FallbackUI}>
                        <Suspense fallback={<SkeletonCenterItem />}>
                            <SearchResult />
                        </Suspense>
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </>
    );
};

export default Home;
