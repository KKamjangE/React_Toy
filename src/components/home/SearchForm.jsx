import { useQueryClient } from "@tanstack/react-query";
import { useSearchStateStore } from "../../store/store";
import Button from "../common/Button";
import { queryKeys } from "../../contents/queryKeys";

const SearchForm = () => {
    const { page, perPage, setPage, setPerPage } = useSearchStateStore();

    const queryClient = useQueryClient();

    const handleSearch = () => {
        queryClient.fetchQuery({ queryKey: [queryKeys.getSearchCenters] });
    };

    return (
        <div className="flex justify-between items-end gap-5 rounded bg-gray-700 shadow-lg shadow-slate-950 px-12 py-5 mb-5">
            <div className="flex gap-5">
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="page" className="text-xs">
                        Page
                    </label>
                    <input
                        type="text"
                        id="page"
                        value={page}
                        onChange={(e) => setPage(e.target.value)}
                        className="border-solid border-2 rounded w-36 px-2 py-1 text-sm"
                    />
                </div>
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="page" className="text-xs">
                        PerPage
                    </label>
                    <input
                        type="text"
                        id="page"
                        value={perPage}
                        onChange={(e) => setPerPage(e.target.value)}
                        className="border-solid border-2 rounded w-36 px-2 py-1 text-sm"
                    />
                </div>
            </div>
            <Button text={"조회"} clickEvent={handleSearch} />
        </div>
    );
};

export default SearchForm;
