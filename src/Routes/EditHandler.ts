import { Router } from "express";
import BlogSchema from "../Schemas/BlogSchema";

const router = Router();

router.patch("/edit/:ObjID", async (req, res) => {
  const ObjID = req.params.ObjID;

  const { Title, ShortDescription, Overview, Author, Footer } = req.body;

  if (ObjID) {
    if (ObjID.length === 24) {
      const doesExist = await BlogSchema.findOne({ _id: ObjID });
      
    if (doesExist) {
      await doesExist.update({
        Title,
        ShortDescription,
        Overview,
        Author,
        Footer,
      });

      return res.send({
        success: true,
        data: { message: "Successfully updated post!", code: 200 },
      });
    } else {
      return res.send({
        success: false,
        data: { message: "No posts found by this ID!", code: 404 },
      });
    }
    } else {
      return res.send({
        success: false,
        data: { message: "No posts found by this ID!", code: 404 },
      });
    }
  } else {
    return res.send({
      success: false,
      data: { message: "No Post ID provided!", code: 400 },
    });
  }
});

export default router;
