import { Suspense } from "react";
import FallbackUI from "@/components/common/FallbackUI";
import SearchResult from "@/components/home/SearchResult";
import SearchForm from "@/components/home/SearchForm";
import SkeletonCenterItem from "@/components/skeleton/SkeletonCenterItem";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import SearchPagination from "@/components/home/SearchPagination";

const Home = () => {
    return (
        <>
            <SearchForm />
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary onReset={reset} fallbackRender={FallbackUI}>
                        <Suspense
                            fallback={Array(10).fill(<SkeletonCenterItem />)}
                        >
                            <SearchResult />
                            <SearchPagination />
                        </Suspense>
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </>
    );
};

export default Home;
