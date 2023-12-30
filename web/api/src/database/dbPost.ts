import { PostModel } from "../workers/model";
import { post } from "../database/database";


export const getAllPost = async () => {
    /**
     * @description: To get all post from the post collection.
     */
    try {
        return { success: true, data: await post.find({}) }
    } catch (e) {
        console.log(`/createPost: ${e.message}`);
        return { success: false, message: "" }
    }
}

export const getPost = async (id: string) => {
    /**
     * @description: To get post with certain id from the post collection.
     */
    try {
        return { success: true, data: await post.find((id.includes('+'))?({ _id: id }):({ route: id })) }
    } catch (e) {
        console.log(`/createPost: ${e.message}`);
        return { success: false, message: "" }
    }
}

export const createPost = async (data: PostModel) => {
    /**
     * @description: To create/add a post to the database.
     */
    try {
        const postData = new post(data);
        const info = await postData.save();
        return { success: true }
    } catch (e) {
        console.log(`/createPost: ${e.message}`);
        return { success: false, message: "" }
    }
}

export const updatePost = async (id: string) => {
    /**
     * @description: To update the created post with some changes.
     */
    try {
        await post.updateOne(
            (id.includes('+'))?{ _id: id }:{ route: id },
            {  }
        )
        return { success: true }
    } catch (e) {
        console.log(`/createPost: ${e.message}`);
        return { success: false, message: "" }
    }
}

export const deletePost = async (id: string) => {
    /**
     * @description: To delete the post with id.
     */
    try {
        await post.deleteOne({ _id: id })
        return { success: true }
    } catch (e) {
        console.log(`/createPost: ${e.message}`);
        return { success: false, message: "" }
    }
}