import CenterList from "../components/list/CenterList";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import FallbackUI from "../components/common/FallbackUI";

const List = () => {
    return (
        <section className="w-1/3">
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary
                        onReset={reset}
                        FallbackComponent={FallbackUI}
                    >
                        <CenterList />
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </section>
    );
};

export default List;
