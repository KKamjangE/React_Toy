export const BASE_URL = "http://localhost:8080"; // 백엔드 base url

export const POTAL_URL = "https://api.odcloud.kr/api/15077586/v1"; // 공공 데이터 포털 base url

// endPoint 객체
export const API_PATH = {
    GET_SEARCH_CENTERS: (page, perPage) =>
        `/centers?page=${page}&perPage=${perPage}&serviceKey=${
            import.meta.env.VITE_POTAL_SECRET_KEY
        }`,
    POST_CENTER: "/center",
    GET_CENTERS: "/center",
    DELETE_CENTER: (idx) => `/center?idx=${idx}`,
};
