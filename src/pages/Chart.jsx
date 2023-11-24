import { QueryErrorResetBoundary } from "@tanstack/react-query";
import ChartUI from "./../components/chart/ChartUI";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import FallbackUI from "./../components/common/FallbackUI";
import Loading from "./../components/common/Loading";

const Chart = () => {
    return (
        <section className="w-1/3 h-96 rounded bg-gray-700 px-12 py-5 shadow-lg shadow-slate-950">
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary onReset={reset} fallbackRender={FallbackUI}>
                        <Suspense fallback={<Loading />}>
                            <ChartUI />
                        </Suspense>
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </section>
    );
};

export default Chart;
