import centerAPI from "@/api/centerAPI";
import { queryKeys } from "@/contents/queryKeys";
import { useSearchStateStore } from "@/store/store";
import { Pagination } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const SearchPagination = () => {
    const { page, perPage, maxPage, setPage } = useSearchStateStore(
        (state) => ({
            page: state.page,
            perPage: state.perPage,
            maxPage: state.maxPage,
            setPage: state.setPage,
        }),
    );
    const queryClient = useQueryClient();
    useEffect(() => {
        if (page < maxPage) {
            // 다음 페이지에 대한 데이터 미리 캐싱
            queryClient.prefetchQuery({
                queryKey: [queryKeys.getSearchCenters, page + 1, perPage],
                queryFn: () => centerAPI.getSearchCenters(page + 1, perPage),
            });
        }
        if (1 < page) {
            // 이전 페이지에 대한 데이터 미리 캐싱
            queryClient.prefetchQuery({
                queryKey: [queryKeys.getSearchCenters, page - 1, perPage],
                queryFn: () => centerAPI.getSearchCenters(page - 1, perPage),
            });
        }
    }, [page, perPage, queryClient, maxPage]);

    return (
        <Pagination
            count={maxPage}
            page={page}
            onChange={(_, page) => setPage(page)}
        />
    );
};

export default SearchPagination;
