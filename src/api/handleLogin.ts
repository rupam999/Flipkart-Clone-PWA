import { LOGIN } from "./Config";
import { postRequest } from "./postRequest";

export const handleLogin = async (values: any) => {
  try {
    const response = await postRequest(LOGIN, values);

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log("Error at handle login", error);
    return -1;
  }
};
