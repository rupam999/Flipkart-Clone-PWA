import { REGISTER } from "./Config";
import { postRequest } from "./postRequest";

export const handleSignup = async (values: any) => {
  try {
    const response = await postRequest(REGISTER, values);
    return response.data;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
