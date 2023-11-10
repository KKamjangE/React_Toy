import { useMutation } from "@tanstack/react-query";
import signAPI from "../../api/signAPI";
import { useSignStore } from "../../store/store";
export const usePostSignIn = () => {
    return useMutation({ mutationFn: signAPI.postSignIn });
};

export const usePostSignUp = () => {
    const { setIsSignIn } = useSignStore();
    return useMutation({
        mutationFn: signAPI.postSignUp,
        onSuccess: (data) => {
            alert(data.responseMessage);
            if (data.statusCode === 200) {
                setIsSignIn();
            }
        },
    });
};
