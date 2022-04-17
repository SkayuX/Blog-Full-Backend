import { Router } from "express";
import BlogSchema from "../Schemas/BlogSchema";

const router = Router();

router.get("/get/:ObjID", async (req, res) => {
  const ObjID = req.params.ObjID;

  if (ObjID) {

    if (ObjID.length === 24) {
      const doesExist = await BlogSchema.findOne({ _id: ObjID });

      if (doesExist) {
        return res.send({
          success: true,
          data: {
            post: {
              Title: doesExist.Title,
              ShortDescription: doesExist.ShortDescription,
              Overview: doesExist.Overview,
              Author: doesExist.Author,
              Footer: doesExist.Footer,
            },
            code: 200,
          },
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
