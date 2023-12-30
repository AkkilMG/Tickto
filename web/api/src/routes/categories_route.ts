import express from "express";
const router = express.Router();

/* --- Categories --- */

router.get("/", async(req, res) => {
    /**
     * @description: To Retrieve all blog categories.
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
     * @description: To Retrieve a specific category by ID.
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
     * @description: To Create a new category.
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
     * @description: To Update a specific category by ID.
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
     * @description: To Delete a specific category by ID.
     */
    try {
        return res.status(200).json({ success: true });
    } catch (e) {
        console.log(`>app/: ${e.message}`);
        res.status(500).json({ success: false, message: 'Something went wrong..' })
        return
    }
});


export const Categories = router