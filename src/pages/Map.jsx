import { QueryErrorResetBoundary } from "@tanstack/react-query";
import MapUI from "@/components/map/MapUI";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUI from "@/components/common/FallbackUI";
import SkeletonMap from "@/components/skeleton/SkeletonMap";

const Map = () => {
    return (
        <QueryErrorResetBoundary>
            {({ reset }) => (
                <ErrorBoundary onReset={reset} fallbackRender={FallbackUI}>
                    <Suspense fallback={<SkeletonMap />}>
                        <MapUI />
                    </Suspense>
                </ErrorBoundary>
            )}
        </QueryErrorResetBoundary>
    );
};

export default Map;
