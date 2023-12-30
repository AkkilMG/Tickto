import { post } from "../database/database";

 
export const getAllPostCategories = async () => {
    /**
     * @description: 
     */
    try {
        return { success: true }
    } catch (e) {
        console.log(`/userSignup: ${e.message}`);
        return { success: false, message: "" }
    }
}