import { QueryErrorResetBoundary } from "@tanstack/react-query";
import ChartUI from "./../components/chart/ChartUI";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import FallbackUI from "./../components/common/FallbackUI";
import Loading from "./../components/common/Loading";

const Chart = () => {
    return (
        <QueryErrorResetBoundary>
            {({ reset }) => (
                <ErrorBoundary onReset={reset} fallbackRender={FallbackUI}>
                    <Suspense fallback={<Loading />}>
                        <ChartUI />
                    </Suspense>
                </ErrorBoundary>
            )}
        </QueryErrorResetBoundary>
    );
};

export default Chart;
