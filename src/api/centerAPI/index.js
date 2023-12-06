import { API_PATH } from "@/api/api";
import { deleteAPI, getAPI, getPotalAPI, postAPI } from "@/api/axios";

const getSearchCenters = (page, perPage) => {
    return getPotalAPI({
        endPoint: API_PATH.GET_SEARCH_CENTERS(page, perPage),
    });
};

const postCenter = (data) => {
    return postAPI({ endPoint: API_PATH.POST_CENTER, data });
};

const getCenters = () => {
    return getAPI({ endPoint: API_PATH.GET_CENTERS });
};

const deleteCenter = (idx) => {
    return deleteAPI({ endPoint: API_PATH.DELETE_CENTER(idx) });
};

export default {
    getSearchCenters,
    postCenter,
    getCenters,
    deleteCenter,
};
