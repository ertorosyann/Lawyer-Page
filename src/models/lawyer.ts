import mongoose, { models } from "mongoose";

const lawyerSchema = new mongoose.Schema({
  image: { type: String },
  name_en: { type: String },
  surname_en: { type: String },
  description_en: { type: String },
  name_am: { type: String },
  surname_am: { type: String },
  description_am: { type: String },
});

const Lawyer = models.Lawyer || mongoose.model("Lawyer", lawyerSchema);

export default Lawyer;
