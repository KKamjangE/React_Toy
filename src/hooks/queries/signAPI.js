import { useMutation } from "@tanstack/react-query";
import signAPI from "../../api/signAPI";
import { useMemberStore, useSignStore } from "../../store/store";
import { useNavigate } from "react-router-dom";

export const usePostSignIn = () => {
    const { setAccessToken, setMemberName } = useMemberStore();
    const navigater = useNavigate();
    return useMutation({
        mutationFn: signAPI.postSignIn,
        onSuccess: (data) => {
            if (data.statusCode === 200) {
                setAccessToken(data.data.jwt);
                setMemberName(data.data.userName);
                navigater("/");
            }
            alert(data.responseMessage);
        },
    });
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
