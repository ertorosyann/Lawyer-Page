import mongoose, { models } from "mongoose";

const blogSchema = new mongoose.Schema({
  image: { type: String },
  description: { type: String },
});

const Blog = models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
