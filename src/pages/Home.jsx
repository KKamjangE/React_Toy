import FallbackUI from "../components/common/FallbackUI";
import SearchResult from "../components/home/SearchResult";
import SearchForm from "./../components/home/SearchForm";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

const Home = () => {
    return (
        <section className="w-1/3">
            <SearchForm />
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary
                        onReset={reset}
                        FallbackComponent={FallbackUI}
                    >
                        <SearchResult />
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </section>
    );
};

export default Home;
