import CenterList from "../components/list/CenterList";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUI from "../components/common/FallbackUI";
import { Suspense } from "react";
import Loading from "../components/common/Loading";

const List = () => {
    return (
        <section className="w-1/3">
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary onReset={reset} fallbackRender={FallbackUI}>
                        <Suspense fallback={<Loading />}>
                            <CenterList />
                        </Suspense>
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </section>
    );
};

export default List;
