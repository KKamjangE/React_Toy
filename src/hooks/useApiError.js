import { useCallback } from "react";
import { toast } from "react-toastify";

const useApiError = () => {
    const handleError = useCallback((error) => {
        if (error.response === undefined) {
            handlers.default(error.message);
            return;
        }

        const httpStatus = error.response.status;
        const serviceCode = error.response.data.code;
        const httpMessage = error.response.data.message;

        if (handlers[httpStatus][serviceCode]) {
            handlers[httpStatus][serviceCode]();
            return;
        }

        if (handlers[httpStatus]) {
            handlers[httpStatus].default();
            return;
        }

        handlers.default(httpMessage);
    }, []);

    return { handleError };
};

const defaultHandler = (httpMessage) => {
    toast.error(httpMessage);
};

const handler409 = () => {
    toast.error("409 Error");
};

const handler40910001 = () => {
    toast.error("아이디 또는 비밀번호가 일치하지 않습니다.");
};

const handler500 = () => {
    toast.error("서버에서 알 수 없는 문제가 발생하였습니다.");
};

const handlers = {
    default: defaultHandler,
    409: {
        default: handler409,
        10001: handler40910001,
    },
    500: {
        default: handler500,
    },
};

export default useApiError;
