/**
 * @author: @AkkilMG
 */

import express from "express";
const router = express.Router();

/* --- Comments --- */

router.get("/:postId", async(req, res) => {
    /**
     * @description: Retrieve comments for a specific post.
     */
    try {
        return res.status(200).json({ success: true });
    } catch (e) {
        console.log(`>app/: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});

router.post("/:postId", async(req, res) => {
    /**
     * @description: To Add a comment to a specific post.
     */
    try {
        return res.status(200).json({ success: true });
    } catch (e) {
        console.log(`>app/: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});

router.put("/:postId", async(req, res) => {
    /**
     * @description: To Update a specific comment on a post.
     */
    try {
        return res.status(200).json({ success: true });
    } catch (e) {
        console.log(`>app/: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});

router.delete("/:postId/:commentId", async(req, res) => {
    /**
     * @description: To Delete a specific comment on a post.
     */
    try {
        return res.status(200).json({ success: true });
    } catch (e) {
        console.log(`>app/: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});


export const Comments = router