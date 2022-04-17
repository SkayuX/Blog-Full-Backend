import { Router } from "express";
import BlogSchema from "../Schemas/BlogSchema";

const router = Router();

router.delete("/delete/:ObjID", async (req, res) => {
  const ObjID = req.params.ObjID;

  if (ObjID) {
    if (ObjID.length === 24) {
    const doesExist = await BlogSchema.findOne({ _id: ObjID });

    if (doesExist) {
      doesExist.delete();

      return res.send({
        success: true,
        data: { message: "Successfully deleted post!", code: 200 },
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
