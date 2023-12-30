import { comments } from "../database/database";

 
export const getComment = async () => {
    /**
     * @description: 
     */
    try {
        return { success: true }
    } catch (e) {
        console.log(`/createComment: ${e.message}`);
        return { success: false, message: "" }
    }
}

export const createComment = async () => {
    /**
     * @description: 
     */
    try {
        return { success: true }
    } catch (e) {
        console.log(`/createComment: ${e.message}`);
        return { success: false, message: "" }
    }
}

export const updateComment = async () => {
    /**
     * @description: 
     */
    try {
        return { success: true }
    } catch (e) {
        console.log(`/createComment: ${e.message}`);
        return { success: false, message: "" }
    }
}
 
export const deleteComment = async () => {
    /**
     * @description: 
     */
    try {
        return { success: true }
    } catch (e) {
        console.log(`/createComment: ${e.message}`);
        return { success: false, message: "" }
    }
}