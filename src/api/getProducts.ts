import { GET_PRODUCT } from "./Config";
import { getRequest } from "./getRequest";

export const getProducts = async (search?, page?) => {
  try {
    const response = await getRequest(GET_PRODUCT, {
      search,
      page,
    });
    return response.data;
  } catch {
    return -1;
  }
};
