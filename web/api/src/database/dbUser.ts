import { UserModel, UserSigninModel } from "../workers/model";
import { user } from "../database/database";
import { checkPassword, encrypt, hashPassword } from "../workers/crypt";
import { createToken, validatePassword } from "../workers/auth";


export const userSignup = async (data: UserModel) => {
    /**
     * @description: To signup a user of the platform.
     */
    try {
        if (await user.findOne({ email: data.email })) {
            return { success: false, message: "The email already exists.." }
        }
        if (!(await validatePassword(data.pass))) {
            return { success: false, message: "Check your password whether it fits the criterias." }
        }
        data.admin = false;
        data.pass = await hashPassword(data.pass);
        const signupData = new user(data);
        const info = await signupData.save();
        return { success: true }
    } catch (e) {
        console.log(`/userSignup: ${e.message}`);
        return { success: false, message: "Something went wrong..." }
    }
}

export const userSignin = async (data: UserSigninModel) => {
    /**
     * @description: To signin a user of the platform.
     */
    try {
        var req = await user.findOne({ email: data.email })
        if (req && (await checkPassword(data.pass, req.pass))){
            let token = await createToken(req._id.toString());
            if (!token.success) {
                return { success: false, message: token.message }
            }
            return { success: true, token: token.token }
        } else if (await user.findOne({ email: data.email })) {
            return { success: false, message: "Check your password." }
        } else {
            return { success: false, message: "Check your email & password" }
        }
    } catch (e) {
        console.log(`/userSignin: ${e.message}`);
        return { success: false, message: "Something went wrong..." }
    }
}

export const isUser = async (id: string) => {
    /**
     * @description: 
     */
    try {
        if (await user.findOne({ _id: id })) { return true } else { return false }
    } catch (e) {
        console.log(`/isUser: ${e.message}`);
        return false
    }
}

export const infoOfUser = async (id: string) => {
    /**
     * @description: 
     */
    try {
        var data: UserModel = await user.findOne({ _id: id });
        if (data) {
            delete data['pass'];
            return { success: true, data: data }
        }
    } catch (e) {
        console.log(`/infoOfUser: ${e.message}`);
        return { success: false, message: "Something went wrong..." }
    }
}


