import express from "express";


const router = express.Router();


router.get("/", (req, res) => {
    res.json({

        "Get_experiences": "/api/experiences/get/experiences",
        "Post_experiences": "/api/experiences/post/allexperience",
        "Post_projects": "/api/projects/post/projects",
        "Get_projects": "/api/projects/get/projects",
    });
});

export default router;