import mongoose, { models } from "mongoose";

const partnerSchema = new mongoose.Schema({
  image: { type: String },
  description: { type: String },
});

const Partner = models.Partner || mongoose.model("Partner", partnerSchema);

export default Partner;
