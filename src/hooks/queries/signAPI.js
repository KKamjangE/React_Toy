import { useMutation } from "@tanstack/react-query";
import signAPI from "../../api/signAPI";
import { useMemberStore, useSignStore } from "../../store/store";
import { useNavigate } from "react-router-dom";

export const usePostSignIn = () => {
    const { setMemberInfo, setIsSignIn } = useMemberStore((state) => ({
        setMemberInfo: state.setMemberInfo,
        setIsSignIn: state.setIsSignIn,
    }));
    const navigater = useNavigate();
    return useMutation({
        mutationFn: signAPI.postSignIn,
        onSuccess: (data) => {
            setMemberInfo({
                accessToken: data.data.jwt,
                memberName: data.data.userName,
            });
            setIsSignIn(true);
            navigater("/");
        },
    });
};

export const usePostSignUp = () => {
    const { setIsSignInView } = useSignStore((state) => ({
        setIsSignInView: state.setIsSignInView,
    }));
    return useMutation({
        mutationFn: signAPI.postSignUp,
        onSuccess: (data) => {
            if (data.statusCode === 200) {
                setIsSignInView();
            }
        },
    });
};
