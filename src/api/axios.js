import axios from "axios";
import qs from "qs";
import { BASE_URL } from "./api";
import { useMemberStore } from "../store/store";

// axios 기본 설정
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
});

// 데이터 포털 요청 기본 설정
export const axiosPotalInstance = axios.create({
    baseURL: import.meta.env.VITE_POTAL_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// endPoint와 data를 쿼리스트링으로 변환
const generateQueryEndPoint = (endPoint, data) => {
    const queryString = qs.stringify(data, {
        addQueryPrefix: true,
    });

    return `${endPoint}${queryString}`;
};

// 요청 config 핸들러
const requestSuccesHandler = (config) => {
    const memberInfo = useMemberStore.getState().memberInfo;

    if (memberInfo.accessToken) {
        config.headers["Authorization"] = `Bearer ${memberInfo.accessToken}`;
    }

    return config;
};

// 요청 에러 핸들러
const requestErrorHandler = (err) => {
    return Promise.reject(err);
};

// 응답 에러 핸들러
const responseErrorHandler = (err) => {
    return Promise.reject(err);
};

// axios 인터셉터
axiosInstance.interceptors.request.use(
    (config) => requestSuccesHandler(config),
    (err) => requestErrorHandler(err)
);
axiosInstance.interceptors.response.use(
    (response) => {
        console.log(response.data);
        return response.data;
    },
    (err) => responseErrorHandler(err)
);

// 공통 get 요청
export const getAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.get(
        data ? generateQueryEndPoint(endPoint, data) : endPoint,
        axiosOption
    );
};

// 공통 post 요청
export const postAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.post(endPoint, data, axiosOption);
};

// 공통 delete 요청
export const deleteAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.delete(endPoint, data, axiosOption);
};

// 공공 데이터 포털 get 요청
export const getPotalAPI = ({ endPoint, data, axiosOption }) => {
    return axiosPotalInstance.get(
        data ? generateQueryEndPoint(endPoint, data) : endPoint,
        axiosOption
    );
};
