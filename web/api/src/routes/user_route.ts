import express from "express";
import { verifyToken } from "../workers/auth";
import { infoOfUser, userSignin, userSignup } from "../database/dbUser";
import { UserModel, UserSigninModel } from "../workers/model";
const router = express.Router();

/* --- User --- */

router.post("/signup", async(req, res) => {
    /**
     * @description: To signup to learnwithakkil
     */
    try {
        var data: UserModel = req.body;
        var response = await userSignup(data);
        return res.status(200).json(response);
    } catch (e) {
        console.log(`>app/signup: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});

router.post("/signin", async(req, res) => {
    /**
     * @description: To Signin to learnwithakkil
     */
    try {
        var data: UserSigninModel = req.body;
        var response = await userSignin(data);
        return res.status(200).json(response);
    } catch (e) {
        console.log(`>app/signin: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});

router.get("/info", verifyToken, async(req, res) => {
    /**
     * @description: To get info on user on learnwithakkil
     */
    try {
        const id = req.body.id;
        return res.status(200).json(await infoOfUser(id));
    } catch (e) {
        console.log(`>app/info: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});

export const User = router