import { QueryErrorResetBoundary } from "@tanstack/react-query";
import ChartUI from "./../components/chart/ChartUI";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import FallbackUI from "./../components/common/FallbackUI";
import SkeletonChart from "../components/skeleton/SkeletonChart";

const Chart = () => {
    return (
        <QueryErrorResetBoundary>
            {({ reset }) => (
                <ErrorBoundary onReset={reset} fallbackRender={FallbackUI}>
                    <Suspense fallback={<SkeletonChart />}>
                        <ChartUI />
                    </Suspense>
                </ErrorBoundary>
            )}
        </QueryErrorResetBoundary>
    );
};

export default Chart;
