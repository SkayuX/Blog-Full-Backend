import { Router } from "express";
import BlogSchema from "../Schemas/BlogSchema";

const router = Router();

router.post("/create", async (req, res) => {
  const { Title, ShortDescription, Overview, Author, Footer } = req.body;

  if (!Title || !ShortDescription || !Overview || !Author || !Footer) {
    return res.send({
      success: false,
      data: { message: "Missing data!", code: 400 },
    });
  }

  const newBlogSchema = await new BlogSchema({
    Title,
    ShortDescription,
    Overview,
    Author,
    Footer,
  }).save();

  res.send({
    success: true,
    data: { createdBlogID: newBlogSchema._id, code: 200 },
  });
});

export default router;
