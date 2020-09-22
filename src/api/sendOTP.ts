import { SEND_OTP } from "./Config";
import { postRequest } from "./postRequest";

export const sendOTP = async (values: any) => {
    try {
        const res = await postRequest(SEND_OTP, values);
        if (res.data.error === 0) {
            return res.data.phone;
        } else if (res.data.error === 1) {
            return 1;
        } else {
            return 2;
        }
    } catch (err) {
        console.log(err);
        return -1;
    }
};
