import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import centerAPI from "../../api/centerAPI";

export const useGetSearchCenters = (page, perPage) => {
    const { data, isSuccess, isLoading, isError, refetch } = useQuery({
        queryKey: ["getSearchCenters"],
        queryFn: () => {
            return centerAPI.getSearchCenters(page, perPage);
        },
        enabled: false,
    });

    return {
        data,
        isSuccess,
        isLoading,
        isError,
        refetch,
    };
};

export const useGetCenters = () => {
    const { data, isSuccess, isLoading, isError } = useQuery({
        queryKey: ["getCenters"],
        queryFn: () => {
            return centerAPI.getCenters();
        },
    });

    return {
        data,
        isSuccess,
        isLoading,
        isError,
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
            await queryClient.cancelQueries({ queryKey: ["getCenters"] }); // 쿼리 요청 취소

            const oldData = queryClient.getQueryData(["getCenters"]); // 현재 캐시된 데이터 가져오기

            // 새로운 데이터로 가공
            const newData = { ...oldData }; // 객체 복사

            newData.data = [...oldData.data].filter(
                // 내부 데이터 복사
                (item) => item.id !== variables
            );

            queryClient.setQueryData(["getCenters"], {
                ...newData, // 새로운 데이터로 캐시에 저장
            });

            return { oldData }; // 다음 context로 넘기기 위해 반환
        },
        onError: (err, context) => {
            // 에러 발생시 이전 데이터로 캐시 저장
            queryClient.setQueryData(["getCenters"], { ...context.oldData });
        },
    });
};
