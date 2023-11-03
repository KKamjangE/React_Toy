import { API_PATH } from "../api";
import { getPotalAPI } from "../axios";

const getCenters = (page, perPage) =>
    getPotalAPI({
        endPoint: API_PATH.GET_CENTERS(page, perPage),
    });

export default {
    getCenters,
};
