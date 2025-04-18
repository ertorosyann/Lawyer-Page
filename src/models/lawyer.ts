import mongoose, { models } from "mongoose";

const lawyerSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String },
});

const Lawyer = models.Lawyer || mongoose.model("Lawyer", lawyerSchema);

export default Lawyer;
