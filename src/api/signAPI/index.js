import { API_PATH } from "@/api/api";
import { postAPI } from "@/api/axios";

const postSignIn = (data) => {
    return postAPI({ endPoint: API_PATH.POST_SIGN_IN, data });
};

const postSignUp = (data) => {
    return postAPI({ endPoint: API_PATH.POST_SIGN_UP, data });
};

export default {
    postSignIn,
    postSignUp,
};
