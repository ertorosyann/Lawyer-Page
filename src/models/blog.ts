import mongoose, { models } from "mongoose";

const blogSchema = new mongoose.Schema({
  image: { type: String },
  titile: { type: String },
});

const Blog = models.Laywer || mongoose.model("Blog", blogSchema);

export default Blog;
