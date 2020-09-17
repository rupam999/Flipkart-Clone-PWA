import axios from 'axios';
export const BASE_URL = 
    "https://cors-anywhere.herokuapp.com/https://e-commerce-pwa-backend.herokuapp.com/";
    // "http://localhost:8000";
export const LOGIN = "/api/user/login"
export const SEND_OTP = "/api/user/sendOTP"
export const VERIFY_OTP = "/api/user/verifyPhoneNumber"
export const REGISTER = "/api/user/register"
export const GET_PRODUCT = "/api/products"

export default axios.create({
    baseURL: BASE_URL,
})