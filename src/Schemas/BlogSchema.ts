import mongoose, { Schema } from "mongoose";
import { Blog } from "../Types";

const blogSchema = new Schema<Blog>({
  Title: { type: Schema.Types.String, required: true },
  ShortDescription: { type: Schema.Types.String, required: true },
  Overview: { type: Schema.Types.String, required: true },
  Author: { type: Schema.Types.String, required: true },
  Footer: { type: Schema.Types.String, required: true },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
