import { VERIFY_OTP } from "./Config";
import { postRequest } from "./postRequest";

export const verifyOTP = async (values: any) => {
  try {
    const res = await postRequest(VERIFY_OTP, values);
    if (res.data.error === 1) {
      return 1;
    } else if (res.data.error === 0) {
      return res.data.phone;
    }
  } catch (err) {
    console.log(err);
    return -1;
  }
};
