import { useMutation } from "@tanstack/react-query";
import signAPI from "../../api/signAPI";

export const usePostSignIn = () => {
    return useMutation({ mutationFn: signAPI.postSignIn });
};

export const usePostSignUp = () => {
    return useMutation({ mutationFn: signAPI.postSignUp });
};
