const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  media: { type: String },
  status: { type: String, enum: ["pending","in-progress","resolved"], default: "pending" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  anonymous: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Report", reportSchema);