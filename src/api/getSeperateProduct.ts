import { getRequest } from './getRequest';
import { GET_SEPERATE_PRODUCT } from './Config';

export const getSeperateProduct = async (values) => {
    try {
        const response = await getRequest(GET_SEPERATE_PRODUCT, values);
        const productDetails = response.data.product;

        if(productDetails._id) {
            return productDetails;
        } else {
            return -1;
        }
    } catch (error) {
        console.log('Error at Seperate Product', error);
        return -1;
    }
}