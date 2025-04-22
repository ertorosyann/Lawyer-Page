import mongoose, { models } from "mongoose";

const lawyerSchema = new mongoose.Schema({
  image: { type: String },
  name: { type: String },
  surname: { type: String },
  description: { type: String },
});

const Lawyer = models.Lawyer || mongoose.model("Lawyer", lawyerSchema);

export default Lawyer;
