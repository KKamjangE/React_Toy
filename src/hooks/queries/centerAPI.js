import {
    useQueryClient,
    useMutation,
    useSuspenseQuery,
} from "@tanstack/react-query";
import centerAPI from "../../api/centerAPI";
import { queryKeys } from "../../contents/queryKeys";
import { useSearchStateStore } from "../../store/store";

export const useGetSearchCenters = () => {
    const { page, perPage } = useSearchStateStore((state) => ({
        page: state.page,
        perPage: state.perPage,
    }));

    const { data } = useSuspenseQuery({
        queryKey: [queryKeys.getSearchCenters],
        queryFn: () => centerAPI.getSearchCenters(page, perPage),
        staleTime: 1000 * 60 * 1,
        gcTime: 1000 * 60 * 3,
    });

    return {
        data,
    };
};

export const useGetCenters = () => {
    const { data } = useSuspenseQuery({
        queryKey: [queryKeys.getCenters],
        queryFn: () => centerAPI.getCenters(),
    });

    return {
        data,
    };
};

export const usePostCenter = () => {
    return useMutation({ mutationFn: centerAPI.postCenter });
};

export const useDeleteCenter = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: centerAPI.deleteCenter,
        onMutate: async (variables) => {
            await queryClient.cancelQueries({
                queryKey: [queryKeys.getCenters],
            }); // 쿼리 요청 취소

            const oldData = queryClient.getQueryData([queryKeys.getCenters]); // 현재 캐시된 데이터 가져오기

            // 새로운 데이터로 가공
            const newData = { ...oldData }; // 객체 복사

            newData.data = [...oldData.data].filter(
                // 내부 데이터 복사
                (item) => item.id !== variables,
            );

            queryClient.setQueryData([queryKeys.getCenters], {
                ...newData, // 새로운 데이터로 캐시에 저장
            });

            return { oldData }; // 다음 context로 넘기기 위해 반환
        },
        onError: (err, context) => {
            // 에러 발생시 이전 데이터로 캐시 저장
            queryClient.setQueryData([queryKeys.getCenters], {
                ...context.oldData,
            });
        },
    });
};
