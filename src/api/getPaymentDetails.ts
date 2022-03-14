import { getRequest } from "./getRequest";
import { GET_PAYMENT_DETAILS } from "./Config";

export const getPaymentDetails = async () => {
  try {
    const response = await getRequest(GET_PAYMENT_DETAILS);
    return response.data;
  } catch (error) {
    console.log("Error at Payment", error);
    return -1;
  }
};
