import express from "express";
const router = express.Router();

/* --- Posts --- */

router.get("/", async(req, res) => {
    /**
     * @description: To Retrieve all blog posts.
     */
    try {
        return res.status(200).json({ success: true });
    } catch (e) {
        console.log(`>app/: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});


router.get("/:id", async(req, res) => {
    /**
     * @description: To Retrieve a specific blog post by ID.
     */
    try {
        return res.status(200).json({ success: true });
    } catch (e) {
        console.log(`>app/: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});


router.post("/", async(req, res) => {
    /**
     * @description: To Create a new blog post.
     */
    try {
        return res.status(200).json({ success: true });
    } catch (e) {
        console.log(`>app/: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});


router.post("/:id", async(req, res) => {
    /**
     * @description: To Update a specific blog post by ID.
     */
    try {
        return res.status(200).json({ success: true });
    } catch (e) {
        console.log(`>app/: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});


router.delete("/:id", async(req, res) => {
    /**
     * @description: To delete a specific blog post by ID.
     */
    try {
        return res.status(200).json({ success: true });
    } catch (e) {
        console.log(`>app/: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});

export const Posts = router