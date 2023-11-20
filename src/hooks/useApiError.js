import { toast } from "react-toastify";

const useApiError = () => {
    // useCallback을 사용해 함수 재사용
    const handleError = (error) => {
        // response가 없는 network error 처리
        if (error.response === undefined) {
            handlers.default(error.message);
            return;
        }

        const httpStatus = error.response.status;
        const serviceCode = error.response.data.code;
        const httpMessage = error.response.data.message;

        // 상태코드 + 서비스코드 에러 처리
        if (handlers[httpStatus][serviceCode]) {
            handlers[httpStatus][serviceCode]();
            return;
        }

        // 상태코드만 있는 에러 처리
        if (handlers[httpStatus]) {
            handlers[httpStatus].default();
            return;
        }

        // 그 외의 예상치 못한 에러 처리
        handlers.default(httpMessage);
    };

    return { handleError };
};

const defaultHandler = (httpMessage) => {
    toast.error(httpMessage);
};

const handler404 = () => {
    toast.error("404 Error");
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
    404: {
        default: handler404,
    },
    409: {
        default: handler409,
        10001: handler40910001,
    },
    500: {
        default: handler500,
    },
};

export default useApiError;
