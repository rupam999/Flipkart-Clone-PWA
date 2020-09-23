import { GET_PRODUCT } from "./Config";
import { getRequest } from "./getRequest";

export const getProducts = async (keyword: string = "") => {
    try {
        const response = await getRequest(GET_PRODUCT, { keyword });
        if (response.data.error === 0) {
            return response.data.result;
        } else {
            return 1;
        }
    } catch {
        return 1;
    }
};
