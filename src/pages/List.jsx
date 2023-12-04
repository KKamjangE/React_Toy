import { QueryErrorResetBoundary } from "@tanstack/react-query";
import CenterList from "../components/list/CenterList";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import FallbackUI from "../components/common/FallbackUI";
import SkeletonCenterItem from "../components/skeleton/SkeletonCenterItem";
import ListFilter from "./../components/list/ListFilter";

const List = () => {
    return (
        <>
            <ListFilter />
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary onReset={reset} fallbackRender={FallbackUI}>
                        <Suspense fallback={<SkeletonCenterItem />}>
                            <CenterList />
                        </Suspense>
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </>
    );
};

export default List;
