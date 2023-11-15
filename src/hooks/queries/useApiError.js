import { useCallback } from "react";

const useApiHandler = () => {
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

const handler500 = () => {
    console.log("Internal Server Error");
};

const handler40010001 = () => {
    return;
};

const handlers = {
    default: defaultHandler,
    400: {
        10001: handler40010001,
    },
    500: {
        default: handler500,
    },
};

export default useApiHandler;
