import { QueryErrorResetBoundary } from "@tanstack/react-query";
import MapUI from "./../components/map/MapUI";
import { Suspense } from "react";
import Loading from "../components/common/Loading";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUI from "../components/common/FallbackUI";

const Map = () => {
    return (
        <>
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary onReset={reset} fallbackRender={FallbackUI}>
                        <Suspense fallback={<Loading />}>
                            <MapUI />
                        </Suspense>
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </>
    );
};

export default Map;
