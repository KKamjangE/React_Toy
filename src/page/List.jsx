import CenterList from "../components/list/CenterList";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

const List = () => {
    return (
        <section className="w-1/3">
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary
                        onReset={reset}
                        fallbackRender={({ resetErrorBoundary }) => (
                            <div>
                                There was an error!
                                <button onClick={() => resetErrorBoundary()}>
                                    Try again
                                </button>
                            </div>
                        )}
                    >
                        <CenterList />
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </section>
    );
};

export default List;
