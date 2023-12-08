import { Suspense } from "react";
import FallbackUI from "@/components/common/FallbackUI";
import SearchResult from "@/components/home/SearchResult";
import SearchForm from "@/components/home/SearchForm";
import SkeletonCenterItem from "@/components/skeleton/SkeletonCenterItem";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import SearchPagination from "@/components/home/SearchPagination";
import { useSearchStateStore } from "@/store/store";

const Home = () => {
    const { perPage } = useSearchStateStore((state) => ({
        perPage: state.perPage,
    }));
    return (
        <>
            <SearchForm />
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary onReset={reset} fallbackRender={FallbackUI}>
                        <Suspense
                            fallback={Array(perPage).fill(
                                <SkeletonCenterItem />,
                            )}
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
