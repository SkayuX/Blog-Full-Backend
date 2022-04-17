import { Router } from "express";
import BlogSchema from "../Schemas/BlogSchema";

const router = Router();

router.get("/getall", async (req, res) => {
    const idk = await BlogSchema.find()

    const array: any[] = [];

    idk.forEach(i => {
        array.push({ Title: i.Title, ShortDescription: i.ShortDescription, Author: i.Author, RedirectID: i._id })
    })

  res.send({ 
        success: true,
        data: array,
    })
});

export default router;
