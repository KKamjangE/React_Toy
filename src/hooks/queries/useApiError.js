import { useCallback } from "react";
import { toast } from "react-toastify";

const useApiError = () => {
    const handleError = useCallback((error) => {
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
    alert(httpMessage);
};

const handler409 = () => {
    toast.error("409 Error");
};

const handler40010001 = () => {
    return;
};

const handler500 = () => {
    toast.error("서버에서 알 수 없는 문제가 발생하였습니다.");
};

const handlers = {
    default: defaultHandler,
    409: {
        default: handler409,
        10001: handler40010001,
    },
    500: {
        default: handler500,
    },
};

export default useApiError;
