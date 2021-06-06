import axios from "axios";
export const BASE_URL =
  // "";
  "http://localhost:8000";
export const LOGIN = "/api/user/login";
export const REGISTER = "/api/user/register";
export const GET_PRODUCT = "/api/product/find";
export const GET_SEPERATE_PRODUCT = "/api/product/seperate";

export const GET_CATEGORIES = "/api/categories";
export const SEND_OTP = "/api/user/sendOTP";
export const VERIFY_OTP = "/api/user/verifyPhoneNumber";

export default axios.create({
  baseURL: BASE_URL,
});
