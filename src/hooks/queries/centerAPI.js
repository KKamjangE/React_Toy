import { useQuery, useMutation } from "@tanstack/react-query";
import centerAPI from "../../api/centerAPI";
import { useQueryClient } from "@tanstack/react-query";

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
        onSuccess: () => {
            queryClient.invalidateQueries("getCenters");
        },
    });
};
