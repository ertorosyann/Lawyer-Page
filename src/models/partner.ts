import mongoose, { models } from "mongoose";

const partnerSchema = new mongoose.Schema({
  image: { type: String },
  titile: { type: String },
});

const Partner = models.Laywer || mongoose.model("Partner", partnerSchema);

export default Partner;
