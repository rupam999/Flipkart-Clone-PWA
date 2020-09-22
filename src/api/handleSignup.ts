import { REGISTER } from "./Config";
import { postRequest } from "./postRequest";
import { storeData } from "../localStorage/storeData";

export const handleSignup = async (values: any) => {
    try {
        const res = await postRequest(REGISTER, values);
        if (res.data.error === 0) {
            storeData("user", values);
            return res.data;
        } else {
            return -1;
        }
    } catch (err) {
        console.log(err);
        return -1;
    }
};
