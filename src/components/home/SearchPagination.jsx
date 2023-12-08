import { useSearchStateStore } from "@/store/store";
import { Pagination } from "@mui/material";

const SearchPagination = () => {
    const { page, maxPage, setPage } = useSearchStateStore((state) => ({
        page: state.page,
        maxPage: state.maxPage,
        setPage: state.setPage,
    }));

    return (
        <Pagination
            count={maxPage}
            page={page}
            onChange={(_, page) => setPage(page)}
        />
    );
};

export default SearchPagination;
