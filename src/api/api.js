export const BASE_URL = "http://localhost:8080"; // server base url

// api url path
export const API_PATH = {
    GET_SEARCH_CENTERS: (page, perPage) =>
        `/centers?page=${page}&perPage=${perPage}&serviceKey=${
            import.meta.env.VITE_POTAL_SECRET_KEY
        }`,
    POST_CENTER: "/center",
    GET_CENTERS: "/center",
    DELETE_CENTER: (idx) => `/center?idx=${idx}`,
    POST_SIGN_IN: "/sign/in",
    POST_SIGN_UP: "/sign/up",
};
