import { API_PATH } from "../api";
import { deleteAPI, getAPI, getPotalAPI, postAPI } from "../axios";

const getSearchCenters = (page, perPage) =>
    getPotalAPI({
        endPoint: API_PATH.GET_SEARCH_CENTERS(page, perPage),
    });

const postCenter = (data) => {
    postAPI({ endPoint: API_PATH.POST_CENTER, data });
};

const getCenters = () => {
    getAPI({ endPoint: API_PATH.GET_CENTERS });
};

const deleteCenter = (idx) => {
    deleteAPI({ endPoint: API_PATH.DELETE_CENTER(idx) });
};

export default {
    getSearchCenters,
    postCenter,
    getCenters,
    deleteCenter,
};